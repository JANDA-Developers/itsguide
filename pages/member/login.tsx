import React, { useEffect, useState } from "react";
import { Storage, initStorage } from "utils/Storage";
import { ERR_CODE, signInVariables, UserRole } from "types/api";
import { useRouter } from "next/router";
import Link from "next/link";
import { Validater } from "../../utils/validate";
import { isEmail } from "../../utils/validation";
import { useLogin } from "../../hook/useUser";
import SubTopNav from "../../layout/components/SubTop";
import defaultPageInfo from "../../info/login.json";
import { usePageEdit } from "../../hook/usePageEdit";
import { getStaticPageInfo, Ipage } from "../../utils/page";
import { PageEditor } from "../../components/common/PageEditer";
import { staticInfo } from "../../info/static.json";

export const getStaticProps = getStaticPageInfo("login");
export const Login: React.FC<Ipage> = (pageInfo) => {
    const [saveId, setSaveId] = useState(false);
    const [saveSession, setSaveSession] = useState(false);
    const [userId, setId] = useState("");
    const [userPw, setPw] = useState("");
    const [userType, setUserType] = useState<UserRole>(
        (Storage?.getLocal("lastLoginType", UserRole.partnerB) as UserRole) ||
            UserRole.partnerB
    );
    const editTools = usePageEdit(pageInfo, defaultPageInfo);
    const { locale } = useRouter();
    const ln = staticInfo(locale as any);
    const { getData } = useLogin({
        onCompleted: ({ SignIn }) => {
            if (SignIn.ok) {
                Storage?.saveLocal("lastLoginType", userType);
                Storage?.saveLocal("jwt", SignIn.data?.token || "");
                location.href = "/";
                alert("환영합니다.");
            } else {
                if (SignIn.error?.code === ERR_CODE.PASSWORD_NOT_EQUAL) {
                    alert("패스워드가 일치하지 않습니다.");
                }
                if (SignIn.error?.code === ERR_CODE.AUTHORIZATION) {
                    alert("해당 접근 권한이 없습니다.");
                }
                if (SignIn.error?.code === ERR_CODE.DOC_NOT_FOUND) {
                    alert("해당 이메일을 찾을 수 없습니다.");
                }
            }
        },
    });
    const router = useRouter();

    const handleSaveId = () => {
        setSaveId(!saveId);
        if (!saveId) {
            localStorage.setItem("saveId?", "Y");
        } else {
            localStorage.removeItem("saveId?");
        }
    };

    const sessionSave = () => {
        const answer = confirm(
            "브라우저를 닫더라도 로그인이 계속 유지될 수 있습니다.\n\n로그인 유지 기능을 사용할 경우 다음 접속부터는 로그인할 필요가 없습니다.\n\n단, 게임방, 학교 등 공공장소에서 이용 시 개인정보가 유출될 수 있으니 꼭 로그아웃을 해주세요."
        );
        if (!answer) return;
        setSaveSession(!saveSession);

        if (!saveSession) {
            localStorage.setItem("saveSession?", "Y");
        } else {
            localStorage.removeItem("saveSession?");
        }
    };
    // 로그인성공시
    // saveLocal("saveid", id);
    useEffect(() => {
        initStorage();
        setId(localStorage?.getItem("saveId") || "");
        setSaveId(!!Storage!.getLocal("saveId?", ""));
        setSaveSession(!!Storage!.getLocal("saveSession?", ""));
    }, []);

    useEffect(() => {
        Storage?.saveLocal("saveid", saveId);
        Storage?.saveLocal("saveSession?", saveSession);
    }, [saveId, saveSession]);

    const handleUserType = (type: UserRole) => {
        setUserType(type);
    };

    const handleId = (id: string) => {
        setId(id);
    };

    const handlePw = (pw: string) => {
        setPw(pw);
    };

    const { validate } = new Validater([
        {
            value: isEmail(userId),
            failMsg: "올바른 이메일이 아닙니다.",
        },
        {
            value: userPw.length > 4,
            failMsg: "패스워드를 입력 해주세요",
        },
    ]);

    const handleLogin = () => {
        if (!validate()) return;
        const signInvar: signInVariables = {
            email: userId,
            pw: userPw,
            hopeRole: userType,
            permanence: saveSession,
        };

        getData({ variables: signInvar as any });
    };

    return (
        <div>
            <div className="top_visual">
                <SubTopNav pageTools={editTools}>
                    <li>
                        <a>Login</a>
                    </li>
                </SubTopNav>
            </div>
            <PageEditor pageTools={editTools} />
            <div className="login_box">
                <div className="sign_in w1200">
                    <div className="inner">
                        <div className="login_page">
                            <input
                                id="tab-1"
                                type="radio"
                                name="radio-set"
                                className="tab-selector-1"
                                value="partnerB"
                                checked={UserRole.partnerB === userType}
                                onChange={() => {
                                    handleUserType(UserRole.partnerB);
                                }}
                            />
                            <label
                                htmlFor="tab-1"
                                className="tab-label-1 login_tap tap_01 "
                            >
                                <b>{ln("guide")}</b>
                            </label>
                            <input
                                id="tab-2"
                                type="radio"
                                name="radio-set"
                                className="tab-selector-2"
                                value="manager"
                                checked={UserRole.manager === userType}
                                onChange={() => {
                                    handleUserType(UserRole.manager);
                                }}
                            />
                            <label
                                htmlFor="tab-2"
                                className="tab-label-2 login_tap tap_03"
                            >
                                <b>{ln("master")}</b>
                            </label>
                            <div className={`login_wrap white_box`}>
                                <h3>
                                    <strong>MEMBER</strong> LOGIN
                                </h3>
                                <div className="form-group">
                                    <input
                                        value={userId}
                                        type="text"
                                        name="user_id"
                                        id="uid"
                                        required
                                        placeholder={ln("id")}
                                        title={ln("id")}
                                        className="txt_id"
                                        onChange={(e) => {
                                            handleId(e.target.value.trim());
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        value={userPw}
                                        type="password"
                                        name="password"
                                        id="upw"
                                        required
                                        placeholder={ln("password")}
                                        title={ln("password")}
                                        className="form-txt_pw"
                                        onChange={(e) => {
                                            handlePw(e.target.value.trim());
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="keepid_opt"
                                        className="checkbox-inline"
                                    >
                                        <input
                                            type="checkbox"
                                            name="keep_signed"
                                            id="keepid_opt"
                                            onClick={sessionSave}
                                            checked={saveSession}
                                        />
                                        {ln("keeplogin")}
                                    </label>
                                    <label
                                        htmlFor="keepid_opt2"
                                        className="checkbox-inline"
                                    >
                                        <input
                                            onClick={handleSaveId}
                                            checked={saveId}
                                            type="checkbox"
                                            id="keepid_opt2"
                                            defaultValue="Y"
                                        />
                                        {ln("rememberid")}
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="sum"
                                    onClick={handleLogin}
                                >
                                    <span>{ln("login")}</span>
                                </button>
                                {/*
                            {userType === UserRole.partnerB &&
                                <div className="login__snslink">
                                    <img className="m" src="/img/google_logo.png" alt="google logo" />
                                    <img className="m" src="/img/kakao_logo.png" alt="kakao logo" />
                                    <ul>
                                        <li className="login__snslink_k"><a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/kakao"}><span className="login__snslink_icon"><i className="jandaicon-kakaotalk"></i></span><span className="login__snslink_txt">카카오 로그인</span></a></li>
                                        <li className="login__snslink_g"><a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/google"}><span className="login__snslink_icon"><i className="jandaicon-google1"></i></span><span className="login__snslink_txt">구글 로그인</span></a></li>
                                        <li className="login__snslink_n">
                                            <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/naver"}><span className="login__snslink_icon"><i></i></span><span className="login__snslink_txt">네이버 로그인</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            } */}
                                <div className="sign_in_form">
                                    <span>
                                        <Link href="/member/join">
                                            <a>
                                                {ln("join")}
                                                <i className="jandaicon-arr4-right"></i>
                                            </a>
                                        </Link>
                                    </span>
                                    <span>
                                        <Link href="/member/findmembers">
                                            <a>
                                                {ln("findmembers")}
                                                <i className="jandaicon-arr4-right"></i>
                                            </a>
                                        </Link>
                                    </span>
                                </div>
                                {userType === UserRole.partnerB && (
                                    <div className="join__snslink">
                                        <ul>
                                            <li className="join__snslink_k">
                                                <a
                                                    href={
                                                        process.env
                                                            .NEXT_PUBLIC_SERVER_URI +
                                                        "/login/kakao"
                                                    }
                                                >
                                                    <span className="join__snslink_icon">
                                                        <i className="jandaicon-kakaotalk"></i>
                                                    </span>
                                                    <span className="join__snslink_txt">
                                                        {ln("kakaologin")}
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="join__snslink_g">
                                                <a
                                                    href={
                                                        process.env
                                                            .NEXT_PUBLIC_SERVER_URI +
                                                        "/login/google"
                                                    }
                                                >
                                                    <span className="join__snslink_icon">
                                                        <i className="jandaicon-google1"></i>
                                                    </span>
                                                    <span className="join__snslink_txt">
                                                        {ln("googlelogin")}
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="join__snslink_n">
                                                <a
                                                    href={
                                                        process.env
                                                            .NEXT_PUBLIC_SERVER_URI +
                                                        "/login/naver"
                                                    }
                                                >
                                                    <span className="join__snslink_icon">
                                                        <i></i>
                                                    </span>
                                                    <span className="join__snslink_txt">
                                                        {ln("naverlogin")}
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
