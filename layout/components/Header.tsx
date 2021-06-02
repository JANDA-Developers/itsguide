import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { EditBtn } from "components/common/EditBtn";
import $ from "jquery";
import { AppContext } from "pages/_app";
import { setVal, whenEnter } from "../../utils/eventValueExtracter";
import { useRouter } from "next/router";
import { NotiIcon } from "./NotiIcon";
import { tourSearchLink } from "../../pages/search";
import { LocaleToString } from "../../utils/enumToKr";
import { usePageEdit } from "../../hook/usePageEdit";
import { staticInfo } from "../../info/static.json";

interface IProp {}

export const handSearchClose = () => {
    $(".search_bg").css({
        display: "none",
    });

    $(".search_wrap").animate({
        top: "-100px",
    });
    $(".hidden").css({
        display: "none",
    });
};

export const Header: React.FC<IProp> = () => {
    const [search, setSearch] = useState("");
    const rotuer = useRouter();
    const { locale, pathname, query } = rotuer;

    const { isLogin, myProfile, isManager, isSeller, isAdmin, ln } =
        useContext(AppContext);

    const myId = myProfile?._id;
    const handleNav = () => {
        $("#header").attr("tabindex", -1);
        return false;
    };

    const handleMain = () => {
        $("#content-bm").attr("tabindex", -1);
        return false;
    };
    const handSearch = () => {
        $(".hidden").css({
            display: "block",
        });
        $(".search_wrap").animate({
            top: "0",
        });
        $(".search_bg").css({
            display: "block",
        });
    };
    const handleAllMenu = () => {
        $("#all_menu").animate({
            top: "0",
        });
        $(".m_bg").css({
            display: "block",
        });
    };

    const handleAllClose = () => {
        const target = document.getElementById("all_menu_right");
        if (target) target.style.display = "none";

        const target2 = document.getElementById("fade");
        if (target2) target2.style.display = "none";
        $(".m_bg").css({
            display: "none",
        });
        $("#all_menu").animate({
            top: "-2600px",
        });
    };

    const handleLogOut = () => {
        localStorage.removeItem("jwt");
        location.href = "/";
    };

    const goToSearchPage = () => {
        rotuer.push(tourSearchLink({ title: search }));
        handSearchClose();
    };

    const handSearchClose = () => {
        $(".search_bg").css({
            display: "none",
        });

        $(".search_wrap").animate({
            top: "-100px",
        });
        $(".hidden").css({
            display: "none",
        });
        setSearch("");
    };

    const closeLangs = () => {
        const lagnBox1 = document.getElementById(
            "language__present2"
        ) as HTMLInputElement;
        const lagnBox2 = document.getElementById(
            "language__present"
        ) as HTMLInputElement;
        if (lagnBox2) {
            lagnBox2.checked = false;
        }
        if (lagnBox1) {
            lagnBox1.checked = false;
        }
    };

    useEffect(() => {
        $(".nav_wrap ul li").on("hover", function () {
            $(this).find("ul").stop().fadeToggle(300);
        });
        rotuer.events.on("routeChangeStart", handleAllClose);
        window.addEventListener("click", closeLangs);
        return closeLangs;
    }, []);

    useEffect(() => {
        closeLangs();
    }, [locale]);

    return (
        <header className="header" id="header">
            <div className="u_skip">
                <a href="#nav_wrap" onClick={handleNav}>
                    <span>{ln("gotoTopMenu")}</span>
                </a>
                <a href="#main" onClick={handleMain}>
                    <span>{ln("gotoMainPage")}</span>
                </a>
            </div>
            <div className="top-menu">
                <div className="w1200">
                    {isLogin && (
                        <p className="welcome_ms">
                            <strong>{myProfile?.nickName}</strong>
                            {ln("nim")}
                            {ln("wellcometxt")}
                        </p>
                    )}
                    <ul className="top-menu-in">
                        {isLogin ? (
                            ""
                        ) : (
                            <li className="join">
                                <Link href="/member/join">
                                    <a>{ln("guidejoin")}</a>
                                </Link>
                            </li>
                        )}
                        <li className="login">
                            {isLogin ? (
                                <a onClick={handleLogOut}>LOGOUT</a>
                            ) : (
                                <Link href="/member/login">
                                    <a>LOGIN</a>
                                </Link>
                            )}
                        </li>
                        {isSeller && (
                            <li className="mypage">
                                <Link href="/mypage">
                                    <a>MY PAGE</a>
                                </Link>
                            </li>
                        )}
                        {isManager && (
                            <li className="master">
                                <Link href="/master">
                                    <a>MASTER</a>
                                </Link>
                            </li>
                        )}

                        {/* 추후 오픈 지금 신경 못씀! */}
                        {/* <li className="language">
                        <button className="btn" onClick={languageOpen}>English<i className="jandaicon-arr4-bottom"></i></button>
                        <ul className="languageBox" onClick={languageClose}>
                            <li><a href="/">English</a></li>
                            <li><a href="/">Chinese</a></li>
                            <li><a href="/">Japanese</a></li>
                            <li><a href="/">Korean</a></li>
                        </ul>2
                    </li> */}
                    </ul>
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className="language__box"
                    >
                        <input
                            id="language__present"
                            type="checkbox"
                            name="checkbox-set"
                            className="language__present"
                        />
                        <label
                            htmlFor="language__present"
                            className="language__present_label"
                        >
                            <strong>{LocaleToString(locale)}</strong>
                            <i className="jandaicon-arr4-bottom"></i>
                        </label>
                        <ul id="language__choice" className="language__choice">
                            <li>
                                <Link href={{ query, pathname }} locale="ko">
                                    <a>한국어</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={{ query, pathname }} locale="en">
                                    <a>ENGLISH</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={{ query, pathname }} locale="chi">
                                    <a>中国人</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={{ query, pathname }} locale="ja">
                                    <a>日本語</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={{ query, pathname }} locale="chi">
                                    <a>CHINESE</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main_menu">
                <div className="w1200">
                    <div className="hd_size">
                        <div className="hd_left">
                            <div className="logo">
                                <h1>
                                    <Link href="/">
                                        <a>
                                            <img
                                                src={"/its/logo_1.png"}
                                                alt="logo"
                                            />
                                        </a>
                                    </Link>
                                </h1>
                            </div>
                        </div>
                        <div className="nav_bg"></div>
                        <div className="hd_right">
                            <div className="hd_center">
                                <div className="nav_wrap" id="nav_wrap">
                                    <ul className="deps1">
                                        <li className="deps">
                                            <a href="/guide">
                                                {ln("itsguide")}
                                            </a>
                                        </li>
                                        <li className="deps">
                                            <a href="/tour">{ln("itstour")}</a>
                                        </li>
                                        <li className="deps">
                                            <a href="/service/announce">
                                                {ln("service")}
                                            </a>
                                        </li>
                                        <li className="deps">
                                            <a href="/tour?searchData=%EB%A1%9C%EC%BB%AC%EC%B6%95%EC%A0%9C">
                                                {ln("localFestival")}
                                            </a>
                                        </li>
                                        <li className="deps">
                                            <a href="/site-info">
                                                {ln("site_info")}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="searchtop">
                                <div className="search_btn">
                                    <img
                                        src={"/img/svg/search_icon.svg"}
                                        alt="search icon"
                                    />
                                    <button onClick={handSearch} tabIndex={0} />
                                </div>
                                <div className="hidden">
                                    <div className="w1200">
                                        <div className="search_wrap">
                                            <input
                                                onKeyPress={whenEnter(
                                                    goToSearchPage
                                                )}
                                                value={search}
                                                onChange={setVal(setSearch)}
                                                type="text"
                                                placeholder="검색어를 입력해주세요"
                                            />
                                            <div className="search_btn">
                                                <img
                                                    src={
                                                        "/img/svg/search_icon.svg"
                                                    }
                                                    alt="search icon"
                                                />
                                                <button className="btt1" />
                                            </div>
                                            <div
                                                className="close_btn"
                                                onClick={handSearchClose}
                                            >
                                                <i className="flaticon-multiply"></i>
                                                <button className="btt2" />
                                            </div>

                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    onClick={handSearchClose}
                                    className="search_bg"
                                ></div>
                            </div>
                            {isLogin && (
                                <div className="inform_top">
                                    <Link href="/mypage/notification">
                                        <a>
                                            <NotiIcon />
                                        </a>
                                    </Link>
                                </div>
                            )}
                            <div
                                onClick={handleAllMenu}
                                className="all_menu_btn"
                            >
                                <img
                                    src={"/img/svg/allmenu_icon.svg"}
                                    alt="All menu"
                                />
                                <button />
                            </div>
                        </div>
                        <div id="all_menu" tabIndex={0}>
                            <div>
                                <strong className="all_menu_title">
                                    {ln("all_menu_title")}
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                        className="language__box"
                                    >
                                        <input
                                            id="language__present2"
                                            type="checkbox"
                                            name="checkbox-set"
                                            className="language__present"
                                        />
                                        <label
                                            htmlFor="language__present2"
                                            className="language__present_label"
                                        >
                                            <strong>
                                                {LocaleToString(
                                                    rotuer.locale || ""
                                                )}
                                            </strong>
                                            <i className="jandaicon-arr4-bottom"></i>
                                        </label>
                                        <ul
                                            id="language__choice2"
                                            className="language__choice"
                                        >
                                            <li>
                                                <Link
                                                    href={{ query, pathname }}
                                                    locale="ko"
                                                >
                                                    <a>한국어</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={{ query, pathname }}
                                                    locale="en"
                                                >
                                                    <a>ENGLISH</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={{
                                                        query,
                                                        pathname,
                                                    }}
                                                    locale="chi"
                                                >
                                                    <a>中国人</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={{
                                                        query,
                                                        pathname,
                                                    }}
                                                    locale="ja"
                                                >
                                                    <a>日本語</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={{ query, pathname }}
                                                    locale="chi"
                                                >
                                                    <a>CHINESE</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </strong>
                            </div>

                            {isSeller && (
                                <div className="m_member">
                                    <div className="profile">
                                        <span className="photo"></span>
                                    </div>
                                    <div className="profile_txt">
                                        <span className="text01">
                                            {ln("point")}
                                        </span>
                                        <span className="text02">
                                            0{ln("won")}
                                        </span>
                                    </div>
                                </div>
                            )}

                            <div className="m_all_menu_in">
                                {isLogin ? (
                                    <span>
                                        <a onClick={handleLogOut}>LOGOUT</a>
                                    </span>
                                ) : (
                                    <span>
                                        <Link href="/member/login">
                                            <a>LOGIN</a>
                                        </Link>
                                    </span>
                                )}
                                {isLogin && (
                                    <span>
                                        <Link href="/mypage">
                                            <a>MY PAGE</a>
                                        </Link>
                                    </span>
                                )}
                                {isLogin && (
                                    <span>
                                        <Link href="/mypage/notification">
                                            <a>{ln("notification")}</a>
                                        </Link>
                                    </span>
                                )}
                                {isLogin ? (
                                    ""
                                ) : (
                                    <span>
                                        <Link href="/member/join">
                                            <a>{ln("guidejoin")}</a>
                                        </Link>
                                    </span>
                                )}
                                <span>
                                    <Link href="/service/question">
                                        <a>{ln("question")}</a>
                                    </Link>
                                </span>

                                {/* <span><Link href="/service/event"><a>이벤트</a></Link></span> */}
                                {/* <span><Link href="https://booking-app.stayjanda.cloud/#/"><a>예약관리시스템</a></Link></span> */}
                            </div>
                            <ul className="bottom_list">
                                <li className="a_menu_tit deps solo_nav">
                                    <Link href="/guide">
                                        <a>
                                            {ln("itsguide")}
                                            <i className="jandaicon-arr4-right"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li className="a_menu_tit deps solo_nav">
                                    <Link href="/tour">
                                        <a>
                                            {ln("itstour")}
                                            <i className="jandaicon-arr4-right"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li className="a_menu_tit deps">
                                    <Link href="/service/announce">
                                        <a>
                                            {ln("service")}
                                            <i className="jandaicon-arr4-right"></i>
                                        </a>
                                    </Link>
                                    <ul className="depth1">
                                        <li>
                                            <a href="/service/announce">
                                                {ln("announce")}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/service/qna">
                                                {ln("frequentQuestion")}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/service/event">
                                                {ln("event")}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/service/question">
                                                {ln("question")}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/search">
                                                {ln("searchi")}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/service/rule">
                                                {ln("rule")}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/service/privacy-policy">
                                                {ln("privacy_policy")}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="a_menu_tit deps">
                                    <Link href="/site-info">
                                        <a>
                                            {ln("service")}
                                            <i className="jandaicon-arr4-right"></i>
                                        </a>
                                    </Link>
                                </li>
                                {isLogin && (
                                    <li className="a_menu_tit deps">
                                        <Link href="/mypage">
                                            <a target="_blank">
                                                MY PAGE
                                                <i className="jandaicon-arr4-right"></i>
                                            </a>
                                        </Link>
                                        <ul className="depth1">
                                            <li>
                                                <a href="/mypage">
                                                    {ln("user_info")}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/mypage/notification">
                                                    {ln("notification")}
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`/itsguid/${myId}`}>
                                                    {ln("profile_manager")}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/mypage/basket">
                                                    {ln("review_manage")}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/mypage/write">
                                                    {ln("mypage_write")}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/mypage/reservation">
                                                    {ln("reservation_manager")}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/mypage/plainning">
                                                    {ln("itstour")}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/mypage/settlement">
                                                    {ln("mypage_settlement")}
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                )}

                                {isManager && (
                                    <li className="a_menu_tit deps">
                                        <a href="/master">
                                            Master
                                            <i className="jandaicon-arr4-right"></i>
                                        </a>
                                        <ul className="depth1">
                                            <li>
                                                <a href="/master/notification">
                                                    알림
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/master/member/busipartner">
                                                    회원관리
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/master/goods">
                                                    상품관리
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/master/reservation">
                                                    예약관리
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/master/design">
                                                    디자인 설정
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/master/homepage">
                                                    홈페이지 설정
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                )}

                                <li className="a_menu_tit deps">
                                    <a href="/member/login">
                                        Member
                                        <i className="jandaicon-arr4-right"></i>
                                    </a>
                                    <ul className="depth1">
                                        <li>
                                            <a href="/member/login">
                                                {ln("login")}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/member/join">
                                                {ln("join")}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/member/findmembers">
                                                {ln("findmembers")}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <button
                                className="btn_all_close"
                                onClick={handleAllClose}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 26.15 26.15"
                                >
                                    <rect
                                        className="cls-2"
                                        x="296.95"
                                        y="402.74"
                                        width="1.98"
                                        height="35"
                                        transform="translate(520.91 99.55) rotate(135)"
                                    />
                                    <rect
                                        className="cls-2"
                                        x="296.95"
                                        y="402.74"
                                        width="1.98"
                                        height="35"
                                        transform="translate(-73.4 520.91) rotate(-135)"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="m_bg" />
                    </div>
                </div>
            </div>
        </header>
    );
};
