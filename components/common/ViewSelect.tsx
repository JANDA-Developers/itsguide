import React from 'react';

interface IProp {
}

export const ViewSelect: React.FC<IProp> = () => {
    return <ul className="al_02">
        <li> <a href="#" className="view_icon"><svg><rect width={4} height={2} style={{ fill: '#b7b7b7' }} /><rect x={7} width={13} height={2} style={{ fill: '#b7b7b7' }} /><rect y={7} width={4} height={2} style={{ fill: '#b7b7b7' }} /><rect x={7} y={7} width={13} height={2} style={{ fill: '#b7b7b7' }} /><rect y={15} width={4} height={2} style={{ fill: '#b7b7b7' }} /><rect x={7} y={15} width={13} height={2} style={{ fill: '#b7b7b7' }} /></svg></a></li>
        <li><a href="#" className="view_icon on"><svg><rect width={9} height={8} style={{ fill: '#b7b7b7' }} /><rect x={11} width={9} height={8} style={{ fill: '#b7b7b7' }} /><rect y={10} width={9} height={8} style={{ fill: '#b7b7b7' }} /><rect x={11} y={10} width={9} height={8} style={{ fill: '#b7b7b7' }} /></svg></a></li>
    </ul>;
};
