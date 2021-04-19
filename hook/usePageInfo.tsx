import { useQuery } from "@apollo/client"
import { pageInfoRead, pageInfoReadVariables, pageInfoRead_PageInfoRead, pageInfoRead_PageInfoRead_data, sellerFindByKey, sellerFindByKeyVariables, sellerFindByKey_SellerFindByKeyPublic_data, sellerIdlistPublic, userFindById } from "types/api"
import { TPageKeys } from "types/interface"
import { GraphQLClient } from 'graphql-request';
import { SERVER_URI } from "apollo/uri";
import { PAGE_INFO_READ } from "../apollo/gql/queries";
import { generateFindQuery, generateQueryHook } from "../utils/query";
import { SELLER_FIND_BY_KEY, SELLER_ID_LIST, SELLER_LIST_PUBLIC, USER_FIND_BY_ID } from "../apollo/gql/user";


// export const usePageInfo = async (key: TPageKeys) => {
//     const { PageInfoRead } = await request<pageInfoRead, pageInfoReadVariables>(SERVER_URI, PAGE_INFO_READ, { key });
//     const { data } = PageInfoRead;
//     return { data };
// }

export const usePageInfoRead = generateFindQuery<pageInfoRead, pageInfoReadVariables, pageInfoRead_PageInfoRead_data>("key", PAGE_INFO_READ)
export const useSellerFindByKey = generateQueryHook<sellerFindByKey, sellerFindByKey_SellerFindByKeyPublic_data, sellerFindByKeyVariables>(SELLER_FIND_BY_KEY, { queryName: "SellerFindByKeyPublic" });

export const graphQLClient = new GraphQLClient(SERVER_URI, {
    credentials: 'include',
    mode: 'cors',
    cache: "reload",
})
export type TUsePageInfo = {
    data: pageInfoRead_PageInfoRead_data;
}
export const usePageInfo = async (key: TPageKeys) => {
    const graphQLClient = new GraphQLClient(SERVER_URI, {
        credentials: 'include',
        mode: 'cors',
        cache: "reload",
    })

    const { PageInfoRead } = await graphQLClient.request<pageInfoRead, pageInfoReadVariables>(PAGE_INFO_READ, { key })

    console.log({ PageInfoRead });
    const { data } = PageInfoRead;
    return { data };
}


export const userFindByKey = async (key: string, value: string) => {
    const { SellerFindByKeyPublic: { data } } = await graphQLClient.request<sellerFindByKey, sellerFindByKeyVariables>(SELLER_FIND_BY_KEY, { key, value })
    return { data };
}

//TODO 나중에 퍼블릭 권한 변경
export const userFindServerSide = async (id: string) => {
    const { UserFindById: { data } } = await graphQLClient.request<userFindById>(USER_FIND_BY_ID)
    return { data };
}

//TODO 나중에 퍼블릭 권한 변경
export const sellerIdListForPublic = async () => {
    const { SellerListPublic: { data } } = await graphQLClient.request<sellerIdlistPublic>(SELLER_ID_LIST)
    return { data };
}

export const getStaticPathsOfProduct = async (key: TPageKeys) => {
    const { PageInfoRead } = await graphQLClient.request<pageInfoRead, pageInfoReadVariables>(PAGE_INFO_READ, { key })
    const { data } = PageInfoRead;
    return { data };
}

export const usePageFindByKey = generateFindQuery<pageInfoRead, pageInfoReadVariables, pageInfoRead_PageInfoRead_data>("key", PAGE_INFO_READ);
