import { NICE_GET_URI } from "./niceUtils";
import { IAuthInfo } from "./type";

export type TGetAUth = {data:IAuthInfo};
export const getAuth = async (amt:number):Promise<TGetAUth> => {
    return await fetch(NICE_GET_URI, {
        method: "post",
        mode: "cors",
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            amt
        }),
        referrerPolicy: 'no-referrer'
    }).then((res) =>
        res.json()
    ).catch((e)=> {
        throw Error(e);
    })
}