import React, { useState } from 'react';
import { IDiv } from '../../types/interface';

interface IProp extends Omit<IDiv, "onSubmit"> {
    onSubmit: (value: string) => void;
}

export const SearchMini: React.FC<IProp> = ({ onSubmit, className }) => {
    const [value, setValue] = useState("")
    return <div className={`search_mini ${className}`}>
        <div className="in">
            <input onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    onSubmit(value);
                }
            }} value={value} onChange={(e) => { setValue(e.currentTarget.value) }} type="text" placeholder="검색 내용을 입력해주세요." />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.94 31.44">
                <path className="cls-5" d="M313.17,433.49l-4.86-5.31a14.48,14.48,0,0,0-1-19.41,14.55,14.55,0,0,0-10.24-4.21,14.47,14.47,0,0,0,0,28.94,14.17,14.17,0,0,0,1.72-.1,1.5,1.5,0,1,0-.35-3,11.47,11.47,0,1,1-1.38-22.86h0a11.48,11.48,0,0,1,8.14,19.56,1.49,1.49,0,0,0,0,2.12.91.91,0,0,0,.13.08,1.2,1.2,0,0,0,.15.24l5.45,5.95a1.46,1.46,0,0,0,1.1.49,1.53,1.53,0,0,0,1-.39A1.5,1.5,0,0,0,313.17,433.49Z" transform="translate(-282.62 -404.56)"></path>
            </svg>
        </div>
    </div>;
};

export default SearchMini;
