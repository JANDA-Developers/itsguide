import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BankRefundInput, bookingFindByCode_BookingFindByCode_data, BookingStatus, Fbooking } from '../../types/api';
import { autoComma } from '../../utils/formatter';
import { closeModal } from '../../utils/popUp';
import { toNumber } from '../../utils/toNumber';
import { Modal } from '../modal/Modal';

export interface IRefundModalSubmit extends Omit<BankRefundInput, "bookingId"> { }

interface IProp {
    booking: bookingFindByCode_BookingFindByCode_data;
    onSubmit: (info: IRefundModalSubmit) => void;
}

export const RefundModal: React.FC<IProp> = ({ onSubmit, booking }) => {
    const { payment } = booking;
    if (!payment) return null;
    const cancelAvailableAmt = payment.price - payment.totalCancelPrice;

    const [submitData, setSubmitData] = useState<IRefundModalSubmit>({
        cancelPrice: 0,
        reqStatus: BookingStatus.CANCEL,
        cancelMemo: "",
    })

    const handleSubmit = () => {
        if(cancelAvailableAmt < submitData.cancelPrice) {
            alert("취소 가능한 금액보다 요청하신 금액이 큽니다.")
            return;
        }
        
        onSubmit(submitData)
    }

    if (typeof window === "undefined") return null;
    const el = document.getElementById('portal');
    if (!el) return null;

    return ReactDOM.createPortal(<Modal inClassName="refundModal" id="RefundModal" title={"예약 환불 및 취소하기."} >
        <div className="refundModal__refundAmt">
        </div>
        <div className="refundModal__inputBox">
            <span>
                <span className="refundModal__inputBoxLabel">환불금액</span>
                <span className="refundModal__refundAmtLabel">(환불가능</span>:{autoComma(cancelAvailableAmt)})
            </span>
            <div className="refundModal__inputWrap">
                <input className="refundModal__input" value={autoComma(submitData.cancelPrice)} onChange={(e) => {
                    submitData.cancelPrice = toNumber(e.currentTarget.value) || 0;
                    setSubmitData({ ...submitData })
                }} />
            </div>
        </div>
        <span className="refundModal__inputBoxLabel">환불사유</span>
        <div className="input_box">
            <textarea className="refundModal__textarea" onChange={(e) => {
                const reason = e.currentTarget.value
                submitData.cancelMemo = reason;
                setSubmitData({ ...submitData });
            }} value={submitData.cancelMemo || ""} />
        </div>
        <div className="info">
            <p><i className="flaticon-flag-1" /> 한번 여행취소시 다시 되돌릴 수 없습니다. 취소는 신중하게 부탁드립니다.</p>
        </div>
        <div className="fin">
            <div className="float_left">
            </div>
            <div className="float_right">
                <button onClick={() => { handleSubmit(); closeModal("#RefundModal")() }} type="submit" className="btn medium">여행취소</button>
            </div>
        </div>
    </Modal>, el);
};

