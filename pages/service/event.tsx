import React from "react";
import Link from "next/link";
import { NoData } from "../../components/common/NoData";
import { MemberTopNav } from "components/topNav/MasterTopNav";

interface IProp {}

export const QnaTable: React.FC<IProp> = () => {
    return (
        <div>
            <div className="top_visual">
                <div
                    className="sub_header sub_bg"
                    style={{ backgroundImage: `url(/its/su_visual_bg.jpg)` }}
                >
                    <div className="w1200">
                        <h2 className="title">이벤트</h2>
                        <p className="text">궁금한 것을 지금 물어보세요.</p>
                    </div>
                </div>
                <div className="header_nav">
                    <ul>
                        <li className="home">
                            <Link href="/index">
                                <a></a>
                            </Link>
                        </li>
                        <li className="homedeps1">서비스</li>
                        <li className="homedeps2">
                            <Link href="/service/event">
                                <a>이벤트</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="inquiry_box w1200">
                <MemberTopNav />
                <div>
                    <NoData label="이벤트 준비중 입니다." />
                </div>
            </div>
        </div>
    );
};

export default QnaTable;
