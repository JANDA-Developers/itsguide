import Link from "next/link";
import React from "react";
import { IUseQueryFilter } from "../../hook/useQueryFilter";
import { generateRandomStringCode } from "../../utils/codeGenerator";

interface ILi {
    count: number;
    label: string;
    value: any;
    onClick?: () => void;
    checkOn?: () => "";
}

interface IProp {
    li: ILi[];
    setUniqFilter: any;
    uniqKeys?: string[];
    filter: any;
    filterKey: any;
}

export const BoardOption: React.FC<IProp> = ({
    li,
    filterKey,
    setUniqFilter,
    uniqKeys = [],
    filter,
}) => {
    const handleFilter = (value: any) => () => {
        setUniqFilter(filterKey, [filterKey, ...uniqKeys], value);
    };

    const checkOn = (value: any) => (filter[filterKey] === value ? "on" : "");

    return (
        <ul className="board_option">
            {li.map((l, index) => (
                <li
                    className={l.checkOn ? l.checkOn() : checkOn(l.value)}
                    onClick={l.onClick || handleFilter(l.value)}
                    key={filterKey + index}
                >
                    <Link href="/">
                        <a>
                            {l.label}
                            <strong>{l.count || 0}</strong>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};
