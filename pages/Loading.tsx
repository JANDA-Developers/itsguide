import { useRouter } from 'next/router';
import React from 'react';
import { IDiv } from '../types/interface';

interface IProp extends IDiv { }

export const PageLoading: React.FC<IProp> = (props) => {
    return <div className="pageLoader" style={{ minHeight: "90vh", width: "100%" }} {...props}></div>;
};


export default PageLoading;

export const PageLoadingEffect: React.FC<IProp> = (props) => {
    const rotuer = useRouter();

    return <div key={rotuer.pathname + "loadingEffect"} id="MuPageLoading" className="muPageLoading"  {...props} />;
};

