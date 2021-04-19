import React from 'react';
import Head from 'next/head';

interface IProp {
    description?: string;
    title?: string;
    titleMeta?: string;
    keywords?: string[];
}

export const Meta: React.FC<IProp> = ({ description = "맞춤형 여행상품을 찾아드리는 플랫폼 잇츠가이드", titleMeta = "잇츠가이드에서 여행을 시작하세요!!", title = "잇츠가이드", keywords }) => {
    const keywordString = keywords?.join(",");

    return <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywordString} />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itsguide.co.kr/" />
        <meta property="og:site_name" content="잇츠가이드" />
        <meta property="og:title" content={titleMeta} />
        <meta property="og:description" content={description} />
        <title>{title}</title>
    </Head>;
};
