import dayjs from "dayjs";
import React, { useEffect } from "react";
import { Change } from "../../components/loadingList/LoadingList";
import { NotiLine } from "../../components/notification/NotiLine";
import {
    useSystemNotiHide,
    useSystemNotiList,
    useSystemNotiRead,
} from "../../hook/useSystemNoti";
import { MypageLayoutWrap } from "../../layout/MypageLayout";
import { SystemNotiType } from "../../types/api";
import { ALLOW_LOGINED } from "../../types/const";
import { systemTypeToString } from "../../utils/enumToKr";
import { groupDateArray } from "../../utils/group";
import { auth } from "../../utils/with";

interface IProp {}

export const Notification: React.FC<IProp> = () => {
    const {
        items,
        refetch,
        filter,
        setFilter,
        getLoading,
    } = useSystemNotiList();
    const ids = items.map((i) => i._id);
    const groupItems = groupDateArray(items, "createdAt");
    const [hideMu] = useSystemNotiHide({ variables: { ids } });
    const [readMu] = useSystemNotiRead({ variables: { ids } });

    const handleRefresh = () => {
        if (refetch) refetch();
    };

    const handleHideAll = () => {
        hideMu();
    };

    const notiTypes = Object.values(SystemNotiType);

    useEffect(() => {
        readMu();
    }, [items.length]);

    const checkOn = (type: SystemNotiType) =>
        filter.type_eq === type ? "on" : "";

    const handleTypeFilter = (type: SystemNotiType) => () => {
        filter.type_eq = type;
        setFilter({
            ...filter,
        });
    };

    return (
        <MypageLayoutWrap>
            <div className="in notification_box">
                <h4>알림</h4>
                <div className="paper_div">
                    <div className="alignment notification_box__alignment">
                        <div className="left_div">
                            {notiTypes.map((type, index) => (
                                <button
                                    className={`btn notification_box__typeBtn ${checkOn(
                                        type
                                    )}`}
                                    onClick={handleTypeFilter(type)}
                                    key={index + "arr"}
                                >
                                    {systemTypeToString(type)}
                                </button>
                            ))}
                        </div>
                        <div className="right_div">
                            <div className="all_del">
                                <button onClick={handleHideAll} className="btn">
                                    모두삭제
                                </button>
                            </div>
                            <div onClick={handleRefresh} className="re-set">
                                <button className="btn">새로고침</button>
                            </div>
                        </div>
                    </div>

                    <div className="notification_list">
                        <Change change={!getLoading}>
                            {groupItems.map((group, index) => (
                                <div
                                    key={"notificationDateGroup" + index}
                                    className="date_fom"
                                >
                                    <div className="ovj">
                                        <span>
                                            <i className="svg">
                                                <img
                                                    src="/img/svg/inform_icon4.svg"
                                                    alt=""
                                                />
                                            </i>
                                            {group.date}
                                        </span>
                                    </div>
                                    <div className="right">
                                        {group.items.map((item, i) => (
                                            <NotiLine
                                                key={item._id}
                                                systemNoti={item}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Change>
                    </div>
                </div>
            </div>
        </MypageLayoutWrap>
    );
};

export default auth(ALLOW_LOGINED)(Notification);
