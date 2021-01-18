import dayjs from "dayjs";
import { useState } from "react";
import { TRange } from "../components/tourWrite/helper";
import { ISet } from "../types/interface";

export interface IUseQueryFilter<F> {
    filter: F;
    setFilter: ISet<F>;
    setOR: (keys: (keyof F)[], value: string) => void;
    setUniqFilter: <T extends keyof F>(target: T, uniq: (keyof F)[], value: any) => void;
    filterToRange: (key: keyof F) => TRange
    setRange: (date: TRange, key: string) => {
        [x: string]: Date | undefined;
    }
}

export const useQueryFilter = <F>(defaultFilter:F):IUseQueryFilter<F> => {
    const [filter,setFilter] = useState(defaultFilter);

    //특정 필터키를 range 로 전환
    const filterToRange = (key:keyof F):TRange => {
        if(!(key as string).includes("_")) {
            throw Error("invliade key of filter To Range")
        }

        const _key = (key as string).split("_")[0]

        const range = {
            // @ts-ignore
            from: filter[_key + "_gte"] ? dayjs((filter as any).startDate_gte).toDate() : undefined,
            // @ts-ignore
            to: filter[_key + "_lte"] ? dayjs((filter as any).startDate_lte).toDate() : undefined
        }

        return range;
    }

    //반은 인자들로 Or 
    const setOR = (keys: (keyof F)[],value: string) => {
        const OR = keys.map(key => ({
            [key]: (key as string).includes("_in") ? [value] : value
        }))

        setFilter({
            ...filter,
            OR
        })
    }


    //Date range를 받아서 범위전환
    const setRange = (date:TRange,key:string) => {
        if(!(key as string).includes("_")) {
            throw Error("invliade key of filter To Range")
        }
        
        const _key = key.split("_")[0]

        const filter = {
            [`${_key}_gte`]: date.from ? dayjs(date.from).toDate() : undefined ,
            [`${_key}_lte`]: date.to ? dayjs(date.to).toDate() : undefined
        }

        return filter;
    }

    //uniq목록을 사용하여 uniq한 필터를 set함.
    const setUniqFilter = <T extends keyof F>(target: T, uniq: (keyof F)[], value:F[T]) => {
        const _value = value ? value : undefined;
        const _filter = {
            ...filter
        }
        uniq.forEach(u => {
            _filter[u] = undefined as any;
        })
        uniq.forEach(u => {
            if(target === u) {
                _filter[u] = _value as any;
            }
        })

        setFilter({
            ..._filter
        })
    }

    const foo = {
        filterToRange,setRange
    }
    return {filter,setFilter,setUniqFilter,filterToRange,setRange,setOR}
}

