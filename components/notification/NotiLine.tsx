import dayjs from 'dayjs';
import React from 'react';
import { useSystemNotiHide } from '../../hook/useSystemNoti';
import { FsystemNoti, SystemNotiType } from '../../types/api';
import { systemTypeToString } from '../../utils/enumToKr';
import { SystemTypeBadge } from '../systemTypeBadge/SystemTypeBadge';

interface IProp {
    systemNoti: FsystemNoti;
}


export const getDiffTimeString = (time: Date) => {
    const diffMins = dayjs().diff(time, "m");
    let diffString = diffMins + "분전"
    if (diffMins > 60) {
        diffString = Math.floor(diffMins / 60) + "시간전"
    }
    if (diffMins > 1440) {
        diffString = Math.floor(diffMins / 1440) + "일전"
    }
    return diffString

}

export const NotiLine: React.FC<IProp> = ({ systemNoti }) => {
    const { content, createdAt, type, _id } = systemNoti;

    const [hideMu] = useSystemNotiHide();

    const hide = (id: string) => () => {
        hideMu({
            variables: {
                ids: [id]
            }
        })
    }

    return <div className="hang">
        <SystemTypeBadge type={type} />
        <span>{content}</span>
        <div className="time">{getDiffTimeString(createdAt)}</div>
        <span onClick={hide(_id)} className="del">
            <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
            <button></button>
        </span>
    </div>;
};
