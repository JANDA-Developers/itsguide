import dayjs from "dayjs";
import { RefObject, useRef, useState } from "react";
import { generateitinery, TRange } from "../components/tourWrite/helper";
import { Ffile, ItineraryCreateInput, ProductCreateInput, ProductStatus, ProductUpdateInput } from "../types/api";
import { IproductFindById, ISet } from "../types/interface";
import isEmpty from "../utils/isEmpty";
import { omits } from "../utils/omit";
import { Storage } from "../utils/Storage";
import { toNumber } from "../utils/toNumber";
import { Validater } from "../utils/validate";
import { useUpload } from "./useUpload";
import { autoComma, deepCopy } from "../utils/formatter";

type SimpleTypePart = "title" | "address" | "adult_price" | "baby_price" | "kids_price" | "startPoint" | "maxMember" | "minMember" | "subTitle" | "caution" | "info" | "contents" | "inOrNor" | "isNotice"
export type TSimpleTypePart = Pick<Required<ProductCreateInput>, SimpleTypePart>

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
    contents: "",
    inOrNor: "",
    isNotice: false,
}

export interface IUseTourData {
    its: ItineraryCreateInput[];
    simpleData: TSimpleTypePart;
    categoryId: string;
    status: ProductStatus;
    keyWards: string[];
    thumbs: Ffile[];
}

interface IUseTourDefaultData {
    simpleData: TSimpleTypePart;
    categoryId: string;
    files: Ffile[]
    thumbs: Ffile[];
    contents: string
    status: ProductStatus;
    its: ItineraryCreateInput[];
    keyWards: string[];
}


interface ITourDataSet {
    setits: ISet<ItineraryCreateInput[]>;
    setSimpleData: ISet<TSimpleTypePart>;
    setCategoryId: ISet<string>;
    setStatus: ISet<ProductStatus>;
    setThumbs: ISet<Ffile[]>
    setkeyWards: ISet<string[]>;
    setLoadKey: ISet<number>;
}

export interface IUseTour {
    loadKeyAdd: () => void;
    tourData: IUseTourData;
    tourSets: ITourDataSet;
    validater: Validater;
    setTourData: (data: Partial<IUseTourData>) => void;
    loadKey: number;
    firstDate: Date;
    lastDate: Date;
    getCreateInput: () => ProductCreateInput;
    getUpdateInput: () => ProductUpdateInput;
    hiddenFileInput: RefObject<HTMLInputElement>
    handles: {
        handleTextData: (key: keyof TSimpleTypePart) => (data: string) => void
        handleTempSave: () => Promise<void>
        handleDateState: ({ from, to }: any) => void
        handleClearThumb: (index: number) => () => void
        handleChangeSumbNail: (event: React.ChangeEvent<HTMLInputElement>) => void
        handleUploadClick: () => void
        handleCatChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
        handleChangeStatus: (e: React.ChangeEvent<HTMLInputElement>) => void
        handleInputChange<T extends SimpleTypePart>(key: T): (e: React.ChangeEvent<HTMLInputElement>) => void
        handleInputCommaChange<T extends SimpleTypePart>(key: T): (e: React.ChangeEvent<HTMLInputElement>) => void
        handleLoad: () => void
    }
}

interface IUseTourProps extends Partial<IUseTourDefaultData> {
}
export const useTourWrite = ({ ...defaults }: IUseTourProps): IUseTour => {
    const [its, setits] = useState<ItineraryCreateInput[]>(deepCopy(defaults.its || []));
    const [simpleData, setSimpleData] = useState<TSimpleTypePart>(defaults.simpleData || DEFAULT_SIMPLE_TOUR_DATA)
    const [categoryId, setCategoryId] = useState<string>(defaults.categoryId || "");
    const [status, setStatus] = useState<ProductStatus>(defaults.status || ProductStatus.CLOSE);
    const [thumbs, setThumbs] = useState<Ffile[]>(Array.from(defaults.thumbs || []))
    const [keyWards, setkeyWards] = useState<string[]>(Array.from(defaults.keyWards || []));
    const [loadKey, setLoadKey] = useState<number>(0);
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const { signleUpload } = useUpload();

    const validater = new Validater([{
        value: thumbs?.[0]?.uri,
        failMsg: "썸네일은 필수 입니다.",
        id: "thumb"
    }, {
        value: simpleData.title,
        failMsg: "제목값은 필수 입니다.",
        id: "title"
    }, {
        value: simpleData.contents,
        failMsg: "안내 및값은 필수 입니다.",
        id: "content",
    },
    {
        value: simpleData.inOrNor,
        failMsg: "포함 미포함 값은 필수 입니다.",
        id: "inOrNor"
    }, {
        value: categoryId,
        failMsg: "카테고리 값은 필수 입니다.",
        id: "category"
    }, {
        value: !isEmpty(its),
        failMsg: "여행일정은 필수 입니다.",
        id: "itinerary"
    }, {
        value: !isEmpty(keyWards),
        failMsg: "키워드 값은 필수 입니다.",
        id: "keywards"
    },
    {
        value: !its.find(it => Boolean(it.title) === false),
        failMsg: "일정 타이틀 값은 필수 입니다.",
        failFn: () => {
            $('.texta_title .input_01').filter(function () {
                return !(this as HTMLInputElement).value;
            }).focus()
        }
    }]);


    const tourData: IUseTourData = {
        categoryId,
        its,
        keyWards,
        simpleData,
        status,
        thumbs
    }
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
        title
    } = simpleData;

    const tourSets: ITourDataSet = {
        setCategoryId,
        setkeyWards,
        setLoadKey,
        setSimpleData,
        setStatus,
        setThumbs,
        setits
    }

    const getCreateInput = (): ProductCreateInput => {
        const createData: ProductCreateInput = {
            categoryId,
            keyWards,
            status,
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
            itinerary: its,
            startPoint,
            title,
            isNotice,
            isOpen: true,
            subTitle,
        }
        return omits(createData);
    }

    const getUpdateInput = (): ProductUpdateInput => {
        const updateParams = getCreateInput();
        return updateParams
    }

    const loadKeyAdd = () => {
        setLoadKey(loadKey + 1);
    }

    const handleUploadClick = () => {
        hiddenFileInput.current?.click();
    }

    const handleChangeSumbNail = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_: string, data: Ffile) => {
            thumbs.push(data);
            setThumbs([...thumbs])
        }
        signleUpload(fileUploaded, onUpload);
    };

    const handleClearThumb = (index: number) => () => {
        thumbs.splice(index, 1);
        setThumbs([...thumbs])
    }


    const setTourData = (data: Partial<IUseTourData>) => {
        if (data.categoryId)
            setCategoryId(data.categoryId)
        if (data.its)
            setits(data.its)
        if (data.simpleData)
            setSimpleData(data.simpleData)
        if (data.status)
            setStatus(data.status)
        if (data.thumbs)
            setThumbs(data.thumbs)
    }


    const handleCatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextCat = e.currentTarget.value
        setCategoryId(nextCat)
    }


    const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value as ProductStatus)
    }


    const handleTempSave = async () => {
        Storage!.saveLocal("write", tourData);
        alert("저장완료");
    }

    const handleLoad = () => {
        const savedData = Storage!.getLocalObj<IUseTourData>("write", undefined);
        if (!savedData) {
            alert("저장된 정보가 없습니다.");
            return;
        }
        setTourData(savedData);
        alert("로드완료");
    }


    const handleDateState = ({ from, to }: TRange) => {
        const newItinerary = generateitinery({ from, to }, its);
        if (newItinerary)
            setits([...newItinerary]);
    }


    function set<T extends keyof TSimpleTypePart>(key: T, value: any) {
        simpleData[key] = value;
        setSimpleData({ ...simpleData })
    }

    function handleInputChange<T extends keyof TSimpleTypePart>(key: T) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            set(key, e.currentTarget.value)
        }
    }

    function handleInputCommaChange<T extends keyof TSimpleTypePart>(key: T) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            set(key, autoComma(e.currentTarget.value))
        }
    }

    const handleTextData = (key: keyof TSimpleTypePart) => (data: string) => {
        set(key, data)
    }

    const fistItDate = its[0]?.date;
    const firstDate = fistItDate ? dayjs(fistItDate).toDate() : undefined;
    const lastItDate = its[its.length - 1]?.date;
    const lastDate = lastItDate ? dayjs(lastItDate).toDate() : undefined;


    return {
        tourData,
        loadKey,
        loadKeyAdd,
        tourSets,
        validater,
        setTourData,
        firstDate,
        hiddenFileInput,
        getCreateInput,
        getUpdateInput,
        lastDate,
        handles: {
            handleLoad,
            handleTextData,
            handleTempSave,
            handleInputChange,
            handleCatChange,
            handleChangeStatus,
            handleUploadClick,
            handleChangeSumbNail,
            handleClearThumb,
            handleDateState,
            handleInputCommaChange
        }
    }
}

export const getDefault = (product: IproductFindById | undefined): Partial<IUseTourDefaultData> => {
    if (!product) return {}

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
        isNotice,
        itinerary: its,
        keyWards,
        kids_price,
        maxMember,
        minMember,
        startPoint,
        status,
        subTitle,
        title,
    } = product;

    const simpleData: TSimpleTypePart = {
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
    }

    return {
        categoryId: category?._id,
        contents,
        its,
        keyWards: keyWards || [],
        simpleData,
        status,
        thumbs
    }

}