import { gql } from "@apollo/client";
import {  F_BOOKING, F_CATEGORY,  F_GROUP,  F_PAGE_INFO,F_USER } from "./fragments";
import { F_HOMEPAGE } from "./homepage";
import { F_SYSTEMNOTI } from "./systemNoti";

/* :::::::::::::::::::::::::::::::::::::: 

  Queries 
  
:::::::::::::::::::::::::::::::::::::: */


export const PAGE_INFO_READ = gql`
  query pageInfoRead(
      $key: String!
    ) {
    PageInfoRead(
      key: $key
      )  {
        ok
        error {
          location
          severity
          code
          message
        }
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
        error {
          location
          severity
          code
          message
        }
        data {
          ...Fuser
          keywards
          unReadNoties {
            ...FsystemNoti
          }
          bankImg {
            ...Ffile
          }
          products {
            _id
            title
            groupCode
          }
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
        }
      }
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
      CategoryList {
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
      Homepage {
        ok
        error {
        location
        severity
        code
        message
      }
      data {
          ...Fhomepage
      }
    }
  }
  ${F_GROUP}
  ${F_SYSTEMNOTI}
  ${F_HOMEPAGE}
  ${F_BOOKING}
  ${F_CATEGORY}
  ${F_USER}
`;