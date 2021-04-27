import dayjs from "dayjs";
import { IPageInfo, Ipopup } from "./interface";
import {
    Fquestion_author_profileImg,
    ItineraryCreateInput,
    LinkBehavior,
    ProductStatus,
    SettlementStatus,
    UserRole,
} from "./api";
import { generateRandomStringCode } from "../utils/codeGenerator";

export const DEFAULT_LOGO = "/its/img/logo_1.png";

export const lastMonthFirstDate = dayjs()
    .add(-1, "month")
    .set("day", 1)
    .toDate();
export const lastMonthLastDate = dayjs()
    .add(-1, "month")
    .endOf("month")
    .toDate();
export const thisMonthLastDate = dayjs().endOf("month").toDate();
export const thisMonthFirstDate = dayjs().startOf("month").toDate();
export const oneYearBefore = dayjs().add(-1, "y").toDate();
export const sixMonthBefore = dayjs().add(-6, "month").toDate();

export const DEFAULTS = {
    logo: "src/img/logo_1.png",
    productImg: "src/img/sample_01.gif",
};

export const BG = (url: string) => ({ backgroundImage: `url(${url})` });
export const BGprofile = (
    profileImg: Fquestion_author_profileImg | null | undefined
) => {
    return BG(profileImg?.uri || DEFAULT_PROFILE_IMG);
};

export const Econvert = (status: ProductStatus) => {
    if (status === ProductStatus.OPEN) {
        return "해결완료";
    }

    if (status === ProductStatus.READY) {
        return "해결중";
    }
};

export const DEFAULT_PAGE: IPageInfo = {
    __typename: "Page",
    cntPerPage: 1,
    end_page_num: 0,
    isNext: false,
    isPrev: false,
    next_page_num: 0,
    page: 1,
    prev_page_num: 0,
    start_page_num: 0,
    totalPageSize: 0,
    remainder: 0,
    totalCount: 0,
};

export const EMPTY_EDITOR = { blocks: [] };

export const SAMPLE_FILE = {
    description: "",
    extension: "",
    fileType: "",
    name: "doob.jpg",
    owner: "admin@naver.com",
    uri: "https://pink-loader-storage.s3.ap-northeast-2.amazonaws.com/doob.jpg",
};

export const DEFAULT_IT: ItineraryCreateInput = {
    contents: [""],
    images: [],
    date: new Date(),
    title: "",
};

export const ALLOW_ADMINS = [UserRole.admin, UserRole.manager];
export const ALLOW_LOGINED = [
    UserRole.admin,
    UserRole.individual,
    UserRole.manager,
    UserRole.partner,
    UserRole.partnerB,
];
export const ALLOW_FULLESS = [...ALLOW_LOGINED, UserRole.anonymous];
export const ALLOW_SELLERS = [
    UserRole.partner,
    UserRole.partnerB,
    UserRole.manager,
    UserRole.admin,
];

export const DEFAULT_PROFILE_IMG = "/img/profile_default160.gif";

export const DEFAULT_PAGEINFO = {
    pageInfo: {},
    defaultPageInfo: {},
    pageKey: "",
};

export const defaultModalGet: () => Ipopup = () => ({
    __typename: "Modal",
    open: true,
    isDelete: false,
    _id: generateRandomStringCode(4),
    content: "",
    createdAt: new Date(),
    endDate: new Date(),
    link: "",
    linkBehavior: LinkBehavior.blank,
    startDate: new Date(),
    style: {
        height: 100,
        left: 0,
        top: 0,
        width: 100,
    },
    title: "",
    updatedAt: new Date(),
    priority: 1,
});

export const AFTER_OPEN_PRODUCT_STATUS = [
    ProductStatus.OPEN,
    ProductStatus.EXPIRED,
    ProductStatus.CANCELD,
    ProductStatus.COMPLETED,
];
export const DELETE_AVAIABLE_PRODUCTS = [
    ProductStatus.UPDATE_REQ,
    ProductStatus.UPDATE_REQ_REFUSED,
    ProductStatus.REFUSED,
    ProductStatus.READY,
];
export const SETTLEMENT_REQ_AVAIABLE = [ProductStatus.COMPLETED];

export const CONDITION = {
    travelCacnel: "여행취소는 예약자가 없을때만 가능합니다.",
    travelDetermineChange: "출발 확정 임의변경은 최소 7일전에 해주셔야합니다.",
};
export const SYSTEM_CHECK_MESSAGE = {
    travelCancel: `
    정말로 상품을 취소 하시겠습니까?
    `,
    productDelete: `
        정말로 상품을 삭제 하시겠습니까?
    `,
};
