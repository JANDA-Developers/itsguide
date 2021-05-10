import React, { useContext, useState } from "react";
import { PhotoNewsView } from "components/news/PhotoView";
import SubTopNav from "layout/components/SubTop";
import { LineNewsView } from "../../components/news/LineView";
import { useNewsList } from "hook/useNews";
import { NEWS_TYPE } from "../../types/api";
import { getQueryIndex, getStaticPageInfo, Ipage } from "../../utils/page";
import BoardList from "../../components/board/List";
import pageInfoDefault from "info/news.json";
import { useRouter } from "next/router";
import { usePageEdit } from "../../hook/usePageEdit";
import { PageEditor } from "../../components/common/PageEditer";
import { getFromUrl } from "../../utils/url";
import { AppContext } from "../_app";
import Link from "next/link";

export const getStaticProps = getStaticPageInfo("news");
export const News: React.FC<Ipage> = (_pageInfo) => {
    const urlType = getFromUrl("type") as NEWS_TYPE;
    const [view, setView] = useState<"line" | "gal">("line");
    const { isManager } = useContext(AppContext);
    const pageTools = usePageEdit(_pageInfo, pageInfoDefault);
    const {
        setSort,
        sort,
        filter,
        setPage,
        setFilter,
        pageInfo,
        viewCount,
        setViewCount,
        items: news,
    } = useNewsList({ initialFilter: { type_eq: urlType || undefined } });
    const { totalCount } = pageInfo;
    const router = useRouter();
    const type = filter?.type_eq;

    const gotoWrite = () => {
        router.push("news/write");
    };

    const typeOn = (_type: NEWS_TYPE) => {
        return type === _type ? "on" : "";
    };

    const handleType = (type: NEWS_TYPE) => () => {
        setFilter({
            type_eq: type || undefined,
        });
    };

    return (
        <div className="">
            <SubTopNav pageTools={pageTools}>
                <li className="homedeps1">News</li>
                <li className="homedeps2">
                    <Link href="/news">
                        <a>언론보도</a>
                    </Link>
                </li>
            </SubTopNav>
            <PageEditor pageTools={pageTools} />
            <BoardList
                className="board_box news_box"
                setPage={setPage}
                Categories={
                    <div id="sub_tap_nav" className="subtop_nav">
                        <ul>
                            <li className={typeOn(NEWS_TYPE.TRAVEL)}>
                                <a onClick={handleType(NEWS_TYPE.TRAVEL)}>
                                    여행이야기
                                </a>
                            </li>
                            <li className={typeOn(NEWS_TYPE.CULTURE)}>
                                <a onClick={handleType(NEWS_TYPE.CULTURE)}>
                                    문화이야기
                                </a>
                            </li>
                            <li className={typeOn(NEWS_TYPE.MEDIA)}>
                                <a onClick={handleType(NEWS_TYPE.MEDIA)}>
                                    언론보도
                                </a>
                            </li>
                        </ul>
                    </div>
                }
                setView={setView}
                setSort={setSort}
                totalCount={totalCount}
                view={view}
                setViewCount={setViewCount}
                sort={sort}
                viewCount={viewCount}
                onWrite={gotoWrite}
                pageInfo={pageInfo}
                addBtnLabel={isManager ? "뉴스 등록하기" : undefined}
            >
                {view === "gal" && (
                    <div>
                        <div className="board_list st02">
                            <ul className="boardlist_ul line3">
                                {news.map((n) => (
                                    <PhotoNewsView key={n._id} news={n} />
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                {view === "line" && (
                    <div className="board_list st03">
                        <div className="tbody">
                            <ul>
                                {news.map((n, index) => (
                                    <LineNewsView
                                        news={n}
                                        index={getQueryIndex(
                                            index,
                                            pageInfo,
                                            news.length
                                        )}
                                        key={n._id}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </BoardList>
        </div>
    );
};

export default News;

// import { Paginater } from 'components/common/Paginator';
// import SearchMini from 'components/common/SearchMini';
// import SortSelect from 'components/common/SortMethod';
// import { ViewCount } from 'components/common/ViewCount';
// import { PhotoView } from 'components/news/PhotoView';
// import SubTopNav from 'layout/components/SubTop';
// import React, { useState } from 'react';
// import { ISet } from 'types/interface';
// import { LineView } from '../components/news/LineView';

// export enum NewsTypes {
//     "tour" = "tour",
//     "culture" = "culture",
//     "news" = "news"
// }

// interface IProp {
//     type: NewsTypes;
//     search: string;
//     setSearch: ISet<string>
// }

// export const News: React.FC<IProp> = ({ type, search, setSearch }) => {

//     const [view, setView] = useState<"line" | "gall">("line");

//     return <div>
//         <SubTopNav title="언론보도" desc="업데이트되는 최신 정보를 확인하세요." >
//             <li className="homedeps1"><a href="../sub/experience_main.html">Experience</a></li>
//             <li className="homedeps2"><a href="../sub/experience_list.html">상품리스트</a></li>
//         </SubTopNav>
//         <div className="w1200 board_box news_box">
//             <div>
//                 <div id="sub_tap_nav" className="subtop_nav">
//                     <ul>
//                         <li className={type === NewsTypes.tour ? "on" : undefined}><a href={"/tourstory"}>여행이야기</a></li>
//                         <li className={type === NewsTypes.culture ? "on" : undefined}><a href={"/culture"}>문화이야기</a></li>
//                         <li className={type === NewsTypes.news ? "on" : undefined}><a href={"/news"}>언론보도</a></li>
//                     </ul>
//                 </div>
//                 <div className="alignment">
//                     <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>개</span></div>
//                     <div className="right_div">
//                         <SortSelect />
//                         <ViewCount value={10} onChange={() => { }} />
//                     </div>
//                 </div>
//                 {view === "gall" && <div className="tourstory_box">
//                     <div className="board_list st02">
//                         <ul className="boardlist_ul line3">
//                             <PhotoView onClickImg={() => { }} />
//                         </ul>
//                     </div>
//                 </div>}
//                 {view === "line" && <div className="board_list st03">
//                     <div className="tbody">
//                         <ul>
//                             <LineView />
//                             <LineView />
//                             <LineView />
//                             <LineView />
//                         </ul>
//                     </div>
//                 </div>}
//                 <Paginater pageNumber={0} totalPageCount={10} />
//                 <SearchMini onSubmit={()=> {}} />
//             </div>
//         </div>
//     </div>
// };

// export default News;
