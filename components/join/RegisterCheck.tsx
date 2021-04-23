import React, { useContext, useState } from 'react'
import { AddUserInput, ERR_CODE, UserRole } from '../../types/api';
import { isEmail, isPhone, isPassword, isName } from 'utils/validation';
import { useSignUp } from '../../hook/useUser';
import { Validater } from '../../utils/validate';
import { JoinContext } from '../../pages/member/join';
import { openModal } from '../../utils/popUp';
import { ISignUpInput } from '../../hook/useJoin';
import { omits } from '../../utils/omit';
import { Modal } from '../modal/Modal';
import { Policy } from '../policy/PriviacyPolicy';

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
  registerInfo: ISignUpInput;
}

const RegisterCheck: React.FC<IProps> = ({ registerInfo }) => {

  const { userType, setJoinProcess, verifiData } = useContext(JoinContext)!;

  const { _id: verificationId } = verifiData!;


  const [signUpMu] = useSignUp({
    onCompleted: ({ SignUp }) => {
      if (SignUp.ok) {
        alert("회원가입 완료")
        setJoinProcess('registered');
      } else {
        if (SignUp.error?.code === ERR_CODE.ALEADY_SAME_DATA) {
          alert("이미 가입된 회원입니다.");
        }
      }
    }
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

  const optional: (keyof typeof chkPolocy)[] = ["policy_info_3rd"]

  const [chkAll, setChkAll] = useState(false);

  const handleSMSAgree = (smsTarget: keyof TSMS) => {

    let agreeNewState = chkSMS;
    agreeNewState[smsTarget] = !chkSMS[smsTarget];
    setChkSMS({
      ...agreeNewState
    })

  }


  const isCheckAll = () => {
    let chkAll = true;
    let policy: keyof TPolicyChk;


    for (policy in chkPolocy) {
      const check = chkPolocy[policy];
      if (!check && optional.includes(policy)) {
        chkAll = false;
        break;
      }
    }

    return chkAll
  }

  const handleAgreeAll = () => {

    if (!isCheckAll()) {
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




  if (userType === UserRole.partnerB) {
    //네이밍 얼라이어스
    registerInfo.phoneNumber = registerInfo.manageContact || "";
  }

  const { nodes: sharedValidate } = new Validater([{
    value: verificationId,
    failMsg: "이메일 인증을 받아주세요.",
  }, {
    value: registerInfo.pw === registerInfo.pwcheck,
    failMsg: "비밀번호가 일치하지 않습니다.",
  }, {
    value: isPassword(registerInfo.pw || ""),
    failMsg: "비밀번호는 특수문자 1개이상 및 숫자가 포함된 7~15 자리의 영문 숫자 조합이여야 합니다",
  }, {
    value: isCheckAll,
    failMsg: "동의 항목에 모두 체크 해주세요."
  },
  {
    value: registerInfo.address,
    failMsg: "주소값을 입력 해주세요."
  },
  {
    value: registerInfo.address_detail,
    failMsg: "상세 주소값을 입력 해주세요.",
    id: "AddressInput"
  },
  {
    value: registerInfo.lang,
    failMsg: "주력언어를 설정 바랍니다.",
    id: "AddressInput"
  },
  {
    value: registerInfo.guideLicenses.length < 1,
    failMsg: "가이드 자격증을 하나이상 등록 해주세요.",
  },
  ])

  const { validate: normalValidate } = new Validater([
    {
      value: isName(registerInfo.name || ""),
      failMsg: "이름 값이 올바르지 않습니다.",
      id: "NameInput"
    },
    {
      value: isPhone(registerInfo.phoneNumber || ""),
      failMsg: "올바른 핸드폰 번호가 아닙니다.",
      id: "PhoneNumberInput"
    },
    ...sharedValidate
  ])

  const { validate: partnerValidate } = new Validater([
    {
      value: isName(registerInfo.name || ""),
      failMsg: "이름 값이 올바르지 않습니다."
    },
    ...sharedValidate
  ])

  const { validate: BpartnerValidate } = new Validater([
    ...sharedValidate
  ])


  const validate = (): boolean => {
    switch (userType) {
      case UserRole.individual:
        return normalValidate();

      case UserRole.partner:
        return partnerValidate();

      case UserRole.partnerB:
        return BpartnerValidate();
        break;
    }
    return false;
  }



  const handleRegister = () => {
    const validatedData: AddUserInput = omits(registerInfo, ["pwcheck"]) as any
    signUpMu({
      variables: {
        params: {
          ...validatedData,
          role: userType
        },
        verificationId: verificationId!
      }
    })
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
          <input checked={chkAll} type="checkbox" className="checkbox" onChange={handleAgreeAll} />
          <span>모두 동의합니다</span>
        </div>
        <div className="agreeChk_list">
          <ul>
            <li>
              {/* ALL */}
              <div className="in_box1">
                <input type="checkbox" className="checkbox"
                  checked={chkPolocy.policy_use}
                  onChange={() => { handlePolicy('policy_use') }} />
                <span>
                  <strong>이용약관 동의</strong>[필수]
                  </span>
              </div>
              <div className="in_box2">
                <a
                  onClick={openModal('#UsePolicy')}
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
                  onClick={openModal('#PrivacyPolicy')}
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
                  onClick={openModal('#PrivacyConsignmentPolicy')}
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
                  onClick={openModal('#TravelerPolicy')}
                >
                  전문보기 &gt;
                  </a>
              </div>
            </li>
            <li>
              {/* 가이드/가이드 */}
              <div className="in_box1">
                <input type="checkbox" className="checkbox"
                  checked={chkPolocy.policy_partner}
                  onClick={() => { handlePolicy('policy_partner') }} />
                <span>
                  <strong>가이드약관</strong>[필수]
                  </span>
              </div>
              <div className="in_box2">
                <a
                  onClick={openModal('#PartnerPolicy')}
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
                  onClick={openModal('#MarketingPolicy')}
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
                  onClick={openModal('#ThirdPolicy')}
                >
                  전문보기 &gt;
                  </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Modal id="UsePolicy" title="이용약관 동의">
        <Policy type="usePolicy" />
      </Modal>

      <Modal id="PrivacyPolicy" title="개인정보 수집 및 이용 동의">
        <Policy type="PrivacyPolicy" />
      </Modal>

      <Modal id="TravelerPolicy" title="여행자약관">
        <Policy type="travelerPolicy" />
      </Modal>

      <Modal id="PartnerPolicy" title="가이드약관">
        <Policy type="partnerPolicy" />
      </Modal>

      <Modal id="MarketingPolicy" title="마케팅정보 수신동의">
        <Policy type="marketingPolic" />
      </Modal>

      <Modal id="MarketingPolicy" title="가이드 약관">
        <Policy type="partnerBpolicy" />
      </Modal>

      <Modal id="ThirdPolicy" title="개인정보 제3자 제공">
        <Policy type="thirdPolicy" />
      </Modal>
      <div className="fin">
        <a href="/" className="joinWrapBtn cancel btn">취소</a>
        <button className="joinWrapBtn sum btn"
          onClick={() => {
            if (validate()) {
              handleRegister()
            }
          }}>등록</button>
      </div>
    </>
  )
}

export default RegisterCheck
