import React from "react";
import { MypageLayout } from "../../layout/MypageLayout";
import { ALLOW_LOGINED } from "../../types/const";
import { auth } from "../../utils/with";
import dayjs from "dayjs";
import isEmpty from "../../utils/isEmpty";
import { ViewCount } from "../../components/common/ViewCount";
import { SingleSortSelect } from "../../components/common/SortSelect";
import { autoComma } from "../../utils/formatter";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { useMyBoardList } from "../../hook/useMyBoardList";
import { useDateFilter } from "../../hook/useSearch";
import { useSingleSort } from "../../hook/useSort";
import { Change } from "../../components/loadingList/LoadingList";
import Link from "next/link";
import { BoardType, myBoardList_MyBoardList_data } from "../../types/api";
import { useRouter } from "next/router";
import { isOpenKr } from "../../utils/enumToKr";

interface IProp {}

export const MyPageBoard: React.FC<IProp> = () => {
    const rotuer = useRouter();
    const {
        items,
        filter,
        setFilter,
        sort,
        setSort,
        viewCount,
        setViewCount,
        setUniqFilter,
        getLoading,
    } = useMyBoardList();
    const { filterStart, filterEnd, hanldeCreateDateChange } = useDateFilter({
        filter,
        setFilter,
    });

    const singoeSort = useSingleSort(sort, setSort);

    const doSearch = (search: string) => {
        setUniqFilter("title_contains", ["title_contains"], search);
    };

    const handleClickBoard = (item: myBoardList_MyBoardList_data) => () => {
        const isProduct = item.boardType === BoardType.PRODUCT;
        const isQuestion = item.boardType === BoardType.QUESTION;
        if (isProduct) rotuer.push(`/tour/view/${item._id}`);
        if (isQuestion) rotuer.push(`/service/qna/view/${item._id}`);
    };

    return (
        <MypageLayout>
            <div className="in myboard_box">
                <h4>나의 게시글</h4>
                <div className="paper_div">
                    <div className="con_top">
                        <h6>상세검색</h6>
                        {/* //alt="search icon"  */}
                        <SearchBar
                            defaultRange={{
                                from: filterStart,
                                to: filterEnd,
                            }}
                            filterStart={filterStart}
                            filterEnd={filterEnd}
                            doSearch={doSearch}
                            onDateChange={hanldeCreateDateChange}
                            SearchSelect={
                                <select className="option">
                                    <option>제목</option>
                                </select>
                            }
                        />
                        <Change change={!getLoading}>
                            <div className="con_bottom">
                                <div className="alignment">
                                    <div className="left_div">
                                        총{" "}
                                        <strong>
                                            {autoComma(items.length)}
                                        </strong>
                                        개
                                    </div>
                                    <div className="right_div">
                                        <SingleSortSelect {...singoeSort} />
                                        <ViewCount
                                            value={viewCount}
                                            onChange={setViewCount}
                                        />
                                    </div>
                                </div>
                                <div className="board_list_mini ln05">
                                    <div className="thead">
                                        <div className="th02">게시판</div>
                                        <div className="th03">공개</div>
                                        <div className="th04">제목</div>
                                        <div className="th05">날짜</div>
                                    </div>
                                    <div className="tbody">
                                        <ul>
                                            {items.map((item, index) => (
                                                <li
                                                    onClick={handleClickBoard(
                                                        item
                                                    )}
                                                    key={item._id}
                                                >
                                                    <div className="th02">
                                                        {item.boardType}
                                                    </div>
                                                    <div className="th03">
                                                        {isOpenKr(
                                                            !!item.isOpen
                                                        )}
                                                    </div>
                                                    <div className="th04">
                                                        <a>
                                                            {item.title}
                                                            {item.questionStatus && (
                                                                <i className="q_ok">
                                                                    {
                                                                        item.questionStatus
                                                                    }
                                                                </i>
                                                            )}
                                                        </a>
                                                    </div>
                                                    <div className="th05">
                                                        {dayjs(
                                                            item.createdAt
                                                        ).format(
                                                            "YYYY.MM.DD hh:mm"
                                                        )}
                                                    </div>
                                                </li>
                                            ))}
                                            {isEmpty(items) && (
                                                <li className="no_data">
                                                    {/*게시글이 없을때*/}
                                                    <i className="jandaicon-info3" />
                                                    <span>
                                                        게시글이 없습니다.
                                                    </span>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                    {/* <Paginater pageInfo={pageInfo} /> */}
                                </div>
                            </div>
                        </Change>
                    </div>
                </div>
            </div>
        </MypageLayout>
    );
};

export default auth(ALLOW_LOGINED)(MyPageBoard);
