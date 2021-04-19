import React from 'react';
import { IDiv } from '../../../types/interface';

interface IProp extends IDiv {
    count: number;
    label: string;
}

export const GuideProfitCard: React.FC<IProp> = ({ count, label, ...props }) => {
    return <div className="guideProfitCard" {...props} >
        <b className="guideProfitCard__count">{count}</b>
        <small>{label}</small>
    </div>;
};
