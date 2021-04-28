import { MutationHookOptions, useMutation } from "@apollo/client";
import {
    PRODUCT_FIND_BY_ID_FOR_SELLER,
    PRODUCT_DELETE,
    PRODUCT_LIST,
    ACCEPT_PRODUCT_CREATE,
    ACCEPT_PRODUCT_UPDATE,
    REJECT_PRODUCT_UPDATE,
    REJECT_PRODUCT_CREATE,
    PRODUCT_POST_UPDATE_REQ,
    TRAVEL_CANCEL,
    TRAVEL_DETERMINE,
    TRAVEL_WITDRWAL,
    PRODUCT_ELSE_DENY,
    PRODUCT_ELSE_ACCEPT,
    PRODUCT_ELSE_REQ,
    PRODUCTS_CREATE,
} from "../apollo/gql/product";
import {
    productCreateAccept,
    productUpdateAccept,
    productDelete,
    productDeleteVariables,
    productFindByIdForSeller,
    productFindByIdForSellerVariables,
    productFindByIdForSeller_ProductFindByIdForSeller_data,
    productFindById_ProductFindById_data,
    productList_ProductList_data,
    productUpdateReject,
    _BookingFilter,
    _BookingSort,
    _PortfolioFilter,
    productCreateReject,
    productUpdateAcceptVariables,
    productCreateAcceptVariables,
    productUpdateRejectVariables,
    ProductStatus,
    productCreateRejectVariables,
    productUpdateReq,
    productUpdateReqVariables,
    travelDetermine,
    travelDetermineVariables,
    travelCancel,
    travelCancelVariables,
    travelWithdrwal,
    travelWithdrwalVariables,
    UserRole,
    productCreate,
    productCreateVariables,
} from "../types/api";
import { productFindById, productFindByIdVariables } from "../types/api";
import { IlistQueryInit } from "../types/interface";
import { PRODUCT_FIND_BY_ID } from "../apollo/gql/product";
import {
    productReOpenDeny,
    productReOpenDenyVariables,
    productElseReq,
    productElseReqVariables,
    productElseAccept,
    productElseAcceptVariables,
    Fpage,
    Fproduct,
    productList,
    productListVariables,
    _PortfolioSort,
    _ProductFilter,
    _ProductSort,
} from "../types/api";
import { IListHook } from "./useListQuery";
import { PRODUCT_POST_UPDATE } from "../apollo/gql/product";
import { productUpdate, productUpdateVariables } from "../types/api";
import { getRefetch } from "../utils/api";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
} from "../utils/query";
import { useContext } from "react";
import { AppContext } from "../pages/_app";

export const useProductCreate = generateMutationHook<
    productCreate,
    productCreateVariables
>(PRODUCTS_CREATE, { ...getRefetch(PRODUCT_LIST) });
export const useProductDelete = generateMutationHook<
    productDelete,
    productDeleteVariables
>(PRODUCT_DELETE, { ...getRefetch(PRODUCT_LIST) });
export const useProductFindById = generateFindQuery<
    productFindById,
    productFindByIdVariables,
    productFindById_ProductFindById_data
>("_id", PRODUCT_FIND_BY_ID);
export const useProductFindByIdForSeller = generateFindQuery<
    productFindByIdForSeller,
    productFindByIdForSellerVariables,
    productFindByIdForSeller_ProductFindByIdForSeller_data
>("_id", PRODUCT_FIND_BY_ID_FOR_SELLER);

export interface IproductListInit
    extends IlistQueryInit<
        _ProductFilter,
        _ProductSort,
        productList,
        productListVariables
    > {}
export interface IuseProductList
    extends IListHook<_ProductFilter, _ProductSort> {
    items: Fproduct[];
    getLoading: boolean;
    pageInfo: Fpage;
}

export const useProductList = generateListQueryHook<
    _ProductFilter,
    _ProductSort,
    productList,
    productListVariables,
    productList_ProductList_data
>(PRODUCT_LIST, { initialSort: [_ProductSort.createdAt_desc] });

// export const useProductUpdate = (options?: MutationHookOptions<productUpdate,productUpdateVariables>) => {
//     const [productUpdateMu, { loading: updateLoading }] = useMutation<productUpdate, productUpdateVariables>(PRODUCT_POST_UPDATE, {
//         awaitRefetchQueries:true,
//         ...getRefetch(PRODUCT_LIST,PRODUCT_FIND_BY_ID),
//         ...options
//     });

//     const productUpdate = (variables: productUpdateVariables, onSucess?: () => void) => {
//         productUpdateMu({
//             variables
//         }).then((data) => {
//             if (data.data?.ProductUpdate?.ok) {
//                 onSucess?.()
//             }
//         })
//     }

//     return {productUpdate, updateLoading}
// }

export const useProductUpdate = generateMutationHook<
    productUpdate,
    productUpdateVariables
>(PRODUCT_POST_UPDATE, {
    awaitRefetchQueries: true,
    closeEffectAfterLoading: false,
    ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID),
});

export const useProductUpdateReq = generateMutationHook<
    productUpdateReq,
    productUpdateReqVariables
>(PRODUCT_POST_UPDATE_REQ, {
    ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID),
});

export const useAcceptCreateProduct = generateMutationHook<
    productCreateAccept,
    productCreateAcceptVariables
>(ACCEPT_PRODUCT_CREATE, {
    ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID),
});

export const useAcceptUpdateProduct = generateMutationHook<
    productUpdateAccept,
    productUpdateAcceptVariables
>(ACCEPT_PRODUCT_UPDATE, {
    ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID),
});

export const useRejectCreateProduct = generateMutationHook<
    productCreateReject,
    productCreateRejectVariables
>(REJECT_PRODUCT_CREATE, {
    ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID),
});
export const useRejectUpdateProduct = generateMutationHook<
    productUpdateReject,
    productUpdateRejectVariables
>(REJECT_PRODUCT_UPDATE, {
    ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID),
});

export const useTravelDetermine = generateMutationHook<
    travelDetermine,
    travelDetermineVariables
>(TRAVEL_DETERMINE, {
    ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID),
});
export const useTravelCancel = generateMutationHook<
    travelCancel,
    travelCancelVariables
>(TRAVEL_CANCEL, {
    ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID),
});

export const useTravelWithdrwal = generateMutationHook<
    travelWithdrwal,
    travelWithdrwalVariables
>(TRAVEL_WITDRWAL, {
    ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID),
});

export const useProductReOpenDeny = generateMutationHook<
    productReOpenDeny,
    productReOpenDenyVariables
>(PRODUCT_ELSE_DENY, {
    ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID),
});

export const useProductReOpenAccept = generateMutationHook<
    productElseAccept,
    productElseAcceptVariables
>(PRODUCT_ELSE_ACCEPT, {
    ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID),
});

export const useProductReOpenReq = generateMutationHook<
    productElseReq,
    productElseReqVariables
>(PRODUCT_ELSE_REQ, {
    ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID),
});

export const openListFilter = {
    isOpen_eq: true,
    status_in: [ProductStatus.OPEN],
};

export type TUseProductController = ReturnType<typeof useProductController>;
export const useProductController = (onSucess: () => void, role: UserRole) => {
    const [productElseReq, { loading: elseReqLoading }] = useProductReOpenReq({
        onCompleted: ({ ProductReOpenReq }) => {
            if (ProductReOpenReq.ok) {
                alert("요청이 접수 되었습니다");
                onSucess();
            }
        },
    });

    const [
        productReOpenDeny,
        { loading: elseDeny_loading },
    ] = useProductReOpenDeny({
        onCompleted: ({ ProductReOpenDeny }) => {
            if (ProductReOpenDeny.ok) {
                alert("상품 요청이 거절 되었습니다.");
                onSucess();
            }
        },
    });

    const [
        productElseAccept,
        { loading: elseAccept_loading },
    ] = useProductReOpenAccept({
        onCompleted: ({ ProductReOpenAccept }) => {
            if (ProductReOpenAccept.ok) {
                alert("변경 요청이 처리되었습니다.");
                onSucess();
            }
        },
    });
    const [productDelete, { loading: delete_loading }] = useProductDelete({
        onCompleted: ({ ProductDelete }) => {
            if (ProductDelete.ok) {
                alert("상품이 삭제되었습니다.");
                onSucess();
            }
        },
    });

    const [
        tarvelDetermine,
        { loading: determine_loading },
    ] = useTravelDetermine({
        onCompleted: ({ TravelDetermine }) => {
            if (TravelDetermine.ok) {
                alert("출발이 결정 되었습니다.");
                onSucess();
            }
        },
    });

    const [
        travelWithdrwal,
        { loading: widthrwal_loading },
    ] = useTravelWithdrwal({
        onCompleted: ({ TravelWithdrwal }) => {
            if (TravelWithdrwal.ok) {
                alert("출발이 취소 되었습니다.");
                onSucess();
            }
        },
    });

    const [travelCancel, { loading: cancel_loading }] = useTravelCancel({
        onCompleted: ({ TravelCancel }) => {
            if (TravelCancel.ok) {
                alert("상품이 취소 되었습니다.");
                onSucess();
            }
        },
    });

    const [acceptCreate, { loading: accept_loading }] = useAcceptCreateProduct({
        onCompleted: ({ ProductCreateAccept }) => {
            if (ProductCreateAccept.ok) {
                alert("상품 생성 요청이 허용 되었습니다.");
                onSucess();
            }
        },
    });

    const [rejectCreate, { loading: reject_loading }] = useRejectCreateProduct({
        onCompleted: ({ ProductCreateReject }) => {
            if (ProductCreateReject.ok) {
                alert("상품 생성이 거절처리 되었습니다.");
                onSucess();
            }
        },
    });
    const [acceptUpdate, { loading: update_loading }] = useAcceptUpdateProduct({
        onCompleted: ({ ProductUpdateAccept }) => {
            if (ProductUpdateAccept.ok) {
                alert("상품 업데이트가 승인 되었습니다.");
                onSucess();
            }
        },
    });
    const [
        rejectUpdate,
        { loading: updateReject_loading },
    ] = useRejectUpdateProduct({
        onCompleted: ({ ProductUpdateReject }) => {
            if (ProductUpdateReject.ok) {
                alert("상품 업데이트가 거절처리 되었습니다.");
                onSucess();
            }
        },
    });

    const loading =
        widthrwal_loading ||
        widthrwal_loading ||
        determine_loading ||
        updateReject_loading ||
        update_loading ||
        reject_loading ||
        accept_loading ||
        delete_loading ||
        elseReqLoading ||
        elseDeny_loading ||
        elseAccept_loading ||
        cancel_loading;

    return {
        productReOpenDeny,
        productElseAccept,
        productElseReq,
        productDelete,
        rejectUpdate,
        acceptUpdate,
        rejectCreate,
        acceptCreate,
        travelCancel,
        travelWithdrwal,
        tarvelDetermine,
        loading,
    };
};

export const useFindProductsByGroup = (groupCode: string) => {
    const { isManager, isSeller } = useContext(AppContext);
    const result = useProductList(
        {},
        {
            variables: {
                pageInput: {
                    cntPerPage: 99,
                    page: 1,
                },
                filter: {
                    ...openListFilter,
                    isOpen_eq: isManager || isSeller ? undefined : true,
                    groupCode_eq: groupCode,
                },
            },
        }
    );

    const productGroupList: {
        _id: string;
        label: string;
        groupCode: string;
        date: string;
    }[] = [];

    result.items?.forEach((p) => {
        if (!productGroupList.find((g) => g.groupCode === p.groupCode)) {
            productGroupList.push({
                _id: p._id,
                groupCode: p.groupCode,
                label: p.title,
                date: p.startDate,
            });
        }
    });

    return { ...result, productGroupList };
};
