import React from 'react';
import { bookingStatus, itemTypeToKr, paymentStatus, payMethodToKR } from '../../utils/enumToKr';
import { autoComma } from '../../utils/formatter';
import { yyyymmdd } from '../../utils/yyyymmdd';
import { Paginater } from '../common/Paginator';
import { IReservationTableProp } from './ReservationMaster';

export const ByhandTable: React.FC<IReservationTableProp> = ({ bookingListHook, handlers, idSelectHook }) => {
    const { handlePaymentConfirm, openCacnelPrompt, openBookingModal, handleCancelConfirm, handleSelectCancelConfirm } = handlers;
    const { isAllSelected, selectAll, toggle, isChecked } = idSelectHook;
    const { items, pageInfo, setPage } = bookingListHook;

    return <div className="master__table">
        <div className="thead">
            <div className="t01">
                <span onClick={selectAll} className="checkbox">
                    <input onChange={() => { }} checked={isAllSelected} type="checkbox" name="agree" id="agree0" title="전체선택" />
                    <label htmlFor="agree0" />
                </span>
            </div>
            <div className="t02">예약번호/결제일/유형</div>
            <div className="t03">상품정보</div>
            <div className="t04">예약자/가이드명</div>
            <div className="t05">금액</div>
            <div className="t06">상태</div>
            <div className="t07">관리</div>
        </div>
        {items.map((item, i) =>
            <div key={item._id} className="tbody">
                <div className="t01">
                    <span onClick={() => { toggle(item._id) }} className="checkbox">
                        <input checked={isChecked(item._id)} type="checkbox" name="agree" id={`agree${i}`} title="개별선택" />
                        <label htmlFor={`agree${i}`} />
                    </span>
                </div>
                <div className="t02">
                    <div className="align">
                        <strong className="r-number"><i className="m_title">예약번호:</i>{item.code}</strong>
                        <span className="pay-day"><i className="m_title">결제일:</i>{yyyymmdd(item.payment?.createdAt)}</span>
                        <span className="goods-ct"><i className="m_title">유형:</i>{itemTypeToKr(item.product.type)}</span>
                    </div>
                </div>
                <div className="t03">
                    <div className="info goods__info_title">
                        <span className="ct">{item.product.category?.label}</span>  <span className="g-number">상품번호: {item.product.code}</span>
                        <strong className="title">{item.product.title}</strong>
                        <div className="txt">
                            <span className="s-day">출발일: {yyyymmdd(item.product.startDate)}</span>
                            <span className="where">출발장소: {item.product.startPoint}</span>

                            <span className="men">인원: 총 {item.totalCount}명 (성인:{item.adultCount}/소아:{item.kidCount}/유아:{item.babyCount})</span>
                        </div>
                    </div>
                </div>
                <div className="t04">
                    <div className="align">
                        <strong className="name"><i className="m_title">예약자명:</i>{item.name}</strong>
                        <span className="patner-name"><i className="m_title">가이드명:</i>({item.product?.author?.name})</span>
                    </div>
                </div>
                <div className="t05">
                    <div className="align">
                        <strong className="money"><i className="m_title">금액:</i>{autoComma(item.bookingPrice)}원</strong>
                        <span className="pay-option"><i className="m_title">결제종류:</i>{payMethodToKR(item.payment?.payMethod)}</span>
                    </div>
                </div>
                <div className="t06">
                    <div className="align">
                        <strong><span className="cansel stand">{bookingStatus(item.status)}</span></strong>
                        <span className="refund-btn stand"><i className="m_title">환불상태:</i>{paymentStatus(item.payment?.status)}<br /></span>
                    </div>
                </div>
                <div className="t07">
                    <div className="align">
                        <button className="btn small" onClick={() => { openBookingModal(item.code) }}>상세보기</button>
                        <button onClick={handlePaymentConfirm} className="btn small">취소완료<i className="jandaicon-info2 tooltip" data-tip="카드결제일 경우 환불 처리, 무통장일 경우 표기만 변경됨." /></button>
                    </div>
                </div>
            </div>
        )}
        <Paginater setPage={setPage} pageInfo={pageInfo} />
        <div className="fin ifMobile">
            <div className="float_left">
                <button onClick={handleCancelConfirm} type="submit" className="btn medium">전체선택</button>
            </div>
            <div className="float_right">
                <button onClick={handleSelectCancelConfirm} type="submit" className="btn medium">선택 환불완료</button>
            </div>
        </div>
    </div>;
};
