export const stopAllVideo = () => {
    document
        .querySelectorAll(".JDvideo")
        .forEach((vid: HTMLVideoElement) => vid.pause());
};
