import Link from "next/link";
import React from "react";

interface IProp {}

export const ElectronTerms: React.FC<IProp> = () => {
    return (
        <div>
            <div className="top_visual sub_nav_ok">
                <div
                    className="sub_header sub_bg"
                    style={{ backgroundImage: `url(/its/su_visual_bg.jpg)` }}
                >
                    <div className="w1200">
                        <h2 className="title">전자상거래이용약관</h2>
                        {/*<p className="text">지금 여행을 떠나세요~!~~!!!!!</p>*/}
                    </div>
                </div>
                <div className="header_nav">
                    <ul>
                        <li className="home">
                            <Link href="/index">
                                <a></a>
                            </Link>
                        </li>
                        <li className="homedeps1">Member</li>
                        <li className="homedeps2">
                            <Link href="/">
                                <a>전자상거래이용약관</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="electronterms_box w1200">
                <ul className="subtop_nav">
                    <li>
                        <Link href="/service/rule">
                            <a>이용약관</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/service/privacy-policy">
                            <a>개인정보처리방침</a>
                        </Link>
                    </li>
                    <li className="on">
                        <Link href="/service/electron-terms">
                            <a>전자상거래이용약관</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/service/kr-terms">
                            <a>국내여행약관</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ElectronTerms;
