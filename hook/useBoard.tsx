import { useState } from "react";
import { Ffile } from "../types/api";
import { ISet } from "../types/interface";
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

export interface IUseBoard {
    loadKeyAdd: () => void;
    defaultContent: string;
    boardData: IUseBoardData;
    boardSets: IBoardDataSet;
    validater: Validater;
    setBoardData: (data: Partial<IUseBoardData>) => void;
    loadKey: number;
}

interface IUseBoardProps extends Partial<IUseBoardDefaultData> {
}

export const useBoard = ({ ...defaults }: IUseBoardProps): IUseBoard => {
    const [isOpen, setIsOpen] = useState<boolean>(defaults.isOpen || false);
    const [title, setTitle] = useState<string>(defaults.title || "")
    const [categoryId, setCategoryId] = useState<string>(defaults.categoryId || "");
    const [subTitle, setSubTitle] = useState<string>(defaults.subTitle || "");
    const [summary, setSummary] = useState<string>(defaults.summary || "");
    const [files, setFiles] = useState<Ffile[]>([]);
    const [thumb, setThumb] = useState<Ffile | null>(defaults.thumb || null);
    const [contents, setContents] = useState<string>(defaults.contents || "");
    const [loadKey, setLoadKey] = useState<number>(0);

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
        id: "category"
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

    const defaultContent = defaults.contents || "";

    return { boardData, boardSets, validater, setBoardData, loadKey, loadKeyAdd, defaultContent }
}


export const saveMessage = () => {
    alert("임시 저장이 완료되었습니다. 로드시 같은 디바이스로 접근 바랍니다.")
}

export const isUnLoaded = (data: any): data is null | undefined | "" | void => {
    if (data) return true;
    alert("저장된 데이터가 없습니다")
    return false;
}