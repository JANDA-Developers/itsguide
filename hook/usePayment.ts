import { QueryHookOptions, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { BOOKING_FIND_BY_CODE, BOOKING_LIST } from "../apollo/gql/booking";
import { BANK_DEPOSIT_CONFIRM, BANK_REFUND, PAYMENT_LIST, SETTLEMENT_CAL } from "../apollo/gql/payment";
import { bankDepositConfirm, bankDepositConfirmVariables, bankRefund, bankRefundVariables, Fpage,  Fpayment, paymentList, paymentListVariables, settlementCal, settlementCalVariables, _PaymentFilter, _PaymentSort } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";
import { getRefetch } from "../utils/api";
import { generateMutationHook } from "../utils/query";
import { useListQuery, ListInitOptions, IListHook } from "./useListQuery";

interface IuseItemListProp extends Partial<ListInitOptions<_PaymentFilter, _PaymentSort>> {
    options?: QueryHookOptions<paymentList, paymentListVariables>
}
export interface IusePaymentList extends IListHook<_PaymentFilter, _PaymentSort> {
    items: Fpayment[];
    getLoading: boolean;
    pageInfo: Fpage;
}

export const usePaymentList = ({
    initialPageIndex = 0,
    initialSort = [_PaymentSort.createdAt_desc],
    initialFilter = {},
    initialViewCount = 10,
    options = {}
}: IuseItemListProp = {}) => {
    const { variables: overrideVariables, ...ops } = options;
    const { filter, setPage, setFilter, setSort, setViewCount, sort, viewCount, integratedVariable } = useListQuery({
        initialFilter,
        initialPageIndex,
        initialSort,
        initialViewCount
    })

    const { data, loading: getLoading } = useQuery<paymentList,paymentListVariables>(PAYMENT_LIST,{
        fetchPolicy: "network-only",
        variables: {
            ...integratedVariable,
            ...overrideVariables
        },
        ...ops
    })

    const items: Fpayment[] = data?.PaymentList.data || [];
    const pageInfo: Fpage = data?.PaymentList.page || DEFAULT_PAGE;

    return { pageInfo, filter, setPage, getLoading, setFilter, setSort, setViewCount, sort, viewCount, items }
}

export const useSettlementCal = ({
    initialFilter
}: {
    initialFilter?:_PaymentFilter
}) => {
    const [filter, setFilter] = useState<_PaymentFilter>(initialFilter || {});
    const {data} = useQuery<settlementCal,settlementCalVariables>(SETTLEMENT_CAL,{
        variables: {
            filter
        }
    });
    const amt = data?.SettlementCal.amt || 0;

    return {setFilter,amt}
}

export const useBankDepositConfirm = generateMutationHook<bankDepositConfirm,bankDepositConfirmVariables>(BANK_DEPOSIT_CONFIRM, {
    ...getRefetch(BOOKING_FIND_BY_CODE, BOOKING_LIST)
})
export const useBankRefund = generateMutationHook<bankRefund,bankRefundVariables>(BANK_REFUND, {
    ...getRefetch(BOOKING_FIND_BY_CODE, BOOKING_LIST)
})

