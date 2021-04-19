import { gql } from "@apollo/client";
import {  F_BOOKING, F_FILE, F_PAGE, F_PRODUCT, F_PUBLIC_USER, F_USER } from "./fragments";


export const SIGN_UP = gql`
  mutation signUp(
      $params: AddUserInput!
      $verificationId: String!
    ) {
      SignUp(
        params:$params
        verificationId: $verificationId
      ) {
      ok
      error {
      location
        severity
        code
        message
      }
      data {
          email
      }
    }
  }
`;


export const SELLER_LIST_PUBLIC = gql`
  query sellerListPublic(
      $sort: [_SellerSort!]
      $filter: _SellerFilter
      $pageInput: pageInput!
  ) {
    SellerListPublic(
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
        ...FpublicSellerData
      }
    }
  }
  ${F_PUBLIC_USER}
  ${F_PAGE}
`


export const RANDOM_SELLER_LIST_PUBLIC = gql`
  query randomSellerListPublic(
      $random: Float
      $filter: _SellerFilter
  ) {
    RandomSellerListPublic(
      random: $random
      filter: $filter
    ) {
      ok
      error {
        location
        severity
        code
        message
      }
      data  {
        ...FpublicSellerData
      }
    }
  }
  ${F_PUBLIC_USER}
`



export const RESIGN = gql`
  mutation userResign(
      $_id: String!
      $pw: String!
      $reason: String!
      $resignReasonType: String!
    ) {
    UserResign(
        _id: $_id,
        pw: $pw,
        reason: $reason,
        resignReasonType: $resignReasonType
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
`;

export const SIGN_IN = gql`
  query signIn(
    $email: Email!
    $pw: String!
    $hopeRole: UserRole
    $permanence: Boolean
    ) {
    SignIn(
      email:$email,
      pw:$pw
      hopeRole: $hopeRole
      permanence: $permanence
      )  {
        ok
        error {
          location
          severity
          code
          message
        }
        data {
          token
        }
      }
  }
`;



export const USER_UPDATE = gql`
    mutation userUpdate($params:UserUpdateInput!,$_id: String!, $currentPw: String) {
        UserUpdate(params:$params, currentPw:$currentPw, _id:$_id) {
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
            }
        }
    }
`

export const EMAIL_DUPLIOCATE_CHECK = gql`
    mutation emailDuplicateCheck($email:String!) {
      EmailDuplicateCheck(email:$email) {
            ok
            error {
              location
              severity
              code
              message
            }
            data {
              duplicated
            }
        }
    }
`


export const SIGN_UP_DENY = gql`
    mutation signUpDeny($userIds:[String!]!, $reason:String!) {
      SignUpDeny(userIds:$userIds, reason: $reason) {
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

export const SIGN_UP_ACCEPT = gql`
    mutation signUpAccept($userIds:[String!]!) {
      SignUpAccept(userIds:$userIds) {
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


export const STOP_USER = gql`
    mutation stopUser($userIds:[String!]!,$reason: String!) {
      StopUser(userIds:$userIds,reason:$reason) {
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

export const RESTART_USER = gql`
    mutation restartUser($userIds:[String!]!) {
      RestartUser(userIds:$userIds) {
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

export const VERIFICATION_START =gql`
mutation verificationStart($target: VerificationTarget!, $payload: String!, $event: VerificationEvent!){
    VerificationStart(target : $target, payload : $payload, event : $event){
      ok
      error {
      location
      severity
      code
      message
    }
      data {
        _id
        payload
        target
        isVerified
      }
    }
  }
  `

export const VERIFICATION_COMPLETE=gql`
mutation verificationComplete(
    $verificationId: ID!
    $target: VerificationTarget!
    $code: String!
    $payload: String!
    ) {
        VerificationComplete(verificationId:$verificationId, target:$target,code:$code,payload:$payload) {
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
                payload
                target
                isVerified
                event
                storeCode
                expiresAt
                isExpire
            }
        }
    }
`


export const USER_LIST = gql`
query userList(
    $sort: [_UserSort!]
    $filter: _UserFilter
    $pageInput: pageInput!
) {
  UserList(
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
      ...Fuser
    }
  }
}
${F_USER}
${F_PAGE}
`

export const SELLER_ID_LIST = gql`
query sellerIdlistPublic {
  SellerListPublic(
    pageInput: {
      page:1,
      cntPerPage: 99999
    }
  ) {
    data  {
      _id
    }
  }
}
`


export const SELLER_FIND_BY_KEY = gql`
  query sellerFindByKey($key:String!,$value:String!) {
    SellerFindByKeyPublic(
      key: $key
      value: $value
    ) {
      data  {
        ...FpublicSellerData
        products {
          ...Fproduct
        }
      }
    }
  }
  ${F_PRODUCT}
  ${F_PUBLIC_USER}
`


export const USER_FIND_BY_ID = gql`
  query userFindById(
      $id:String!
    ) {
      UserFindById(
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
        ...Fuser
        products {
          ...Fproduct
          category {
              _id
              label
          }
          author {
              ...Fuser
          }
        }
        bookings {
          ...Fbooking
        }
      }
    }
  }
  ${F_PRODUCT}
  ${F_BOOKING}
  ${F_USER}
`;


export const EMAIl_FIND_BY_INFO = gql`
  query emailFindByInfo(
    $phoneNumber: String!
    $name: String!
    ) {
      EmailFindByInfo(
        phoneNumber: $phoneNumber
        name: $name
      ) {
      ok
      error {
      location
      severity
      code
      message
    }
    data {
      foundEmails
    }
  }
}
`;

export const PASSWORD_FIND_BY_PHONE = gql`
  query passwordFindByPhone(
    $email: String!
    ) {
      PasswordFindByPhone(
        email: $email
      ) {
      ok
      error {
        location
        severity
        code
        message
      }
      data {
      resultObj
      }
  }
}
`;


export const NICK_NAME_DUPLICATE_CHECK = gql`
  mutation nickNameDuplicateCheck(
    $nickName: String!
    ) {
      NickNameDuplicateCheck(
        nickName: $nickName
      ) {
      ok
      error {
        location
        severity
        code
        message
      }
      data {
        duplicated
      }
  }
}
`;

export const PASSWORD_CHNAGE = gql`
  mutation passwordChange(
    $newPassword: String!
    $currentPw: String!
    ) {
      PasswordChange(
        newPassword: $newPassword
        currentPw: $currentPw
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
`;

