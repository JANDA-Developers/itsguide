import { Meta } from 'components/common/meta/Meta';
import SubTopNav from 'layout/components/SubTop';
import Link from 'next/link';
import React from 'react';
interface IProp { }
export const ExperienceMain: React.FC<IProp> = () => {
 

    return <div >
        <Meta />
        <SubTopNav title="temp" desc="temp" >
            <li className="homedeps1">
                <Link href="/tour/main?exp=true">
                    <a>Experience</a>
                </Link>
            </li>
        </SubTopNav>
        <div className="goods_box">
            <div className="w1200">
                <div id="sub_tap_nav" className="subtop_nav betatest">
                    <ul>
                        <li className="on"><a href="/tour/list">전체</a></li>
                        <li><a href="/tour/list">문화·예술여행</a></li>

                        <li className="on">
                            <Link href="/tour/list">
                                <a >전체</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tour/list">
                                <a >문화·예술여행</a>
                            </Link>
                        </li>
                        <li><a href="/tour/list">교육·답사여행</a></li>
                        <li><a href="/tour/list">역사여행</a></li>
                        <li><a href="/tour/list">팸투어</a></li>
                    </ul>
                </div>
               
            </div>
        </div>
    </div >;
};

export default ExperienceMain;