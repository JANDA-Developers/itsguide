import React, { useState } from "react";
import { IUseModal } from "../../hook/useModal";
import { useSignUp, useUserFindById, useUserUpdate } from "../../hook/useUser";
import {
    AddUserInput,
    ERR_CODE,
    Ffile,
    GENDER,
    Lang,
    userFindById_UserFindById_data,
    UserRole,
} from "../../types/api";
import { autoHypenPhone } from "../../utils/formatter";
import { omits } from "../../utils/omit";
import { Validater } from "../../utils/validate";
import { isEmail, isName, isPassword, isPhone } from "../../utils/validation";
import { FileInput } from "../fileInput/FileInput";
import { Modal2 } from "../modal/Modal";

interface IProp extends Omit<IHandWriteModalProp, "user"> {}

export const UswerWriteModalWrap: React.FC<IProp> = (props) => {
    const { item } = useUserFindById(props.info?.id);
    return <UswerWriteModal key={item?._id} {...props} user={item} />;
};

interface IHandWriteModalProp extends IUseModal<{ id: string }> {
    user?: userFindById_UserFindById_data;
}

export const UswerWriteModal: React.FC<IHandWriteModalProp> = ({
    user,
    ...props
}) => {
    const isCreate = !user;
    const [userData, setUserData] = useState<
        AddUserInput & { pwCheck: string }
    >({
        address: user?.address || "",
        address_detail: user?.address_detail || "",
        email: user?.email || "",
        name: user?.name || "",
        phoneNumber: user?.phoneNumber || "",
        pw: "",
        role: user?.role || UserRole.individual,
        acceptEamil: user?.acceptEamil || false,
        acceptSms: user?.acceptSms || false,
        account_number: user?.account_number || "",
        bankImg: user?.bankImg,
        bank_name: user?.bank_name || "",
        brith_date: user?.brith_date,
        busiRegistration: user?.busiRegistration,
        busi_address: user?.address || "",
        busi_address_detail: user?.address_detail || "",
        busi_contact: user?.busi_contact || "",
        busi_department: user?.busi_department || "",
        busi_name: user?.busi_name || "",
        busi_num: user?.busi_num || "",
        gender: user?.gender || GENDER.FEMALE,
        is_froreginer: user?.is_froreginer || false,
        is_priv_corper: user?.is_priv_corper || false,
        manageContact: user?.manageContact || "",
        manageName: user?.manageName || "",
        nickName: user?.nickName || "",
        lang: user?.lang,
        guideLicenses: user?.guideLicenses?.slice() || [],
        pwCheck: "",
    });

    const { nodes: sharedValidate } = new Validater([
        {
            value: isEmail(userData.email),
            failMsg: "올바른 이메일이 아닙니다..",
        },
        {
            value: userData.pw === userData.pwCheck,
            failMsg: "비밀번호가 일치하지 않습니다.",
        },
        {
            value: !isCreate || isPassword(userData.pw || ""),
            failMsg:
                "비밀번호는 특수문자 1개이상 및 숫자가 포함된 7~15 자리의 영문 숫자 조합이여야 합니다",
        },
        {
            value: userData.address,
            failMsg: "주소값을 입력 해주세요.",
        },
        {
            value: userData.address_detail,
            failMsg: "상세 주소값을 입력 해주세요.",
            id: "AddressInput",
        },
    ]);

    const { validate: normalValidate } = new Validater([
        {
            value: isName(userData.name || ""),
            failMsg: "이름 값이 올바르지 않습니다.",
            id: "NameInput",
        },
        ...sharedValidate,
    ]);

    const { validate: partnerValidate } = new Validater([
        {
            value: isName(userData.name || ""),
            failMsg: "이름 값이 올바르지 않습니다.",
        },

        ...sharedValidate,
    ]);

    const { validate: BpartnerValidate } = new Validater([
        {
            value: isPhone(userData.busi_contact || ""),
            failMsg: "대표 연락처가 올바르지 않습니다.",
        },
        {
            value: isPhone(userData.manageContact || ""),
            failMsg: "담당자 연락처가 올바르지 않습니다.",
        },
        ...sharedValidate,
    ]);

    const validate = (): boolean => {
        switch (userData.role) {
            case UserRole.individual:
                return normalValidate();

            case UserRole.partner:
                return partnerValidate();

            case UserRole.partnerB:
                return BpartnerValidate();
                break;
        }
        return false;
    };

    const [signUp] = useSignUp({
        onCompleted: ({ SignUp }) => {
            if (SignUp.ok) {
                alert("회원가입 완료");
            } else {
                if (SignUp.error?.code === ERR_CODE.ALEADY_SAME_DATA) {
                    alert("이미 가입된 회원입니다.");
                }
            }
        },
    });

    const [updateUser] = useUserUpdate({
        onCompleted: ({ UserUpdate }) => {
            if (UserUpdate.ok) {
                alert("회원 업데이트 완료");
            }
        },
    });

    const handleWriteUser = () => {
        if (validate())
            signUp({
                variables: {
                    params: {
                        ...omits(userData),
                    },
                    verificationId: "",
                },
            });
    };

    const handleChangeUserInfo = () => {
        if (validate())
            updateUser({
                variables: {
                    _id: user?._id || "",
                    params: {
                        ...omits(userData, ["pwCheck"]),
                    },
                },
            });
    };

    function set<T extends keyof typeof userData>(key: T) {
        return (e: any) => {
            if (typeof e !== "object") {
                userData[key] = e as any;
            } else if (e.currentTarget) {
                userData[key] = e.currentTarget.value as typeof userData[T];
            } else {
                userData[key] = e as any;
            }
            setUserData({ ...userData });
        };
    }

    const handleDeleteLicense = (index: number) => () => {
        userData.guideLicenses?.splice(index, 1);
        setUserData({ ...userData });
    };

    const handleAddLicense = (file: Ffile) => {
        if (!file) return;
        userData.guideLicenses?.push(file);
        setUserData({ ...userData });
    };

    userData.manageContact = userData.phoneNumber;
    return (
        <Modal2
            {...props}
            title="예약 수기등록"
            inClassName="master_popup handwritten_registration"
            className="popup_bg_full"
            id="HandwrittenRegistration"
        >
            <div className="info_page">
                <div className="full_div">
                    <h4>회원정보</h4>
                    <div className="info_table w100">
                        <div className="tr">
                            <div className="th01">회원</div>
                            <div className="td01">
                                <select
                                    value={userData.role}
                                    onChange={set("role")}
                                    className="w30"
                                >
                                    <option value={UserRole.individual}>
                                        개인
                                    </option>
                                    <option value={UserRole.partnerB}>
                                        기업파트너
                                    </option>
                                    <option value={UserRole.partner}>
                                        개인파트너
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="tr">
                            <div className="th01">이메일</div>
                            <div className="td01">
                                <input
                                    value={userData.email}
                                    onChange={set("email")}
                                    type="text"
                                    className="w80"
                                    placeholder="이메일을 입력해주세요."
                                />
                            </div>
                            <div className="th02">닉네임</div>
                            <div className="td02">
                                <input
                                    value={userData.nickName}
                                    onChange={set("nickName")}
                                    type="text"
                                    className="w80"
                                    placeholder="닉네임을 입력해주세요."
                                />
                            </div>
                        </div>
                        {isCreate && (
                            <div className="tr">
                                <div className="th01">비밀번호</div>
                                <div className="td01">
                                    <input
                                        onChange={set("pw")}
                                        type="password"
                                        className="w80"
                                        placeholder=""
                                    />
                                </div>
                                <div className="th02">비밀번호 확인</div>
                                <div className="td02">
                                    <input
                                        value={userData.pwCheck}
                                        onChange={set("pwCheck")}
                                        type="text"
                                        className="w80"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        )}
                        <div className="tr">
                            <div className="th01">이름</div>
                            <div className="td01">
                                <input
                                    value={userData.name}
                                    onChange={set("name")}
                                    type="text"
                                    className="w50"
                                    placeholder=""
                                />
                            </div>
                            <div className="th02"></div>
                            <div className="td02">
                                {/* <ul className="country_check">
                                    <li
                                        className={`c_in ${
                                            !userData.is_froreginer ? "on" : ""
                                        }`}
                                        onClick={() => {
                                            set("is_froreginer")(false);
                                        }}
                                    >
                                        내국인
                                    </li>
                                    <li
                                        className={`c_out ${
                                            userData.is_froreginer ? "on" : ""
                                        }`}
                                        onClick={() => {
                                            set("is_froreginer")(true);
                                        }}
                                    >
                                        외국인
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="tr">
                            <div className="th01">성별</div>
                            <div className="td01">
                                <ul className="gender_check">
                                    <li
                                        className={`female ${
                                            userData.gender == GENDER.FEMALE
                                                ? "on"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            set("gender")(GENDER.FEMALE);
                                        }}
                                    >
                                        여
                                    </li>
                                    <li
                                        className={`men ${
                                            userData.gender == GENDER.MAIL
                                                ? "on"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            set("gender")(GENDER.MAIL);
                                        }}
                                    >
                                        남
                                    </li>
                                </ul>
                            </div>
                            <div className="th02">연락처</div>
                            <div className="td02">
                                <input
                                    value={autoHypenPhone(userData.phoneNumber)}
                                    onChange={set("phoneNumber")}
                                    type="text"
                                    className="w80"
                                    placeholder="'-'없이 입력해주세요."
                                />
                            </div>
                        </div>
                    </div>

                    <h4>가이드 정보</h4>
                    <div className="info_table w100">
                        <div className="tr">
                            <div className="th01">주력언어</div>
                            <div className="td01">
                                <select
                                    id="LangSelect"
                                    className="w100 "
                                    name="name"
                                    value={userData.lang || Lang.KO}
                                    onChange={set("lang")}
                                >
                                    <option value={Lang.KO}>KOREAN</option>
                                    <option value={Lang.EN}>ENGLISH</option>
                                    <option value={Lang.JP}>JAPANES</option>
                                    <option value={Lang.CH}>CHINESE</option>
                                </select>
                            </div>
                            <div className="th02">사업자번호</div>
                            <div className="td02">
                                <div style={{ display: "flex" }}>
                                    <select
                                        style={{ width: "100px" }}
                                        value={
                                            userData.is_priv_corper
                                                ? "true"
                                                : "false"
                                        }
                                        onChange={(e) => {
                                            const isPriv =
                                                e.currentTarget?.value ===
                                                "true";
                                            set("is_priv_corper")(isPriv);
                                        }}
                                        className="w20 mr10"
                                    >
                                        <option value="true">개인</option>
                                        <option value="false">법인</option>
                                    </select>
                                    <input
                                        onChange={set("busi_num")}
                                        value={userData.busi_num || ""}
                                        type="text"
                                        className="w50"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="tr">
                            <div className="th01">통장사진</div>
                            <div className="td01">
                                <FileInput onUpload={set("bankImg")}>
                                    <input
                                        value={userData.bankImg?.name || ""}
                                        type="text"
                                        className="w50"
                                        placeholder=""
                                    />
                                    <button type="button" className="btn small">
                                        업로드
                                    </button>
                                </FileInput>
                            </div>
                            <div className="th02">사업자등록증</div>
                            <div className="td02">
                                <FileInput onUpload={set("busiRegistration")}>
                                    <input
                                        value={
                                            userData.busiRegistration?.name ||
                                            ""
                                        }
                                        type="text"
                                        className="w50"
                                        placeholder=""
                                    />
                                    <button type="button" className="btn small">
                                        업로드
                                    </button>
                                </FileInput>
                            </div>
                        </div>
                        <div className="tr">
                            <div className="th01">주소</div>
                            <div className="td01 full">
                                <input
                                    onChange={set("address")}
                                    value={userData.address}
                                    type="text"
                                    className="w50 mb10"
                                    placeholder=""
                                />
                                {/* <button onClick={} type="button" className="btn small">
                                    주소찾기
                                </button> */}
                                <br />
                                <input
                                    onChange={set("address_detail")}
                                    value={userData.address_detail}
                                    type="text"
                                    className="w80"
                                    placeholder="상세주소를 입력해주세요."
                                />
                            </div>
                        </div>
                        <div className="tr">
                            <div className="th01">담당자</div>
                            <div className="td01">
                                <input
                                    onChange={set("manageName")}
                                    value={userData.manageName || ""}
                                    type="text"
                                    className="w50"
                                    placeholder=""
                                />
                            </div>
                            <div className="th02">가이드자격증</div>
                            <div className="td02">
                                <ul>
                                    {userData.guideLicenses?.map((thumb, i) => (
                                        <li
                                            key={i + "thumb"}
                                            className="on_file"
                                        >
                                            {thumb.name}
                                            <i
                                                onClick={handleDeleteLicense(i)}
                                                className="flaticon-multiply icon_x"
                                            ></i>
                                        </li>
                                    ))}
                                    {(userData.guideLicenses?.length || 0) <
                                        6 && (
                                        <FileInput onUpload={handleAddLicense}>
                                            <li id="thumb">
                                                자격증추가
                                                <i className="flaticon-add icon_plus"></i>
                                            </li>
                                        </FileInput>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="tr">
                            <div className="th01">정산계좌</div>
                            <div className="td01">
                                <input
                                    onChange={set("bank_name")}
                                    value={userData.bank_name || ""}
                                    type="text"
                                    className="w20 mr10"
                                    placeholder="은행명"
                                />
                                <input
                                    onChange={set("account_number")}
                                    type="text"
                                    className="w30 mr10"
                                    placeholder="은행계좌"
                                />
                                {/* <input
                                    onChange={set("account_number")}
                                    type="text"
                                    className="w30"
                                    placeholder="예금주"
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {isCreate && (
                <button onClick={handleWriteUser} className="btn">
                    수기 등록하기
                </button>
            )} */}
            {!isCreate && (
                <button onClick={handleChangeUserInfo} className="btn">
                    유저 정보변경 하기
                </button>
            )}
        </Modal2>
    );
};
