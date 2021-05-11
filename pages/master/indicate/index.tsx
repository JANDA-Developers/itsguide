import { MasterLayout } from "layout/MasterLayout";
import { SearcfInfoBox } from "components/common/SearcfInfoBox";
import React, { useState } from "react";
import Link from "next/link";
import { yyyymmddHHmm } from "../../../utils/yyyymmdd";
import { useDateFilter } from "../../../hook/useSearch";
import { MasterSearchBar } from "../../../components/master/MasterSearchBar";
import { MasterAlignMent } from "../../../components/master/MasterAlignMent";
import { useIdSelecter } from "../../../hook/useIdSelecter";
import {
    GoodsTopNav,
    MemberTopNav,
} from "../../../components/topNav/MasterTopNav";
import { BookingStatus, _TicketFilter } from "../../../types/api";
import { SingleSortSelect } from "../../../components/common/SortSelect";
import { useSingleSort } from "../../../hook/useSort";
import { ALLOW_ADMINS } from "../../../types/const";
import { auth } from "../../../utils/with";
import { Paginater } from "../../../components/common/Paginator";
import { Change } from "../../../components/loadingList/LoadingList";
import { useTicketList } from "../../../hook/useTicket";
import { useRouter } from "next/router";

type TTicketFilterKey = keyof _TicketFilter;

interface IProp {}

export const Indicate: React.FC<IProp> = () => {
    const [fitlerType, setFilterType] = useState<TTicketFilterKey>(
        "title_contains"
    );
    const {
        items,
        filter,
        setFilter,
        setSort,
        sort,
        viewCount,
        setViewCount,
        setUniqFilter,
        setPage,
        pageInfo,
        getLoading,
    } = useTicketList();
    const { filterEnd, filterStart, hanldeCreateDateChange } = useDateFilter({
        filter,
        setFilter,
    });
    const { selectAll } = useIdSelecter(items.map((item, i) => item._id));
    const singleSort = useSingleSort(sort, setSort);
    const router = useRouter();

    const handleOpenWrite = () => {
        router.push("/ticket/write/");
    };

    const doSearch = (search: string) => {
        setUniqFilter(
            fitlerType,
            [
                "title_contains",
                "authorEmail_eq",
                "authorNick_eq",
                "recipientName_eq",
            ],
            search
        );
    };
    return (
        <MasterLayout>
            <div className="in ">
                <h4>상품관리</h4>
                <div className="in_content">
                    <MemberTopNav />
                    <div className="con">
                        <div className="con_box_top pb5">
                            {/* <div className="top_info_number">
                                <ul className="ln4">
                                    <li>
                                        <strong>
                                            {totalTicketCountMaster}
                                        </strong>
                                        <span>전체</span>
                                    </li>
                                    <li>
                                        <strong>
                                            {openTicketCountMaster || 0}
                                        </strong>
                                        <span>판매중</span>
                                    </li>
                                    <li>
                                        <strong>
                                            {cancelTicketCountMaster}
                                        </strong>
                                        <span>판매중지</span>
                                    </li>
                                    <li>
                                        <strong>
                                            {compeltedTicketCountMaster}
                                        </strong>
                                        <span>판매완료</span>
                                    </li>
                                </ul>
                            </div> */}
                            <MasterSearchBar
                                onDateChange={hanldeCreateDateChange}
                                Option={
                                    <select
                                        onChange={(e) => {
                                            const val = e.currentTarget.value;
                                            setFilterType(val as any);
                                        }}
                                        className="option"
                                    >
                                        <option
                                            value={
                                                "title_contains" as TTicketFilterKey
                                            }
                                        >
                                            제목
                                        </option>
                                        <option
                                            value={
                                                "recipientEmail_contains" as TTicketFilterKey
                                            }
                                        >
                                            이메일
                                        </option>
                                        <option
                                            value={
                                                "recipientName_contains" as TTicketFilterKey
                                            }
                                        >
                                            이름
                                        </option>
                                    </select>
                                }
                                defaultRange={{}}
                                doSearch={doSearch}
                                filterEnd={filterEnd}
                                filterStart={filterStart}
                            />
                            <MasterAlignMent
                                Sort={<SingleSortSelect {...singleSort} />}
                                viewCount={viewCount}
                                setViewCount={setViewCount}
                                handleSelectAll={selectAll}
                            />
                        </div>

                        <Change change={!getLoading}>
                            <div className="con_box_body master__table">
                                <div className="list_head">
                                    <div className="td02">대화상대이름</div>
                                    <div className="td03">이메일</div>
                                    <div className="td04">제목</div>
                                    <div className="td05">대화수</div>
                                    <div className="td06">대화시작날짜</div>
                                </div>

                                {items.map((item, i) => (
                                    <div key={item._id} className="list_line">
                                        {/* <div className="td01">
                                    <i className="checkbox">
                                        <input onChange={() => { toggle(item._id) }} checked={isChecked(item._id)} type="checkbox" name="agree" id={`agree${i}`} title="선택" />
                                        <label htmlFor={`agree${i}`} />
                                    </i>
                                </div> */}
                                        <div className="td02">
                                            <i className="m_title">
                                                대화상대이름
                                            </i>
                                            {item.recipientName}
                                        </div>
                                        <div className="td03">
                                            <i className="m_title">이메일</i>
                                            {item.recipientEmail}
                                        </div>
                                        <div className="td04">
                                            <div className="goods__info_title">
                                                <Link
                                                    href={
                                                        "/ticket/write/" +
                                                        item._id
                                                    }
                                                >
                                                    <a className="title">
                                                        {item.title}
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="td05">
                                            <i className="m_title">여행일</i>
                                            {item.answers.length}
                                        </div>
                                        <div className="td06">
                                            <i className="m_title">시작날짜</i>
                                            {yyyymmddHHmm(item.createdAt)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Change>
                    </div>
                </div>
                <Paginater setPage={setPage} pageInfo={pageInfo} />
                <SearcfInfoBox />
                <button onClick={handleOpenWrite} className="btn small">
                    작성하기
                </button>
                {/* popup-기획반려 사유 */}
            </div>
        </MasterLayout>
    );
};

export default auth(ALLOW_ADMINS)(Indicate);
