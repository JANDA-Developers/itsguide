import { NotificationTriggerEvent } from "./api";



//이건 서버와 일치해야한다 서버에 같은 interface명이 있으므로 가져와서 매칭한다.
export type SMS_BOOKING = ['BOOKERNMAE', 'BOOKING_STATUS', 'TRAVEL_CONFIRMED', 'TRAVEL_DATE_YMD', 'PEOPLE', 'PRICE', 'PROD_NAME', 'BOOK_DAY', "D_DAY", "INTERGRATED_PRODUCT_INFO"];
export type SMS_SETTLE = ["PROD_NAME", "PARTNERNAME", "SETTLE_PRICE", "REQUEST_DATE"]


export interface REPLACE  {
    BANK_TRANSFER_BOOKER: ["BOOKERNMAE"],
    BANK_TRANSFER_SELLER: ['BOOKERNMAE'],
    CANCEL_BOOKING_BOOKER: SMS_BOOKING,
    CANCEL_BOOKING_SELLER: [...SMS_BOOKING, 'PARTNERNAME'],
    COMPLETE_BOOKING_BOOKER: [...SMS_BOOKING],
    COMPLETE_BOOKING_SELLER: [...SMS_BOOKING, 'PARTNERNAME'],
    PRODUCT_CONFIRM_REQUEST: ['PROD_NAME', 'PARTNERNAME'],
    PRODUCT_EXPIRE_SELLER : ['PROD_NAME', 'PARTNERNAME'],

    TRAVEL_CANCELED_BOOKER: [...Exclude<SMS_BOOKING, 'TRAVEL_CONFIRMED'>, 'CANCEL_REASON'],
    TRAVEL_CANCELED_SELLER: ['PROD_NAME', 'PARTNERNAME', "CANCEL_REASON"],
    TRAVEL_CONFIRMED_BOOKER: [...SMS_BOOKING, 'CONFRIM_MESSAGE'],
    TRAVEL_CONFIRMED_SELLER: ['PROD_NAME', 'PARTNERNAME'],
    TRAVEL_WITDRWAL_BOOKER: [...SMS_BOOKING, 'CANCEL_REASON'],
    TRAVEL_WITDRWAL_SELLER: ['PROD_NAME', 'PARTNERNAME', 'CANCEL_REASON'],

    SIGNUP_INDI_USER: ['USERNAME'],
    SIGNUP_PARNTER_B_USER: ['USERNAME'],

    SIGNUP_PARTNER_USER: ['USERNAME'],

    SETTLEMENT_REQUEST: SMS_SETTLE,
    SETTLEMENT_REJECT: [...SMS_SETTLE,"REJECT_REASON"],
    SETTLEMENT_COMPLETE: SMS_SETTLE,

    TRAVEL_D_N_DAY:  SMS_BOOKING,
    WHEN_D_DAY1_BOOKER: SMS_BOOKING
}


//아래에서 어떤 템플릿 버튼들을 출력할지 정한다 (더 좋은 방법을 찾고 싶었는데 그러지 못했다.);

const bookingCommon: SMS_BOOKING = ["BOOKERNMAE", "BOOKING_STATUS", "TRAVEL_CONFIRMED", "TRAVEL_DATE_YMD", "PEOPLE", "PRICE", "PROD_NAME", "BOOK_DAY", "D_DAY", "INTERGRATED_PRODUCT_INFO"];
const settleCommmon: SMS_SETTLE = ["PROD_NAME", "PARTNERNAME", "SETTLE_PRICE", "REQUEST_DATE"];

const BANK_TRANSFER_BOOKER: REPLACE["BANK_TRANSFER_BOOKER"] = ["BOOKERNMAE"];
const BANK_TRANSFER_SELLER: REPLACE["BANK_TRANSFER_SELLER"] = ["BOOKERNMAE"];
const CANCEL_BOOKING_BOOKER: REPLACE["CANCEL_BOOKING_BOOKER"] = bookingCommon;
const CANCEL_BOOKING_SELLER: REPLACE["CANCEL_BOOKING_SELLER"] = [...bookingCommon, "PARTNERNAME"];
const COMPLETE_BOOKING_BOOKER: REPLACE["COMPLETE_BOOKING_BOOKER"] = [...bookingCommon];
const COMPLETE_BOOKING_SELLER: REPLACE["COMPLETE_BOOKING_SELLER"] = [...bookingCommon, "PARTNERNAME"];
const SIGNUP_INDI_USER: REPLACE["SIGNUP_INDI_USER"] = ["USERNAME"];
const SIGNUP_PARNTER_B_USER: REPLACE["SIGNUP_PARNTER_B_USER"] = ["USERNAME"];
const SIGNUP_PARTNER_USER: REPLACE["SIGNUP_PARTNER_USER"] = ["USERNAME"];
const PRODUCT_CONFIRM_REQUEST: REPLACE["PRODUCT_CONFIRM_REQUEST"] = ["PROD_NAME", "PARTNERNAME"]
const PRODUCT_EXPIRE_SELLER: REPLACE["PRODUCT_EXPIRE_SELLER"] = ['PROD_NAME','PARTNERNAME']
const TRAVEL_CANCELED_BOOKER: REPLACE["TRAVEL_CANCELED_BOOKER"] = ["BOOKERNMAE","BOOKING_STATUS","TRAVEL_CONFIRMED","TRAVEL_DATE_YMD","PEOPLE","PRICE","PROD_NAME","BOOK_DAY","D_DAY","INTERGRATED_PRODUCT_INFO","CANCEL_REASON"]
const TRAVEL_CANCELED_SELLER: REPLACE["TRAVEL_CANCELED_SELLER"] = ['PROD_NAME', 'PARTNERNAME', "CANCEL_REASON"]
const TRAVEL_CONFIRMED_BOOKER: REPLACE["TRAVEL_CONFIRMED_BOOKER"] = [...bookingCommon,"CONFRIM_MESSAGE"]
const TRAVEL_CONFIRMED_SELLER: REPLACE["TRAVEL_CONFIRMED_SELLER"] = ['PROD_NAME', 'PARTNERNAME']
const TRAVEL_D_N_DAY: REPLACE["TRAVEL_D_N_DAY"] = [...bookingCommon]
const TRAVEL_WITDRWAL_BOOKER: REPLACE["TRAVEL_WITDRWAL_BOOKER"] = [...bookingCommon,"CANCEL_REASON"]
const TRAVEL_WITDRWAL_SELLER: REPLACE["TRAVEL_WITDRWAL_SELLER"] = ['PROD_NAME', 'PARTNERNAME', 'CANCEL_REASON']
const WHEN_D_DAY1_BOOKER: REPLACE["WHEN_D_DAY1_BOOKER"] = [...bookingCommon]
const SETTLEMENT_REQUEST: REPLACE["SETTLEMENT_REQUEST"] = [...settleCommmon];
const SETTLEMENT_COMPLETE: REPLACE["SETTLEMENT_COMPLETE"] = ["PROD_NAME", "PARTNERNAME", "SETTLE_PRICE","REQUEST_DATE"];
const SETTLEMENT_REJECT: REPLACE["SETTLEMENT_REJECT"] = ["PROD_NAME", "PARTNERNAME", "SETTLE_PRICE","REQUEST_DATE","REJECT_REASON"];

export const replaceObj:REPLACE = {
    BANK_TRANSFER_BOOKER,
    BANK_TRANSFER_SELLER,
    CANCEL_BOOKING_BOOKER,
    CANCEL_BOOKING_SELLER,
    COMPLETE_BOOKING_BOOKER,
    COMPLETE_BOOKING_SELLER,
    PRODUCT_CONFIRM_REQUEST,
    PRODUCT_EXPIRE_SELLER,
    SETTLEMENT_REQUEST,
    SIGNUP_INDI_USER,
    SIGNUP_PARNTER_B_USER,
    SIGNUP_PARTNER_USER,
    TRAVEL_CANCELED_BOOKER,
    TRAVEL_CANCELED_SELLER,
    TRAVEL_CONFIRMED_BOOKER,
    TRAVEL_CONFIRMED_SELLER,
    TRAVEL_D_N_DAY,
    TRAVEL_WITDRWAL_BOOKER,
    TRAVEL_WITDRWAL_SELLER,
    WHEN_D_DAY1_BOOKER,
    SETTLEMENT_COMPLETE,
    SETTLEMENT_REJECT,
}

// export const getReplaceListByEvent = <T extends keyof REPLACE>(event: T | null) => {

//     switch (event) {
//         case NotificationTriggerEvent.BANK_TRANSFER_BOOKER
//             : return BANK_TRANSFER_BOOKER
//         case NotificationTriggerEvent.BANK_TRANSFER_SELLER
//             : return BANK_TRANSFER_SELLER
//         case NotificationTriggerEvent.CANCEL_BOOKING_BOOKER
//             : return CANCEL_BOOKING_BOOKER
//         case NotificationTriggerEvent.CANCEL_BOOKING_SELLER
//             : return CANCEL_BOOKING_SELLER
//         case NotificationTriggerEvent.COMPLETE_BOOKING_BOOKER
//             : return COMPLETE_BOOKING_BOOKER
//         case NotificationTriggerEvent.COMPLETE_BOOKING_SELLER
//             : return COMPLETE_BOOKING_SELLER
//         case NotificationTriggerEvent.SIGNUP_INDI_USER
//             : return SIGNUP_INDI_USER
//         case NotificationTriggerEvent.SIGNUP_PARNTER_B_USER
//             : return SIGNUP_PARNTER_B_USER
//         case NotificationTriggerEvent.SIGNUP_PARTNER_USER
//             : return SIGNUP_PARTNER_USER
//         case NotificationTriggerEvent.SETTLEMENT_REQUEST
//             : return SETTLEMENT_REQUEST
//         case SIGNUP_PARTNER_USER
//             : return 
//     }
//     return []
// }