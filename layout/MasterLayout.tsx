import React from 'react';

interface IProp { }

export const MasterLayout: React.FC<IProp> = ({ children }) => {
    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/pr_img_40.jpg)` }}
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
                <li><a href="/master/notification">알림</a></li>
                <li className="on"><a href="/master/member">회원관리</a></li>
                <li><a href="/master/goods">상품관리</a></li>
                <li><a href="/master/reservation">예약관리</a></li>
                <li><a href="/master/design">디자인 설정</a></li>
                <li><a href="/master/homepage">홈페이지 설정</a></li>
            </ul>
            <div className="w1200">
                {children}
            </div>

        </div>
    </div>
};
