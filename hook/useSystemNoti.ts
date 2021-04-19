import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";
import { getRefetch } from "../utils/api";
import { systemNotiHideVariables,systemNotiHide,FsystemNoti, systemNotiList, systemNotiListVariables, systemNotiRead, systemNotiReadVariables, _SystemNotiFilter, _SystemNotiSort, unReadSystemNotiFind } from "../types/api";
import { SYSTEMNOTI_LIST, UNREAD_SYSTEMNOTIS,SYSTEMNOTI_READ, SYSTEMNOTI_HIDE } from "../apollo/gql/systemNoti";
import { GET_CONTEXT } from "../apollo/gql/queries";
import { useQuery } from "@apollo/client";
import { Storage } from "../utils/Storage";

export const useSystemNotiList = generateListQueryHook<_SystemNotiFilter,_SystemNotiSort,systemNotiList,systemNotiListVariables, FsystemNoti>(SYSTEMNOTI_LIST,{initialSort:[_SystemNotiSort.createdAt_desc], initialViewCount:200});
export const useSystemNotiRead = generateMutationHook<systemNotiRead,systemNotiReadVariables>(SYSTEMNOTI_READ,{...getRefetch(SYSTEMNOTI_LIST,UNREAD_SYSTEMNOTIS)});
export const useSystemNotiHide = generateMutationHook<systemNotiHide,systemNotiHideVariables>(SYSTEMNOTI_HIDE,{...getRefetch(SYSTEMNOTI_LIST,UNREAD_SYSTEMNOTIS)});
export const useUnReadSystemNotiFind = () => {
    const skip = !Storage?.getLocal("jwt","");
    const {data} = useQuery<unReadSystemNotiFind>(UNREAD_SYSTEMNOTIS,{pollInterval:180000, skip});
    const items = data?.UnReadSystemNotiFind.data || []
    return {items};
}


