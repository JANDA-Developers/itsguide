import { QUESTION_DELETE, QUESTION_LIST, QUESTION_CREATE, QUESTION_UPDAET } from "../apollo/gql/question";
import { questionCreate, questionCreateVariables, questionDelete, questionDeleteVariables, questionFindById_QuestionFindById_data, questionList_QuestionList_data, questionUpdate, questionUpdateVariables, _INotificationHistoryItemSort } from "../types/api";
import { questionFindById, questionFindByIdVariables } from "../types/api";
import { QueryHookOptions } from "@apollo/client"
import { QUESTION_FIND_BY_ID } from "../apollo/gql/question";
import { questionList, _PortfolioSort, _QuestionFilter, _QuestionSort } from "../types/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";
import { getRefetch } from "../utils/api";

export interface IuseQuestionFindByIdProp extends QueryHookOptions<questionFindById,questionFindByIdVariables> {
}

export const useQuestionFindById = generateFindQuery<questionFindById,questionFindByIdVariables,questionFindById_QuestionFindById_data>("id",QUESTION_FIND_BY_ID);
export const useQuestionList = generateListQueryHook<_QuestionFilter,_QuestionSort,questionList,questionCreateVariables,questionList_QuestionList_data>(QUESTION_LIST,{initialSort:[_QuestionSort.createdAt_desc]});
export const useQuestionCreate = generateMutationHook<questionCreate,questionCreateVariables>(QUESTION_CREATE,{...getRefetch(QUESTION_FIND_BY_ID,QUESTION_LIST)});
export const useQuestionDelete = generateMutationHook<questionDelete,questionDeleteVariables>(QUESTION_DELETE,{...getRefetch(QUESTION_FIND_BY_ID,QUESTION_LIST)});
export const useQuestionUpdate = generateMutationHook<questionUpdate, questionUpdateVariables>(QUESTION_UPDAET,{...getRefetch(QUESTION_FIND_BY_ID,QUESTION_LIST)});


// export const useQuestionList = ({
//     initialPageIndex = 1,
//     initialSort = [_QuestionSort.createdAt_desc],
//     initialFilter = {},
//     initialViewCount = 20,
//     options = {}
// }:IuseItemListProp = {}):IUseQuestionList => {
//     const { variables: overrideVariables, ...ops } = options;
//     const {integratedVariable,...useList} = useListQuery({
//         initialFilter,
//         initialPageIndex,
//         initialSort,
//         initialViewCount
//     });
//     const { data, loading:getLoading } = useQuery<questionList, questionListVariables>(QUESTION_LIST, {
//         nextFetchPolicy: "network-only",
//         variables: {
//             ...integratedVariable,
//             ...overrideVariables
//         },
//         ...ops
//     })
    
//     const items = data?.QuestionList.data || [];
//     const pageInfo = data?.QuestionList.page || DEFAULT_PAGE;
    
//     return { pageInfo, getLoading, items, ...useList }
// }


// export const useQuestionUpdate = (options?: MutationHookOptions<questionUpdate,questionUpdateVariables>) => {
//     const [questionUpdateMu, { loading: updateLoading }] = useMutation<questionUpdate, questionUpdateVariables>(QUESTION_UPDAET, {
//         refetchQueries: [getOperationName(QUESTION_LIST) || ""],
//         ...options
//     });
    
//     const questionUpdate = (variables: questionUpdateVariables, onSucess?: () => void) => {
//         questionUpdateMu({
//             variables
//         }).then((data) => {
//             if (data.data?.QuestionUpdate?.ok) {
//                 onSucess?.()
//             }
//         })
//     }

//     return {questionUpdate, updateLoading}
// }


// export const useQuestionCreate = (options?: MutationHookOptions<questionCreate,questionCreateVariables>) => {
//     const [questionUpdateMu, { loading: createLoading }] = useMutation<questionCreate,questionCreateVariables>(QUESTION_CREATE, {
//         refetchQueries: [getOperationName(QUESTION_CREATE) || ""],
//         ...options
//     });
    
//     const questionCreate = async (variables: questionCreateVariables, onSucess?: () => void) => {
//         return await questionUpdateMu({
//             variables
//         }).then((data) => {
//             if (data.data?.QuestionCreate?.ok) {
//                 onSucess?.()
//             }
//             return data.data
//         })
//     }

//     return {questionCreate, createLoading}
// }