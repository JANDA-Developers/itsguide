import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Basket } from "../../components/basket/Basket";
import { getAuth } from "../../components/nice/getAuth";
import NiceElments from "../../components/nice/NiceElement";
import { generateNiceData } from "../../components/nice/niceUtils";
import { IAuthInfo } from "../../components/nice/type";
import {
    JDpaymentUI,
    TPaySubmitInfo,
} from "../../components/payment/JDpaymentUI";
import { IUseBasket, useBasket } from "../../hook/useBasket";
import { useBookingFindByCode, useBookingsCreate } from "../../hook/useBooking";
import PaymentLayout from "../../layout/PaymentLayout";
import {
    bookingFindByCode_BookingFindByCode_data,
    BookingsCreateInput,
    bookingsCreate_BookingsCreate_data,
    Fbooking,
    Fproduct,
    PayMethod,
} from "../../types/api";
import { IBasketItem, removeItem } from "../../utils/Storage";
import { getFromUrl } from "../../utils/url";
import defaultPageInfo from "../../info/payment.json";
import { getStaticPageInfo, Ipage } from "../../utils/page";
import { usePageEdit } from "../../hook/usePageEdit";

interface IcustomParams {
    groupCode: string;
    redirectUrl: string;
    failRedirectUrl: string;
}
interface IProp {}

export const getStaticProps = getStaticPageInfo("payment");
export const Payment: React.FC<Ipage> = (pageInfo) => {
    const pageTools = usePageEdit(pageInfo, defaultPageInfo);
    const urlBKcode = getFromUrl("code") || "";
    const pid = getFromUrl("pid");
    const [authData, setAuthData] = useState<IAuthInfo>();
    const [createdBookings, setCreatedBookings] = useState<
        bookingsCreate_BookingsCreate_data[]
    >([]);
    const [customParams, setCustomParams] = useState<IcustomParams>();
    const { item: findBooking } = useBookingFindByCode(urlBKcode);
    const [singleOrder, setSingleOrder] = useState<string>("");
    const [bookingCreate] = useBookingsCreate();
    const {
        items: _items,
        totalPrice,
        updateComponent,
        getLoading,
    }: IUseBasket = useBasket();
    const router = useRouter();
    const items = singleOrder
        ? [_items.find((item) => item._id === singleOrder)!]
        : _items;

    const handleBooking = (param: TPaySubmitInfo) => {
        const params: BookingsCreateInput[] = items.map((item, i) => ({
            adultCount: item.count.adult,
            babyCount: item.count.baby,
            kidCount: item.count.kids,
            email: param.buyerInfo.email,
            name: param.buyerInfo.name,
            phoneNumber: param.buyerInfo.phone,
            message: param.buyerInfo.memo,
            product: item._id,
            payMethod: param.payMethod,
            bankTransfter: param.bankTransInput,
        }));

        bookingCreate({
            variables: {
                params,
                payMethod: param.payMethod,
            },
        }).then((result) => {
            if (result.data?.BookingsCreate.ok) {
                const bks = result.data.BookingsCreate.data || [];
                const groupCode = bks[0]?.groupCode;

                const encbksParam =
                    "&encbks=" + encodeURIComponent(JSON.stringify(bks));
                const redirectPath =
                    "/payment/complete?groupCode=" + groupCode + encbksParam;
                const redirectUrl =
                    process.env.NEXT_PUBLIC_CLIENT_DOMAIN + redirectPath;
                const failRedirectUrl =
                    process.env.NEXT_PUBLIC_CLIENT_DOMAIN + "/payment/fail";

                const customParams: IcustomParams = {
                    groupCode,
                    redirectUrl,
                    failRedirectUrl,
                };
                window.jdPayCallBackSucess = () => {};

                setCreatedBookings(bks);
                setCustomParams(customParams);
                if (param.payMethod === PayMethod.NICEPAY_CARD) {
                    auth(totalPrice);
                } else {
                    router.push(redirectPath);
                }
            } else {
                const err = result.data?.BookingsCreate.error;
                if (err?.code === "BOOKING_MEMBER_OVER") {
                    alert("[마감] 예약 가능인원이 초과하였습니다.");
                }
            }
        });
    };
    const openNCmodal = () => {
        if (window.jdPayStart) {
            window.jdPayStart();
        }
    };

    //부킹후에 나이스 인증모달 인증 셋팅후 인증모달 트리거.
    const auth = async (price: number) => {
        const { data } = await getAuth(price);

        if (data.ediDate) {
            setAuthData(data);
            openNCmodal();
        } else {
            throw Error("this asdasd");
        }
    };

    //인증 받을 데이터
    const niceAuth = {
        Amt: totalPrice.toString(),
        EdiDate: authData?.ediDate || "",
        MID: authData?.mid || "",
        hex: authData?.hashString || "",
    };

    const niceBuy = {
        BuyerEmail: createdBookings[0]?.email || "",
        BuyerName: createdBookings[0]?.name || "",
        BuyerTel: createdBookings[0]?.phoneNumber || "",
        GoodsName: "예약상품",
    };

    const handleSingleOrder = (item: IBasketItem & Fproduct) => {
        setSingleOrder(item._id);
    };

    return (
        <PaymentLayout>
            <NiceElments
                ReqReserved={encodeURIComponent(
                    JSON.stringify(customParams || {})
                )}
                {...generateNiceData({
                    auth: niceAuth,
                    buy: niceBuy,
                    groupCode: customParams?.groupCode || "",
                })}
            />
            <JDpaymentUI
                totalPrice={totalPrice}
                pageTools={pageTools}
                onDoPay={handleBooking}
                booking={findBooking}
                Preview={
                    getLoading ? (
                        <div />
                    ) : (
                        <div>
                            <Basket
                                mode="single"
                                handleSingleOrder={handleSingleOrder}
                                updateComponent={updateComponent}
                                items={items}
                            />
                        </div>
                    )
                }
            />
        </PaymentLayout>
    );
};
export default Payment;
