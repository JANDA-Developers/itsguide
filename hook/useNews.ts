import { MutationHookOptions, useMutation } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { NEWS_DELETE, NEWS_LIST, NEWS_CREATE, NEWS_UPDAET } from "../apollo/gql/news";
import { newsCreate, newsCreateVariables, newsDelete, newsDeleteVariables } from "../types/api";
import { newsFindById, newsFindByIdVariables } from "../types/api";
import { QueryHookOptions, useQuery } from "@apollo/client"
import { NEWS_FIND_BY_ID } from "../apollo/gql/news";
import { Fpage, Fnews, newsList, newsListVariables, _PortfolioSort, _NewsFilter, _NewsSort } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";
import { IListHook, ListInitOptions, useListQuery } from "./useListQuery";
import { newsUpdate, newsUpdateVariables } from "../types/api";

export const useNewsDelete = (options?: MutationHookOptions<newsDelete,newsDeleteVariables>) => {
    const [newsUpdateMu, { loading: deleteLoading }] = useMutation<newsDelete, newsDeleteVariables>(NEWS_DELETE, {
        refetchQueries: [getOperationName(NEWS_LIST) || ""],
        ...options
    });
    
    const newsDelete = (variables: newsDeleteVariables, onSucess?: () => void) => {
        newsUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.NewsDelete.ok) {
                onSucess?.()
            }
        })
    }

    return {newsDelete, deleteLoading}
}



export interface IUseNewsFindById {
    news?: Fnews;
    loading: boolean;
}
export interface IuseNewsFindByIdProp extends QueryHookOptions<newsFindById,newsFindByIdVariables> {
}

export const useNewsFindById = (id?:string, {
    ...options
}:IuseNewsFindByIdProp = {}):IUseNewsFindById => {
    const { data, loading } = useQuery<newsFindById, newsFindByIdVariables>(NEWS_FIND_BY_ID, {
        ...options,
        skip:!id,
        nextFetchPolicy: "cache-and-network",
        onCompleted: ({NewsFindById})=> {
            if(!NewsFindById.ok) {
                console.error(data?.NewsFindById.error);
                alert("잘못된 접근 입니다.");
            }
        },
        variables: {
            id:id || ""
        }
    })

    const news = data?.NewsFindById?.data || undefined
    
    return { news, loading }
}

interface IuseItemListProp extends Partial<ListInitOptions<_NewsFilter, _NewsSort>> {
    options?: QueryHookOptions<newsList, newsListVariables>
}

export interface IUseNewsList extends IListHook<_NewsFilter, _NewsSort> {
    items: Fnews[];
    getLoading: boolean;
    pageInfo: Fpage;
}


export const useNewsList = ({
    initialPageIndex = 1,
    initialSort = [_NewsSort.createdAt_desc],
    initialFilter = {},
    initialViewCount = 20,
    options = {}
}:IuseItemListProp = {}):IUseNewsList => {
    const { variables: overrideVariables, ...ops } = options;
    const {filter,integratedVariable,setFilter,setPage,setSort,setViewCount,sort,viewCount} = useListQuery({
        initialFilter,
        initialPageIndex,
        initialSort,
        initialViewCount
    });
    const { data, loading:getLoading } = useQuery<newsList, newsListVariables>(NEWS_LIST, {
        nextFetchPolicy: "network-only",
        variables: {
            ...integratedVariable,
            ...overrideVariables
        },
        ...ops
    })
    
    const items = data?.NewsList.data || [];
    const pageInfo = data?.NewsList.page || DEFAULT_PAGE;
    
    return { pageInfo, filter, setPage, getLoading, setFilter, setSort, setViewCount, sort, viewCount, items }
}


export const useNewsUpdate = (options?: MutationHookOptions<newsUpdate,newsUpdateVariables>) => {
    const [newsUpdateMu, { loading: updateLoading }] = useMutation<newsUpdate, newsUpdateVariables>(NEWS_UPDAET, {
        refetchQueries: [getOperationName(NEWS_LIST) || ""],
        ...options
    });
    
    const newsUpdate = (variables: newsUpdateVariables, onSucess?: () => void) => {
        newsUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.NewsUpdate?.ok) {
                onSucess?.()
            }
        })
    }

    return {newsUpdate, updateLoading}
}


export const useNewsCreate = (options?: MutationHookOptions<newsCreate,newsCreateVariables>) => {
    const [newsUpdateMu, { loading: createLoading }] = useMutation<newsCreate,newsCreateVariables>(NEWS_CREATE, {
        refetchQueries: [getOperationName(NEWS_CREATE) || ""],
        ...options
    });
    
    const newsCreate = async (variables: newsCreateVariables, onSucess?: () => void) => {
        return await newsUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.NewsCreate?.ok) {
                onSucess?.()
            }
            return data.data
        })
    }

    return {newsCreate, createLoading}
}