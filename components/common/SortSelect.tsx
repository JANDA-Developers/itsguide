import React, { useContext } from "react";
import { AppContext } from "../../pages/_app";

type TSort = "createdAt_desc" | "createAt_asc" | "viewCount_desc" | string;
interface IProp {
    sort: any[];
    onChange: (nextSort: any[]) => void;
    fixSorts?: string[];
    options?: string[];
}

//지원하는 Sort 목록을 받아서 출력하는게 좋음
export const SortSelect: React.FC<IProp> = ({
    sort,
    children,
    onChange,
    fixSorts = [],
}) => {
    const { ln } = useContext(AppContext);
    return (
        <select
            value={sort[0]}
            onChange={(e) => {
                const value = e.currentTarget.value;
                onChange([value, ...fixSorts]);
            }}
            className="sel01"
        >
            <option value={"createdAt_desc"}>{ln("new")}&uarr;</option>
            <option value={"createdAt_asc"}>{ln("new")}&darr;</option>
            {children}
        </select>
    );
};

interface ISingleSortSelect {
    singleSort: any;
    onChange: (nextSort: any) => void;
    fixSorts?: any[];
    options?: any[];
}

export const SingleSortSelect: React.FC<ISingleSortSelect> = ({
    singleSort,
    children,
    onChange,
    fixSorts = [],
}) => {
    const { ln } = useContext(AppContext);
    return (
        <select
            value={singleSort}
            onChange={(e) => {
                const value = e.currentTarget.value;
                onChange(value);
            }}
            className="sel01"
        >
            <option value={"createdAt_desc"}>{ln("new")}&uarr;</option>
            <option value={"createdAt_asc"}>{ln("new")}&darr;</option>
            {children}
        </select>
    );
};

export default SortSelect;

interface IProp {
    sort: any[];
    onChange: (nextSort: any[]) => void;
    fixSorts?: string[];
    options?: string[];
}

//지원하는 Sort 목록을 받아서 출력하는게 좋음
export const SortSelecter: React.FC<IProp> = ({
    sort,
    children,
    onChange,
    fixSorts = [],
}) => {
    return (
        <select
            value={sort[0]}
            onChange={(e) => {
                const value = e.currentTarget.value;
                onChange([value, ...fixSorts]);
            }}
            className="sel01"
        >
            {children}
        </select>
    );
};
