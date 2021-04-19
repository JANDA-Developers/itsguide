import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { tourSearchLink } from '../../pages/search';
import { Fproduct } from '../../types/api';
import { BG } from '../../types/const';
import { autoComma } from '../../utils/formatter';

interface IProp {
    product: Fproduct
}

export const ProductListBlock: React.FC<IProp> = ({ product }) => {
    const router = useRouter();

    return <li className="list_in">
        <div className="imgWrap" style={{
            display: "inline-block"
        }}>
            <div onClick={() => {
                router.push(`/tour/view/${product._id}`)
            }} style={BG(product?.images?.[0]?.uri || "")} className="img" />
        </div>
        <div className="txt1">
            <div className="title"><a href={"/tour/view/" + product._id}>{product.title}</a></div>
            <div className="subtitle">
                {product.subTitle}
            </div>
            <div className="tag">
                {product.keyWards?.map((keyward, i) =>
                    <Link href={tourSearchLink({ keyward })}>
                        <a key={product._id + i} >#{keyward}</a>
                    </Link>
                )}
            </div>
            <div className="cash"><strong>{autoComma(product.adult_price)}</strong>원</div>
        </div>
        <div className="txt2">
            <span>장소 : {product.address}</span>
            <span>모집인원 : {product.bookingCount}/{product.maxMember}</span>
            <span>기간 : 당일체험</span>
            <Link href={"/tour/view/" + product._id}>
                <span className="btn">바로가기</span>
            </Link>
        </div>
    </li>;
};


