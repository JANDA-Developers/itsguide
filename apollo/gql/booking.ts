import { gql } from "@apollo/client"
import { F_PAGE, F_PAYMENT, F_FILE, F_USER, F_PRODUCT, F_BOOKING, F_REQUEST_HISTORY } from "./fragments"

export const F_TRAVELER = gql`
    fragment Ftraveler on Traveler {
      name
      phoneNumber
      gender
      age
    }
`

export const BOOKING_LIST = gql`
  query bookingList(
    $sort: [_BookingSort!]
    $filter: _BookingFilter
    $pageInput: pageInput!
    $isTimeOverExcept: Boolean
  ) {
  BookingList(
    sort: $sort
    pageInput: $pageInput
    filter: $filter
    isTimeOverExcept: $isTimeOverExcept
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
      ...Fbooking
      payment {
        ...Fpayment
      }

      product {
        _id
        createdAt
        updatedAt
        isDelete
        title
        code
        determined
        contents
        category {
            _id
            label
        }
        status
        inOrNor
        info
        caution
        images {
            ...Ffile
        }
        compeltePeopleCnt
        peopleCount
        keyWards
        address
        startPoint
        maxMember
        minMember
        subTitle
        adult_price
        bookingCount
        dateRange
        kids_price
        baby_price
        isNotice
        isOpen
        type
        startDate
        Dday
        author {
          name
        }
      }
    }
  }
  }
  ${F_PAYMENT}
  ${F_PAGE}
  ${F_FILE}
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
        filter: $filter,
    ) {
        ok
        error {
      location
      severity
      code
      message
    }
        data  {
            _id
        }
    }
}
`


export const BOOKING_CANCEL_REQ = gql`
  mutation bookingCancelReq(
    $bookingId: String!
    $reason: String!
  ) {
    BookingCancelReq(
      bookingId: $bookingId
      reason: $reason
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


export const BOOKING_CANCEL_REJECT = gql`
  mutation bookingCancelReject(
    $bookingId: String!
    $reason: String!
  ) {
    BookingCancelReject(
      bookingId: $bookingId
      reason: $reason
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

export const BOOKINGS_CREATE = gql`
  mutation bookingsCreate(
    $params: [BookingsCreateInput!]!
    $payMethod: PayMethod!
  ) {
    BookingsCreate(
      payMethod: $payMethod
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
      ...Fbooking
      product {
        title
      }
    }
  }
}
${F_BOOKING}
`

export const BOOKING_DELETE = gql`
  mutation bookingDelete(
    $id: String!
  ) {
    BookingDelete(
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

export const BOOKING_CREATE_BY_HAND = gql`
  mutation bookingCreateByHand(
    $isIgnoreMaxMember: Boolean!
    $params: BookingCreateByHandInput!
  ) {
  BookingCreateByHand(
      params:$params
      isIgnoreMaxMember: $isIgnoreMaxMember
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


export const BOOKING_COMPLETE_BY_HAND = gql`
  mutation bookingCompleteByHand(
    $params: BookingCompleteByHandInput!
  ) {
  BookingCompleteByHand(
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

export const BOOKING_CANCEL_BYHAND = gql`
  mutation bookingCancelByHand(
    $params: BookingCancelByHandInput!
  ) {
  BookingCancelByHand(
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
}`

export const BOOKING_FIND_BY_CODE = gql`
  query bookingFindByCode(
    $code: String!
  ) {
    BookingFindByCode(
      code: $code
    ) {
    ok
    error {
      location
        severity
        code
        message
    }
    data {
      requestHistory {
          ...FrequestHistory
      }
      bankTransInfo {
        accountHolder
        accountNumber
        bankName
        bankTransfter
      }
      product {
            _id
            title
            code
      }
      ...Fbooking
      booker {
        _id
      }
      travelers {
        ...Ftraveler
      }
      product {
        ...Fproduct
        author {
            ...Fuser
        }
        category {
            _id
            label
        }
      }
      payment {
        ...Fpayment
      }
    }
  }
}
${F_REQUEST_HISTORY}
${F_USER}
${F_TRAVELER}
${F_BOOKING}
${F_PAYMENT}
${F_PRODUCT}
`

