import { NEWS_DELETE, NEWS_LIST, NEWS_CREATE, NEWS_UPDAET } from "../apollo/gql/news";
import { newsCreate, newsCreateVariables, newsDelete, newsDeleteVariables, newsFindById_NewsFindById_data, newsListVariables, newsList_NewsList_data } from "../types/api";
import { newsFindById, newsFindByIdVariables } from "../types/api";
import { NEWS_FIND_BY_ID } from "../apollo/gql/news";
import { newsList, _PortfolioSort, _NewsFilter, _NewsSort } from "../types/api";
import { newsUpdate, newsUpdateVariables } from "../types/api";
import { getRefetch } from "../utils/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";

export const useNewsFindById = generateFindQuery<newsFindById,newsFindByIdVariables,newsFindById_NewsFindById_data>("id",NEWS_FIND_BY_ID);
export const useNewsList = generateListQueryHook<_NewsFilter,_NewsSort,newsList,newsListVariables,newsList_NewsList_data>(NEWS_LIST, {initialSort: [_NewsSort.createdAt_asc]});
export const useNewsCreate = generateMutationHook<newsCreate,newsCreateVariables>(NEWS_CREATE,{...getRefetch(NEWS_FIND_BY_ID,NEWS_LIST)});
export const useNewsDelete = generateMutationHook<newsDelete,newsDeleteVariables>(NEWS_DELETE,{...getRefetch(NEWS_FIND_BY_ID,NEWS_LIST)});
export const useNewsUpdate = generateMutationHook<newsUpdate, newsUpdateVariables>(NEWS_UPDAET,{...getRefetch(NEWS_FIND_BY_ID,NEWS_LIST)});
