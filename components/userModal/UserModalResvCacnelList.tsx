import React from 'react';
import { useBookingList } from '../../hook/useBooking';
import { BookingStatus } from '../../types/api';
import { autoComma } from '../../utils/formatter';
import isEmpty from '../../utils/isEmpty';
import { yyyymmdd } from '../../utils/yyyymmdd';
import { Paginater } from '../common/Paginator';
import { Nodata } from '../noData/Nodata';

interface IProp {
    id: string
}

export const UserModalResvCancelList: React.FC<IProp> = ({ id }) => {
    const { items: bookings, pageInfo, setPage } = useBookingList({
        initialFilter: {
            status_eq: BookingStatus.CANCEL,
            OR: [{ seller_eq: id }, { booker_eq: id }]
        },
        initialViewCount: 4
    })

    return <div className="info_table reservationlist">
        <Nodata show={isEmpty(bookings)} />
        {bookings.map(bk =>
            <div className="tr">
                <div className="re01">
                    예약번호
            <a href="R-398234">{bk.code}</a>
                </div>
                <div className="re02">
                    상품
            </div>
                <div className="re03">
                    <a href="/">[{bk.product.code}] {bk.product.title} </a>
                </div>
                <div className="re04">
                    예약일/취소일
                </div>
                <div className="re05">
                    <span>{yyyymmdd(bk.createdAt)}/{yyyymmdd(bk.payment?.cancelDate)}</span>
                </div>
                <div className="re06">
                    인원
                </div>
                <div className="re07">
                    <span>{bk.totalCount}명</span>
                </div>
                <div className="re08">
                    환불금
                </div>
                <div className="re09">
                    <span>{autoComma(bk.payment?.totalCancelPrice)}원</span>
                </div>
            </div>
        )}
        <Paginater setPage={setPage} pageInfo={pageInfo} />
    </div>;
};
