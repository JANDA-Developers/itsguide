import { gql } from "@apollo/client";
import {
    F_BOOKING,
    F_CATEGORY,
    F_PAGE,
    F_PAYMENT,
    F_PRODUCT,
    F_REQUEST_HISTORY,
    F_USER,
} from "./fragments";
import { F_QUESTION } from "./question";
import { F_PRODUCT_REVIEW } from "./review";
import { F_SETTLEMENT } from "./settlement";

export const PRODUCTS_CREATE = gql`
    mutation productCreate($params: ProductCreateInput!, $groupCode: String) {
        ProductCreate(params: $params, groupCode: $groupCode) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                _id
            }
        }
    }
`;

export const ACCEPT_PRODUCT_CREATE = gql`
    mutation productCreateAccept($ProductId: String!) {
        ProductCreateAccept(ProductId: $ProductId) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                _id
            }
        }
    }
`;

export const ACCEPT_PRODUCT_UPDATE = gql`
    mutation productUpdateAccept($ProductId: String!) {
        ProductUpdateAccept(ProductId: $ProductId) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                _id
            }
        }
    }
`;

export const REJECT_PRODUCT_CREATE = gql`
    mutation productCreateReject($ProductId: String!, $reason: String!) {
        ProductCreateReject(ProductId: $ProductId, reason: $reason) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                _id
            }
        }
    }
`;

export const REJECT_PRODUCT_UPDATE = gql`
    mutation productUpdateReject($ProductId: String!, $reason: String!) {
        ProductUpdateReject(ProductId: $ProductId, reason: $reason) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                _id
            }
        }
    }
`;

export const PRODUCT_POST_UPDATE = gql`
    mutation productUpdate(
        $params: ProductUpdateInput!
        $_id: String!
        $reason: String!
    ) {
        ProductUpdate(params: $params, _id: $_id, reason: $reason) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                _id
            }
        }
    }
`;

export const PRODUCT_POST_UPDATE_REQ = gql`
    mutation productUpdateReq(
        $params: ProductUpdateReqInput!
        $_id: String!
        $reason: String!
    ) {
        ProductUpdateReq(params: $params, reason: $reason, _id: $_id) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                _id
            }
        }
    }
`;

export const PRODUCT_DELETE = gql`
    mutation productDelete($id: String!) {
        ProductDelete(id: $id) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                ...Fproduct
            }
        }
    }
    ${F_PRODUCT}
`;

export const PRODUCT_LIST = gql`
    query productList(
        $sort: [_ProductSort!]
        $filter: _ProductFilter
        $pageInput: pageInput!
    ) {
        ProductList(sort: $sort, pageInput: $pageInput, filter: $filter) {
            ok
            error {
                location
                severity
                code
                message
            }
            page {
                ...Fpage
            }
            data {
                ...Fproduct
                bookings {
                    _id
                    status
                }
                author {
                    ...Fuser
                }
                category {
                    ...Fcategory
                }
            }
        }
    }
    ${F_CATEGORY}
    ${F_USER}
    ${F_PRODUCT}
    ${F_PAGE}
`;

// export const PRODUCT_LIST_MINIMUM = gql`
// query productList(
//     $sort: [_ProductSort!]
//     $filter: _ProductFilter
//     $pageInput: pageInput!
// ) {
//   ProductList(
//     sort: $sort
//     pageInput: $pageInput
//     filter: $filter
//   ) {
//     ok
//     error {
//       location
//       severity
//       code
//       message
//     }
//     page {
//       ...Fpage
//     }
//     data  {
//       ...Fproduct
//     }
//   }
// }
// ${F_USER}
// ${F_PRODUCT}
// ${F_PAGE}
// `

export const PRODUCT_FIND_BY_ID = gql`
    query productFindById($_id: String!) {
        ProductFindById(_id: $_id) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                ...Fproduct
                questionIds
                peopleCount
                productReview {
                    ...FproductReview
                }
                author {
                    ...Fuser
                    description
                }
                category {
                    ...Fcategory
                }
                questions {
                    ...Fquestion
                }
            }
        }
    }
    ${F_CATEGORY}
    ${F_PRODUCT_REVIEW}
    ${F_USER}
    ${F_QUESTION}
    ${F_PRODUCT}
`;

export const PRODUCT_FIND_BY_ID_FOR_SELLER = gql`
    query productFindByIdForSeller($_id: String!) {
        ProductFindByIdForSeller(_id: $_id) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                ...Fproduct
                author {
                    ...Fuser
                }
                requestHistory {
                    ...FrequestHistory
                }
                category {
                    _id
                    label
                }
                settlement {
                    ...Fsettlement
                }
                peopleCount
                bookings {
                    booker {
                        ...Fuser
                    }
                    ...Fbooking
                    payment {
                        ...Fpayment
                    }
                }
            }
        }
    }
    ${F_REQUEST_HISTORY}
    ${F_SETTLEMENT}
    ${F_USER}
    ${F_PAYMENT}
    ${F_BOOKING}
    ${F_PRODUCT}
`;

export const TRAVEL_CANCEL = gql`
    mutation travelCancel($reason: String!, $ProductId: String!) {
        TravelCancel(reason: $reason, ProductId: $ProductId) {
            ok
            error {
                location
                severity
                code
                message
            }
        }
    }
`;

export const TRAVEL_DETERMINE = gql`
    mutation travelDetermine($message: String!, $ProductId: String!) {
        TravelDetermine(message: $message, ProductId: $ProductId) {
            ok
            error {
                location
                severity
                code
                message
            }
        }
    }
`;

export const TRAVEL_WITDRWAL = gql`
    mutation travelWithdrwal($reason: String!, $ProductId: String!) {
        TravelWithdrwal(reason: $reason, ProductId: $ProductId) {
            ok
            error {
                location
                severity
                code
                message
            }
        }
    }
`;

export const PRODUCT_ELSE_REQ = gql`
    mutation productElseReq(
        $ProductId: String!
        $req: ProductReOpenReq!
        $reason: String!
    ) {
        ProductReOpenReq(ProductId: $ProductId, req: $req, reason: $reason) {
            ok
            error {
                location
                severity
                code
                message
            }
        }
    }
`;

export const PRODUCT_ELSE_ACCEPT = gql`
    mutation productElseAccept($ProductId: String!) {
        ProductReOpenAccept(ProductId: $ProductId) {
            ok
            error {
                location
                severity
                code
                message
            }
        }
    }
`;

export const PRODUCT_ELSE_DENY = gql`
    mutation productReOpenDeny($ProductId: String!, $reason: String!) {
        ProductReOpenDeny(ProductId: $ProductId, reason: $reason) {
            ok
            error {
                location
                severity
                code
                message
            }
        }
    }
`;
