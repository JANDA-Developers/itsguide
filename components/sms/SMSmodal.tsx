import { useContext, useState } from "react";
import { useSmsTemplateCreate, useSmsTemplateDelete, useSmsTemplateUpdate } from "../../hook/useNotification";
import { AppContext } from "../../pages/_app";
import { FsmsTemplate, NotificationTriggerCreateInput, NotificationTriggerEvent, ReplaceString, SmsTemplateCreateInput, smstemplateCreateVariables } from "../../types/api";
import { E_INPUT, ReplaceKr } from "../../types/interface";
import { closeModal } from "../../utils/popUp";
import { Modal } from "../modal/Modal";
import { bite } from "../../utils/bite";
import { replaceObj } from "../../types/sms";
import { cloneObject } from "../../utils/clone";
import { omits } from "../../utils/omit";

interface ITriggerDefault extends Omit<NotificationTriggerCreateInput, "event"> {
    event: null
}

interface IProps {
    template?: FsmsTemplate;
}

export type TSMStemplateTag = "MEMBER" | "RESERVATION" | "SETTLEMENT" | "PRODUCT"
export const SMStemplateTagKr: Record<TSMStemplateTag, string> = {
    MEMBER: "멤버",
    RESERVATION: "예약",
    SETTLEMENT: "정산",
    PRODUCT: "상품"
}

export const SMSmodal: React.FC<IProps> = ({ template }) => {
    const { myProfile } = useContext(AppContext);

    const isCreate = !template;
    const defaultTag = template?.tags[0]?.value as TSMStemplateTag || "MEMBER";
    // get templates 

    const [smsTag, setTag] = useState<TSMStemplateTag>(defaultTag);
    const [update] = useSmsTemplateUpdate({
        onCompleted: ({ SmsTemplateUpdate }) => {
            if (SmsTemplateUpdate.ok)
                closeModal("#SMSmodal")()
        }
    });
    const [create] = useSmsTemplateCreate({
        onCompleted: ({ SmsTemplateCreate }) => {
            if (SmsTemplateCreate.ok)
                closeModal("#SMSmodal")()
        }
    });

    const [deleteMu] = useSmsTemplateDelete({
        onCompleted: ({ SmsTemplateDelete }) => {
            if (SmsTemplateDelete.ok)
                closeModal("#SMSmodal")()
        }
    });

    const [trigger, setTrigger] = useState<NotificationTriggerCreateInput | ITriggerDefault>(cloneObject(template?.trigger) || {
        event: null,
        isEnabled: false
    })

    //발신전략은 한 템플릿에 하나의 트리거만 연결되도록 한다. 
    const [input, setInput] = useState<Omit<SmsTemplateCreateInput, "trigger">>({
        name: template?.name || "",
        content: template?.content || "",
        description: template?.description || "",
        tags: template?.tags
    });


    const nextTrigger = trigger.event ? trigger : undefined;
    const nextInput: SmsTemplateCreateInput = omits({
        ...input,
        tags: [{ key: "SMStype", value: smsTag }],
        trigger: nextTrigger
    }, ["__typename" as any])

    const handleCreate = () => {
        create({
            //트리거에 값이 있는지 확인하고 있으면 넣고 없으면 넣지 않는다.
            variables: {
                input: nextInput,
            }
        })
    }

    const handleUpdate = () => {
        if (!template) throw Error("template is not exsit ")
        update({ variables: { input: nextInput, templateId: template._id } });
    }

    const handelDelete = () => {
        if (!template) throw Error("template is not exsit ")
        deleteMu({ variables: { templateId: template._id } })
    }

    function set<T extends keyof SmsTemplateCreateInput>(key: T) {
        return (e: any) => {
            // @ts-ignore
            input[key] = e.currentTarget.value;
            setInput({ ...input })
        }
    }

    const hanldeReplaceString = (TUMP: ReplaceString) => () => {
        input.content += `[%%${TUMP}%%]`;
        setInput({ ...input })
    }

    return <Modal inClassName="homepage_popup" className="popup_bg_full" title="템플릿 설정" id="SMSmodal">
        <div>
            <div className="sms-box">
                <div className="setting left">
                    <ul className="list">
                        <li>
                            <div className="th">카테고리</div>
                            <div className="td">
                                <select onChange={(e) => {
                                    const val = e.currentTarget.value as any;
                                    setTag(val);
                                }} value={smsTag} className="w50">
                                    <option value="MEMBER">회원</option>
                                    <option value="RESERVATION">예약</option>
                                    <option value="SETTLEMENT">정산</option>
                                    <option value="PRODUCT">상품</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <div className="th">타이틀</div>
                            <div className="td"><input onChange={set("name")} value={input.name} className="w100" placeholder="" type="text" /></div>
                        </li>
                        <li>
                            <div className="th">메모란</div>
                            <div className="td">
                                <ul className="text_ul">
                                    <li className="sms__textarea-wrap">
                                        <textarea className="sms__textarea" onChange={(e) => {
                                            const description = e.currentTarget.value;
                                            setInput({ ...input, description })
                                        }} value={input.description || ""} />
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* 자동 */}
                        <li>
                            <div className="th">자동발신 활성화 여부</div>
                            <div className="td">
                                <div className="switch">
                                    <input onChange={() => {
                                        trigger.isEnabled = !trigger.isEnabled
                                        setTrigger({ ...trigger })
                                    }} className="tgl tgl-skewed" checked={trigger.isEnabled} id="cb3" type="checkbox" />
                                    <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                </div>
                            </div>
                        </li>
                        {/*  자동발신 활성화시 보여주기 */}
                        {/*  각 태그에 맞는 발신 이벤트를 보여주자 */}
                        {trigger.isEnabled && <li>
                            <div className="th">자동발신</div>
                            <div className="td">
                                <select value={trigger?.event || ""} onChange={(e) => {
                                    const Event = e.currentTarget.value;
                                    trigger.event = Event as any;
                                    setTrigger({ ...trigger });
                                }} className="w40">
                                    <option value="">= 상태 =</option>
                                    {smsTag === "RESERVATION" &&
                                        <>
                                            {/* <option value={NotificationTriggerEvent.BANK_TRANSFER_BOOKER}>무통장 예약시 예약자에게</option> */}
                                            {/* <option value={NotificationTriggerEvent.BANK_TRANSFER_SELLER}>무통장 예약시 판매자에게</option> */}
                                            <option value={NotificationTriggerEvent.CANCEL_BOOKING_BOOKER}>예약취소시 예약자에게</option>
                                            <option value={NotificationTriggerEvent.CANCEL_BOOKING_SELLER}>예약취소시 판매자에게</option>
                                            <option value={NotificationTriggerEvent.COMPLETE_BOOKING_BOOKER}>예약완료시 구매자에게</option>
                                            <option value={NotificationTriggerEvent.COMPLETE_BOOKING_SELLER}>예약완료시 판매자에게</option>
                                        </>
                                    }
                                    {smsTag === "MEMBER" && <>
                                        <option value={NotificationTriggerEvent.SIGNUP_PARTNER_USER}> 일반가이드 회원가입시 유저에게</option>
                                        <option value={NotificationTriggerEvent.SIGNUP_PARNTER_B_USER}>가이드 회원가입시 유저에게</option>
                                        <option value={NotificationTriggerEvent.SIGNUP_INDI_USER}>일반회원 회원가입시 유저에게</option>
                                    </>}
                                    {smsTag === "SETTLEMENT" && <>
                                        <option value={NotificationTriggerEvent.SETTLEMENT_REQUEST}>정산 요청시 요청자에게</option>
                                        <option value={NotificationTriggerEvent.SETTLEMENT_COMPLETE}>정산 완료시 요청자에게</option>
                                        <option value={NotificationTriggerEvent.SETTLEMENT_REJECT}>정산 거절시 요청자에게</option>
                                    </>}
                                    {smsTag === "PRODUCT" && <>
                                        <option value={NotificationTriggerEvent.PRODUCT_CONFIRM_REQUEST}>상품검토 요청시 판매자에게</option>
                                        <option value={NotificationTriggerEvent.PRODUCT_EXPIRE_SELLER}>상품 만료시 판매자에게</option>
                                    </>}
                                </select>
                            </div>
                        </li>
                        }
                        <li>
                            <div className="th">자동메시지</div>
                            <div className="td">
                                <ul className="text_ul">
                                    {/* @ts-ignore */}
                                    {trigger.event && (replaceObj[trigger.event] as ReplaceString[]).map((r) =>
                                        <li key={r} onClick={hanldeReplaceString(r)}><span>{ReplaceKr[r]}</span></li>
                                    )}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="form right">
                    <textarea onChange={set("content")} value={input.content} />
                    <div className="count">{bite(input.content)}Byte</div>
                    <p className="infotxt_gray">80Byte 이하일땐 80Byte 이상시 LMS입니다. 템플릿 문자에 따라서 정확하지 않을 수 있습니다.</p>
                </div>
            </div>
            <div className="fin ifMobile">
                <div className="float_left">
                    <button onClick={isCreate ? handleCreate : handleUpdate} type="submit" className="btn medium">{isCreate ? "생성하기" : "수정하기"}</button>
                    <button onClick={handelDelete} type="submit" className="btn medium">삭제하기</button>
                </div>
            </div>
        </div>
    </Modal>
}
