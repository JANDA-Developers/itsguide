import React, { useContext, useEffect, useLayoutEffect } from 'react';
import $ from "jquery";
import Link from "next/link";

import { AppContext } from "pages/_app";

interface IProp { }

export const Footer: React.FC<IProp> = () => {

    const { isLogin } = useContext(AppContext);

    const handleFadeClick = () => {
        $('family_site_select').css("display", 'none');
        $('fade1').css("display", 'none');
    }


    return <footer className="footer" id="footer">
        <div id="gotop" className="">
            <Link href="#header">
                <a className="top"><i className="jandaicon-arr4-top" /></a>
            </Link>
            {/* {isLogin && <Link href="/mypage/basket">
                <a className="basket"><img src="/img/svg/basket.svg" alt="basket icon" /><button /></a>
            </Link>} */}
            <Link href="#footer">
                <a className="down"><i className="jandaicon-arr4-bottom" /></a>
            </Link>
        </div>
        <div className="footer_in">
            <div className="bottom_nav">
                <ul className="w1200">
                    <li><Link href="/site-info"><a>회사소개</a></Link></li>
                    <li><Link href="/service/rule"><a>이용약관</a></Link></li>
                    <li><Link href="/service/privacy-policy"><a>개인정보처리방침</a></Link></li>
                    <li className="sns">
                        <div>
                            <Link href="https://www.facebook.com/profile.php?id=100061223413851"><a target="_blank"><i className="jandaicon-facebook"></i></a></Link>
                            {/* <Link href="/"><a target="_blank"><i className="jandaicon-twitter"></i></a></Link> */}
                            <Link href="https://www.instagram.com/itsguide2021/"><a target="_blank"><i className="jandaicon-instagram2"></i></a></Link>
                            {/* <Link href="/"><a target="_blank"><i>N</i></a></Link> */}
                        </div>
                    </li>
                    <li className="cs"> <Link href="mailto:kgcenter727@gmail.com"><a>CONTACT</a></Link></li>
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
                            <strong className="name">코리아가이드센터(주)</strong>
                        </li>
                        <li>
                            <strong>대표</strong>
                            <span>최성희</span>
                        </li>

                        <li>
                            <strong>사업자등록번호</strong>
                            <span>863-86-01971<a href="http://www.ftc.go.kr/www/bizCommList.do?key=232" className="url" target="_blank" title="사업자정보확인확인 새창띄우기">사업자정보확인</a></span>
                        </li>
                        <li>
                            <strong>이메일</strong>
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
                            Copyright © 2021 it's Guide Co., Ltd. All rights reserved
                         </li>
                    </ul>
                    <ul className="footer_homepage_info mt">

                        <li>
                            <strong>전화번호</strong>
                            <span><a href="tel:051-715-0727">051-715-0727</a> Am 10:00 ~ pm 5:00</span>
                        </li>
                        <li>
                            <strong>팩스</strong>
                            <span>051-715-0728</span>
                        </li>

                        <li>
                            <strong>주소</strong>
                            <span>부산광역시 영도구 봉래나루로 33, 306-27<a target="_blank" href="http://naver.me/GjR8uKKb" className="icon" title="지도로 새창띄우기"><img src="/img/svg/map.svg" alt="지도바로가기" /></a></span>
                        </li>
                        <li>
                            <strong>계좌번호</strong>
                            <span>농협 351-1150-2295-63</span>
                        </li>
                        <li className="bottom_txt m">
                            Copyright © 2021 it's Guide Co., Ltd. All rights reserved
                         </li>
                    </ul>

                </div>
                <div className="bottom_bn">
                    <div className="partner">
                        <span className="link" style={{ width: "77px" }}><img src="/its/partner_01.png" alt="한국관광공사 로고" /></span>
                        <span className="link"><img src="/its/partner_02.png" alt="부산관광공사 로고" /></span>
                        <span className="link"><img src="/its/partner_03.png" alt="부산관광기업지원센터 로고" /></span>
                    </div>
                </div>
            </div>
        </div>
        <div id="fade1" onClick={handleFadeClick} />
        <div className="footer-area-bottom">
            <div className="container">
                <div className="janda_txt">
                    <p>
                        <a href="https://stayjanda.com/" target="_blank" rel="noopener">
                            <i className="jandaicon-janda"></i>
                            대한민국 1등 클라우드·핀테크 기반 예약솔루션
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <div>
        </div>
    </footer>;
};
