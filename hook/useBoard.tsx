import { useRouter } from "next/router";
import { useState } from "react";
import { IBoardOpen } from "../components/board/Write";
import { Ffile } from "../types/api";
import { ISet } from "../types/interface";
import { Storage, TStoreKeys } from "../utils/Storage";
import { Validater } from "../utils/validate";

export interface IUseBoardData {
    isOpen: boolean;
    title: string;
    subTitle: string;
    categoryId: string;
    summary: string;
    files: Ffile[]
    thumb: Ffile | null;
    contents: string
}

interface IUseBoardDefaultData {
    isOpen: boolean | null;
    title: string;
    subTitle: string | null;
    categoryId: string;
    summary: string | null;
    files: Ffile[]
    thumb: Ffile | null;
    contents: string
    loadKey: number;
    [key: string]: any
}


interface IBoardDataSet {
    setIsOpen: ISet<boolean>;
    setTitle: ISet<string>;
    setSubTitle: ISet<string>;
    setCategoryId: ISet<string>;
    setSummary: ISet<string>;
    setFiles: ISet<Ffile[]>
    setThumb: ISet<Ffile | null>;
    setContents: ISet<string>;
    setLoadKey: ISet<number>;
}

export interface IUseBoard extends ReturnType<typeof useBoard> { }
interface IUseBoardProps extends Partial<IUseBoardDefaultData> { }

interface IboardConfig {
    storeKey?: TStoreKeys
    opens?: Partial<IBoardOpen>
}

export const useBoard = ({ ...defaults }: IUseBoardProps, config: IboardConfig = {}) => {
    const defaultOpen = defaults.isOpen === undefined ? true : !!defaults.isOpen;
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
    const [title, setTitle] = useState<string>(defaults.title || "")
    const [categoryId, setCategoryId] = useState<string>(defaults.categoryId || "");
    const [subTitle, setSubTitle] = useState<string>(defaults.subTitle || "");
    const [summary, setSummary] = useState<string>(defaults.summary || "");
    const [files, setFiles] = useState<Ffile[]>(defaults.files || []);
    const [thumb, setThumb] = useState<Ffile | null>(defaults.thumb || null);
    const [contents, setContents] = useState<string>(defaults.contents || "");
    const [loadKey, setLoadKey] = useState<number>(0);
    const router = useRouter();

    const validater = new Validater([{
        value: title,
        failMsg: "타이틀 값은 필수 입니다.",
        id: "title",
    }, {
        value: contents,
        failMsg: "콘텐츠 값은 필수 입니다.",
        id: "content"
    }, {
        value: categoryId,
        failMsg: "카테고리 값은 필수 입니다.",
        id: "category",
    }])

    const boardData: IUseBoardData = {
        categoryId,
        contents,
        files,
        isOpen,
        subTitle,
        summary,
        thumb,
        title
    }

    const boardSets: IBoardDataSet = {
        setCategoryId,
        setContents,
        setFiles,
        setIsOpen,
        setSummary,
        setThumb,
        setSubTitle,
        setTitle,
        setLoadKey
    }

    const setBoardData = (data: Partial<IUseBoardData>) => {
        if (data.isOpen)
            setIsOpen(data.isOpen)
        if (data.categoryId)
            setCategoryId(data.categoryId)
        if (data.contents)
            setContents(data.contents)
        if (data.files)
            setFiles(data.files)
        if (data.summary)
            setSummary(data.summary)
        if (data.thumb)
            setThumb(data.thumb)
        if (data.subTitle)
            setSubTitle(data.subTitle)
        if (data.title)
            setTitle(data.title)
    }

    const loadKeyAdd = () => {
        setLoadKey(loadKey + 1);
    }

    const handleTempSave = () => {
        if (!config.storeKey) return;
        Storage?.saveLocal(config.storeKey, boardData);
        alert("저장 되었습니다.")
    }

    const handleCancel = () => {
        router.back()
    }

    const handleLoad = () => {
        if (!config.storeKey) return;
        const saveData = Storage?.getLocalObj<IUseBoardData>(config.storeKey);
        if (!saveData) {
            alert("저장된 데이터가 없습니다.");
            return;
        }
        setBoardData(saveData);
    }



    const defaultContent = defaults.contents || "";

    return {
        boardData,
        boardSets,
        validater,
        setBoardData,
        loadKey,
        loadKeyAdd,
        defaultContent,
        handleCancel,
        handleLoad,
        handleTempSave
    }
}


export const saveMessage = () => {
    alert("임시 저장이 완료되었습니다. 로드시 같은 디바이스로 접근 바랍니다.")
}

export const nullcehck = (data: any): data is null | undefined | "" | void => {
    if (data) return true;
    alert("저장된 데이터가 없습니다")
    return false;
}