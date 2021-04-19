import React, { useContext, useRef } from 'react';
import { AppContext } from 'pages/_app';
import { useUpload } from 'hook/useUpload';
import { IDiv, TElements } from '../../types/interface';

export interface IUploadProps extends IDiv {
    onUpload: (url: string) => void;
    text?: TElements;
}

export const Upload: React.FC<IUploadProps> = ({ onUpload, text = "이미지교체+", className, ...props }) => {
    const { signleUpload } = useUpload();
    const hiddenImgInput = useRef<HTMLInputElement>(null);

    const handleUpload = () => {
        const file = hiddenImgInput.current?.files;
        if (!file) return;
        signleUpload(file, (url) => {
            onUpload(url);
        })
    }

    return <div {...props} className={`imgEdit ${className}`} onClick={() => {
        hiddenImgInput.current?.click()
    }}>
        <small className="imgEdit__text">{text}</small>
        <input ref={hiddenImgInput} onChange={handleUpload} hidden type="file" />
    </div>;
};
