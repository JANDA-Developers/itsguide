import { Paginater } from 'components/common/Paginator';
import SearchMini from 'components/common/SearchMini';
import SortSelect from 'components/common/SortMethod';
import { ViewCount } from 'components/common/ViewCount';
import { PhotoView } from 'components/news/PhotoView';
import SubTopNav from 'layout/components/SubTop';
import React, { useState } from 'react';
import { ISet } from 'types/interface';
import { LineView } from '../components/news/LineView';

export enum NewsTypes {
    "tour" = "tour",
    "culture" = "culture",
    "news" = "news"
}

interface IProp {
    type: NewsTypes;
    search: string;
    setSearch: ISet<string>
}

export const News: React.FC<IProp> = ({ type, search, setSearch }) => {

    const [view, setView] = useState<"line" | "gall">("line");

    return <div>
        <SubTopNav title="소식" desc="상품소식" >
            <li className="homedeps1"><a href="../sub/experience_main.html">Experience</a></li>
            <li className="homedeps2"><a href="../sub/experience_list.html">상품리스트</a></li>
        </SubTopNav>
        <div className="board_box tourstory_box">
            <div className="w1200">
                <div id="sub_tap_nav" className="subtop_nav">
                    <ul>
                        <li className={type === NewsTypes.tour ? "on" : undefined}><a href={"/news/tour"}>여행이야기</a></li>
                        <li className={type === NewsTypes.culture ? "on" : undefined}><a href={"/news/culture"}>문화이야기</a></li>
                        <li className={type === NewsTypes.news ? "on" : undefined}><a href={"/news/news"}>언론보도</a></li>
                    </ul>
                </div>
                <div className="alignment">
                    <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>개</span></div>
                    <div className="right_div">
                        <SortSelect />
                        <ViewCount value={10} onChange={() => { }} />
                    </div>
                </div>
                {view === "gall" && <div className="tourstory_box">
                    <div className="board_list st02">
                        <ul className="boardlist_ul line3">
                            <PhotoView onClickImg={() => { }} />
                        </ul>
                    </div>
                </div>}
                {view === "line" && <div className="board_list st03">
                    <div className="tbody">
                        <ul>
                            <LineView />
                            <LineView />
                            <LineView />
                            <LineView />
                        </ul>
                    </div>
                </div>}
                <Paginater pageNumber={0} totalPageCount={10} />
                <SearchMini value={search} onChange={setSearch} />
            </div>
        </div>
    </div>
};

export default News;