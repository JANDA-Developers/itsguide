import React, { useState } from "react";
import { useFeePolicy } from "../../hook/useFeePolicy";
import {
    useSettlementFindById,
    useSettlementsRequest,
} from "../../hook/useSettlement";
import {
    BookingStatus,
    ProductStatus,
    SettlementStatus,
} from "../../types/api";
import {
    bookingStatus,
    feePresent,
    itemTypeToKr,
    paymentStatus,
    payMethodToKR,
    productStatus,
    settlementStatus,
} from "../../utils/enumToKr";
import { autoComma } from "../../utils/formatter";
import { generateClientPaging } from "../../utils/generateClientPaging";
import { closeModal } from "../../utils/popUp";
import { yyyymmdd } from "../../utils/yyyymmdd";
import { Paginater } from "../common/Paginator";
import { SettlementController } from "../contollers/SettlementContollers";
import { HistoryTable } from "../historyTable/HistoryTable";
import { BookingStatusBadge } from "../Status/StatusBadge";

interface IProp {
    settlementId: string;
}

export const SettlementModal: React.FC<IProp> = ({ settlementId }) => {
    const { item: settlement } = useSettlementFindById(settlementId);
    const { data: policy } = useFeePolicy();

    const {
        product,
        bankFee,
        cancelReturnPrice,
        cardFee,
        acceptDate,
        cancelDate,
        totalFee,
        totalPrice,
        payReqPrice,
        jandaFee,
        niceCardFee,
        jandaCardFee,
        cardPrice,
        requestDate,
        bankPrice,
        additionFeeSum,
    } = settlement || {};
    const { bookings, createdAt, startDate } = product || {};
    const canceldBooking = (bookings || []).filter(
        (bk) => bk.status === BookingStatus.CANCEL
    );
    const bookingsPagination = generateClientPaging(bookings || [], 10);
    const cancelBookingsPagination = generateClientPaging(canceldBooking, 10);
    if (!settlement) return <div />;
    if (!product) return <div />;

    // const handleCancelBooking = (bookingId: string) => {
    //     confirm("정말로 예약을 취소 하시겠습니까?")
    //     cancelBooking({
    //         variables: {
    //             bookingId,
    //             reason
    //         }
    //     })
    // }

    const bookingStatusColor = (status?: BookingStatus | null) => {
        if (status === BookingStatus.CANCEL) return "no";
        if (status === BookingStatus.COMPLETE) return "ok";
        if (status === BookingStatus.READY) return "";
        return "";
    };

    return (
        <div id="SettlementModal" className="popup_bg_full">
            {settlement && (
                <div className="in_txt statement_popup master_popup">
                    <div className="page">
                        <h3>정산계산</h3>
                        <a
                            className="close_icon"
                            onClick={closeModal("#SettlementModal")}
                        >
                            <i className="flaticon-multiply"></i>
                        </a>
                        <div className="statement_popup__topBox info_txt">
                            <span className="r-number">
                                상품명: <i>{product.title}</i>
                            </span>
                            <span className="r-number">
                                상품상태: <i>{productStatus(product.status)}</i>
                            </span>
                            <span className="r-number">
                                정산상태:
                                <i>{settlementStatus(settlement.status)}</i>
                            </span>
                            {/* <span className="r-day">예약일: {yyyymmdd(booking.createdAt)}</span>
                        {booking.isCancelRequest && <span>[취소요청]</span>}
                        {booking.payment && <span className="pay-day">결제일: {yyyymmdd(booking.payment?.createdAt)}</span>}
                        <button onClick={print} className="btn"><i className="flaticon-print mr5"></i>프린터</button> */}
                        </div>
                        <div className="alignment">
                            <div className="left_div">
                                <span className="infotxt">
                                    <i>
                                        {yyyymmdd(createdAt)} ~
                                        {yyyymmdd(startDate)} 예약
                                    </i>
                                    이 총 <strong>{bookings?.length}</strong>건
                                </span>
                            </div>
                        </div>
                        <div className="fuction_list_mini">
                            <div className="thead">
                                <div className="th02">결제방법</div>
                                <div className="th03">결제상태</div>
                                <div className="th04">예약자</div>
                                <div className="th05">예약날짜</div>
                                <div className="th06">예약금</div>
                                <div className="th07">상태</div>
                            </div>
                            <div className="tbody">
                                <ul>
                                    {bookingsPagination.slice.map((bk) => (
                                        <li
                                            className="settlementModal__li"
                                            key={bk._id}
                                        >
                                            <div className="th02">
                                                {payMethodToKR(bk.payMethod)}
                                            </div>
                                            <div className="th03">
                                                {paymentStatus(
                                                    bk.payment?.status
                                                )}
                                            </div>
                                            <div className="th04">
                                                {bk.name}
                                            </div>
                                            <div className="th05">
                                                {yyyymmdd(bk.createdAt)}
                                            </div>
                                            <div className="th06">
                                                {autoComma(bk.bookingPrice)}원
                                            </div>
                                            <div className="th07">
                                                <BookingStatusBadge
                                                    status={bk.status}
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="productModal__paginatorWrap">
                                <Paginater
                                    isMini
                                    pageInfo={bookingsPagination.paging}
                                    setPage={bookingsPagination.setPage}
                                />
                                <div className="float_right"></div>
                            </div>
                        </div>
                        <div className="alignment ">
                            <div className="left_div">
                                <span className="infotxt">
                                    <i>취소건이</i>이 총
                                    <strong>{canceldBooking.length}</strong>건
                                </span>
                            </div>
                        </div>
                        <div className="fuction_list_mini">
                            <div className="thead">
                                <div className="th02">결제방법</div>
                                <div className="th03">결제상태</div>
                                <div className="th04">예약자</div>
                                <div className="th05">예약날짜</div>
                                <div className="th06">예약금 | 취소금</div>
                                <div className="th07">상태</div>
                            </div>
                            <div className="tbody">
                                <ul>
                                    {cancelBookingsPagination.slice.map(
                                        (cb) => (
                                            <li
                                                className="settlementModal__li"
                                                key={cb._id + "cancel"}
                                            >
                                                <div className="th02">
                                                    {payMethodToKR(
                                                        cb.payMethod
                                                    )}
                                                </div>
                                                <div className="th03 settlementModal__li-th3">
                                                    {bookingStatus(cb.status)}
                                                </div>
                                                <div className="th04">
                                                    {cb.name}
                                                </div>
                                                <div className="th05">
                                                    {yyyymmdd(cb.createdAt)}
                                                </div>
                                                <div className="th06">
                                                    {autoComma(cb.bookingPrice)}
                                                    원 |
                                                    {autoComma(
                                                        cb.payment
                                                            ?.totalCancelPrice
                                                    )}
                                                    [
                                                    {
                                                        cb.payment
                                                            ?.isPartialCancel
                                                    }
                                                    ]
                                                </div>
                                                <div className="th07">
                                                    <strong
                                                        className={bookingStatusColor(
                                                            cb.status
                                                        )}
                                                    >
                                                        {bookingStatus(
                                                            cb.status
                                                        )}
                                                    </strong>
                                                </div>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className="productModal__paginatorWrap">
                                <Paginater
                                    isMini
                                    pageInfo={cancelBookingsPagination.paging}
                                    setPage={cancelBookingsPagination.setPage}
                                />
                                <div className="float_right"></div>
                            </div>
                        </div>
                        <HistoryTable histories={settlement.requestHistory} />
                        <div className="sum_div mt50">
                            <ul className="first_ul">
                                <li>
                                    <div className="title">
                                        <strong>실 판매금액</strong> :
                                    </div>
                                    <div className="body">
                                        <div>{settlement.totalPrice}원</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">
                                        <strong>카드수수료</strong> :
                                    </div>
                                    <div className="body">
                                        <div>
                                            (-) {autoComma(settlement.cardFee)}
                                            원
                                        </div>
                                    </div>
                                </li>
                                {policy?.addtionalFees.map((addFee, i) => (
                                    <li key={"FeePolicy" + i}>
                                        <div className="title">
                                            <strong>{addFee.feeName}</strong> :
                                        </div>
                                        <div className="body">
                                            <div>
                                                (-) {feePresent(addFee)}원
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <ul className="last_ul">
                                <li>
                                    <div>
                                        <i>=</i>총 정산 예상금 :
                                        <strong>
                                            {autoComma(
                                                settlement.settlementPrice
                                            )}
                                        </strong>
                                        원
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="in_fin mt30">
                            <div className="float_left">
                                <SettlementController
                                    settlement={settlement}
                                    product={product}
                                />
                            </div>
                            <div className="float_right"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
