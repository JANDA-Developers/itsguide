import React, { useEffect, useRef, useState } from 'react';
import { EditorConfig, OutputData } from '@editorjs/editorjs';
import dynamic from 'next/dynamic';
import { ISet } from 'types/interface.js';

const ReactEditorJs = dynamic(() => import('react-editor-js'), { ssr: false });
interface IProp extends EditorConfig {
    setData?: ISet<OutputData>
}

export const OLDEDITOR: React.FC<IProp> = ({ setData, ...props }) => {
    const [tools, setTools] = useState<any>(undefined);

    useEffect(() => {
        const fetch = async () => {
            const { default: editorTools } = await import('./tools.js');
            setTools(editorTools);
        }
        fetch()
    }, [])


    if (!tools) {
        return <div />
    }


    return <ReactEditorJs {...props}
        readOnly
        tools={tools} />;
};

export default OLDEDITOR;