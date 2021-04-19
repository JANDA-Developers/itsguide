import React, { useContext } from 'react';
import Selecter, { SelectComponentsConfig } from "react-select";
import { AppContext } from '../../pages/_app';
import { IselectedOption } from '../../utils/formatter';

interface IProp {
    value: IselectedOption[];
    handleChange: (value: IselectedOption[]) => void;
    className?: string;
}

export const KeywardSelecter: React.FC<IProp> = ({ value, handleChange, className }) => {
    const { categoriesMap } = useContext(AppContext);

    const options = categoriesMap.GUIDE_KEYWARD.map(key => ({ label: key.label, _id: key._id, value: key._id }))

    return <Selecter classNamePrefix="keyward-selecter" className={className} value={value} noOptionsMessage={() => "결과 없음"} placeholder="선택" isMulti onChange={handleChange} options={options} />;
};
