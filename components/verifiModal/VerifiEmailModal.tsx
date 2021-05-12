import React, { useState } from "react";
import { useEmailDuplicateCheck } from "../../hook/useUser";
import { TuseVerification } from "../../hook/useVerification";
import { VerificationEvent, VerificationTarget } from "../../types/api";
import { isEmail } from "../../utils/validation";
import { Modal } from "../modal/Modal";

interface IProp {
    duplicateCheck?: boolean;
    verifiHook: TuseVerification;
    onSuccess: () => void;
}

export const VerifiEamilModal: React.FC<IProp> = ({
    verifiHook,
    onSuccess,
    duplicateCheck,
}) => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [sendEmailCount, setSendEmailCount] = useState(0);
    const [duplicateChecked, setDuplicateCheck] = useState(false);

    const [checkEmailDu] = useEmailDuplicateCheck({
        onCompleted: ({ EmailDuplicateCheck }) => {
            if (EmailDuplicateCheck.data?.duplicated) {
                alert("해당 이메일은 이미 가입된 이메일 입니다.");
            } else if (!EmailDuplicateCheck?.data?.duplicated) {
                setDuplicateCheck(true);
                handleSendEmail();
            }
        },
    });

    const { verifiComplete, verifiStart, verifiData } = verifiHook;

    const handleDuplicateCheck = () => {
        if (duplicateCheck && !duplicateChecked) {
            checkEmailDu({
                variables: {
                    email,
                },
            });
        } else {
            handleSendEmail();
        }
    };

    const handleSendEmail = () => {
        if (!isEmail(email)) {
            alert("올바른 이메일이 아닙니다.");
            return;
        }
        verifiStart({
            event: VerificationEvent.UserVerifyEmail,
            target: VerificationTarget.EMAIL,
            payload: email,
        }).then(({ ok }) => {
            if (ok) {
                alert("인증이 코드가 이메일로 전송 되었습니다.");
                setSendEmailCount(sendEmailCount + 1);
            } else {
                alert("인증번호 발송이 실패 했습니다.");
            }
        });
    };

    const handleComplete = async () => {
        if (!verifiData) {
            alert("먼저 인증 문자를 발송 해주세요.");
            return;
        }
        if (!code) {
            alert("인증 번호를 입력 해주세요.");
            return;
        }
        await verifiComplete(code).then((result) => {
            if (result.ok) {
                alert("인증이 완료 되었습니다.");
                onSuccess();
            } else {
                alert("인증번호가 일치하지 않습니다.");
                return;
            }
        });
    };

    const sendCountOver = sendEmailCount > 5;

    return (
        <Modal
            title="이메일 인증"
            id="emailVerifi"
            inClassName="emailVerifiModal"
        >
            <h6>이메일을 입력 해주세요.</h6>
            <input
                className="emailVerifi__input"
                value={email}
                onChange={(e) => {
                    setEmail(e.currentTarget.value);
                }}
            />
            {sendEmailCount ? (
                <div className="emailVerifi__underBox">
                    <h6>인증번호를 입력 해주세요.</h6>
                    <input
                        className="emailVerifi__input"
                        value={code}
                        onChange={(e) => {
                            setCode(e.currentTarget.value);
                        }}
                    />
                </div>
            ) : (
                ""
            )}
            <div className="emailVerifiModal__btns">
                {!sendCountOver ? (
                    <button
                        className=" btn small"
                        onClick={handleDuplicateCheck}
                    >
                        {sendEmailCount ? "인증이메일 재발송" : "인증메일 발송"}
                    </button>
                ) : (
                    <button className="btn small">
                        재발송 횟수를 초과하였습니다.
                    </button>
                )}
                {sendEmailCount ? (
                    <button className="btn small" onClick={handleComplete}>
                        인증 완료
                    </button>
                ) : (
                    ""
                )}
            </div>
        </Modal>
    );
};
