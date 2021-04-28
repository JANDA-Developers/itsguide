const LOCAL = "http://localhost:80";
const PROD = "https://api.itsguide.co.kr";
const DEV = "http://3.35.164.252:4000";


export const SEVER = process.env.NODE_ENV === "production" ? PROD : PROD;
export const END_POINT = SEVER + "/graphql";
export const SERVER_URI: string = END_POINT || "";

export default (() => {
    return SERVER_URI;
})();