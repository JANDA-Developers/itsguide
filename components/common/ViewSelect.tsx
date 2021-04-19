import React from 'react';

interface IProp {
    select: "line" | "gal";
    onChange: (view: "line" | "gal") => void;
}

export const ViewSelect: React.FC<IProp> = ({ onChange, select }) => {

    return <ul className="al_02">
        <li onClick={() => {
            onChange("line")
        }}><a className={`view_icon ${select === "line" && "on"}`}><svg><rect width={4} height={2} style={{ fill: '#b7b7b7' }} /><rect x={7} width={13} height={2} style={{ fill: '#b7b7b7' }} /><rect y={7} width={4} height={2} style={{ fill: '#b7b7b7' }} /><rect x={7} y={7} width={13} height={2} style={{ fill: '#b7b7b7' }} /><rect y={15} width={4} height={2} style={{ fill: '#b7b7b7' }} /><rect x={7} y={15} width={13} height={2} style={{ fill: '#b7b7b7' }} /></svg></a></li>
        <li onClick={() => {
            onChange("gal")
        }}><a className={`view_icon ${select === "gal" && "on"}`}><svg><rect width={9} height={8} style={{ fill: '#b7b7b7' }} /><rect x={11} width={9} height={8} style={{ fill: '#b7b7b7' }} /><rect y={10} width={9} height={8} style={{ fill: '#b7b7b7' }} /><rect x={11} y={10} width={9} height={8} style={{ fill: '#b7b7b7' }} /></svg></a></li>
    </ul>;
};
