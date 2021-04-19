import { useState } from "react";
import { ISet } from "../types/interface";

export interface ListInitOptions<F, S> {
    initialPageIndex: number,
    initialViewCount: number
    initialFilter: F,
    initialSort: S[]
}

export interface IListHook<F, S> {
    setViewCount: ISet<number>;
    filter: F;
    sort: S[];
    setSort: ISet<S[]>;
    setFilter: ISet<F>;
    setPage: ISet<number>;
    viewCount: number;
}

export function useListQuery<F, S>({ initialFilter, initialPageIndex, initialSort, initialViewCount }: ListInitOptions<F, S>) {
    const [filter, setFilter] = useState<F>(initialFilter);
    const [sort, setSort] = useState<S[]>(initialSort);
    const [viewCount, setViewCount] = useState(initialViewCount);
    const [page, setPage] = useState(initialPageIndex);

    const integratedVariable = {
        pageInput: {
            page: page,
            cntPerPage: viewCount
        },
        filter,
        sort,
    }

    return { filter, setFilter, setPage, integratedVariable, sort, setSort, viewCount, setViewCount }
}