import React from "react";
import {
    bookingStatus,
    determinedKr,
    itemTypeToKr,
    payMethodToKR,
    peopleCurrentCountBracket,
    productStatus,
} from "../../utils/enumToKr";
import { autoComma } from "../../utils/formatter";
import { yyyymmdd } from "../../utils/yyyymmdd";
import { Paginater } from "../common/Paginator";
import { BookingStatusBadge } from "../Status/StatusBadge";
import { IReservationTableProp } from "./ReservationMaster";

export const ReservationTable: React.FC<IReservationTableProp> = ({
    bookingListHook,
    handlers,
    idSelectHook,
}) => {
    const {
        handlePaymentConfirm,
        openCacnelPrompt,
        openBookingModal,
        handleHandWriteModal,
    } = handlers;
    const {
        isAllSelected,
        selectAll,
        toggle,
        toggleAll,
        isChecked,
    } = idSelectHook;
    const { items, pageInfo, setPage } = bookingListHook;

    return (
        <div className="master__table reservation_list ln07">
            <div className="thead">
                <div className="t01">
                    <span className="checkbox">
                        <input
                            checked={isAllSelected}
                            onClick={selectAll}
                            type="checkbox"
                            name="agree"
                            id="agree0"
                            title="전체선택"
                        />
                        <label htmlFor="agree0" />
                    </span>
                </div>
                <div className="t02">예약번호/결제일/유형</div>
                <div className="t03 goods__productinfo">상품정보</div>
                <div className="t04">예약자/가이드명</div>
                <div className="t05">상태</div>
                <div className="t06">금액</div>
                <div className="t07">관리</div>
            </div>
            {items.map((item, i) => (
                <div key={item._id} className="tbody">
                    <div className="t01">
                        <span
                            onClick={() => {
                                toggle(item._id);
                            }}
                            className="checkbox"
                        >
                            <input
                                checked={isChecked(item._id)}
                                onChange={() => {}}
                                type="checkbox"
                                name="agree"
                                id={`agree${i}`}
                                title="개별선택"
                            />
                            <label htmlFor={`agree${i}`} />
                        </span>
                    </div>
                    <div className="t02">
                        <div className="align">
                            <strong className="r-number">
                                <i className="m_title">예약번호:</i>
                                {item.code}
                            </strong>
                            <span className="pay-day">
                                <i className="m_title">예약일:</i>
                                {yyyymmdd(item.createdAt)}
                            </span>
                            <span className="goods-ct">
                                <i className="m_title">유형:</i>
                                {itemTypeToKr(item.product.type)}
                            </span>
                        </div>
                    </div>
                    <div className="t03 goods__productinfo">
                        <div className="info goods__info_title">
                            <span className="ct">문화</span>
                            <span className="g-number">
                                상품번호: {item.product.code}
                            </span>
                            <strong className="title">
                                {item.product.title}
                            </strong>
                            <div className="txt">
                                <span className="s-day">
                                    출발일: {yyyymmdd(item.product.startDate)}
                                </span>
                                <span className="where">
                                    출발장소: {item.product.startPoint}
                                </span>
                                <span className="men">
                                    인원: 총 {item.totalCount}명 (성인:
                                    {item.adultCount}/소아:{item.kidCount}/유아:
                                    {item.babyCount})
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="t04">
                        <div className="align">
                            <strong className="name">
                                <i className="m_title">예약자명:</i>
                                {item.name}(예약자)
                            </strong>
                            <span className="patner-name">
                                <i className="m_title">가이드명:</i>
                                {item.product.author?.name}(판매자)
                            </span>
                            <span className="reservation-number">
                                <i className="m_title">예약번호:</i>
                                {item.code}
                            </span>
                        </div>
                    </div>
                    <div className="t05">
                        <div className="align">
                            <strong>
                                <i className="m_title">상품상태:</i>
                                {productStatus(item.product.status)}
                            </strong>
                            <span className="member">
                                <i className="m_title">진행여부:</i>
                                {determinedKr(item.product.determined)}
                                <br />
                                {peopleCurrentCountBracket(item.product as any)}
                            </span>
                        </div>
                    </div>
                    <div className="t06">
                        <div className="align">
                            <strong className="money">
                                <i className="m_title">금액:</i>
                                {autoComma(item.bookingPrice)}원
                            </strong>
                            <span className="pay-option">
                                <i className="m_title">결제종류:</i>
                                {payMethodToKR(item.payment?.payMethod)}
                            </span>
                            <BookingStatusBadge status={item.status!} />
                            {/* <span className="r-btn stand"><i className="m_title">예약상태:</i>{bookingStatus(item.status)}</span> */}
                        </div>
                    </div>
                    <div className="t07">
                        <div className="align">
                            <button
                                className="btn small"
                                onClick={() => {
                                    openBookingModal(item.code);
                                }}
                            >
                                상세보기
                            </button>
                            {/* <button onClick={openCacnelPrompt(item)} className="btn small">예약취소</button> */}
                        </div>
                    </div>
                </div>
            ))}
            <Paginater pageInfo={pageInfo} setPage={setPage} />
            <div className="fin ifMobile">
                <div className="float_left">
                    <button
                        onClick={selectAll}
                        type="submit"
                        className="btn medium"
                    >
                        전체선택
                    </button>
                </div>
                <div className="float_right">
                    {/* <button onClick={handlePaymentConfirm} type="submit" className="btn medium">입금확인</button> */}
                </div>
            </div>
        </div>
    );
};
