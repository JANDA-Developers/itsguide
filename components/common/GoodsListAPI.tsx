import React, { useEffect } from "react";
import { RatingStars } from "components/common/RatingStars[deprecated]";
import { useProductList } from "../../hook/useProduct";
import { ListInitOptions } from "../../hook/useListQuery";
import {
    productList,
    productListVariables,
    productList_ProductList_data,
    _ProductFilter,
    _ProductSort,
} from "../../types/api";
import { BG } from "../../types/const";
import { autoComma } from "../../utils/formatter";
import { useRouter } from "next/router";
import { arrayOrderSink } from "../../utils/arrayOrderSink";
import isEmpty from "../../utils/isEmpty";
import { ILi } from "../../types/interface";
import { NoData } from "./NoData";
import { genrateOption } from "../../utils/query";
import Slider from "react-slick";
import { useResizeDetector } from "react-resize-detector";
import { thumbNail } from "../ThunbNail/ThunbNail";
import Link from "next/link";
import { cn } from "../../utils/findCatLocaleName";

interface IProp {
    isBestList?: boolean;
    initialOption?: Partial<ListInitOptions<_ProductFilter, _ProductSort>>;
    options?: genrateOption<productList, productListVariables>;
    slide?: boolean;
}

export const GoodsListAPI: React.FC<IProp> = ({
    isBestList,
    slide,
    initialOption = {
        initialViewCount: 12,
    },
    options,
}) => {
    const router = useRouter();
    const { items } = useProductList(initialOption, {
        fetchPolicy: "cache-first",
        ...options,
    });
    const { ref, width = 0, height } = useResizeDetector<HTMLUListElement>();

    const itemIn = initialOption?.initialFilter?._id_in;

    const sortedItems = itemIn ? arrayOrderSink(items, "_id", itemIn) : items;

    const toProductBoard = (id: string) => () => {
        router.push("/tour/view/" + id);
    };

    const sizeSlideCount = (() => {
        let wishLen = 4;
        if (width < 400) wishLen = 1;
        if (width < 800) wishLen = 2;
        if (width < 1000) wishLen = 4;

        if (sortedItems.length < wishLen) {
            return sortedItems.length;
        }

        return wishLen;
    })();

    console.log(sizeSlideCount);
    console.log({ sortedItems });

    return (
        <ul ref={ref} className="list_ul line4">
            {isEmpty(sortedItems) && <NoData />}
            {!isEmpty(sortedItems) && slide && (
                <Slider
                    slidesToShow={sizeSlideCount}
                    autoplay
                    draggable={false}
                    arrows={false}
                    dots={false}
                    infinite={true}
                >
                    {sortedItems.map((item) => (
                        <Goods
                            isBest={isBestList}
                            onClick={toProductBoard(item._id)}
                            key={item._id}
                            item={item}
                        />
                    ))}
                </Slider>
            )}
            {!slide &&
                sortedItems.map((item, i) => (
                    <Goods
                        isBest={isBestList}
                        onClick={toProductBoard(item._id)}
                        key={item._id}
                        item={item}
                    />
                ))}
        </ul>
    );
};

interface IGoodsProp extends ILi {
    isBest?: boolean;
    item: productList_ProductList_data;
}

export const Goods: React.FC<IGoodsProp> = ({ isBest, item, ...props }) => {
    const router = useRouter();
    const { locale } = useRouter();
    const handleToDetail = () => {
        router.push("/tour/view/" + item._id);
    };

    return (
        <li
            onClick={handleToDetail}
            {...props}
            key={item._id}
            className="list_in"
        >
            <div className="imgWrap">
                <div
                    className="img"
                    style={BG(thumbNail(item?.images)?.uri || "")}
                >
                    상품이미지
                </div>
                {isBest && <i className="simbol__best">BEST</i>}
            </div>
            <div className="box">
                <div className="category">
                    <span>{cn(item.category.localeLabel, locale)}</span>
                    <Link href={`/itsguid/${item.author._id}`}>
                        <a>
                            <div className="guide__name">
                                {item.author?.nickName}
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="title">{item.title}</div>
                <div className="bottom_txt">
                    <div className="tag2">
                        {item.keyWards?.map((keyWard, index) => (
                            <span key={index + "keyward"}>#{keyWard}</span>
                        ))}
                    </div>
                    <RatingStars />
                    <div className="cash">
                        <strong>{autoComma(item.adult_price)}</strong>원
                    </div>
                </div>
            </div>
        </li>
    );
};
