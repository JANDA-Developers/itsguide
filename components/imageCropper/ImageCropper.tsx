import React, { useState, useCallback } from "react";
import getCroppedImg from "../../utils/cropImage";
import Cropper from "react-easy-crop";
import { RangeSlider } from "./RangeSlider";

interface IProps {
    iamge: string;
    handleSubmitImg: (file: File) => void;
    onCancel: () => void;
}

export const ImageCropper: React.FC<IProps> = ({
    iamge,
    handleSubmitImg,
    onCancel,
}) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const onSubmit = async () => {
        try {
            const croppedImage = await getCroppedImg(
                iamge,
                croppedAreaPixels,
                rotation
            );
            handleSubmitImg(croppedImage);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="imageCropper">
            <div className="imageCropper__outWrap">
                <div className="imageCropper__inWrap">
                    <Cropper
                        cropSize={{
                            width: 720,
                            height: 434,
                        }}
                        classes={{
                            containerClassName: "imageCropper__container",
                            cropAreaClassName: "imageCropper__cropArea",
                            mediaClassName: "imageCropper__media",
                        }}
                        image={iamge}
                        crop={crop}
                        rotation={rotation}
                        zoom={zoom}
                        aspect={4 / 3}
                        onCropChange={setCrop}
                        onRotationChange={setRotation}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    />
                </div>
            </div>
            <h4>확대/축소</h4>
            <div className="imageCropper__rangeSlider">
                <div>
                    <RangeSlider
                        setValue={setZoom}
                        value={zoom}
                        MIN={1}
                        MAX={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                    />
                </div>
                <button className="btn " onClick={onSubmit}>
                    완료하기
                </button>
                <button className="btn " onClick={onCancel}>
                    취소하기
                </button>
            </div>
        </div>
    );
};
