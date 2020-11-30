import EditorJS from '@editorjs/editorjs';
import React from 'react';

interface IProp {
    data: string
}

export const ContentViewer: React.FC<IProp> = ({ data }) => {
    const isJsonString = data[0] === "{" && data[data.length - 1] === "}"
    if (isJsonString) return <EditorJS />
    return <div dangerouslySetInnerHTML={{ __html: data }} />;
};
