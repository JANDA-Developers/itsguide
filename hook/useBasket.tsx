import { useEffect, useState } from "react";
import { IHumanCount } from "../types/interface";


interface IPrices {
    baby_price: number
    adult_price: number
    kids_price: number
    defaultCount?: IHumanCount;
}

const DEFAULT_COUNT: IHumanCount = {
    adult: 0,
    baby: 0,
    kids: 0
}

export const useBasket = ({
    adult_price,
    baby_price,
    kids_price,
    defaultCount = DEFAULT_COUNT
}: IPrices) => {
    const [count, setCount] = useState<IHumanCount>(defaultCount);
    const [totalPrice, setPrice] = useState(0);

    const handleCount = (key: keyof IHumanCount, isUp: boolean) => () => {
        let val = count[key];
        val = val + (isUp ? 1 : -1);
        if (val < 0) val = 0;
        count[key] = val;

        setCount({ ...count })
    }

    useEffect(() => {
        const totalPrice =
            (count.adult * adult_price) +
            (count.baby * baby_price) +
            (count.kids * kids_price);
        setPrice(totalPrice)
    }, [count])

    return { count, totalPrice, handleCount }
}