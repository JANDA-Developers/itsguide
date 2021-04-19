import { gql } from "@apollo/client"
import { F_PAGE, F_PAYMENT } from "./fragments"

export const PAYMENT_LIST = gql`
  query paymentList(
    $sort: [_PaymentSort!]
    $filter: _PaymentFilter
    $pageInput: pageInput!
  ) {
  PaymentList(
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
      ...Fpayment
    }
  }
  }
  ${F_PAGE}
  ${F_PAYMENT}
`


export const SETTLEMENT_CAL = gql`
  query settlementCal($filter:_PaymentFilter!) {
    SettlementCal(filter:$filter) {
      ok
      error {
      location
      severity
      code
      message
    }
      amt
    } 
  }
`

export const BANK_DEPOSIT_CONFIRM = gql`
  mutation bankDepositConfirm($paymentIds: [String!]!) {
    BankDepositConfirm(paymentIds: $paymentIds) {
      ok
      error {
        location
        severity
        code
        message
      }
      data {
        ...Fpayment
      }
  }
}
${F_PAYMENT}
`


export const BANK_REFUND = gql`
  mutation bankRefund(
    $params:[BankRefundInput!]!
  ) {
    BankRefund(
      params: $params
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

