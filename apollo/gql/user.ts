import { gql } from "@apollo/client";

export const USER_UPDATE = gql`
    mutation userUpdate($params:UserUpdateInput!, $pw: String!, $_id: String!) {
        UserUpdate(params:$params, pw:$pw, _id:$_id) {
            ok
            error
            data {
                _id
            createdAt
            }
        }
    }
`

export const VERIFICATION_START =gql`
mutation verificationStart($target: VerificationTarget!, $payload: String!, $event: VerificationEvent!){
    VerificationStart(target : $target, payload : $payload, event : $event){
      ok
      error
      data {
        _id
        isVerified
      }
    }
  }`

export const VERIFICATION_COMPLETE=gql`
mutation verificationComplete(
    $verificationId: ID!
    $target: VerificationTarget!
    $code: String!
    $payload: String!
    ) {
        VerificationComplete(verificationId:$verificationId, target:$target,code:$code,payload:$payload) {
            ok
            error
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