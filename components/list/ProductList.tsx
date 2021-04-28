import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { tourSearchLink } from "../../pages/search";
import { AppContext } from "../../pages/_app";
import { Fproduct } from "../../types/api";
import { BG } from "../../types/const";
import { autoComma } from "../../utils/formatter";

interface IProp {
    product: Fproduct;
}

export const ProductListBlock: React.FC<IProp> = ({ product }) => {
    const { ln } = useContext(AppContext);
    const router = useRouter();

    return (
        <li className="list_in">
            <div
                onClick={() => {
                    router.push(`/tour/view/${product._id}`);
                }}
                style={BG(product?.images?.[0]?.uri || "")}
                className="img"
            />
            <div className="txt1">
                <div className="title">
                    <a href={"/tour/view/" + product._id}>{product.title}</a>
                </div>
                <div className="subtitle">{product.subTitle}</div>
                <div className="tag">
                    {product.keyWards?.map((keyward, i) => (
                        <Link href={tourSearchLink({ keyward })}>
                            <a key={product._id + i}>#{keyward}</a>
                        </Link>
                    ))}
                </div>
                <div className="cash">
                    <strong>{autoComma(product.adult_price)}</strong>
                    {ln("money_unit")}
                </div>
            </div>
            <div className="txt2">
                <span>
                    {ln("location")} : {product.address}
                </span>
                <span>
                    {ln("party_members")} : {product.bookingCount}/
                    {product.maxMember}
                </span>
                <span>
                    {ln("range")} : {ln("one_day")}
                </span>
                <Link href={"/tour/view/" + product._id}>
                    <span className="btn">{ln("viewMore")}</span>
                </Link>
            </div>
        </li>
    );
};
