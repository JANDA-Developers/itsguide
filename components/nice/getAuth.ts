import { NICE_GET_KEY } from "./niceUtils";
import { IAuthInfo } from "./type";

export type TGetAUth = {data:IAuthInfo};
export const getAuth = async (amt:number):Promise<TGetAUth> => {
    return await fetch(NICE_GET_KEY, {
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
        alert("pay err")
        throw Error(e);
    })
}