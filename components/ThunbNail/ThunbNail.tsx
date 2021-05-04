import { productFindById_ProductFindById_data_images } from "../../types/api";
import { isImg } from "../../utils/isImgFile";

export const thumbNail = (
    images: productFindById_ProductFindById_data_images[]
) => {
    const thumb = images?.find((img, i) => {
        if (!img.extension) return true;
        if (isImg(img.extension)) return true;
        return false;
    });
    return thumb;
};
