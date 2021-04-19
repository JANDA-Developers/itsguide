import { SETTLEMENT_COMPLETE, SETTLEMENT_FIND_BY_ID, SETTLEMENT_LIST, SETTLEMENT_REQUEST } from "../apollo/gql/settlement";
import { settlementList, settlementListVariables, Fsettlement, _SettlementFilter, _SettlementSort, settlementRequest, settlementRequestVariables, settlementComplete, settlementCompleteVariables, settlementFindById, settlementFindByIdVariables, settlementFindById_SettlementFindById_data, settlementList_SettlementList_data, settlementReject, settlementRejectVariables } from "../types/api";
import { getRefetch } from "../utils/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";

export const useSettlementFindById = generateFindQuery<settlementFindById, settlementFindByIdVariables, settlementFindById_SettlementFindById_data>("_id", SETTLEMENT_FIND_BY_ID);
export const useSettlementList = generateListQueryHook<_SettlementFilter, _SettlementSort, settlementList, settlementListVariables, settlementList_SettlementList_data>(SETTLEMENT_LIST, { initialSort: [_SettlementSort.createdAt_desc] });
export const useSettlementsRequest = generateMutationHook<settlementRequest, settlementRequestVariables>(SETTLEMENT_REQUEST, {
    onCompleted: ({ SettlementRequest }) => {
        if (SettlementRequest.ok) {
            alert("정산요청완료");
        }
    },
    ...getRefetch(SETTLEMENT_LIST)
});
export const useSettlementsComplete = generateMutationHook<settlementComplete, settlementCompleteVariables>(SETTLEMENT_COMPLETE, {
    onCompleted: ({ SettlementComplete }) => {
        if (SettlementComplete.ok) {
            alert("정산완료");
        }
    },
    ...getRefetch(SETTLEMENT_LIST)
});
export const useSettlementsReject = generateMutationHook<settlementReject, settlementRejectVariables>(SETTLEMENT_REQUEST, {
    onCompleted: ({ SettlementReject }) => {
        if (SettlementReject.ok) {
            alert("거절완료");
        }
    },
    ...getRefetch(SETTLEMENT_LIST)
});



export const useSettlementController = () => {
    const [settlementComplete, { loading:completeLoading }] = useSettlementsComplete({
        onCompleted: ({ SettlementComplete }) => {
            if (SettlementComplete.ok) alert("정산요청이 완료 되었습니다.");
        }
    })
    const [settlementRject, {loading:rejectLoading}] = useSettlementsReject({
        onCompleted: ({ SettlementReject }) => {
            if (SettlementReject.ok) alert("정산 요청이 거절 처리 되었습니다.")
        }
    })
    const [settlementRquest, {loading: requestLoading}] = useSettlementsRequest({
        onCompleted: ({ SettlementRequest }) => {
            if (SettlementRequest.ok) alert("정산 요청이 처리되었습니다.")
        }
    })

    const totalLoading = completeLoading || rejectLoading || requestLoading;

    return {settlementComplete, settlementRject, settlementRquest, totalLoading}
}