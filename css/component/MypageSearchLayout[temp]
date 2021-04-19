import React from 'react';
import { SearchBar } from '../../components/searchBar/SearchBar';

interface IProp { }

export const MypageSearchLayout: React.FC<IProp> = () => {
    return <div className="in reservation_div">
        <h4>예약관리</h4>
        <div className="paper_div">
            <div className="con_top">
                <h6>상세검색</h6>
                <SearchBar
                    defaultRange={{}}
                    filterStart={filter.createdAt_gte}
                    filterEnd={filter.createdAt_lte}
                    doSearch={doSearch} Status={
                        <div className="jul4">
                            <div className="title">상태</div>
                            <div className="text">
                                <span onClick={setType(undefined)} className={checkOnStatus(undefined)}>전체</span>
                                <span onClick={setType(BookingStatus.READY)} className={checkOnStatus(BookingStatus.READY)}>예약대기</span>
                                <span onClick={setType(BookingStatus.COMPLETE)} className={checkOnStatus(BookingStatus.COMPLETE)}>예약완료</span>
                                <span onClick={setType(BookingStatus.CANCEL)} className={checkOnStatus(BookingStatus.CANCEL)}>예약취소</span>
                            </div>
                        </div>
                    }
                    SearchSelect={
                        SearchSelect
                        // <select onChange={(e) => {
                        //     const val = e.currentTarget.value;
                        //     setFilterType(val as any)
                        // }} value={filterType} className="option">
                        //     <option value={"exField__title_contains" as TBookingSearchType}>상품명</option>
                        //     <option value={"exField__sellerName_eq" as TBookingSearchType}>판매자명</option>
                        //     <option value={"code_eq" as TBookingSearchType}>예약코드</option>
                        // </select>
                    }
                    onDateChange={hanldeCreateDateChange}
                />
            </div>
            <div className="con_bottom">
                <div className="con_box">
                    <div className="alignment">
                        <div className="left_div"><span className="infotxt">총 <strong>{pageInfo.totalCount}</strong>건</span></div>
                        <div className="right_div">
                            {/* <ul className="board_option">
                                <li onClick={selectAll}><a>모두선택</a></li>
                                <li onClick={unSelectAll}><a>모두선택 해제</a></li>
                                <li><Excel data={getExcelByBookings(items)} element={<a>엑셀파일</a>} /></li>
                            </ul>
                            <SingleSortSelect {...singleSortHook} >
                                <option value={_BookingSort.productStartDate_desc}>출발일 &uarr;</option>
                                <option value={_BookingSort.productStartDate_asc}>출발일 &darr;</option>
                            </SingleSortSelect>
                            <ViewCount onChange={setViewCount} value={viewCount} /> */}
                        </div>
                    </div>
                    {Table}
                    <Paginater setPage={setPage} pageInfo={pageInfo} />
                </div>
            </div>
        </div>
    </div>;
};
