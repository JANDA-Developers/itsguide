import { gql } from "@apollo/client"
import { F_FILE, F_PAGE, F_USER } from "./fragments"

export const F_QNA = gql`
    fragment Fqna on Qna {
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
`


export const QNA_FIND_BY_ID = gql`
query qnaFindById(
  $_id: String!
) {
  QnaFindById(
    _id:$_id
  ) {
  ok
  error {
  location
          severity
          code
          message
  }
  data {
    ...Fqna
    category {
    _id
    label
    }
  }
}
}
${F_QNA}
`
export const QNA_LIST = gql`
query qnaList(
$sort: [_QnaSort!]
$filter: _QnaFilter
$pageInput: pageInput!
) {
QnaList(
sort: $sort
pageInput: $pageInput
filter: $filter
) {
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
  data  {
    ...Fqna
    category {
      _id
      label
    }
  }
}
}
${F_PAGE}
${F_QNA}
`


export const QNA_CREATE = gql`
  mutation qnaCreate(
    $params: QnaCreateInput!
  ) {
    QnaCreate(
      params:$params
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
    }
  }
}
`
export const QNA_DELETE = gql`
  mutation qnaDelete(
    $id: String!
  ) {
    QnaDelete(
      id:$id
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
`
export const QNA_UPDAET = gql`
  mutation qnaUpdate(
    $params: QnaUpdateInput!
    $id: String!
  ) {
  QnaUpdate(
      params:$params
      id: $id
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
    }
  }
}
`