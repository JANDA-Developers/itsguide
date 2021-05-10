import {
    EVENT_DELETE,
    EVENT_LIST,
    EVENT_CREATE,
    EVENT_UPDAET,
} from "../apollo/gql/event";
import {
    eventCreate,
    eventCreateVariables,
    eventDelete,
    eventDeleteVariables,
    eventFindById_EventFindById_data,
    eventListVariables,
    eventList_EventList_data,
} from "../types/api";
import { eventFindById, eventFindByIdVariables } from "../types/api";
import { EVENT_FIND_BY_ID } from "../apollo/gql/event";
import {
    eventList,
    _PortfolioSort,
    _EventFilter,
    _EventSort,
} from "../types/api";
import { eventUpdate, eventUpdateVariables } from "../types/api";
import { getRefetch } from "../utils/api";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
} from "../utils/query";

export const useEventFindById = generateFindQuery<
    eventFindById,
    eventFindByIdVariables,
    eventFindById_EventFindById_data
>("id", EVENT_FIND_BY_ID);
export const useEventList = generateListQueryHook<
    _EventFilter,
    _EventSort,
    eventList,
    eventListVariables,
    eventList_EventList_data
>(EVENT_LIST, { initialSort: [_EventSort.createdAt_asc] });
export const useEventCreate = generateMutationHook<
    eventCreate,
    eventCreateVariables
>(EVENT_CREATE, { ...getRefetch(EVENT_FIND_BY_ID, EVENT_LIST) });
export const useEventDelete = generateMutationHook<
    eventDelete,
    eventDeleteVariables
>(EVENT_DELETE, { ...getRefetch(EVENT_FIND_BY_ID, EVENT_LIST) });
export const useEventUpdate = generateMutationHook<
    eventUpdate,
    eventUpdateVariables
>(EVENT_UPDAET, { ...getRefetch(EVENT_FIND_BY_ID, EVENT_LIST) });
