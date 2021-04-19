import { GROUP_CREATE, GROUP_DELETE, GROUP_FIND_BY_KEY, GROUP_LIST, GROUP_UPDATE,  } from "../apollo/gql/group";
import { groupCreate, groupCreateVariables,  groupDelete, groupDeleteVariables, groupFindByKey,  groupList, groupList_GroupList_data, groupUpdate, groupUpdateVariables, groupFindByKey_GroupFindByKey_data,groupFindByKeyVariables} from "../types/api";
import { getRefetch } from "../utils/api";
import { generateFindQuery, generateMutationHook, generateQueryHook } from "../utils/query";

export const useGroupList = generateQueryHook<groupList, groupList_GroupList_data[]>(GROUP_LIST);
export const useGroupFind = generateFindQuery<groupFindByKey,groupFindByKeyVariables,groupFindByKey_GroupFindByKey_data>("key",GROUP_FIND_BY_KEY)
export const useGroupCreate = generateMutationHook<groupCreate, groupCreateVariables>(GROUP_CREATE,{...getRefetch(GROUP_LIST)})
export const useGroupDelete = generateMutationHook<groupDelete, groupDeleteVariables>(GROUP_DELETE,{...getRefetch(GROUP_LIST)})
export const useGroupUpdate = generateMutationHook<groupUpdate, groupUpdateVariables>(GROUP_UPDATE,{...getRefetch(GROUP_LIST,GROUP_FIND_BY_KEY)})
