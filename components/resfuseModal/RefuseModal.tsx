import React, { useState } from 'react';
import { closeModal } from '../../utils/popUp';

interface IProp {
    productId: string;
}

export const RefuseModal: React.FC<IProp> = () => {
    const [reason, setReason] = useState("");
    const handleSate = useState();

    const handleRefuse = () => {

    }

    return <div className="refuseModal" id="MiniPopup01">
        <div className="in_txt master_popup_mini">
            <a className="close_icon" onClick={closeModal("#refuseModal")}><i className="flaticon-multiply" /></a>
            <div className="page">
                <h3>기획반려 사유</h3>
                <div className="con">
                    <div className="input_box">
                        <textarea></textarea>
                    </div>
                    <div className="info">
                        <p><i className="flaticon-flag-1" /> 기획서의 어떤 부분을 보완하기를 원하는지 사유를 적어주세요.</p>
                    </div>
                    <div className="fin">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button onClick={handleRefuse} type="submit" className="btn medium">기획반려</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
