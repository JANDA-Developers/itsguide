import React, { useContext } from 'react';
import { AppContext } from '../../pages/_app';
import { Fhomepage } from '../../types/api';

interface IProp {
    type: keyof Fhomepage
}

export const Policy: React.FC<IProp> = ({ type }) => {
    const { homepage } = useContext(AppContext);

    const findPolicy = () => {
        if (!homepage) return ""
        if (type === "marketingPolic") return homepage.marketingPolic
        if (type === "partnerBpolicy") return homepage.partnerBpolicy
        if (type === "partnerPolicy") return homepage.partnerPolicy
        if (type === "travelerPolicy") return homepage.travelerPolicy
        if (type === "thirdPolicy") return homepage.thirdPolicy
        if (type === "PrivacyPolicy") return homepage.PrivacyPolicy
        if (type === "usePolicy") return homepage.usePolicy
        return ""
    }

    return <div dangerouslySetInnerHTML={{
        __html: findPolicy()
    }} />
};



//SEO 
//없으면 homepage 를 쓰고 있ㅇ므ㅕㄴ homepage를 쓰고 ㄱ
