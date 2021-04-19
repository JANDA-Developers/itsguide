import React from 'react';

interface IProp extends React.InputHTMLAttributes<any> { }

export const FileInput: React.FC<IProp> = ({ ...props }) => {
    return <input {...props} />;
};
