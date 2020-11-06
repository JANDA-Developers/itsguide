import { IProduct, QStatus, IPageInfo } from "./interface"
import { IProductComponentProp } from "../component/product/Product";
import { ProductStatus, ProductCreateInput, ItineraryArrayInput } from "./api";

export const DEFAULTS = {
    logo: "src/img/logo_1.png",
    productImg: "src/img/sample_01.gif",
}

export const BG = (url: string) => ({ backgroundImage: `url(${url})` })

export const Econvert = (status: ProductStatus) => {

    if (status === ProductStatus.OPEN) {
        return "해결완료"
    }

    if (status === ProductStatus.READY) {
        return "해결중"
    }
}

export const DEFAULT_PAGE: IPageInfo = {
    __typename: "Page",
    cntPerPage: 0,
    end_page_num: 0,
    isNext: false,
    isPrev: false,
    next_page_num: 0,
    page: 0,
    prev_page_num: 0,
    start_page_num: 0,
    totalPageSize: 0
}

export const EMPTY_EDITOR = { blocks: [] }