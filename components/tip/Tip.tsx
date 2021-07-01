import React, { useEffect, useMemo } from "react";
import ReactTooltip from "react-tooltip";
import { IDiv } from "../../types/interface";
const s4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

interface IProp extends IDiv {
    Tag?: keyof JSX.IntrinsicElements;
    message?: string;
}

export const Tip: React.FC<IProp> = ({
    Tag = "div",
    children,
    message,
    ...props
}) => {
    const newId = useMemo(() => s4(), []);

    const tooltipObj = {
        "data-tip": "tooltip",
        "data-for": `Tip${newId}`,
    };

    if (!message) return <Tag {...(props as any)}>{children}</Tag>;
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    return (
        <Tag
            style={{ width: "max-content" }}
            {...tooltipObj}
            {...(props as any)}
        >
            {children}
            <ReactTooltip
                globalEventOff={isMobile ? "click" : undefined}
                type="dark"
                effect="solid"
                id={`Tip${newId}`}
            >
                <span>{message}</span>
            </ReactTooltip>
        </Tag>
    );
};
