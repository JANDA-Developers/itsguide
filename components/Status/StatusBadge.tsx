import React from 'react';
import { AnnounceType, BookingStatus, Fbooking, ProductStatus, SettlementStatus } from '../../types/api';
import { announceTypeKR, bookingStatus, productStatus, settlementStatus } from "../../utils/enumToKr";

interface IProp {
    status: ProductStatus;
    className?: string;
}

export const PordStatusBadge: React.FC<IProp> = ({ status, className }) => {

    const getClass = () => {
        if (status === ProductStatus.CANCELD) return "tour-no"
        if (status === ProductStatus.READY) return "tour-yes"
        if (status === ProductStatus.EXPIRED) return "tour-no"
        if (status === ProductStatus.OPEN) return "tour-ok"
        if (status === ProductStatus.REFUSED) return "plainning-no"
        if (status === ProductStatus.UPDATE_REQ) return "plainning-yes"
        if (status === ProductStatus.UPDATE_REQ_REFUSED) return "plainning-no"
    }


    // <span> </span>
    const _class = getClass();
    return <span className={`state_icon ${_class + " " + className}`}>{productStatus(status)}</span>
};

interface IBookingStatusBadgeProp {
    status: BookingStatus | null;
    square?: boolean;
}

export const BookingStatusBadge: React.FC<IBookingStatusBadgeProp> = ({ status, square }) => {

    const getClass = () => {
        if (status === BookingStatus.COMPLETE) return "re-ok"
        if (status === BookingStatus.READY) return "re-stay"
        if (status === BookingStatus.CANCEL) return "re-refund"
    }

    if (square)
        return <span className={`status_square ${getClass()}`}>{bookingStatus(status)}</span>
    return <i className={`state ${getClass()}`}>{bookingStatus(status)}</i>
};

export const RequestBadge: React.FC<any> = ({ isCancelRequest, className }) => {

    const getClass = () => {
        if (status === BookingStatus.COMPLETE) return "re-ok"
        if (status === BookingStatus.READY) return "re-stay"
        if (status === BookingStatus.CANCEL) return "re-refund"
    }

    if (isCancelRequest)
        return <span className={`requestBadge` + " " + className}>취소요청</span>
    else return null
};


export const AnnotationBadge: React.FC<any> = ({ type }) => {

    const getClass = (type: AnnounceType) => {
        if (type === AnnounceType.ACCOUNCE) return "up"
        if (type === AnnounceType.NOICE) return "-"
    }

    return <span className={`annotationBadge` + " " + getClass(type)}>{announceTypeKR(type)}</span>
};

interface ISettlementStatusProp extends React.HTMLAttributes<HTMLSpanElement> {
    status: SettlementStatus,
    productStatus?: ProductStatus
}
export const SettlementStatusBadge: React.FC<ISettlementStatusProp> = ({ status, productStatus }) => {

    const getClass = () => {
        if (productStatus && productStatus !== ProductStatus.COMPLETED) return "not-ready"
        if (status === SettlementStatus.COMPLETE) return "complete"
        if (status === SettlementStatus.READY) return "ready"
        if (status === SettlementStatus.REQUEST) return "request"
    }

    return <span className={`settlementStatus ${getClass()}`}>
        {settlementStatus(status, productStatus)}
    </span>
}

// .state_icon.tour-no { // 여행취소
//     color: #f32121;
//     border: 1px solid #f32121;
// }
// .state_icon.tour-ok { //출발확정
//     color: #2196F3;
//     border: 1px solid #2196F3;
// }
// .state_icon.tour-yes { // 출발미확정
//     color: #005394;
//     border: 1px solid #005394;
// }
// .state_icon.plainning-no { //기획반려
//     color: #f38721;
//     border: 1px solid #f38721;
// }
// .state_icon.plainning-yes { // 기획요청
//     color: #059600;
//     border: 1px solid #059600;
// }
// .state_icon.plainning-else { // 기획요청
//     color: #059600;
//     border: 1px solid #059600;
// }