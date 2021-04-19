import { QNA_DELETE, QNA_LIST, QNA_CREATE, QNA_UPDAET } from "../apollo/gql/qna";
import { qnaCreate, qnaCreateVariables, qnaDelete, qnaDeleteVariables, qnaFindById_QnaFindById_data, qnaListVariables, qnaList_QnaList_data } from "../types/api";
import { qnaFindById, qnaFindByIdVariables } from "../types/api";
import { QNA_FIND_BY_ID } from "../apollo/gql/qna";
import { qnaList, _PortfolioSort, _QnaFilter, _QnaSort } from "../types/api";
import { qnaUpdate, qnaUpdateVariables } from "../types/api";
import { getRefetch } from "../utils/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";

export const useQnaFindById = generateFindQuery<qnaFindById,qnaFindByIdVariables,qnaFindById_QnaFindById_data>("_id",QNA_FIND_BY_ID);
export const useQnaList = generateListQueryHook<_QnaFilter,_QnaSort,qnaList,qnaListVariables,qnaList_QnaList_data>(QNA_LIST, {initialSort: [_QnaSort.createdAt_desc]});
export const useQnaCreate = generateMutationHook<qnaCreate,qnaCreateVariables>(QNA_CREATE,{...getRefetch(QNA_FIND_BY_ID,QNA_LIST)});
export const useQnaDelete = generateMutationHook<qnaDelete,qnaDeleteVariables>(QNA_DELETE,{...getRefetch(QNA_FIND_BY_ID,QNA_LIST)});
export const useQnaUpdate = generateMutationHook<qnaUpdate, qnaUpdateVariables>(QNA_UPDAET,{...getRefetch(QNA_FIND_BY_ID,QNA_LIST)});
