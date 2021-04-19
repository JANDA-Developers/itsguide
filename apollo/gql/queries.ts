import { gql } from "@apollo/client";
import { F_BOOKING, F_CATEGORY, F_PAGE, F_PAGE_INFO, F_PRODUCT, F_USER } from "./fragments";

/* :::::::::::::::::::::::::::::::::::::: 

  Queries 
  
:::::::::::::::::::::::::::::::::::::: */

export const PCAT_LIST = gql`
  query pcategoryList {
    pCategoryList {
      ok
      error
      data {
        _id
        createdAt
        updatedAt
        isDelete
        label
      }
    }
  }
`


export const CATEGORY_FIND_BY_ID = gql`
  query categoryFindById(
      $id: String!
    ) {
      CategoryFindById(
        id: $id
      ) {
      ok
      error
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
        error
        data {
          ...Fcategory
        }
      }
  }
  ${F_CATEGORY}
`;



export const SIGN_IN = gql`
  query signIn(
    $email: Email!
    $pw: String!
    ) {
    SignIn(
      email:$email,
      pw:$pw
      )  {
        ok
        error
        data {
          token
        }
      }
  }
`;


export const PAGE_INFO_READ = gql`
  query pageInfoRead(
      $key: String!
    ) {
    PageInfoRead(
      key: $key
      )  {
        ok
        error
        data {
            ...FpageInfo
        }
      }
  }
  ${F_PAGE_INFO}
`;

export const GET_CONTEXT = gql`
  query getContext {
      GetProfile {
        ok
        error
        data {
          ...Fuser
          bookings {
            ...Fbooking
            seller {
              _id
              name
            }
            product {
              _id
              title
            }
          }
          products {
            ...Fproduct
            bookings {
              _id
              name
            }
          }
        }
      }
      CategoryList {
        ok
        error
        data {
          ...Fcategory
        }
      }
  }
  ${F_PRODUCT}
  ${F_BOOKING}
  ${F_CATEGORY}
  ${F_USER}
`;