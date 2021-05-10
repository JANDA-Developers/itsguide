import CalendarIcon from "components/common/icon/CalendarIcon";
import { MypageLayoutWrap } from "layout/MypageLayout";
import { Paginater } from "components/common/Paginator";
import React, { useState } from "react";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { useDateFilter } from "../../hook/useSearch";
import {
    BookingStatus,
    _BookingFilter,
    _BookingSort,
    _ProductFilter,
} from "../../types/api";
import { useBookingList } from "../../hook/useBooking";
import Excel from "../../components/excel/Execel";
import { useIdSelecter } from "../../hook/useIdSelecter";
import { SingleSortSelect } from "../../components/common/SortSelect";
import { ViewCount } from "../../components/common/ViewCount";
import { BookingStatusBadge } from "../../components/Status/StatusBadge";
import { yyyymmdd } from "../../utils/yyyymmdd";
import {
    determinedKr,
    payMethodToKR,
    personCountBracket,
    productStatus,
} from "../../utils/enumToKr";
import { useSingleSort } from "../../hook/useSort";
import { autoComma } from "../../utils/formatter";
import { useQueryFilter } from "../../hook/useQueryFilter";
import { ALLOW_LOGINED, BG } from "../../types/const";
import { auth } from "../../utils/with";
import { getExcelByBookings } from "../../utils/getExcelData";
import {
    BookingModal,
    IBookingModalInfo,
} from "../../components/bookingModal/BookingModal";
import { useModal } from "../../hook/useModal";
import {
    TBookingSearchType,
    useBookingBoard,
} from "../../hook/useBookingBoard";
import { Change } from "../../components/loadingList/LoadingList";
import { thumbNail } from "../../components/ThunbNail/ThunbNail";

interface IProp {}

const popupOpen = () => {
    $("#Popup01").css({
        display: "flex",
    });
};

const popupClose = () => {
    $("#Popup01").css({
        display: "none",
    });
};

export const MyReservation: React.FC<IProp> = () => {
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
        idSelecterHook,
        singleSortHook,
    } = useBookingBoard();
    const {
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
        setPage,
    } = bookingListHook;
    const {
        check,
        handleCheck,
        isAllSelected,
        isChecked,
        reverseAll,
        selectAll,
        selectLength,
        selectedIds,
        setSelectedIds,
        toggle,
        toggleAll,
        unCheck,
        unSelectAll,
    } = idSelecterHook;
    const { hanldeCreateDateChange } = dateFilterHook;

    // const { items, viewCount, setViewCount, filter, setFilter, setOR, sort, setSort, pageInfo, setPage } = useBookingList(undefined);
    // const [searchType, setSearchType] = useState<"code" | "title" | "name">("code");
    // const bookingModalHook = useModal<IBookingModalInfot>()

    // const { hanldeCreateDateChange, filterEnd, filterStart } = useDateFilter({
    //     filter,
    //     setFilter,
    //     dateKey: "createdAt",
    // });

    // const doSearch = (search: string) => {
    //     setOR(["exField__title_contains", "exField__bookerName_eq"], search);
    // }

    // const handleSatus = (status?: BookingStatus) => () => {
    //     setFilter({
    //         ...filter,
    //         status_eq: status
    //     })
    // }

    // const handleDetail = (code: string) => () => {
    //     bookingModalHook.openModal({ code: code });
    // }

    // const checkStatusOn = (status?: BookingStatus) => filter.status_eq === status ? "check on" : "check"

    return (
        <MypageLayoutWrap>
            <div className="in reservation_div">
                <h4>예약관리</h4>
                <div className="paper_div">
                    <div className="con_top">
                        <h6>상세검색</h6>
                        <SearchBar
                            defaultRange={{}}
                            filterStart={filter.createdAt_gte}
                            filterEnd={filter.createdAt_lte}
                            doSearch={doSearch}
                            Status={
                                <div className="jul4">
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
                                                BookingStatus.CANCEL
                                            )}
                                            className={checkOnStatus(
                                                BookingStatus.CANCEL
                                            )}
                                        >
                                            예약취소
                                        </span>
                                    </div>
                                </div>
                            }
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
                                        value={
                                            "exField__bookerName_contains" as TBookingSearchType
                                        }
                                    >
                                        구매자명
                                    </option>
                                    <option
                                        value={"code_eq" as TBookingSearchType}
                                    >
                                        예약코드
                                    </option>
                                </select>
                            }
                            onDateChange={hanldeCreateDateChange}
                        />
                    </div>
                    <div className="con_bottom">
                        <div className="reservation__list con_box">
                            <div className=" alignment">
                                <div className="left_div">
                                    <span className="infotxt">
                                        총{" "}
                                        <strong>{pageInfo.totalCount}</strong>건
                                    </span>
                                </div>
                                <div className="right_div">
                                    <ul className="board_option">
                                        <li onClick={selectAll}>
                                            <a>모두선택</a>
                                        </li>
                                        <li onClick={unSelectAll}>
                                            <a>모두선택 해제</a>
                                        </li>
                                        <li>
                                            <Excel
                                                data={getExcelByBookings(items)}
                                                element={<a>엑셀파일</a>}
                                            />
                                        </li>
                                    </ul>
                                    <SingleSortSelect {...singleSortHook}>
                                        <option
                                            value={
                                                _BookingSort.productStartDate_desc
                                            }
                                        >
                                            출발일 &uarr;
                                        </option>
                                        <option
                                            value={
                                                _BookingSort.productStartDate_asc
                                            }
                                        >
                                            출발일 &darr;
                                        </option>
                                    </SingleSortSelect>
                                    <ViewCount
                                        onChange={setViewCount}
                                        value={viewCount}
                                    />
                                </div>
                            </div>
                            <Change change={!getLoading}>
                                <div className="master__table reservation_list ln07">
                                    <div className="thead">
                                        <div className="t01">
                                            <span className="checkbox">
                                                <input
                                                    checked={isAllSelected}
                                                    onClick={selectAll}
                                                    type="checkbox"
                                                    name="agree"
                                                    id="agree0"
                                                    title="전체선택"
                                                />
                                                <label htmlFor="agree0" />
                                            </span>
                                        </div>
                                        <div className="t02">예약번호</div>
                                        <div className="t04">상품정보</div>
                                        <div className="t05">예약자</div>
                                        <div className="t06">금액</div>
                                        <div className="t07">상태</div>
                                    </div>
                                    {items.map((item, i) => (
                                        <div key={item._id} className="tbody">
                                            <div className="t01">
                                                <span
                                                    onClick={() => {
                                                        check(item._id);
                                                    }}
                                                    className="checkbox"
                                                >
                                                    <input
                                                        checked={isChecked(
                                                            item._id
                                                        )}
                                                        type="checkbox"
                                                        name="agree"
                                                        id={`agree${i}`}
                                                        title="개별선택"
                                                    />
                                                    <label
                                                        htmlFor={`agree${i}`}
                                                    />
                                                </span>
                                            </div>
                                            <div className="t02">
                                                <div className="align">
                                                    <span className="r-number">
                                                        <i className="m_title">
                                                            예약번호:
                                                        </i>
                                                        {item.code}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="t04 MypageGoods__infoBox">
                                                <div
                                                    className="MypageGoods__img img"
                                                    style={BG(
                                                        thumbNail(
                                                            item?.product
                                                                ?.images
                                                        )?.uri || ""
                                                    )}
                                                ></div>
                                                <div className="info goods__info_title">
                                                    <span className="ct">
                                                        {
                                                            item.product
                                                                .category?.label
                                                        }
                                                    </span>
                                                    <span className="g-number">
                                                        상품번호:{" "}
                                                        {item.product.code}
                                                    </span>
                                                    <strong className="title">
                                                        {item.product.title}
                                                    </strong>
                                                    <div className="txt">
                                                        <span className="s-day">
                                                            출발일:{" "}
                                                            {yyyymmdd(
                                                                item.product
                                                                    .startDate
                                                            )}
                                                        </span>
                                                        <span className="where">
                                                            출발장소:{" "}
                                                            {
                                                                item.product
                                                                    .startPoint
                                                            }
                                                        </span>
                                                        <span className="s-day">
                                                            예약일:{" "}
                                                            {yyyymmdd(
                                                                item.createdAt
                                                            )}
                                                        </span>
                                                        <span className="s-day">
                                                            확정여부:{" "}
                                                            {determinedKr(
                                                                item.product
                                                                    .determined
                                                            )}{" "}
                                                            (
                                                            {
                                                                item.product
                                                                    .peopleCount
                                                            }
                                                            /
                                                            {
                                                                item.product
                                                                    .maxMember
                                                            }
                                                            )
                                                        </span>
                                                        <span className="s-day">
                                                            상품상태:{" "}
                                                            {productStatus(
                                                                item.product
                                                                    .status
                                                            )}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="t05">
                                                <div className="align">
                                                    <span className="name">
                                                        <i className="m_title">
                                                            예약자:
                                                        </i>
                                                        {item.name}
                                                    </span>
                                                    <span className="ph">
                                                        {item.phoneNumber}
                                                    </span>
                                                    <span className="men">
                                                        예약인원: 총{" "}
                                                        {item.totalCount}명
                                                        <br />
                                                        {personCountBracket(
                                                            item
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="t06">
                                                <div className="align">
                                                    <strong className="money">
                                                        <i className="m_title">
                                                            금액:
                                                        </i>
                                                        {autoComma(
                                                            item.bookingPrice
                                                        )}
                                                        원
                                                    </strong>
                                                    {item.payment && (
                                                        <span className="pay">
                                                            결제종류:{" "}
                                                            {payMethodToKR(
                                                                item.payment
                                                                    ?.payMethod
                                                            )}
                                                        </span>
                                                    )}
                                                    {item.payment && (
                                                        <span className="pay-day">
                                                            결제일:{" "}
                                                            {yyyymmdd(
                                                                item.payment
                                                                    ?.createdAt
                                                            )}
                                                        </span>
                                                    )}
                                                    <BookingStatusBadge
                                                        status={item.status!}
                                                    />
                                                </div>
                                            </div>
                                            <div className="t07 MypageGoods__btn">
                                                <div className="align">
                                                    <span
                                                        className="btn"
                                                        onClick={() => {
                                                            handleDetail(
                                                                item.code
                                                            );
                                                        }}
                                                    >
                                                        상세보기
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Paginater
                                    setPage={setPage}
                                    pageInfo={pageInfo}
                                />
                            </Change>
                        </div>
                    </div>
                </div>
            </div>
            <BookingModal
                key={bookingModalHook.info?.code}
                {...bookingModalHook}
            />
            {/* popup-상세보기 = 마스터>예약관리>예약.결제관리 상세보기와 같음*/}
        </MypageLayoutWrap>
    );
};

export default auth(ALLOW_LOGINED)(MyReservation);
