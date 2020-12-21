import React, { useContext, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useJoin } from '../../hook/useJoin';
import { JoinContext } from '../../pages/join';
import RegisterCheck from './RegisterCheck';


const FormPartnerNormal: React.FC = () => {
  const { verifyMu, verifyCompleteMu } = useContext(JoinContext)!;
  const {
    birthdayPicker,
    data,
    daumAddress,
    dayPickerMonth,
    errDisplay,
    handleAddress,
    handleBirthPicker,
    handleBusinessLicense,
    handleData,
    handleDaumPostalComplete,
    handleDayClick,
    handleDayPickerMonth,
    handleGender,
    handleNationality,
    markError,
    setBirthDayPicker
  } = useJoin();

  return (
    <>
      <div className="information_box">
        {/* 회원정보:개인파트너 */}
        <h5>
          개인파트너 회원
              <span className="info_top">
            <i className="important_icon" />는 필수항목입니다.
              </span>
        </h5>
        <div className="ph_wrap">
          <label>
            <i className="important_icon" />
                이메일
            </label>
          <button onClick={ } type="button" className="btn btn_mini">
            인증
            </button>
          <span className={`er red_font ${errDisplay.email && `on`}`}>
            *해당 이메일은 이미 사용중입니다.
              </span>
          <input
            type="email"
            className="w100"
            name="email"
            placeholder="email@email.com"
            value={data.email}
            onChange={handleData("email")}
          />
        </div>
        <div className="pw_wrap">
          <label>
            <i className="important_icon" />
                비밀번호
              </label>
          <span className={`er red_font ${errDisplay.pw && `on`}`}>
            *비밀번호는 특수문자 1개이상 숫자가 포함된 7~15 자리의 영문 숫자 조합이여야 합니다
              </span>
          <input
            type="password"
            className="w100"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={data.pw}
            onChange={handleData("pw")}
          />
        </div>
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
            name="passwordChk"
            placeholder="비밀번호 확인"
            value={data.pwcheck}
            onChange={handleData("pwcheck")}
          />
        </div>
        <div className="ph_wrap">
          <label>
            <i className="important_icon" />
                이름
              </label>
          <span className="er red_font">*한글 이외에 입력이 안됩니다.</span>
          <input
            type="text"
            className="w100"
            name="name"
            value={data.name}
            placeholder="업체명을 입력해주세요"
            onChange={handleData("busi_name")}
          />
        </div>
        <div className="ph_wrap">
          <label>연락처</label>
          <span className={`er red_font ${errDisplay.busi_contact && `on`}`}>*숫자이외에 입력이 안됩니다.</span>
          <div className="w100">
            <input
              type="text"
              className="w80"
              name="contact"
              placeholder="-를 제외한 휴대폰 번호를 입력해주세요"
              value={data.busi_contact || ""}
              onChange={handleData("busi_contact")}
            />
            <button type="button" className="btn btn_mini">
              인증
             </button>
          </div>
        </div>
        <hr />
        <h4>개인파트너 정보</h4>
        <div className="ph_wrap">
          <label>내국인/외국인</label>
          <span className="er red_font">*둘중 한개를 선택해 주세요.</span>
          <div className="w100">
            <ul className="country_check">
              <li className={`c_in ${!data.is_froreginer ? "on" : ""}`}
                onClick={handleNationality(true)}>내국인</li>
              <li className={`c_out ${data.is_froreginer ? "on" : ""}`}
                onClick={handleNationality(false)}>외국인</li>
            </ul>
          </div>
        </div>
        <div className="ph_wrap">
          <label>전화번호</label>
          <span className={`er red_font ${errDisplay.busi_contact && `on`}`}>*숫자만 입력이 가능합니다.</span>
          <div className="w100">
            <input
              type="text"
              className="form-control w100"
              name="contact"
              placeholder="전화번호를 입력해주세요."
              value={data.busi_contact || ""}
              onChange={handleData("busi_contact")}
            />
          </div>
          <div className="ph_wrap daum_addresss_wrap">
            <label>주소</label>
            <span className="er red_font">*주소가 정확하지 않습니다.</span>
            <div className="w100">
              <input type="text" className="w80" name="address"
                value={data.busi_address || ""}
                onChange={handleData("busi_address")} />
              <button type="button" className="btn btn_mini" onClick={handleAddress}>
                찾기
            </button>
            </div>
            <div className="w100 mt5">
              <input type="text" className="w100" name="address_detail" placeholder="상세주소"
                value={data.busi_address_detail || ""}
                onChange={handleData("busi_address_detail")} />
            </div>
          </div>
        </div>
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
              style={{ minWidth: 55 }}
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
      </div>
      <DaumPostcode
        onComplete={handleDaumPostalComplete}
      />
      <RegisterCheck
        registerInfo={data}
      />

    </>
  )
}

export default FormPartnerNormal
