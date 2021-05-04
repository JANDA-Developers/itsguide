import dayjs from "dayjs";
import { Dispatch, RefObject, SetStateAction, useRef, useState } from "react";
import {
    filterOver,
    generateitinery,
    TRange,
} from "../components/tourWrite/helper";
import {
    Ffile,
    ItineraryCreateInput,
    Lang,
    productCreate,
    ProductCreateInput,
    productCreateVariables,
    ProductStatus,
    ProductType,
    ProductUpdateInput,
} from "../types/api";
import { IproductFindById, ISet } from "../types/interface";
import isEmpty from "../utils/isEmpty";
import { omits } from "../utils/omit";
import { Storage } from "../utils/Storage";
import { toNumber } from "../utils/toNumber";
import { Validater } from "../utils/validate";
import { useUpload } from "./useUpload";
import { autoComma, deepCopy } from "../utils/formatter";
import {
    useProductCreate,
    useProductDelete,
    useProductUpdate,
} from "./useProduct";
import { useRouter } from "next/router";
import { ProductTempBoard } from "../utils/Storage2";
import { openModal } from "../utils/popUp";

type SimpleTypePart =
    | "isOpen"
    | "title"
    | "address"
    | "adult_price"
    | "baby_price"
    | "kids_price"
    | "startPoint"
    | "maxMember"
    | "minMember"
    | "subTitle"
    | "caution"
    | "info"
    | "contents"
    | "inOrNor"
    | "isNotice"
    | "lang";
export type TSimpleTypePart = Pick<
    Required<ProductCreateInput>,
    SimpleTypePart
>;

export const DEFAULT_SIMPLE_TOUR_DATA: TSimpleTypePart = {
    address: "",
    adult_price: 0,
    baby_price: 0,
    kids_price: 0,
    info: "",
    maxMember: 0,
    minMember: 0,
    startPoint: "",
    subTitle: "",
    title: "",
    caution: "",
    lang: Lang.KO,
    contents: "",
    inOrNor: "",
    isNotice: false,
    isOpen: false,
};

export interface IUseTourData {
    its: ItineraryCreateInput[];
    simpleData: TSimpleTypePart;
    categoryId: string;
    regionId: string;
    status: ProductStatus;
    keyWards: string[];
    thumbs: Ffile[];
    type: ProductType;
    lang: Lang;
}

interface IUseTourDefaultData {
    simpleData: TSimpleTypePart;
    categoryId: string;
    files: Ffile[];
    thumbs: Ffile[];
    regionId: string;
    lang: Lang;
    contents: string;
    status: ProductStatus;
    its: ItineraryCreateInput[];
    keyWards: string[];
    type: ProductType;
}

interface ITourDataSet {
    setLang: ISet<Lang>;
    setits: ISet<ItineraryCreateInput[]>;
    setSimpleData: ISet<TSimpleTypePart>;
    setCategoryId: ISet<string>;
    setStatus: ISet<ProductStatus>;
    setThumbs: ISet<Ffile[]>;
    setkeyWards: ISet<string[]>;
    setLoadKey: ISet<number>;
    setType: ISet<ProductType>;
}

export interface IUseTour {
    imgUploading: boolean;
    loadKeyAdd: () => void;
    tourData: IUseTourData;
    tourSets: ITourDataSet;
    validater: Validater;
    setGroupCode: Dispatch<SetStateAction<string | undefined>>;
    setTourData: (data: Partial<IUseTourData>) => void;
    loadKey: number;
    firstDate?: Date;
    lastDate?: Date;
    mutations: {
        createFn: (params: ProductCreateInput) => void;
        updateFn: (_id: string, params: ProductUpdateInput) => void;
        deleteFn: (id: string) => void;
    };
    getCreateInput: () => ProductCreateInput;
    getUpdateInput: () => ProductUpdateInput;
    hiddenFileInput: RefObject<HTMLInputElement>;
    handles: {
        handleRegionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
        handleTextData: (key: keyof TSimpleTypePart) => (data: string) => void;
        handleTempSave: () => Promise<void>;
        handleDateState: ({ from, to }: any) => void;
        handleClearThumb: (index: number) => () => void;
        handleChangeSumbNail: (
            event: React.ChangeEvent<HTMLInputElement>
        ) => void;
        handleUploadClick: () => void;
        handleCatChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
        handleChangeStatus: (e: React.ChangeEvent<HTMLInputElement>) => void;
        handleInputChange<T extends SimpleTypePart>(
            key: T
        ): (e: React.ChangeEvent<HTMLInputElement>) => void;
        handleInputCommaChange<T extends SimpleTypePart>(
            key: T
        ): (e: React.ChangeEvent<HTMLInputElement>) => void;
        handleLoad: () => void;
    };
}

interface IUseTourProps extends Partial<IUseTourDefaultData> {}
export const useTourWrite = ({ ...defaults }: IUseTourProps): IUseTour => {
    const [type, setType] = useState<ProductType>(
        defaults.type || ProductType.TOUR
    );
    const [its, setits] = useState<ItineraryCreateInput[]>(
        deepCopy(defaults.its || [])
    );
    const [simpleData, setSimpleData] = useState<TSimpleTypePart>(
        defaults.simpleData || DEFAULT_SIMPLE_TOUR_DATA
    );
    const [categoryId, setCategoryId] = useState<string>(
        defaults.categoryId || ""
    );
    const [regionId, setRegionId] = useState<string>(defaults.regionId || "");
    const [lang, setLang] = useState<Lang>(defaults.lang || Lang.KO);
    const [status, setStatus] = useState<ProductStatus>(
        defaults.status || ProductStatus.READY
    );
    const [thumbs, setThumbs] = useState<Ffile[]>(
        Array.from(defaults.thumbs || [])
    );
    const [keyWards, setkeyWards] = useState<string[]>(
        Array.from(defaults.keyWards || [])
    );
    const [loadKey, setLoadKey] = useState<number>(0);
    const [groupCode, setGroupCode] = useState<string>();
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const { signleUpload, imgUploading } = useUpload();
    const router = useRouter();
    const filterOverIts = filterOver(its);

    const [productDelete] = useProductDelete({
        onCompleted: ({ ProductDelete }) => {
            if (ProductDelete.ok) {
                alert("상품이 삭제되었습니다.");
                router.push("/tour/list");
            }
        },
    });

    const [productUpdate, { loading: updateLoading }] = useProductUpdate({
        onCompleted: ({ ProductUpdate }) => {
            if (ProductUpdate.ok) {
                alert("상품이 업데이트 되었습니다.");
                router.push(`/tour/view/${ProductUpdate?.data?._id}`);
            }
        },
    });

    const [ProductCreateMu, { loading: createLoading }] = useProductCreate({
        onCompleted: ({ ProductCreate }) => {
            if (ProductCreate.ok) {
                alert("상품이 생성되었습니다.");
                router.push(`/tour/view/${ProductCreate!.data!._id}`);
            }
        },
    });

    const createFn = (params: ProductCreateInput) => {
        if (createLoading) return;
        ProductCreateMu({
            variables: {
                params,
                groupCode,
            },
        });
    };

    const updateFn = (_id: string, params: ProductUpdateInput) => {
        if (updateLoading) return;
        productUpdate({
            variables: {
                _id,
                params: {
                    ...params,
                },
                reason: "",
            },
        });
    };

    const deleteFn = (id: string) => {
        if (confirm("정말로 상품을 삭제 하시겠습니가?"))
            productDelete({
                variables: {
                    id,
                },
            });
    };

    const mutations = {
        createFn,
        updateFn,
        deleteFn,
    };

    const validater = new Validater([
        {
            value: thumbs?.[0]?.uri,
            failMsg: "썸네일은 필수 입니다.",
            id: "thumb",
        },
        {
            value: simpleData.title,
            failMsg: "제목값은 필수 입니다.",
            id: "title",
        },
        {
            value: simpleData.address,
            failMsg: "주소값은 필수 입니다.",
            id: "address",
        },
        {
            value: simpleData.startPoint,
            failMsg: "출발지값은 필수 입니다.",
            id: "startPoint",
        },
        {
            value: simpleData.contents,
            failMsg: "안내 및 참고를 입력 해주세요.",
            failFn: () => {
                document.getElementById("tap2")?.click();
            },
            id: "content",
        },
        {
            value: simpleData.inOrNor,
            failMsg: "참가자 준비물 내용을 입력 해주세요.",
            failFn: () => {
                document.getElementById("tap3")?.click();
            },
            id: "inOrNor",
        },
        {
            value: simpleData.info,
            failMsg: "안내문 내용을 입력 해주세요.",
            failFn: () => {
                document.getElementById("tap4")?.click();
            },
            id: "info",
        },
        {
            value: categoryId,
            failMsg: "카테고리 값은 필수 입니다.",
            id: "category",
        },
        {
            value: regionId,
            failMsg: "지역을 선택 해주세요",
            id: "RegionId",
        },
        {
            value: !isEmpty(its),
            failMsg: "여행일정은 필수 입니다.",
            failFn: () => {
                document.getElementById("tap1")?.click();
            },
            id: "itinerary",
        },
        {
            value: !isEmpty(keyWards),
            failMsg: "키워드 값은 필수 입니다.",
            id: "keywards",
        },
        {
            value: !isEmpty(type),
            failMsg: "상품타입 값은 필수 입니다.",
            id: "type",
        },
        {
            value: lang,
            failMsg: "상품을 작성한 언어를 선택 해주세요.",
            id: "lang",
        },
        {
            value: !filterOverIts?.find((it) => Boolean(it.title) === false),
            failMsg: "일정 타이틀 값은 필수 입니다.",
            failFn: () => {
                document.getElementById("tap01")?.click();
                $(".taptitle .input_01")
                    .filter(function () {
                        return !(this as HTMLInputElement).value;
                    })
                    .focus();
            },
        },
    ]);

    const tourData: IUseTourData = {
        categoryId,
        regionId,
        its,
        keyWards,
        type,
        simpleData,
        status,
        thumbs,
        lang,
    };
    const {
        address,
        adult_price,
        baby_price,
        caution,
        contents,
        inOrNor,
        info,
        isNotice,
        kids_price,
        maxMember,
        minMember,
        startPoint,
        subTitle,
        title,
        isOpen,
    } = simpleData;

    const tourSets: ITourDataSet = {
        setLang,
        setCategoryId,
        setkeyWards,
        setLoadKey,
        setSimpleData,
        setStatus,
        setThumbs,
        setits,
        setType,
    };

    const getCreateInput = (): ProductCreateInput => {
        const createData: ProductCreateInput = {
            lang,
            categoryId,
            keyWards,
            address,
            adult_price: toNumber(adult_price),
            baby_price: toNumber(baby_price),
            kids_price: toNumber(kids_price),
            maxMember: toNumber(maxMember),
            minMember: toNumber(minMember),
            caution,
            contents,
            images: thumbs,
            inOrNor,
            info,
            regionId,
            itinerary: omits(filterOverIts, ["isOver" as any]),
            startPoint,
            title,
            isNotice,
            isOpen,
            subTitle,
            type,
        };
        return omits(createData);
    };

    const getUpdateInput = (): ProductUpdateInput => {
        const updateParams = getCreateInput();
        return updateParams;
    };

    const loadKeyAdd = () => {
        setLoadKey(loadKey + 1);
    };

    const handleUploadClick = () => {
        hiddenFileInput.current.value = "";
        hiddenFileInput.current?.click();
    };

    const handleChangeSumbNail = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_: string, data: Ffile) => {
            thumbs.push(data);
            setThumbs([...thumbs]);
        };
        signleUpload(fileUploaded, onUpload);
    };

    const handleClearThumb = (index: number) => () => {
        thumbs.splice(index, 1);
        setThumbs([...thumbs]);
    };

    const setTourData = (data: Partial<IUseTourData>) => {
        if (data.categoryId) setCategoryId(data.categoryId);
        if (data.its) setits(data.its);
        if (data.simpleData) setSimpleData(data.simpleData);
        if (data.status) setStatus(data.status);
        if (data.thumbs) setThumbs(data.thumbs);
        if (data.type) setType(data.type);
        if (data.keyWards) setkeyWards(data.keyWards);
        if (data.regionId) setRegionId(data.regionId);
        if (data.lang) setLang(data.lang);
    };

    const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextRegion = e.currentTarget.value;
        setRegionId(nextRegion);
    };

    const handleCatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextCat = e.currentTarget.value;
        setCategoryId(nextCat);
    };

    const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value as ProductStatus);
    };

    const handleTempSave = async () => {
        ProductTempBoard.addItem({
            ...tourData,
        });
        loadKeyAdd();
        Storage!.saveLocal("write", tourData);
        alert("저장완료");
    };

    const handleLoad = () => {
        const savedData = Storage!.getLocalObj<IUseTourData>(
            "write",
            undefined
        );
        // if (!savedData) {
        //     alert("저장된 정보가 없습니다.");
        //     return;
        // }
        // setTourData(savedData);
        // alert("로드완료");
        openModal("#LocalStorageBoard")();
    };

    const handleDateState = ({ from, to }: TRange) => {
        const newItinerary = generateitinery({ from, to }, its);
        if (newItinerary) setits([...newItinerary]);
    };

    function set<T extends keyof TSimpleTypePart>(key: T, value: any) {
        simpleData[key] = value;
        setSimpleData({ ...simpleData });
    }

    function handleInputChange<T extends keyof TSimpleTypePart>(key: T) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            set(key, e.currentTarget.value);
        };
    }

    function handleInputCommaChange<T extends keyof TSimpleTypePart>(key: T) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            set(key, autoComma(e.currentTarget.value));
        };
    }

    const handleTextData = (key: keyof TSimpleTypePart) => (data: string) => {
        set(key, data);
    };

    const fistItDate = filterOverIts[0]?.date;
    const firstDate = fistItDate ? dayjs(fistItDate).toDate() : undefined;
    const lastItDate = filterOverIts[filterOverIts.length - 1]?.date;
    const lastDate = lastItDate ? dayjs(lastItDate).toDate() : undefined;

    return {
        imgUploading,
        tourData,
        loadKey,
        loadKeyAdd,
        tourSets,
        validater,
        setTourData,
        setGroupCode,
        firstDate,
        hiddenFileInput,
        getCreateInput,
        getUpdateInput,
        lastDate,
        mutations,
        handles: {
            handleLoad,
            handleTextData,
            handleTempSave,
            handleInputChange,
            handleRegionChange,
            handleCatChange,
            handleChangeStatus,
            handleUploadClick,
            handleChangeSumbNail,
            handleClearThumb,
            handleDateState,
            handleInputCommaChange,
        },
    };
};

export const getDefault = (
    product: IproductFindById | undefined
): Partial<IUseTourDefaultData> => {
    if (!product) return {};

    const {
        address,
        adult_price,
        baby_price,
        category,
        caution,
        contents,
        images: thumbs,
        inOrNor,
        info,
        lang,
        isNotice,
        itinerary: its,
        keyWards,
        kids_price,
        maxMember,
        minMember,
        startPoint,
        status,
        subTitle,
        region,
        title,
        isOpen,
    } = product;

    const simpleData: TSimpleTypePart = {
        address,
        adult_price,
        baby_price,
        caution,
        lang,
        contents,
        inOrNor,
        info,
        isNotice,
        kids_price,
        maxMember,
        minMember,
        startPoint,
        subTitle,
        title,
        isOpen,
    };

    return {
        categoryId: category?._id,
        contents,
        its,
        regionId: region?._id || "",
        keyWards: keyWards || [],
        simpleData,
        status,
        thumbs: thumbs || [],
    };
};
