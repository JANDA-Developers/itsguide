import dayjs from "dayjs";
import { MypageLayoutWrap } from "layout/MypageLayout";
import React, { useState } from "react";
import { BookingModal } from "../../components/bookingModal/BookingModal";
import { Paginater } from "../../components/common/Paginator";
import SortSelect from "../../components/common/SortMethod";
import { ViewCount } from "../../components/common/ViewCount";
import { Change } from "../../components/loadingList/LoadingList";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { SettlementModal } from "../../components/settlementModal/SettlementModal";
import { SettlementStatusBadge } from "../../components/Status/StatusBadge";
import { useCustomCount } from "../../hook/useCount";
import { useIdSelecter } from "../../hook/useIdSelecter";
import { useDateFilter } from "../../hook/useSearch";
import { useSettlementList } from "../../hook/useSettlement";
import {
    Fsettlement,
    SettlementStatus,
    _ProductFilter,
    _SettlementFilter,
} from "../../types/api";
import { ALLOW_SELLERS } from "../../types/const";
import { productStatus } from "../../utils/enumToKr";
import { autoComma } from "../../utils/formatter";
import { openModalTimeSet } from "../../utils/popUp";
import { auth } from "../../utils/with";

interface IProp {}

type TsearchType = keyof Pick<
    _SettlementFilter,
    "exField__code_eq" | "exField__title_contains"
>;

export const MySettlement: React.FC<IProp> = () => {
    const {
        items,
        filter,
        setFilter,
        viewCount,
        setViewCount,
        setUniqFilter,
        setSort,
        sort,
        pageInfo,
        setPage,
        getLoading,
    } = useSettlementList();
    const [target] = useState<Fsettlement | null>(null);
    const {
        filterEnd,
        filterStart,
        hanldeCreateDateChange,
        setDateKey,
    } = useDateFilter({
        filter,
        setFilter,
    });
    const [searchType, setSearchType] = useState<TsearchType>(
        "exField__code_eq" as TsearchType
    );
    const { selectAll, isAllSelected } = useIdSelecter(
        items.map((item, i) => item._id)
    );
    const [settlementId, setSettlementId] = useState("");
    const dateFilterHook = useDateFilter({
        filter,
        setFilter,
        dateKey: "createdAt",
    });

    const {
        salesofLastMonth,
        salesOfThisMonth,
        settleAvaiableAmount,
        cancelReturnPrice,
    } = useCustomCount([
        "salesofLastMonth",
        "salesofLastMonth",
        "salesOfThisMonth",
        "settleAvaiableAmount",
        "cancelReturnPrice",
    ]);

    const doSearch = (search: string) => {
        setUniqFilter(
            searchType,
            ["exField__code_eq", "exField__title_contains"],
            search
        );
    };

    const handleOpenModal = (_id: string) => () => {
        setSettlementId(_id);
        openModalTimeSet("#SettlementModal");
    };

    const handleStatus = (status?: SettlementStatus) => () => {
        filter.status_eq = status;
        setFilter({
            ...filter,
        });
    };
    const checkStatusOn = (status?: SettlementStatus) => {
        return filter.status_eq === status ? "check on" : "check";
    };

    return (
        <MypageLayoutWrap>
            <div className="in mypage_purchase">
                <h4>매출/정산관리</h4>
                <div className="paper_div">
                    <div className="statement_div">
                        <div className="top_btn">
                            {/* <span>통계표 상세보기</span> */}
                        </div>
                        <ul>
                            <li>
                                <strong>저번달 예약</strong>
                                <div>
                                    <strong>{salesofLastMonth}</strong>건
                                </div>
                            </li>
                            <li>
                                <strong>이번달 예약</strong>
                                <div>
                                    <strong>{salesOfThisMonth}</strong>건
                                </div>
                            </li>
                            <li>
                                <strong>정산 가능 금액</strong>
                                {/* 계산법: 상태가 Ready인 Settlement들의 정산금액 */}
                                <div>
                                    <strong>
                                        {autoComma(settleAvaiableAmount)}
                                    </strong>
                                    원
                                </div>
                            </li>
                            <li>
                                <strong>취소 환수금</strong>
                                {/* 계산법: Settlement의 취소 환수금들의 합산  */}
                                <div>
                                    <strong>
                                        {autoComma(cancelReturnPrice)}
                                    </strong>
                                    원
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="con_top">
                        <h6>상세검색</h6>
                        <SearchBar
                            filterStart={filterStart}
                            filterEnd={filterEnd}
                            doSearch={doSearch}
                            Status={
                                <div className="jul2">
                                    <div className="title">상태</div>
                                    <div className="text">
                                        <span
                                            onClick={handleStatus(undefined)}
                                            className={checkStatusOn(undefined)}
                                        >
                                            전체
                                        </span>
                                        <span
                                            onClick={handleStatus(
                                                SettlementStatus.READY
                                            )}
                                            className={checkStatusOn(
                                                SettlementStatus.READY
                                            )}
                                        >
                                            정산대기
                                        </span>
                                        <span
                                            onClick={handleStatus(
                                                SettlementStatus.REQUEST
                                            )}
                                            className={checkStatusOn(
                                                SettlementStatus.REQUEST
                                            )}
                                        >
                                            정산요청
                                        </span>
                                        <span
                                            onClick={handleStatus(
                                                SettlementStatus.COMPLETE
                                            )}
                                            className={checkStatusOn(
                                                SettlementStatus.COMPLETE
                                            )}
                                        >
                                            정산완료
                                        </span>
                                        <span
                                            onClick={handleStatus(
                                                SettlementStatus.CANCELED
                                            )}
                                            className={checkStatusOn(
                                                SettlementStatus.CANCELED
                                            )}
                                        >
                                            정산취소
                                        </span>
                                    </div>
                                </div>
                            }
                            SearchSelect={
                                <select
                                    value={searchType}
                                    onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        setSearchType(val as any);
                                    }}
                                    className="option"
                                >
                                    <option value={"code_eq" as TsearchType}>
                                        상품코드
                                    </option>
                                    <option
                                        value={
                                            "exField__title_contains" as TsearchType
                                        }
                                    >
                                        상품명
                                    </option>
                                </select>
                            }
                            onDateChange={hanldeCreateDateChange}
                            defaultRange={{}}
                        />
                    </div>
                    <Change change={!getLoading}>
                        <div className="con_bottom">
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
                                            onChange={setViewCount}
                                        />
                                    </div>
                                </div>
                                <div className="fuction_list_mini ln08">
                                    <div className="thead">
                                        {/* <div className="th01">
                                        <span className="checkbox">
                                            <input checked={isAllSelected} onClick={selectAll} type="checkbox" name="agree" id="agree0" title="전체선택" />
                                            <label htmlFor="agree0" />
                                        </span>
                                    </div> */}
                                        <div className="th02">상품코드</div>
                                        <div className="th03">상품명</div>
                                        <div className="th04">상품상태</div>
                                        <div className="th05">정산날짜</div>
                                        <div className="th06">금액</div>
                                        <div className="th07">상태</div>
                                        <div className="th08">상세보기</div>
                                    </div>
                                    <div className="tbody">
                                        <ul>
                                            {items.map((item, i) => (
                                                <li className="mypageSettlement__list">
                                                    {/* <div className="th01"><input type="checkbox" /></div> */}
                                                    <div className="th02">
                                                        {item.product.code}
                                                    </div>
                                                    <div className="th03">
                                                        {item.product.title}
                                                    </div>
                                                    <div className="th04">
                                                        <span className="m_title">
                                                            상품상태:
                                                        </span>
                                                        {productStatus(
                                                            item.product?.status
                                                        )}
                                                    </div>
                                                    <div className="th05">
                                                        <span className="m_title">
                                                            정산날짜:
                                                        </span>
                                                        {item.completeDate
                                                            ? dayjs(
                                                                  item.completeDate
                                                              ).format(
                                                                  "YYYY.MM.DD"
                                                              )
                                                            : "미정산"}
                                                    </div>
                                                    <div className="th06">
                                                        <span className="m_title">
                                                            금액:
                                                        </span>
                                                        {autoComma(
                                                            item.totalPrice
                                                        )}
                                                        원
                                                    </div>
                                                    <div className="th07">
                                                        <SettlementStatusBadge
                                                            className="mypageSettlement__statusBadge"
                                                            status={item.status}
                                                            productStatus={
                                                                item.product
                                                                    .status
                                                            }
                                                        />
                                                    </div>
                                                    <div
                                                        onClick={handleOpenModal(
                                                            item._id
                                                        )}
                                                        className="th08"
                                                    >
                                                        <i className="btn">
                                                            상세보기
                                                        </i>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="boardNavigation">
                                        <Paginater
                                            setPage={setPage}
                                            pageInfo={pageInfo}
                                            isMini
                                        />
                                    </div>
                                </div>

                                <div className="in_fin mt30">
                                    <div className="float_left">
                                        {/* <button type="submit" className="btn strong" onClick={popupOpen}>정산 계산하기</button> */}
                                    </div>
                                    <div className="float_right"></div>
                                </div>
                            </div>
                        </div>
                    </Change>
                </div>
            </div>
            {/* 정산모달 */}
            <SettlementModal settlementId={settlementId} />
        </MypageLayoutWrap>
    );
};

export default auth(ALLOW_SELLERS)(MySettlement);
