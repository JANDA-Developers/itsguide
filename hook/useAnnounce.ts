import { ANNOUNCE_DELETE, ANNOUNCE_LIST, ANNOUNCE_CREATE, ANNOUNCE_UPDAET } from "../apollo/gql/announce";
import { announceCreate, announceCreateVariables, announceDelete, announceDeleteVariables, announceFindById_AnnounceFindById_data, announceListVariables, announceList_AnnounceList_data } from "../types/api";
import { announceFindById, announceFindByIdVariables } from "../types/api";
import { ANNOUNCE_FIND_BY_ID } from "../apollo/gql/announce";
import { announceList, _PortfolioSort, _AnnounceFilter, _AnnounceSort } from "../types/api";
import { announceUpdate, announceUpdateVariables } from "../types/api";
import { getRefetch } from "../utils/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";

export const useAnnounceFindById = generateFindQuery<announceFindById,announceFindByIdVariables,announceFindById_AnnounceFindById_data>("_id",ANNOUNCE_FIND_BY_ID);
export const useAnnounceList = generateListQueryHook<_AnnounceFilter,_AnnounceSort,announceList,announceListVariables,announceList_AnnounceList_data>(ANNOUNCE_LIST, {initialSort: [_AnnounceSort.createdAt_desc]});
export const useAnnounceCreate = generateMutationHook<announceCreate,announceCreateVariables>(ANNOUNCE_CREATE,{...getRefetch(ANNOUNCE_FIND_BY_ID,ANNOUNCE_LIST)});
export const useAnnounceDelete = generateMutationHook<announceDelete,announceDeleteVariables>(ANNOUNCE_DELETE,{...getRefetch(ANNOUNCE_FIND_BY_ID,ANNOUNCE_LIST)});
export const useAnnounceUpdate = generateMutationHook<announceUpdate, announceUpdateVariables>(ANNOUNCE_UPDAET,{...getRefetch(ANNOUNCE_FIND_BY_ID,ANNOUNCE_LIST)});
