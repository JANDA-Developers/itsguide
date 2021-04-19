import { MouseEvent } from "react";
import { TElements } from "../../types/interface";

export interface ILinkEditProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
    link: string;
    editable: boolean;
    editLink: (link: string) => void;
    editComponent?: TElements
}

export const A: React.FC<ILinkEditProps> = ({ editComponent, children, link: _link, editLink, editable, ...props }) => {
    const handleSubmit = (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        e.preventDefault();
        const link = prompt("링크 주소를 입력 해주세요.", _link || undefined);
        if (link) {
            editLink(link)
        }
    }

    return <a
        className="linkEditor"
        {...props}
        // @ts-ignore
        onClick={editable ? handleSubmit : undefined}
        href={editable ? undefined : _link}
    >
        {editable ? editComponent : children}
    </a>;
};
