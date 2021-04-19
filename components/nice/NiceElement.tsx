import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useLayoutEffect } from "react";

export interface INiceElementProp {
    PayMethod: "CARD" | "BANK" | "VBANK" | "CELLPHONE";
    GoodsName: string;
    Amt: string;
    MID: string;
    Moid: string;
    hex: string;
    BuyerName: string;
    BuyerEmail: string;
    BuyerTel: string;
    // 
    ReturnURL: string;
    // yyyymmdd
    VbankExpDate?: string;
    // 이것도 백엔드님한테서 받아야할듯 아니면 뭐 내가해도되고
    IspCancelUrl?: string;
    WapUrl: string;
    sid?: string;
    // jdReturnUrl: string;
    logo?: string;
    isAuth: boolean;
    // yyyymmddhhmmss
    EdiDate: string;
    endPoint: string;
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
    ReturnURL,
    VbankExpDate,
    WapUrl,
    IspCancelUrl,
    sid,
    EdiDate,
    endPoint,
}) => {

    useEffect(() => {
        import("./niceGlobal")
    }, [])

    return (
        <div
            style={{
                display: "none",
            }}
        >
            <Head>
                <meta charSet="utf-8" />
                <script
                    src="https://web.nicepay.co.kr/v3/webstd/js/nicepay-3.0.js"
                    type="text/javascript"
                />
            </Head>
            <form method="POST" id="NICE_PAY_FORM" name="payForm" data-url={endPoint}>
                <span>결제 수단</span>
                <input
                    type="text"
                    name="PayMethod"
                    onChange={() => { }}
                    value={PayMethod}
                />
                <span>결제 상품명</span>
                <input
                    type="text"
                    name="GoodsName"
                    onChange={() => { }}
                    value={GoodsName}
                />
                <span>결제 상품개수</span>
                <input
                    type="text"
                    name="GoodsCnt"
                    onChange={() => { }}
                    defaultValue={1}
                />
                <span>결제 상품금액</span>
                <input type="text" name="Amt" onChange={() => { }} value={Amt} />
                <span>구매자명</span>
                <input
                    type="text"
                    name="BuyerName"
                    onChange={() => { }}
                    value={BuyerName}
                />
                <span>구매자 연락처</span>
                <input
                    type="text"
                    name="BuyerTel"
                    onChange={() => { }}
                    value={BuyerTel}
                />
                <span>상품 주문번호</span>
                <input type="text" name="Moid" onChange={() => { }} value={Moid} />
                <span>상점 아이디</span>
                <input type="text" name="MID" onChange={() => { }} value={MID} />
                <input
                    type="hidden"
                    name="CharSet"
                    onChange={() => { }}
                    value="utf-8"
                />{" "}
                <input
                    type="hidden"
                    name="BuyerEmail"
                    onChange={() => { }}
                    defaultValue={BuyerEmail}
                />{" "}
                <input
                    type="hidden"
                    name="GoodsCl"
                    onChange={() => { }}
                    defaultValue={1}
                />{" "}
                <input
                    type="hidden"
                    name="TransType"
                    onChange={() => { }}
                    defaultValue={0}
                />{" "}
                <input
                    type="hidden"
                    name="EdiDate"
                    onChange={() => { }}
                    value={EdiDate}
                />{" "}
                <input type="hidden" name="SignData" onChange={() => { }} value={hex} />{" "}
                <input type="hidden" name="GoodsCl" onChange={() => { }} value={hex} />{" "}
                <input
                    type="hidden"
                    name="IspCancelUrl"
                    onChange={() => { }}
                    value={IspCancelUrl}
                />{" "}
                <input
                    id="ReqReserved"
                    name="ReqReserved"
                    onChange={() => { }}
                    value=""
                />{" "}
                <input name="ReturnURL" onChange={() => { }} value={ReturnURL} />
                <input type="hidden" name="AcsNoIframe" onChange={() => { }} value="Y" />
                <input
                    type="text"
                    name="LogoImage"
                    onChange={() => { }}
                    value={logo}
                ></input>
                <input type="hidden" name="NpLang" onChange={() => { }} value="KO" />
                <a href="#" className="btn_blue" onClick={() => { }}>
                    REQUEST
        </a>
            </form>
        </div>
    );
};

export default NiceElments;
