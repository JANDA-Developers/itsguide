import Link from "next/link";
import React from "react";

interface IProp {}

export const check = (key: string, exact?: boolean) => {
    if (typeof window === "undefined") return false;
    const pathname = window.location.pathname;
    return exact ? pathname === key : pathname.includes(key);
};

export const checkOn = (key: string, exact?: boolean) =>
    check(key, exact) ? "on" : "";

export const ResvTopNav: React.FC<IProp> = () => {
    return (
        <div className="tab-nav">
            <ul>
                <li className={checkOn("/master/reservation", true)}>
                    <Link href="/master/reservation">
                        <a>예약·결제관리</a>
                    </Link>
                </li>
                {/* <li className={checkOn("cancel")}><Link href="/master/reservation/cancel"><a>취소·환불관리</a></Link></li> */}
                {/* <li className={checkOn("byhand")}><Link href="/master/reservation/byhand"><a>예약수기등록관리</a></Link></li> */}
            </ul>
        </div>
    );
};

export const HomepageTopNav = () => {
    return (
        <div className="tab-nav">
            <ul>
                <li className={checkOn("/master/homepage", true)}>
                    <Link href="/master/homepage">
                        <a>기본설정</a>
                    </Link>
                </li>
                <li className={checkOn("sms")}>
                    <Link href="/master/homepage/sms">
                        <a>SMS설정</a>
                    </Link>
                </li>
                {/* <li><Link href="/master/homepage/homepage1-3"><a>카카오비즈톡</a></Link></li> */}
                <li className={checkOn("terms")}>
                    <Link href="/master/homepage/terms">
                        <a>약관설정</a>
                    </Link>
                </li>
                <li className={checkOn("category")}>
                    <Link href="/master/homepage/category">
                        <a>카테고리설정</a>
                    </Link>
                </li>
                <li className={checkOn("settlement")}>
                    <Link href="/master/homepage/settlement">
                        <a>정산설정</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export const GoodsTopNav = () => {
    return (
        <div className="tab-nav">
            <ul>
                <li className={checkOn("/master/goods", true)}>
                    <Link href="/master/goods">
                        <a>상품관리</a>
                    </Link>
                </li>
                <li className={checkOn("goods/settlement")}>
                    <Link href="/master/goods/settlement">
                        <a>매출·정산관리</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export const MemberTopNav = () => {
    return (
        <div className="tab-nav">
            <ul>
                <li className={checkOn("busipartner")}>
                    <Link href="/master/member/busipartner">
                        <a>회원목록</a>
                    </Link>
                </li>
                <li className={checkOn("indicate")}>
                    <Link href="/master/indicate">
                        <a>지시목록</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export const DesignTopNav = () => {
    return (
        <div className="tab-nav">
            <ul>
                {/* <li className={checkOn("/master/design", true)}><Link href="/master/design"><a>기본설정</a></Link></li> */}
                <li className={checkOn("/master/design/banner")}>
                    <Link href="/master/design/banner">
                        <a>배너관리</a>
                    </Link>
                </li>
                <li className={checkOn("/master/design/popup")}>
                    <Link href="/master/design/popup">
                        <a>팝업관리</a>
                    </Link>
                </li>
                <li className={checkOn("/master/design/display")}>
                    <Link href="/master/design">
                        <a>노출상품관리</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
