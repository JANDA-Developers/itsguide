import { gql } from "@apollo/client";
import { F_FILE, F_PAGE, F_USER } from "./fragments";

export const F_ANNOUNCE = gql`
    fragment Fannounce on Announce {
        _id
        createdAt
        updatedAt
        isDelete
        title
        no
        target
        contents
        author {
            ...Fuser
        }
        isNotice
        isOpen
        summary
        subTitle
        keyWards
        attachFiles {
            ...Ffile
        }
        thumb {
            ...Ffile
        }
        viewCount
        type
    }
    ${F_USER}
    ${F_FILE}
`;

export const ANNOUNCE_FIND_BY_ID = gql`
    query announceFindById($_id: String!) {
        AnnounceFindById(_id: $_id) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                ...Fannounce
            }
        }
    }
    ${F_ANNOUNCE}
`;
export const ANNOUNCE_LIST = gql`
    query announceList(
        $sort: [_AnnounceSort!]
        $filter: _AnnounceFilter
        $pageInput: pageInput!
    ) {
        AnnounceList(sort: $sort, pageInput: $pageInput, filter: $filter) {
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
                ...Fannounce
            }
        }
    }
    ${F_PAGE}
    ${F_ANNOUNCE}
`;

export const ANNOUNCE_CREATE = gql`
    mutation announceCreate($params: AnnounceCreateInput!) {
        AnnounceCreate(params: $params) {
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
export const ANNOUNCE_DELETE = gql`
    mutation announceDelete($id: String!) {
        AnnounceDelete(id: $id) {
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
export const ANNOUNCE_UPDAET = gql`
    mutation announceUpdate($params: AnnounceUpdateInput!, $id: String!) {
        AnnounceUpdate(params: $params, id: $id) {
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
