import React, { useContext, useRef } from 'react';
import { AppContext } from 'pages/_app';
import { useUpload } from 'hook/useUpload';

export interface IUploadProps {
    onUpload: (url: string) => void;
}

export const Upload: React.FC<IUploadProps> = ({ onUpload }) => {
    const { editMode } = useContext(AppContext);
    const { signleUpload } = useUpload();
    const hiddenImgInput = useRef<HTMLInputElement>(null);

    return <div className="img_edit" style={{
        position: "absolute",
        top: 0,
        right: 0,
        display: editMode ? "block" : "none"
    }} onClick={() => {
        hiddenImgInput.current?.click()
    }}>  <input ref={hiddenImgInput} onChange={() => {
        const file = hiddenImgInput.current?.files;
        if (!file) return;
        signleUpload(file, (url, data) => {
            console.log(data);
            onUpload(url);
        })
    }} hidden type="file" /></div>;
};
