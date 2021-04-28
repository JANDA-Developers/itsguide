import React, { useContext, useEffect, useLayoutEffect } from "react";
import $ from "jquery";
import Link from "next/link";

import { AppContext } from "pages/_app";
import { useRouter } from "next/router";
import { staticInfo } from "../../info/static.json";

interface IProp {}

export const Footer: React.FC<IProp> = () => {
<<<<<<< HEAD
    const { locale } = useRouter();
=======
>>>>>>> design
    const { isLogin } = useContext(AppContext);
    const ln = staticInfo(locale as any);

    const handleFadeClick = () => {
        $("family_site_select").css("display", "none");
        $("fade1").css("display", "none");
    };
<<<<<<< HEAD

    return (
        <footer className="footer" id="footer">
            <div id="gotop" className="">
                <Link href="#header">
                    <a className="top">
                        <i className="jandaicon-arr4-top" />
                    </a>
                </Link>
                {/* {isLogin && <Link href="/mypage/basket">
                <a className="basket"><img src="/img/svg/basket.svg" alt="basket icon" /><button /></a>
            </Link>} */}
                <Link href="#footer">
                    <a className="down">
                        <i className="jandaicon-arr4-bottom" />
                    </a>
                </Link>
            </div>
=======
    const { isParterB, myProfile } = useContext(AppContext);
    const _id = myProfile?._id;

    return (
        <footer className="footer" id="footer">
            {!isLogin && (
                <div id="gotop2" className="">
                    <Link href="#header">
                        <a className="top">
                            <i className="jandaicon-arr4-top" />
                            {/* <span className="menutxt">위로</span> */}
                        </a>
                    </Link>
                    <Link href="#footer">
                        <a className="down">
                            <i className="jandaicon-arr4-bottom" />
                            {/* <span className="menutxt">아래로</span> */}
                        </a>
                    </Link>
                </div>
            )}
            {isLogin && (
                <div id="gotop" className="">
                    <Link href="#header">
                        <a className="top">
                            <i className="jandaicon-arr4-top" />
                            {/* <span className="menutxt">위로</span> */}
                        </a>
                    </Link>

                    <Link href="/tour/write">
                        <a className="write">
                            <i className="flaticon-add"></i>
                            <span className="menutxt">상품등록</span>
                            <button />
                        </a>
                    </Link>

                    <Link href={`/itsguid/${_id}`}>
                        <a className="home">
                            <div className="img">
                                <img
                                    src="/its/icon_home_g.svg"
                                    alt="home icon"
                                />
                            </div>
                            <span className="menutxt">프로필홈</span>
                            <button />
                        </a>
                    </Link>

                    <Link href="#footer">
                        <a className="down">
                            <i className="jandaicon-arr4-bottom" />
                            {/* <span className="menutxt">아래로</span> */}
                        </a>
                    </Link>
                </div>
            )}
>>>>>>> design
            <div className="footer_in">
                <div className="bottom_nav">
                    <ul className="w1200">
                        <li>
                            <Link href="/site-info">
<<<<<<< HEAD
                                <a>{ln("footer_site_info")}</a>
=======
                                <a>회사소개</a>
>>>>>>> design
                            </Link>
                        </li>
                        <li>
                            <Link href="/service/rule">
<<<<<<< HEAD
                                <a>{ln("footer_rule")}</a>
=======
                                <a>이용약관</a>
>>>>>>> design
                            </Link>
                        </li>
                        <li>
                            <Link href="/service/privacy-policy">
<<<<<<< HEAD
                                <a>{ln("footer_privacy_policy")}</a>
=======
                                <a>개인정보처리방침</a>
>>>>>>> design
                            </Link>
                        </li>
                        <li className="sns">
                            <div>
                                <Link href="https://www.facebook.com/profile.php?id=100061223413851">
                                    <a target="_blank">
                                        <i className="jandaicon-facebook"></i>
                                    </a>
                                </Link>
<<<<<<< HEAD
                                {/* <Link href="/"><a target="_blank"><i className="jandaicon-twitter"></i></a></Link> */}
=======
>>>>>>> design
                                <Link href="https://www.instagram.com/itsguide2021/">
                                    <a target="_blank">
                                        <i className="jandaicon-instagram2"></i>
                                    </a>
                                </Link>
<<<<<<< HEAD
                                {/* <Link href="/"><a target="_blank"><i>N</i></a></Link> */}
                            </div>
                        </li>
                        <li className="cs">
                            {" "}
                            <Link href="mailto:kgcenter727@gmail.com">
                                <a>CONTACT</a>
                            </Link>
                        </li>
=======
                            </div>
                        </li>
                        <li className="cs">
                            {" "}
                            <Link href="mailto:kgcenter727@gmail.com">
                                <a>CONTACT</a>
                            </Link>
                        </li>
>>>>>>> design
                    </ul>
                </div>
                <div className="f_detail_wrap">
                    <div className="ft_left">
                        <div className="logo_bottom">
                            <img src="/its/logo_1.png" alt="logo" />
                        </div>
                    </div>
                    <div className="copyright">
                        <ul className="footer_homepage_info">
                            <li>
                                <strong className="name">
                                    코리아가이드센터(주)
                                </strong>
                            </li>
                            <li>
<<<<<<< HEAD
                                <strong>{ln("footer_ceo")}</strong>
=======
                                <strong>대표</strong>
>>>>>>> design
                                <span>최성희</span>
                            </li>

                            <li>
<<<<<<< HEAD
                                <strong>{ln("footer_phoneNumber")}</strong>
=======
                                <strong>사업자등록번호</strong>
>>>>>>> design
                                <span>
                                    863-86-01971
                                    <a
                                        href="http://www.ftc.go.kr/www/bizCommList.do?key=232"
                                        className="url"
                                        target="_blank"
                                        title="사업자정보확인확인 새창띄우기"
                                    >
                                        사업자정보확인
                                    </a>
                                </span>
                            </li>
                            <li>
<<<<<<< HEAD
                                <strong>{ln("footer_email")}</strong>
=======
                                <strong>이메일</strong>
>>>>>>> design
                                <span>kgcenter727@gmail.com</span>
                            </li>
                            {/* <li>
                            <strong>통신판매업신고번호</strong>
                            <span>제 2017-부산중구-0167호</span>
                        </li> */}
                            {/* <li>
                            <strong>영업보증보험</strong>
                            <span>5천만원 가입</span>
                        </li> */}
                            <li className="bottom_txt pc">
                                Copyright © 2021 it's Guide Co., Ltd. All rights
                                reserved
                            </li>
                        </ul>
                        <ul className="footer_homepage_info mt">
                            <li>
<<<<<<< HEAD
                                <strong>{ln("footer_phoneNumber")}</strong>
=======
                                <strong>전화번호</strong>
>>>>>>> design
                                <span>
                                    <a href="tel:051-715-0727">051-715-0727</a>{" "}
                                    Am 10:00 ~ pm 5:00
                                </span>
                            </li>
                            <li>
<<<<<<< HEAD
                                <strong>{ln("footer_fax")}</strong>
=======
                                <strong>팩스</strong>
>>>>>>> design
                                <span>051-715-0728</span>
                            </li>

                            <li>
<<<<<<< HEAD
                                <strong>{ln("footer_address")}</strong>
=======
                                <strong>주소</strong>
>>>>>>> design
                                <span>
                                    부산광역시 영도구 봉래나루로 33, 306-27
                                    <a
                                        target="_blank"
                                        href="http://naver.me/GjR8uKKb"
                                        className="icon"
                                        title="지도로 새창띄우기"
                                    >
                                        <img
                                            src="/img/svg/map.svg"
                                            alt="지도바로가기"
                                        />
                                    </a>
                                </span>
                            </li>
                            <li>
<<<<<<< HEAD
                                <strong>{ln("footer_accountNum")}</strong>
=======
                                <strong>계좌번호</strong>
>>>>>>> design
                                <span>농협 351-1150-2295-63</span>
                            </li>
                            <li className="bottom_txt m">
                                Copyright © 2021 it's Guide Co., Ltd. All rights
                                reserved
                            </li>
                        </ul>
                    </div>
                    <div className="bottom_bn">
                        <div className="partner">
<<<<<<< HEAD
                            <span className="link" style={{ width: "77px" }}>
=======
                            <span className="link">
>>>>>>> design
                                <img
                                    src="/its/partner_01.png"
                                    alt="한국관광공사 로고"
                                />
                            </span>
                            <span className="link">
                                <img
                                    src="/its/partner_02.png"
                                    alt="부산관광공사 로고"
                                />
                            </span>
                            <span className="link">
                                <img
                                    src="/its/partner_03.png"
                                    alt="부산관광기업지원센터 로고"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="fade1" onClick={handleFadeClick} />
            <div className="footer-area-bottom">
                <div className="container">
                    <div className="janda_txt">
                        <p>
                            <a
                                href="https://stayjanda.com/"
                                target="_blank"
                                rel="noopener"
                            >
                                <i className="jandaicon-janda"></i>
<<<<<<< HEAD
                                {ln("footer_janda")}
=======
                                대한민국 1등 클라우드·핀테크 기반 예약솔루션
>>>>>>> design
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div></div>
        </footer>
    );
};
