import { gql } from "@apollo/client";
import { F_GROUP } from "./fragments";

export const GROUP_FIND_BY_KEY = gql`
query groupFindByKey(
    $key: String!
  ) {
    GroupFindByKey(
      key: $key
    ) {
    ok
    error {
      location
      severity
      code
      message
    }
    data {
      ...Fgroup
    }
  }
}
${F_GROUP}
`;


export const GROUP_LIST = gql`
query groupList {
    GroupList  {
      ok
      error {
        location
        severity
        code
        message
      }
      data {
        ...Fgroup
      }
    }
}
${F_GROUP}
`;

export const GROUP_CREATE = gql`
  mutation groupCreate(
      $params: GroupCreateInput!
    ) {
    GroupCreate(
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
          ...Fgroup
      }
    }
  }
  ${F_GROUP}
`;

export const GROUP_DELETE = gql`
  mutation groupDelete(
      $key: String!
    ) {
    GroupDelete(
        key:$key
      ) {
      ok
      error {
location
        severity
        code
        message
}
      data {
          ...Fgroup
      }
    }
  }
  ${F_GROUP}
`;

export const GROUP_UPDATE = gql`
  mutation groupUpdate(
        $params: GroupUpdateInput!
        $key: String!
    ) {
        GroupUpdate(
            params: $params
            key: $key
         ) {
      ok
      error {
location
        severity
        code
        message
}
      data {
          ...Fgroup
      }
    }
  }
  ${F_GROUP}
`;