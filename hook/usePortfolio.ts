import { PORTFOLIO_CREATE, PORTFOLIO_DELETE, PORTFOLIO_FIND_BY_ID, PORTFOLIO_UPDAET, PORT_FOLIO_LIST } from "../apollo/gql/portfolio";
import { portfolioCreate, portfolioCreateVariables,  portfolioDelete, portfolioDeleteVariables, portfolioFindById, portfolioFindByIdVariables, portfolioFindById_PortfolioFindById_data, portfolioList, portfolioListVariables, portfolioList_PortfolioList_data, portfolioUpdate, portfolioUpdateVariables, _PortfolioFilter, _PortfolioSort } from "../types/api";
import { getRefetch } from "../utils/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";

export const usePortfolioList = generateListQueryHook<_PortfolioFilter,_PortfolioSort,portfolioList,portfolioListVariables, portfolioList_PortfolioList_data>(PORT_FOLIO_LIST,{ initialSort:[_PortfolioSort.createdAt_desc]});
export const usePortfolioFind = generateFindQuery<portfolioFindById,portfolioFindByIdVariables,portfolioFindById_PortfolioFindById_data>("id",PORTFOLIO_FIND_BY_ID)
export const useProtfolioCreate = generateMutationHook<portfolioCreate, portfolioCreateVariables>(PORTFOLIO_CREATE,{...getRefetch(PORT_FOLIO_LIST)})
export const useProtfolioDelete = generateMutationHook<portfolioDelete, portfolioDeleteVariables>(PORTFOLIO_DELETE,{...getRefetch(PORT_FOLIO_LIST)})
export const useProtfolioUpdate = generateMutationHook<portfolioUpdate, portfolioUpdateVariables>(PORTFOLIO_UPDAET,{...getRefetch(PORT_FOLIO_LIST,PORTFOLIO_FIND_BY_ID)})
