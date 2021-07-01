import "../utils/polifill";

import React, { useEffect, useState } from "react";
import "../css/all.css";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import Layout from "../layout/Layout";
import { ApolloProvider, useQuery } from "@apollo/client";
import {
    getContext_GetProfile_data as IProfile,
    categoryList_CategoryList_data,
    getContext,
    UserRole,
    Fhomepage,
    Fcategory,
    CategoryType,
    groupList_GroupList_data,
    Lang,
} from "types/api";
import PinkClient from "apollo/client";
import {
    ALLOW_ADMINS,
    ALLOW_FULLESS,
    ALLOW_LOGINED,
    ALLOW_SELLERS,
    LANGS,
    Locales,
} from "../types/const";
import { GET_CONTEXT } from "../apollo/gql/queries";
import PageDeny from "./Deny";
import {
    categoryMap,
    defaultCatsMap,
    defaultGroupMap,
    groupMap,
    GroupTypes,
} from "../utils/categoryMap";
import { useRouter } from "next/router";
import PageLoading, { PageLoadingEffect } from "./Loading";
import { arrayEquals } from "../utils/filter";
import "node_modules/slick-carousel/slick/slick.css";
import useRouterScroll from "../hook/useRouterScroll";
import { getFromUrl } from "../utils/url";
import Router from "next/router";
import { pageLoadingEffect } from "../utils/query";
import { isIE } from "../utils/isIE";
import { ISet } from "../types/interface";
import Head from "next/head";
import { staticInfo } from "../info/static.json";
import { localeToLang } from "../utils/enumToKr";

Router.events.on("routeChangeStart", () => {
    pageLoadingEffect(true, "page");
});
Router.events.on("routeChangeComplete", () => {
    pageLoadingEffect(false, "page");
});
Router.events.on("routeChangeError", () => {
    pageLoadingEffect(false, "page");
});

dayjs.locale("ko");

export type TProductGrop = {
    _id: string;
    label: string;
    groupCode: string;
};

export type TContext = {
    categories: categoryList_CategoryList_data[];
    role: UserRole;
    isAdmin: boolean;
    isSeller: boolean;
    isManager: boolean;
    myProfile?: IProfile;
    isLogin?: boolean;
    isParterB?: boolean;
    homepage?: Fhomepage;
    isParterNonB?: boolean;
    lang?: Lang;
    locale: Locales;
    groupsMap: Record<GroupTypes, string[]>;
    categoriesMap: Record<CategoryType, Fcategory[]>;
    productGroupList: TProductGrop[];
    ln: ReturnType<typeof staticInfo>;
};

const defaultContext: TContext = {
    categories: [],
    role: UserRole.anonymous,
    isAdmin: false,
    isManager: false,
    isSeller: false,
    myProfile: undefined,
    homepage: undefined,
    isLogin: false,
    locale: Locales.ko,
    isParterB: false,
    isParterNonB: false,
    groupsMap: defaultGroupMap,
    categoriesMap: defaultCatsMap,
    productGroupList: [],
    ln: () => "",
};

export const AppContext = React.createContext<TContext>(defaultContext);

function App({ Component, pageProps }: any) {
    const [editMode, setEditMode] = useState(false);
    const router = useRouter();
    useRouterScroll();

    const ComponentLayout = Component.Layout ? Component.Layout : Layout;
    const ComponentAuth = Component.Auth ? Component.Auth : ALLOW_FULLESS;

    const locale = router.locale as Locales;
    const localeFixed = locale === "ot" ? "en" : locale;
    const ln = staticInfo(localeFixed || Locales.ko);

    const { data, loading } = useQuery<getContext>(GET_CONTEXT, {
        client: PinkClient,
        nextFetchPolicy: "network-only",
    });

    const groups = data?.GroupList.data || [];
    const homepage = data?.Homepage.data || undefined;
    const catList = data?.CategoryList?.data || [];
    const myProfile = data?.GetProfile?.data || undefined;
    const role: UserRole = myProfile?.role || UserRole.anonymous;

    const isSeller = [
        UserRole.partner,
        UserRole.partnerB,
        UserRole.manager,
        UserRole.admin,
    ].includes(role);
    const isParterB = [
        UserRole.partnerB,
        UserRole.manager,
        UserRole.admin,
    ].includes(role);
    const isParterNonB = [
        UserRole.partner,
        UserRole.manager,
        UserRole.admin,
    ].includes(role);

    const groupsMap = groupMap(groups);
    const catsMap = categoryMap(catList);

    useEffect(() => {
        if (isIE()) {
            alert(`
      현 사이트는 Internet Explor를 지원하지 않고 있습니다. 
      Chorme 또는 Edge브라우저 사용을 권장 드립니다.
      `);
        } else {
            console.log("It is not Internet Explorer");
        }
    }, []);

    useEffect(() => {
        if (token) {
            localStorage.setItem("jwt", token);
            location.href = "/";
        }
    }, []);

    const lang = localeToLang[locale as Locales];

    console.log({ lang });

    const productList = data?.GetProfile.data?.products.map((p) => ({
        _id: p._id,
        label: p.title,
        groupCode: p.groupCode,
    }));

    const productGroupList: {
        _id: string;
        label: string;
        groupCode: string;
    }[] = [];

    productList?.forEach((p) => {
        if (!productGroupList.find((g) => g.groupCode === p.groupCode)) {
            productGroupList.push({
                ...p,
            });
        }
    });

    if (
        //인증 받지 않았으며 일반 권한은 아닌경우
        ALLOW_SELLERS.includes(role) &&
        !myProfile?.isVerifiedManager &&
        !ComponentAuth.includes(UserRole.anonymous) &&
        !ComponentAuth.includes(UserRole.individual)
    ) {
        Component = () => (
            <PageDeny msg="인증되지 않은 판매자 입니다. 인증 소요시간은 평균 24시간 입니다." />
        );
    }

    const token = getFromUrl("refreshToken");

    if (!ComponentAuth.includes(role || null) && !loading) {
        if (arrayEquals(ComponentAuth, ALLOW_LOGINED)) {
            if (loading) return null;
            Component = () => (
                <PageDeny
                    redirect="/member/login"
                    msg="해당 페이지는 로그인후 이용 가능합니다."
                />
            );
            return <Component />;
        } else {
            Component = () => <PageDeny />;
        }
    }

    if (token) return null;
    if (loading) return <PageLoading />;

    if (router.isFallback) {
        return <div></div>;
    }

    console.log({ productGroupList });

    return (
        <div className="App">
            <Head>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-Z3EFQKBL3Q"
                ></script>
                <script async src="/ga.js"></script>
                <meta
                    name="naver-site-verification"
                    content="ee3b982604bb599adfc18c1fcf30f6987e754117"
                />
                <meta httpEquiv="x-ua-compatible" content="IE=edge" />
            </Head>
            <PageLoadingEffect />
            <ApolloProvider client={PinkClient}>
                <AppContext.Provider
                    value={{
                        groupsMap: groupsMap,
                        categoriesMap: catsMap,
                        categories: catList || [],
                        role,
                        myProfile,
                        isSeller,
                        isParterB,
                        lang,
                        locale,
                        isAdmin: role === UserRole.admin,
                        isManager: ALLOW_ADMINS.includes(role),
                        isLogin: !!myProfile,
                        isParterNonB,
                        homepage,
                        productGroupList,
                        ln,
                    }}
                >
                    <ComponentLayout>
                        <Component {...pageProps} />
                    </ComponentLayout>
                </AppContext.Provider>
            </ApolloProvider>
            <div id="portal" />
        </div>
    );
}

export default App;
