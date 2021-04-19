import { gql } from "@apollo/client";
import { F_PAGE } from "./fragments";


export const BOARD_LIST = gql`
    query BoardList($filter:_BoardFilter, $sort: [_BoardSort!]){
        BoardList(
            sort: $sort
            filter: $filter
        ) {
        ok
        error {
            location
            severity
            code
            message
        }
        data {
            _id
            createdAt
            updatedAt
            isDelete
            title
            contents
            isNotice
            isOpen
            summary
            subTitle
            keyWards
            thumb {
                uri
            }
            viewCount
            likeCount
            slug
        }
       } 
   }
`


export const MY_BOARD_LIST = gql`
    query myBoardList($filter:_BoardFilter, $sort: [_BoardSort!], $email: String
){
        MyBoardList(
            email: $email
            sort: $sort
            filter: $filter
        ) {
        ok
        error {
            location
            severity
            code
            message
        }
        data {
            _id
            createdAt
            updatedAt
            isDelete
            title
            contents
            isNotice
            isOpen
            summary
            subTitle
            keyWards
            thumb {
                uri
            }
            viewCount
            likeCount
            slug
            questionStatus
            boardType
        }
    } 
}
`

export const BOARD_CONTROl_MASTER = gql`
    mutation boardControlMaster(
    $action: BoardAction!
    $targets: [BoardTarget!]!
){
        BoardControlMaster(
            action: $action
            targets: $targets
        ) {
        ok
        error {
      location
      severity
      code
      message
    }
       } 
   }
   ${F_PAGE}
`