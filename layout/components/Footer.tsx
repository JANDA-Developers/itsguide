import React, { useContext, useEffect, useLayoutEffect } from "react";
import $ from "jquery";
import Link from "next/link";

import { AppContext } from "pages/_app";
import { useRouter } from "next/router";
import { staticInfo } from "../../info/static.json";

interface IProp {}

export const Footer: React.FC<IProp> = () => {
    const { locale } = useRouter();
    const { isLogin, myProfile } = useContext(AppContext);
    const ln = staticInfo(locale as any);

    const handleFadeClick = () => {
        $("family_site_select").css("display", "none");
        $("fade1").css("display", "none");
    };

    return (
        <footer className="footer" id="footer">
            {!isLogin && (
                <div id="gotop2" className="">
                    <a
                        title="위로"
                        onClick={() => {
                            window.scrollTo({ behavior: "smooth", top: 0 });
                        }}
                        className="top"
                    >
                        <i className="jandaicon-arr4-top" />
                    </a>
                    <a
                        onClick={() => {
                            window.scrollTo({ behavior: "smooth", top: 99999 });
                        }}
                        className="down"
                        title="아래로"
                    >
                        <i className="jandaicon-arr4-bottom" />
                    </a>
                </div>
            )}
            {isLogin && (
                <div id="gotop" className="">
                    <a
                        title="위로"
                        onClick={() => {
                            window.scrollTo({ behavior: "smooth", top: 0 });
                        }}
                        className="top"
                    >
                        <i className="jandaicon-arr4-top" />
                    </a>

                    <Link href="/tour/write">
                        <a className="write">
                            <i className="flaticon-add"></i>
                            <span className="menutxt">상품등록</span>
                            <button />
                        </a>
                    </Link>

                    <Link href={`/itsguid/${myProfile?._id}`}>
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

                    <a
                        title="아래로"
                        onClick={() => {
                            window.scrollTo({ behavior: "smooth", top: 99999 });
                        }}
                        className="down"
                    >
                        <i className="jandaicon-arr4-bottom" />
                    </a>
                </div>
            )}
            <div className="footer_in">
                <div className="bottom_nav">
                    <ul className="w1200">
                        <li>
                            <Link href="/site-info">
                                <a>{ln("footer_site_info")}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service/rule">
                                <a>{ln("footer_rule")}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service/privacy-policy">
                                <a>{ln("footer_privacy_policy")}</a>
                            </Link>
                        </li>
                        <li className="sns">
                            <div>
                                <Link href="https://www.facebook.com/profile.php?id=100061223413851">
                                    <a target="_blank">
                                        <i className="jandaicon-facebook"></i>
                                    </a>
                                </Link>
                                {/* <Link href="/"><a target="_blank"><i className="jandaicon-twitter"></i></a></Link> */}
                                <Link href="https://www.instagram.com/itsguide2021/">
                                    <a target="_blank">
                                        <i className="jandaicon-instagram2"></i>
                                    </a>
                                </Link>
                                {/* <Link href="/"><a target="_blank"><i>N</i></a></Link> */}
                            </div>
                        </li>
                        <li className="cs">
                            <Link href="mailto:kgcenter727@gmail.com">
                                <a>CONTACT</a>
                            </Link>
                        </li>
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
                                    {ln("itsguide_name")}
                                </strong>
                            </li>
                            <li>
                                <strong>{ln("footer_ceo")}</strong>
                                <span>{ln("itsguide_CEO")}</span>
                            </li>

                            <li>
                                <strong>{ln("footer_businessNumber")}</strong>
                                <span>
                                    863-86-01971
                                    <a
                                        href="http://www.ftc.go.kr/www/bizCommList.do?key=232"
                                        className="url"
                                        target="_blank"
                                        title="사업자정보확인확인 새창띄우기"
                                    >
                                        {ln("businessnumber_check")}
                                    </a>
                                </span>
                            </li>
                            <li>
                                <strong>{ln("footer_email")}</strong>
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
                                <strong>{ln("footer_phoneNumber")}</strong>
                                <span>
                                    <a href="tel:051-715-0727">
                                        {ln("itsguide_phone")}
                                    </a>
                                    Am 10:00 ~ pm 5:00
                                </span>
                            </li>
                            <li>
                                <strong>{ln("footer_fax")}</strong>
                                <span>{ln("itsguide_FAX")}</span>
                            </li>

                            <li>
                                <strong>{ln("footer_address")}</strong>
                                <span>
                                    {ln("itsguide_adress")}
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
                                <strong>{ln("footer_accountNum")}</strong>
                                <span>{ln("itsguide_bank")}</span>
                            </li>
                            <li className="bottom_txt m">
                                Copyright © 2021 it's Guide Co., Ltd. All rights
                                reserved
                            </li>
                        </ul>
                    </div>
                    <div className="bottom_bn">
                        <div className="partner">
                            <span className="link" style={{ width: "77px" }}>
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
                                {ln("footer_janda")}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div></div>
        </footer>
    );
};
