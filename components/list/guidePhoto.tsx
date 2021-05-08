import Link from "next/link";
import React, { useContext } from "react";
import { AppContext } from "../../pages/_app";
import { Fproduct, FpublicSellerData } from "../../types/api";

interface IProp {
    item: FpublicSellerData;
}

export const ProductPhotoBlock: React.FC<IProp> = ({ item }) => {
    const { categoriesMap } = useContext(AppContext);
    const getLabel = (keywardId: string) => {
        return categoriesMap.GUIDE_KEYWARD.find((key) => key._id === keywardId);
    };
    return (
        <Link href={`/tour/view/${item._id}`}>
            <li className="list_in">
                <div
                    className="img"
                    style={{
                        backgroundImage: `url(${item.profileImg?.[0]?.uri})`,
                    }}
                >
                    상품이미지
                </div>
                <div className="box">
                    <div className="category">
                        <span>{"잇츠 가이드"}</span>
                        <div className="guide__name">가이드이름</div>
                    </div>
                    <div className="title">{item.nickName}</div>
                    <div className="bottom_txt">
                        <div className="tag2">
                            {item.keywards?.map((keyWard, index) => (
                                <span key={keyWard}>{getLabel(keyWard)}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </li>
        </Link>
    );
};
