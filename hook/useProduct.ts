import { MutationHookOptions, useMutation } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { PRODUCT_POST_DELETE, PRODUCT_POST_LIST } from "../apollo/gql/product";
import { productDelete, productDeleteVariables } from "../types/api";
import { productFindById, productFindByIdVariables } from "../types/api";
import { IproductFindById } from "../types/interface";
import { QueryHookOptions, useQuery } from "@apollo/client"
import { PRODUCT_FIND_BY_ID } from "../apollo/gql/product";
import { Fpage, Fproduct, productList, productListVariables, _PortfolioSort, _ProductFilter, _ProductSort } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";
import { IListHook, ListInitOptions, useListQuery } from "./useListQuery";
import { PRODUCT_POST_UPDATE } from "../apollo/gql/product";
import { productUpdate, productUpdateVariables } from "../types/api";


export const useProductDelete = (options?: MutationHookOptions<productDelete,productDeleteVariables>) => {
    const [productUpdateMu, { loading: deleteLoading }] = useMutation<productDelete, productDeleteVariables>(PRODUCT_POST_DELETE, {
        refetchQueries: [getOperationName(PRODUCT_POST_LIST), getOperationName(PRODUCT_FIND_BY_ID) || ""],
        ...options
    });
    
    const productDelete = (variables: productDeleteVariables, onSucess?: () => void) => {
        productUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.ProductDelete.ok) {
                onSucess?.()
            }
        })
    }

    return {productDelete, deleteLoading}
}



export interface IUseProductFindById {
    product?: IproductFindById;
    loading: boolean;
}
export interface IuseProductFindByIdProp extends QueryHookOptions<productFindById,productFindByIdVariables> {
}

export const useProductFindById = ({
    ...options
}:IuseProductFindByIdProp):IUseProductFindById => {
    const { data, loading } = useQuery<productFindById, productFindByIdVariables>(PRODUCT_FIND_BY_ID, {
        ...options,
        nextFetchPolicy: "network-only",
        onCompleted: ({ProductFindById})=> {
            if(!ProductFindById.ok) {
                console.error(data?.ProductFindById.error);
                alert("잘못된 접근 입니다.");
            }
        }
    })

    const product = data?.ProductFindById?.data || undefined
    
    return { product, loading }
}

interface IuseItemListProp extends Partial<ListInitOptions<_ProductFilter, _ProductSort>> {
    options?: QueryHookOptions<productList, productListVariables>
}

export interface IuseProductList extends IListHook<_ProductFilter, _ProductSort> {
    items: Fproduct[];
    getLoading: boolean;
    pageInfo: Fpage;
}


export const useProductList = ({
    initialPageIndex = 1,
    initialSort = [_ProductSort.createdAt_desc],
    initialFilter = {},
    initialViewCount = 20,
    options = {}
}:IuseItemListProp = {}):IuseProductList => {
    const { variables: overrideVariables, ...ops } = options;
    const {filter,integratedVariable,setFilter,setPage,setSort,setViewCount,sort,viewCount} = useListQuery({
        initialFilter,
        initialPageIndex,
        initialSort,
        initialViewCount
    });
    const { data, loading:getLoading } = useQuery<productList, productListVariables>(PRODUCT_POST_LIST, {
        nextFetchPolicy: "cache-and-network",
        variables: {
            ...integratedVariable,
            ...overrideVariables
        },
        ...ops
    })
    
    const items = data?.ProductList.data || [];
    const pageInfo = data?.ProductList.page || DEFAULT_PAGE;
    
    return { pageInfo, filter, setPage, getLoading, setFilter, setSort, setViewCount, sort, viewCount, items }
}


export const useProductUpdate = (options?: MutationHookOptions<productUpdate,productUpdateVariables>) => {
    const [productUpdateMu, { loading: updateLoading }] = useMutation<productUpdate, productUpdateVariables>(PRODUCT_POST_UPDATE, {
        refetchQueries: [getOperationName(PRODUCT_POST_LIST), getOperationName(PRODUCT_FIND_BY_ID)],
        awaitRefetchQueries:true,
        ...options
    });
    
    const productUpdate = (variables: productUpdateVariables, onSucess?: () => void) => {
        productUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.ProductUpdate?.ok) {
                onSucess?.()
            }
        })
    }

    return {productUpdate, updateLoading}
}