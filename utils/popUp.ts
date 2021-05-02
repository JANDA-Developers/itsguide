import $ from "jquery";

export const closeModal = (selecter: string) => () => {
    $(selecter).css("display", "none");
};

export const openModal = (selecter: string) => () => {
    const target = $(selecter);
    target.css("display", "flex");
    setTimeout(() => {
        const target = $(selecter);
        target.css("display", "flex");
    }, 300);
};

export const openModalTimeSet = (selecter: string, time: number = 300) => {
    setTimeout(() => {
        $(selecter).css("display", "flex");
    }, time);
};
