import React, { useContext, useEffect } from "react";
import DaumPostcode from "react-daum-postcode";
import RegisterCheck from "./RegisterCheck";
import "react-day-picker/lib/style.css";
import { GENDER, Lang } from "../../types/api";
import { useJoin } from "../../hook/useJoin";
import { JoinContext } from "../../pages/member/join";
import { autoHypenPhone } from "../../utils/formatter";
import { BirthDayPicker } from "../birthdayPicker/BirthdayPicker";
import dayjs from "dayjs";
import { FileInput } from "../fileInput/FileInput";

const UserInfoForm: React.FC = () => {
    const { isIndi, isPartenerB, isPartner } = useContext(JoinContext)!;
    const {
        data,
        setData,
        daumAddress,
        handleAddress,
        handleBirthPicker,
        handleData,
        handleDaumPostalComplete,
        handleDayClick,
        handleDayPickerMonth,
        handleGender,
        handleBankImg,
        dayPickerMonth,
        birthdayPicker,
        setBirthDayPicker,
        handleNationality,
        handleGuidLicenseImg,
        errDisplay,
        setDaumAddress,
        handleBusinessLicense,
        nickNameChecked,
        handleNickNameCheck,
        handleAddLicense,
        handleDeleteLicense,
    } = useJoin();

    useEffect(() => {
        const hideDaumAddress = () => {
            setDaumAddress(false);
            setBirthDayPicker(false);
        };
        window.addEventListener("click", hideDaumAddress);
        return () => {
            window.removeEventListener("click", hideDaumAddress);
        };
    }, []);

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.persist();
                }}
            >
                <div className="information_box">
                    {/* 회원정보:개인 */}
                    <h5>
                        {isIndi && "개인 회원"}
                        {isPartenerB && "가이드 회원"}
                        {isPartner && "가이드 회원"}
                        <span className="info_top">
                            <i className="important_icon" />는 필수항목입니다.
                        </span>
                    </h5>
                    <div className="ph_wrap">
                        <label>
                            <i className="important_icon" />
                            이메일
                        </label>
                        <span
                            className={`er red_font ${
                                errDisplay.email && `on`
                            }`}
                        >
                            *해당 이메일은 이미 사용중입니다.
                        </span>
                        <input
                            type="email"
                            className="w100"
                            placeholder="email@email.com"
                            name="email"
                            readOnly
                            value={data.email}
                        />
                    </div>
                    <div className="pw_wrap">
                        <label>
                            <i className="important_icon" />
                            비밀번호
                        </label>
                        <input
                            type="password"
                            className="w100"
                            placeholder="비밀번호를 입력해주세요"
                            name="password"
                            value={data.pw}
                            onChange={handleData("pw")}
                        />
                    </div>
                    <span>
                        * 비밀번호는 특수문자 1개이상 숫자가 포함된 7~15 자리의
                        영문 숫자 조합이여야 합니다
                    </span>
                    <div className="pw_wrap_c">
                        <label>
                            <i className="important_icon" />
                            비밀번호 확인
                        </label>
                        <span className="er red_font">
                            *비밀번호가 일치하지 않습니다.
                        </span>
                        <input
                            type="password"
                            className="w100"
                            placeholder="비밀번호 확인"
                            name="passwordChk"
                            value={data.pwcheck}
                            onChange={handleData("pwcheck")}
                        />
                    </div>
                    <div className="name_wrap">
                        <label>
                            <i className="important_icon" />
                            닉네임
                        </label>
                        <span
                            className={`er red_font ${
                                errDisplay.nickName && `on`
                            }`}
                        >
                            *특수문자를 입력하지 말아주세요.
                        </span>
                        <div>
                            <input
                                type="text"
                                className="w80"
                                placeholder="닉네임을 입력해주세요"
                                name="name"
                                value={data.nickName}
                                onChange={handleData("nickName")}
                            />
                            <button
                                style={{ lineHeight: "100%" }}
                                onClick={handleNickNameCheck}
                                type="button"
                                className={`btn btn_mini ${
                                    nickNameChecked && "ok"
                                }`}
                            >
                                {nickNameChecked ? "사용가능" : "중복확인"}{" "}
                            </button>
                        </div>
                    </div>
                    <div className="name_wrap">
                        <label>
                            <i className="important_icon" />
                            이름
                        </label>
                        <span
                            className={`er red_font ${errDisplay.name && `on`}`}
                        >
                            *한글 이외에 입력이 안됩니다.
                        </span>
                        <input
                            id="NameInput"
                            type="text"
                            className="w100"
                            placeholder="이름을 입력해주세요"
                            name="name"
                            value={data.name}
                            onChange={handleData("name")}
                        />
                    </div>
                    <div className="lang_wrap">
                        <label>
                            <i className="important_icon" />
                            주력언어
                        </label>
                        <select
                            id="LangSelect"
                            className="w100"
                            name="name"
                            value={data.lang || undefined}
                            onChange={handleData("lang")}
                        >
                            <option value={""}>선택없음</option>
                            <option value={Lang.KO}>KOREAN</option>
                            <option value={Lang.EN}>ENGLISH</option>
                            <option value={Lang.JP}>JAPANES</option>
                            <option value={Lang.CH}>CHINESE</option>
                        </select>
                    </div>
                    <hr />
                    <h4>가이드정보</h4>
                    <div className="ph_wrap daum_addresss_wrap">
                        <label>주소</label>
                        <span className="er red_font">
                            *주소가 정확하지 않습니다.
                        </span>
                        <div onClick={handleAddress} className="w100">
                            <input
                                type="text"
                                className="w80"
                                name="address"
                                value={data.address}
                                readOnly
                                onChange={handleData("address")}
                            />
                            <button
                                style={{ lineHeight: "100%" }}
                                type="button"
                                className="btn btn_mini"
                            >
                                찾기
                            </button>
                        </div>
                        <div className="w100 mt5">
                            <input
                                id="AddressInput"
                                type="text"
                                className="w100"
                                name="address_detail"
                                placeholder="상세주소"
                                value={data.address_detail}
                                onChange={handleData("address_detail")}
                            />
                        </div>
                        <div className={`daum_addresss ${daumAddress && "on"}`}>
                            <DaumPostcode
                                onComplete={handleDaumPostalComplete}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="ph_wrap">
                            <label>전화번호</label>
                            <span
                                className={`er red_font ${
                                    errDisplay.busi_contact && `on`
                                }`}
                            >
                                *숫자만 입력이 가능합니다.
                            </span>
                            <div className="w100">
                                <input
                                    type="text"
                                    className="form-control w100"
                                    name="contact"
                                    placeholder="전화번호를 입력해주세요."
                                    value={autoHypenPhone(
                                        data.busi_contact || ""
                                    )}
                                    onChange={handleData("busi_contact")}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className="ph_wrap">
                        <label>
                            <i className="important_icon" />
                            가이드 자격증
                        </label>
                        <span className="er red_font">
                            *jpg, gif, png 이외에 업로드 불가능합니다.
                        </span>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                            className="w100 apply_relative"
                        >
                            <span className="w80 upload_out_box">
                                {data.guideLicense?.name}
                            </span>
                            <label
                                htmlFor="busiLicense"
                                className="cus_file_busi_license"
                            >
                                업로드
                            </label>
                        </div>
                    </div> */}
                    <div className="ph_wrap">
                        <label>
                            <i className="important_icon" />
                            가이드자격증
                        </label>
                        {data.guideLicenses?.map((thumb, i) => (
                            <span
                                key={i + "thumb"}
                                className="w80 upload_out_box mb10"
                            >
                                {thumb.name}
                                <i
                                    onClick={handleDeleteLicense(i)}
                                    className="flaticon-multiply icon_x"
                                ></i>
                            </span>
                        ))}
                        {(data.guideLicenses?.length || 0) < 6 && (
                            <FileInput onUpload={handleAddLicense}>
                                <span className="w80 upload_out_box">
                                    자격증추가
                                    <i className="flaticon-add icon_plus"></i>
                                </span>
                            </FileInput>
                        )}
                    </div>
                    <div className="ph_wrap">
                        <label>
                            <i className="important_icon" />
                            통장사본
                        </label>
                        <span className="er red_font">
                            *jpg, gif, png 이외에 업로드 불가능합니다.
                        </span>
                        <FileInput
                            onUpload={handleBankImg}
                            onClickDelete={() => {}}
                            TagName="div"
                            wrapProp={{
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                },
                                className: "w100 apply_relative",
                            }}
                        >
                            <span className="w80 upload_out_box">
                                {data.bankImg?.name}
                            </span>
                            <label
                                htmlFor="bankImg"
                                className="cus_file_busi_license"
                            >
                                업로드
                            </label>
                        </FileInput>
                    </div>

                    {isIndi || (
                        <div className="ph_wrap">
                            <label>정산계좌</label>
                            <span className="er red_font">
                                *정보를 정확하게 입력해주세요.
                            </span>
                            <div className="w100">
                                <input
                                    type="text"
                                    className="w10"
                                    name="bank_name"
                                    style={{ minWidth: 55, marginRight: "5px" }}
                                    placeholder="은행"
                                    value={data.bank_name || ""}
                                    onChange={handleData("bank_name")}
                                />
                                <input
                                    type="text"
                                    className="w80"
                                    name="bank_account"
                                    placeholder="계좌번호"
                                    value={data.account_number || ""}
                                    onChange={handleData("account_number")}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <RegisterCheck registerInfo={data} />
            </form>
        </>
    );
};

export default UserInfoForm;
