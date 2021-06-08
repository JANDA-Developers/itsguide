import { title } from "process";
import React, { useEffect, useState } from "react";
import Draggable, { DraggableEventHandler } from "react-draggable";
import ResizeObserver, { useResizeDetector } from "react-resize-detector";
import { BG } from "../../types/const";
import { Ipopup } from "../../types/interface";

export interface IPopupStyle {
    left: number;
    top: number;
    width: number;
    height: number;
    backgroundImage?: string;
    perWidth?: number;
    perHeight?: number;
    perTop?: number;
    perLeft?: number;
}

export type Tpos = {
    x: number;
    y: number;
};

export type Tszie = {
    width: number;
    height: number;
};

interface IProp extends Ipopup {
    wrapHeight: number;
    onMove: (pos: Tpos) => void;
    onResize: (width: number, height: number) => void;
    seleted: boolean;
    onClick: () => void;
}

// 이동과 리사이즈만함, 비례 거리는  부모가 계산함
export const PopupBox: React.FC<IProp> = ({
    wrapHeight,
    onClick,
    onMove,
    onResize,
    seleted,
    content,
    style,
}) => {
    const { height, top, width, left, backgroundImage } = style;
    const maxHeight = wrapHeight - top;

    const {
        ref,
        height: _height,
        width: _width,
    } = useResizeDetector({
        refreshOptions: { leading: false, trailing: true },
        refreshMode: "throttle",
        refreshRate: 1000,
    });

    const handleDrag: DraggableEventHandler = (e, ui) => {
        onMove({ x: ui.x, y: ui.y });
    };

    useEffect(() => {
        if (_width && _height) onResize(_width, _height);
    }, [_width, _height]);

    return (
        <Draggable
            scale={1}
            defaultClassName={`dragBox ${seleted && "dragBox--selected"}`}
            handle="dragBox__handle"
            position={{ x: left, y: top }}
            onStop={handleDrag}
            bounds="parent"
        >
            <div
                className="dragBox__in"
                onClick={onClick}
                ref={ref as any}
                style={{
                    minWidth: 100 + "px",
                    minHeight: 100 + "px",
                    width: width + "px",
                    maxHeight: maxHeight + "px",
                    height: height + "px",
                    resize: "both",
                    overflow: "auto",
                    position: "absolute",
                }}
            >
                <div className="dragBox__handle">{title}</div>
                <div
                    className="dragBox__content"
                    style={{ ...BG(backgroundImage || "") }}
                ></div>
            </div>
        </Draggable>
    );
};
