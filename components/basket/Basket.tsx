import dayjs from "dayjs";
import React, { useContext, useState } from "react";
import { useIdSelecter } from "../../hook/useIdSelecter";
import { useUpdate } from "../../hook/useUpdater";
import { AppContext } from "../../pages/_app";
import { Fproduct } from "../../types/api";
import { BG } from "../../types/const";
import { TElements } from "../../types/interface";
import { autoComma } from "../../utils/formatter";
import isEmpty from "../../utils/isEmpty";
import { arraySum } from "../../utils/math";
import { openModal } from "../../utils/popUp";
import { getTypeTextOfProduct } from "../../utils/product";
import {
    getBracket,
    getTotalCount,
    IBasketItem,
    removeBracket,
    removeItem,
} from "../../utils/Storage";
import { BasketModal } from "../basketModal/BasketModal";
import { NoData } from "../common/NoData";

interface IProp {
    Buttons?: TElements;
    mode?: "single";
    handleSingleOrder?: (item: IBasketItem & Fproduct) => void;
    updateComponent: () => void;
    items: (IBasketItem & Fproduct)[];
}

export const Basket: React.FC<IProp> = ({
    updateComponent,
    Buttons,
    items,
    handleSingleOrder,
    mode,
}) => {
    const { ln } = useContext(AppContext);
    const [popUpProduct, setPopProduct] = useState<Fproduct & IBasketItem>();
    const allIds = items.map((i) => i._id);
    const {
        reverseAll,
        toggleAll,
        selectedIds,
        check,
        isChecked,
        isAllSelected,
        toggle,
    } = useIdSelecter(allIds);

    const totalPrice = arraySum(items.map((item, i) => item.price));
    const priceLines = items
        .map((item, i) => autoComma(item.price))
        .join(" + ");

    const handleModify = (product: Fproduct & IBasketItem) => () => {
        setPopProduct(product);
        openModal("#basketModal")();
    };

    const handleDeleteSelects = () => {
        selectedIds.forEach((id) => {
            removeItem(id);
        });
        updateComponent();
    };

    const handleDeleteAll = () => {
        if (confirm(ln("basket_empty_message"))) {
            removeBracket();
            updateComponent();
        }
    };

    const isSingle = mode === "single";

    return (
        <div className="basket_box">
            <div className="basket_list">
                <div className="th">
                    {!isSingle && (
                        <div className="t01">
                            <span className="checkbox">
                                <input
                                    onChange={toggleAll}
                                    checked={isAllSelected}
                                    type="checkbox"
                                    name="agree"
                                    id="agree0"
                                    title="전체선택"
                                />
                                <label htmlFor="agree0" />
                            </span>
                        </div>
                    )}
                    <div className="t02">{ln("product_info")}</div>
                    <div className="t03">{ln("option")}</div>
                    <div className="t04">{ln("product_price")}</div>
                    <div className="t05">{ln("status")}</div>
                </div>
                <NoData show={isEmpty(items)} label={ln("basket_is_empty")} />
                {items.map((item, i) => (
                    <div key={item._id} className="td">
                        {!isSingle && (
                            <div className="t01">
                                <span className="checkbox">
                                    <input
                                        checked={isChecked(item._id)}
                                        onChange={() => toggle(item._id)}
                                        type="checkbox"
                                        name="agree"
                                        id={`agree${i}`}
                                        title="개별선택"
                                    />
                                    <label htmlFor={`agree${i}`} />
                                </span>
                            </div>
                        )}
                        <div className="t02">
                            <div
                                className="img"
                                style={BG(item.images?.[0]?.uri || "")}
                            ></div>
                            <div className="right">
                                <div className="ct">
                                    {item?.category?.label}
                                </div>
                                <div className="code">{item.code}</div>
                                <div className="title">
                                    <a href="/">{item.title}</a>
                                </div>
                                <div className="subtitle">{item.subTitle}</div>
                            </div>
                            <span
                                onClick={() => {
                                    removeItem(item._id);
                                    updateComponent();
                                }}
                                className="del"
                            >
                                <img
                                    src="/img/svg/del.svg"
                                    alt="삭제"
                                    className="svg_del"
                                />
                                <button />
                            </span>
                        </div>
                        <div className="t03">
                            <div className="day">
                                {ln("startDate")} :{" "}
                                <strong>
                                    {dayjs(item.startDate).format(
                                        "MM.DD (ddd)"
                                    )}
                                </strong>
                            </div>
                            <div className="start_where">
                                {ln("startPoint")} : {item.startPoint}
                            </div>
                            <div className="tour_mode">
                                {ln("travel_method")} :
                                {getTypeTextOfProduct(
                                    item.type,
                                    item.dateRange
                                )}
                            </div>
                            <div className="men">
                                {ln("select_people")} :{" "}
                                <strong>
                                    {ln("total")} {getTotalCount(item.count)}
                                    {ln("person_unit")}
                                </strong>
                                {` - ${ln("adult")}${item.count.adult}, ${ln(
                                    "kid"
                                )}${item.count.kids}, ${ln("baby")}${
                                    item.count.baby
                                }`}
                            </div>
                            <button
                                onClick={handleModify(item)}
                                className="btn option_btn"
                            >
                                {ln("change_condition_basket")}
                            </button>
                        </div>
                        <div className="t04">
                            <div className="money">
                                <strong>
                                    {autoComma(item.price)} {ln("won")}
                                </strong>
                            </div>
                            {items.length !== 1 && (
                                <button
                                    onClick={() => {
                                        handleSingleOrder?.(item);
                                    }}
                                    className="btn hit"
                                >
                                    {ln("order")}
                                </button>
                            )}
                        </div>
                        <div className="t05">
                            <div className="day_cunt">
                                {ln("start_travel")} D-{item.Dday}
                            </div>
                            <div className="men_cunt">
                                {ln("party_members")} :{" "}
                                <strong>{item.compeltePeopleCnt}</strong> /{" "}
                                {item.maxMember}
                            </div>
                            <div className="state onsale">{item.status}</div>
                        </div>
                    </div>
                ))}

                <div className="baket_bottom">
                    <div className="sum01">
                        <strong>{ln("sum_price")}</strong>
                    </div>
                    <div className="sum02">
                        {ln("product_price")}
                        <strong>
                            {autoComma(totalPrice)}
                            {ln("won")}
                        </strong>
                    </div>
                    <div className="sum03">=</div>
                    <div className="sum04">
                        <strong>
                            {priceLines}
                            {ln("won")}
                        </strong>
                    </div>
                </div>

                {!isSingle && (
                    <div className="baket_check">
                        <div className="left">
                            <button onClick={reverseAll} className="btn">
                                <input
                                    checked={isAllSelected}
                                    type="checkbox"
                                />
                                {ln("selectAll")}
                            </button>
                            <button
                                onClick={handleDeleteSelects}
                                className="btn"
                            >
                                {ln("selectDelete")}
                            </button>
                            <button onClick={handleDeleteAll} className="btn">
                                {ln("deleteAll")}
                            </button>
                        </div>
                    </div>
                )}
                {Buttons}
                {/* popup은 언제나 class fade와 함께 있어야 한다. */}
                <BasketModal
                    key={popUpProduct?._id || ""}
                    product={popUpProduct}
                    updateComponent={updateComponent}
                />
                <div className="fade"></div>
            </div>
        </div>
    );
};
