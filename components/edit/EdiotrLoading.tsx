import dynamic from "next/dynamic";
import React from "react";

interface IProp {}

export const EditorLoading: React.FC<IProp> = () => {
    return <img src="/img/svg/loading.svg" />;
};

export const LoadEditor = () =>
    dynamic(() => import("components/edit/CKE2"), {
        ssr: false,
        loading: () => (
            <div
                className="editorHolder"
                dangerouslySetInnerHTML={{ __html: "에디터 로딩..." }}
            />
        ),
    });
