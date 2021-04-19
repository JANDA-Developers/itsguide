import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { useUserResign } from '../../hook/useUser';
import { AppContext } from '../../pages/_app';
import { Validater } from '../../utils/validate';
import { isPassword } from '../../utils/validation';
import { Modal } from '../modal/Modal';

interface IProp {
    defaultReason?: string;
    resignReasonType?: string;
    mode?: "submit" | "view"
}

export const ResignModal: React.FC<IProp> = ({ defaultReason, mode = "submit", resignReasonType }) => {
    const router = useRouter();
    const [reason, setReason] = useState("")
    const { isSeller, myProfile } = useContext(AppContext);
    const [reasonType, setReasonType] = useState("")
    const [resign] = useUserResign({
        onCompleted: ({ UserResign }) => {
            if (UserResign.ok) {
                alert("회원 탈퇴가 완료 되었습니다.")
                localStorage.removeItem("jwt")
                location.href = "/"
            }
        }
    })

    const { validate } = new Validater([{
        value: reasonType,
        failMsg: "탈퇴 사유를 선택 해주세요."
    }, {
        value: reason || reasonType !== "[기타]",
        failMsg: "탈퇴 사유를 기재 해주세요."
    }])

    const handleResign = () => {
        if (!validate()) return;
        const pw = prompt("패스워드를 입력 해주세요.");
        if (!isPassword(pw || "")) {
            alert("올바른 패스워드가 아닙니다.")
            return;
        }
        resign({
            variables: {
                _id: myProfile?._id!,
                pw: pw!,
                reason,
                resignReasonType: reasonType
            }
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReasonType(e.currentTarget.value);
    }

    const checkedCheck = (type: string) => {
        return reasonType === type
    }

    return <Modal id="reSignModal" title="회원 탈퇴하기">
        <div className="withdraw__fom">
            <p className="withdraw__fom_info">
                정말로 회원탈퇴를 하시겠습니까?<br />
            회원탈퇴후 데이터는 7일 이내에 문의를 통해서 복구가 가능합니다.
            </p>
            <ul >
                <li className="list">
                    <span className="radiobox mr5">
                        <input
                            id="infoDelete" checked={checkedCheck("[개인정보 삭제]")} onChange={handleChange} value="[개인정보 삭제]" type="radio" />
                    </span>
                    <span>개인정보기록 삭제 목적</span>
                </li>
                <li className="list">
                    <span className="radiobox mr5">
                        <input id="newId" checked={checkedCheck("[새아이디 생성]")} name="reasonType" onChange={handleChange} value="[새아이디 생성]" type="radio" />
                    </span>
                    <span>새 아이디 생성 목적</span>
                </li>
                {isSeller &&
                    <li className="list">
                        <span className="radiobox mr5">
                            <input id="fee" checked={checkedCheck("[수수료 부담]")} name="reasonType" onChange={handleChange} value="[수수료 부담]" type="radio" />
                        </span>
                        <span>수수료 부담</span>
                    </li>
                }
                <li className="list">
                    <span className="radiobox mr5">
                        <input id="uncomfortable" checked={checkedCheck("[서비스 기능 불편]")} name="reasonType" onChange={handleChange} value="[서비스 기능 불편]" type="radio" />
                    </span>
                    <span>서비스 기능 불편</span>
                </li>
                <li className="list">
                    <span className="radiobox mr5">
                        <input id="else" checked={checkedCheck("[기타]")} value={"[기타]"} name="reasonType" onChange={handleChange} type="radio" />
                    </span>
                    <span> 기타 <input disabled={reasonType !== "[기타]"} onChange={(e) => {
                        setReason(e.currentTarget.value);
                    }} value={reason} type="text" className="ml5" /></span>
                </li>
            </ul>
            {mode === "submit" &&
                <div className="withdraw__fom_btn">
                    <button onClick={handleResign} className="btn" >탈퇴하기</button>
                </div>
            }
        </div>
    </Modal>;
};
