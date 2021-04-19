import { CATEGORY_CREATE, CATEGORY_DELETE, CATEGORY_FIND_BY_ID, CATEGORY_LIST, CATEGORY_UPDATE,  } from "../apollo/gql/category";
import { categoryCreate, categoryCreateVariables,  categoryDelete, categoryDeleteVariables, categoryFindById, categoryFindByIdVariables, categoryFindById_CategoryFindById_data, categoryList, categoryList_CategoryList_data, categoryUpdate, categoryUpdateVariables, } from "../types/api";
import { getRefetch } from "../utils/api";
import { generateFindQuery, generateMutationHook, generateQueryHook } from "../utils/query";

export const useCategoryList = generateQueryHook<categoryList, categoryList_CategoryList_data[], categoryList_CategoryList_data>(CATEGORY_LIST);
export const useCategoryFind = generateFindQuery<categoryFindById,categoryFindByIdVariables,categoryFindById_CategoryFindById_data>("id",CATEGORY_FIND_BY_ID)
export const useCategoryCreate = generateMutationHook<categoryCreate, categoryCreateVariables>(CATEGORY_CREATE,{...getRefetch(CATEGORY_LIST)})
export const useCategoryDelete = generateMutationHook<categoryDelete, categoryDeleteVariables>(CATEGORY_DELETE,{...getRefetch(CATEGORY_LIST)})
export const useCategoryUpdate = generateMutationHook<categoryUpdate, categoryUpdateVariables>(CATEGORY_UPDATE,{...getRefetch(CATEGORY_LIST,CATEGORY_FIND_BY_ID)})
