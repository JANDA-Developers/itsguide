import { gql } from "@apollo/client";
import { F_ITINERARY, F_CATEGORY, F_PRODUCT, F_FILE, F_PAGE_INFO } from "./fragments";

export const PAGE_INFO_CREATE = gql`
  mutation pageInfoCreate(
    $params: PageInfoCreateInput!
    ) {
    PageInfoCreate(
      params:$params
      )  {
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





// export const ITINERY_DELETE = gql`
//   mutation categoryUpdate(
//       $params: PortfolioUpdateInput!
//       $id: String!
//     ) {
//     CategoryUpdate(
//         params:$params
//         id: id
//       ) {
//       ok
//       error {
//       data {
//           ...Fitinery
//       }
//     }
//   }
//   ${F_ITINERY}
// `;


export const MULTI_UPLOAD = gql`
  mutation multiUpload(
      $file: Upload!
    ) {
      MultiUpload(
        file:$file
      ) {
      ok
      error {
location
        severity
        code
        message
}
      data {
        ...Ffile
      }
    }
  }
  ${F_FILE}
`;




export const PAGE_INFO_DELETE = gql`
  mutation pageInfoDelete(
      $key: String!
    ) {
    PageInfoDelete(
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

export const PAGE_INFO_UPDATE = gql`
  mutation pageInfoUpdate(
      $params: PageInfoUpdateInput!
      $key: String!
      $guideParams: UserUpdateInput
    ) {
    PageInfoUpdate(
      key: $key
      params: $params
      guideParams: $guideParams
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
