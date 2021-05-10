import { gql } from "@apollo/client";
import { F_ANSWER } from "./answer";
import { F_FILE, F_PAGE, F_USER } from "./fragments";

// export const F_COMMENT = gql`
//     fragment Fcomment on Comment {
//         _id
//         createdAt
//         updatedAt
//         isDeleted
//         content
//         writerName
//         writerEmail
//     }
//     ${F_USER}
//     ${F_FILE}
// `;

export const F_TICKET = gql`
    fragment Fticket on Ticket {
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
        answers {
            ...Fanswer
        }
        summary
        subTitle
        recipientId
        keyWards
        attachFiles {
            ...Ffile
        }
        thumb {
            ...Ffile
        }
        viewCount
        recipientName
        recipientEmail
        url
    }
    ${F_ANSWER}
    ${F_USER}
    ${F_FILE}
`;

export const TICKET_FIND_BY_ID = gql`
    query ticketFindById($id: String!) {
        TicketFindById(id: $id) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                ...Fticket
            }
        }
    }
    ${F_TICKET}
`;
export const TICKET_LIST = gql`
    query ticketList(
        $sort: [_TicketSort!]
        $filter: _TicketFilter
        $pageInput: pageInput!
    ) {
        TicketList(sort: $sort, pageInput: $pageInput, filter: $filter) {
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
                ...Fticket
            }
        }
    }
    ${F_PAGE}
    ${F_TICKET}
`;

export const TICKET_CREATE = gql`
    mutation ticketCreate($params: TicketCreateInput!, $recipientId: String!) {
        TicketCreate(params: $params, recipientId: $recipientId) {
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
export const TICKET_DELETE = gql`
    mutation ticketDelete($id: String!) {
        TicketDelete(id: $id) {
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
export const TICKET_UPDAET = gql`
    mutation ticketUpdate($params: TicketUpdateInput!, $id: String!) {
        TicketUpdate(params: $params, id: $id) {
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
