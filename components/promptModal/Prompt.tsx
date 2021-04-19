import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { whenEnter } from '../../utils/eventValueExtracter';
import { closeModal } from '../../utils/popUp';
import { Modal } from '../modal/Modal';

interface IProp {
    id: string;
    title: string;
    label?: string;
    onSubmit: (reason: string) => void;
}

export const Prompt: React.FC<IProp> = ({ onSubmit: handleSubmit, title, id }) => {
    const [submitData, setSubmitData] = useState("");


    if (typeof window === "undefined") return null;
    const el = document.getElementById('portal');
    if (!el) return null;

    const onSubmit = () => {
        handleSubmit(submitData)
    }

    return ReactDOM.createPortal(<Modal title={title} id={id}>
        <div className="write_comment popup__st01">
            <div className="comment_layout">
                <ul className="text_box">
                    <li>
                        <div className="txta w100">
                            <textarea onChange={(e) => {
                                const val = e.currentTarget.value;
                                if (val.length > 100) return;
                                setSubmitData(val);
                            }} value={submitData} style={{ height: "100px", width: "100%" }} placeholder="..."></textarea>
                        </div>
                    </li>
                    <li className="tl count">{submitData.length}/100</li>
                </ul>
                <div className="text_box_bottom">
                    <div className="btn_send float_right">
                        <button
                            onClick={() => {
                                handleSubmit(submitData)
                            }}
                            className="btn comment_btn"
                        >제출</button>
                    </div>
                </div>
            </div>
        </div>
    </Modal>, el)
};


export const SubmitPsswordModal: React.FC<IProp> = ({ onSubmit: handleSubmit, label, title, id }) => {
    const [submitData, setSubmitData] = useState("");

    return <Modal inClassName="promptinput" title={title} id={id}>
        <h6 className="promptinput__label">{label}</h6>
        <input type="password" className="promptinput__input" value={submitData} onChange={(e) => {
            setSubmitData(e.currentTarget.value)
        }} />
        <button className="btn small" onClick={() => { handleSubmit(submitData); closeModal("#" + id)() }}>확인</button>
    </Modal>
};
