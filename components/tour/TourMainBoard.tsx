import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { openListFilter, useProductList } from "../../hook/useProduct";
import { AppContext } from "../../pages/_app";
import { Fcategory, groupList_GroupList_data } from "../../types/api";
import { BG } from "../../types/const";
import { productStatus } from "../../utils/enumToKr";
import {
    updateURLParameter,
    updateURLParameters,
} from "../../utils/getUpdateUrlParam";
import { checkIsExp, getTypeFilterByUrl } from "../../utils/product";
import { thumbNail } from "../ThunbNail/ThunbNail";

interface IProp {
    cat: Fcategory;
    group: groupList_GroupList_data;
}

export const TourMainBoard: React.FC<IProp> = ({ cat, group }) => {
    const isExp = checkIsExp();
    const { locale } = useContext(AppContext);
    // const { initialFilter } = getTypeFilterByUrl(isExp);
    const [slicePage, setSlicePage] = useState(0);
    const { items, filter, setFilter } = useProductList({
        initialViewCount: 80,
        initialFilter: {
            // ...initialFilter,
            _id_in: group.members,
        },
    });

    const start = slicePage * 3;
    const nextPage = items.slice(start, start * 3 + 3);

    const getLink = (catId: string) => {
        const url = updateURLParameters("/tour/list", [
            { param: "exp", paramVal: isExp ? "true" : "false" },
            { param: "catId", paramVal: catId },
        ]);
        return url;
    };

    return (
        <div key={cat?._id} className="deal_list">
            <div className="alignment">
                <div className="left_div">
                    <h4>{cat?.localeLabel?.[locale]}</h4>
                </div>
                <div className="right_div">
                    <span
                        onClick={() => {
                            if (slicePage !== 0) setSlicePage(slicePage - 1);
                        }}
                        className="move-left"
                    >
                        <i className="jandaicon-arr4-left" />
                        <button></button>
                    </span>
                    <span
                        onClick={() => {
                            if (items.length - (start + 3) > 0)
                                setSlicePage(slicePage + 1);
                        }}
                        className="move-right"
                    >
                        <i className="jandaicon-arr4-right" />
                        <button></button>
                    </span>
                    <Link href={getLink(cat._id)}>
                        <a>
                            <button className="btn small">더보기</button>
                        </a>
                    </Link>
                </div>
            </div>
            <ul className="tourMianListUl list_ul line3">
                {nextPage.map((data) => (
                    <Link key={data._id} href={`/tour/view/${data._id}`}>
                        <li className="tourMianListUl__li list_in">
                            <div className="tourMianListUl__imgWrap img">
                                <div
                                    className="tourMianListUl__img"
                                    style={BG(
                                        thumbNail(data.images)?.uri || ""
                                    )}
                                >
                                    상품이미지
                                </div>
                            </div>
                            <div className="box">
                                <div className="category">
                                    <span className="category__cat">
                                        {data.category?.label}
                                    </span>
                                    <span>{productStatus(data.status)}</span>
                                </div>
                                <div className="title">{data.title}</div>
                                <div className="bottom_txt">
                                    <div className="subTitle">
                                        {data.subTitle}
                                    </div>
                                    {data.keyWards?.map((tag, i) => (
                                        <span key={`${data._id}tag${i}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};
