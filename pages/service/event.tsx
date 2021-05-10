import React, { useContext } from "react";
import Link from "next/link";
import { getStaticPageInfo, Ipage } from "../../utils/page";
import { AppContext } from "../_app";
import { usePageEdit } from "../../hook/usePageEdit";
import { DEFAULT_PAGEINFO } from "../../types/const";
import { PageEditor } from "../../components/common/PageEditer";
import SubTopNav from "../../layout/components/SubTop";
import { MemberTopNav } from "../../components/topNav/MasterTopNav";
import { SingleSortSelect } from "../../components/common/SortSelect";
import { ViewCount } from "../../components/common/ViewCount";
import { NewBadge } from "../../components/newBadge/NewBadge";
import { yyyymmddHHmm } from "../../utils/yyyymmdd";
import { Paginater } from "../../components/common/Paginator";
import SearchMini from "../../components/common/SearchMini";

export const getStaticProps = getStaticPageInfo("event");
export const Event: React.FC<Ipage> = (page) => {
    const { isManager } = useContext(AppContext);
    const pageTools = usePageEdit(page, DEFAULT_PAGEINFO);
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
    } = useEventList();
    const singleSortHook = useSingleSort(sort, setSort, [
        _EventSort.isNotice_desc,
        _EventSort.type_desc,
    ]);
    const router = useRouter();

    const doSearch = (search: string) => {
        filter.title_contains = search;
        setFilter({ ...filter });
    };
    const toWrite = () => {
        router.push("/service/event/write/");
    };

    const toView = (item: eventList_EventList_data) => () => {
        const itemId = item._id;
        router.push("/service/event/view/" + itemId);
    };
    const { ln } = useContext(AppContext);
    return (
        <div>
            <PageEditor pageTools={pageTools} />
            <SubTopNav pageTools={pageTools}>
                <li className="homedeps1">Member</li>
                <li className="homedeps2">
                    <Link href="/service/event">
                        <a>공지사항</a>
                    </Link>
                </li>
            </SubTopNav>
            <div className="event_box w1200">
                <MemberTopNav />
                <div className="board_box">
                    <div className="alignment">
                        <div className="left_div">
                            <span className="infotxt">
                                {ln("all")}
                                <strong>{pageInfo.totalCount}</strong>
                                {ln("case")}
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
                                        <div className="td01">{item.no}</div>
                                        <div className="td02">
                                            {item.title}
                                            <NewBadge
                                                createdAt={item.createdAt}
                                            />
                                        </div>
                                        <div className="td03">
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

export default Event;
