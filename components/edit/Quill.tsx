import dynamic from 'next/dynamic';
import React from 'react';
import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


interface IProp {
    value: string;
    onChange: (info: string) => void;
}

export const Quill: React.FC<IProp> = ({ value, onChange: handleChange }) => {
    return <ReactQuill value={value} onChange={handleChange} />;
};

