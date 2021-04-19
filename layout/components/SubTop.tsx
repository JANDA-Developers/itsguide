import React from 'react';

interface IProp {
    title: string;
    desc: string;
    subTopBg?: string;
}

export const SubTopNav: React.FC<IProp> = ({ children, desc, title, subTopBg = "/img/pr_img_16.jpg" }) => {
    return <div className="top_visual"> 
        <div
            className="sub_header sub_bg"
            style={{ backgroundImage: `url(${subTopBg})` }}
        >
            <div className="w1200">
                <h2 className="title">{title}</h2>
                <p className="text">{desc}</p>
            </div>
        </div>
        <div className="header_nav">
            <ul>
                <li className="home">
                    <a href="/">
                    </a>
                </li>
                {children}
            </ul>
        </div>
    </div>;
};

export default SubTopNav;