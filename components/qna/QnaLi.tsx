import dayjs from 'dayjs';
import React from 'react';
import { Econvert } from '../../types/const';
import { QStatus } from '../../types/interface';


type TQ = {
    number: number;
    title: string;
    status: QStatus.DONE;
    createAt: Date;
    userName: string;
    [key: string]: any;
}

interface IProp extends TQ {
}

export const QnaLi: React.FC<IProp> = ({ number, status, title, createAt, userName }) => {
    return <li>
        <div className="th01">{number}</div>
        <div className="th02">
            {title} <i className="q_ok">해결중</i>
        </div>
        <div className="th03">{userName}</div>
        <div className="th04">{dayjs(createAt).format("YYYY.MM.DD HH:mm")}</div>
    </li>;
};
