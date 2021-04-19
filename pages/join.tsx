import React, { createContext, useState } from 'react';
import { gql, useMutation } from "@apollo/client";
import { GoogleLogin } from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import axios from "axios";
import FormPartnerCor from 'components/join/FormPartnerCor';
import FormPartnerNormal from 'components/join/FormPartnerNormal';
import PolicyPopup from 'components/policyPopup/PolicyPopup';
import FormNormal from 'components/join/FormNormal';
import SubTopNav from 'layout/components/SubTop';
import { SIGNINGOOGLE, SIGNINKAKAO } from '../apollo/gql/mutations';
interface IchkPolocy {
    policy_use: boolean,
    policy_info_collect: boolean,
    policy_info_entrust: boolean,
    policy_traveler: boolean,
    policy_partner: boolean,
    policy_marketing: boolean,
    policy_info_3rd: boolean
}

export const ContextPolicyChk = createContext<IchkPolocy | null>(null);


export type TForm = {
    openPopup: (element: string | null) => void;
    handleJoinProcess: (processTarget: string) => void;
}

type TJoinProcess = {
    userType: boolean,
    verification: boolean,
    userInfo: boolean,
    registered: boolean
}

const openPopup = (element: string | null) => {
    let popupElement = document.getElementById(`${element}`) as HTMLElement;
    popupElement!.style.display = 'block';
    document!.getElementById('fade')!.style.display = 'block';
}

const closePopup = (element: string | null) => {
    let popupElement = document.getElementById(`${element}`) as HTMLElement;
    popupElement!.style.display = 'none';
    document!.getElementById('fade')!.style.display = 'none';
}


const Join = () => {

    const [joinForm, setJoinForm] = useState('partnerNormal');

    const [joinProcess, setJoinProcess] = useState<TJoinProcess>({
        userType: true,
        verification: false,
        userInfo: false,
        registered: false
    });

    const [joinVerified, setJoinVerified] = useState(false);

    const handleJoinProcess = (processTarget: string) => {

        switch (processTarget) {
            case 'userType':
                setJoinProcess({
                    ...joinProcess,
                    userType: false,
                    verification: true
                })
                break;

            case 'verification':
                setJoinProcess({
                    ...joinProcess,
                    verification: false,
                    userInfo: true
                })
                break;

            case 'registered':
                setJoinProcess({
                    ...joinProcess,
                    userInfo: false,
                    registered: true
                })
                break;
        }

    }

    const handleChange = (formState: string | null, processTarget: string) => {
        if (formState)
            setJoinForm(formState)
        handleJoinProcess(processTarget)
    }


    const handleVerifyGoogle = async (veriState: boolean) => {

        if (veriState) {
            alert('구글 인증에 성공하였습니다.');
            handleJoinProcess('verification');
        } else {
            alert('구글 인증에 실패하였습니다.');
        }

    }

    const handleVerifyKakao = async (veriState: boolean) => {

        if (veriState) {
            alert('카카오 인증에 성공하였습니다');
            handleJoinProcess('verification');
        } else {
            alert('카카오 인증에 실패하였습니다');
        }

    }


    const handleFormRender = (formSelected: string) => {

        if (formSelected === 'normal') {
            {/* 회원정보:개인 */ }
            return <FormNormal openPopup={openPopup} handleJoinProcess={handleJoinProcess} />
        }
        if (formSelected === 'partnerCor') {
            {/* 회원정보:기업파트너 */ }
            return <FormPartnerCor openPopup={openPopup} handleJoinProcess={handleJoinProcess} />
        }
        if (formSelected === 'partnerNormal') {
            {/* 회원정보:개인파트너 */ }
            return <FormPartnerNormal openPopup={openPopup} handleJoinProcess={handleJoinProcess} />
        }

    }

    const handleValidate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    return (
        <div>
            <div>
                <SubTopNav title="as" desc="asd" />
                {/* 개인 */}
                <div className="sign_in famile">
                    <div className="inner ">
                        <h4 className="join_title w100">
                            <img src="/img/logo_1.png" alt="logo" />
                        </h4>
                        <div className="join_address w100">
                            <ul>
                                <li className={`${joinProcess.userType && 'on'}`}>
                                    <i>Setep.01</i>
                                    <br />
                                    회원선택
                                </li>
                                <li className={`${joinProcess.verification && 'on'}`}>
                                    <i>Setep.02</i>
                                    <br />
                                    인증
                                </li>
                                <li className={`${joinProcess.userInfo && 'on'}`}>
                                    <i>Setep.03</i>
                                    <br />
                                    정보입력
                                </li>
                                <li className={`${joinProcess.registered && 'on'}`}>
                                    <i>Setep.04</i>
                                    <br />
                                    가입완료
                                </li>
                            </ul>
                        </div>
                        <div className="join_wrap2 w1200">

                            {/* 인증 공통사항 */}
                            {joinProcess.userType &&
                                <UserType handleChange={handleChange} />
                            }

                            {joinProcess.verification &&
                                <Verification handleVerifyGoogle={handleVerifyGoogle} handleVerifyKakao={handleVerifyKakao} />
                            }

                            {joinProcess.userInfo &&
                                <div className="w1200 " id="con02">
                                    {handleFormRender(joinForm)}
                                </div>
                            }

                            {joinProcess.registered &&
                                <JoinResult />
                            }

                        </div>
                        {/* Popup:이용약관 */}
                        <PolicyPopup closePopup={closePopup} />
                        <div id="fade" className="fade" />
                    </div>
                </div>
            </div>
        </div>
    )
}


const JoinResult = () => {
    return (
        <div className="wellcom" id="con03">
            <img src="/img/join_img01.png" alt="환영합니다 이미지" />
            <h5>회원가입을 축하드립니다!</h5>
            <p>
                가입승인 후에 서비스를 이용할 수 있습니다. <br className="no" />
                잠시만 기다려주세요! 가입승인은 최대 24시간이 걸리며,{" "}
                <br className="no" />
                가입시 입력된 이메일로 가입승인 이메일로 안내드리겠습니다.
            </p>
            <div className="fin">
                <button
                    className="sum btn"
                //   onclick="location.href='../login';"
                >
                    로그인 하러가기
                </button>
            </div>
        </div>
    )
}



interface IProps {
    handleVerifyGoogle: (veriState: boolean) => void;
    handleVerifyKakao: (veriState: boolean) => void;
}

const Verification: React.FC<IProps> = ({ handleVerifyGoogle, handleVerifyKakao }) => {

    /* ::::: GraphQL ::::: */

    const [signInGoogleMutation] = useMutation(SIGNINGOOGLE)
    const [signInKakaoMutation] = useMutation(SIGNINKAKAO)

    const setGoogleToken = (token) => {
        localStorage.setItem('token', token);
    }

    const responseGoogle = async (response) => {

        const { data } = await signInGoogleMutation({ variables: { code: new String(response.code) } });
        const token = data.SignInGoogle.data.token;

        if (data.SignInGoogle.ok) {
            handleVerifyGoogle(true);
            setGoogleToken(token);
        } else {
            handleVerifyGoogle(false);
        }

    }

    const responseKakao = async (response) => {
        const { data } = await signInKakaoMutation({ variables: { code: "3_sVvZcXcOlZNHEjKH763miBWOF-tmP8RDQZQuzhHDecY6apMee0yNQZWqj3EpRkq1R8rAo9cxgAAAF1hDr4yg" } });
        console.log('kakao');
        if (data.SignInKakao.ok) {
            handleVerifyKakao(true);
        } else {
            handleVerifyKakao(false);
        }
    }


    const REST_API_KEY = "f1a52f415e4f545780749d7ea195c398"
    const REDIRECT_URI = "http://localhost:3000"

    const kako_auth_link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const handleClick = (e) => {
        e.preventDefault();
        window.open(kako_auth_link, "myWindow", "width=800, height=800")
        return false;
    }

    return (
        <div className="certified" id="con01">
            <h5>본인인증을 해주세요.</h5>
            <p>
                {" "}
                원활한 서비스 이용과 온라인에서의 익명 사용으로 인한 피해 등을 최소한으로
                방지하기 위해 실명제를 시행하고 있습니다.
                <br />
                본인확인을 위해 아래의 구글인증 또는 카카오톡인증 중에 하나를 선택하여
                본인확인을 받으시기 바랍니다.
            </p>
            <ul>
                <li className="socialVerify">
                    <i className="jandaicon-google1" />
                    구글 인증
                    <GoogleLogin
                        clientId="618452450177-q88svpla9jpeg4ar1hr0eluvjmrob079.apps.googleusercontent.com"
                        buttonText="Login"
                        responseType="code"
                        scope="https://www.googleapis.com/auth/userinfo.profile"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        icon={false}
                    />
                </li>
                <li className="socialVerify">
                    <i className="jandaicon-kakaotalk" />
                    카카오톡 인증
                    <KakaoLogin
                        token={"6917a7c01132d43ab44046a7806f1ddc"}
                        onSuccess={responseKakao}
                        onFail={console.error}
                        onLogout={console.info}
                    />

                </li>
            </ul>
            <p className="bt_txt">
                ※ 본인인증 시 제공되는 정보로 회원가입시 필요한 정보를 연동합니다. 2
            </p>
        </div>
    )
}


interface IUserTypeProps {
    handleChange: (element: string | null, processTarget: string) => void;
}


const UserType: React.FC<IUserTypeProps> = ({ handleChange }) => {
    return (
        <div className="choice_box" id="con00">
            <h5>회원 종류 선택하기</h5>
            <p>회원가입을 하시고 더 많은 정보와 혜택을 누려보세요~!! </p>
            <ul>
                {/* 커스텀디자인 */}
                <li className="li01" onClick={() => { handleChange('normal', 'userType'); }}>
                    <strong>개인 회원</strong>
                    <span>
                        구매를 위한 개인회원입니다.
                    <br />
                    회원가입을 하고 여행을 떠나세요~!!
                </span>
                </li>
                <li className="li02" onClick={() => { handleChange('partnerCor', 'userType'); }}>
                    <i />
                    <strong>기업파트너 회원</strong>
                    <span>기업파트너를 위한 회원입니다.</span>
                </li>
                <li className="li03" onClick={() => { handleChange('partnerNormal', 'userType'); }}>
                    <i />
                    <strong>개인파트너 회원</strong>
                    <span>개인파트너를 위한 회원입니다.</span>
                </li>
            </ul>
            <p className="bt_txt">
                ※ 기업파트너는 사업자번호가 필요합니다. 사업자번호가 없는 경우에는
                개인파트너로 회원가입을 해주세요.
            </p>
            <p className="bt_txt">※ 상품구입을 위해서 회원가입은 필수입니다.</p>
        </div>
    )
}

export default Join

