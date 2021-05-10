import Link from "next/link";
import React from "react";
import { useProductFindById } from "../../hook/useProduct";
import { Fproduct } from "../../types/api";
import { yyyymmdd } from "../../utils/yyyymmdd";
import { thumbNail } from "../ThunbNail/ThunbNail";

interface IProp {
    id: string;
    item: Fproduct;
}

export const ProductSelectView: React.FC<IProp> = ({ id, item }) => {
    return (
        <div className="goodsall__choice_info">
            <Link href="/">
                <a className="close_icon">
                    <i className="flaticon-multiply"></i>
                </a>
            </Link>
            <div className="goodsall__list__img">
                <img src={thumbNail(item?.images)?.uri} alt="상품이미지" />
            </div>
            <div className="goodsall__list__text">
                <div className="title">{item?.title}</div>
                <div className="date">
                    {yyyymmdd(item?.startDate)} ~ {yyyymmdd(item?.endDate)}
                </div>
            </div>
        </div>
    );
};
