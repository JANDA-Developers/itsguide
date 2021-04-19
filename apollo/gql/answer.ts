import { gql } from "@apollo/client"

export const F_ANSWER = gql`
    fragment Fanswer on Answer {
        _id
        createdAt
        updatedAt
        isDelete
        content
        author {
            _id
            name
            profileImg {
                uri
            }
        }
    }
`

export const ANSWER_CREATE = gql`
  mutation answerCreate(
    $params: AnswerCreateInput!
    $targetId: String!
    $target: String!
  ) {
    AnswerCreate(
      params:$params
      targetId: $targetId
      target: $target
    ) {
    ok
    error {
      location
      severity
      code
      message
    }
    data {
      ...Fanswer
    }
  }
}
${F_ANSWER}
`

export const ANSWER_DELETE = gql`
  mutation answerDelete(
    $id: String!
    $targetId: String!
    $target: String!
  ) {
    AnswerDelete(
      id:$id
      targetId: $targetId 
      target: $target,
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
export const ANSWER_UPDAET = gql`
  mutation answerUpdate(
    $params: AnswerUpdateInput!
    $targetId: String!
    $target: String!
    $_id: String!
  ) {
  AnswerUpdate(
      params:$params
      targetId: $targetId
      target: $target
      _id: $_id
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