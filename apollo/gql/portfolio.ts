import { gql } from "@apollo/client"
import { F_PAGE, F_PORTFOLIO } from "./fragments"

export const PORTFOLIO_FIND_BY_ID = gql`
query portfolioFindById(
  $id: String!
) {
  PortfolioFindById(
    id:$id
  ) {
  ok
  error 
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
  error
  page {
    ...Fpage
  }
  data  {
    ...Fportfolio
    pCategory {
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
    error
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
    error 
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
    error 
    data {
      _id
    }
  }
}
`