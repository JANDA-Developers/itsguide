import { GraphQLClient } from "graphql-request";
import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import { HOMEPAGE } from "../apollo/gql/homepage";
import { SERVER_URI } from "../apollo/uri";
import { usePageInfo } from "../hook/usePageInfo";
import { Fhomepage, Fpage, homepage } from "../types/api";
import { TPageKeys } from "../types/interface";

export const getQueryIndex = (inPageIndex: number, pageInfo: Fpage) => {
    const { remainder, cntPerPage, totalPageSize } = pageInfo;
    const diff = cntPerPage - remainder;
    const inPageReverse = cntPerPage - inPageIndex;
    return (
        (pageInfo.totalPageSize - 2) * pageInfo.cntPerPage +
        inPageReverse +
        diff
    );
};

const graphQLClient = new GraphQLClient(SERVER_URI, {
    credentials: "include",
    mode: "cors",
    cache: "reload",
});

export const useHomepageServerSide = async () => {
    const defaultHomePage = {
        PrivacyPolicy: "",
        __typename: "Homepage",
        blacklist: [],
        logi: "",
        loginOutRedirect: "",
        loginRedirect: "",
        marketingPolic: "",
        partnerBpolicy: "",
        partnerPolicy: "",
        signUpRedirect: "",
        siteDesc: "",
        siteKeyWards: "",
        siteName: "",
        thirdPolicy: "",
        travelerPolicy: "",
        usePolicy: "",
    };

    const {
        Homepage: { data = defaultHomePage },
    } = await graphQLClient.request<homepage>(HOMEPAGE);
    return { data };
};

export const getStaticPageInfo = (key: TPageKeys): GetStaticProps => async ({
    locale,
}) => {
    const { data } = await usePageInfo(key);

    const { data: homepage } = await useHomepageServerSide();

    return {
        revalidate: 1,
        props: {
            locale,
            pageKey: key,
            pageInfo: data?.value || {},
            homepage,
        }, // will be passed to the page component as props
    };
};

export interface Ipage {
    locale: string;
    pageKey: TPageKeys;
    pageInfo: any;
    changeKeyFlag?: boolean;
}

export const getHomepage: GetServerSideProps<TGetHomepage> = async () => {
    const homepage = await useHomepageServerSide();
    return {
        revalidate: 10,
        props: {
            homepage: homepage.data as Fhomepage,
        }, // will be passed to the page component as props
    };
};

export type TGetHomepage = {
    homepage: Fhomepage;
};
