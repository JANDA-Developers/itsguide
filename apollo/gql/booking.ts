import { gql } from "@apollo/client"
import { F_PAGE, F_BOOKING } from "./fragments"

export const BOOKING_LIST = gql`
query bookingList(
$sort: [_BookingSort!]
$filter: _BookingFilter
$pageInput: pageInput!
) {
BookingList(
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
    ...Fbooking
  }
}
}
${F_PAGE}
${F_BOOKING}
`


export const BOOKING_COUNT = gql`
    query bookingCount(
        $filter: _BookingFilter
    ) {
    BookingList(
        pageInput: {
            page: 1,
            cntPerPage: 99999999
        },
        filter: $filter
    ) {
        ok
        error
        data  {
            _id
        }
    }
}
`



export const BOOKING_CREATE = gql`
  mutation bookingCreate(
    $params: BookingCreateInput!
    $productId: String!
  ) {
    BookingCreate(
      params:$params
      productId: $productId
    ) {
    ok
    error
    data {
      _id
    }
  }
}
`
export const BOOKING_DELETE = gql`
  mutation bookingDelete(
    $id: String!
  ) {
    BookingDelete(
      id:$id
    ) {
    ok
    error 
  }
}
`
export const BOOKING_UPDAET = gql`
  mutation bookingUpdate(
    $params: BookingUpdateInput!
    $id: String!
  ) {
  BookingUpdate(
      params:$params
      _id: $id
    ) {
    ok
    error 
    data {
      _id
    }
  }
}
`