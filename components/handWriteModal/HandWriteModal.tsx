import React from 'react';
import { Modal } from '../modal/Modal';

interface IProp { }

export const HandWriteModal: React.FC<IProp> = () => {

    return <Modal title="예약 수기등록" inClassName="master_popup handwritten_registration" className="popup_bg_full" id="HandwrittenRegistration">
        <div className="box">
            <h3>예약 수기등록</h3>
            <div className="info_page">
                <div className="full_div">
                    <h4>회원정보</h4>
                    <div className="info_table w100">
                        <div className="tr">
                            <div className="th01">회원</div>
                            <div className="td01">
                                <select className="w30">
                                    <option>개인</option>
                                    <option>기업파트너</option>
                                    <option>개인파트너</option>
                                </select>
                            </div>
                        </div>
                        <div className="tr">
                            <div className="th01">이메일</div>
                            <div className="td01"><input type="text" className="w80" placeholder="이메일을 입력해주세요." /></div>
                            <div className="th02">닉네임</div>
                            <div className="td02"><input type="text" className="w50" placeholder="" /></div>
                        </div>
                        <div className="tr">
                            <div className="th01">비밀번호</div>
                            <div className="td01"><input type="text" className="w80" placeholder="" /></div>
                            <div className="th02">비밀번호 확인</div>
                            <div className="td02"><input type="text" className="w80" placeholder="" /></div>
                        </div>
                        <div className="tr">
                            <div className="th01">이름</div>
                            <div className="td01"><input type="text" className="w50" placeholder="" /></div>
                            <div className="th02">국적</div>
                            <div className="td02">
                                {/* <ul className="country_check">
                                <li className={`c_in ${!data.is_froreginer ? "on" : ""}`}
                                    onClick={handleNationality(true)}>내국인</li>
                                <li className={`c_out ${data.is_froreginer ? "on" : ""}`}
                                    onClick={handleNationality(false)}>외국인</li>
                            </ul> */}
                            </div>
                        </div>
                        <div className="tr">
                            <div className="th01">성별</div>
                            <div className="td01">
                                {/* <ul className="gender_check">
                                <li className={`female ${data.gender == GENDER.FEMALE ? "on" : ""}`}
                                    onClick={handleGender(GENDER.FEMALE)}>여</li>
                                <li className={`men ${data.gender == GENDER.MAIL ? "on" : ""}`}
                                    onClick={handleGender(GENDER.MAIL)}>남</li>
                            </ul> */}
                            </div>
                            <div className="th02">연락처</div>
                            <div className="td02"><input type="text" className="w80" placeholder="'-'없이 입력해주세요." /></div>
                        </div>
                    </div>

                    <h4>파트너 정보</h4>
                    <div className="info_table w100">
                        <div className="tr">
                            <div className="th01">파트너명(회사명)</div>
                            <div className="td01"><input type="text" className="w50" placeholder="" /></div>
                            <div className="th02">사업자번호</div>
                            <div className="td02">
                                <select className="w20 mr10">
                                    <option>개인</option>
                                    <option>법인</option>
                                </select>
                                <input type="text" className="w50" placeholder="" />
                            </div>
                        </div>
                        <div className="tr">
                            <div className="th01">대표 전화번호</div>
                            <div className="td01"><input type="text" className="w80" placeholder="" /></div>
                            <div className="th02">사업자등록증</div>
                            <div className="td02"><input type="text" className="w50" placeholder="" /><button type="button" className="btn small">업로드</button></div>
                        </div>
                        <div className="tr">
                            <div className="th01">주소</div>
                            <div className="td01 full">
                                <input type="text" className="w50" placeholder="" /><button type="button" className="btn small">주소찾기</button><br />
                                <input type="text" className="w80" placeholder="상세주소를 입력해주세요." />
                            </div>
                        </div>
                        <div className="tr">
                            <div className="th01">담당자</div>
                            <div className="td01"><input type="text" className="w50" placeholder="" /></div>
                            <div className="th02">담당자 연락처</div>
                            <div className="td02"><input type="text" className="w50" placeholder="" /></div>
                        </div>
                        <div className="tr">
                            <div className="th01">정산계좌</div>
                            <div className="td01">
                                <select className="w20 mr10">
                                    <option>=은행명=</option>
                                    <option>부산은행</option>
                                </select>
                                <input type="text" className="w50" placeholder="" />
                            </div>

                        </div>
                    </div>


                    <h4>
                        기타 정보
                    <div className="full_div__right">
                            <span className="checkbox mr5">
                                <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                            </span>
                        모두 동의합니다.
                    </div>
                    </h4>
                    <div className="info_table w100">
                        <div className="tr">
                            <div className="th01">SNS 수신동의</div>
                            <div className="td01">
                                <span className="checkbox mr5">
                                    <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                </span>
                            동의합니다.
                        </div>
                            <div className="th02">E-mail 수신동의</div>
                            <div className="td02">
                                <span className="checkbox mr5">
                                    <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                </span>
                            동의합니다.
                        </div>
                        </div>
                        <div className="tr">
                            <div className="th01">개인정보 수집 및 이용 동의</div>
                            <div className="td01">
                                <span className="checkbox mr5">
                                    <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                </span>
                            동의합니다.
                        </div>
                            <div className="th02">개인정보처리 위탁</div>
                            <div className="td02">
                                <span className="checkbox mr5">
                                    <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                </span>
                            동의합니다.
                        </div>
                        </div>
                        <div className="tr">
                            <div className="th01">여행자약관</div>
                            <div className="td01">
                                <span className="checkbox mr5">
                                    <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                </span>
                            동의합니다.
                        </div>
                            <div className="th02">개인정보 제3자 제공</div>
                            <div className="td02">
                                <span className="checkbox mr5">
                                    <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                </span>
                            동의합니다.
                        </div>
                        </div>
                        <div className="tr">
                            <div className="th01">마케팅정보 수신동의</div>
                            <div className="td01">
                                <span className="checkbox mr5">
                                    <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                </span>
                            동의합니다.
                        </div>
                            <div className="th02">파트너약관</div>
                            <div className="td02">
                                <span className="checkbox mr5">
                                    <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                </span>
                            동의합니다.
                        </div>
                        </div>
                        <div className="tr">
                            <div className="th01">이용약관</div>
                            <div className="td01">
                                <span className="checkbox mr5">
                                    <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                </span>
                            동의합니다.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn">수기 등록하기</button>
        </div>
    </Modal>;
};
