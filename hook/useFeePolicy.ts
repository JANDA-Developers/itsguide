import { FEE_POLICY_UPDATE, FEE_POLIY_FIND_ONE } from "../apollo/gql/feePolicy";
import { feePolicyUpdateVariables,feePolicyUpdate, feePolicyFindOne, feePolicyFindOne_FeePolicyFindOne_data,  } from "../types/api";
import { getRefetch } from "../utils/api";
import {  generateMutationHook, generateQueryHook } from "../utils/query";

export const useFeePolicy = generateQueryHook<feePolicyFindOne,feePolicyFindOne_FeePolicyFindOne_data>(FEE_POLIY_FIND_ONE);
export const useFeePolicyUpdate = generateMutationHook<feePolicyUpdate,feePolicyUpdateVariables>(FEE_POLICY_UPDATE,{...getRefetch(FEE_POLIY_FIND_ONE)});