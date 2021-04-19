import { gql } from "@apollo/client";
import { F_PAGE, F_PAGE_INFO } from "./fragments";

export const F_NOTIFICATION_TRIGGER = gql`
  fragment FnotificationTrigger on NotificationTrigger  {
    sender
    event
    isEnabled
    tags {
      key
      value
    }
  }
`

export const F_SMS_TEMPLATE = gql`
  fragment FsmsTemplate on ITemplate  {
    _id
    createdAt
    name
    description
    content
    _replaceEnum
    trigger {
      ...FnotificationTrigger
    }
    tags {
      key
      value
    }
    replacers
  }
  ${F_NOTIFICATION_TRIGGER}
`

export const F_NOTIFICATION_MANAGER = gql`
  fragment FnotificationManager on NotificationManager {
    smsPricingTable {
      SMS
      LMS
      MMS
    }
    emailPricing
    currency
    pointRemains
    templates {
      ...FsmsTemplate
    }
  }
  ${F_SMS_TEMPLATE}
`

export const F_NOTIFICATION_HISTORY_ITEM = gql`
  fragment FnotificationHistoryItem on INotificationHistoryItem {
    _id
    createdAt
    updatedAt
    method
    sender
    receivers
    title
    content
    count
    successCount
    errorCount
    pointRemains
    pointConsumed
  }
`

export const F_NOTIFICATION_SENDER = gql`
  fragment FnotificationSender  on NotificationSender  {
    type
    sender
    isVerified
    isRegisteredToAligo
  }
`


export const NOTIFICATION_HISTORY = gql`
    query notificationHistory(
        $sort: [_INotificationHistoryItemSort!]
        $filter: _INotificationHistoryItemFilter
        $pageInput: pageInput!
    ) {
    NotificationHistory(
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
            ...FnotificationHistoryItem
        }
    }
}
${F_PAGE}
${F_NOTIFICATION_HISTORY_ITEM}
`


export const NOTIFICATION_SENDER_PHONE_ADD_START = gql`
    mutation notificationSenderPhoneAddStart(
      $target: VerificationTarget!
      $payload: String!
    ) {
      NotificationSenderPhoneAddStart(
        target: $target
        payload: $payload
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


export const NOTIFICATION_SENDER_ADD_COMPLETE = gql`
    mutation notificationSenderAddComplete(
      $verificationId: ID!
      $target: VerificationTarget!
      $code: String!
      $payload: String!
    ) {
      NotificationSenderAddComplete(
        verificationId: $verificationId
        target: $target
        code: $code
        payload: $payload
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


export const SMSTEMPLATE_UPDATE = gql`
    mutation smsTemplateUpdate(
      $input: SmsTemplateUpdateInput!
      $templateId: String!
    ) {
    SmsTemplateUpdate(
        input:$input
        templateId: $templateId
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

export const SMSTEMPLATE_CREATE = gql`
    mutation smstemplateCreate(
        $input: SmsTemplateCreateInput!
    ) {
        SmsTemplateCreate(
            input:$input
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

export const SMSTEMPLATE_DELETE = gql`
    mutation smstemplateDelete(
        $templateId: String!
    ) {
    SmsTemplateDelete(
        templateId:$templateId
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

export const SMS_SIGNLE_MESSAGE_SEND = gql`
    mutation smsSendSingle(
        $input: SmsSendInput!
    ) {
    SmsSendSingle(
        input: $input
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

export const SMS_TEMPLATE_MESSAGE_SEND = gql`
    mutation smsSendWithTemplate(
        $input: SmsSendWithTemplateInput!
    ) {
    SmsSendWithTemplate(
        input: $input
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

export const TEMPLATE_LIST = gql`
  query templateList(
    $sort: [_ITemplateSort!]
    $filter: _ITemplateFilter
    $pageInput: pageInput!
  ) {
  TemplateList(
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
      ... on TemplateSms {
        _id
        createdAt
        name
        description
        content
        _replaceEnum
        trigger {
          ...FnotificationTrigger
        }
        tags {
      key
      value
    }
        replacers
      }
    }
  }
  }
  ${F_NOTIFICATION_TRIGGER}
  ${F_PAGE}
`
