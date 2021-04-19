import { useRouter } from 'next/router';
import React from 'react';
import { FpublicSellerData } from '../../types/api';
import { BG, BGprofile } from '../../types/const';
import { GuideBadge } from './components/GuidBadge';
import { GuideProfitCard } from './components/GuideProfitCard';
import { Keyward } from './components/Keyward';

interface IProp {
    guide: FpublicSellerData
}

export const GuideLine: React.FC<IProp> = ({ guide }) => {
    const router = useRouter();

    const { nickName, profileImg, keywards, _id, productCount, bookingCount } = guide;
    const toGuidPage = () => {
        router.push(`/itsguid/${_id}`)
    }

    return <div className="guideLine">
        <div className="guideLine__profile">
            <div onClick={toGuidPage} className="guideLine__imgWrap"  >
                <div className="guideLine__img" style={BGprofile(profileImg)} />
            </div>
            <div className="guideLine__info">
                <GuideBadge className="mr5 mb10" nickName={nickName} />
                <div className="guideLine__keywards">
                    {keywards.map((t, i: number) =>
                        <Keyward key={i + "keyward" + _id} keyward={t} />
                    )}
                </div>
            </div>
        </div>
        <div className="guideLine__cards">
            <GuideProfitCard count={productCount} label="총 가이드" />
            <GuideProfitCard count={bookingCount} label="총 가이드 인원" />
        </div>
    </div>
};
