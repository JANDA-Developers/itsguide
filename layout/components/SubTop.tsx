import Link from 'next/link';
import React from 'react';
import { Bg } from '../../components/Img/Img';
import { IUsePageEdit } from '../../hook/usePageEdit';

interface IProp {
    pageTools: IUsePageEdit;
    imgKey?: string;
    titleKey?: string;
    descKey?: string;
}

//subTop_desc
//subTop_title
//subTop_img
export const SubTopNav: React.FC<IProp> = ({ descKey = "subTop_desc", imgKey = "subTop_img", titleKey = "subTop_title", pageTools: { imgKit, edit }, children }) => {

    return <div className="top_visual">
        <Bg
            className="sub_header sub_bg"
            {...imgKit(imgKey)}
        >
            <div className="w1200">
                <h2 {...edit(titleKey)} className="title" />
                <p {...edit(descKey)} className="text" />
            </div>
        </Bg>
        <div className="header_nav">
            <ul>
                <li className="home">
                    <Link href="/">
                        <a />
                    </Link>
                </li>
                {children}
            </ul>
        </div>
    </div>;
};

export default SubTopNav;