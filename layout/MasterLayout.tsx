import React, { useContext } from 'react';

interface IProp { }

export const MasterLayout: React.FC<IProp> = ({ children }) => {

    let current = ""
    if (typeof window !== "undefined") {
        current = window.location.href.split('/master/')[1] || "";
    }

    const isTapOn = (value?: string) => {
        if (!value) return current === "" ? "on" : ""
        return current.includes(value) ? "on" : "";
    }


    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/its/su_visual_bg.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">Master</h2>
                    <p className="text">지금 여행을 떠나세요~!~~!!!!!</p>
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="../main/main" />
                    </li>
                    <li className="homedeps1"><a href="/master">Master</a></li>
                    <li className="homedeps2">
                        <a href="/master/ms-member">회원관리</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="master_box w100">
            <ul className="subtop_nav">
                <li className={isTapOn("notification")}><a href="/master/notification">알림</a></li>
                <li className={isTapOn("member")}><a href="/master/member/busipartner">회원관리</a></li>
                <li className={isTapOn("goods")}><a href="/master/goods">상품관리</a></li>
                <li className={isTapOn("reservation")}><a href="/master/reservation">예약관리</a></li>
                <li className={isTapOn("design")}><a href="/master/design">디자인 설정</a></li>
                <li className={isTapOn("homepage")}><a href="/master/homepage">홈페이지 설정</a></li>
            </ul>
            <div className="w1200">
                {children}
            </div>
        </div>
    </div>
};
