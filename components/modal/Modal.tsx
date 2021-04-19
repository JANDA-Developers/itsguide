import React from 'react';
import { IDiv } from '../../types/interface';
import { closeModal } from '../../utils/popUp';

interface IProp extends IDiv {
    id: string;
    title: string;
    inClassName?: string;
}


export const Modal: React.FC<IProp> = ({ id, className, inClassName, children, title, ...props }) => {
    return <div className={className || `popup_bg_mini`} style={{
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        position: "fixed",
        display: "none",
        justifyContent: "center",
        alignItems: "center"
    }} id={id}  {...props}>
        <div className={`in_txt ${inClassName}`}>
            <a onClick={closeModal(`#${id}`)} className="close_icon"><i className="flaticon-multiply" /></a>
            <div className="page">
                <h3 className="popup__tittle">{title}</h3>
                <div className="con">
                    {children}
                </div>
            </div>
        </div>
    </div>
};
