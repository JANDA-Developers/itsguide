import React from 'react';

interface IProp { }

export const PaymentLayout: React.FC<IProp> = ({ children }) => {
    return <div>
        <div className="container" id="payment">
            {children}
        </div>
    </div>;
};


export default PaymentLayout;