import React from 'react';
import { useUnReadSystemNotiFind } from '../../hook/useSystemNoti';
import { SystemNotiSeverity } from '../../types/api';

interface IProp { }

export const NotiIcon: React.FC<IProp> = () => {
    const { items } = useUnReadSystemNotiFind();
    const count = items.length;
    const countString = count > 99 ? "99+" : count;

    if(items.find(item => item.severity === SystemNotiSeverity.Serious)) {
        if(confirm('관리자로 부터온 메세지가 있습니다.')) {
            location.href = ""
        }
    }

    return <div className="inform_icon">
        <img src={'/img/svg/inform_icon4.svg'} alt="inform icon" />
        <button />
        {countString ? <span className="number">{countString}</span> : ""}
    </div>;
};
