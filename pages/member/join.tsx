import React, { createContext, useContext, useEffect, useState } from "react";
import SubTopNav from "layout/components/SubTop";
import { useVerification } from "../../hook/useVerification";
import { ISet } from "../../types/interface";
import { UserRole } from "../../types/api";
import { getFromUrl } from "../../utils/url";
import { closeModal, openModal } from "../../utils/popUp";
import { VerifiEamilModal } from "../../components/verifiModal/VerifiEmailModal";
import { Storage } from "../../utils/Storage";
import UserInfoForm from "components/join/UserInfoForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { getStaticPageInfo, Ipage } from "../../utils/page";
import { usePageEdit } from "../../hook/usePageEdit";
import defaultPageInfo from "../../info/join.json";
import { ALLOW_SELLERS } from "../../types/const";
interface IchkPolocy {
    policy_use: boolean;
    policy_info_collect: boolean;
    policy_info_entrust: boolean;
    policy_traveler: boolean;
    policy_partner: boolean;
    policy_marketing: boolean;
    policy_info_3rd: boolean;
}

export const ContextPolicyChk = createContext<IchkPolocy | null>(null);

type TJoinProcess = "userType" | "verification" | "userInfo" | "registered";
interface IjoinContext extends ReturnType<typeof useVerification> {
    joinProcess: TJoinProcess;
    setJoinProcess: ISet<TJoinProcess> | any;
    userType: UserRole;
    setUserType: ISet<UserRole>;
    isPartenerB: boolean;
    isPartner: boolean;
    isIndi: boolean;
    verificationId?: string;
    verifiedEmail?: string;
    oauth?: string;
}

export const JoinContext = React.createContext<null | IjoinContext>(null);

export const getStaticProps = getStaticPageInfo("join");
const Join: React.FC<Ipage> = (pageInfo) => {
    const router = useRouter();
    const editTools = usePageEdit(pageInfo, defaultPageInfo);
    const verificationId = getFromUrl("vid") || undefined;
    const verifiedEmail = getFromUrl("email") || undefined;
    const oauth = getFromUrl("oauth") || undefined;
    const [userType, setUserType] = useState<UserRole>(UserRole.partnerB);
    const [joinProcess, joinSet] = useState<TJoinProcess>("userType");
    const verifiHook = useVerification({
        _id: verificationId,
        payload: verifiedEmail,
    });

    const setJoinProcess = (process: TJoinProcess) => {
        history.pushState({ joinProcess: joinProcess }, "회원가입 절차");
        history.pushState({ joinProcess: joinProcess }, "회원가입 절차");
        joinSet(process);
    };

    const checkProcess = (process: TJoinProcess) => process === joinProcess;
    const checkProcessOn = (process: TJoinProcess) =>
        checkProcess(process) ? "on" : "";

    const isPartenerB = userType === UserRole.partnerB;
    const isPartner = userType === UserRole.partner;
    const isIndi = userType === UserRole.individual;

    const context: IjoinContext = {
        ...verifiHook,
        joinProcess,
        setUserType,
        userType,
        verifiedEmail,
        verificationId,
        setJoinProcess,
        isPartenerB,
        isPartner,
        isIndi,
        oauth,
    };

    useEffect(() => {
        const lastRole = Storage?.getLocal("signUpRole", "") as UserRole;
        if (lastRole) {
            setUserType(lastRole);
        }
    }, []);

    useEffect(() => {
        if (oauth) {
            setJoinProcess("verification");
        }
        if (verificationId) {
            setJoinProcess("userInfo");
        }
    }, []);

    useEffect(() => {
        window.onpopstate = function (event: any) {
            joinSet(event.state.joinProcess);
        };
    }, []);

    return (
        <div>
            <div>
                <SubTopNav pageTools={editTools}>
                    <li>
                        <a>회원가입</a>
                    </li>
                </SubTopNav>
                <div className="sign_in famile">
                    <div className="inner ">
                        <h4 className="join_title w100">
                            <img src="/its/logo_1.png" alt="logo" />
                        </h4>
                        <div className="join_address w100">
                            <ul>
                                <li
                                    key={joinProcess}
                                    className={checkProcessOn("userType")}
                                >
                                    <i>step.01</i>
                                    <br />
                                    회원선택
                                </li>
                                <li className={checkProcessOn("verification")}>
                                    <i>step.02</i>
                                    <br />
                                    인증
                                </li>
                                <li className={checkProcessOn("userInfo")}>
                                    <i>step.03</i>
                                    <br />
                                    정보입력
                                </li>
                                <li className={checkProcessOn("registered")}>
                                    <i>step.04</i>
                                    <br />
                                    가입완료
                                </li>
                            </ul>
                        </div>
                        <div className="join_wrap2 w1200">
                            <JoinContext.Provider value={context}>
                                {checkProcess("userType") && <UserType />}
                                {checkProcess("verification") && (
                                    <Verification />
                                )}
                                {checkProcess("userInfo") && userType && (
                                    <div className="w1200 " id="con02">
                                        <UserInfoForm />
                                    </div>
                                )}
                                {checkProcess("registered") && <JoinResult />}
                            </JoinContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const JoinResult = () => {
    const { userType } = useContext(JoinContext)!;
    const isSeller = ALLOW_SELLERS.includes(userType);
    return (
        <div className="wellcom" id="con03">
            <img src="/its/join_img01.png" alt="환영합니다 이미지" />
            <h5>회원가입을 축하드립니다!</h5>
            <p>
                가이드는 가입승인 후에 서비스를 이용할 수 있습니다.{" "}
                <br className="no" />
                잠시만 기다려주세요! 가입승인이 최대 24시간이 걸리며,{" "}
                <br className="no" />
                가입시 입력된 이메일로 가입승인 이메일로 안내드리겠습니다.
            </p>
            <div className="fin">
                <Link href="/member/login">
                    <button className="sum btn blue">로그인 하러가기</button>
                </Link>
            </div>
        </div>
    );
};

const Verification: React.FC = () => {
    const { setJoinProcess, oauth, ...verifiHook } = useContext(JoinContext)!;
    const handleAuth = (target: "google" | "kakao") => () => {
        window.location.href =
            process.env.NEXT_PUBLIC_SERVER_URI + "/login/" + target;
    };

    const handleSelfAuth = () => {
        openModal("#emailVerifi")();
    };

    useEffect(() => {
        if (!oauth) return;
        const isgoogle = oauth === "google";
        const authEmail = getFromUrl("oauthEmail");
        let target = isgoogle ? "구글" : "카카오";
        alert(`현재 웹사이트는 이미 ${target} ${authEmail} 계정에 연결되어 있습니다. 새로 가입하시길 원하신다면 먼저 ${target}에 로그아웃을 해야합니다. 아래와 같은 방법을 시도해 보세요.
             - 이메일 인증을 사용
             - 다른 브라우저를 사용
             - 다른 기기를 사용
             - 브라우저 쿠키를 삭제
             `);
        // const googleLogout = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://www.example.com";
        // const kakakoLogout = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://www.example.com";
    }, [oauth]);

    return (
        <div className="certified" id="con01">
            <h5>본인인증을 해주세요.</h5>
            <p>
                {" "}
                원활한 서비스 이용과 온라인에서의 익명 사용으로 인한 피해 등을
                최소한으로 방지하기 위해 실명제를 시행하고 있습니다.
                <br />
                본인확인을 위해 아래의 구글인증 또는 카카오톡인증 중에 하나를
                선택하여 본인확인을 받으시기 바랍니다.
            </p>
            <ul>
                <li onClick={handleAuth("google")} className="socialVerify">
                    <i className="jandaicon-google1" />
                    구글 인증
                </li>
                <li onClick={handleAuth("kakao")} className="socialVerify">
                    <i className="jandaicon-kakaotalk" />
                    카카오톡 인증
                </li>
                <li onClick={handleSelfAuth} className="socialVerify">
                    <span className="icon-email"></span>
                    이메일 인증
                </li>
            </ul>
            <p className="bt_txt">
                ※ 본인인증 시 제공되는 정보로 회원가입시 필요한 정보를
                연동합니다.
            </p>
            <VerifiEamilModal
                duplicateCheck
                onSuccess={() => {
                    closeModal("#emailVerifi")();
                    setJoinProcess("userInfo");
                }}
                verifiHook={{
                    ...verifiHook,
                }}
            />
        </div>
    );
};

const UserType: React.FC = () => {
    const { setJoinProcess, setUserType } = useContext(JoinContext)!;

    const handleTypeChoice = (userType: UserRole) => () => {
        setJoinProcess("verification");
        Storage?.saveLocal("signUpRole", userType);
        setUserType(userType);
    };

    return (
        <div className="choice_box" id="con00">
            <h5>회원 종류 선택하기</h5>
            <p>회원가입을 하시고 더 많은 정보와 혜택을 누려보세요~!! </p>
            <ul>
                {/* 커스텀디자인 */}
                <li
                    className="li01"
                    onClick={handleTypeChoice(UserRole.partnerB)}
                >
                    <strong>가이드 회원</strong>
                    <span>
                        가이드로 등록을 원하시나요?
                        <br />
                        회원가입을 통해 등록이 이루어집니다.
                    </span>
                </li>
                {/* <li className="li02" onClick={() => { handleChange('partnerCor', 'userType'); }}>
                <i />
                <strong>가이드 회원</strong>
                <span>가이드를 위한 회원입니다.</span>
            </li>
            <li className="li03" onClick={handleTypeChoice(UserRole.partner)}>
                <i />
                <strong>가이드회원</strong>
                <span>가이드를 위한 회원입니다.</span>
            </li> */}
            </ul>
            <p className="bt_txt">
                ※ 가이드회원은 승인후 홈페이지 이용이 가능합니다. 승인시
                필수서류가 미흡하면 승인이 거부될 수도 있습니다.
            </p>
            <p className="bt_txt">※ 가입승인은 24시간 이내에 이루어집니다.</p>
        </div>
    );
};

export default Join;
