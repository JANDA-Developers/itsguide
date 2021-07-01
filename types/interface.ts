import { QueryHookOptions } from "@apollo/client";
import { CSSProperties, Dispatch } from "react";
import { IPopupStyle } from "../components/popupconfig/PopupBox";
import { ListInitOptions } from "../hook/useListQuery";
import {
    Fmodal,
    NotificationTriggerEvent,
    portfolioFindById_PortfolioFindById_data,
    productFindById_ProductFindById_data,
    productFindById_ProductFindById_data_itinerary,
    productList_ProductList_data,
    productList_ProductList_page,
    ReplaceString,
    _UserFilter,
} from "../types/api";
import { genrateOption } from "../utils/query";
export interface Iitineraries
    extends productFindById_ProductFindById_data_itinerary {}
export interface IproductFindById
    extends productFindById_ProductFindById_data {}
export interface IProduct extends productList_ProductList_data {}
export interface IPortfolio extends portfolioFindById_PortfolioFindById_data {}
export interface IPageInfo extends productList_ProductList_page {}
export interface ILi extends React.HTMLAttributes<HTMLLIElement> {}
export interface IRef<T = HTMLDivElement> extends React.MutableRefObject<T> {}
export declare type TElements = string | JSX.Element | JSX.Element[] | string[];
export interface IDiv extends React.HTMLAttributes<HTMLDivElement> {}

export type TUserFilterKeys = keyof _UserFilter;
export type TCount = {
    name: string;
    value: number;
};

export type TBracketItem = {
    id: string;
    name: string;
    price: number;
    count: TCount[];
};

export interface IHumanCount {
    adult: number;
    kids: number;
    baby: number;
}

export enum QStatus {
    "PROCESSING" = "PROCESSING",
    "DONE" = "DONE",
}
export declare type ISet<T> = Dispatch<React.SetStateAction<T>>;

export type TPageKeys =
    | "payment"
    | "event"
    | "ticket"
    | "guideMain"
    | "anonymouseFindBook"
    | "mypageLayout"
    | "findmember"
    | "announce"
    | "qna"
    | "question"
    | "portfolio"
    | "join"
    | "login"
    | "tourView"
    | "tourWrite"
    | "search"
    | "searchAll"
    | "news"
    | "site-info"
    | "main"
    | "portfolio"
    | "tourMain"
    | "tourWrite"
    | "tourList";

export type TLangs = "kr" | "en" | string;
interface Foo {
    style?: CSSProperties;
}
interface TInfoCell extends Foo {
    [key: string]: any;
}
export type TStieInfo = {
    [key: string]: TInfoCell;
};

export type E_INPUT = React.ChangeEvent<HTMLInputElement>;

export interface IlistQueryInit<F, S, Q, V>
    extends Partial<ListInitOptions<F, S>> {
    options?: QueryHookOptions<Q, V>;
}

type ReplaceKR = Record<ReplaceString, string>;
export const ReplaceKr: ReplaceKR = {
    REJECT_REASON: "거절사유",
    BOOK_DAY: "예약일",
    CANCEL_REASON: "취소사유",
    CONFRIM_MESSAGE: "확인메세지",
    D_DAY: "출발 N일전",
    BOOKERNMAE: "예약자명",
    SETTLE_PRICE: "정산금",
    REFUND_AMT: "환불금액",
    REQUEST_DATE: "요청일",
    USERNAME: "유저명",
    BOOKING_STATUS: "예약상태",
    INTERGRATED_PRODUCT_INFO: "(상품명/예약인원/예약금/출발일자)",
    PARTNERNAME: "가이드명",
    PEOPLE: "예약인원",
    PROD_NAME: "상품명",
    PRICE: "예약가격",
    TRAVEL_CONFIRMED: "출발 확정/미확정",
    TRAVEL_DATE_YMD: "출발일자",
};

export interface Ipopup extends Fmodal {
    style: IPopupStyle;
}

export type TListQueryVariables<F, S, Q, V> = [
    Partial<ListInitOptions<F, S>>,
    genrateOption<Q, V>
];
