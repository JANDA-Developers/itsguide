import { ANSWER_CREATE, ANSWER_DELETE, ANSWER_UPDAET } from "../apollo/gql/answer";
import { QUESTION_FIND_BY_ID, QUESTION_LIST } from "../apollo/gql/question";
import {  answerDelete, answerDeleteVariables,  answerCreate, answerCreateVariables, answerUpdate, answerUpdateVariables } from "../types/api";
import { getRefetch } from "../utils/api";
import { generateMutationHook } from "../utils/query";

export const useAnswerCreate = generateMutationHook<answerCreate,answerCreateVariables>(ANSWER_CREATE, {
    ...getRefetch(QUESTION_LIST, QUESTION_FIND_BY_ID)
});
export const useAnswerUpdate = generateMutationHook<answerUpdate,answerUpdateVariables>(ANSWER_UPDAET, {
    ...getRefetch(QUESTION_LIST, QUESTION_FIND_BY_ID)
});
export const useAnswerDelete = generateMutationHook<answerDelete,answerDeleteVariables>(ANSWER_DELETE, {
    ...getRefetch(QUESTION_LIST, QUESTION_FIND_BY_ID)
});