import React from 'react';


type TSort = "createAt_desc" | "createAt_asc" | "viewCount_desc" | string;
interface IProp {
    sort: TSort[];
    onChange: (nextSort: any[]) => void;
    fixSorts?: string[]
}

export const SortSelect: React.FC<IProp> = ({ sort, onChange, fixSorts = [] }) => {

    return <select value={sort[0]} onChange={(e) => {
        const value = e.currentTarget.value
        onChange([value, ...fixSorts])
    }} className="sel01">
        <option value={"createdAt_desc"}>최신&uarr;</option>
        <option value={"createdAt_asc"}>최신&darr;</option>
        <option value={"viewCount_desc"}>조회수</option>
    </select>;
};

export default SortSelect;