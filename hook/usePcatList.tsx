import { useQuery } from "@apollo/client"
import { portfolioList, portfolioListVariables, pcategoryList_pCategoryList_data, pcategoryList } from "types/api"
import { PCAT_LIST } from "../apollo/gql/queries";


interface IUsePcategory {
    pcategories: pcategoryList_pCategoryList_data[];
    loading: boolean;
}

export const usePcategory = (): IUsePcategory => {
    const { data, loading } = useQuery<pcategoryList>(PCAT_LIST, {
        variables: {
            pageInput: {
                cntPerPage: 1,
                page: 20
            }
        }
    })

    const pcategories = data?.pCategoryList?.data || [];

    return { pcategories, loading }

}