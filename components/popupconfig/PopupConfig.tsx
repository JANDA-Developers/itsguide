import React from 'react';

interface IProp { }

export const PopupConfig: React.FC<IProp> = () => {
    return <div className="popup_view">
        <span><strong>popup01</strong><br />200px * 100px</span>
    </div>;
};
