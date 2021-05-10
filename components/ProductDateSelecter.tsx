import dayjs from "dayjs";
import React, { useContext } from "react";
import { useFindProductsByGroup } from "../hook/useProduct";
import { AppContext } from "../pages/_app";
import { productList_ProductList_data } from "../types/api";

interface IProp {
    currentId: string;
    groupCode: string;
    onChange: (target?: productList_ProductList_data) => void;
}

export const ProductDateSelecter: React.FC<IProp> = ({
    currentId,
    groupCode,
    onChange,
}) => {
    const { ln } = useContext(AppContext);
    const { items } = useFindProductsByGroup(groupCode);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.currentTarget.value;
        const target = items.find((item) => item._id === id);
        onChange(target);
    };

    let availableExsist = false;
    for (let item of items) {
        if (dayjs(item.startDate).isAfter(new Date(), "day")) {
            availableExsist = true;
        }
    }
    if (!availableExsist) return <span>{ln("time_over_resv_period")}</span>;
    if (!groupCode) return <span>{}</span>;
    return (
        <div className="productDateSelecter write_type">
            <div className="input_form">
                <span className="productDateSelecter__categoryWrap category r3">
                    <select
                        onChange={handleChange}
                        value={currentId}
                        name="type"
                    >
                        {items.map((p) => (
                            <option key={p._id} value={p._id}>
                                {dayjs(p.startDate).format("YYYY.MM.DD")}
                                {p.isOpen ? "" : ` [${ln("unOpend")}]`}
                            </option>
                        ))}
                    </select>
                </span>
            </div>
        </div>
    );
};
