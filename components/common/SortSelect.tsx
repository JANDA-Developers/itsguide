import React from 'react';


type TSort = "createdAt_desc" | "createAt_asc" | "viewCount_desc" | string;
interface IProp {
    sort: any[];
    onChange: (nextSort: any[]) => void;
    fixSorts?: string[]
    options?: string[]
}

//지원하는 Sort 목록을 받아서 출력하는게 좋음 
export const SortSelect: React.FC<IProp> = ({ sort, children, onChange, fixSorts = [] }) => {
    return <select value={sort[0]} onChange={(e) => {
        const value = e.currentTarget.value
        onChange([value, ...fixSorts])
    }} className="sel01">
        <option value={"createdAt_desc"}>최신&uarr;</option>
        <option value={"createdAt_asc"}>최신&darr;</option>
        {children}
    </select>;
};

interface ISingleSortSelect {
    singleSort: any;
    onChange: (nextSort: any) => void;
    fixSorts?: any[]
    options?: any[]
}

export const SingleSortSelect: React.FC<ISingleSortSelect> = ({ singleSort, children, onChange, fixSorts = [] }) => {
    return <select value={singleSort} onChange={(e) => {
        const value = e.currentTarget.value
        onChange(value)
    }} className="sel01">
        <option value={"createdAt_desc"}>최신&uarr;</option>
        <option value={"createdAt_asc"}>최신&darr;</option>
        {children}
    </select>;
};

export default SortSelect;


interface IProp {
    sort: any[];
    onChange: (nextSort: any[]) => void;
    fixSorts?: string[]
    options?: string[]
}

//지원하는 Sort 목록을 받아서 출력하는게 좋음 
export const SortSelecter: React.FC<IProp> = ({ sort, children, onChange, fixSorts = [] }) => {

    return <select value={sort[0]} onChange={(e) => {
        const value = e.currentTarget.value
        onChange([value, ...fixSorts])
    }} className="sel01">
        {children}
    </select>;
};
