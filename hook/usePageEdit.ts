import { useMutation } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import PinkClient from "../apollo/client";
import { PAGE_INFO_CREATE, PAGE_INFO_UPDATE } from "../apollo/gql/mutations";
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
    page: Page;
    submitEdit: (guideParams?: UserUpdateInput) => void;
    editMode: boolean;
    setEditMode: ISet<boolean>;
    originPage: any;
    pageKey: TPageKeys;
    reset: () => void;
}

export const usePageEdit = <Page>(
    { pageInfo: originPage, pageKey, locale }: Ipage,
    defaultPage: Page,
    ln = "kr"
): IUsePageEdit<Page> => {
    if (locale === "ja") {
        ln = "jp";
    } else if (locale === "chi") {
        ln = "ch";
    } else if (locale === "en") {
        ln = "en";
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

    const editUtils = getEditUtils<Page>(editMode, page, setPage, ln);

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
        lang: ln,
        reset,
        page,
        editMode,
        setPage,
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
