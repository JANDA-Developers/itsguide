import React, { useState } from "react";
import { IuseProductList, useProductList } from "../../hook/useProduct";
import { handSearchClose } from "../../layout/components/Header";
import { Fproduct } from "../../types/api";
import { setVal, whenEnter } from "../../utils/eventValueExtracter";
import { integratedProductSearch } from "../../utils/genFilter";
import isEmpty from "../../utils/isEmpty";
import { yyyymmdd } from "../../utils/yyyymmdd";
import { Change } from "../loadingList/LoadingList";
import { thumbNail } from "../ThunbNail/ThunbNail";

interface IProp {
    selectProductId: string;
    onSelectProduct: (product: Fproduct) => void;
}

export const ProductSearcher: React.FC<IProp> = ({
    selectProductId,
    onSelectProduct,
}) => {
    const [search, setSearch] = useState("");
    const { setFilter, items, getLoading } = useProductList({
        initialFilter: {
            _id_eq: selectProductId,
        },
    });

    const getData = () => {
        const query = integratedProductSearch(search);
        setFilter(integratedProductSearch(search));
        handSearchClose();
    };

    const handleSelectProduct = (product: Fproduct) => () => {
        setSearch(product.title);
        onSelectProduct(product);
    };

    return (
        <div className="productSearcher ">
            <div className="write_type">
                <div className="title">상품검색</div>
                <div className="input_form">
                    <input
                        placeholder="검색어를 입력해주세요"
                        onKeyPress={whenEnter(getData)}
                        onChange={setVal(setSearch)}
                        value={search}
                        type="text"
                        name="title"
                        className="inputText w100"
                    />
                    <div
                        onClick={getData}
                        className="productSearcher__searchIcon search_btn"
                    >
                        <img src="/img/svg/search_icon.svg" alt="icon" />
                        <button className="btt1"></button>
                    </div>
                </div>
            </div>
            <div className="searchList">
                <Change change={!getLoading}>
                    <div className={`searchList__wrap`}>
                        <ul>
                            {items.map((item, i) => (
                                <li
                                    className={`searchList__li ${
                                        selectProductId === item._id &&
                                        "searchList__li--selected"
                                    }`}
                                    onClick={handleSelectProduct(item)}
                                    key={item._id}
                                >
                                    <div className="searchList__imgWrap">
                                        <img
                                            className="searchList__img"
                                            src={
                                                thumbNail(item.images)?.uri ||
                                                ""
                                            }
                                            alt="상품이미지"
                                        />
                                    </div>
                                    <div className="searchList__text">
                                        <div className="title">
                                            {item.title}
                                        </div>
                                        <div className="date">
                                            {yyyymmdd(item.startDate)} ~
                                            {yyyymmdd(item.endDate)}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Change>
            </div>
        </div>
    );
};

export default ProductSearcher;
