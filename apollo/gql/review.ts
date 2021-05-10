import { gql } from "@apollo/client";
import { F_ANSWER } from "./answer";
import { F_FILE, F_PRODUCT, F_USER } from "./fragments";

export const F_PRODUCT_REVIEW = gql`
    fragment FproductReview on ProductReview {
        _id
        createdAt
        updatedAt
        isDelete
        title
        isConfiremd
        contents
        author {
            ...Fuser
        }
        num
        boardTypeName
        isNotice
        isOpen
        summary
        subTitle
        keyWards
        viewCount
        likeCount
        slug
        authorName
        productName
        attachFiles {
            ...Ffile
        }
        productAuthorName
        productAuthorId
        productCode
        groupCode
        rating
    }
    ${F_USER}
    ${F_FILE}
`;

export const PRODUCT_REVIEW_FIND_BY_ID = gql`
    query productReviewFindById($id: String!) {
        ProductReviewFindById(_id: $id) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                answers {
                    ...Fanswer
                }
                ...FproductReview
            }
            nextId
            beforeId
        }
    }
    ${F_ANSWER}
    ${F_PRODUCT_REVIEW}
`;
export const PRODUCT_REVIEW_LIST = gql`
    query productreviewList(
        $sort: [_ProductReviewSort!]
        $filter: _ProductReviewFilter
        $pageInput: pageInput!
    ) {
        ProductReviewList(sort: $sort, pageInput: $pageInput, filter: $filter) {
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
                ...FproductReview
            }
        }
    }
    ${F_PRODUCT_REVIEW}
`;

export const PRODUCTREVIEW_CREATE = gql`
    mutation productreviewCreate($params: ProductReviewCreateInput!) {
        ProductReviewCreate(params: $params) {
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

export const PRODUCTREVIEW_CONFIRM = gql`
    mutation productreviewConfirm($id: String!) {
        ProductReviewConfirm(id: $id) {
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
export const PRODUCTREVIEW_DELETE = gql`
    mutation productreviewDelete($id: String!) {
        ProductReviewDelete(id: $id) {
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
export const PRODUCTREVIEW_UPDAET = gql`
    mutation productreviewUpdate(
        $params: ProductReviewUpdateInput!
        $id: String!
    ) {
        ProductReviewUpdate(params: $params, id: $id) {
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
