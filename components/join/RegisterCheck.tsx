import React, { useState } from 'react'
import { isEmail, isPassword, isName, isPhone } from "@janda-com/front";
import { registerChkWarning, policyChkWarning, emptyAllow } from './helper';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../../apollo/mutations';
import { signUp, signUpVariables } from '../../types/api';


type TSMS = {
  sns: true,
  email: true
}

export type TPolicyChk = {
  policy_use: boolean,
  policy_info_collect: boolean,
  policy_info_entrust: boolean,
  policy_traveler: boolean,
  policy_partner: boolean,
  policy_marketing: boolean,
  policy_info_3rd: boolean
}

interface IProps {
  openPopup: (element: string | null) => void;
  handleJoinProcess: (processTarget: string) => void;
  registerInfo: any;
  registerSort?: string
}

const RegisterCheck: React.FC<IProps> = ({ openPopup, handleJoinProcess, registerInfo, registerSort }) => {


  const [productCreateMu, { loading: create_loading }] = useMutation<signUp, signUpVariables>(SIGN_UP, {
    onCompleted: () => { }
  });


  const [chkSMS, setChkSMS] = useState({
    sns: true,
    email: true
  });

  const [chkPolocy, setChkPolicy] = useState({
    policy_use: false,
    policy_info_collect: false,
    policy_info_entrust: false,
    policy_traveler: false,
    policy_partner: false,
    policy_marketing: false,
    policy_info_3rd: false
  });

  const [chkPolocyOptional, setChkPolicyOptional] = useState({
    policy_use: false,
    policy_info_collect: false,
    policy_info_entrust: false,
    policy_traveler: false,
    policy_partner: false,
    policy_marketing: false,
    policy_info_3rd: true
  });

  const [chkAll, setChkAll] = useState(false);

  const [validateOK, setValidateOK] = useState();

  const handleSMSAgree = (smsTarget: keyof TSMS) => {

    let agreeNewState = chkSMS;
    agreeNewState[smsTarget] = !chkSMS[smsTarget];
    setChkSMS({
      ...agreeNewState
    })

  }

  const handleAgreeAll = (chkState: boolean) => {

    if (!chkAll) {
      setChkAll(true);
      let policy: keyof TPolicyChk;
      let agreeAll = chkPolocy;
      for (policy in agreeAll) {
        agreeAll[policy] = true;
      }
      setChkPolicy({
        ...agreeAll
      })
    } else {
      setChkAll(false);
    }

  }

  const handlePolicy = (policyTarget: keyof TPolicyChk) => {

    let agreeNewState = chkPolocy;
    agreeNewState[policyTarget] = !chkPolocy[policyTarget];
    setChkPolicy({
      ...agreeNewState
    })

  }


  const validateCommon = () => {

    const regName = new RegExp(/^[가-힣]+$/);
    const regPhone = new RegExp(/^[0-9]+$/g);

    const nameTest = regName.test(registerInfo.name);
    const phoneTest = regPhone.test(registerInfo.contact);

    if (registerInfo.password != registerInfo.passwordChk) {
      alert('비밀번호 확인란에 기입하신 정보가 비밀번호와 다릅니다');
      return false;
    }

    if (!isEmail(registerInfo.email)) {
      alert('올바른 이메일을 사용해 주십시요');
      return false;
    }

    if (!phoneTest) {
      alert('연락처란에는 숫자만 기입해 주십시요');
      return false;
    }

    return true;

  }


  const validateNormal = () => {

    if (validateCommon()) {

      if (!registerInfo.name) {
        alert('이름은 한글로 입력해 주십시요');
        return false;
      }

      if (!isPhone(registerInfo.contact)) {
        alert('올바른 휴대폰 번호를 사용해 주십시요');
        return false;
      }

      handleRegister();

    }

  }

  const validatePartnerCor = () => {

    if (validateCommon()) {

      handleRegister();

    }

  }

  const validatePartnerNormal = () => {

    if (validateCommon()) {

      handleRegister();

    }

  }


  const validateEmptyChk = () => {

    let registerData;

    for (registerData in registerInfo) {

      // console.log(`${registerData} : ${registerInfo[registerData]}`);

      let chkEmpty = registerInfo[registerData];

      if (typeof chkEmpty != "boolean") {

        // if (emptyAllow[registerData] === undefined) {

        //   chkEmpty.trim();
        //   if (chkEmpty.length <= 0) {
        //     alert(`${registerChkWarning[registerData]}란에 정보를 입력해주세요.`);
        //     document.getElementsByName(registerData)[0].focus();
        //     return false;
        //   }

        // }

      }

    }
    return true;

  }

  const handleValidateInit = (validateTarget?: string) => {


    if (validateEmptyChk()) {

      alert('Input Validation start');
      switch (validateTarget) {
        case 'normal':
          validateNormal();
          break;

        case 'partnerCor':
          validatePartnerCor();
          break;

        case 'partnerNormal':
          validatePartnerNormal();
          break;
      }

    }

  }

  const handleRegister = () => {

    let chkAll = true;
    let policy: keyof TPolicyChk;

    for (policy in chkPolocy) {
      if (!chkPolocy[policy] && !chkPolocyOptional[policy]) {
        chkAll = false;
        alert(`${policyChkWarning[policy]} 에 동의 해주십시요`);
        break;
      }
    }

    if (chkAll) {

      alert('Validation end');

      console.log(registerInfo);

      productCreateMu({
        variables: {
          data: {
            email: registerInfo.email,
            pw: registerInfo.password,
            is_froreginer: registerInfo.isKorean,
            role: registerInfo.register_sort,
            bank_name: registerInfo.bank_name,
            account_number: registerInfo.account,
            address: registerInfo.address,
            brith_date: registerInfo.birthday,
            bsui_address: registerInfo.address,
            busi_contact: registerInfo.contact,
            busi_name: registerInfo.name,
            busi_num: registerInfo.number,
            gender: registerInfo.gender,
            is_priv_corper: registerInfo.isKorean,

          }
        }
      })

      /* 최종 Post Values */

      handleJoinProcess('registered');
    }

  }

  return (
    <>
      <div className="agree_rule">
        <div className="agreeChk mb30">
          <label htmlFor="allow_message" className="control-label title">
            SMS 수신동의
            </label>
          <div className="txt">
            <label htmlFor="snsYes" className="radio-inline">
              <input
                type="radio"
                name="allow_sms"
                id="snsYes"
                defaultValue="Y"
                defaultChecked={true}
                onChange={() => { handleSMSAgree('sns') }}
              />{" "}
                예
              </label>
            <label htmlFor="snsNo" className="radio-inline">
              <input
                type="radio"
                name="allow_sms"
                id="snsNo"
                defaultValue="N"
                onChange={() => { handleSMSAgree('sns') }}
              />{" "}
                아니오
              </label>
          </div>
        </div>
        <div className="agreeChk mb30">
          <label className="control-label title">E-mail 수신동의</label>
          <div className="txt">
            <label htmlFor="mailYes" className="radio-inline">
              <input
                type="radio"
                name="allow_mailing"
                id="mailYes"
                defaultValue="Y"
                defaultChecked={true}
                onChange={() => { handleSMSAgree('email') }}
              />{" "}
                예
              </label>
            <label htmlFor="mailNo" className="radio-inline">
              <input
                type="radio"
                name="allow_mailing"
                id="mailNo"
                defaultValue="N"
                onChange={() => { handleSMSAgree('sns') }}
              />{" "}
                아니오
              </label>
          </div>
        </div>
        <div className="agreeChk mb10">
          <input type="checkbox" className="checkbox" onChange={() => {
            handleAgreeAll(!chkAll)
          }
          } />
          <span>모두 동의합니다</span>
        </div>
        <div className="agreeChk_list">
          <ul>
            <li>
              {/* ALL */}
              <div className="in_box1">
                <input type="checkbox" className="checkbox"
                  checked={chkPolocy.policy_use}
                  onClick={() => { handlePolicy('policy_use') }} />
                <span>
                  <strong>이용약관 동의</strong>[필수]
                  </span>
              </div>
              <div className="in_box2">
                <a
                  onClick={() => {
                    openPopup('Popup01');
                  }}
                >
                  전문보기 &gt;
                  </a>
              </div>
            </li>
            <li>
              {/* ALL */}
              <div className="in_box1">
                <input type="checkbox" className="checkbox"
                  checked={chkPolocy.policy_info_collect}
                  onClick={() => { handlePolicy('policy_info_collect') }} />
                <span>
                  <strong>개인정보 수집 및 이용 동의</strong>[필수]
                  </span>
              </div>
              <div className="in_box2">
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    openPopup('Popup02');
                  }}
                >
                  전문보기 &gt;
                  </a>
              </div>
            </li>
            <li>
              {/* ALL */}
              <div className="in_box1">
                <input type="checkbox" className="checkbox"
                  checked={chkPolocy.policy_info_entrust}
                  onClick={() => { handlePolicy('policy_info_entrust') }} />
                <span>
                  <strong>개인정보처리 위탁</strong>[필수]
                  </span>
              </div>
              <div className="in_box2">
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    openPopup('Popup03');
                  }}
                >
                  전문보기 &gt;
                  </a>
              </div>
            </li>
            <li>
              {/* 개인 */}
              <div className="in_box1">
                <input type="checkbox" className="checkbox"
                  checked={chkPolocy.policy_traveler}
                  onClick={() => { handlePolicy('policy_traveler') }} />
                <span>
                  <strong>여행자약관</strong>[필수]
                  </span>
              </div>
              <div className="in_box2">
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    openPopup('Popup04');
                  }}
                >
                  전문보기 &gt;
                  </a>
              </div>
            </li>
            <li>
              {/* 기업파트너/개인파트너 */}
              <div className="in_box1">
                <input type="checkbox" className="checkbox"
                  checked={chkPolocy.policy_partner}
                  onClick={() => { handlePolicy('policy_partner') }} />
                <span>
                  <strong>파트너약관</strong>[필수]
                  </span>
              </div>
              <div className="in_box2">
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    openPopup('Popup07');
                  }}
                >
                  전문보기 &gt;
                  </a>
              </div>
            </li>
            <li>
              {/* ALL */}
              <div className="in_box1">
                <input type="checkbox" className="checkbox"
                  checked={chkPolocy.policy_marketing}
                  onClick={() => { handlePolicy('policy_marketing') }} />
                <span>
                  <strong>마케팅정보 수신동의</strong>[필수]
                  </span>
              </div>
              <div className="in_box2">
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    openPopup('Popup06');
                  }}
                >
                  전문보기 &gt;
                  </a>
              </div>
            </li>
            <li>
              {/* ALL */}
              <div className="in_box1">
                <input type="checkbox" className="checkbox"
                  checked={chkPolocy.policy_info_3rd}
                  onClick={() => { handlePolicy('policy_info_3rd') }} />
                <span>
                  <strong>개인정보 제3자 제공</strong>
                </span>
              </div>
              <div className="in_box2">
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    openPopup('Popup05');
                  }}
                >
                  전문보기 &gt;
                  </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="fin">
        <a href="/" className="cancel btn">취소</a>
        <button type="submit" className="sum btn"
          onClick={() => {
            handleValidateInit(registerSort);
          }}>등록</button>
      </div>
    </>
  )
}

export default RegisterCheck
