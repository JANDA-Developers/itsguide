import { useMutation } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import PinkClient from "../apollo/client";
import { PAGE_INFO_CREATE, PAGE_INFO_UPDATE } from "../apollo/gql/mutations";
import { AppContext } from "../pages/_app";
import {
    Lang,
    pageInfoCreate,
    pageInfoCreateVariables,
    pageInfoUpdate,
    pageInfoUpdateVariables,
    UserUpdateInput,
} from "../types/api";
import { ISet, TPageKeys } from "../types/interface";
import { cloneObject } from "../utils/clone";
import { mergeDeepOnlyExsistProperty } from "../utils/merge";
import { omits } from "../utils/omit";
import { Ipage } from "../utils/page";
import { getEditUtils, IGetEditUtilsResult } from "../utils/pageEdit";
import { usePageFindByKey } from "./usePageInfo";

export interface IUsePageEdit<Page = any> extends IGetEditUtilsResult<Page> {
    setPage: ISet<Page>;
    setLang: any;
    page: Page;
    submitEdit: (guideParams?: UserUpdateInput) => void;
    editMode: boolean;
    setEditMode: ISet<boolean>;
    originPage: any;
    pageKey: TPageKeys;
    reset: () => void;
}

export const usePageEdit = <Page>(
    { pageInfo: originPage, pageKey }: Ipage,
    defaultPage: Page,
    ln = "kr"
): IUsePageEdit<Page> => {
    const { lang: _lang, setLang } = useContext(AppContext);
    let lang = "kr";
    if (_lang === Lang.CH) {
        lang = "ch";
    } else if (_lang === Lang.EN) {
        lang = "en";
    } else if (_lang === Lang.JP) {
        lang = "jp";
    }
    const [editMode, setEditMode] = useState<boolean>(false);

    const pageMerge = () =>
        cloneObject(
            mergeDeepOnlyExsistProperty(
                cloneObject(defaultPage),
                originPage || {}
            )
        );
    const [page, setPage] = useState(pageMerge());

    //page는 이전 값을 조회하고있음 왜 ? => state니까
    //페이지가 바뀌면 setPage는 초기화 되어야함.
    //useEffect를 통해서 바꾸는게 좋을까? 아마도..
    //하지만 한번의 렌더는 일어나고 맘
    // 여기서 state를 사용하는데 구조적 문제가있음
    //_app에서 state를 사용하는것이 위험함
    // 어떻게든 값을 업데이트 할 필요는 있어보임
    const editUtils = getEditUtils<Page>(editMode, page, setPage, lang);

    const [pageInfoCreateMu] = useMutation<
        pageInfoCreate,
        pageInfoCreateVariables
    >(PAGE_INFO_CREATE, {
        client: PinkClient,
    });

    const [pageInfoUpdateMu] = useMutation<
        pageInfoUpdate,
        pageInfoUpdateVariables
    >(PAGE_INFO_UPDATE, {
        client: PinkClient,
    });

    const submitEdit = (guideParams?: UserUpdateInput) => {
        const params = {
            key: pageKey,
            value: page,
        };
        pageInfoCreateMu({
            variables: {
                params,
            },
        }).then((data) => {
            pageInfoUpdateMu({
                variables: {
                    key: pageKey,
                    params,
                    guideParams: omits(guideParams),
                },
            });
        });
    };

    const reset = () => {
        setPage(originPage || defaultPage);
    };

    useEffect(() => {
        if (originPage) setPage(pageMerge());
    }, [originPage]);

    return {
        ...editUtils,
        reset,
        page,
        editMode,
        setPage,
        setLang,
        submitEdit,
        setEditMode,
        originPage,
        pageKey,
    };
};

export interface IEditPage<T> extends IUsePageEdit<T> {}

export const usePageEditClientSide = (key: TPageKeys, originPage: any) => {
    const { item } = usePageFindByKey(key);
    const pageTools = usePageEdit({ pageInfo: item, pageKey: key }, originPage);
    return { ...pageTools };
};
