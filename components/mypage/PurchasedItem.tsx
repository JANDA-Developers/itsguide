import React from 'react';

interface IProp { }

export const PurChasedItem: React.FC<IProp> = () => {
    return <li className="list_in">
        <div
            className="img"
            onClick={() => {
                //상품 으로 이동
            }}
            style={{ backgroundImage: "url(/img/store_01.jpg)" }}
        >
            상품이미지
    </div>
        <div className="txt1">
            <div className="title">
                <a href="/">더운날 수목원으로 오세요~!!</a>
            </div>
            <div className="tag">
                <a href="/">#티켓</a> <a href="/">#경남</a>
            </div>
            <div className="data">
                <div className="cash">
                    <strong>10,000</strong>원
</div>
            </div>
            <div className="bottom_info">
                <span className="ok">예약완료</span>
                <span className="end">사용완료</span>
            </div>
        </div>
        <div className="txt2">
            <span>결제일 : 2020.01.16</span>
            <span>예약일 : 2020.01.16</span>
            <span>집합장소 : 부산시민공원 정문 앞</span>
            <span>여행방식 : 당일여행</span>
            <span>선택인원 : 성인1, 소인1, 유아1</span>

            <span
                className="btn"
                onClick={() => {
                    document.getElementById('detail_box')!.style.display = 'block';
                    document.getElementById('fade')!.style.display = 'block'
                }}
            >
                결제 및 상세내역
        </span>
        </div>
    </li>;
};
