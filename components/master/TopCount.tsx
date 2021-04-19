import React from 'react';

interface IProp { }

export const TopCount: React.FC<IProp> = () => {
    return <div className="top_info_number">
        <ul className="ln3">
            <li>
                <strong>234</strong>
                <span>전체</span>
            </li>
            <li>
                <strong>234</strong>
                <span>예약대기</span>
            </li>
            <li>
                <strong>234</strong>
                <span>예약완료</span>
            </li>
        </ul>
    </div>;
};
