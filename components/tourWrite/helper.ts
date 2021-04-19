import dayjs from "dayjs";
import { Ffile, ItineraryCreateInput, ProductCreateInput, ProductStatus } from "types/api";
import { DEFAULT_IT } from "../../types/const";

export type TRange = {
    from?: Date | undefined;
    to?: Date | undefined;
}

export const generateitinery = (range:TRange,its:ItineraryCreateInput[]):ItineraryCreateInput[] => {
    let {from,to} = range;
    if (!from) return [];
    if (!to) to = from

    let tempSch = its;

    const diff = dayjs(to).diff(from, "d") + 1;

    // 배열 길이가 줄어들었다면 그만큼 잘라주어야함.
    if (diff < its.length)
        tempSch = tempSch.slice(0, diff);

    // 인덱스 가 부족하다면 채워줌
    if (diff > its.length) {
        const newSchs = new Array(diff - tempSch.length).fill(null).map(()=>({...DEFAULT_IT, contents: [""]}));
        console.log("newSchs");
        console.log(newSchs);
        tempSch = [...tempSch, ...newSchs]
    }

    // 전체를 리셋함.
    return  tempSch.map((sch,i) => (
        {
            ...sch,
            date: dayjs(from).add(i,"day").toDate()
        })) || []
}


export const detactRangeChange = (range:TRange):string[] =>  {
    return [dayjs(range.from || new Date())?.format("MMDD"), dayjs(range.to || new Date())?.format("MMDD")]
}





type IGetNextDataProp = {
    its:ItineraryCreateInput[],
    title:string,
    address: string,
    adult_price: any,
    baby_price: any,
    kids_price: any,
    maxMember: any,
    minMember: any,
    caution:string;
    contents: any,
    inOrNor: any,
    thumbs: Partial<Ffile>[]
    info: string;
    keyWards: string[]
    startPoint: string;
    status: ProductStatus   
    subTitle: string;
    categoryId: string;
}