import React from 'react';

interface IProp {
    label?: string
}

export const NoData: React.FC<IProp> = ({ label = "게시글이 없습니다." }) => {
    return <li className="no_data">
        {/*게시글이 없을때*/}
        <i className="jandaicon-info3" />
        <span>{label}</span>
    </li>;
};
