import React, { useEffect } from "react";
import {
    useSystemNotiRead,
    useUnReadSystemNotiFind,
} from "../../hook/useSystemNoti";
import { SystemNotiSeverity } from "../../types/api";

interface IProp {}

export const NotiIcon: React.FC<IProp> = () => {
    const { items } = useUnReadSystemNotiFind();
    const [read] = useSystemNotiRead();
    const count = items.length;
    const countString = count > 99 ? "99+" : count;

    useEffect(() => {
        const unReadSeriousNoti = items.find(
            (item) => item.severity === SystemNotiSeverity.Serious
        );
        if (unReadSeriousNoti) {
            if (confirm("관리자로 부터온 메세지가 있습니다.")) {
                read({ variables: { ids: [unReadSeriousNoti._id] } });
                location.href = unReadSeriousNoti.link;
            }
        }
    }, [items.length]);

    return (
        <div className="inform_icon">
            <img src={"/img/svg/inform_icon4.svg"} alt="inform icon" />
            <button />
            {countString ? <span className="number">{countString}</span> : ""}
        </div>
    );
};
