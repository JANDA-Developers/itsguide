import React, { useContext } from "react";
import { AppContext } from "../../pages/_app";

type TSort = "createAt_desc" | "createAt_asc" | "viewCount_desc" | string;
interface IProp {
    sort: TSort[];
    onChange: (nextSort: any[]) => void;
    fixSorts?: string[];
}

export const SortSelect: React.FC<IProp> = ({
    sort,
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
            <option value={"viewCount_desc"}>{ln("viewCOunt")}</option>
        </select>
    );
};

export default SortSelect;
