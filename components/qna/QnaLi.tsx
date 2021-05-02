import dayjs from "dayjs";
import React from "react";
import { Fquestion } from "../../types/api";
import { Econvert } from "../../types/const";
import { ILi } from "../../types/interface";
interface IProp extends ILi {
    question: Fquestion;
    no: number;
}

export const QnaLi: React.FC<IProp> = ({ no, question: qs, ...props }) => {
    return (
        <li {...props}>
            <div className="th01">{no}</div>
            <div className="th02">
                {qs.title}
                <i className="q_ok">{qs.status}</i>
            </div>
            <div className="th03">{qs.author?.nickName}</div>
            <div className="th04">
                {dayjs(qs.createdAt).format("YYYY.MM.DD hh:mm")}
            </div>
        </li>
    );
};
