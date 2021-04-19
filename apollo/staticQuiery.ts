
import {  useSettlementCal } from "../hook/usePayment";
import { _BookingFilter, _PaymentFilter } from "../types/api";
import { lastMonthFirstDate, lastMonthLastDate, thisMonthFirstDate, thisMonthLastDate } from "../types/const";
import { getBookingCount } from "../utils/getBookingCount";

export const getLastMonthCount = (filter:_BookingFilter) => {

    return getBookingCount({
        filter: {
            createdAt_gte: lastMonthFirstDate,
            createdAt_lt: lastMonthLastDate,
            ...filter
        }
    })
}
export const getThisMonthCount = (filter:_BookingFilter) => {

    return getBookingCount({
        filter: {
            createdAt_gte: thisMonthFirstDate,
            createdAt_lte: thisMonthLastDate,
            ...filter
        }
    })
}

export const getThisMonthPayAmount =  (filter?:_PaymentFilter) => {
    const {amt,setFilter} = useSettlementCal({initialFilter:{
        createdAt_gte: thisMonthFirstDate,
        createdAt_lte: thisMonthLastDate,
        ...filter
    }});
    return {amt,setFilter}
}