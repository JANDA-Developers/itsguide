import dayjs from 'dayjs';
import React from 'react';
import { useFindProductsByGroup } from '../hook/useProduct';
import { productList_ProductList_data } from '../types/api';

interface IProp {
    currentId: string;
    groupCode: string;
    onChange: (target?: productList_ProductList_data) => void;
}

export const ProductDateSelecter: React.FC<IProp> = ({ currentId, groupCode, onChange }) => {
    const { items } = useFindProductsByGroup(groupCode)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.currentTarget.value;
        const target = items.find(item => item._id === id);
        onChange(target)
    }

    let availableExsist = false;
    for (let item of items) {
        if (dayjs(item.startDate).isAfter(new Date(), "day")) {
            availableExsist = true;
        }
    }
    if (!availableExsist) return <span>예약가능 기간이 지났습니다.</span>
    if (!groupCode) return <span>{ }</span>
    return <div className="productDateSelecter write_type">
        <div className="input_form">
            <span className="productDateSelecter__categoryWrap category r3">
                <select onChange={handleChange} value={currentId} name="type">
                    {items.map(p =>
                        <option key={p._id} value={p._id}>
                            {dayjs(p.startDate).format("YYYY.MM.DD")} {p.isOpen ? "" : ` [비공개]`}
                        </option>
                    )}
                </select>
            </span>
        </div>
    </div>;
};
