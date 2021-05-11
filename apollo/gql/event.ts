import { gql } from "@apollo/client";
import { F_FILE, F_PAGE, F_USER } from "./fragments";

export const F_EVENT = gql`
    fragment Fevent on Event {
        _id
        createdAt
        updatedAt
        isDelete
        title
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
    }
    ${F_USER}
    ${F_FILE}
`;

export const EVENT_FIND_BY_ID = gql`
    query eventFindById($id: String!) {
        EventFindById(id: $id) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                ...Fevent
            }
        }
    }
    ${F_EVENT}
`;
export const EVENT_LIST = gql`
    query eventList(
        $sort: [_EventSort!]
        $filter: _EventFilter
        $pageInput: pageInput!
    ) {
        EventList(sort: $sort, pageInput: $pageInput, filter: $filter) {
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
                ...Fevent
            }
        }
    }
    ${F_PAGE}
    ${F_EVENT}
`;

export const EVENT_CREATE = gql`
    mutation eventCreate($params: EventCreateInput!) {
        EventCreate(params: $params) {
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
export const EVENT_DELETE = gql`
    mutation eventDelete($id: String!) {
        EventDelete(id: $id) {
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
export const EVENT_UPDAET = gql`
    mutation eventUpdate($params: EventUpdateInput!, $id: String!) {
        EventUpdate(params: $params, id: $id) {
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
