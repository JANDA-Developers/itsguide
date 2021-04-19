import { useContext, useState } from "react";
import { useSingleSmsSend } from "../../hook/useNotification"
import { AppContext } from "../../pages/_app";
import { Fbooking, productFindByIdForSeller_ProductFindByIdForSeller_data_bookings } from "../../types/api";
import { Modal } from "../modal/Modal";


interface IProps {
    bookings: (Fbooking | productFindByIdForSeller_ProductFindByIdForSeller_data_bookings)[]
}
export const SmsSendModal: React.FC<IProps> = ({ bookings }) => {
    const receivers = bookings.map(bk => bk.phoneNumber);
    // const [nextReceiver, setNextReceiver] = useState("");
    const [sendSms] = useSingleSmsSend();
    // const [receivers,setReceivers] = useState<string>()
    const { myProfile } = useContext(AppContext);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const send = () => {
        sendSms({
            variables: {
                input: {
                    content,
                    receivers,
                    title,
                }
            }
        })
    }

    // useEffect(()=>{
    //     setReceivers(_receivers);
    // },[_receivers])
    return <Modal id="SMSsendModal" title="메세지보내기">
        {/* //대상 */}
        <div className="smsSendModal__left">
            {bookings.map(bk =>
                <div key={bk._id}>
                    <div>{bk.name}</div>
                    <div>{bk.phoneNumber}</div>
                </div>
            )}
        </div>
        <div className="smsSendModal__right">
            {/* 수신자 추가 */}
            {/* <input value={title} onChange={(e) => {
            const val = e.currentTarget.value;
            setTitle(val);
        }} /> */}
            {/* //타이틀 */}
            <input value={title} onChange={(e) => {
                const val = e.currentTarget.value;
                setTitle(val);
            }} />
            {/* 내용 */}
            <textarea value={content} onChange={(e) => {
                const text = e.currentTarget.value;
                setContent(text);
            }} />
        </div>
        <button onClick={send}>보내기</button>
    </Modal>
}