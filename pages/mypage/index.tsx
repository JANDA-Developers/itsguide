import React, { useContext, useState } from "react";
import { MypageLayoutWrap } from "layout/MypageLayout";
import { AppContext } from "../_app";
import { getItemCount } from "../../utils/Storage";
import { GENDER, Lang, UserRole } from "../../types/api";
import {
    autoHypenPhone,
    cc_format,
    IselectedOption,
} from "../../utils/formatter";
import { useMyProfile } from "../../hook/useMyProfile";
import { auth } from "../../utils/with";
import { ALLOW_LOGINED } from "../../types/const";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "../../components/modal/Modal";
import { openModal } from "../../utils/popUp";
import { useVerification } from "../../hook/useVerification";
import { GET_CONTEXT } from "../../apollo/gql/queries";
import { getOperationName } from "@apollo/client/utilities";
import { useCustomCount } from "../../hook/useCount";
import {
    usePasswordChange,
    useUserResign,
    useUserUpdate,
} from "../../hook/useUser";
import { ResignModal } from "../../components/resign/ResignModal";
import { isPassword } from "../../utils/validation";
import { Validater } from "../../utils/validate";
import { SubmitPsswordModal } from "../../components/promptModal/Prompt";
import { KeywardSelecter } from "../../components/keywardSelecter/KeywardSelecter";
import { omits } from "../../utils/omit";
import { CloseIcon } from "../../components/common/icon/CloseIcon";
import FileInput from "../../components/fileInput/FileInput";

let SEND_LIMIT = 3;
interface IProp {}
export const MyPageProfile: React.FC<IProp> = () => {
    const {
        salesOfThisMonth,
        todayBookingCount,
        salesofLastMonth,
        countOfExpBooking,
    } = useCustomCount([
        "salesofLastMonth",
        "salesOfThisMonth",
        "countOfTourBooking",
        "countOfExpBooking",
        "todayBookingCount",
    ]);

    const [userUpdate] = useUserUpdate({
        refetchQueries: [getOperationName(GET_CONTEXT) || ""],
        onCompleted: ({ UserUpdate }) => {
            if (UserUpdate.ok) {
                alert("업데이트가 완료 되었습니다.");
            }
        },
    });
    const [passwordChange] = usePasswordChange({
        refetchQueries: [getOperationName(GET_CONTEXT) || ""],
        onCompleted: ({ PasswordChange }) => {
            if (PasswordChange.ok) {
                alert("패스워드가 변경 되었습니다.");
            }
        },
    });
    const { salesTotalCount, productRegistCount } = useCustomCount([
        "productRegistCount",
        "salesTotalCount",
    ]);
    const [resign] = useUserResign();

    const {
        myProfile: defaultProfile,
        role,
        isManager,
        categoriesMap,
    } = useContext(AppContext);

    const { code, setCode } = useVerification();
    const [nextPhoneNum, setNextPhoneNum] = useState("");

    const {
        data,
        setBankImg,
        setBusiRegistration,
        setData,
        handlePassword,
        handleCompleteFindAddress,
        handleTextData,
        toggleCheck,
        handleBankRegistration,
        handleChangeRegistration,
        hiddenBankFileInput,
        hiddenBusiFileInput,
        hiddenLicenseFileInput,
        hanldeChangeLicense,
        handleAddLicense,
        handleDeleteLicense,
    } = useMyProfile(defaultProfile!);
    const { nextPw, profile, pw, busiRegistration, bankImg, license } = data;
    const { setPw, setProfile } = setData;
    const {
        nickName,
        address,
        name,
        address_detail,
        busi_num,
        acceptEamil,
        acceptSms,
        busi_department,
        bank_name,
        busi_contact,
        busi_address,
        phoneNumber,
        gender,
        regions,
        is_froreginer,
        keywards,
        is_priv_corper,
        account_number,
    } = profile;
    const {
        _id,
        bookings,
        email,
        isVerifiedPhoneNumber,
        busi_name,
        connectionCount,
    } = defaultProfile!;

    const isFemale = gender === GENDER.FEMALE;

    const handlePasswordChange = () => {
        const { validate } = new Validater([
            {
                value: nextPw.password,
                failMsg: "변경할 패스워드를 입력 해주세요.",
                id: "passwordCheckInput",
            },
            {
                value: isPassword(nextPw.password),
                failMsg: `올바른 비밀번호가 아닙니다.
*비밀번호는 특수문자 1개이상 숫자가 포함된 7~15 자리의 영문 숫자 조합이여야 합니다
                `,
            },
            {
                value: nextPw.password === nextPw.passwordCheck,
                failMsg: "패스워드가 일치하지 않습니다.",
                id: "passwordCheckInput",
            },
        ]);

        if (!validate()) return;
        openModal("#PsswordModal")();
    };

    const submitPassword = (currentPw: string) => {
        if (!currentPw) return;
        passwordChange({
            variables: {
                currentPw,
                newPassword: nextPw.password,
            },
        });
    };

    const handleUpdate = () => {
        const nextData = omits({
            ...profile,
            bankImg,
            busiRegistration,
        });
        userUpdate({
            variables: {
                params: nextData,
                _id,
            },
        });
    };

    // const handleUpdatePhone = (phoneNumber: string) => {
    //     userUpdate({
    //         params: {
    //             phoneNumber
    //         },
    //         _id
    //     })
    // }

    let verifyTemplate = (verificationId: string) => {
        // if (code.length < 4) {
        //     toast("인증번호를 입력 바랍니다.");
        //     return;
        // }
        // verifyComplete({
        //     code,
        //     payload: phoneNumber,
        //     verificationId
        // })
    };

    let handleVerifyComplete: () => any = () => {};

    const handleVerifi = () => {
        // if (SEND_LIMIT < 0) {
        //     alert("더이상 요청할 수 없습니다 화면을 새로고침 해주세요.");
        //     return;
        // }
        // verify(phoneNumber, (data) => {
        //     SEND_LIMIT = SEND_LIMIT - 1;
        //     const verifiId = data?.VerificationStart.data?._id;
        //     if (!verifiId) throw Error("Verifi start fail");
        //     handleVerifyComplete = verifyTemplate.bind(verifyTemplate, verifiId);
        // })
    };

    const handleResign2 = () => {
        openModal("#reSignModal")();
    };

    const handleChangePhoneNumber = () => {
        openModal("#phoneChangeModal")();
    };
    const handleVerifiPhoneNumber = () => {
        openModal("#phoneVerifiModal")();
    };

    const handleFindAdress = () => {};

    const pwSameCheck = () =>
        nextPw.password && nextPw.password === nextPw.passwordCheck;

    const [state, setState] = useState<UserRole>(role);
    const isPartnerB =
        state === "partnerB" ||
        role === UserRole.manager ||
        role === UserRole.admin;
    const isPartner = state === UserRole.partner;
    const isBuyer = state === UserRole.individual;
    const isSeller = isPartnerB || isPartner;

    const filteredKeywards = categoriesMap.GUIDE_KEYWARD.filter((key) =>
        keywards?.includes(key.label)
    );
    const keywardsOps: IselectedOption[] = filteredKeywards.map((key) => ({
        _id: key._id,
        label: key.label,
    }));

    const filteredRegions = categoriesMap.REGION.filter((key) =>
        regions?.includes(key._id)
    );

    const regionsOps: IselectedOption[] = filteredRegions.map((key) => ({
        _id: key._id,
        label: key.label,
    }));

    return (
        <MypageLayoutWrap>
            <div className="in">
                <h4>회원정보</h4>
                <div className="mypage_page">
                    <div className="box1">
                        <div className="top_info">
                            <ul className={`line${isSeller ? "5" : "4"}`}>
                                {isSeller && (
                                    <>
                                        <li className="ct">
                                            <span id="SellCount">
                                                {salesofLastMonth}
                                            </span>
                                            <p>저번달 총 예약</p>
                                        </li>
                                        <li className="ct">
                                            <span id="SellCount">
                                                {salesOfThisMonth}
                                            </span>
                                            <p>이번달 총 예약</p>
                                        </li>
                                        <li className="ct">
                                            <span id="SellCount">
                                                {todayBookingCount}
                                            </span>
                                            <p>오늘 총 예약</p>
                                        </li>
                                        <li className="ct">
                                            <span>{salesTotalCount}</span>
                                            <p>
                                                총 판매 수
                                                <i
                                                    className="jandaicon-info2"
                                                    data-tip="총 예약자 수"
                                                />
                                            </p>
                                        </li>
                                        <li className="ct">
                                            <span>{productRegistCount}</span>
                                            <p>상품 등록 수</p>
                                        </li>
                                    </>
                                )}
                                {isSeller || (
                                    <>
                                        <li className="ct">
                                            <span>{bookings.length}</span>
                                            <p>
                                                총 구매 수
                                                {/* <i className="jandaicon-info2" /> */}
                                            </p>
                                        </li>
                                        <li className="ct">
                                            <span>{connectionCount}</span>
                                            <p>총 접속 수</p>
                                        </li>
                                        <li className="ct">
                                            <span>{countOfExpBooking}</span>
                                            <p>총 체험 수</p>
                                        </li>
                                        <li className="ct">
                                            <span>{getItemCount()}</span>
                                            <p>장바구니</p>
                                        </li>
                                    </>
                                )}
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
                                    <div className="title">닉네임</div>
                                    <div className="txt">
                                        <div className="input_relative">
                                            <input
                                                style={{
                                                    border: "1px solid #e3e3e3",
                                                }}
                                                value={nickName}
                                                onChange={(e) => {
                                                    const nickName =
                                                        e.currentTarget.value;
                                                    setProfile({
                                                        ...profile,
                                                        nickName,
                                                    });
                                                }}
                                                className={`form-control w100`}
                                                placeholder="닉네임을 입력 해주세요"
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">이메일</div>
                                    <div className="txt">{email}</div>
                                </li>
                                <li>
                                    <div className="title">비밀번호 변경</div>
                                    <div className="txt">
                                        <div className="input_relative">
                                            <input
                                                value={nextPw.password}
                                                onChange={handlePassword(
                                                    "password"
                                                )}
                                                type="password"
                                                className={`form-control w100 ${
                                                    isPassword(
                                                        nextPw.password
                                                    ) && "ok"
                                                }`}
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
                                                id="passwordCheckInput"
                                                value={nextPw.passwordCheck}
                                                onChange={handlePassword(
                                                    "passwordCheck"
                                                )}
                                                type="password"
                                                className={`form-control w100 ${
                                                    pwSameCheck() && "ok"
                                                }`}
                                                placeholder="변경할 비밀번호를 다시 입력 해주세요"
                                            />
                                            <i className="jandaicon-check btn_in" />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    * 비밀번호는 특수문자 1개이상 숫자가 포함된
                                    7~15 자리의 영문 숫자 조합이여야 합니다
                                </li>

                                <li>
                                    <div className="title">이름</div>
                                    <div className="txt">
                                        <strong>{name || ""}</strong>
                                        <ul className="country_check">
                                            <li
                                                onClick={() => {
                                                    profile.is_froreginer =
                                                        false;
                                                    setProfile({ ...profile });
                                                }}
                                                className={`c_in ${
                                                    is_froreginer || "on"
                                                }`}
                                            >
                                                내국인
                                            </li>
                                            <li
                                                onClick={() => {
                                                    profile.is_froreginer =
                                                        true;
                                                    setProfile({ ...profile });
                                                }}
                                                className={`c_out ${
                                                    is_froreginer && "on"
                                                }`}
                                            >
                                                외국인
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li>
                                    <div className="title">성별</div>
                                    <div className="txt">
                                        <ul className="gender_check">
                                            <li
                                                onClick={() => {
                                                    profile.gender =
                                                        GENDER.FEMALE;
                                                    setProfile({
                                                        ...profile,
                                                    });
                                                }}
                                                className={`${
                                                    isFemale && "on"
                                                } female`}
                                            >
                                                여
                                            </li>
                                            <li
                                                onClick={() => {
                                                    profile.gender =
                                                        GENDER.MAIL;
                                                    setProfile({
                                                        ...profile,
                                                    });
                                                }}
                                                className={`${
                                                    isFemale || "on"
                                                } men`}
                                            >
                                                남
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {isSeller && (
                        <div className="box2">
                            <div className="box_left">
                                <div className="title">
                                    <h5>
                                        {isPartnerB
                                            ? "가이드정보"
                                            : "가이드정보"}
                                    </h5>
                                </div>
                            </div>
                            <div className="box_right">
                                <ul>
                                    {isPartnerB && (
                                        <li>
                                            <div className="title">
                                                사업자번호
                                            </div>
                                            <div className="txt">
                                                <select
                                                    onChange={(e) => {
                                                        const is_priv_corper =
                                                            e.currentTarget
                                                                .value ===
                                                            "busi";
                                                        profile.is_priv_corper =
                                                            is_priv_corper
                                                                ? true
                                                                : false;
                                                        setProfile({
                                                            ...profile,
                                                        });
                                                    }}
                                                    value={
                                                        is_priv_corper
                                                            ? "busi"
                                                            : "indi"
                                                    }
                                                    className="w20"
                                                >
                                                    <option value={"indi"}>
                                                        개인
                                                    </option>
                                                    <option value={"busi"}>
                                                        법인
                                                    </option>
                                                </select>
                                                <input
                                                    onChange={(e) => {
                                                        const val =
                                                            e.currentTarget
                                                                .value;
                                                        setProfile({
                                                            ...profile,
                                                            busi_num: val,
                                                        });
                                                    }}
                                                    value={busi_num}
                                                    type="text"
                                                    className="form-control w70 ml5"
                                                    placeholder="사업자번호를 입력해주세요."
                                                />
                                            </div>
                                        </li>
                                    )}
                                    <li>
                                        <div className="title">전화번호</div>
                                        <div className="txt">
                                            <input
                                                onChange={(e) => {
                                                    const val =
                                                        e.currentTarget.value;
                                                    setProfile({
                                                        ...profile,
                                                        phoneNumber: val,
                                                    });
                                                }}
                                                value={autoHypenPhone(
                                                    phoneNumber
                                                )}
                                                type="text"
                                                className="form-control w100"
                                                placeholder="전화번호를 입력해주세요."
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">주소</div>
                                        <div className="txt line2">
                                            <input
                                                onChange={handleTextData(
                                                    "address"
                                                )}
                                                value={address}
                                                type="text"
                                                className="form-control w70"
                                            />
                                            <button
                                                onClick={openModal(
                                                    "#addressFindModal"
                                                )}
                                                type="button"
                                                className="btn btn_mini"
                                            >
                                                주소찾기
                                            </button>
                                            <input
                                                value={address_detail}
                                                onChange={handleTextData(
                                                    "address_detail"
                                                )}
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
                                                value={busi_department}
                                                onChange={handleTextData(
                                                    "busi_department"
                                                )}
                                                type="text"
                                                className="form-control w20 mr5"
                                                placeholder="부서명"
                                            />
                                            <input
                                                value={name}
                                                onChange={handleTextData(
                                                    "name"
                                                )}
                                                type="text"
                                                className="form-control w50"
                                                placeholder="담당자를 입력해주세요."
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">
                                            사업자등록증
                                        </div>
                                        <div className="txt txt--flex">
                                            <span className="w80 upload_out_box">
                                                <span className="upload_out_box__fileName">
                                                    {busiRegistration?.name}
                                                </span>
                                                {busiRegistration && (
                                                    <CloseIcon
                                                        onClick={() => {
                                                            setBusiRegistration(
                                                                null
                                                            );
                                                        }}
                                                        className="upload_out_box__closer"
                                                        style={{
                                                            width: "10px",
                                                            height: "10px",
                                                        }}
                                                    />
                                                )}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    hiddenBusiFileInput.current?.click();
                                                }}
                                                type="button"
                                                className="btn btn_mini"
                                            >
                                                업로드
                                            </button>
                                            <input
                                                key={
                                                    busiRegistration
                                                        ? "busiImgExsit"
                                                        : "busiImg"
                                                }
                                                onChange={
                                                    handleChangeRegistration
                                                }
                                                ref={hiddenBusiFileInput}
                                                hidden
                                                type="file"
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">주력언어</div>
                                        <div className="txt txt--flex">
                                            <select
                                                id="LangSelect"
                                                className="w100"
                                                name="name"
                                                value={profile.lang}
                                                onChange={(e) => {
                                                    const val = e.currentTarget
                                                        .value as Lang;
                                                    setProfile({
                                                        ...profile,
                                                        lang: val,
                                                    });
                                                }}
                                            >
                                                <option value={Lang.KO}>
                                                    KOREAN
                                                </option>
                                                <option value={Lang.EN}>
                                                    ENGLISH
                                                </option>
                                                <option value={Lang.JP}>
                                                    JAPANESE
                                                </option>
                                                <option value={Lang.CH}>
                                                    CHINESE
                                                </option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">
                                            가이드 자격증
                                        </div>
                                        <div className="txt txt--btn">
                                            <ul>
                                                {profile.guideLicenses?.map(
                                                    (thumb, i) => (
                                                        <li
                                                            key={i + "thumb"}
                                                            className="on_file"
                                                        >
                                                            {thumb.name}
                                                            <i
                                                                onClick={handleDeleteLicense(
                                                                    i
                                                                )}
                                                                className="flaticon-multiply icon_x"
                                                            ></i>
                                                        </li>
                                                    )
                                                )}
                                                {(profile.guideLicenses
                                                    ?.length || 0) < 6 && (
                                                    <FileInput
                                                        onUpload={
                                                            handleAddLicense
                                                        }
                                                    >
                                                        <li id="thumb">
                                                            자격증추가
                                                            <i className="flaticon-add icon_plus"></i>
                                                        </li>
                                                    </FileInput>
                                                )}
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">통장사본</div>
                                        <div className="txt txt--flex">
                                            <span className="w80 upload_out_box">
                                                <span className="upload_out_box__fileName">
                                                    {bankImg?.name}
                                                </span>
                                                {bankImg && (
                                                    <CloseIcon
                                                        onClick={() => {
                                                            setBankImg(null);
                                                        }}
                                                        className="upload_out_box__closer"
                                                        style={{
                                                            width: "10px",
                                                            height: "10px",
                                                        }}
                                                    />
                                                )}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    hiddenBankFileInput.current?.click();
                                                }}
                                                type="button"
                                                className="btn btn_mini"
                                            >
                                                업로드
                                            </button>
                                            <input
                                                key={
                                                    bankImg
                                                        ? "bankImgExsit"
                                                        : "bankImg"
                                                }
                                                onChange={
                                                    handleBankRegistration
                                                }
                                                ref={hiddenBankFileInput}
                                                hidden
                                                type="file"
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">정산계좌</div>
                                        <div className="txt">
                                            <div className="line_first">
                                                <input
                                                    onChange={(e) => {
                                                        const val =
                                                            e.currentTarget
                                                                .value;
                                                        setProfile({
                                                            ...profile,
                                                            bank_name: val,
                                                        });
                                                    }}
                                                    value={bank_name}
                                                    type="text"
                                                    className="form-control w20 mr5"
                                                    placeholder="은행명"
                                                />
                                                <input
                                                    onChange={(e) => {
                                                        const format =
                                                            e.currentTarget
                                                                .value;
                                                        profile.account_number =
                                                            format;
                                                        setProfile({
                                                            ...profile,
                                                        });
                                                    }}
                                                    value={account_number}
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
                    )}
                    <div className="box3">
                        <div className="box_left">
                            <div className="title">
                                <h5>가이드 키워드</h5>
                            </div>
                        </div>
                        <div className="box_right">
                            <KeywardSelecter
                                className="mypage__keywards"
                                value={keywardsOps}
                                handleChange={(keywards) => {
                                    const keyLabels = keywards.map(
                                        (keyward) => keyward.label
                                    );
                                    profile.keywards = keyLabels;
                                    setProfile({ ...profile });
                                }}
                            />
                        </div>
                    </div>
                    <div className="box3">
                        <div className="box_left">
                            <div className="title">
                                <h5>활동지역</h5>
                            </div>
                        </div>
                        <div className="box_right">
                            <KeywardSelecter
                                options={categoriesMap.REGION.map((region) => ({
                                    label: region.label,
                                    _id: region._id,
                                    value: region._id,
                                }))}
                                className="mypage__keywards"
                                value={regionsOps}
                                handleChange={(regions) => {
                                    profile.regions = regions.map(
                                        (region) => region._id
                                    );
                                    setProfile({ ...profile });
                                }}
                            />
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
                                        {/* <input onChange={toggleCheck("acceptSms")} checked={acceptSms} type="checkbox" /> */}
                                        <span className="checkbox mr5">
                                            <input
                                                type="checkbox"
                                                onChange={toggleCheck(
                                                    "acceptSms"
                                                )}
                                                checked={acceptSms}
                                                id={`agree1`}
                                                title="동의"
                                            />
                                            <label htmlFor={`agree1`} />
                                        </span>
                                        <span>SNS 수신 동의를 합니다.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">E-mail 수신동의</div>
                                    <div className="txt tr">
                                        {/* <input onChange={toggleCheck("acceptEamil")} checked={acceptEamil} type="checkbox" /> */}
                                        <span className="checkbox mr5">
                                            <input
                                                type="checkbox"
                                                onChange={toggleCheck(
                                                    "acceptEamil"
                                                )}
                                                checked={acceptEamil}
                                                id="agree2"
                                                title="동의"
                                            />
                                            <label htmlFor="agree2" />
                                        </span>
                                        <span>E-mail 수신 동의를 합니다.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="fin ifMobile">
                        <div className="float_left">
                            <button
                                onClick={handleUpdate}
                                type="submit"
                                className="btn medium"
                            >
                                수정
                            </button>
                            <button
                                onClick={handlePasswordChange}
                                type="submit"
                                className="btn medium"
                            >
                                비밀번호 변경
                            </button>
                        </div>
                        {/* <div className="float_right">
                        <button onClick={handleReSign} type="submit"
                            className="btn medium color01">
                            회원탈퇴
                        </button>
                    </div> */}
                        <div className="float_right">
                            <button
                                onClick={handleResign2}
                                type="submit"
                                className="btn medium color01"
                            >
                                회원탈퇴
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal id="phoneVerifiModal" title="핸드폰 번호 인증">
                <div className="title">인증코드</div>
                <input
                    placeholder="인증코드"
                    value={code}
                    onChange={(e) => {
                        setCode(e.currentTarget.value);
                    }}
                />
                <button onClick={handleVerifyComplete}>인증하기</button>
                <button onClick={handleVerifi}>인증번호 발송</button>
            </Modal>
            <Modal id="phoneChangeModal" title="핸드폰 번호 변경">
                <input
                    placeholder="변경할 핸드폰 번호"
                    value={nextPhoneNum}
                    onChange={(e) => {
                        setNextPhoneNum(e.currentTarget.value);
                    }}
                />
                <input
                    placeholder="비밀번호"
                    value={pw}
                    onChange={(e) => {
                        setPw(e.currentTarget.value);
                    }}
                />
                <button onClick={handleChangePhoneNumber}>변경하기</button>
            </Modal>

            <ResignModal />
            <Modal id="addressFindModal" title="주소찾기">
                <DaumPostcode onComplete={handleCompleteFindAddress} />
            </Modal>
            <SubmitPsswordModal
                label="기존의 비밀번호를 입력 해주세요."
                title="비밀번호 변경"
                onSubmit={submitPassword}
                id="PsswordModal"
            />
        </MypageLayoutWrap>
    );
};

export default auth(ALLOW_LOGINED)(MyPageProfile);
