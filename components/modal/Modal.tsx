import React from 'react';
import { IDiv } from '../../types/interface';
import { closeModal } from '../../utils/popUp';

interface IProp extends IDiv {
    id: string;
    title: string;
}

export const Modal: React.FC<IProp> = ({ id, children, title, ...props }) => {
    return <><div id={id} className="popup_bg_mini" style={{
        display: "none"
    }} {...props}>
        <a onClick={closeModal(`#${id}`)} className="close_icon"><i className="flaticon-multiply" /></a>
        <div className="in_txt">
            <h3>{title}</h3>
            <div className="con">
                {children}
            </div>
        </div>
    </div>
        <div className="fade" /></>
};
