import React from 'react';

interface IProp { }

export const PageLoading: React.FC<IProp> = () => {
    return <div style={{ minHeight: "90vh", width: "100%" }} >loading...</div>;
};


export default PageLoading;