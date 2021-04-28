import React, { useRef } from "react";
import { useUpload } from "../../hook/useUpload";
import { Ffile } from "../../types/api";
import { CloseIcon } from "../common/icon/CloseIcon";

interface IProp extends React.InputHTMLAttributes<any> {
    TagName?: keyof JSX.IntrinsicElements;
    wrapProp?: any;
    onClickDelete?: () => void;
    onUpload: (data: Ffile) => void;
}

export const FileInput: React.FC<IProp> = ({
    TagName = "div",
    wrapProp,
    onClickDelete,
    id,
    onUpload,
    children,
    ...props
}) => {
    const hiddenInput = useRef<HTMLInputElement>(null);

    const { signleUpload } = useUpload();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const uploadCallBack = (_: string, data: Ffile) => {
            onUpload(data);
        };
        signleUpload(fileUploaded, uploadCallBack);
    };
    return (
        <TagName
            onClick={() => {
                hiddenInput.current?.click();
            }}
            {...wrapProp}
        >
            {children}
            <input
                ref={hiddenInput}
                hidden
                onChange={handleChange}
                type="file"
                name={id}
                id={id}
                {...props}
            />
        </TagName>
    );
};

export default FileInput;
