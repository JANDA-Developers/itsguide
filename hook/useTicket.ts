import {
    TICKET_DELETE,
    TICKET_LIST,
    TICKET_CREATE,
    TICKET_UPDAET,
} from "../apollo/gql/ticket";
import {
    ticketCreate,
    ticketCreateVariables,
    ticketDelete,
    ticketDeleteVariables,
    ticketFindById_TicketFindById_data,
    ticketListVariables,
    ticketList_TicketList_data,
} from "../types/api";
import { ticketFindById, ticketFindByIdVariables } from "../types/api";
import { TICKET_FIND_BY_ID } from "../apollo/gql/ticket";
import {
    ticketList,
    _PortfolioSort,
    _TicketFilter,
    _TicketSort,
} from "../types/api";
import { ticketUpdate, ticketUpdateVariables } from "../types/api";
import { getRefetch } from "../utils/api";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
} from "../utils/query";

export const useTicketFindById = generateFindQuery<
    ticketFindById,
    ticketFindByIdVariables,
    ticketFindById_TicketFindById_data
>("id", TICKET_FIND_BY_ID);
export const useTicketList = generateListQueryHook<
    _TicketFilter,
    _TicketSort,
    ticketList,
    ticketListVariables,
    ticketList_TicketList_data
>(TICKET_LIST, {
    initialSort: [_TicketSort.createdAt_desc],
});
export const useTicketCreate = generateMutationHook<
    ticketCreate,
    ticketCreateVariables
>(TICKET_CREATE, { ...getRefetch(TICKET_FIND_BY_ID, TICKET_LIST) });
export const useTicketDelete = generateMutationHook<
    ticketDelete,
    ticketDeleteVariables
>(TICKET_DELETE, { ...getRefetch(TICKET_FIND_BY_ID, TICKET_LIST) });
export const useTicketUpdate = generateMutationHook<
    ticketUpdate,
    ticketUpdateVariables
>(TICKET_UPDAET, { ...getRefetch(TICKET_FIND_BY_ID, TICKET_LIST) });
