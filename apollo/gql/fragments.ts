import { gql } from "@apollo/client";

export const F_QUESTION = gql`
    fragment Fcategory on Question {
        _id
        createdAt
        updatedAt
        isDelete
        title
        contents
        author
        isNotice
        isOpen
        summary
        subTitle
        keyWards
        attachFiles
        thumb
        viewCount
        likeCount
        ProductId
        status
        no
    }
`

export const F_CATEGORY = gql`
    fragment Fcategory on Category {
        _id
        createdAt
        updatedAt
        isDelete
        label
    }
`
export const F_FILE = gql`
    fragment Ffile on File {
        name
        uri
        owner
    }
`

export const F_BOOKING = gql`
    fragment Fbooking on Booking {
        _id
        createdAt
        updatedAt
        isDelete
        adultCount
        kidCount
        babyCount
        totalCount
        message
        status
        memo
        code
        product {
            _id
            title
        }
        name
        email
        phoneNumber
    }
`

export const F_USER = gql`
    fragment Fuser  on User  {
        _id
        nickName
        createdAt
        updatedAt
        isDelete
        email
        role
        brith_date
        address
        address_detail
        acceptSms
        acceptEamil
        is_froreginer
        busi_contact
        gender
        busi_num
        busi_department
        isVerifiedPhoneNumber,
        busiRegistration {
            ...Ffile
        },
        is_priv_corper
        busi_name
        busi_address
        account_number
        name
        bank_name
        phoneNumber
    }
    ${F_FILE}
`

export const F_PORTFOLIO = gql`
    fragment Fportfolio on Portfolio {
        _id
        createdAt
        updatedAt
        isDelete
        title
        isOpen
        keyWards
        summary
        subTitle
        contents
        author {
            ...Fuser
        }
        thumb {
            ...Ffile
        }
        pCategory {
            _id
            label
        }
    }
    ${F_FILE}
    ${F_USER}
`

export const F_PAGE_INFO = gql`
    fragment FpageInfo on PageInfo {
        _id
        updatedAt
        isDelete
        key
        value
    }
`


export const F_PAGE = gql`
    fragment Fpage on Page {
        page
        cntPerPage
        totalPageSize
        start_page_num
        end_page_num
        isPrev
        isNext
        prev_page_num
        next_page_num
        totalCount
        remainder
    }
`



export const F_ITINERARY = gql`
    fragment Fitinerary on Itinerary  {
        _id
        createdAt
        updatedAt
        isDelete
        title
        contents
        images {
            ...Ffile
        }
        date
    }
    ${F_FILE}
`

export const F_PRODUCT = gql`
    fragment Fproduct on Product {
        _id
        createdAt
        updatedAt
        isDelete
        title
        code
        contents
        author {
            ...Fuser
        }
        category {
            _id
            label
        }
        status
        itinerary {
            ...Fitinerary
        }
        inOrNor
        info
        caution
        images {
            ...Ffile
        }
        keyWards
        address
        startPoint
        maxMember
        minMember
        subTitle
        adult_price
        bookingCount
        kids_price

        baby_price
        isNotice
        isOpen
        type
        startDate
        Dday
    }
    ${F_FILE}
    ${F_USER}
    ${F_ITINERARY}
`