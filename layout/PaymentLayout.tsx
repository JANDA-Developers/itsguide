import React from 'react';

interface IProp { }

export const PaymentLayout: React.FC<IProp> = ({ children }) => {
    return <div>
        <div className="container" id="payment">
            <div id="payment">
                <div className="w1200">
                    {children}
                </div>
                <div className="payment_bottom">
                    Copyright © JANDA
                </div>
            </div>;
        </div>
    </div>;
};


export default PaymentLayout;