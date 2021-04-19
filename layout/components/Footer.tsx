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
            {isLogin && <Link href="/mypage/basket">
                <a className="basket"><object type="image/svg+xml" data="/img/svg/basket.svg">현재 브라우저는 iframe을 지원하지 않습니다.</object><button /></a>
            </Link>}
            <Link href="#footer">
                <a className="down"><i className="jandaicon-arr4-bottom" /></a>
            </Link>
        </div>
        <div className="footer_in">
            <div className="bottom_nav">
                <ul className="w1200">
                    <li><Link href="/site-info"><a>회사소개</a></Link></li>
                    <li><Link href="/member/rule"><a>이용약관</a></Link></li>
                    <li><Link href="/member/kr-terms"><a>국내여행약관</a></Link></li>
                    <li><Link href="/member/privacy-policy"><a>개인정보처리방침</a></Link></li>
                    <li className="sns">
                        <div>
                            <Link href="https://www.facebook.com/PinkRoader"><a target="_blank"><i className="jandaicon-facebook"></i></a></Link>
                            <Link href="https://twitter.com/PinkRoader"><a target="_blank"><i className="jandaicon-twitter"></i></a></Link>
                            <Link href="https://www.instagram.com/pinkroader_"><a target="_blank"><i className="jandaicon-instagram2"></i></a></Link>
                            <Link href="http://blog.naver.com/pinkroader"><a target="_blank"><i>N</i></a></Link>
                        </div>
                    </li>
                    <li className="cs"> <Link href="mailto:pinkroader@gmail.com"><a>CONTACT</a></Link></li>
                </ul>
            </div>
            <div className="f_detail_wrap">
                <div className="ft_left">
                    <div className="magency logo_bottom">
                        <img src="/img/logo_2.png" alt="logo" />
                    </div>
                </div>
                <div className="copyright">
                    <ul className="footer_homepage_info">
                        <li>
                            <strong className="name">주식회사 핑크로더</strong>
                        </li>
                        <li>
                            <strong>대표</strong>
                            <span>양화니</span>
                        </li>

                        <li>
                            <strong>사업자등록번호</strong>
                            <span>603-81-87668<a href="http://www.ftc.go.kr/www/bizCommList.do?key=232" className="url" target="_blank" title="사업자정보확인확인 새창띄우기">사업자정보확인</a></span>
                        </li>
                        <li>
                            <strong>통신판매업신고번호</strong>
                            <span>제 2017-부산중구-0167호</span>
                        </li>
                        <li>
                            <strong>영업보증보험</strong>
                            <span>5천만원 가입</span>
                        </li>
                        <li className="bottom_txt">
                            Copyright © 2020 PINKROADER Co., Ltd. All rights reserved
                         </li>
                    </ul>
                    <ul className="footer_homepage_info mt">
                        <li>
                            <strong>이메일</strong>
                            <span>pinkroader@gmail.com</span>
                        </li>
                        <li>
                            <strong>전화번호</strong>
                            <span>051-254-2420 Am 10:00 ~ pm 5:00</span>
                        </li>

                        <li>
                            <strong>주소</strong>
                            <span>부산광역시 중구 40계단길 10, 3F<a target="_blank" href="https://map.naver.com/v5/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%A4%91%EA%B5%AC%2040%EA%B3%84%EB%8B%A8%EA%B8%B8%2010/address/14364152.250451025,4178003.4322139453,%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%A4%91%EA%B5%AC%2040%EA%B3%84%EB%8B%A8%EA%B8%B8%2010,new?c=14364121.5911725,4178009.4229934,19,0,0,0,dh" className="icon" title="지도로 새창띄우기"><object type="image/svg+xml" data="/img/svg/map.svg">현재 브라우저는 iframe을 지원하지 않습니다.</object><button /></a></span>
                        </li>
                        <li>
                            <strong>계좌번호</strong>
                            <span>신한은행 100-031-819617/예금주:주식회사 핑크로더</span>
                        </li>
                    </ul>
                    <div className="bottom_bn">
                        <div className="partner">

                            <span className="link" style={{ width: "114px" }}><img src="/img/pt_logo_01.png" alt="중소벤처기업로고" /></span>
                            <span className="link" style={{ width: "90px" }}><img src="/img/pt_logo_02.png" alt="여성기업" /></span>
                            <span className="link" style={{ width: "90px" }}><img src="/img/pt_logo_03.png" alt="사회적기업" /></span>
                            <span className="link"><img src="/img/pt_logo_04.png" alt="공유경제부산" /></span>
                            <span className="link" style={{ width: "88px" }}><img src="/img/pt_logo_05.png" alt="벤처기업인증" /></span>
                        </div>
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
                            대한민국 1등 온·오프라인 숙소운영 및 통합예약 솔루션
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <div>
        </div>
    </footer>;
};
