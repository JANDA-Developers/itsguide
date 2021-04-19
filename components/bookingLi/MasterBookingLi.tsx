import Link from 'next/link';
import React from 'react';
import { bookingList, bookingList_BookingList_data } from '../../types/api';
import { bookingStatus, paymentStatus, productStatus } from '../../utils/enumToKr';
import { yyyymmdd } from '../../utils/yyyymmdd';

interface IProp {
    booking: bookingList_BookingList_data;
}

export const MasterBookingLi: React.FC<IProp> = ({ booking: bk }) => {
    return <li className="body">
        <div className="td01">
            <strong>{bk.product.title}</strong>
            <span><i>{bk.totalCount}명</i> (성인 {bk.adultCount}&nbsp;&frasl;&nbsp;소아 {bk.kidCount}&nbsp;&frasl;&nbsp;유아 {bk.babyCount})</span>
        </div>
        <div className="td02"><span>{yyyymmdd(bk.product.startDate)}</span></div>
        <div className="td03">
            <strong>{productStatus(bk.product.status)}</strong>
            <span>({bk.product.peopleCount}/{bk.product.maxMember})</span>
        </div>
        <div className="td04">
            <strong>{bookingStatus(bk.status)}</strong>
            <span>({paymentStatus(bk.payment?.status)})</span>
        </div>
        <div className="td05">
            {bk.name}
            {/* <Link href="/"><a className="btn">상세보기</a></Link> */}
        </div>
    </li>;
};
