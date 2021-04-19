import { useQuery } from "@apollo/client"
import { IPageInfo, IPortfolio, ISet } from "types/interface";
import { PORTFOLIO_FIND_BY_ID } from "../apollo/gql/portfolio";
import { portfolioFindById, portfolioFindByIdVariables } from "../types/api";

export interface IUsePortfolioFind {
    item: IPortfolio  | undefined;
    loading: boolean;
}

export const usePortfolioFind = (id?:string):IUsePortfolioFind => {
    const { data, loading } = useQuery<portfolioFindById, portfolioFindByIdVariables>(PORTFOLIO_FIND_BY_ID,{
        fetchPolicy: "network-only",
        variables: {
            id:id!
        },
        skip: !id
    });

    const item = data?.PortfolioFindById?.data || undefined;
    
    return { item,loading }
}