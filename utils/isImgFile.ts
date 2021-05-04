export const isImgFile = (file: File) => {
    return !!file.type.match(/image.*/);
};
const imgType = [
    "jpeg",
    "jpg",
    "jfif",
    "tiff",
    "gif",
    "png",
    "bmp",
    "webp",
    "svg",
];
export const isImg = (mineType: string) => {
    console.log({ mineType });
    const imgaMatch = !!(mineType || "").match(/image.*/);
    return imgaMatch || imgType.includes((mineType || "---").toLowerCase());
};
