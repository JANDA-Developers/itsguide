import { E_INPUT } from "../types/interface";

// TODO 아무 Input이나 분기처리해서 가져오자
export const setVal = (callBack: (foo: any) => void) => (e: E_INPUT) => {
    callBack(e.currentTarget.value);
};

export const whenEnter =
    (callBack: (e: React.KeyboardEvent<HTMLInputElement>) => void) =>
    (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            callBack(e);
        }
    };

export const changeVal =
    (callBack: (foo: any) => void) =>
    (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.currentTarget.value;
        callBack(val);
    };

export const whenDelete =
    (callBack: (e: React.KeyboardEvent<any>) => void) =>
    (e: React.KeyboardEvent<any>) => {
        if (e.key === "Delete" || e.key === "Backspace") {
            callBack(e);
        }
    };
