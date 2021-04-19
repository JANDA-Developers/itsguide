import dayjs from "dayjs";
import { getBookingCount } from "../../utils/getBookingCount";

export const setLastMonthCount = (id:string,sellerId:string) => {
    const lastMonthFirstDate = dayjs().add(-1,"m").set("day",1).toDate(); 
    const monthFirstDate = dayjs().set("day",1).toDate(); 
    getBookingCount({
        filter: {
            seller_eq: sellerId,
            createdAt_gte: lastMonthFirstDate,
            createdAt_lt: monthFirstDate 
        }
    }).then((number) => {
        const target = document.getElementById(id);
        if (!target) return;
        target.innerHTML = `${number}`;
    })
}


export const setThisMonthCount = (id:string,sellerId:string) => {
    const lastMonthFirstDate = dayjs().set("day",1).toDate(); 
    getBookingCount({
        filter: {
            seller_eq: sellerId,
            createdAt_gte: lastMonthFirstDate,
        }
    }).then((number) => {
        const target = document.getElementById(id);
        if (!target) return;
        target.innerHTML = `${number}`;
    })
}