import React from 'react';

interface IProp {
    change: boolean;
    children: any;
}

export const _Change: React.FC<IProp> = ({ children }) => {
    console.count("Changed");
    return children;
};

export const Change = React.memo(_Change, ({ }, { change }) => !change);
