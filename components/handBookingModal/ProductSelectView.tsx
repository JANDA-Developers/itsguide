import React from 'react';
import { useProductFindById } from '../../hook/useProduct';
import { Fproduct } from '../../types/api';
import { yyyymmdd } from '../../utils/yyyymmdd';

interface IProp { id: string, item: Fproduct }

export const ProductSelectView: React.FC<IProp> = ({ id, item }) => {
    return <div className="goodsall__choice_info">
        <a className="close_icon"><i className="flaticon-multiply"></i></a>
        <div className="goodsall__list__img">
            <img src={item?.images?.[0]?.uri} alt="상품이미지" />
        </div>
        <div className="goodsall__list__text">
            <div className="title">{item?.title}</div>
            <div className="date">{yyyymmdd(item?.startDate)} ~ {yyyymmdd(item?.endDate)}</div>
        </div>
    </div>;
};
