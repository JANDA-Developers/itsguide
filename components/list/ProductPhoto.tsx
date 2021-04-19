import Link from 'next/link';
import React from 'react';
import { Fproduct } from '../../types/api';

interface IProp {
    item: Fproduct
}

export const ProductPhotoBlock: React.FC<IProp> = ({ item }) => {
    return <Link href={`/tour/view/${item._id}`}>
        <li className="list_in">
            <div className="imgWrap">
                <div className="img" style={{ backgroundImage: `url(${item.images?.[0]?.uri})` }}>상품이미지</div>
            </div>
            <div className="box">
                <div className="category"><span>{item.category?.label}</span></div>
                <div className="title">{item.title}</div>
                <div className="bottom_txt">
                    <div className="subtitle">
                        {item.subTitle}
                    </div>
                    <div className="tag2">
                        {item.keyWards?.map((keyWard, index) =>
                            <span key={index + "keyward"}>#{keyWard}</span>
                        )}
                    </div>
                </div>
            </div>
        </li>
    </Link>
};