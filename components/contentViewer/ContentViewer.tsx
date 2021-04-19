import React from 'react';
import OLDEDITOR from '../oldEditor/OldEditor';
interface IProp {
    data: string
}

export const ContentViewer: React.FC<IProp> = ({ data }) => {
    const isJsonString = data[0] === "{" && data[data.length - 1] === "}"
    if (isJsonString) return <OLDEDITOR data={JSON.parse(data)} />
    return <div dangerouslySetInnerHTML={{ __html: data }} />;
};
