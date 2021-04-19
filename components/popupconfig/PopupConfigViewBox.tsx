import React, { useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { IUsePopups } from '../../hook/usePopups';
import { Ipopup } from '../../types/interface';
import { IPopupStyle, PopupBox, Tpos, Tszie } from './PopupBox';




interface IProp extends IUsePopups {
    height: number;
    onBoxClick: (popup: Ipopup, index: number) => void;
}

//이 컴포넌트의 역할은 무엇인가요? 
//이 컴포넌트는 위치를 그려주고  좌표값을 계산하고 상위로 돌려줌
//상대좌표는 어떻게 찾지? 바로 hook으로 
export const PopupConfigViewBox: React.FC<IProp> = ({ popups, height, hideIds, setPopups, selectedIndex, onBoxClick }) => {

    const handleMove = (index: number) => (pos: Tpos) => {
        const target = popups[index].style;
        target.left = pos.x;
        target.top = pos.y;
        setPopups([...popups]);
    }

    const handleResize = (index: number) => (width: number, height: number) => {
        const target = popups[index].style;
        target.width = width;
        target.height = height;
        if (height !== undefined && width !== undefined) {
            setPopups([...popups]);
        }
    }
    //모바일에서는 항상 가득차게 나오게 그리고
    // 모바일일때 끄기 옵션 


    const handleClick = (popup: Ipopup, index: number) => () => {
        onBoxClick(popup, index);
    }

    const filtedPopups = popups;

    return <div className="popupConfigBox" id="POPWRAP" style={{ position: "relative", width: "100%", height }} >
        {filtedPopups.map((popup, index) =>
            <PopupBox {...popup} wrapHeight={height} seleted={selectedIndex === index} onClick={handleClick(popup, index)} key={index + "PopUpBox"} {...popup} onMove={handleMove(index)} onResize={handleResize(index)} />
        )}
    </div>;
};