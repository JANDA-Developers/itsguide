import React, { useContext } from "react";
import { AppContext } from "../../pages/_app";

interface IProp {
    label?: string;
    show?: boolean;
}

export const NoData: React.FC<IProp> = ({ label, show = true }) => {
    if (!show) return null;
    const { ln } = useContext(AppContext);

    if (!label) {
        label = ln("noData");
    }

    return (
        <li className="no_data">
            {/*게시글이 없을때*/}
            <i className="jandaicon-info3" />
            <span>{label}</span>
        </li>
    );
};
