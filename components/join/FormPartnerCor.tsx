import React, { useState, useRef } from 'react';
import DaumPostcode from 'react-daum-postcode';
import RegisterCheck from './RegisterCheck';
import { TForm } from 'pages/join';

export type TFormPartnetCor = {
  email: string,
  password: string,
  passwordChk: string,
  name_company: string,
  business_sort: string,
  business_number: string,
  areacode: string,
  contact: string,
  address: string,
  address_detail: string,
  department: string,
  incharge_name: string,
  incharge_number: string,
  business_license: string,
  bank_name: string,
  bank_account: string,
  register_sort: string,
  is_priv_corper: boolean
}

const defaultInfo: TFormPartnetCor = process.env.NODE_ENV === "development" ? {
  email: "test@naver.com",
  password: "!238917",
  passwordChk: "!238917",
  name_company: "테스트 네임",
  business_sort: "개인",
  business_number: "123123",
  areacode: "02",
  contact: "123123",
  address: "address",
  address_detail: "address_detail",
  department: "영업부서",
  incharge_name: "담당자 이름",
  incharge_number: "0101112222",
  business_license: "jpg, png 파일만 업로드 가능합니다",
  bank_name: "KB",
  bank_account: "1122333",
  register_sort: "partnerB",
  is_priv_corper: true
} : {
    email: "",
    password: "",
    passwordChk: "",
    name_company: "",
    business_sort: "개인",
    business_number: "",
    areacode: "02",
    contact: "",
    address: "",
    address_detail: "",
    department: "",
    incharge_name: "",
    incharge_number: "",
    business_license: "jpg, png 파일만 업로드 가능합니다",
    bank_name: "",
    bank_account: "",
    register_sort: "partnerB",
    is_priv_corper: true
  }

const FormPartnerCor: React.FC<TForm> = ({ openPopup, handleJoinProcess }) => {

  const [formInfo, setFormInfo] = useState<TFormPartnetCor>(defaultInfo)

  const [errDisplay, setErrDisplay] = useState({
    email: false,
    password: false,
    passwordChk: false,
    name_company: false,
    business_sort: false,
    business_number: false,
    areacode: false,
    contact: false,
    address: false,
    address_detail: false,
    department: false,
    incharge_name: false,
    incharge_number: false,
    business_license: false,
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

  const handleErrDisplay = (errTarget: keyof TFormPartnetCor) => {

    let errList = errDisplay;
    errList[errTarget] = !errDisplay[errTarget];
    setErrDisplay({
      ...errList
    })

  }

  const handleBusinessSort = (e: React.ChangeEvent<HTMLSelectElement>) => {

    setFormInfo({
      ...formInfo,
      business_sort: e.target.value
    })

  }

  const handleContact = (e: React.ChangeEvent<HTMLSelectElement>) => {

    setFormInfo({
      ...formInfo,
      areacode: e.target.value
    })

  }

  const handleBusinessLicense = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.files) {
      const fileType = e.target.files[0].type;
      if (fileType != 'image/png' && fileType != 'image/jepg') {
        alert('jpg 혹은 png 파일만 업로드 가능합니다');
        return false;
      }
      setFormInfo({
        ...formInfo,
        business_license: e.target.files[0].name
      })
    }

  }

  return (
    <>
      <div className="information_box">
        {/* 회원정보:기업파트너 */}
        <h5>
          기업파트너 회원
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
            * 해당 이메일은 이미 사용중입니다.
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
            onChange={(e) => { handleForm(e) }}
          />
        </div>
        <hr />
        <h4>기업정보</h4>
        <div className="ph_wrap">
          <label>
            <i className="important_icon" />
                파트너명(회사명)
              </label>
          <span className="er red_font">*숫자는 입력이 불가능합니다.</span>
          <input
            type="text"
            className="w100"
            name="name_company"
            placeholder="업체명을 입력해주세요"
            value={formInfo.name_company}
            onChange={(e) => { handleForm(e) }}
          />
        </div>
        <div className="ph_wrap">
          <label>
            <i className="important_icon" />
                사업자번호
              </label>
          <span className="er red_font">
            *사업자번호가 바르지 않습니다.
              </span>
          <div className="w100">
            <select className="w20" value={formInfo.business_sort} onChange={handleBusinessSort}>
              <option value="개인">개인</option>
              <option value="법인">법인</option>
            </select>
            <input
              type="text"
              className="form-control w70"
              name="business_number"
              placeholder="사업자번호를 입력해주세요."
              value={formInfo.business_number}
              onChange={(e) => { handleForm(e) }}
            />
          </div>
        </div>
        <div className="ph_wrap">
          <label>대표 전화번호</label>
          <span className={`er red_font ${errDisplay.contact && `on`}`}>*숫자만 입력이 가능합니다.</span>
          <div className="w100">
            <select className="w20" value={formInfo.areacode} onChange={handleContact}>
              <option value="02">02</option>
              <option value="055">055</option>
            </select>
            <input
              type="text"
              className="form-control w70"
              name="contact"
              placeholder="전화번호를 입력해주세요."
              value={formInfo.contact}
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
            <input type="text" className="w100" name="address_detail" placeholder="상세주소"
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
          <label>담당자</label>
          <span className="er red_font">*숫자를 입력 할 수 없습니다.</span>
          <div className="w100">
            <input
              type="text"
              className="form-control w20"
              placeholder="부서명"
              name="department"
              value={formInfo.department}
              onChange={(e) => { handleForm(e) }}
            />{" "}
            <input
              type="text"
              className="form-control w70"
              name="incharge_name"
              placeholder="담당자를 입력해주세요."
              value={formInfo.incharge_name}
              onChange={(e) => { handleForm(e) }}
            />
          </div>
        </div>
        <div className="ph_wrap">
          <label>담당자 연락처</label>
          <span className="er red_font">*숫자이외에 입력이 안됩니다.</span>
          <div className="w100">
            <input
              type="text"
              className="w80"
              name="incharge_number"
              placeholder="-를 제외한 휴대폰 번호를 입력해주세요"
              value={formInfo.incharge_number}
              onChange={(e) => { handleForm(e) }}
            />
            <button type="button" className="btn btn_mini">
              인증
                </button>
          </div>
        </div>
        <div className="ph_wrap">
          <label>
            <i className="important_icon" />
                사업자등록증
              </label>
          <span className="er red_font">
            *jpg, gif, png 이외에 업로드 불가능합니다.
              </span>
          <div className="w100 apply_relative">
            <span className="w80 upload_out_box">
              {formInfo.business_license}
            </span>

            <label htmlFor="business_license" className="cus_file_busi_license">
              업로드
                </label>
            <input type="file" name="business_license" id="business_license"
              className="file_busi_license"
              onChange={handleBusinessLicense}></input>
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
            <input
              type="text"
              className="w10"
              name="bank_name"
              style={{ minWidth: 55 }}
              placeholder="은행"
              value={formInfo.bank_name}
              onChange={(e) => { handleForm(e) }}
            />
            <input
              type="text"
              className="w80"
              name="bank_account"
              placeholder="계좌번호"
              value={formInfo.bank_account}
              onChange={(e) => { handleForm(e) }}
            />
          </div>
        </div>
      </div>
      <RegisterCheck
        openPopup={openPopup}
        handleJoinProcess={handleJoinProcess}
        registerInfo={formInfo}
        registerSort={'partnerCor'}
        handleErrDisplay={handleErrDisplay}
      />
    </>
  )
}

export default FormPartnerCor
