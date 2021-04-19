import React from 'react';

interface IProp { }

export const Search: React.FC<IProp> = () => {
    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/pr_img_17.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">아이디/비밀번호 찾기</h2>
                    <p className="text">지금 여행을 떠나세요~!~~!!!!!</p>
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="/index"></a>
                    </li>
                    <li className="homedeps1">Member</li>
                    <li className="homedeps2">
                        <a href="/">아이디/비밀번호 찾기</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="findmembers_box w1200">
            <div className="con_box">
                <div className="left">
                <h3>아이디 찾기</h3> 
                <span className="info">아이디가 기억나지 않으신가요? 가입 시 입력한 개인 정보로 인증 절차를 거치면 확인이 가능합니다.</span>
               
                    <div className="idfind_box in_box">
                        <h4>이름</h4>
                        <div className="input_box"><input type="text" placeholder="이름을 입력해 주세요." /></div>
                        <h4>휴대전화</h4>
                        <div className="input_box"><input type="text" placeholder="가입시 입력한 휴대전화번호를 입력해 주세요." /></div>
                        <div className="certification_sec"><button className="btn">아이디 찾기</button></div>
                    </div>
                </div>
                <div className="right">
                    <h3>비밀번호 찾기</h3>
                    <span>비밀번호가 기억나지 않으신가요? 가입 시 입력한 이메일(아이디)을 입력하시면, 가입 시 입력한 휴대전화 번호로 임시 비밀번호가 문자로 발송됩니다.</span>
                    <div className="pwfind_box in_box">
                        <h4>아이디</h4>
                        <div className="input_box"><input type="text" placeholder="아이디를 입력해 주세요." /></div>
                        <div className="certification_sec">
                            <button className="btn">임시 비밀번호 SNS로 받기</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info_txt">
                <dl>
                    <dt>비밀번호나 아이디 찾기에 어려움이 있으신가요?</dt>
                    <dd>
                        <ul className="bul_list">
                            <li><span className="dot_arr">혹시, 스팸 문자함에 임시비밀번호가 발급된 문자가 있는지 확인해 주세요.</span></li>
                            <li><span className="dot_arr">혹시, 핸드폰이 통신 불가능 아닌지 비행기모드가 아닌지 확인해 주세요.</span></li>
                            <li><span className="dot_arr">그래도 임시비밀번호를 발급 받을 수 없다면 고객센터로 문의 해주세요.</span></li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
   
}

export default Search