import { INiceElementProp } from "./NiceElement";

const TEMP = "http://10.159.22.63:4000"
export const NICE_GET_KEY = TEMP + "/payment"
export const NICE_MOBILE_AFTER_PAY = TEMP + "/authReq"
export const NICE_CANCLE = TEMP + "/authReq"

type AUTH = "MID" | "hex" | "EdiDate"
export const getNiceElementForTest = (requirePorp: Record<AUTH, string>): INiceElementProp => {
    const params = {
        ...requirePorp,
        ...NiceEelementTestData
    }

    return params

}

export const NiceEelementTestData: Omit<INiceElementProp, AUTH> = {
    Amt: "1000",
    BuyerEmail: "crawl123@naver.com",
    BuyerName: "김민재",
    BuyerTel: "01052374492",
    GoodsName: "상품명",
    PayMethod: "CARD",
    isAuth: true,
    Moid: "test",
    ReturnURL: NICE_MOBILE_AFTER_PAY,
    endPoint: NICE_MOBILE_AFTER_PAY,
    WapUrl: "localhost:3000",
    IspCancelUrl: "localhost:3000",
    VbankExpDate: "20211010",
    sid:""
}

