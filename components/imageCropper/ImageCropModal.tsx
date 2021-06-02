import React from "react";
import { IUseModal } from "../../hook/useModal";
import { useUpload } from "../../hook/useUpload";
import { Ffile } from "../../types/api";
import { Modal2 } from "../modal/Modal";
import { ImageCropper } from "./ImageCropper";

export interface IImageCropModalInfo {
    image: string;
    onSubmit: (file: Ffile) => void;
}

interface IProp extends IUseModal<IImageCropModalInfo> {}

export const ImageCropModal: React.FC<IProp> = ({ ...modalHook }) => {
    if (!modalHook.info) return null;
    const { signleUpload } = useUpload();
    const images = modalHook.info.image;

    const handleSubmit = (file: File) => {
        console.log("handleSubmit");
        console.log({ file });
        const onUpload = (_: string, data: Ffile) => {
            console.log("onUpload");
            console.log({ data });
            modalHook.info.onSubmit(data);
        };
        signleUpload([file], onUpload);
    };

    return (
        <Modal2 inClassName="imageCropModal" title="이미지 편집" {...modalHook}>
            <ImageCropper
                onCancel={modalHook.closeModal}
                handleSubmitImg={handleSubmit}
                iamge={images}
            />
        </Modal2>
    );
};
