import React from 'react';
import { IDiv } from '../../../types/interface';

interface IProp extends React.HTMLAttributes<HTMLOrSVGElement> { }

export const CloseIcon: React.FC<IProp> = ({ ...props }) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.15 26.15">
        <rect className="cls-2" x="296.95" y="402.74" width="1.98" height="35" transform="translate(520.91 99.55) rotate(135)" />
        <rect className="cls-2" x="296.95" y="402.74" width="1.98" height="35" transform="translate(-73.4 520.91) rotate(-135)" />
    </svg>
};
