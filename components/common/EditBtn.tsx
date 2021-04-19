import React, { useContext } from 'react';
import { AppContext } from 'pages/_app';

interface IProp {
    allowToUser: boolean;
    onSubmit: () => void;
    editMode: boolean;
}

export const EditBtn: React.FC<IProp> = ({ onSubmit: handleSubmit, editMode, allowToUser }) => {
    const { isManager } = useContext(AppContext)
    if (!isManager && !allowToUser) return null;
    return <div onClick={handleSubmit} id="setting_link"><i><img src="/img/svg/setting_icon.svg" alt="icon" /></i>{editMode ? "편집종료" : "편집시작"}</div>
};
