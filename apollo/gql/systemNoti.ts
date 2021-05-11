import { gql } from "@apollo/client";
import { F_ANSWER } from "./answer";
import { F_FILE, F_PAGE } from "./fragments";

export const F_SYSTEMNOTI = gql`
    fragment FsystemNoti on SystemNoti {
        _id
        createdAt
        updatedAt
        isDelete
        type
        content
        isRead
        severity
        link
    }
`;

export const UNREAD_SYSTEMNOTIS = gql`
    query unReadSystemNotiFind {
        UnReadSystemNotiFind {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                ...FsystemNoti
            }
        }
    }
    ${F_SYSTEMNOTI}
`;

export const SYSTEMNOTI_LIST = gql`
    query systemNotiList(
        $sort: [_SystemNotiSort!]
        $filter: _SystemNotiFilter
        $pageInput: pageInput!
    ) {
        SystemNotiList(sort: $sort, pageInput: $pageInput, filter: $filter) {
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
                ...FsystemNoti
            }
        }
    }
    ${F_PAGE}
    ${F_SYSTEMNOTI}
`;

export const SYSTEMNOTI_READ = gql`
    mutation systemNotiRead($ids: [String!]!) {
        SystemNotiRead(ids: $ids) {
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

export const SYSTEMNOTI_HIDE = gql`
    mutation systemNotiHide($ids: [String!]!) {
        SystemNotiHide(ids: $ids) {
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
