import dayjs from 'dayjs';
import React from 'react';
import { FrequestHistory } from '../../types/api';
import { methodTypeKr, requestStatusKr } from '../../utils/enumToKr';
import { yyyymmddHHmm } from '../../utils/yyyymmdd';

interface IProp {
    histories: FrequestHistory[]
}

export const HistoryTable: React.FC<IProp> = ({ histories }) => {
    return <div >
        <h4 className="historyTable__head">요청기록</h4>
        <div id="HistoryTable" className=" historyTable fuction_list_mini">
            <div className="thead historyTable__thead">
                <div className="historyTable__cell">행위</div>
                <div className="historyTable__cell">타입</div>
                <div className="historyTable__cell">날짜</div>
                <div className="historyTable__cell">사유</div>
            </div>
            <div className="tbody">
                <ul>
                    {histories.map(h =>
                        <li className="historyTable__li" key={dayjs(h.date).valueOf()}>
                            <div className="historyTable__cell">{requestStatusKr(h.reqType)}</div>
                            <div className="historyTable__cell">{methodTypeKr(h.methodType)} </div>
                            <div className="historyTable__cell">{yyyymmddHHmm(h.date)}</div>
                            <div className="historyTable__cell">{h.reason}</div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    </div>
};
