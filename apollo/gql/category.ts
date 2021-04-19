import { gql } from "@apollo/client";
import { F_CATEGORY } from "./fragments";

export const CATEGORY_FIND_BY_ID = gql`
query categoryFindById(
    $id: String!
  ) {
    CategoryFindById(
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
      ...Fcategory
    }
  }
}
${F_CATEGORY}
`;


export const CATEGORY_LIST = gql`
query categoryList {
    CategoryList  {
      ok
      error {
      location
      severity
      code
      message
    }
      data {
        ...Fcategory
      }
    }
}
${F_CATEGORY}
`;


export const CATEGORY_CREATE = gql`
  mutation categoryCreate(
      $params: CategoryCreateInput!
    ) {
    CategoryCreate(
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
          ...Fcategory
      }
    }
  }
  ${F_CATEGORY}
`;

export const CATEGORY_DELETE = gql`
  mutation categoryDelete(
      $id: String!
    ) {
    CategoryDelete(
        _id:$id
      ) {
      ok
      error {
location
        severity
        code
        message
}
      data {
          ...Fcategory
      }
    }
  }
  ${F_CATEGORY}
`;

export const CATEGORY_UPDATE = gql`
  mutation categoryUpdate(
        $params: CategoryUpdateInput!
        $id: String!
    ) {
        CategoryUpdate(
            params: $params
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
          ...Fcategory
      }
    }
  }
  ${F_CATEGORY}
`;