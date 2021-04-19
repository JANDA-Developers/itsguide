import React from 'react';
import { TElements } from '../../types/interface';
import { HtmlTag } from '../Img/Img';

interface IProp {
    condition: boolean;
    falseElement?: TElements;
}

export const Exsit: React.FC<IProp> = ({ condition, falseElement = <div></div>, children }) => {
    return <HtmlTag>{condition ? children : falseElement} </HtmlTag>;
};
