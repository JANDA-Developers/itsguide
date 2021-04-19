import { gql } from "@apollo/client";
import { F_ITINERARY, F_CATEGORY, F_PRODUCT, F_FILE, F_PAGE_INFO } from "./fragments";

export const CATEGORY_CREATE = gql`
  mutation categoryCreate(
      $params: CategoryCreateInput!
    ) {
    CategoryCreate(
        params:$params
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

  
export const PCATEGORY_CREATAE = gql`
  mutation pcategoryCreate(
    $params: pCategoryCreateInput!
  ) {
    pCategoryCreate(
      params:$params
    ) {
    ok
    error 
  }
}
`


export const PCATEGORY_DELETE = gql`
  mutation pcategoryDelete(
    $_id: String!
  ) {
    pCategoryDelete(
      _id:$_id
    ) {
    ok
    error 
  }
}
`

export const PCATEGORY_UPDATE = gql`
  mutation pcategoryUpdate(
    $params: pCategoryUpdateInput!
    $id: String!
  ) {
    pCategoryUpdate(
      params: $params 
      id: $id
      ) {
        ok
        error
      }
}
`



export const CATEGORY_DELETE = gql`
  mutation categoryDelete(
      $id: String!
    ) {
    CategoryDelete(
        _id:$id
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
//       error 
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
      error 
      data {
        ...Ffile
      }
    }
  }
  ${F_FILE}
`;

export const SIGN_UP = gql`
  mutation signUp(
      $data: AddUserInput!
    ) {
      SignUp(
        data:$data
      ) {
      ok
      error 
      data {
          email
      }
    }
  }
  ${F_FILE}
`;



export const SIGN_IN_GOOGLE = gql`
  mutation signInGoogle(
      $code: String!
    ) {
      SignInGoogle(
        code:$code
      ) {
      ok
      error 
      data {
          email
          token
      }
    }
  }
`;



export const PAGE_INFO_CREATE = gql`
  mutation pageInfoCreate(
    $params: PageInfoCreateInput!
    ) {
    PageInfoCreate(
      params:$params
      )  {
        ok
        error
      }
  }
`;


export const SIGNINGOOGLE = gql`
    mutation SignInGoogle($code : String!){
      SignInGoogle(code : $code){
        ok
        error
        data{
          token
          email
        }
      }
    }
`

export const SIGNINKAKAO= gql`
    mutation SignInKakao($code : String!){
      SignInKakao(code : $code){
        ok
        error
        data{
          token
          email
        }
      }
    }
`

export const PAGE_INFO_DELETE = gql`
  mutation pageInfoDelete(
      $key: String!
    ) {
    PageInfoDelete(
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

export const PAGE_INFO_UPDATE = gql`
  mutation pageInfoUpdate(
      $params: PageInfoUpdateInput!
      $key: String!
    ) {
    PageInfoUpdate(
      key: $key
      params: $params
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
