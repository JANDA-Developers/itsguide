import React, { useContext } from 'react';
import { getThisMonthCount } from '../../apollo/staticQuiery';
import { AppContext } from '../../pages/_app';

interface IProp { }

export const ThisMonthBooking: React.FC<IProp> = () => {
    const { isSeller, myProfile } = useContext(AppContext);
    const id = myProfile?._id;
    if (!id) return <span>0</span>;

    const userFilter = isSeller ? {
        seller_eq: id
    } : {
            booker_eq: id
        }

    const count = getThisMonthCount(userFilter);

    return <span>{count}</span>;
};

