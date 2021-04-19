import { NICE_CANCLE } from "./niceUtils";
import { IRefundBody } from "./type";

export const cardRefund = async (body:IRefundBody):Promise<any> => {
    return await fetch(NICE_CANCLE, {
        method: "post",
        mode: "cors",
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        referrerPolicy: 'no-referrer'
    }).then((res) => {
        const result = res.json();
        return result;
    }).catch((e)=> {
        throw Error(e);
    })
}