import { MasterLayout } from "layout/MasterLayout";
import Link from "next/link";
import React from "react";
import { BoardOption } from "../../components/boardOption/BoardOption";
import { MasterBookingLi } from "../../components/bookingLi/MasterBookingLi";
import { useBookingList } from "../../hook/useBooking";
import { useCountManager } from "../../hook/useCount";
import { useProductList } from "../../hook/useProduct";
import { useQuestionList } from "../../hook/useQuestion";
import { useSettlementList } from "../../hook/useSettlement";
import { useUserList } from "../../hook/useUser";
import {
    BookingStatus,
    ProductType,
    QuestionStatus,
    SettlementStatus,
    UserRole,
} from "../../types/api";
import { ALLOW_ADMINS } from "../../types/const";
import {
    confirmKr,
    productStatus,
    questionSatus,
    settlementStatus,
    userStatusKR,
} from "../../utils/enumToKr";
import { autoComma, autoHypenPhone } from "../../utils/formatter";
import { auth } from "../../utils/with";
import { yyyymmdd } from "../../utils/yyyymmdd";

interface IProp {}
export const updateAtSort = ["updatedAt_desc" as any];
export const MsIndex: React.FC<IProp> = () => {
    const {
        items: questions,
        setUniqFilter: setQuestionFilter,
        filter: questionFilter,
    } = useQuestionList({ initialViewCount: 4, fixingSort: updateAtSort });
    const {
        items: products,
        setUniqFilter: setProductFilter,
        filter: productFilter,
    } = useProductList({ initialViewCount: 4, fixingSort: updateAtSort });
    const {
        items: bookings,
        setUniqFilter: setBookingFilter,
        filter: bookingFilter,
    } = useBookingList({ initialViewCount: 4, fixingSort: updateAtSort });
    const {
        items: cancelBookings,
        setUniqFilter: setCancelBookingFilter,
    } = useBookingList({
        initialViewCount: 4,
        fixingSort: updateAtSort,
        initialFilter: {
            OR: [
                { status_eq: BookingStatus.CANCEL },
                { isCancelRequest_eq: true },
            ],
        },
    });
    const {
        items: settlements,
        setUniqFilter: setSettlementFilter,
        filter: settlementFilter,
    } = useSettlementList({ initialViewCount: 4, fixingSort: updateAtSort });

    const {
        items: parterUsers,
        setUniqFilter: setPartnerFilter,
        filter: partnerFilter,
    } = useUserList({
        fixingSort: updateAtSort,
        initialViewCount: 4,
        initialFilter: {
            role_eq: UserRole.partner,
        },
    });
    const {
        items: busiPartnerUsers,
        setUniqFilter: setPartnerBFilter,
        filter: busiPartnerFilter,
    } = useUserList({
        initialViewCount: 4,
        initialFilter: {
            role_eq: UserRole.partnerB,
        },
    });
    const { data: count, getLoading } = useCountManager();
    const {
        totalExpCount,
        totalTourCount,
        readyBookingCountMaster,
        totalBookingCountMaster,
        determiendProductCountMaster,
        undeterMinedProductCountMaster,
        cancelProductCountMaster,
        totalCancelCompleteCount,
        totalProductCountMaster,
        cancelBookingCountMaster,
        compeltedBookingCountMaster,
        confimedBusiPartnerCount,
        confimedPartnerCount,
        unConfimedBusiPartnerCount,
        unConfimedPartnerCount,
        settlementRequestCountMaster,
        expBookingCountMaster,
        settleUnsolvedRequestCount,
        settlementCompleteCountMaster,
        settlementReadyCountMater,
        koreanMemberCount,
        foreginMemberCount,
        buyTotalCount,
        totalSettlementCount,
        tourBookingCountMaster,
        busiPartnerBCountMaster,
        totalPartnerMemberCount,
        busiPartnerCountMaster,
        totalIndiMemberCount,
        answeredQuestionCount,
        unAnsweredQuestionCount,
    } = count || {};
    // const { } = useQuestionList();

    // const { } = use

    //하나씩 채우자 아자아자!

    const productTypeFilter = (val: any) => () => {
        setProductFilter("type_eq", ["type_eq"], val);
    };

    const checkOnProductType = (val: any) => {
        return productFilter.type_eq === val ? "on" : "";
    };

    const checkOnManagerFilterPartner = (val: any) => () => {
        setPartnerFilter("isVerifiedManager_eq", ["isVerifiedManager_eq"], val);
    };

    const checkOnManagerAcceptPartner = (val: any) => {
        // return userFilter.isVerifiedManager_eq === val ? "on" : "";
    };

    const checkOnManagerFilterPartnerB = (val: any) => () => {
        setPartnerFilter("isVerifiedManager_eq", ["isVerifiedManager_eq"], val);
    };

    const checkOnManagerAcceptPartnerB = (val: any) => {
        // return userFilter.isVerifiedManager_eq === val ? "on" : "";
    };

    return (
        <MasterLayout>
            <div className="in">
                <div className="main_paper_div masterMain">
                    <div className="hang div01">
                        <div className="head">
                            <h5>상품</h5>
                            <Link href="/master/goods">
                                <a className="more">
                                    더보기
                                    <i className="jandaicon-arr4-right"></i>
                                </a>
                            </Link>
                        </div>
                        {/* <ul className="view">
                        <li>
                            <strong>{totalProductCountMaster}</strong>
                            <span>전체</span>
                        </li>
                        <li>
                            <strong>{cancelProductCountMaster}</strong>
                            <span>판매중지</span>
                        </li>
                        <li>
                            <strong className="red_font">{undeterMinedProductCountMaster}</strong>
                            <span>출발미정</span>
                        </li>
                        <li>
                            <strong className="sky_font">{determiendProductCountMaster}</strong>
                            <span>출발확정</span>
                        </li>
                    </ul> */}
                        <ul className="table typeA">
                            <li className="head">
                                <div className="td01">상품명</div>
                                <div className="td02">상품상태</div>
                                <div className="td03">판매누적</div>
                                <div className="td04">판매자</div>
                                <div className="td05">게시일</div>
                            </li>
                            {products.map((pd) => (
                                <li className="body">
                                    <div className="td01">
                                        <strong>{pd.title}</strong>
                                        <span>
                                            (성인 {autoComma(pd.adult_price)}
                                            &nbsp;&frasl;&nbsp;소아
                                            {autoComma(pd.kids_price)}
                                            &nbsp;&frasl;&nbsp;유아
                                            {autoComma(pd.baby_price)})
                                        </span>
                                    </div>
                                    <div className="td02">
                                        <span className="m_title">
                                            상품상태:
                                        </span>
                                        <strong>
                                            {productStatus(pd.status)}
                                        </strong>
                                    </div>
                                    <div className="td03">
                                        <span className="m_title">
                                            판매누적:
                                        </span>
                                        <span>
                                            예약
                                            <strong>
                                                {pd.bookings.length}
                                            </strong>
                                        </span>
                                        &nbsp;&frasl;&nbsp;
                                        <span>
                                            완료
                                            <strong>
                                                {pd.bookings.map(
                                                    (bk) =>
                                                        bk.status ===
                                                        BookingStatus.COMPLETE
                                                )}
                                            </strong>
                                        </span>
                                        &nbsp;&frasl;&nbsp;
                                        <span>
                                            취소
                                            <strong>
                                                {pd.bookings.map(
                                                    (bk) =>
                                                        bk.status ===
                                                        BookingStatus.CANCEL
                                                )}
                                            </strong>
                                        </span>
                                    </div>
                                    <div className="td04">
                                        <span className="m_title">판매자:</span>
                                        <strong>{pd.author?.name}</strong>
                                    </div>
                                    <div className="td05">
                                        <span className="m_title">게시일:</span>
                                        {yyyymmdd(pd.createdAt)}
                                        {/* <a  className="masterMain__detailBtn btn">상세보기</a> */}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hang div02">
                        <div className="head">
                            <h5>예약&middot;결제</h5>
                            <BoardOption
                                li={[
                                    {
                                        count: totalBookingCountMaster || 0,
                                        label: "전체",
                                        value: undefined,
                                    },
                                    {
                                        count: readyBookingCountMaster || 0,
                                        label: "대기",
                                        value: BookingStatus.READY,
                                    },
                                    {
                                        count: compeltedBookingCountMaster || 0,
                                        label: "완료",
                                        value: BookingStatus.COMPLETE,
                                    },
                                    {
                                        count: cancelBookingCountMaster || 0,
                                        label: "취소",
                                        value: BookingStatus.CANCEL,
                                    },
                                ]}
                                setUniqFilter={setBookingFilter}
                                filter={bookingFilter}
                                filterKey="status_eq"
                            />
                            <Link href="/master/reservation">
                                <a className="more">
                                    더보기
                                    <i className="jandaicon-arr4-right"></i>
                                </a>
                            </Link>
                        </div>
                        {/* <ul className="view">
                        <li>
                            <strong>{totalBookingCountMaster}</strong>
                            <span>전체</span>
                        </li>
                        <li>
                            <strong>{readyBookingCountMaster}</strong>
                            <span>입금준비중</span>
                        </li>
                        <li>
                            <strong>{compeltedBookingCountMaster}</strong>
                            <span>결제완료</span>
                        </li>
                        <li>
                            <strong>{cancelBookingCountMaster}</strong>
                            <span>취소</span>
                        </li>
                    </ul> */}
                        <ul className="table typeA">
                            <li className="head">
                                <div className="td01">상품명</div>
                                <div className="td02">출발일</div>
                                <div className="td03">진행여부</div>
                                <div className="td04">예약상태</div>
                                <div className="td05">예약자</div>
                            </li>
                            {bookings.map((bk) => (
                                <MasterBookingLi booking={bk} key={bk._id} />
                            ))}
                        </ul>
                    </div>
                    <div className="hang div03">
                        <div className="head">
                            <h5>취소&middot;환불</h5>
                            {/* <ul className="board_option">
                            <li ><a>전체<strong>{cancelBookingCountMaster! + totalCancelCompleteCount!}</strong></a></li>
                            <li ><a>요청<strong>{cancelBookingCountMaster}</strong></a></li>
                            <li><a >완료<strong>{totalCancelCompleteCount}</strong></a></li>
                        </ul> */}
                            <Link href="/master/reservation">
                                <a className="more">
                                    더보기
                                    <i className="jandaicon-arr4-right"></i>
                                </a>
                            </Link>
                        </div>
                        {/* <ul className="view">
                        <li>
                            <strong>{cancelBookingCountMaster! + totalCancelCompleteCount!}</strong>
                            <span>전체</span>
                        </li>
                        <li>
                            <strong>{cancelBookingCountMaster}</strong>
                            <span>취소요청</span>
                        </li>
                        <li>
                            <strong>{totalCancelCompleteCount}</strong>
                            <span>취소완료</span>
                        </li>
                    </ul> */}
                        <ul className="table typeA">
                            <li className="head">
                                <div className="td01">상품명</div>
                                <div className="td02">출발일</div>
                                <div className="td03">진행여부</div>
                                <div className="td04">예약상태</div>
                                <div className="td05">상세정보</div>
                            </li>
                            {cancelBookings.map((bk) => (
                                <MasterBookingLi booking={bk} key={bk._id} />
                            ))}
                        </ul>
                    </div>
                    <div className="hang div04">
                        <div className="head">
                            <h5>매출&middot;정산</h5>
                            <BoardOption
                                li={[
                                    {
                                        count: totalSettlementCount || 0,
                                        label: "전체",
                                        value: undefined,
                                    },
                                    {
                                        count:
                                            settlementRequestCountMaster || 0,
                                        label: "요청",
                                        value: SettlementStatus.REQUEST,
                                    },
                                    {
                                        count:
                                            settlementCompleteCountMaster || 0,
                                        label: "완료",
                                        value: SettlementStatus.COMPLETE,
                                    },
                                    {
                                        count: 0,
                                        label: "취소",
                                        value: SettlementStatus.CANCELED,
                                    },
                                ]}
                                setUniqFilter={setSettlementFilter}
                                filter={settlementFilter}
                                filterKey="status_eq"
                            />
                            <Link href="/master/reservation">
                                <a className="more">
                                    더보기
                                    <i className="jandaicon-arr4-right"></i>
                                </a>
                            </Link>
                        </div>
                        {/* <ul className="view">
                        <li>
                            <strong>{totalSettlementCount}</strong>
                            <span>전체</span>
                        </li>
                        <li>
                            <strong>{settlementRequestCountMaster}</strong>
                            <span>정산요청</span>
                        </li>
                        <li>
                            <strong>{settlementCompleteCountMaster}</strong>
                            <span>정산완료</span>
                        </li>
                        <li>
                            <strong>{settlementReadyCountMater}</strong>
                            <span>지급보류</span>
                        </li>
                    </ul> */}
                        <ul className="table typeA">
                            <li className="head">
                                <div className="td01">상품명</div>
                                <div className="td02">정산요청일</div>
                                <div className="td03">정산금액</div>
                                <div className="td04">정산여부</div>
                                <div className="td05">가이드명</div>
                            </li>
                            {settlements.map((st) => (
                                <li key={st._id} className="body">
                                    <div className="td01">
                                        <strong>{st.product.title}</strong>
                                        <span>
                                            (성인
                                            {autoComma(st.product.adult_price)}
                                            &nbsp;&frasl;&nbsp;소아
                                            {autoComma(st.product.kids_price)}
                                            &nbsp;&frasl;&nbsp;유아
                                            {autoComma(st.product.baby_price)})
                                        </span>
                                    </div>
                                    <div className="td02">
                                        <span className="m_title">
                                            정산요청일:
                                        </span>
                                        <span>{yyyymmdd(st.requestDate)}</span>
                                    </div>
                                    <div className="td03">
                                        <span className="m_title">
                                            정산금액:
                                        </span>
                                        <span>
                                            {autoComma(st.totalPrice)}원
                                        </span>
                                    </div>
                                    <div className="td04">
                                        <span className="m_title">
                                            정산여부:
                                        </span>
                                        <strong>
                                            {settlementStatus(st.status)}
                                        </strong>
                                    </div>
                                    <div className="td05">
                                        <span className="m_title">
                                            가이드명:
                                        </span>
                                        {/* <a className="masterMain__detailBtn btn">상세보기</a> */}
                                        {st.seller.name}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hang div06">
                        <div className="head">
                            <h5>가이드</h5>
                            <BoardOption
                                filterKey="isVerifiedManager_eq"
                                setUniqFilter={setPartnerBFilter}
                                filter={busiPartnerFilter}
                                li={[
                                    {
                                        count: busiPartnerBCountMaster || 0,
                                        label: "전체",
                                        value: undefined,
                                    },
                                    {
                                        count: confimedBusiPartnerCount || 0,
                                        label: "승인",
                                        value: true,
                                    },
                                    {
                                        count: unConfimedBusiPartnerCount || 0,
                                        label: "미답",
                                        value: false,
                                    },
                                ]}
                            />
                            <Link href="/master/member/busipartner">
                                <a className="more">
                                    더보기
                                    <i className="jandaicon-arr4-right"></i>
                                </a>
                            </Link>
                        </div>
                        <ul className="table typeC">
                            <li className="head">
                                <div className="td01">가이드명/아이디</div>
                                <div className="td02">가입날짜</div>
                                <div className="td03">승인</div>
                            </li>
                            {busiPartnerUsers.map((pu) => (
                                <li key={pu._id} className="body">
                                    <div
                                        style={{
                                            wordBreak: "break-all",
                                        }}
                                        className="td01"
                                    >
                                        <span>{pu.name}</span>
                                        <span>{pu.email}</span>
                                    </div>
                                    <div className="td02">
                                        <span className="m_title">
                                            가입날짜:
                                        </span>
                                        <span>{yyyymmdd(pu.createdAt)}</span>
                                    </div>
                                    <div className="td03">
                                        <span className="m_title">승인: </span>
                                        <span>
                                            {confirmKr(pu.isVerifiedManager)}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hang div08">
                        <div className="head">
                            <h5>고객문의</h5>
                            <BoardOption
                                filterKey="status_eq"
                                setUniqFilter={setQuestionFilter}
                                filter={questionFilter}
                                li={[
                                    {
                                        count:
                                            (answeredQuestionCount || 0) +
                                            (unAnsweredQuestionCount || 0),
                                        label: "전체",
                                        value: undefined,
                                    },
                                    {
                                        count: answeredQuestionCount || 0,
                                        label: "답변",
                                        value: QuestionStatus.COMPLETE,
                                    },
                                    {
                                        count: unAnsweredQuestionCount || 0,
                                        label: "미승인",
                                        value: QuestionStatus.READY,
                                    },
                                ]}
                            />
                            <Link href="/service/questionlist">
                                <a className="more">
                                    더보기
                                    <i className="jandaicon-arr4-right"></i>
                                </a>
                            </Link>
                        </div>
                        <ul className="table typeD">
                            <li className="head">
                                <div className="td02">No.</div>
                                <div className="td01">제목</div>
                                <div className="td03">답변여부</div>
                                <div className="td04">작성일</div>
                                <div className="td05">작성자</div>
                            </li>
                            {questions.map((q) => (
                                <li key={q._id} className="body">
                                    <div className="td02">
                                        <span className="m_title">No. </span>
                                        <span>{q.no}</span>
                                    </div>
                                    <div className="td01">
                                        <strong>{q.title}</strong>
                                    </div>
                                    <div className="td03">
                                        <span className="m_title">
                                            답변여부:
                                        </span>
                                        <span>{questionSatus(q.status)}</span>
                                    </div>
                                    <div className="td04">
                                        <span className="m_title">작성일:</span>
                                        <span>{yyyymmdd(q.createdAt)}</span>
                                    </div>
                                    <div className="td05">
                                        <span className="m_title">작성자:</span>
                                        <span>{q.author?.nickName}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <UserModal /> */}
                    {/* <BookingModal code={""} /> */}
                    {/* <ProductModal productId={} /> */}
                </div>
            </div>
        </MasterLayout>
    );
};

export default auth(ALLOW_ADMINS)(MsIndex);

//통합부킹이였으면 어떻게 했을 것 같은가 ?
//통합부킹 이였으면 Status리스트를 사용해서
//더 작게 만들면 안되나
{
    /* <li 하나에 인자를 넣어주는 ? */
}
// ㄴㄴ 그냥 array에 라벨 넣고 값넣고 하는게 낳을지도 ?
// 인자는 count, value, label
// wrap 인자는 key, filterHook 이겠지.
// 이렇게 하면 핸들러를 무한 생성 하지 않아도 됨..
