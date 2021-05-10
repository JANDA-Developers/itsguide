import React, { useContext } from "react";
import Link from "next/link";
import SubTopNav from "../../layout/components/SubTop";
import { usePageEdit } from "../../hook/usePageEdit";
import { getStaticPageInfo, Ipage } from "../../utils/page";
import defaultPageInfo from "../../info/ticket.json";
import { useTicketList } from "../../hook/useTicket";
import { yyyymmddHHmm } from "../../utils/yyyymmdd";
import { Paginater } from "../../components/common/Paginator";
import { useRouter } from "next/router";
import SearchMini from "../../components/common/SearchMini";
import { useCustomCount } from "../../hook/useCount";
import { SingleSortSelect } from "../../components/common/SortSelect";
import { useSingleSort } from "../../hook/useSort";
import { ViewCount } from "../../components/common/ViewCount";
import { ticketList_TicketList_data } from "../../types/api";
import { MemberTopNav } from "../../components/topNav/MemberTopNav";
import { Change } from "../../components/loadingList/LoadingList";
import dayjs from "dayjs";
import { AppContext } from "../_app";

export const getStaticProps = getStaticPageInfo("ticket");
export const Ticket: React.FC<Ipage> = (pageInfo) => {
    const router = useRouter();
    const {
        getLoading,
        filter,
        setFilter,
        viewCount,
        setViewCount,
        items: inquiries,
        pageInfo: pagingInfo,
        setPage,
        setOR,
        sort,
        setSort,
    } = useTicketList();
    const { isManager } = useContext(AppContext);
    const pageTool = usePageEdit(pageInfo, defaultPageInfo);
    const signleSortHook = useSingleSort(sort, setSort);

    const handleWrite = () => {
        router.push("/service/ticket/write");
    };

    const gotoView = (inq: ticketList_TicketList_data) => () => {
        router.push("/service/ticket/view/" + inq._id);
    };

    const handleSearch = (value: string) => {
        setOR(["title_contains"], value);
    };

    return (
        <div>
            <SubTopNav pageTools={pageTool}>
                <li className="homedeps1">Member</li>
                <li className="homedeps2">
                    <Link href="/service/ticket">
                        <a>고객문의</a>
                    </Link>
                </li>
            </SubTopNav>
            <div className="ticket_box w1200">
                <MemberTopNav />
                <div className="board_box">
                    <div className="alignment">
                        <div className="left_div"></div>
                        <div className="right_div">
                            <SingleSortSelect {...signleSortHook} />
                            <ViewCount
                                value={viewCount}
                                onChange={setViewCount}
                            />
                        </div>
                    </div>

                    <div className="board_list st01">
                        <div className="tbody">
                            <Change change={!getLoading}>
                                <ul>
                                    {inquiries.map((inq) => (
                                        <li
                                            onClick={gotoView(inq)}
                                            key={inq._id}
                                        >
                                            <div className="td03">
                                                {inq.title}
                                                {dayjs(inq.createdAt).isAfter(
                                                    dayjs().add(-8, "hour")
                                                ) && (
                                                    <img
                                                        className="new"
                                                        src="../img/svg/new.svg"
                                                        alt="new"
                                                    />
                                                )}
                                            </div>
                                            <div className="td04">
                                                {inq.recipientName}님에게
                                            </div>
                                            <div className="td05">
                                                {yyyymmddHHmm(inq.createdAt)}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Change>
                        </div>
                    </div>
                    <Paginater pageInfo={pagingInfo} setPage={setPage} />
                    <div className="tr list_bottom">
                        <SearchMini onSubmit={handleSearch} />
                        <button
                            onClick={handleWrite}
                            type="submit"
                            className="btn medium footer pointcolor"
                        >
                            글쓰기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
