import { from } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useLayoutEffect } from "react";

export interface INiceElementProp {
    // CARD
    PayMethod: "CARD" | "BANK" | "VBANK" | "CELLPHONE";
    // 아무거나써도 들어감
    GoodsName: string;
    // 가격
    Amt: string;
    // stayjanda1m
    MID: string;
    Moid: string;
    //인증정보
    hex: string;
    BuyerName: string;
    BuyerEmail: string;
    BuyerTel: string;
    //
    ReturnURL: string;
    // yyyymmdd
    VbankExpDate?: string;
    // 이것도 백엔드님한테서 받아야할듯 아니면 뭐 내가해도되고
    // 모바일 클라이언트 URL
    IspCancelUrl?: string;
    // 모바일  클라이언트 URL
    WapUrl: string;
    // 필요없음
    sid?: string;
    // jdReturnUrl: string;
    logo?: string;
    // true
    isAuth: boolean;
    // 인증 정보중 일환
    // yyyymmddhhmmss
    EdiDate: string;
    // 서버 ?
    endPoint: string;
    // 커스텀 전달 사항
    ReqReserved?: string;
}

const NiceElments: React.FC<INiceElementProp> = ({
    Amt,
    BuyerEmail,
    BuyerName,
    BuyerTel,
    GoodsName,
    MID,
    // jdReturnUrl,
    hex,
    logo,
    Moid,
    PayMethod,
    isAuth,
    ReturnURL,
    VbankExpDate,
    WapUrl,
    IspCancelUrl,
    sid,
    EdiDate,
    endPoint,
    ReqReserved,
}) => {
    return (
        <div
            style={{
                display: "none",
            }}
            onSubmit={(e) => {
                // alert(e.currentTarget)
            }}
        >
            <Head>
                <meta charSet="utf-8" />
                <script
                    src="https://web.nicepay.co.kr/v3/webstd/js/nicepay-3.0.js"
                    type="text/javascript"
                />
            </Head>
            <form
                method="POST"
                id="NICE_PAY_FORM"
                name="payForm"
                data-url={endPoint}
            >
                <span>결제 수단</span>
                <input
                    type="text"
                    name="PayMethod"
                    onChange={() => {}}
                    value={PayMethod}
                />
                <span>결제 상품명</span>
                <input
                    type="text"
                    name="GoodsName"
                    onChange={() => {}}
                    value={GoodsName}
                />
                <span>결제 상품개수</span>
                <input
                    type="text"
                    name="GoodsCnt"
                    onChange={() => {}}
                    defaultValue={1}
                />
                <span>결제 상품금액</span>
                <input type="text" name="Amt" onChange={() => {}} value={Amt} />
                <span>구매자명</span>
                <input
                    type="text"
                    name="BuyerName"
                    onChange={() => {}}
                    value={BuyerName}
                />
                <span>구매자 연락처</span>
                <input
                    type="text"
                    name="BuyerTel"
                    onChange={() => {}}
                    value={BuyerTel}
                />
                <span>상품 주문번호</span>
                <input
                    type="text"
                    name="Moid"
                    onChange={() => {}}
                    value={Moid}
                />
                <span>상점 아이디</span>
                <input type="text" name="MID" onChange={() => {}} value={MID} />
                <input
                    type="hidden"
                    name="CharSet"
                    onChange={() => {}}
                    value="utf-8"
                />
                <input
                    type="hidden"
                    name="BuyerEmail"
                    onChange={() => {}}
                    defaultValue={BuyerEmail}
                />
                <input
                    type="hidden"
                    name="GoodsCl"
                    onChange={() => {}}
                    defaultValue={1}
                />
                <input
                    type="hidden"
                    name="TransType"
                    onChange={() => {}}
                    defaultValue={0}
                />
                <input
                    type="hidden"
                    name="EdiDate"
                    onChange={() => {}}
                    value={EdiDate}
                />
                <input
                    type="hidden"
                    name="SignData"
                    onChange={() => {}}
                    value={hex}
                />
                <input
                    type="hidden"
                    name="GoodsCl"
                    onChange={() => {}}
                    value={hex}
                />
                <input
                    type="hidden"
                    name="IspCancelUrl"
                    onChange={() => {}}
                    value={IspCancelUrl}
                />
                <input
                    id="ReqReserved"
                    name="ReqReserved"
                    value={ReqReserved}
                />
                <input name="ReturnURL" onChange={() => {}} value={ReturnURL} />
                <input
                    type="hidden"
                    name="AcsNoIframe"
                    onChange={() => {}}
                    value="Y"
                />
                <input
                    type="text"
                    name="LogoImage"
                    onChange={() => {}}
                    value={logo}
                ></input>
                <input
                    type="hidden"
                    name="NpLang"
                    onChange={() => {}}
                    value="KO"
                />
                <Link href="#">
                    <a className="btn_blue" onClick={() => {}}>
                        REQUEST
                    </a>
                </Link>
            </form>
        </div>
    );
};

export default NiceElments;
