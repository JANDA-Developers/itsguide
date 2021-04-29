import dayjs from "dayjs";
import {
    Ffile,
    ItineraryCreateInput,
    ProductCreateInput,
    ProductStatus,
} from "types/api";
import { DEFAULT_IT } from "../../types/const";

export type TRange = {
    from?: Date | undefined;
    to?: Date | undefined;
};

export const generateitinery = (
    range: TRange,
    its: ItineraryCreateInput[]
): ItineraryCreateInput[] => {
    let { from, to } = range;
    if (!from) return its.map((it) => ({ ...it, isOver: true }));
    if (!to) to = from;

    let tempSch = its;

    const diff = dayjs(to).diff(from, "d") + 1;
    const isOver = (index: number) => diff <= index;

    // 인덱스 가 부족하다면 채워줌
    if (diff > its.length) {
        const newSchs = new Array(diff - tempSch.length)
            .fill(null)
            .map(() => ({ ...DEFAULT_IT, contents: [""] }));
        tempSch = [...tempSch, ...newSchs];
    }

    // 전체를 리셋함.
    return (
        tempSch.map((sch, i) => ({
            ...sch,
            isOver: isOver(i) ? true : false,
            date: dayjs(from).add(i, "day").toDate(),
        })) || []
    );
};

export const detactRangeChange = (range: TRange): string[] => {
    return [
        dayjs(range.from || new Date())?.format("MMDD"),
        dayjs(range.to || new Date())?.format("MMDD"),
    ];
};

export const filterOver = (sch: ItineraryCreateInput[]) => {
    // @ts-ignore
    return sch.filter((sch) => !sch.isOver);
};

type IGetNextDataProp = {
    its: ItineraryCreateInput[];
    title: string;
    address: string;
    adult_price: any;
    baby_price: any;
    kids_price: any;
    maxMember: any;
    minMember: any;
    caution: string;
    contents: any;
    inOrNor: any;
    thumbs: Partial<Ffile>[];
    info: string;
    keyWards: string[];
    startPoint: string;
    status: ProductStatus;
    subTitle: string;
    categoryId: string;
};
