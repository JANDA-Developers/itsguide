import classNames from "classnames";
import React from "react";
import { IUseModal } from "../../hook/useModal";
import { IDiv } from "../../types/interface";
import { closeModal } from "../../utils/popUp";

interface IProp extends IDiv {
    id: string;
    title: string;
    inClassName?: string;
}

export const Modal: React.FC<IProp> = ({
    id,
    className,
    inClassName,
    children,
    title,
    ...props
}) => {
    return (
        <div
            className={className || `popup_bg_mini`}
            style={{
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                position: "fixed",
                display: "none",
                justifyContent: "center",
                alignItems: "center",
            }}
            id={id}
            {...props}
        >
            <div className={`in_txt ${inClassName}`}>
                <a onClick={closeModal(`#${id}`)} className="close_icon">
                    <i className="flaticon-multiply" />
                </a>
                <div className="page">
                    <h3 className="popup__tittle">{title}</h3>
                    <div className="con">{children}</div>
                </div>
            </div>
        </div>
    );
};

interface IModalReNewProp extends IUseModal, IDiv {
    title: string;
    inClassName?: string;
}

export const Modal2: React.FC<IModalReNewProp> = ({
    openModal,
    closeModal,
    inClassName,
    isOpen,
    className,
    title,
    children,
    ...props
}) => {
    const classes = classNames("popup_bg_mini", className, {});

    return (
        <div
            className={classes}
            style={{
                top: 0,
            bottom: 0,
                right: 0,
                left: 0,
                position: "fixed",
                display: isOpen ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
            }}
            {...props}
        >
            <div className={`in_txt ${inClassName}`}>
                <a onClick={closeModal} className="close_icon">
                    <i className="flaticon-multiply" />
                </a>
                <div className="page">
                    <h3 className="popup__tittle">{title}</h3>
                    <div className="con">{children}</div>
                </div>
            </div>
        </div>
    );
};
