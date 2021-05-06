import React, { useContext, useState } from "react";
import { MypageLayout } from "layout/MypageLayout";
import { auth } from "../../utils/with";
import { ALLOW_LOGINED, BG } from "../../types/const";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { useProductList } from "../../hook/useProduct";
import { useDateFilter } from "../../hook/useSearch";
import { useIdSelecter } from "../../hook/useIdSelecter";
import { itemTypeToKr, productStatus, ReqBadge } from "../../utils/enumToKr";
import { yyyymmdd } from "../../utils/yyyymmdd";
import Link from "next/link";
import { getUniqFilter } from "../../utils/filter";
import { MasterAlignMent } from "../../components/master/MasterAlignMent";
import { Paginater } from "../../components/common/Paginator";
import { SingleSortSelect } from "../../components/common/SortSelect";
import { useSingleSort } from "../../hook/useSort";
import { ProductStatus } from "../../types/api";
import { ProductModal } from "../../components/productModal/ProductModal";
import { openModalTimeSet } from "../../utils/popUp";
import { useSettlementsRequest } from "../../hook/useSettlement";
import { HandBookingModal } from "../../components/handBookingModal/HandBookingModal";
import { PordStatusBadge } from "../../components/Status/StatusBadge";
import { AppContext } from "../_app";
import { Change } from "../../components/loadingList/LoadingList";
import { thumbNail } from "../../components/ThunbNail/ThunbNail";

interface IProp {}

export const Plainning: React.FC<IProp> = () => {
    const { myProfile } = useContext(AppContext);
    const {
        items,
        filter,
        setFilter,
        pageInfo,
        sort,
        setSort,
        viewCount,
        setViewCount,
        page,
        setPage,
        getLoading,
    } = useProductList({
        initialFilter: {
            authorEmail_eq: myProfile?.email,
        },
    });
    const { filterStart, filterEnd, hanldeCreateDateChange } = useDateFilter({
        filter,
        setFilter,
    });
    const {
        check,
        isChecked,
        selectAll,
        toggleAll,
        toggle,
        setSelectedIds,
        unCheck,
        unSelectAll,
    } = useIdSelecter(items.map((i) => i._id));
    const singleSort = useSingleSort(sort, setSort);
    const [settlementRquest] = useSettlementsRequest();
    const [popupProductId, setPopupProductId] = useState("");

    const doSearch = (search: string) => {
        const _filter = getUniqFilter(
            filter,
            "title_contains",
            ["title_contains"],
            search
        );

        setFilter({
            ..._filter,
        });
    };

    const handleSatus = (status?: ProductStatus) => () => {
        setFilter({
            ...filter,
            status_eq: status,
        });
    };

    const checkStatusOn = (status?: ProductStatus) =>
        filter.status_eq === status ? "check on" : "check";

    // const handleRequestSettlement = (productId:string) => () => {
    //     settlementRquest({
    //         variables: {
    //             params: [],
    //             settlementId
    //         }
    //     })
    // }

    const handleHandWriteModal = (productId: string) => () => {
        setPopupProductId(productId);
        openModalTimeSet("#HandwrittenRegistration");
    };

    const handleOpenProductModal = (productId: string) => () => {
        setPopupProductId(productId);
        openModalTimeSet("#ProductModal");
    };

    return (
        <MypageLayout>
            <div className="in goods_div">
                <h4>상품관리</h4>
                <div className="paper_div">
                    <div className="con_top">
                        <h6>상세검색</h6>
                        {/* //alt="search icon"  */}
                        <SearchBar
                            Status={
                                <div className="jul2">
                                    <div className="title">상태</div>
                                    <div className="text">
                                        <span
                                            onClick={handleSatus(undefined)}
                                            className={checkStatusOn(undefined)}
                                        >
                                            전체
                                        </span>
                                        <span
                                            onClick={handleSatus(
                                                ProductStatus.CANCELD
                                            )}
                                            className={checkStatusOn(
                                                ProductStatus.CANCELD
                                            )}
                                        >
                                            취소
                                        </span>
                                        <span
                                            onClick={handleSatus(
                                                ProductStatus.OPEN
                                            )}
                                            className={checkStatusOn(
                                                ProductStatus.OPEN
                                            )}
                                        >
                                            판매중
                                        </span>
                                        <span
                                            onClick={handleSatus(
                                                ProductStatus.COMPLETED
                                            )}
                                            className={checkStatusOn(
                                                ProductStatus.COMPLETED
                                            )}
                                        >
                                            완료
                                        </span>
                                        <span
                                            onClick={handleSatus(
                                                ProductStatus.UPDATE_REQ
                                            )}
                                            className={checkStatusOn(
                                                ProductStatus.UPDATE_REQ
                                            )}
                                        >
                                            수정요청
                                        </span>
                                        <span
                                            onClick={handleSatus(
                                                ProductStatus.REFUSED
                                            )}
                                            className={checkStatusOn(
                                                ProductStatus.REFUSED
                                            )}
                                        >
                                            생성반려
                                        </span>
                                        <span
                                            onClick={handleSatus(
                                                ProductStatus.UPDATE_REQ_REFUSED
                                            )}
                                            className={checkStatusOn(
                                                ProductStatus.UPDATE_REQ_REFUSED
                                            )}
                                        >
                                            수정반려
                                        </span>
                                    </div>
                                </div>
                            }
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
                    </div>
                    <Change change={!getLoading}>
                        <div className="con_bottom">
                            <div className="con_box">
                                <MasterAlignMent
                                    handleSelectAll={toggleAll}
                                    LeftDiv={
                                        <span className="infotxt">
                                            총{" "}
                                            <strong>
                                                {pageInfo.totalCount}
                                            </strong>
                                            건
                                        </span>
                                    }
                                    Sort={<SingleSortSelect {...singleSort} />}
                                    setViewCount={setViewCount}
                                    viewCount={viewCount}
                                />
                                <div className="fuction_list_mini ln08">
                                    <div className="thead">
                                        {/* <div className="th01">
                                    <span onClick={selectAll} className="checkbox check2">
                                        <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                        <label htmlFor="agree0" />
                                    </span>
                                </div> */}
                                        <div className="th02">유형</div>
                                        <div className="th03">개시일</div>
                                        <div className="th04">상품</div>
                                        <div className="th05">출발일</div>
                                        <div className="th06">누적</div>
                                        <div className="th07">상태</div>
                                        <div className="th08">예약상태</div>
                                        <div className="th09">관리</div>
                                    </div>
                                    <div className="tbody">
                                        <ul>
                                            {items.map((item, i) => (
                                                <li key={item._id}>
                                                    {/* <div className="th01">
                                                <span className="checkbox check2">
                                                    <input onChange={() => { toggle(item._id) }} checked={isChecked(item._id)} type="checkbox" name="agree" id={`agree${i}`} title="개별선택" />
                                                    <label htmlFor={`agree${i}`} />
                                                </span>
                                            </div> */}
                                                    <div className="th02">
                                                        <span className="m_title">
                                                            유형:{" "}
                                                        </span>
                                                        {itemTypeToKr(
                                                            item.type
                                                        )}
                                                    </div>
                                                    <div className="th03">
                                                        <span className="m_title">
                                                            개시일:{" "}
                                                        </span>
                                                        {yyyymmdd(
                                                            item.createdAt
                                                        )}
                                                    </div>
                                                    <div className="th04">
                                                        <div
                                                            className="img"
                                                            style={BG(
                                                                thumbNail(
                                                                    item?.images
                                                                )?.uri || ""
                                                            )}
                                                        ></div>
                                                        <div className="info goods__info_title">
                                                            <span className="ct">
                                                                {
                                                                    item
                                                                        .category
                                                                        ?.label
                                                                }
                                                            </span>
                                                            <span className="g-number">
                                                                상품번호:{" "}
                                                                {item.code}
                                                            </span>
                                                            <strong className="title">
                                                                {item.title}{" "}
                                                                <ReqBadge
                                                                    req={
                                                                        item.elseReq
                                                                    }
                                                                />
                                                            </strong>
                                                        </div>
                                                    </div>
                                                    <div className="th05">
                                                        <span className="m_title">
                                                            출발일:{" "}
                                                        </span>
                                                        {yyyymmdd(
                                                            item.startDate
                                                        )}
                                                    </div>
                                                    <div className="th06">
                                                        {/* 단위 : 명 */}
                                                        <span className="m_title">
                                                            누적:{" "}
                                                        </span>
                                                        <span className="people">
                                                            성인{" "}
                                                            {
                                                                item
                                                                    .bookerSummary
                                                                    .adultCount
                                                            }
                                                        </span>
                                                        <span className="m_title">
                                                            {" "}
                                                            /{" "}
                                                        </span>
                                                        <span className="people">
                                                            소아{" "}
                                                            {
                                                                item
                                                                    .bookerSummary
                                                                    .kidsCount
                                                            }
                                                        </span>
                                                        <span className="m_title">
                                                            {" "}
                                                            /{" "}
                                                        </span>
                                                        <span className="people">
                                                            유아{" "}
                                                            {
                                                                item
                                                                    .bookerSummary
                                                                    .babyCount
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="th07">
                                                        {/* 단위 : 건 */}
                                                        {/* <span className="m_title">
                                                            상태:{" "}
                                                        </span> */}
                                                        <PordStatusBadge
                                                            status={item.status}
                                                        />
                                                    </div>
                                                    <div className="th08">
                                                        {/* 단위 : 건 */}
                                                        {/* <span className="m_title">
                                                            상태:{" "}
                                                        </span> */}
                                                        <span className="present">
                                                            예약{" "}
                                                            {
                                                                item
                                                                    .bookerSummary
                                                                    .completeBookCount
                                                            }
                                                        </span>
                                                        <span className="m_title">
                                                            {" "}
                                                            /{" "}
                                                        </span>
                                                        <span className="present">
                                                            대기{" "}
                                                            {
                                                                item
                                                                    .bookerSummary
                                                                    .readyBookCount
                                                            }
                                                        </span>
                                                        <span className="m_title">
                                                            {" "}
                                                            /{" "}
                                                        </span>
                                                        <span className="present">
                                                            환불{" "}
                                                            {
                                                                item
                                                                    .bookerSummary
                                                                    .readyBookCount
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="th09">
                                                        <i className="btn">
                                                            <Link
                                                                href={`/tour/write/${item._id}`}
                                                            >
                                                                <a>상품수정</a>
                                                            </Link>
                                                        </i>
                                                        {/*글수정으로 가기 */}
                                                        <i
                                                            onClick={handleOpenProductModal(
                                                                item._id
                                                            )}
                                                            className="btn"
                                                        >
                                                            상세보기
                                                        </i>
                                                        {/* POPUP */}
                                                        {item.status ===
                                                            ProductStatus.OPEN && (
                                                            <i
                                                                onClick={handleHandWriteModal(
                                                                    item._id
                                                                )}
                                                                className="btn"
                                                            >
                                                                예약등록
                                                            </i>
                                                        )}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Paginater
                                        setPage={setPage}
                                        pageInfo={pageInfo}
                                    />
                                </div>
                                <div className="boardNavigation">
                                    <div className="float_left"></div>
                                    <div className="float_right"></div>
                                </div>
                            </div>
                        </div>
                    </Change>
                </div>
            </div>
            <HandBookingModal
                key={popupProductId}
                defaultProductId={popupProductId}
            />
            <ProductModal key={popupProductId} productId={popupProductId} />
        </MypageLayout>
    );
};

export default auth(ALLOW_LOGINED)(Plainning);

// import { MypageLayout } from 'layout/MypageLayout';
// import { Paginater } from 'components/common/Paginator';
// import React from 'react';

// interface IProp { }

// export const MyPlanning: React.FC<IProp> = () => {
//     return <MypageLayout>
//         <div className="in myplanning_box">
//             <h4>기획관리</h4>
//             <div className="paper_div">
//                 <div className="con_top">
//                     <h6>상세검색</h6>
//                     <div className="search_box">
//                         <div className="jul2">
//                             <div className="title">범위</div>
//                             <div className="text">
//                                 <span className="check on">제목</span>
//                                 <span className="check">내용</span>
//                             </div>
//                         </div>
//                         <div className="jul4">
//                             <div className="title">날짜</div>
//                             <div className="text">
//                                 <ul className="day_ul">
//                                     <li className="on">
//                                         <span>이번달</span>
//                                     </li>
//                                     <li className="on">
//                                         <span>저번달</span>
//                                     </li>
//                                     <li>
//                                         <span>6개월</span>
//                                     </li>
//                                     <li>
//                                         <span>1년</span>
//                                     </li>
//                                 </ul>
//                                 <div className="input_box">
//                                     <input type="text" className="day w100" />
//                                     <span className="calendar">
//                                         <img src="/img/svg/CalendarIcon.svg" className="svg_calendar" />
//                                         <button />
//                                     </span>
//                                 </div>
//                                 ~
//                                  <div className="input_box">
//                                     <input type="text" className="day w100" />
//                                     <span className="calendar">
//                                         <img src="/img/svg/CalendarIcon.svg" className="svg_calendar" />
//                                         <button />
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="jul1">
//                             <div>
//                                 <select className="option">
//                                     <option>상품코드</option>
//                                     <option>상품명</option>
//                                     <option>예약자</option>
//                                 </select>
//                                 <div className="search_div">
//                                     <input className="" type="text" placeholder="검색 내용을 입력해주세요." />
//                                     <div className="svg_img">
//                                         <img src="/img/svg/search_icon.svg" alt="search icon" />
//                                         <button />
//                                     </div>

//                                 </div>

//                             </div>
//                         </div>
//                     </div>

//                     <div className="con_bottom">
//                         <div className="con_box">
//                             <div className="alignment">
//                                 <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>건</span></div>
//                                 <div className="right_div">
//                                     <ul className="board_option">
//                                         <li><a href="/">모두선택</a></li>
//                                         <li><a href="/">모두선택 해제</a></li>
//                                         <li><a href="/">엑셀파일</a></li>
//                                     </ul>
//                                     <select className="sel01">
//                                         <option>출발일 &uarr;</option>
//                                         <option>출발일 &darr;</option>
//                                         <option>등록일 &uarr;</option>
//                                         <option>등록일 &darr;</option>
//                                     </select>
//                                     <select className="sel02">
//                                         <option>10개 보기</option>
//                                         <option>50개 보기</option>
//                                         <option>100개 보기</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="fuction_list_mini ln08">
//                                 <div className="thead">
//                                     <div className="th01">
//                                         <span className="checkbox">
//                                             <input type="checkbox" name="agree" id="agree0" title="전체선택" />
//                                             <label htmlFor="agree0" />
//                                         </span>
//                                     </div>
//                                     <div className="th02">상품코드</div>
//                                     <div className="th03">상품명</div>
//                                     <div className="th04">출발일</div>
//                                     <div className="th05">금액</div>
//                                     <div className="th06">인원수</div>
//                                     <div className="th07">상태</div>
//                                     <div className="th08">상세보기</div>
//                                 </div>
//                                 <div className="tbody">
//                                     <ul>
//                                         <li>
//                                             <div className="th01">
//                                                 <span className="checkbox">
//                                                     <input type="checkbox" name="agree" id={`agree${i}`} title="개별선택" />
//                                                     <label htmlFor={`agree${i}`} />
//                                                 </span>
//                                             </div>
//                                             <div className="th02"><span className="m_title">상품코드: </span>ITS-01230</div>
//                                             <div className="th03">제주도로 떠나요~ 제주도로 떠나요~제주도로 떠나요~</div>
//                                             <div className="th04"><span className="m_title">출발일: </span>2020.02.02</div>
//                                             <div className="th05">
//                                                 <span className="m_title">금액: </span>
//                                                 <span className="people">성인 20,000</span>
//                                                 <span className="m_title"> / </span>
//                                                 <span className="people">소아 1,000,000</span>
//                                                 <span className="m_title"> / </span>
//                                                 <span className="people">유아 0</span>
//                                             </div>
//                                             <div className="th06"><span className="m_title">인원수: </span>22</div>
//                                             <div className="th07"><span className="m_title">상태: </span><strong className="no">기획반려</strong></div>
//                                             <div className="th08"><i className="btn">수정하기</i></div>
//                                         </li>
//                                         <li>
//                                             <div className="th01">
//                                                 <span className="checkbox">
//                                                     <input type="checkbox" name="agree" id={`agree${i}`} title="개별선택" />
//                                                     <label htmlFor={`agree${i}`} />
//                                                 </span>
//                                             </div>
//                                             <div className="th02"><span className="m_title">상품코드: </span>ITS-01230</div>
//                                             <div className="th03">제주도로 떠나요~ 제주도로 떠나요~제주도로 떠나요~</div>
//                                             <div className="th04"><span className="m_title">출발일: </span>2020.02.02</div>
//                                             <div className="th05">
//                                                 {/* 단위 : 원 */}
//                                                 <span className="m_title">금액: </span>
//                                                 <span className="people">성인 20,000</span>
//                                                 <span className="m_title"> / </span>
//                                                 <span className="people">소아 1,000,000</span>
//                                                 <span className="m_title"> / </span>
//                                                 <span className="people">유아 0</span>
//                                             </div>
//                                             <div className="th06"><span className="m_title">인원수: </span>22</div>
//                                             <div className="th07"><span className="m_title">상태: </span><strong className="ok">기획요청</strong></div>
//                                             <div className="th08"><i className="btn">수정하기</i></div>
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 {/* <Paginater pageNumber={10} totalPageCount={20} /> */}
//                             </div>

//                             <div className="boardNavigation">
//                                 <div className="float_left">
//                                     <div className="pagenate_mini">
//                                         <a href="" className="mini_btn small">기획서 작성하기</a>
//                                     </div>
//                                 </div>
//                                 <div className="float_right">
//                                     <a href="" className="btn">삭제하기</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </MypageLayout>
// };

// export default MyPlanning;
