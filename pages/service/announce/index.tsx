import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { getQueryIndex, getStaticPageInfo, Ipage } from "../../../utils/page";
import { usePageEdit } from "../../../hook/usePageEdit";
import defaultPageInfo from "../../../info/announce.json";
import SubTopNav from "../../../layout/components/SubTop";
import { MemberTopNav } from "../../../components/topNav/MemberTopNav";
import { useAnnounceList } from "../../../hook/useAnnounce";
import { announceTypeKR } from "../../../utils/enumToKr";
import { yyyymmddHHmm } from "../../../utils/yyyymmdd";
import { NewBadge } from "../../../components/newBadge/NewBadge";
import { Paginater } from "../../../components/common/Paginator";
import { useCustomCount } from "../../../hook/useCount";
import { SingleSortSelect } from "../../../components/common/SortSelect";
import { ViewCount } from "../../../components/common/ViewCount";
import SearchMini from "../../../components/common/SearchMini";
import { useSingleSort } from "../../../hook/useSort";
import {
    announceList_AnnounceList_data,
    AnnounceTarget,
    _AnnounceSort,
} from "../../../types/api";
import { useRouter } from "next/router";
import { AppContext } from "../../_app";
import { AnnotationBadge } from "../../../components/Status/StatusBadge";
import { PageEditor } from "../../../components/common/PageEditer";
import { getFromUrl } from "../../../utils/url";

export const getStaticProps = getStaticPageInfo("announce");
export const Announce: React.FC<Ipage> = (page) => {
    const target =
        (getFromUrl("target") as AnnounceTarget) || AnnounceTarget.NORMAL;
    const { isManager } = useContext(AppContext);
    const pageTools = usePageEdit(page, defaultPageInfo);

    const openFilter = isManager
        ? {}
        : {
              isOpen_eq: true,
          };

    const {
        items,
        pageInfo,
        setPage,
        filter,
        setFilter,
        sort,
        setSort,
        viewCount,
        setViewCount,
    } = useAnnounceList({
        fixingFilter: {
            ...openFilter,
            target_eq: target,
        },
    });

    const singleSortHook = useSingleSort(sort, setSort, [
        _AnnounceSort.isNotice_desc,
        _AnnounceSort.type_desc,
    ]);
    const router = useRouter();

    const doSearch = (search: string) => {
        filter.title_contains = search;
        setFilter({ ...filter });
    };
    const toWrite = () => {
        router.push("/service/announce/write/");
    };

    const toView = (item: announceList_AnnounceList_data) => () => {
        const itemId = item._id;
        router.push("/service/announce/view/" + itemId);
    };
    const { ln } = useContext(AppContext);
    return (
        <div>
            <PageEditor pageTools={pageTools} />
            <SubTopNav pageTools={pageTools}>
                <li className="homedeps1">Member</li>
                <li className="homedeps2">
                    <Link href="/service/announce">
                        <a>공지사항</a>
                    </Link>
                </li>
            </SubTopNav>
            <div className="announce_box w1200">
                <MemberTopNav />
                <div className="board_box">
                    <div className="alignment">
                        <div className="left_div">
                            <span className="infotxt">
                                {/* strong이 display none임 */}
                                {/* {ln("all")}
                                <strong>{pageInfo.totalCount}</strong>
                                {ln("case")} */}
                            </span>
                        </div>
                        <div className="right_div">
                            <SingleSortSelect {...singleSortHook} />
                            <ViewCount
                                value={viewCount}
                                onChange={setViewCount}
                            />
                        </div>
                    </div>

                    <div className="board_list st01">
                        <div className="tbody">
                            <ul>
                                {items.map((item, i) => (
                                    <li onClick={toView(item)} key={item._id}>
                                        <div className="td01">
                                            {getQueryIndex(
                                                i,
                                                pageInfo,
                                                items.length
                                            )}
                                        </div>
                                        <div className="td02">
                                            <AnnotationBadge type={item.type} />
                                        </div>
                                        <div className="td03">
                                            {item.title}
                                            <NewBadge
                                                createdAt={item.createdAt}
                                            />
                                        </div>
                                        <div className="td04">
                                            {yyyymmddHHmm(item.createdAt)}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Paginater pageInfo={pageInfo} setPage={setPage} />

                    <div className="tr list_bottom">
                        <SearchMini onSubmit={doSearch} />
                        {isManager && (
                            <button
                                onClick={toWrite}
                                type="submit"
                                className="btn medium footer pointcolor"
                            >
                                글쓰기
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const AnnounceWrap = (props: any) => {
    const [fresh, setFresh] = useState(0);
    const Router = useRouter();

    useEffect(() => {
        setFresh(fresh + 1);
    }, [Router.query.target]);
    return <Announce key={fresh} {...props} />;
};
export default AnnounceWrap;
