import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { cloneObject } from "../utils/clone";
import isEmpty from "../utils/isEmpty";

export const useCopy = <T>(
    defaultData: T
): [T, Dispatch<SetStateAction<T>>] => {
    const defaultEmpty = isEmpty(defaultData);
    const [data, setData] = useState<T>(defaultData);

    useEffect(() => {
        if (!defaultEmpty) {
            setData(cloneObject(defaultData));
        }
    }, [JSON.stringify(defaultData)]);

    return [data, setData];
};
