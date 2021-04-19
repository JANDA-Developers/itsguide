import React from 'react';
import { getBracket } from '../../utils/Storage';

interface IProp { }

export const ProfileIndi: React.FC<IProp> = () => {

    return <div className="in">
        <h4>일반회원정보</h4>
        <div className="mypage_page">
            <div className="box1">
                <div className="top_info">
                    <ul className="line4">
                        <li className="ct">
                            <span>34</span>
                            <p>
                                총 구매 수<i className="jandaicon-info2" />
                            </p>
                        </li>
                        <li className="ct">
                            <span>222</span>
                            <p>
                                총 접속 수
                            </p>
                        </li>
                        <li className="ct">
                            <span>222</span>
                            <p>
                                참여한 이벤트 수
                            </p>
                        </li>
                        <li className="ct">
                            0
                            {/* <span>{getBracket()?.length}</span> */}
                            <p>
                                장바구니
                            </p>
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
                        <li>
                            <div className="title">이름</div>
                            <div className="txt">
                                <strong>김선화</strong>
                                <ul className="country_check">
                                    <li className="c_in on">내국인</li>
                                    <li className="c_out">외국인</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="title">성별</div>
                            <div className="txt">
                                <ul className="gender_check">
                                    <li className="on female">여</li>
                                    <li className="men">남</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="title">연락처</div>
                            <div className="txt">
                                <span className="w80">010-4102-9777</span>
                                <button type="button" className="btn btn_mini">
                                    인증
    </button>
                            </div>
                            {/* 변경시 변경아이콘 눌러 popup띄워서 핸드폰번호 인증절차 거치게됨 */}
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

export default ProfileIndi;