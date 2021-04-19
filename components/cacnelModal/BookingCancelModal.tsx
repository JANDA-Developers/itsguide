import React, { useState } from 'react';
import { Fbooking } from '../../types/api';
import { Modal } from '../modal/Modal';

interface IProp {
    booking: Fbooking;
}

export const BookingCancelModal: React.FC<IProp> = ({ booking }) => {
    const [cancelReason, setCancelReason] = useState("");
    // const [] = useCancel()

    //하나씩만됨
    // const handleCancel = () => {
    //     cancelMu({
    //         variables: {
    //             bookingId: booking._id,
    //             reason: cancelReason
    //         }
    //     })
    // }

    return <Modal id="CancelModal" title="여행취소 사유">
        <div className="input_box">
            <textarea onChange={(e) => {
                const reason = e.currentTarget.value
                setCancelReason(reason);
            }} value={cancelReason} />
        </div>
        <div className="info">
            <p><i className="flaticon-flag-1" /> 한번 여행취소시 다시 되돌릴 수 없습니다. 취소는 신중하게 부탁드립니다.</p>
        </div>
        <div className="fin">
            <div className="float_left">
            </div>
            <div className="float_right">
                {/* <button onClick={handleCancel} type="submit" className="btn medium">여행취소</button> */}
            </div>
        </div>
    </Modal>
};

