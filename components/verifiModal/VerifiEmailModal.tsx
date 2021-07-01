import React, { useState } from "react";
import { useEmailDuplicateCheck } from "../../hook/useUser";
import { TuseVerification } from "../../hook/useVerification";
import { VerificationEvent, VerificationTarget } from "../../types/api";
import { autoComma, autoHypenPhone } from "../../utils/formatter";
import { isEmail, isPhone } from "../../utils/validation";
import { Modal } from "../modal/Modal";
import { Tip } from "../tip/Tip";

interface IProp {
    id?: string;
    duplicateCheck?: boolean;
    verifiHook: TuseVerification;
    onSuccess: () => void;
    defaultPayload?: string;
    target?: VerificationTarget;
}

export const VerifiEamilModal: React.FC<IProp> = ({
    defaultPayload,
    target = VerificationTarget.EMAIL,
    verifiHook,
    onSuccess,
    duplicateCheck,
    id,
}) => {
    const isEmailVerifi = target === VerificationTarget.EMAIL;
    const targetName = isEmailVerifi ? `이메일` : "휴대폰번호";

    const [payload, setPayload] = useState(defaultPayload || "");
    const [code, setCode] = useState("");
    const [sendEmailCount, setSendEmailCount] = useState(0);
    const [duplicateChecked, setDuplicateCheck] = useState(false);

    const [checkEmailDu] = useEmailDuplicateCheck({
        onCompleted: ({ EmailDuplicateCheck }) => {
            if (EmailDuplicateCheck.data?.duplicated) {
                alert("해당 이메일은 이미 가입된 이메일 입니다.");
            } else if (!EmailDuplicateCheck?.data?.duplicated) {
                setDuplicateCheck(true);
                startVerifi();
            }
        },
    });

    const { verifiComplete, verifiStart, verifiData } = verifiHook;

    const handleDuplicateCheck = () => {
        if (
            target === VerificationTarget.EMAIL &&
            duplicateCheck &&
            !duplicateChecked
        ) {
            checkEmailDu({
                variables: {
                    email: payload,
                },
            });
        } else {
            startVerifi();
        }
    };

    const startVerifi = () => {
        if (isEmailVerifi ? !isEmail(payload) : !isPhone(payload)) {
            alert(`올바른 ${targetName}이 아닙니다.`);
            return;
        }
        verifiStart({
            event: isEmailVerifi
                ? VerificationEvent.UserVerifyEmail
                : VerificationEvent.UserVerifyPhone,
            target,
            payload: payload,
        }).then(({ ok }) => {
            if (ok) {
                alert(
                    `인증이 코드가 ${
                        isEmailVerifi ? "이메일로" : "휴대폰으로"
                    } 전송 되었습니다.`
                );
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
            title={`${targetName}인증`}
            id={id || `emailVerifi`}
            inClassName="emailVerifiModal"
        >
            <h4>{targetName}을 입력 해주세요.</h4>
            <input
                className="emailVerifi__input input mb10"
                value={isEmailVerifi ? payload : autoHypenPhone(payload)}
                onChange={(e) => {
                    setPayload(e.currentTarget.value);
                }}
            />
            {sendEmailCount ? (
                <div className="emailVerifi__underBox">
                    <h4>인증번호를 입력 해주세요.</h4>
                    <input
                        className="emailVerifi__input input mb10"
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
                    <Tip
                        message={`발송가능횟수 ${sendEmailCount}/5`}
                        className="btn small"
                        onClick={handleDuplicateCheck}
                    >
                        {!sendEmailCount
                            ? "인증번호" + "발송"
                            : "인증번호" + " 재발송"}
                    </Tip>
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
