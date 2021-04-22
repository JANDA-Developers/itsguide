import React from "react";
import { IUseModal } from "../../hook/useModal";
import { useCopy } from "../../hook/useUpdate";
import { Fcategory_localeLabel } from "../../types/api";
import { Modal2 } from "../modal/Modal";

interface ILangModalProp {
    locale: Fcategory_localeLabel;
    onSubmit: (locale: Fcategory_localeLabel) => void;
}

interface IProp extends IUseModal<ILangModalProp> {}

//lang 오브젝트를 받고
//오브젝트를 키밸류로 분류 햇으면 모든 언어 커버가 가능했을것.

export const LangModal: React.FC<IProp> = ({ info, ...props }) => {
    const defaultLocale = info.locale;
    const onSubmit = info.onSubmit;
    const [locale, setLocale] = useCopy(defaultLocale);

    const handleSubmit = () => {
        onSubmit(locale);
    };

    return (
        <Modal2 id="" title="언어 설정" {...props}>
            한국어
            <input
                type="text"
                className="form-control w70 ml5"
                value={locale.ko}
                onChange={(e) => {
                    locale.ko = e.currentTarget.value;
                    setLocale({ ...locale });
                }}
            />
            일본어
            <input
                type="text"
                className="form-control w70 ml5"
                value={locale.ja}
                onChange={(e) => {
                    locale.ja = e.currentTarget.value;
                    setLocale({ ...locale });
                }}
            />
            영어
            <input
                type="text"
                className="form-control w70 ml5"
                value={locale.en}
                onChange={(e) => {
                    locale.en = e.currentTarget.value;
                    setLocale({ ...locale });
                }}
            />
            중국어
            <input
                type="text"
                className="form-control w70 ml5"
                value={locale.chi}
                onChange={(e) => {
                    locale.chi = e.currentTarget.value;
                    setLocale({ ...locale });
                }}
            />
            <button onClick={handleSubmit}>제출</button>
        </Modal2>
    );
};
