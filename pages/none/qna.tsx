import React from "react";
import Link from "next/link";

interface IProp {}

export const QnaTable: React.FC<IProp> = () => {
    return (
        <div>
            <div className="top_visual sub_nav_ok">
                <div
                    className="sub_header sub_bg"
                    style={{ backgroundImage: `url(/its/su_visual_bg.jpg)` }}
                >
                    <div className="w1200">
                        <h2 className="title">이벤트</h2>
                        <p className="text">궁금한 것이 있으신가요?</p>
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
                            <Link href="/service/event">
                                <a>이벤트</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="qna_box w1200">
                <ul className="subtop_nav">
                    <li>
                        <Link href="/service/notice">
                            <a>공지사항</a>
                        </Link>
                    </li>
                    <li className="on">
                        <Link href="/service/event">
                            <a>이벤트</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/service/inquiry">
                            <a>고객문의</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/service/">
                            <a>가이드공지</a>
                        </Link>
                    </li>
                </ul>
                <div className="board_qna">
                    <div className="alignment">
                        <div className="left_div">
                            <ul className="board_option">
                                <li className="on">
                                    <Link href="/">
                                        <a>
                                            전체<strong>46</strong>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            여행<strong>23</strong>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            체험<strong>23</strong>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            회원<strong>23</strong>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="right_div"></div>
                    </div>

                    <div className="dl">
                        <div className="dt">
                            <span>
                                <i className="Q"></i>여행
                            </span>
                            문의는 어디서 하죠?
                            <i className="jandaicon-arr4-bottom"></i>
                        </div>
                        <div className="dd panel-collapse collapse in">
                            <div className="form">
                                <i className="A"></i>
                                <p>
                                    문의는 고객문의 게시판에서 해주세요.문의는
                                    고객문의 게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="dl active">
                        {/* active 추가시 열림 이벤트 */}
                        <div className="dt">
                            <span>
                                <i className="Q"></i>여행
                            </span>
                            문의는 어디서 하죠?
                            <i className="jandaicon-arr4-bottom"></i>
                        </div>
                        <div className="dd panel-collapse collapse in">
                            <div className="form">
                                <i className="A"></i>
                                <p>
                                    문의는 고객문의 게시판에서 해주세요.문의는
                                    고객문의 게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요문의는 고객문의
                                    게시판에서 해주세요
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fin mt30 mb100">
                    <div className="float_left">
                        <button type="submit" className="btn medium">
                            새글쓰기
                        </button>
                    </div>
                    <div className="float_right">
                        <button type="submit" className="btn medium">
                            새글쓰기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QnaTable;
