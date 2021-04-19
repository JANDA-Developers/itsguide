import { gql } from "@apollo/client"
import { F_FILE, F_PAGE, F_USER } from "./fragments"


export const F_PORTFOLIO = gql`
    fragment Fportfolio on Portfolio {
        _id
        createdAt
        updatedAt
        isDelete
        title
        isOpen
        keyWards
        summary
        subTitle
        contents
        author {
            ...Fuser
        }
        thumb {
            ...Ffile
        }
        category {
            _id
            label
        }
    }
    ${F_FILE}
    ${F_USER}
`

export const PORTFOLIO_FIND_BY_ID = gql`
query portfolioFindById(
  $id: String!
) {
  PortfolioFindById(
    id:$id
  ) {
  ok
  error {
location
        severity
        code
        message
}
  data {
    ...Fportfolio
  }
}
}
${F_PORTFOLIO}
`
export const PORT_FOLIO_LIST = gql`
query portfolioList(
$sort: [_PortfolioSort!]
$filter: _PortfolioFilter
$pageInput: pageInput!
) {
PortfolioList(
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
    ...Fportfolio
    category {
      _id
      label
    }
  }
}
}
${F_PAGE}
${F_PORTFOLIO}
`


export const PORTFOLIO_CREATE = gql`
  mutation portfolioCreate(
    $params: PortfolioCreateInput!
  ) {
    PortfolioCreate(
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
export const PORTFOLIO_DELETE = gql`
  mutation portfolioDelete(
    $id: String!
  ) {
    PortfolioDelete(
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
export const PORTFOLIO_UPDAET = gql`
  mutation portfolioUpdate(
    $params: PortfolioUpdateInput!
    $id: String!
  ) {
  PortfolioUpdate(
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