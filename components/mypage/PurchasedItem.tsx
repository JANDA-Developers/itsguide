import Link from 'next/link';
import React from 'react';
// import ReactTooltip from 'react-tooltip';
import { tourSearchLink } from '../../pages/search';
import { bookingList_BookingList_data, BookingStatus, Fbooking, ProductStatus } from '../../types/api';
import { BG } from '../../types/const';
import { autoComma } from '../../utils/formatter';
import { getTypeTextOfProduct } from '../../utils/product';
import { yyyymmdd } from '../../utils/yyyymmdd';
import { BookingStatusBadge } from '../Status/StatusBadge';

interface IProp {
    item: bookingList_BookingList_data
    onDetail: () => void;
}

export const PurChasedItem: React.FC<IProp> = ({ item, onDetail: handleDetail }) => {
    const { product, bookingPrice, _id, payment, status, leftTime, adultCount, babyCount, kidCount, createdAt } = item;
    const { images, title, keyWards, status: productStauts } = product;
    const img = images?.[0]?.uri || "";

    const statusTip = (status: BookingStatus) => {
        if (status === BookingStatus.READY) return "입금이 확인되면 완료 상태로 변합니다.";
    }

    return <li className="list_in">
        <div
            className="img"
            onClick={() => {
                //상품 으로 이동
            }}
            style={BG(img)}
        >
            상품이미지
    </div>
        <div className="txt1">
            <div className="title">
                <a href="/">{title}</a>
            </div>
            <div className="tag">
                {keyWards?.map((keyward, index) =>
                    <Link href={tourSearchLink({ keyward })} key={_id + index + "keyward"}><a>#{keyward}</a></Link>
                )}
            </div>
            <div className="data">
                <div className="cash">
                    <strong>{autoComma(bookingPrice)}</strong>원
                </div>
            </div>
            <div className="bottom_info">
                {status && <BookingStatusBadge square status={status} />}
            </div>
        </div>
        <div className="txt2">
            {/* 투두! */}
            <span>결제일 : {item.payment ? yyyymmdd(item.payment?.createdAt) : "미결제"}</span>
            <span>예약일 : {yyyymmdd(item.createdAt)}</span>
            <span>집합장소 : {product.startPoint}</span>
            <span>여행방식 : {getTypeTextOfProduct(product.type, product.dateRange)}</span>
            <span>선택인원 : 성인{adultCount}, 소인{kidCount}, 유아{babyCount}</span>
            <span
                className="btn"
                onClick={handleDetail}
            >
                결제 및 상세내역
            </span>
        </div>
        {/* <ReactTooltip id="ToolTipLayOut" effect="solid" type="info" /> */}
    </li>;
};
