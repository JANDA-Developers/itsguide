import React from 'react';
import { FsystemNoti, SystemNotiType } from '../../types/api';
import { systemTypeToString } from '../../utils/enumToKr';

interface IProp {
    type: SystemNotiType
}
// 더 필요하면 type을 더 나누자.
export const SystemTypeBadge: React.FC<IProp> = ({ type }) => {
    const msg = systemTypeToString(type);
    return <strong className={classConvert[type]}>{msg}</strong>;
};


const classConvert: Record<SystemNotiType, string> = {
    booking: "blue",
    member: "green",
    payment: "blue",
    system: "blue",
    cancel: "red"
}