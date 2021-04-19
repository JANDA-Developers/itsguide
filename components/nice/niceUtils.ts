import { END_POINT, SEVER } from "../../apollo/uri";
import { BookingStatus } from "../../types/api";
import { INiceElementProp } from "./NiceElement";
export const NICE_GET_URI = SEVER + "/payment"
export const NICE_MOBILE_AFTER_PAY = SEVER + "/authReq"
export const NICE_CANCLE = SEVER + "/cancelReq"


// requirePorp: Record<AUTH, string> & Partial<INiceElementProp>

interface IgenDataProp {
    auth: TNiceAuthData;
    buy: TNiceBuyData;
    groupCode: string;
}
export const generateNiceData = ({
    auth,
    buy,
    groupCode
}:IgenDataProp): INiceElementProp => {
    const randomNumber = Math.floor((Math.random() * 1000) + 1);;
    const Moid = "PINK" + `-${groupCode}-` + randomNumber;
    
    const params:INiceElementProp = {
        ...niceDataStatic,
        ...auth,
        ...buy,
        PayMethod:"CARD",
        isAuth: true,
        Moid
    }

    return params;
}
type AUTH = "MID" | "hex" | "EdiDate" | "Amt"
type TNiceAuthData = Record<AUTH, string>;
type TNiceBuyData = Pick<INiceElementProp, "GoodsName" |"BuyerName" | "BuyerTel" | "BuyerEmail">;
type TNiceStaticData = Pick<INiceElementProp, "ReturnURL" |"IspCancelUrl" | "endPoint" | "WapUrl">; 
export const niceDataStatic:TNiceStaticData = {
    ReturnURL: NICE_MOBILE_AFTER_PAY,
    endPoint: NICE_MOBILE_AFTER_PAY,
    WapUrl: "localhost:3000",
    IspCancelUrl: "localhost:3000",
}

// export const NiceEelementTestData: Omit<INiceElementProp, AUTH> = {
//     BuyerEmail: "crawl123@naver.com",
//     BuyerName: "김민재",
//     BuyerTel: "01052374492",
//     GoodsName: "상품명",
//     PayMethod: "CARD",
//     isAuth: true,
//     Moid: "test",
//     VbankExpDate: "20211010",
//     sid:""
// }

