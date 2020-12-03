import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import RegisterCheck from './RegisterCheck';
import { TForm } from 'pages/join';

export type TFormPartnerNormal = {
  email: string,
  password: string,
  passwordChk: string,
  name: string,
  contact: string,
  isKorean: boolean,
  areacode: string,
  partner_contact: string,
  address: string,
  address_detail: string,
  partner_file: string,
  bank_name: string,
  bank_account: string,
  register_sort: string,
  is_priv_corper: boolean
}


const defaultInfo: TFormPartnerNormal = process.env.NODE_ENV === "development" ? {
  email: "test@naver.com",
  password: "!238917",
  passwordChk: "!238917",
  name: "테스트 네임",
  contact: "0101112222",
  isKorean: true,
  areacode: "02",
  partner_contact: "0101112222",
  address: "address",
  address_detail: "address_detail",
  partner_file: "jpg, png 파일만 업로드 가능합니다",
  bank_name: "KB",
  bank_account: "1112222333",
  register_sort: "partner",
  is_priv_corper: false
} : {
    email: "",
    password: "",
    passwordChk: "",
    name: "",
    contact: "",
    isKorean: true,
    areacode: "02",
    partner_contact: "",
    address: "",
    address_detail: "",
    partner_file: "jpg, png 파일만 업로드 가능합니다",
    bank_name: "",
    bank_account: "",
    register_sort: "partner",
    is_priv_corper: false
  }


const FormPartnerNormal: React.FC<TForm> = ({ openPopup, handleJoinProcess }) => {

  const [formInfo, setFormInfo] = useState<TFormPartnerNormal>(defaultInfo)

  const [errDisplay, setErrDisplay] = useState({
    email: false,
    password: false,
    passwordChk: false,
    name: false,
    contact: false,
    isKorean: false,
    areacode: false,
    partner_contact: false,
    address: false,
    address_detail: false,
    partner_file: false,
    bank_name: false,
    bank_account: false,
    register_sort: false,
    is_priv_corper: false
  });

  const [daumAddress, setDaumAddress] = useState(false);

  const handleAddress = (address) => {
      setDaumAddress(true); 
  }

  const addressUpdate = (address) => {
      setFormInfo({
          ...formInfo,
          address: address
      })
  }

  const handleComplete = (data) => {

      let fullAddress = data.address;
      let extraAddress = ''; 
      
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
      }
      addressUpdate(fullAddress);
      setDaumAddress(false);
  }


  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {

    setErrDisplay({
      ...errDisplay,
      [e.target.name]: false
    })

    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value
    })

  }

  const handleErrDisplay = (errTarget: keyof TFormPartnerNormal) => {

    let errList = errDisplay;
    errList[errTarget] = !errDisplay[errTarget];
    setErrDisplay({
      ...errList
    })

  }

  const handleNationality = (chkKorean: boolean) => {

    setFormInfo({
      ...formInfo,
      isKorean: !formInfo.isKorean
    })

  }

  const handleContact = (e: React.ChangeEvent<HTMLSelectElement>) => {

    setFormInfo({
      ...formInfo,
      areacode: e.target.value
    })

  }

  const handlePartnerFile = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.files) {
      const fileTypeChk = ['image/jpg', 'image/jpeg', 'image/png'];
      const fileType = e.target.files[0].type;
      
      console.log(e.target.files[0]);

      console.log(fileType);

      if(!fileTypeChk.includes(fileType))  {
        // alert('jpg 혹은 png 파일만 업로드 가능합니다');
        return false;
      }

      setFormInfo({
        ...formInfo,
        partner_file: e.target.files[0].name
      })

    }

  }

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
          <span className={`er red_font ${errDisplay.email && `on`}`}>
            *해당 이메일은 이미 사용중입니다.
              </span>
          <input
            type="email"
            className="w100"
            name="email"
            placeholder="email@email.com"
            value={formInfo.email}
            onChange={(e) => { handleForm(e) }}
          />
        </div>
        <div className="pw_wrap">
          <label>
            <i className="important_icon" />
                비밀번호
              </label>
          <span className={`er red_font ${errDisplay.password && `on`}`}>
            *비밀번호는 특수문자 1개이상 숫자가 포함된 7~15 자리의 영문 숫자 조합이여야 합니다
              </span>
          <input
            type="password"
            className="w100"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={formInfo.password}
            onChange={(e) => { handleForm(e) }}
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
            value={formInfo.passwordChk}
            onChange={(e) => { handleForm(e) }}
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
            value={formInfo.name}
            placeholder="업체명을 입력해주세요"
            onChange={(e) => { handleForm(e) }}
          />
        </div>
        <div className="ph_wrap">
          <label>연락처</label>
          <span className={`er red_font ${errDisplay.contact && `on`}`}>*숫자이외에 입력이 안됩니다.</span>
          <div className="w100">
            <input
              type="text"
              className="w80"
              name="contact"
              placeholder="-를 제외한 휴대폰 번호를 입력해주세요"
              value={formInfo.contact}
              onChange={(e) => { handleForm(e) }}
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
              <li className={`c_in ${formInfo.isKorean ? "on" : ""}`}
                onClick={() => { handleNationality(true) }}>내국인</li>
              <li className={`c_out ${!formInfo.isKorean ? "on" : ""}`}
                onClick={() => { handleNationality(false) }}>외국인</li>
            </ul>
          </div>
        </div>
        <div className="ph_wrap">
          <label>전화번호</label>
          <span className="er red_font">*숫자만 입력이 가능합니다.</span>
          <div className="w100">
            <select className="w20" value={formInfo.areacode} onChange={handleContact}>
              <option value="02">02</option>
              <option value="055">055</option>
            </select>
            <input
              type="text"
              className="form-control w70"
              name="partner_contact"
              placeholder="전화번호를 입력해주세요."
              value={formInfo.partner_contact}
              onChange={(e) => { handleForm(e) }}
            />
          </div>
        </div>
        <div className="ph_wrap daum_addresss_wrap">
          <label>주소</label>
          <span className="er red_font">*주소가 정확하지 않습니다.</span>
          <div className="w100">
            <input type="text" className="w80" name="address"
              value={formInfo.address}
              onChange={(e) => { handleForm(e) }} />
            <button type="button" className="btn btn_mini" onClick={handleAddress}>
              찾기
            </button>
          </div>
          <div className="w100 mt5">
            <input type="text" className="w100" placeholder="상세주소" name="address_detail"
              value={formInfo.address_detail}
              onChange={(e) => { handleForm(e) }} />
          </div>
          <div className={`daum_addresss ${daumAddress && 'on'}`}>
              <DaumPostcode
                  onComplete={handleComplete}
              />
          </div>
        </div>
        <div className="ph_wrap">
          <label>서류첨부</label>
          <span className="er red_font">
            *jpg, gif, png 이외에 업로드 불가능합니다.
              </span>

          <div className="w100 apply_relative">
            <span className="w80 upload_out_box">
              {formInfo.partner_file}
            </span>

            <label htmlFor="partner_file" className="cus_file_busi_license">
              업로드
                </label>
            <input type="file" name="partner_file" id="partner_file"
              className="file_busi_license"
              onChange={handlePartnerFile}></input>
            {/* <button type="button" className="btn btn_mini">
                  업로드
                </button> */}
          </div>

        </div>
        <div className="ph_wrap">
          <label>정산계좌</label>
          <span className="er red_font">
            *정보를 정확하게 입력해주세요.
              </span>
          <div className="w100">
            <input type="text" className="w10" style={{ minWidth: 55 }}
              name="bank_name"
              placeholder="은행"
              value={formInfo.bank_name}
              onChange={(e) => { handleForm(e) }} />
            <input type="text" className="w80"
              name="bank_account"
              placeholder="계좌번호"
              value={formInfo.bank_account}
              onChange={(e) => { handleForm(e) }} />
          </div>
        </div>
      </div>
      <RegisterCheck
        openPopup={openPopup}
        handleJoinProcess={handleJoinProcess}
        registerInfo={formInfo}
        registerSort={'partnerNormal'}
        handleErrDisplay={handleErrDisplay}
      />

    </>
  )
}

export default FormPartnerNormal
