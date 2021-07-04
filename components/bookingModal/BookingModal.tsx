import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import {
    useBookingCancelReject,
    useBookingCancelReq,
    useBookingFindByCode,
    useBookingUpdate,
} from "../../hook/useBooking";
import { IUseModal } from "../../hook/useModal";
import { useBankDepositConfirm, useBankRefund } from "../../hook/usePayment";
import { useCopy } from "../../hook/useUpdate";
import { AppContext } from "../../pages/_app";
import {
    BookingStatus,
    GENDER,
    PaymentStatus,
    PayMethod,
    ProductStatus,
} from "../../types/api";
import {
    bankrefundTransInfo,
    determinedKr,
    genderToKR,
    paymentStatus,
    paymentStatus2,
    payMethodToKR,
    peopleCurrentCountBracket,
    personCountBracket,
    productStatus,
} from "../../utils/enumToKr";
import { autoComma, autoHypenPhone } from "../../utils/formatter";
import { omits } from "../../utils/omit";
import { closeModal, openModal } from "../../utils/popUp";
import { yyyymmdd, yyyymmddHHmm } from "../../utils/yyyymmdd";
import { HistoryTable } from "../historyTable/HistoryTable";
import { cardRefund } from "../nice/refund";
import { MyWindowPortal } from "../portalModal/PortalModal";
import { Prompt } from "../promptModal/Prompt";
import { IRefundModalSubmit, RefundModal } from "../promptModal/RefundModal";
import { ITableInfo } from "../recipt/components/TableRender";
import CardRecipt from "../recipt/CreditCardReceipt";
import { BookingStatusBadge, RequestBadge } from "../Status/StatusBadge";
import { Traveler } from "../traveler/Traveler";

export interface IBookingModalInfo {
    code: string;
}

interface IProp extends IUseModal<IBookingModalInfo> {}

type promptTarget = "cancelReq" | "cancelReject";

interface IPromptInfo {
    title?: string;
    target: promptTarget;
}

export const BookingModal: React.FC<IProp> = ({
    info,
    isOpen,
    closeModal: modalClose,
}) => {
    const code = info?.code;
    const [showWindowPortal, setShowWindowPortal] = useState(false);
    const { isSeller, isManager, myProfile } = useContext(AppContext);
    const { item: booking } = useBookingFindByCode(code);
    const [proptTarget, setPomptTarget] = useState<IPromptInfo>({
        title: "",
        target: "cancelReq",
    });
    const [bookingCopy, setBookingCopy] = useCopy(booking);

    const paymentId = booking?.payment?._id;

    const [bookingUpdate, { loading: updateLoading }] = useBookingUpdate({
        onCompleted: ({ BookingUpdate }) => {
            if (BookingUpdate.ok) {
                alert("수정 완료");
            }
        },
    });
    const [bankRefund, { loading: refundLoading }] = useBankRefund({
        onCompleted: ({ BankRefund }) => {
            if (BankRefund.ok) {
                alert("취소가 완료되었습니다");
            }
        },
    });
    const [cancelReq, { loading: reqLoading }] = useBookingCancelReq({
        onCompleted: ({ BookingCancelReq }) => {
            if (BookingCancelReq.ok) {
                alert("취소가 완료 되었습니다.");
            }
        },
    });
    const [cancelReject, { loading: rejectLoading }] = useBookingCancelReject({
        onCompleted: ({ BookingCancelReq }) => {
            if (BookingCancelReq.ok) {
                alert("취소요청이 거절처리 되었습니다.");
            }
        },
    });
    const [bankConfirm, { loading: confirmLoading }] = useBankDepositConfirm({
        onCompleted: ({ BankDepositConfirm }) => {
            if (BankDepositConfirm.ok) {
                alert("입금이 확인되어 예약이 완료처리 되었습니다.");
            }
        },
    });
    const [memo, setMemo] = useState("");

    const totalLoading =
        updateLoading ||
        refundLoading ||
        reqLoading ||
        rejectLoading ||
        confirmLoading;

    const print = () => {
        window.print();
    };

    const handleUpdateBooking = () => {
        if (totalLoading) return;
        bookingUpdate({
            variables: {
                id: booking?._id || "",
                params: {
                    travelers: omits(bookingCopy?.travelers),
                    memo,
                },
            },
        });
    };

    const handleBankDeposit = () => {
        if (totalLoading) return;
        if (!paymentId) return;
        bankConfirm({
            variables: {
                paymentIds: [paymentId || ""],
            },
        });
    };

    const handleCardRefund = (cancelInfo: IRefundModalSubmit) => {
        if (!booking?._id) return;
        cardRefund({
            bookingId: booking?._id,
            price: cancelInfo.cancelPrice.toString(),
            partialCancelCode: "0",
            cancelMemo: cancelInfo.cancelMemo || "",
            reqStatus: cancelInfo.reqStatus,
        })
            .then((response) => {
                console.log({ response });
                if (response.ok) {
                    alert("환불처리가 완료 되었습니다.");
                } else if (response.error) {
                    alert(response.error);
                }
            })
            .catch((e) => {
                const errString = JSON.stringify(e);
                alert("문제가 발생했습니다.\n" + errString);
                console.error(e);
            });
    };

    const handleBankRefund = (cancelInfo: IRefundModalSubmit) => {
        if (totalLoading) return;
        bankRefund({
            variables: {
                params: [
                    {
                        bookingId: booking?._id!,
                        ...cancelInfo,
                    },
                ],
            },
        });
    };

    const handleCancelReject = (reason: string) => {
        if (totalLoading) return;
        cancelReject({
            variables: {
                bookingId: booking?._id!,
                reason,
            },
        });
    };

    const handleOpenPrompt = (target: promptTarget, title?: string) => () => {
        if (totalLoading) return;
        setPomptTarget({
            target,
            title,
        });
        openModal("#PromptModal")();
    };

    const handleCancelReq = (reason: string) => {
        cancelReq({
            variables: {
                bookingId: booking?._id!,
                reason,
            },
        });
    };

    const handleOpenRefundModal = () => {
        openModal("#RefundModal")();
    };

    const rejectHandle = (() => {
        if (proptTarget?.target === "cancelReject") return handleCancelReject;
        if (proptTarget?.target === "cancelReq") return handleCancelReq;
        return () => {};
    })() as (reason: string) => void;

    useEffect(() => {
        if (booking) {
            setMemo(booking.memo || "");
        }
    }, [booking?._id]);

    if (!booking) {
        return null;
    }
    const { product, payment, bankTransInfo } = booking;

    const isAuthor = product.author?._id === myProfile?._id;
    const isBuyer = booking.booker?._id === myProfile?._id;
    const isComplete = booking.status === BookingStatus.COMPLETE;
    const isBankBook =
        booking.payMethod === PayMethod.BANK ||
        booking.payMethod === PayMethod.HAND;
    const isReadyBook = booking.status === BookingStatus.READY;
    const isCanceled = booking.status === BookingStatus.CANCEL;
    const isCancelReq = booking?.isCancelRequest;
    const isCardBooking = booking?.payMethod === PayMethod.NICEPAY_CARD;


    // 취소는 마스터만 가능!
    // 취소 요청이 가능한가:: COMPLETE 상태일때 아마도 해당 판매자 이거나 본인일때 가능할 것 같다.
    const cancelReqAB =
        !isManager && (isAuthor || isBuyer) && isComplete && !isCancelReq;

    // 취소 거절이 가능한가:: CANCEL_REQ 상태일때 이행위는 마스터만 가능하다.
    const cancelDenyAB = isManager && isCancelReq && !isCanceled;

    // 취소가 가능하가:: 마스터일때는 취소가 가능할 것이다.
    const cancelAB = isManager && isComplete;

    // 입금 완료처리:: 입금확인은 사실 마스터만 할 수 있는 부분
    const bankDepositAB = isManager && isBankBook && isReadyBook;

    const approveTable: ITableInfo[] = [
        {
            title: "결제정보",
            infos: [
                [
                    {
                        label: "결제수단",
                        value: payMethodToKR(booking.payMethod),
                    },
                    {
                        label: "결제금액",
                        value: autoComma(booking.bookingPrice),
                    },
                ],
                [
                    {
                        label: "결제일",
                        value: yyyymmdd(booking.createdAt),
                    },
                    {
                        label: "승인일",
                        value: yyyymmdd(booking.payment?.createdAt),
                    },
                ],
            ],
        },
        {
            title: "상품정보",
            infos: [
                [
                    {
                        label: "상품명",
                        value: product.title,
                    },
                    {
                        label: "예약인원",
                        value: booking.totalCount,
                    },
                ],
                [
                    {
                        label: "인원정보",
                        value: personCountBracket(booking),
                    },
                    {
                        label: "상품상태",
                        value: productStatus(product.status),
                    },
                ],
            ],
        },
    ];

    const cancelTable: ITableInfo[] | undefined =
        booking.status === BookingStatus.CANCEL
            ? [
                  {
                      title: "결제정보",
                      infos: [
                          [
                              {
                                  label: "결제수단",
                                  value: payMethodToKR(booking.payMethod),
                              },
                              {
                                  label: "결제금액",
                                  value: autoComma(booking.bookingPrice),
                              },
                          ],
                          [
                              {
                                  label: "취소일",
                                  value: yyyymmdd(booking.cancelDate),
                              },
                              {
                                  label: "취소승인일",
                                  value: yyyymmdd(booking.payment?.cancelDate),
                              },
                          ],
                          [
                              {
                                  label: "취소금",
                                  value: booking.payment?.totalCancelPrice || 0,
                              },
                              {
                                  label: "부분취소 여부",
                                  value: booking.payment?.isPartialCancel
                                      ? "부분취소"
                                      : "전체취소",
                              },
                          ],
                      ],
                  },
                  {
                      title: "상품정보",
                      infos: [
                          [
                              {
                                  label: "상품명",
                                  value: product.title,
                              },
                              {
                                  label: "예약인원",
                                  value: booking.totalCount,
                              },
                          ],
                          [
                              {
                                  label: "인원정보",
                                  value: personCountBracket(booking),
                              },
                              {
                                  label: "상품상태",
                                  value: productStatus(product.status),
                              },
                          ],
                      ],
                  },
              ]
            : undefined;

    // const reciptOpen = () => {
    //     printRecipt({
    //         approveTable,
    //         cancelTable,
    //     });
    // };

    const toggleWindowPortal = () => {
        setShowWindowPortal(!showWindowPortal);
    };

    return (
        <div
            id="BookingModal"
            className={`popup_bg_full ${isOpen && "OPEN_MODAL"}`}
        >
            {showWindowPortal && (
                <MyWindowPortal
                    openParam={{
                        left: 100,
                        top: 100,
                        height: 600,
                        width: 500,
                    }}
                    closeWindowPortal={() => {
                        setShowWindowPortal(false);
                    }}
                >
                    <CardRecipt
                        approveTable={approveTable}
                        cancelTable={cancelTable}
                    />
                </MyWindowPortal>
            )}
            <div className="BookingModal__in in_txt master_popup">
                <div className="BookingModal__headerWrap">
                    <h3 className="BookingModal__headerTitle">예약 상세정보</h3>
                    <a
                        className="BookingModal__headerClose close_icon"
                        onClick={modalClose}
                    >
                        <i className="flaticon-multiply"></i>
                    </a>
                </div>
                <div className="BookingModal__body">
                    <div className="page">
                        <div className="info_txt">
                            <span className="r-number">
                                예약번호: <i>{booking.code}</i>
                            </span>
                            <span className="r-day">
                                예약일: {yyyymmdd(booking.createdAt)}
                            </span>
                            {booking.isCancelRequest && <span>[취소요청]</span>}
                            {booking.payment && (
                                <span className="pay-day">
                                    결제일:
                                    {yyyymmdd(booking.payment?.createdAt)}
                                </span>
                            )}
                            <button onClick={print} className="btn">
                                <i className="flaticon-print mr5"></i>프린터
                            </button>
                        </div>
                        <div className="info_table goodsinfo">
                            <div className="tr">
                                <div className="top01">
                                    {/* <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div> */}
                                    <div className="info goods__info_title">
                                        <span className="ct">
                                            {product.category?.label}
                                        </span>
                                        <span className="g-number">
                                            상품번호: {product.code}
                                        </span>
                                        <strong className="title">
                                            {product.title}
                                        </strong>
                                        <div className="txt">
                                            <span className="goods-state1">
                                                확정여부:
                                                {determinedKr(
                                                    product.determined
                                                )}
                                                (
                                                {peopleCurrentCountBracket(
                                                    product
                                                )}
                                            </span>
                                            <span className="goods-state2">
                                                상품상태:
                                                {productStatus(product.status)}
                                            </span>
                                            <span className="goods-state2">
                                                판매자: {product.author?.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="top02 BookingModal__top02">
                                    <div className="align BookingModal__top02Align">
                                        <span className="s-day">
                                            출발일:
                                            {yyyymmdd(product.startDate)}
                                        </span>
                                        <span className="where">
                                            출발장소: {product.startPoint}
                                        </span>
                                    </div>
                                </div>
                                <div className="top03 BookingModal__statusBox">
                                    <BookingStatusBadge
                                        status={booking.status!}
                                    />
                                    <RequestBadge
                                        className="ml5"
                                        {...booking}
                                    />
                                    {booking.status === BookingStatus.READY && (
                                        <span>
                                            <i className="jandaicon-info2"></i>
                                            예약은 걸었으나 입금이 되지
                                            않았습니다. <br />
                                            24시간 이내에 입금을 하지 않으시면
                                            예약은 취소 됩니다.
                                            {/*  <br /> 남은시간
                                            {dayjs(booking.leftTime).format(
                                                "HH:mm"
                                            )} */}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="info_page">
                            <div className="left_div">
                                <h4>
                                    예약 정보
                                    <button
                                        style={{
                                            marginLeft: "5px",
                                            lineHeight: "26px!important",
                                        }}
                                        className="btn mini2"
                                        onClick={toggleWindowPortal}
                                    >
                                        전표출력
                                    </button>
                                </h4>
                                <div className="info_table w50">
                                    <div className="tr">
                                        <div
                                            className="th01"
                                            title="예약자가 예약시에 입력한 메모입니다."
                                        >
                                            예약메모
                                        </div>
                                        <div className="td01">
                                            <span className="lineHeight-2">
                                                {booking.message}
                                            </span>
                                        </div>
                                        <div className="th02">예약일시</div>
                                        <div className="td02">
                                            <span>
                                                {yyyymmddHHmm(
                                                    booking.createdAt
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="tr">
                                        <div className="th01">결제수단</div>
                                        <div className="td01">
                                            <span className="lineHeight-2">
                                                {payMethodToKR(
                                                    booking.payMethod
                                                )}
                                            </span>
                                        </div>
                                        <div className="th02">결제일시</div>
                                        <div className="td02">
                                            <span>
                                                {yyyymmddHHmm(
                                                    booking.payment?.createdAt
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    {booking.bankTransInfo && (
                                        <div className="tr">
                                            <div className="th01">입금자</div>
                                            <div className="td01">
                                                <span>
                                                    {
                                                        booking.bankTransInfo
                                                            ?.bankTransfter
                                                    }
                                                </span>
                                            </div>
                                            <div className="th02">환불정보</div>
                                            <div className="td02">
                                                {bankrefundTransInfo(
                                                    booking.bankTransInfo
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {booking.isCancelRequest && (
                                        <div className="tr">
                                            <div
                                                className="th01"
                                                title="관리자가 최종으로 취소할때 입력한 취소사유입니다."
                                            >
                                                취소사유
                                            </div>
                                            <div className="td01">
                                                <span className="lineHeight-2">
                                                    {booking.cancelMemo}
                                                </span>
                                            </div>
                                            <div className="th02">-</div>
                                            <div className="td02">-</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {payment?.totalCancelPrice ? (
                                <div className="right_div">
                                    <h4>환불 정보</h4>
                                    <div className="info_table w50">
                                        <div className="tr">
                                            <div className="th01">
                                                취소신청일
                                            </div>
                                            <div className="td01">
                                                <span>
                                                    {yyyymmdd(
                                                        booking.cancelDate
                                                    )}
                                                </span>
                                            </div>
                                            <div className="th02">결제상태</div>
                                            <div className="td02">
                                                <span>
                                                    {paymentStatus(
                                                        payment?.status
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="tr">
                                            <div className="th01">환불형태</div>
                                            <div className="td01">
                                                <span>
                                                    {payment?.isPartialCancel
                                                        ? "부분취소"
                                                        : "전체취소"}
                                                </span>
                                            </div>
                                            <div className="th02">환불금액</div>
                                            <div className="td02">
                                                <span>
                                                    {autoComma(
                                                        payment?.totalCancelPrice
                                                    )}
                                                    원
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="info_page">
                            <div className="full_div">
                                <h4>예약자 정보</h4>
                                <div className="info_table peoplelist">
                                    <div className="top_info">
                                        <span className="tt">
                                            선택된 예약 인원
                                        </span>
                                        <span>
                                            총 {booking.totalCount}명 ( 성인
                                            {booking.adultCount} / 소아
                                            {booking.kidCount} / 유아
                                            {booking.babyCount} )
                                        </span>
                                        {/* <span className="float_right">
                                        {booking.bookerInclue ? <i className="menok">예약자-포함</i> :
                                            <i className="menno">예약자-미포함</i>}
                                    </span> */}
                                    </div>
                                    <div className="tr first peoplelist__wrap">
                                        <div className="re01 peoplelist__li">
                                            예약자
                                            {booking.bookerInclue && "(본인)"}
                                        </div>
                                        <div className="re02 peoplelist__li">
                                            예약자명
                                        </div>
                                        <div className="re03 peoplelist__li">
                                            <span>{booking.name}</span>
                                        </div>
                                        <div className="re04 peoplelist__li">
                                            연락처
                                        </div>
                                        <div className="re05 peoplelist__li">
                                            <a
                                                href={`tel:${autoHypenPhone(
                                                    booking.phoneNumber
                                                )}`}
                                            >
                                                {autoHypenPhone(
                                                    booking.phoneNumber
                                                )}
                                            </a>
                                        </div>
                                        <div className="re06 peoplelist__li">
                                            성별
                                        </div>
                                        <div className="re07 peoplelist__li">
                                            <span>
                                                {genderToKR(booking.gender) ||
                                                    "정보없음"}
                                            </span>
                                        </div>
                                        <div className="re08 peoplelist__li">
                                            나이
                                        </div>
                                        <div className="re09 peoplelist__li">
                                            <span>
                                                {booking.age || "정보없음"}
                                            </span>
                                        </div>
                                    </div>
                                    {isSeller && (
                                        <div>
                                            {bookingCopy?.travelers?.map(
                                                (traveler, index) => (
                                                    <Traveler
                                                        isFisrt={index === 0}
                                                        isLast={
                                                            index ===
                                                            bookingCopy
                                                                ?.travelers
                                                                .length -
                                                                1
                                                        }
                                                        handleDelete={() => {
                                                            bookingCopy.travelers.splice(
                                                                index,
                                                                1
                                                            );
                                                            setBookingCopy({
                                                                ...bookingCopy,
                                                            });
                                                        }}
                                                        handleAdd={() => {
                                                            bookingCopy.travelers.push(
                                                                {
                                                                    __typename:
                                                                        "Traveler",
                                                                    age: "",
                                                                    gender:
                                                                        GENDER.FEMALE,
                                                                    name: "",
                                                                    phoneNumber:
                                                                        "",
                                                                }
                                                            );
                                                            setBookingCopy({
                                                                ...bookingCopy,
                                                            });
                                                        }}
                                                        traveler={traveler}
                                                        key={index + "traveler"}
                                                        onChange={() => {
                                                            setBookingCopy({
                                                                ...bookingCopy,
                                                            });
                                                        }}
                                                    />
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <HistoryTable histories={booking.requestHistory} />

                        {isSeller && (
                            <div className="info_page">
                                <h4>메모(판매자)</h4>
                                <div className="write_comment">
                                    <div className="comment_layout">
                                        <ul className="text_box">
                                            <li>
                                                <div className="txta w100">
                                                    <textarea
                                                        onChange={(e) => {
                                                            const val =
                                                                e.currentTarget
                                                                    .value;
                                                            if (
                                                                memo.length >
                                                                3000
                                                            )
                                                                return;
                                                            setMemo(val);
                                                        }}
                                                        value={memo || ""}
                                                        style={{
                                                            height: "100px",
                                                        }}
                                                        placeholder="메모는 꼼꼼하게 체크는 정확하게"
                                                    ></textarea>
                                                </div>
                                            </li>
                                            <li className="tr count">
                                                {memo.length}/3000
                                            </li>
                                        </ul>
                                        <div className="text_box_bottom">
                                            <div className="float_left w50">
                                                <span>
                                                    <i className="jandaicon-info2"></i>
                                                    기존의 메모를 삭제하시면
                                                    되돌릴 수 없습니다. 신중하게
                                                    입력해 주세요.
                                                </span>
                                            </div>
                                            <div className="btn_send float_right">
                                                <button
                                                    onClick={
                                                        handleUpdateBooking
                                                    }
                                                    className="comment_btn"
                                                >
                                                    저장
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* 
                        {(cancelReqAB ||
                            cancelAB ||
                            cancelDenyAB ||
                            bankDepositAB) && ( */}
                        <div className="fin ifMobile mb30">
                            <div className="float_left">
                                {/* 취소요청 */}
                                {cancelReqAB && (
                                    <button
                                        onClick={handleOpenPrompt(
                                            "cancelReq",
                                            "취소 요청 사유를 입력 해주세요."
                                        )}
                                        type="submit"
                                        className="btn medium"
                                    >
                                        취소요청
                                    </button>
                                )}

                                {/* 취소완료 */}
                                {cancelAB && (
                                    <button
                                        onClick={handleOpenRefundModal}
                                        type="submit"
                                        className="btn medium"
                                    >
                                        취소하기
                                    </button>
                                )}

                                {/* 취소거절 */}
                                {cancelDenyAB && (
                                    <button
                                        onClick={handleOpenPrompt(
                                            "cancelReject",
                                            "취소를 거절 사유를 입력해주세요."
                                        )}
                                        type="submit"
                                        className="btn medium"
                                    >
                                        취소거절
                                    </button>
                                )}

                                {/* 입금완료 처리 */}
                                {bankDepositAB && (
                                    <button
                                        onClick={handleBankDeposit}
                                        type="submit"
                                        className="btn medium"
                                    >
                                        입금완료
                                    </button>
                                )}
                            </div>
                            <div className="float_right">
                                {isSeller && (
                                    <button
                                        onClick={handleUpdateBooking}
                                        className="btn medium"
                                    >
                                        저장
                                    </button>
                                )}
                                {/* <button type="submit" className="btn medium mr5">
                                수정하기
                                </button>
                            <button type="submit" className="btn medium">
                                저장하기
                            </button> */}
                            </div>
                        </div>
                        {/* )} */}
                    </div>
                </div>
                <RefundModal
                    booking={booking}
                    onSubmit={
                        isCardBooking ? handleCardRefund : handleBankRefund
                    }
                />
                <Prompt
                    title={proptTarget?.title || "거절 사유를 입력 해주세요"}
                    onSubmit={(submitData) => {
                        closeModal("#PromptModal")();
                        rejectHandle(submitData);
                    }}
                    id="PromptModal"
                />
            </div>
        </div>
    );
};

