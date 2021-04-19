import Link from 'next/link';
import React from 'react';
import { Fproduct } from '../../types/api';
import { BG } from '../../types/const';
import { autoComma } from '../../utils/formatter';

interface IProp {
    product: Fproduct
}

export const ProductListBlock: React.FC<IProp> = ({ product }) => {
    return <li className="list_in">
        <div style={BG(product.images[0].uri)} className="img" />
        <div className="txt1">
            <div className="title"><a href="/">{product.title}</a></div>
            <div className="subtitle">
                {product.subTitle}
            </div>
            <div className="tag">
                {product.keyWards?.map((keyWard, i) =>
                    <a key={product._id + i} href="/">#{keyWard}</a>
                )}
            </div>
            <div className="cash"><strong>{autoComma(product.adult_price)}</strong>원</div>
        </div>
        <div className="txt2">
            <span>장소 : {product.address}</span>
            <span>모집인원 : {product.bookingCount}/{product.maxMember}</span>
            <span>기간 : 당일체험</span>
            <Link href={"tour/view/" + product._id}>
                <span className="btn">바로가기</span>
            </Link>
        </div>
    </li>;
};


