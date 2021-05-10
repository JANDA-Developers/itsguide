import { PurChasedItem } from "components/mypage/PurchasedItem";
import { MypageLayoutWrap } from "layout/MypageLayout";
import React from "react";
import { BookingModal } from "../../components/bookingModal/BookingModal";
import { Paginater } from "../../components/common/Paginator";
import SortSelect from "../../components/common/SortMethod";
import { ViewCount } from "../../components/common/ViewCount";
import { DayPickerModal } from "../../components/dayPickerModal/DayPickerModal";
import { Change } from "../../components/loadingList/LoadingList";
import { NoData } from "../../components/common/NoData";
import { SearchBar } from "../../components/searchBar/SearchBar";
import {
    TBookingSearchType,
    useBookingBoard,
} from "../../hook/useBookingBoard";
import { BookingStatus, _BookingFilter, _ProductFilter } from "../../types/api";
import { ALLOW_LOGINED } from "../../types/const";
import { rangeToFilter } from "../../utils/filter";
import isEmpty from "../../utils/isEmpty";
import { closeModal } from "../../utils/popUp";
import { auth } from "../../utils/with";

interface IProp {}

export const MyPagePurchase: React.FC<IProp> = () => {
    const {
        filterType,
        bookingModalHook,
        bookingListHook,
        checkOnStatus,
        doSearch,
        handleDetail,
        dateFilterHook,
        isTimeOverExcept,
        setFilterType,
        setIsTimeOverExcept,
        setType,
    } = useBookingBoard();
    const {
        setPage,
        filter,
        filterToRange,
        getLoading,
        items,
        setFilter,
        viewCount,
        sort,
        setSort,
        setViewCount,
        pageInfo,
    } = bookingListHook;
    const { hanldeCreateDateChange } = dateFilterHook;

    return (
        <MypageLayoutWrap>
            <div className="in mypage_purchase">
                <h4>구매내역</h4>
                <div className="paper_div">
                    <div className="con_top">
                        <h6>상세검색</h6>
                        <SearchBar
                            filterStart={filter.createdAt_gte}
                            filterEnd={filter.createdAt_lte}
                            Status={
                                <div className="jul2">
                                    <div className="title">상태</div>
                                    <div className="text">
                                        <span
                                            onClick={setType(undefined)}
                                            className={checkOnStatus(undefined)}
                                        >
                                            전체
                                        </span>
                                        <span
                                            onClick={setType(
                                                BookingStatus.COMPLETE
                                            )}
                                            className={checkOnStatus(
                                                BookingStatus.COMPLETE
                                            )}
                                        >
                                            예약완료
                                        </span>
                                        <span
                                            onClick={setType(
                                                BookingStatus.READY
                                            )}
                                            className={checkOnStatus(
                                                BookingStatus.READY
                                            )}
                                        >
                                            예약대기
                                        </span>
                                        <span
                                            onClick={setType(
                                                BookingStatus.CANCEL
                                            )}
                                            className={checkOnStatus(
                                                BookingStatus.CANCEL
                                            )}
                                        >
                                            취소예약
                                        </span>
                                    </div>
                                </div>
                            }
                            //alt="search icon"
                            SearchSelect={
                                <select
                                    onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        setFilterType(val as any);
                                    }}
                                    value={filterType}
                                    className="option"
                                >
                                    <option
                                        value={
                                            "exField__title_contains" as TBookingSearchType
                                        }
                                    >
                                        상품명
                                    </option>
                                    <option
                                        value={
                                            "exField__sellerName_eq" as TBookingSearchType
                                        }
                                    >
                                        판매자명
                                    </option>
                                    <option
                                        value={"code_eq" as TBookingSearchType}
                                    >
                                        예약코드
                                    </option>
                                </select>
                            }
                            onDateChange={hanldeCreateDateChange}
                            defaultRange={{}}
                            doSearch={doSearch}
                        />
                    </div>
                    <div className="con_bottom">
                        <Change change={!getLoading}>
                            <div className="con_box">
                                <div className="alignment">
                                    <div className="left_div">
                                        총<strong>{pageInfo.totalCount}</strong>
                                        개
                                    </div>
                                    <div className="right_div">
                                        <SortSelect
                                            onChange={setSort}
                                            sort={sort}
                                        />
                                        <ViewCount
                                            value={viewCount}
                                            onChange={(val) => {
                                                setViewCount(val);
                                            }}
                                        />
                                    </div>
                                </div>
                                {/*리스트로 보기*/}
                                <div className="list selectViewList">
                                    <ul className="list_ul">
                                        {items.map((item, i) => (
                                            <PurChasedItem
                                                onDetail={() => {
                                                    handleDetail(item.code);
                                                }}
                                                item={item}
                                                key={item._id}
                                            />
                                        ))}
                                        <NoData show={isEmpty(items)} />
                                    </ul>
                                </div>
                                <Paginater
                                    setPage={setPage}
                                    pageInfo={pageInfo}
                                />
                            </div>
                        </Change>
                    </div>
                </div>
            </div>
            <BookingModal
                key={bookingModalHook.info?.code}
                {...bookingModalHook}
            />
            <DayPickerModal
                defaultRange={filterToRange("createdAt_gte")}
                onSubmit={(range) => {
                    closeModal("#dayPickerModal")();
                    const data = rangeToFilter(range, "createdAt");
                    setFilter({
                        ...filter,
                        ...data,
                    });
                }}
            />
        </MypageLayoutWrap>
    );
};

export default auth(ALLOW_LOGINED)(MyPagePurchase);
