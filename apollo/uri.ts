export const SERVER_URI:string = "http://13.209.234.84:4000/graphql" || "";
// "http://localhost:4000/graphql"
// 프로덕트: http://13.209.234.84:4000/graphql
// 개발: http://3.35.164.252:4000/graphql

export default (() => {
    return SERVER_URI;
})();