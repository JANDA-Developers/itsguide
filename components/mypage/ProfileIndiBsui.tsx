import { expr } from 'jquery';
import React from 'react';

interface IProp { }

export const ProfileIndiBusi: React.FC<IProp> = () => {
    return <div className="in">
        <h4>기업파트너</h4>
        <div className="mypage_page">
            <div className="box1">
                <div className="top_info">
                    <ul className="line5">
                        <li className="ct">
                            <span>234</span>
                            <p>상품 등록 수</p>
                        </li>
                        <li className="ct">
                            <span>34</span>
                            <p>
                                총 판매 수<i className="jandaicon-info2" />
                            </p>
                        </li>
                        <li className="ct">
                            <span>234</span>
                            <p>이번달 총 매량</p>
                        </li>
                        <li className="ct">
                            <span>234</span>
                            <p>저번달 총 매량</p>
                        </li>
                        <li className="ct">
                            <span>1</span>
                            <p>정산 신청건</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="box2">
                <div className="box_left">
                    <div className="title">
                        <h5>기본정보</h5>
                    </div>
                </div>
                <div className="box_right">
                    <ul>
                        <li>
                            <div className="title">이메일</div>
                            <div className="txt">zocbdjf@gamil.com</div>
                        </li>
                        <li>
                            <div className="title">비밀번호</div>
                            <div className="txt">
                                <div className="input_relative">
                                    <input
                                        type="password"
                                        className="form-control w100 ok"
                                        placeholder="변경할 비밀번호를 입력 해주세요"
                                    />
                                    <i className="jandaicon-check btn_in" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="title">비밀번호 확인</div>
                            <div className="txt">
                                <div className="input_relative">
                                    <input
                                        type="password"
                                        className="form-control w100"
                                        placeholder="변경할 비밀번호를 다시 입력 해주세요"
                                    />
                                    <i className="jandaicon-check btn_in" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="box2">
                <div className="box_left">
                    <div className="title">
                        <h5>기업정보</h5>
                    </div>
                </div>
                <div className="box_right">
                    <ul>
                        <li>
                            <div className="title">파트너명(회사명)</div>
                            <div className="txt">새부산관광</div>
                        </li>
                        <li>
                            <div className="title">사업자번호</div>
                            <div className="txt">
                                <select className="w20">
                                    <option>개인</option>
                                    <option>법인</option>
                                </select>
                                <input
                                    type="text"
                                    className="form-control w70"
                                    placeholder="사업자번호를 입력해주세요."
                                />
                            </div>
                        </li>
                        <li>
                            <div className="title">대표 전화번호</div>
                            <div className="txt">
                                <select className="w20">
                                    <option>02</option>
                                    <option>055</option>
                                </select>
                                <input
                                    type="text"
                                    className="form-control w70"
                                    placeholder="전화번호를 입력해주세요."
                                />
                            </div>
                        </li>
                        <li>
                            <div className="title">주소</div>
                            <div className="txt line2">
                                <input type="text" className="form-control w70" />
                                <button type="button" className="btn btn_mini">
                                    주소찾기
    </button>
                                <input
                                    type="text"
                                    className="form-control w100"
                                    placeholder="상세주소"
                                />
                            </div>
                        </li>
                        <li>
                            <div className="title">담당자</div>
                            <div className="txt">
                                <input
                                    type="text"
                                    className="form-control w20"
                                    placeholder="부서명"
                                />{" "}
                                <input
                                    type="text"
                                    className="form-control w50"
                                    placeholder="담당자를 입력해주세요."
                                />
                            </div>
                        </li>
                        <li>
                            <div className="title">담당자 연락처</div>
                            <div className="txt">
                                <span className="w80">010-4102-9777</span>
                                <button type="button" className="btn btn_mini">
                                    변경
    </button>
                            </div>
                            {/* 변경시 변경아이콘 눌러 popup띄워서 핸드폰번호 인증절차 거치게됨 */}
                        </li>
                        <li>
                            <div className="title">첨부서류</div>
                            <div className="txt">
                                <span className="w80 upload_out_box">
                                    사업자등록증_최종.jpg
    </span>
                                <button type="button" className="btn btn_mini">
                                    업로드
    </button>
                            </div>
                        </li>
                        <li>
                            <div className="title">정산계좌</div>
                            <div className="txt">
                                <div className="line_first">
                                    <input
                                        type="text"
                                        className="form-control w20"
                                        placeholder="은행명"
                                    />{" "}
                                    <input
                                        type="text"
                                        className="form-control w50"
                                        placeholder="- 없이 숫자만 입력해주세요."
                                    />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="box3">
                <div className="box_left">
                    <div className="title">
                        <h5>기타정보</h5>
                    </div>
                </div>
                <div className="box_right">
                    <ul>
                        <li>
                            <div className="title">예약관리시스템</div>
                            <div className="txt">
                                <span className="blue">연결완료</span>
                                <a className="btn outlink" href="/">
                                    예약관리시스템 바로가기
      <i />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="title">SNS 수신동의</div>
                            <div className="txt tr">
                                <input type="checkbox" />
                                <span>SNS 수신 동의를 합니다.</span>
                            </div>
                        </li>
                        <li>
                            <div className="title">E-mail 수신동의</div>
                            <div className="txt tr">
                                <input type="checkbox" />
                                <span>E-mail 수신 동의를 합니다.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="fin">
                <div className="float_left">
                    <button type="submit" className="btn medium color01">
                        회원탈퇴
    </button>
                </div>
                <div className="float_right">
                    <button type="submit" className="btn medium">
                        수정
    </button>
                </div>
            </div>
        </div>
    </div>;
};

export default ProfileIndiBusi;