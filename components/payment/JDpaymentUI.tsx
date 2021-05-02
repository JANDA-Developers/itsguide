import React, { useContext, useState } from "react";
import { useHomepage } from "../../hook/useHomepage";
import Payment from "../../pages/payment";
import { AppContext } from "../../pages/_app";
import {
    Fbooking,
    Fhomepage_bankInfo,
    homepage_Homepage_data_bankInfo,
    PayMethod,
} from "../../types/api";
import { TElements } from "../../types/interface";
import { setVal } from "../../utils/eventValueExtracter";
import { autoHypenPhone } from "../../utils/formatter";
import { getFromUrl } from "../../utils/url";
import { Validater } from "../../utils/validate";

export type TPaySubmitInfo = {
    buyerInfo: {
        phone: string;
        name: string;
        email: string;
        memo: string;
    };
    payMethod: PayMethod;
    bankTransInput: IBankInput;
};

interface IProp {
    Preview: TElements;
    onDoPay: (param: TPaySubmitInfo) => void;
    booking?: Fbooking;
}

interface IBankInput extends Omit<Fhomepage_bankInfo, "__typename"> {
    bankTransfter: string;
}

{
    /* TODO 독립처리 => 나중에 시간나면 */
}
export const JDpaymentUI: React.FC<IProp> = ({ Preview, onDoPay, booking }) => {
    const { isLogin, myProfile } = useContext(AppContext);
    const urlPhone = getFromUrl("phone") || "";
    const urlName = getFromUrl("name") || "";
    const { data: item } = useHomepage();
    const [payMethod, setPayMethod] = useState<PayMethod>(PayMethod.BANK);
    const [buyerInfo, setBuyerInfo] = useState({
        phone: myProfile?.phoneNumber || "",
        name: myProfile?.name || "",
        email: myProfile?.email || "",
        memo: "",
    });
    const [bankRefundInfo, setBankRefundInfo] = useState<IBankInput>({
        bankTransfter: "",
        accountHolder: "",
        accountNumber: "",
        bankName: "",
    });

    const { validate } = new Validater([
        {
            value: buyerInfo.name,
            failMsg: "구매자 이름은 필수 입니다.",
        },
        {
            value: buyerInfo.phone,
            failMsg: "구매자 연락처는 필수 입니다.",
        },
    ]);

    const submitInfo: TPaySubmitInfo = {
        buyerInfo,
        payMethod,
        bankTransInput: bankRefundInfo,
    };

    const bankInfo: homepage_Homepage_data_bankInfo | undefined =
        item?.bankInfo || undefined;

    const UnLoginedFrom = (
        <div>
            <div className="tr">
                <div className="th">이름</div>
                <div className="td">
                    <input
                        value={buyerInfo.name}
                        onChange={(e) => {
                            const val = e.currentTarget.value;
                            buyerInfo.name = val;
                            setBuyerInfo({
                                ...buyerInfo,
                            });
                        }}
                        type="text"
                    />
                </div>
            </div>
            <div className="tr">
                <div className="th">연락처</div>
                <div className="td">
                    <input
                        value={autoHypenPhone(buyerInfo.phone)}
                        onChange={(e) => {
                            const val = e.currentTarget.value;
                            buyerInfo.phone = val;
                            setBuyerInfo({
                                ...buyerInfo,
                            });
                        }}
                        type="text"
                    />
                </div>
            </div>
            <div className="tr">
                <div className="th">이메일</div>
                <div className="td">
                    <input
                        value={buyerInfo.email}
                        onChange={(e) => {
                            const val = e.currentTarget.value;
                            buyerInfo.email = val;
                            setBuyerInfo({
                                ...buyerInfo,
                            });
                        }}
                        type="text"
                    />
                </div>
            </div>
        </div>
    );

    const handlePayment = () => {
        if (validate()) {
            onDoPay(submitInfo);
        }
    };

    function set<T extends keyof typeof buyerInfo>(key: T) {
        return (value: any) => {
            buyerInfo[key] = value;
            setBuyerInfo({ ...buyerInfo });
        };
    }

    // const { } = item;

    return (
        <div className="payment_box ">
            <div className="head">
                {Preview}
                <div className="write_type write_type_box mt20">
                    <h4 className="title">결제수단</h4>
                    <div className="input_form">
                        <span id="category" className="category r3">
                            {/* <select onChange={(e) => {
                            const val = e.currentTarget.value;
                            setPayMethod(val as PayMethod)
                        }} value={payMethod} name="category_srl">
                            <option value={PayMethod.BANK}>
                                카드결제
                            </option>
                            <option value={PayMethod.NICEPAY_CARD} >
                                무통장입금
                            </option>
                        </select> */}
                            <ul className="paymethod__Check">
                                <li>
                                    <div
                                        onClick={() => {
                                            setPayMethod(
                                                PayMethod.NICEPAY_CARD
                                            );
                                        }}
                                        className="paymethod__Check_head"
                                    >
                                        <span>
                                            <input
                                                checked={
                                                    payMethod ===
                                                    PayMethod.NICEPAY_CARD
                                                }
                                                type="radio"
                                            />
                                        </span>
                                        <span className="title">카드결제</span>
                                        {/* <button /> */}
                                    </div>
                                    {payMethod === PayMethod.NICEPAY_CARD &&
                                        !isLogin && (
                                            <div className="paymethod__Check_body">
                                                <div className="paymethod__Check_table">
                                                    {UnLoginedFrom}
                                                </div>
                                            </div>
                                        )}
                                </li>
                                <li>
                                    <div
                                        onClick={() => {
                                            setPayMethod(PayMethod.BANK);
                                        }}
                                        className="paymethod__Check_head"
                                    >
                                        <span>
                                            <input
                                                checked={
                                                    payMethod === PayMethod.BANK
                                                }
                                                type="radio"
                                            />
                                        </span>
                                        <span className="title">
                                            무통장입금
                                        </span>
                                        {/* <button /> */}
                                    </div>
                                    {payMethod === PayMethod.BANK && (
                                        <div className="paymethod__Check_body">
                                            <div className="paymethod__Check_table">
                                                {isLogin || UnLoginedFrom}
                                                <div className="tr">
                                                    <div className="th">
                                                        입금은행
                                                    </div>
                                                    <div className="td">
                                                        <span className="mr5">
                                                            {bankInfo?.bankName}
                                                        </span>
                                                        <span className="mr15">
                                                            {
                                                                bankInfo?.accountNumber
                                                            }
                                                        </span>
                                                        <span>
                                                            {
                                                                bankInfo?.accountHolder
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="tr">
                                                    <div className="th">
                                                        입금자 정보
                                                    </div>
                                                    <div className="td">
                                                        <input
                                                            onChange={(e) => {
                                                                const val =
                                                                    e
                                                                        .currentTarget
                                                                        .value;
                                                                bankRefundInfo.bankTransfter = val;
                                                                setBankRefundInfo(
                                                                    {
                                                                        ...bankRefundInfo,
                                                                    }
                                                                );
                                                            }}
                                                            value={
                                                                bankRefundInfo.bankTransfter
                                                            }
                                                            type="text"
                                                            className="mr5"
                                                            placeholder="입금자명"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="tr">
                                                    <div className="th">
                                                        환불방법
                                                    </div>
                                                    <div className="td">
                                                        <div className="radio_check">
                                                            <input
                                                                checked={true}
                                                                type="radio"
                                                            />{" "}
                                                            본인 계좌환불
                                                        </div>
                                                        <div className="bank_info">
                                                            <input
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const val =
                                                                        e
                                                                            .currentTarget
                                                                            .value;
                                                                    bankRefundInfo.bankName = val;
                                                                    setBankRefundInfo(
                                                                        {
                                                                            ...bankRefundInfo,
                                                                        }
                                                                    );
                                                                }}
                                                                value={
                                                                    bankRefundInfo.bankName ||
                                                                    ""
                                                                }
                                                                type="text"
                                                                className="mr5"
                                                                placeholder="은행명"
                                                            />
                                                            <input
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const val =
                                                                        e
                                                                            .currentTarget
                                                                            .value;
                                                                    bankRefundInfo.accountHolder = val;
                                                                    setBankRefundInfo(
                                                                        {
                                                                            ...bankRefundInfo,
                                                                        }
                                                                    );
                                                                }}
                                                                value={
                                                                    bankRefundInfo.accountHolder ||
                                                                    ""
                                                                }
                                                                type="text"
                                                                className="mr5"
                                                                placeholder="예금주"
                                                            />
                                                            <input
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const val =
                                                                        e
                                                                            .currentTarget
                                                                            .value;
                                                                    bankRefundInfo.accountNumber = val;
                                                                    setBankRefundInfo(
                                                                        {
                                                                            ...bankRefundInfo,
                                                                        }
                                                                    );
                                                                }}
                                                                value={
                                                                    bankRefundInfo.accountNumber ||
                                                                    ""
                                                                }
                                                                type="text"
                                                                placeholder="계좌번호"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>

                {/* {isLogin ||
                <div>
                    <div className="write_type mb10">
                        <div className="title">구매자성함</div>
                        <div className="input_form">
                            <input readOnly type="text" name="title" className="inputText w100 fix" />
                        </div>
                    </div>
                    <div className="write_type mb10">
                        <div className="title">연락처</div>
                        <div className="input_form">
                            <input id="title" onChange={(e) => {
                                // setTitle(e.currentTarget.value)
                            }} type="text" name="title" className="inputText w100" />
                        </div>
                    </div>
                    <div className="write_type mb10">
                        <div className="title">이메일</div>
                        <div className="input_form">
                            <input id="title" onChange={(e) => {
                                // setTitle(e.currentTarget.value)
                            }} type="text" name="title" className="inputText w100" />
                        </div>
                    </div>
                    <div className="write_type mb10">
                        <div className="write_con">
                            <div className="title">예약자메모</div>
                            <div className="input_form">
                                <textarea className="inputText input_box w100" />
                            </div>
                        </div>
                    </div>
                </div>
            } */}
                <div className="write_comment payment__memoForm">
                    <h3>예약메모</h3>
                    <div className="comment_layout">
                        <ul className="text_box">
                            <li>
                                <div className="txta w100">
                                    <textarea
                                        maxLength={3000}
                                        onChange={(e) => {
                                            const val = e.currentTarget.value;
                                            buyerInfo.memo = val;
                                            setBuyerInfo({
                                                ...buyerInfo,
                                            });
                                        }}
                                        value={buyerInfo.memo}
                                        className="payment__textarea"
                                        style={{ height: "100px" }}
                                        placeholder="메모는 꼼꼼하게 체크는 정확하게"
                                    ></textarea>
                                </div>
                            </li>
                            <li className="tr count">
                                {buyerInfo.memo.length}/3000
                            </li>
                        </ul>
                    </div>
                </div>
                <a onClick={handlePayment} className="paymentBtn">
                    결제하기
                </a>
            </div>
        </div>
    );
};
