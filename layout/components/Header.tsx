import Link from "next/link"
import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { EditBtn } from 'components/common/EditBtn';
import $ from "jquery";
import { AppContext } from "pages/_app";

interface IProp { }

export const Header: React.FC<IProp> = () => {

    const { isLogin } = useContext(AppContext);

    const handleNav = () => {
        $('#header').attr("tabindex", -1);
        return false
    }

    const handleMain = () => {
        $('#content-bm').attr("tabindex", -1);
        return false;
    }
    const handSearch = () => {
        $('.hidden').css({
            'display': 'block'
        });
        $('.search_wrap').animate({
            'top': '0'
        });
        $('.search_bg').css({
            'display': 'block'
        });

    }
    const handSearchClose = () => {
        $('.search_bg').css({
            'display': 'none'
        });

        $('.search_wrap').animate({
            'top': '-100px'
        });
        $('.hidden').css({
            'display': 'none'
        });
    }

    const handleAllMenu = () => {
        $('#all_menu').animate({
            'top': '0'
        });
        $('.m_bg').css({
            'display': 'block'
        });
    }
    const handleAllClose = () => {
        const target = document.getElementById('all_menu_right');
        if (target)
            target.style.display = 'none';

        const target2 = document.getElementById('fade');
        if (target2)
            target2.style.display = 'none';
        $('.m_bg').css({
            'display': 'none'
        });
        $('#all_menu').animate({
            'top': '-2600px'
        });
    }

    const handleLogOut = () => {
        localStorage.removeItem("jwt");
        location.reload();
    }

    useEffect(() => {
        $('.nav_wrap ul li').on("hover", function () {
            $(this).find("ul").stop().fadeToggle(300);
        });

    }, [])


    return <header className="header" id="header">
        <div className="top-menu">
            <div className="w1200">
                {isLogin ? <p><strong>하나룽</strong>님 어서오세요~!!</p>
                    : <i />}
                <ul>
                    <li className="join">
                        {isLogin ? <i />
                            : <Link href="/join">
                                <a>JOIN</a>
                            </Link>}
                    </li>
                    <li className="login">
                        {isLogin ? <a onClick={handleLogOut}>LOGOUT</a>
                            : <Link href="/login">
                                <a>LOGIN</a>
                            </Link>}
                    </li>

                </ul>
            </div>
        </div>
        <div className="main_menu">
            <div className="w1200">
                <div className="u_skip">
                    <a href="#nav-bar" onClick={handleNav}><span>상단메뉴 바로가기</span></a>
                    <a href="#main" onClick={handleMain}><span>본문 바로가기</span></a>
                </div>
                <div className="hd_size">
                    <div className="hd_left">
                        <div className="logo">
                            <h1>
                                <Link href="/">
                                    <a><img src={'/img/logo_1.png'} alt="logo" /></a>
                                </Link>
                            </h1>
                        </div>
                    </div>
                    <div className="hd_center">
                        <div className="nav_wrap">
                            <ul className="deps1">
                                <li className="deps">
                                    {/*
                                    <Link href="/site-info">
                                        <a>PinkRoader</a>
                                    </Link>*/}
                                    <a href="/site-info">PinkRoader</a>
                                </li>
                                <li className="deps">
                                    {/*<Link href="/portfolio">
                                        <a>Work</a>
                                    </Link>*/}
                                    <a href="/portfolio">Work</a>
                                </li>
                                <li className="deps">
                                    {/* <Link href="/tour/list">
                                        <a>Tour</a>
                                    </Link>*/}
                                    <a href="/tour/list">Tour</a>
                                </li>
                                <li className="deps">
                                    {/*<Link href="/experience">
                                        <a>Experience</a>
                                    </Link>*/}
                                    <a href="/experience">Experience</a>
                                </li>
                                <li className="deps">
                                    {/*<Link href="https://smartstore.naver.com/pinkroader">
                                        <a target="_blank">Design Goods</a>
                                    </Link>*/}
                                    <a href="https://smartstore.naver.com/pinkroader" target="_blank">Design Goods</a>
                                </li>
                                <li className="deps">
                                    {/* <Link href="/news">
                                        <a>News</a>
                                    </Link>

                                    <ul className="deps_nav">
                                        <li><Link href="../tourstory"><a>여행이야기</a></Link></li>
                                        <li><Link href="../culture"><a>문화이야기</a></Link></li>
                                        <li><Link href="../news"><a>언론보도</a></Link></li>
                                    </ul>*/}

                                    <a href="/news">News</a>
                                    <ul className="deps_nav">
                                        <li><a href="/tourstory">여행이야기</a></li>
                                        <li><a href="/culture">문화이야기</a></li>
                                        <li><a href="/news">언론보도</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav_bg"></div>
                    <div className="hd_right">

                        <div className="profile">
                            <span className="photo">프로필 사진</span>
                            <ul>
                                <li><span><Link href="/my-page"><a>회원정보</a></Link></span></li>
                                <li><span><Link href="/purchase"><a>장바구니</a></Link></span></li>
                                <li><span><Link href="/"><a>구매내역</a></Link></span></li>
                                <li><span><Link href="/"><a>나의 게시글</a></Link></span></li>
                                <li><span><Link href="/"><a>예약관리</a></Link></span></li>
                                <li><span><Link href="/"><a>매출/정산관리</a></Link></span></li>
                                <li><span><Link href="/"><a>로그아웃</a></Link></span></li>
                            </ul>
                        </div>
                        <div className="searchtop">
                            <div className="search_btn">
                                <object type="image/svg+xml" data={'/img/svg/search_icon.svg'}>
                                    현재 브라우저는 iframe을 지원하지 않습니다.
                            </object>
                                <button onClick={handSearch} />
                            </div>
                            <div className="hidden">
                                <div className="w1200">
                                    <div className="search_wrap">

                                        <input type="text" placeholder="검색어를 입력해주세요" />
                                        <div className="search_btn">
                                            <object type="image/svg+xml" data={'/img/svg/search_icon.svg'}>현재 브라우저는 iframe을 지원하지 않습니다.</object>
                                            <button className="btt1" />
                                        </div>
                                        <div className="close_btn" onClick={handSearchClose}>
                                            <i className="flaticon-multiply"></i>
                                            <button className="btt2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={handSearchClose} className="search_bg"></div>
                        </div>
                        {isLogin ?
                            <div className="inform_top">
                                <div className="inform_icon">
                                    <object type="image/svg+xml" data={'/img/svg/inform_icon4.svg'}>
                                        현재 브라우저는 iframe을 지원하지 않습니다.
                            </object>
                                    <button />
                                    <span className="number">99+</span>
                                </div>
                            </div>
                            : <i />}
                        <div onClick={handleAllMenu} className="all_menu_btn">
                            <object type="image/svg+xml" data={'/img/svg/allmenu_icon.svg'}>현재 브라우저는 iframe을 지원하지 않습니다.</object>
                            <button />
                        </div>

                    </div>
                    <div id="all_menu">
                        <strong>전체메뉴</strong>
                        <div className="m_member">
                            <div className="profile">
                                <span className="photo"></span>
                            </div>
                            <div className="profile_txt">
                                <span className="text01">포인트</span>
                                <span className="text02">0원</span>
                            </div>
                        </div>
                        <div className="m_all_menu_in">
                            <span><Link href="../login"><a>LOGIN</a></Link></span>
                            <span><Link href="/"><a>LOGOUT</a></Link></span>
                            <span><Link href="../my-page"><a>MY PAGE</a></Link></span>
                            <span><Link href="/"><a>알림</a></Link></span>
                            <span><Link href="https://booking-app.stayjanda.cloud/#/"><a>예약관리시스템</a></Link></span>
                        </div>
                        <ul>
                            <li className="a_menu_tit deps solo_nav">
                                <Link href="/site-info"><a>PinkRoader<i className="jandaicon-arr4-right"></i></a></Link>
                            </li>
                            <li className="a_menu_tit deps solo_nav">
                                <Link href="/portfolio"><a>Work<i className="jandaicon-arr4-right"></i></a></Link>
                            </li>
                            <li className="a_menu_tit deps">
                                <Link href="/tour/list"><a>Tour<i className="jandaicon-arr4-right"></i></a></Link>
                                <ul className="depth1">
                                    <li onClick={handleAllClose} className="betatest"><Link href="/tour/list"><a>Tour - list</a></Link></li>
                                    <li onClick={handleAllClose} className="betatest"><Link href="/tour/list"><a>Tour - veiw</a></Link></li>
                                    <li onClick={handleAllClose} className="betatest"><Link href="/tour/list"><a>Tour - correction+writing</a></Link></li>

                                </ul>
                            </li>
                            <li className="a_menu_tit deps">
                                <Link href="/tour?type=exp"><a>Experience<i className="jandaicon-arr4-right"></i></a></Link>
                                <ul className="depth1">
                                    <li onClick={handleAllClose} className="betatest"><Link href="/"><a>Experience - list</a></Link></li>
                                    <li onClick={handleAllClose} className="betatest"><Link href="/"><a>Experience - veiw</a></Link></li>
                                    <li onClick={handleAllClose} className="betatest"><Link href="/"><a>Experience - correction+writing</a></Link></li>

                                </ul>
                            </li>
                            <li className="a_menu_tit deps solo_nav">
                                <Link href="/"><a target="_blank">Design Goods<i className="jandaicon-arr4-right"></i></a></Link>
                            </li>
                            <li className="a_menu_tit deps">
                                <Link href="/news"><a target="_blank">News<i className="jandaicon-arr4-right"></i></a></Link>
                                <ul className="depth1">
                                    <li onClick={handleAllClose}><Link href="/tourstory"><a>여행이야기</a></Link></li>
                                    <li onClick={handleAllClose}><Link href="/culture"><a>문화이야기</a></Link></li>
                                    <li onClick={handleAllClose}><Link href="/news"><a>언론보도</a></Link></li>
                                </ul>
                            </li>
                            <li className="a_menu_tit deps hiddennav betatest">
                                <Link href="/mypage"><a target="_blank">My page<i className="jandaicon-arr4-right"></i></a></Link>
                                <ul className="depth1">
                                    <li><a href="/mypage">회원정보</a></li>
                                    <li><a href="/mypage/notification">알림</a></li>
                                    <li><a href="/mypage/purchase">구매내역</a></li>
                                    <li><a href="/mypage/basket">장바구니</a></li>
                                    <li><a href="/mypage/write">나의 게시글</a></li>
                                    <li><a href="/mypage/reservation">예약관리</a></li>
                                    <li><a href="/mypage/goods">상품관리</a></li>
                                    <li><a href="/mypage/plainning">기획관리</a></li>
                                    <li><a href="/mypage/settlement">매출/정산관리</a></li>
                                </ul>
                            </li>
                            <li className="a_menu_tit deps hiddennav betatest">

                                <a href="/master">Master<i className="jandaicon-arr4-right"></i></a>
                                <ul className="depth1">
                                    <li><a href="/master/notification">알림</a></li>
                                    <li><a href="/master/member">회원관리</a></li>
                                    <li><a href="/master/goods">상품관리</a></li>
                                    <li><a href="/master/reservation">예약관리</a></li>
                                    <li><a href="/master/design">디자인 설정</a></li>
                                    <li><a href="/master/homepage">홈페이지 설정</a></li>
                                </ul>

                            </li>
                            <li className="a_menu_tit deps hiddennav betatest">
                                <a href="../login">Member<i className="jandaicon-arr4-right"></i></a>
                                <ul className="depth1">
                                    <li><a href="/login">로그인</a></li>
                                    <li><a href="/join">회원가입</a></li>
                                    <li><a href="/idpw_find">아이디/비번 찾기</a></li>
                                    <li><a href="/member/search">통합검색</a></li>
                                    <li><a href="/member/rule">이용약관</a></li>
                                    <li><a href="/member/privacy-policy">개인정보처리방침</a></li>
                                    <li><a href="/member/electron-terms">전자상거래이용약관</a></li>
                                    <li><a href="/member/kr-terms">국내여행약관</a></li>
                                    <li><a href="/member/inquiry">고객문의</a></li>
                                    <li><a href="/member/notice">공지사항</a></li>
                                    <li><a href="/member/qna">자주하는질문</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button className="btn_all_close" onClick={handleAllClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.15 26.15">
                                <rect className="cls-2" x="296.95" y="402.74" width="1.98" height="35" transform="translate(520.91 99.55) rotate(135)" />
                                <rect className="cls-2" x="296.95" y="402.74" width="1.98" height="35" transform="translate(-73.4 520.91) rotate(-135)" />
                            </svg>
                        </button>
                    </div>
                    <div className="m_bg" />
                    <EditBtn />
                </div>
            </div>
        </div>
    </header >;
};
