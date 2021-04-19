import dayjs from 'dayjs';
import React from 'react';

interface IProp {
    createdAt: Date;
    starnadard?: number;
}

export const NewBadge: React.FC<IProp> = ({ createdAt, starnadard = 1000 * 60 * 60 * 24 }) => {
    const isNew = createdAt.valueOf() + starnadard > new Date().valueOf();
    return isNew ? <img className="new" src="/img/svg/new.svg" /> : null;
};
