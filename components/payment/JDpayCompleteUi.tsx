import dayjs from "dayjs";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useBookingList } from "../../hook/useBooking";
import { useHomepage } from "../../hook/useHomepage";
import { usePageInfo, usePageInfoRead } from "../../hook/usePageInfo";
import PaymentLayout from "../../layout/PaymentLayout";
import PageLoading from "../../pages/Loading";
import { AppContext } from "../../pages/_app";
import { homepage_Homepage_data_bankInfo, PayMethod } from "../../types/api";
import {
    paymentStatus,
    paymentStatus2,
    payMethodToKR,
} from "../../utils/enumToKr";
import { autoComma, card_hypen } from "../../utils/formatter";
import { removeItem } from "../../utils/Storage";
import { getFromUrl } from "../../utils/url";
import { yyyymmdd, yyyymmddHHmm } from "../../utils/yyyymmdd";

interface IProp {}

export const JDpayCompleteUI: React.FC<IProp> = () => {
    const { data: item } = useHomepage();
    const { isLogin, ln } = useContext(AppContext);
    const groupCode = getFromUrl("groupCode");
    const result = usePageInfoRead("payment");
    const { items, getLoading } = useBookingList({
        initialFilter: {
            groupCode_eq: groupCode,
        },
    });

    const targetBank = result?.data?.PageInfoRead?.data?.value?.targetBank;

    const isBank = items[0]?.payMethod === PayMethod.BANK;

    useEffect(() => {
        //todo sucess callback 일때만 지우자...;
        items.forEach((item) => {
            removeItem(item._id);
        });
    }, [items.length]);

    const bankInfo: homepage_Homepage_data_bankInfo | undefined =
        item?.bankInfo || undefined;

    if (getLoading) return <PageLoading />;
    return (
        <PaymentLayout>
            <div className="payment_box">
                <div className="head">
                    <h2 className="endtxt">
                        {!isBank && (
                            <span
                                style={{
                                    color: "#2196F3",
                                }}
                                className="subtxt"
                            >
                                {ln("paymentCompleteTop")}
                            </span>
                        )}
                        {isBank && (
                            <span className="subtxt">
                                {ln("resvWillCompleteIf")}
                            </span>
                        )}
                    </h2>
                </div>
                {items.map((booking) => (
                    <div key={booking._id} className="table">
                        {/* <div className="payment_tr">
                            <div className="payment_th">예약상품</div>
                            <div className="payment_td">
                                <span style={{ marginRight: "5px" }}>
                                    {booking.product.title}
                                </span>
                                <span>({booking.product.code})</span>
                            </div>
                        </div> */}
                        <div className="payment_tr">
                            <div className="payment_th">
                                {ln("ReservationNumber")}
                            </div>
                            <div className="payment_td pink_font">
                                {booking.code}
                            </div>
                        </div>
                        <div className="payment_tr">
                            <div className="payment_th">
                                {ln("reservationProductName")}
                            </div>
                            <div className="payment_td">
                                {booking.product.title}
                            </div>
                        </div>
                        <div className="payment_tr">
                            <div className="payment_th">
                                {ln("departuredate")}
                            </div>
                            <div className="payment_td">
                                {yyyymmdd(booking.product.startDate)}
                            </div>
                        </div>
                        <div className="payment_tr">
                            <div className="payment_th">
                                {ln("select_people")}
                            </div>
                            <div className="payment_td">
                                {`${ln("adult")}${booking.adultCount}/${ln(
                                    "kid"
                                )}${booking.kidCount}/${ln("baby")}${
                                    booking.babyCount
                                }`}
                            </div>
                        </div>
                        <div className="payment_tr">
                            <div className="payment_th">{ln("payStatus")}</div>
                            <div className="payment_td">
                                {paymentStatus2(booking.payment)}
                            </div>
                        </div>
                        {!isBank && (
                            <div className="payment_tr">
                                <div className="payment_th">
                                    {ln("payAmount")}
                                </div>
                                <div className="payment_td">
                                    <strong>
                                        {autoComma(booking.bookingPrice || 0)}
                                        {ln("won")}
                                    </strong>
                                </div>
                            </div>
                        )}
                        <div className="payment_tr">
                            <div className="payment_th">{ln("payMethod")}</div>
                            <div className="payment_td">
                                <span>{payMethodToKR(booking.payMethod)}</span>
                            </div>
                        </div>
                        {isBank && (
                            <div className="payment_tr">
                                <div className="payment_th">
                                    {ln("targetBank")}
                                </div>
                                <div className="payment_td">
                                    농협은행 351-1150-2295-63
                                    코리아가이드센터주식
                                </div>
                            </div>
                        )}
                        {isBank && (
                            <p className="info__txt gray">
                                <i className="jandaicon-info2 mini"></i>
                                {ln("bankExpireMessage")};
                            </p>
                        )}
                        {isBank && (
                            <div className="payment_tr">
                                <div className="payment_th">
                                    {ln("bankPayAmt")}
                                </div>
                                <div className="payment_td">
                                    <strong>
                                        {autoComma(booking.bookingPrice || 0)}{" "}
                                        {ln("won")}
                                    </strong>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                <div className="btn_box">
                    <Link href="/">
                        <a className="btn">{ln("goToHome")}</a>
                    </Link>
                    <Link href="/service/anonyMemberFindBook">
                        <a className="btn pink_font">{ln("checkMyResv")}</a>
                    </Link>
                </div>
            </div>
        </PaymentLayout>
    );
};
