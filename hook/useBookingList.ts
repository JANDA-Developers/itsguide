import { QueryHookOptions, useQuery } from "@apollo/client";
import { BOOKING_LIST } from "../apollo/gql/booking";
import { Fpage,  Fbooking, bookingList, bookingListVariables, _BookingFilter, _BookingSort } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";
import { useListQuery, ListInitOptions, IListHook } from "./useListQuery";

interface IuseItemListProp extends Partial<ListInitOptions<_BookingFilter, _BookingSort>> {
    options?: QueryHookOptions<bookingList, bookingListVariables>
}
export interface IuseBookingList extends IListHook<_BookingFilter, _BookingSort> {
    items: Fbooking[];
    getLoading: boolean;
    pageInfo: Fpage;
}

export const useBookingList = ({
    initialPageIndex = 0,
    initialSort = [_BookingSort.createdAt_desc],
    initialFilter = {},
    initialViewCount = 20,
    options = {}
}: IuseItemListProp = {}): IuseBookingList => {
    const { variables: overrideVariables, ...ops } = options;
    const { filter, setPage, setFilter, setSort, setViewCount, sort, viewCount, integratedVariable } = useListQuery({
        initialFilter,
        initialPageIndex,
        initialSort,
        initialViewCount
    })

    const { data, loading: getLoading } = useQuery<bookingList,bookingListVariables>(BOOKING_LIST,{
        fetchPolicy: "network-only",
        variables: {
            ...integratedVariable,
            ...overrideVariables
        },
        ...ops
    })

    const items: Fbooking[] = data?.BookingList.data || [];
    const pageInfo: Fpage = data?.BookingList.page || DEFAULT_PAGE;

    return { pageInfo, filter, setPage, getLoading, setFilter, setSort, setViewCount, sort, viewCount, items }
}