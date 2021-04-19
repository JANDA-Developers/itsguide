import React, { useEffect } from 'react';
import { getThisMonthPayAmount } from '../../apollo/staticQuiery';

interface IProp { }

export const ThisMonthPayAmt: React.FC<IProp> = () => {
    const { amt } = getThisMonthPayAmount()
    return <span>{amt}</span>;
};
