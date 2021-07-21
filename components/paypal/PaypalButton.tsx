import React from "react";
import ReactDOM from "react-dom";
import { TDetail } from "./typeExamples/detail.type";

export interface IPaypalButtonProp {
    amount: number;
    callBackApprove: (details: TDetail) => void;
}

const PaypalButton: React.FC<IPaypalButtonProp> = ({
    amount,
    callBackApprove,
}) => {
    // @ts-ignore
    const PAY_PAL_BUTTOn = window.paypal.Buttons.driver("react", {
        React,
        ReactDOM,
    });
    // 환율 rate는 나중에 정리되면 fetch 하는 쪽으로 변경
    const exchangeRate = 0.0012;
    const dollor = amount * exchangeRate;
    const createOrder = (data: any, actions: any) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: (Math.round(dollor * 100) / 100).toString(),
                    },
                },
            ],
        });
    };

    const onApprove = (data: any, actions: any) => {
        return actions.order.capture().then(callBackApprove);
    };

    return <PAY_PAL_BUTTOn createOrder={createOrder} onApprove={onApprove} />;
};

export default PaypalButton;
