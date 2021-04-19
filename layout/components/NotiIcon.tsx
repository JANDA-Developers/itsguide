import React from 'react';
import { useUnReadSystemNotiFind } from '../../hook/useSystemNoti';

interface IProp { }

export const NotiIcon: React.FC<IProp> = () => {
    const { items } = useUnReadSystemNotiFind();
    const count = items.length;
    const countString = count > 99 ? "99+" : count;

    return <div className="inform_icon">
        <img src={'/img/svg/inform_icon4.svg'} alt="inform icon" />
        <button />
        {countString ? <span className="number">{countString}</span> : ""}
    </div>;
};
