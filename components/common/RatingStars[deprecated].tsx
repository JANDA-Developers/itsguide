import React from 'react';
import { generateRandomStringCode } from '../../utils/codeGenerator';

interface IProp {
    // 1 ~ 5
    rate?: 1 | 2 | 3 | 4 | 5;
}

export const RatingStars: React.FC<IProp> = ({ rate = 5 }) => {
    const check = (num: number) => {
        if (rate >= num) return "checked"
        return "";
    }

    const stars = new Array(5).fill(null);
    return <div className="rating-stars">
        {stars.map((star, i) =>
            <span key={generateRandomStringCode()} className={`fa fa-star ${check(i + 1)}`}></span>
        )}
    </div>;
};
