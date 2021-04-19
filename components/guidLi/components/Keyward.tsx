import React, { useContext } from 'react';
import { AppContext } from '../../../pages/_app';
import { IDiv } from '../../../types/interface';

interface IProp extends IDiv {
    keyward: string;
}

export const Keyward: React.FC<IProp> = ({ keyward, ...props }) => {
    return <div className="keyward" {...props} >#{keyward}</div>;
};
