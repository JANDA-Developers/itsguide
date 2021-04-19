import React, { useState } from 'react';
import { Ftraveler } from '../../types/api';
import { autoComma } from '../../utils/formatter';

interface IProp {
    onChange: (traveler: Ftraveler) => void;
    traveler: Ftraveler
}

export const Traveler: React.FC<IProp> = ({ traveler, onChange }) => {


    return <div className="tr">
        <div className="re01">
            여행자1
        <span className="cut_nev">
                <i className="flaticon-substract"></i>
                <i className="flaticon-add"></i>
            </span>
        </div>
        <div className="re02">
            여행자명
    </div>
        <div className="re03">
            <span><input type="text" onChange={(e) => {
                const val = e.currentTarget.value
                traveler.name = val;
                onChange(traveler);
            }} value={traveler.name || ""} /></span>
        </div>
        <div className="re04">
            연락처
    </div>
        <div className="re05">
            <span><input type="text" onChange={(e) => {
                const val = e.currentTarget.value
                traveler.phoneNumber = val;
                onChange(traveler);
            }} value={autoComma(traveler.phoneNumber)} /></span>
        </div>
        <div className="re06">
            성별
        </div>
        <div className="re07">
            <select>
                <option>여성</option>
                <option>남성</option>
            </select>
        </div>
        <div className="re08">
            나이
        </div>
        <div className="re09">
            <span><input type="text" /> (만 --세)</span>{/*input박스 클릭시 달력이 나와야 함, 우측 나이 계산은 자동으로 출력*/}
        </div>
    </div>;
};
