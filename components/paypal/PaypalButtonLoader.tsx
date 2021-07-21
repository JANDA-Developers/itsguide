import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect } from "react";
import { useState } from "react";
import { TElements } from "../../types/interface";
import { IPaypalButtonProp } from "./PaypalButton";

const PayPalButton = dynamic(() => import("./PaypalButton"));

interface IProps extends IPaypalButtonProp {
    LoadingComponent: TElements;
}

let intervalNum: NodeJS.Timeout;
export const PaypalButtonLoader: React.FC<IProps> = ({
    LoadingComponent = "...laoding",
    ...props
}) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const checkLoaded = (): boolean => !!window.paypal;
        intervalNum = setInterval(() => {
            if (checkLoaded()) {
                setLoaded(true);
                clearInterval(intervalNum);
            }
        }, 1000);
        return () => window.clearInterval(intervalNum);
    }, []);

    return (
        <div>
            {loaded ? (
                <PayPalButton {...props} />
            ) : (
                <div>
                    <Head>
                        <script
                            src={`https://www.paypal.com/sdk/js?client-id=${"AX11eV4a52LFg1YQx63j2d94phK_QKlV5k-EVCAKvrYxl3uLtpIkEsmPqmPxgW584gCQm3POI1k7e_7A"}`}
                            type="text/javascript"
                        />
                    </Head>
                    {LoadingComponent}
                </div>
            )}
        </div>
    );
};

//     return loaded ? (
//         <PayPalButton amount={0} {...props} />
//     ) : (
//         <Helmet>
//             <script
//                 src={`https://www.paypal.com/sdk/js?client-id=${
//                     process.env.CLIENT_ID || "test"
//                 }`}
//                 type="text/javascript"
//             />
//         </Helmet>
//     );
// };

// // 이녀석이 로드를 검증하고 나서 Button을 렌더함
// export const PaypalButtonWrap = () => {};

export default "";
