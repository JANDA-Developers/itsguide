import { PRODUCT_FIND_BY_ID, PRODUCT_LIST } from "../apollo/gql/product";
import {
    PRODUCTREVIEW_CONFIRM,
    PRODUCTREVIEW_CREATE,
    PRODUCTREVIEW_DELETE,
    PRODUCTREVIEW_UPDAET,
} from "../apollo/gql/review";
import {
    PRODUCT_REVIEW_FIND_BY_ID,
    PRODUCT_REVIEW_LIST,
} from "../apollo/gql/review";
import {
    productreviewConfirm,
    productreviewConfirmVariables,
    productreviewDelete,
    productreviewDeleteVariables,
    productreviewCreate,
    productreviewCreateVariables,
    productreviewUpdate,
    productreviewUpdateVariables,
    productReviewFindById,
    productReviewFindByIdVariables,
    productReviewFindById_ProductReviewFindById_data,
} from "../types/api";
import { getRefetch } from "../utils/api";
import { generateFindQuery, generateMutationHook } from "../utils/query";

export const useProductReviewConfirm = generateMutationHook<
    productreviewConfirm,
    productreviewConfirmVariables
>(PRODUCTREVIEW_CONFIRM, {
    ...getRefetch(
        PRODUCT_REVIEW_LIST,
        PRODUCT_LIST,
        PRODUCT_FIND_BY_ID,
        PRODUCT_REVIEW_FIND_BY_ID
    ),
});
export const useProductReviewCreate = generateMutationHook<
    productreviewCreate,
    productreviewCreateVariables
>(PRODUCTREVIEW_CREATE, {
    ...getRefetch(
        PRODUCT_REVIEW_LIST,
        PRODUCT_LIST,
        PRODUCT_FIND_BY_ID,
        PRODUCT_REVIEW_FIND_BY_ID
    ),
});
export const useProductReviewUpdate = generateMutationHook<
    productreviewUpdate,
    productreviewUpdateVariables
>(PRODUCTREVIEW_UPDAET, {
    ...getRefetch(
        PRODUCT_REVIEW_LIST,
        PRODUCT_LIST,
        PRODUCT_FIND_BY_ID,
        PRODUCT_REVIEW_FIND_BY_ID
    ),
});
e;
export const useProductReviewDelete = generateMutationHook<
    productreviewDelete,
    productreviewDeleteVariables
>(PRODUCTREVIEW_DELETE, {
    ...getRefetch(
        PRODUCT_LIST,
        PRODUCT_REVIEW_LIST,
        PRODUCT_FIND_BY_ID,
        PRODUCT_REVIEW_FIND_BY_ID
    ),
});
export const useProductReviewFindById = generateFindQuery<
    productReviewFindById,
    productReviewFindByIdVariables,
    productReviewFindById_ProductReviewFindById_data
>("id", PRODUCT_REVIEW_FIND_BY_ID);
