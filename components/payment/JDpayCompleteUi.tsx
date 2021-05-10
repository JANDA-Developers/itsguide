import dayjs from "dayjs";
import Link from "next/link";
import React, { useContext } from "react";
import { useBookingList } from "../../hook/useBooking";
import { useHomepage } from "../../hook/useHomepage";
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
import { getFromUrl } from "../../utils/url";
import { yyyymmddHHmm } from "../../utils/yyyymmdd";

interface IProp {}

export const JDpayCompleteUI: React.FC<IProp> = () => {
    const { data: item } = useHomepage();
    const { isLogin } = useContext(AppContext);
    const groupCode = getFromUrl("groupCode");
    const { items, getLoading } = useBookingList({
        initialFilter: {
            groupCode_eq: groupCode,
        },
    });

    const isBank = items[0]?.payMethod === PayMethod.BANK;

    const bankInfo: homepage_Homepage_data_bankInfo | undefined =
        item?.bankInfo || undefined;

    if (getLoading) return <PageLoading />;
    return (
        <PaymentLayout>
            <div className="payment_box">
                <div className="head">
                    <h2>
                        <i>예약</i>이 완료되었습니다.
                    </h2>
                </div>
                {items.map((booking) => (
                    <div key={booking._id} className="table">
                        <div className="payment_tr">
                            <div className="payment_th">예약상품</div>
                            <div className="payment_td">
                                <span style={{ marginRight: "5px" }}>
                                    {booking.product.title}
                                </span>
                                <span>({booking.product.code})</span>
                            </div>
                        </div>
                        <div className="payment_tr">
                            <div className="payment_th">예약번호</div>
                            <div className="payment_td">{booking.code}</div>
                        </div>
                        <div className="payment_tr">
                            <div className="payment_th">결제상태</div>
                            <div className="payment_td">
                                {paymentStatus2(booking.payment)}
                            </div>
                        </div>

                        <div className="payment_tr">
                            <div className="payment_th">결제수단</div>
                            <div className="payment_td">
                                <span>{payMethodToKR(booking.payMethod)}</span>
                            </div>
                        </div>

                        {booking.payment && (
                            <div className="payment_tr">
                                <div className="payment_th">결제코드</div>
                                <div className="payment_td">
                                    <span>{booking.payment.groupCode}</span>
                                </div>
                            </div>
                        )}

                        <div className="payment_tr">
                            <div className="payment_th">결제금액</div>
                            <div className="payment_td">
                                <strong>
                                    {autoComma(booking.bookingPrice || 0)}원
                                </strong>
                            </div>
                        </div>
                        {isBank && (
                            <div className="payment_tr">
                                <div className="payment_th">입금은행</div>
                                <div className="payment_td">
                                    <span className="mr5">
                                        {bankInfo?.bankName}
                                    </span>
                                    <span className="mr15">
                                        {bankInfo?.accountNumber}
                                    </span>
                                    <span>
                                        예금주:
                                        {bankInfo?.accountHolder}
                                    </span>
                                </div>
                            </div>
                        )}
                        {isBank && (
                            <p className="info__txt gray">
                                <i className="jandaicon-info2 mini"></i> 무통장
                                입금은 24시간 이내에 입금하지 않으시면 예약이
                                자동취소 됩니다.
                            </p>
                        )}
                    </div>
                ))}
                <div className="btn_box">
                    {isLogin && (
                        <Link href="/mypage/purchase">
                            <a className="btn">구매내역 확인하기</a>
                        </Link>
                    )}
                    <a className="btn">홈으로</a>
                </div>
            </div>
        </PaymentLayout>
    );
};
