import React, { useContext } from 'react';
import { AppContext } from 'pages/_app';
import { ISet, TPageKeys } from 'types/interface';

interface IProp {
    data: any;
    setData: ISet<any>;
    original: any;
    path: TPageKeys;
}

export const HiddenSubmitBtn: React.FC<IProp> = ({ data, original, path, setData }) => {
    const { submitEdit } = useContext(AppContext)

    const submit = () => {
        alert("submmited");
        if (submitEdit)
            submitEdit(path, data)
    }

    const reset = () => {
        setData(data);
    }

    const hiddenStyle: React.CSSProperties = {
        opacity: 0,
        position: "absolute",
        width: "1px",
        height: "1px"
    }

    return <div style={hiddenStyle}>
        <div onClick={submit} id="PageSubmitBtn" hidden />
        <div onClick={reset} id="PageRestBtn" hidden />
    </div>;
};
