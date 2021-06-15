import Link from "next/link";
import React, { useContext } from "react";

interface IProp {}

export const MasterLayout: React.FC<IProp> = ({ children }) => {
    let current = "";
    if (typeof window !== "undefined") {
        current = window.location.href.split("/master/")[1] || "";
    }

    const isTapOn = (value?: string) => {
        if (!value) return current === "" ? "on" : "";
        return current.includes(value) ? "on" : "";
    };

    return (
        <div>
            <div className="top_visual sub_nav_ok">
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
                            <Link href="/">
                                <a />
                            </Link>
                        </li>
                        <li className="homedeps1">
                            <Link href="/master">
                                <a>Master</a>
                            </Link>
                        </li>
                        <li className="homedeps2">
                            <Link href="/master/ms-member">
                                <a>회원관리</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="master_box w100">
                <ul className="subtop_nav">
                    <li className={isTapOn("notification")}>
                        <Link href="/master/notification">
                            <a>알림</a>
                        </Link>
                    </li>
                    <li className={isTapOn("member")}>
                        <Link href="/master/member/busipartner">
                            <a>회원관리</a>
                        </Link>
                    </li>
                    <li className={isTapOn("goods")}>
                        <Link href="/master/goods">
                            <a>상품관리</a>
                        </Link>
                    </li>
                    <li className={isTapOn("reservation")}>
                        <Link href="/master/reservation">
                            <a>예약관리</a>
                        </Link>
                    </li>
                    <li className={isTapOn("design")}>
                        <Link href="/master/design">
                            <a>디자인 설정</a>
                        </Link>
                    </li>
                    <li className={isTapOn("homepage")}>
                        <Link href="/master/homepage">
                            <a>홈페이지 설정</a>
                        </Link>
                    </li>
                </ul>
                <div className="w1200">{children}</div>
            </div>
        </div>
    );
};
