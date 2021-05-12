import { useRouter } from "next/router";
import React, { useContext } from "react";
import { ListInitOptions } from "../../hook/useListQuery";
import { useProductList } from "../../hook/useProduct";
import { useSingleSort } from "../../hook/useSort";
import { AppContext } from "../../pages/_app";
import {
    productList,
    productListVariables,
    _ProductFilter,
    _ProductSort,
} from "../../types/api";
import { TListQueryVariables } from "../../types/interface";
import { autoComma } from "../../utils/formatter";
import isEmpty from "../../utils/isEmpty";
import { genrateOption } from "../../utils/query";
import { Goods } from "./GoodsListAPI";
import { NoData } from "./NoData";
import SortSelect from "./SortMethod";
import { ViewCount } from "./ViewCount";
import { ViewSelect } from "./ViewSelect";

interface IProp {}

export const GoodsListTable: React.FC<IProp> = () => {
    const { locale } = useRouter();
    const { categoriesMap, lang } = useContext(AppContext);
    const {
        items,
        filter,
        setFilter,
        sort,
        setSort,
        viewCount,
        setViewCount,
        pageInfo,
    } = useProductList({
        fixingFilter: {
            lang_eq: lang,
        },
    });

    return (
        <div className="deal_list">
            <div className="search">
                <ul>
                    <li
                        onClick={() => {
                            filter.categoryId_eq = undefined;
                            setFilter({
                                ...filter,
                            });
                        }}
                        className={
                            filter.categoryId_eq === undefined ? "on" : ""
                        }
                    >
                        <a>#ALL</a>
                    </li>
                    {categoriesMap.TOUR.map((cat) => (
                        <li
                            // 로컬 부분을 나중에 다국어로서 검증하도록 변경
                            id={
                                cat.label.includes("로컬")
                                    ? "localFestival"
                                    : undefined
                            }
                            onClick={() => {
                                filter.categoryId_eq = cat._id;
                                setFilter({
                                    ...filter,
                                });
                            }}
                            key={cat._id}
                            className={
                                cat._id === filter.categoryId_eq ? `on` : ""
                            }
                        >
                            <a>#{cat.localeLabel[locale]}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="GoodsListTable" className="alignment">
                <div className="left_div">
                    <span>
                        총 <strong>{autoComma(pageInfo.totalCount)}</strong>개
                    </span>
                </div>
                <div className="right_div">
                    <SortSelect onChange={setSort} sort={sort} />
                    <ViewCount value={viewCount} onChange={setViewCount} />
                </div>
            </div>
            <ul className="list_ul line4">
                {isEmpty(items) && <NoData />}
                {items.map((item, i) => (
                    <Goods key={item._id} item={item} />
                ))}
            </ul>
        </div>
    );
};
