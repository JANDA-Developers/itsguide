import dayjs from "dayjs";
import { useState } from "react";
import { TRange } from "../components/tourWrite/helper";
import { ISet } from "../types/interface";

interface IUseDateFilterParam<T> {
    filter: T
    setFilter: ISet<T>
    dateKey?: string
}

export const useDateFilter = <T>(param: IUseDateFilterParam<T>) => {
    const {filter, setFilter, dateKey:_dateKey = "createdAt"} = param
    const [dateKey, setDateKey] = useState(_dateKey)
    
    const filterEnd:Date | undefined = filter[`${dateKey}_lte` as keyof T] as any || undefined;
    const filterStart:Date | undefined = filter[`${dateKey}_gte` as keyof T] as any || undefined;
    // const filterStart = start  ? dayjs(start).format("YYYY.MM.DD") : "";
    // const filterEnd = end ? dayjs(end).format("YYYY.MM.DD") : "";

    const hanldeCreateDateChange = (range: TRange) => {
        filter[`${dateKey}_lte` as keyof T] = range.to as any;
        filter[`${dateKey}_gte` as keyof T] = range.from as any;

        setFilter({
            ...filter,
        })
    }   

    return {filterStart, filterEnd, hanldeCreateDateChange, dateKey,setDateKey}
}