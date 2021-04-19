import { MasterLayout } from 'layout/MasterLayout';
import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
import React, { useState } from 'react';
import { useIdSelecter } from '../../hook/useIdSelecter';
import isEmpty from '../../utils/isEmpty';
import { openModal, openModalTimeSet } from '../../utils/popUp';
import { bookingList_BookingList_data, BookingStatus, _BookingFilter, _ProductFilter } from '../../types/api';
import { useSingleSort } from '../../hook/useSort';
import { useQueryFilter } from '../../hook/useQueryFilter';
import { useDateFilter } from '../../hook/useSearch';
import { useBookingList } from '../../hook/useBooking';
import { useBankDepositConfirm } from '../../hook/usePayment';
import { ResvTopNav } from '../topNav/MasterTopNav';
import { MasterSearchBar } from '../master/MasterSearchBar';
import { MasterAlignMent } from '../master/MasterAlignMent';
import { getExcelByBookings } from '../../utils/getExcelData';
import { SingleSortSelect } from '../common/SortSelect';
import { Prompt } from '../promptModal/Prompt';
import { useCustomCount } from '../../hook/useCount';
import { BookingModal, IBookingModalInfo } from '../bookingModal/BookingModal';
import { useModal } from '../../hook/useModal';
import { useBookingBoard } from '../../hook/useBookingBoard';
import { Change } from '../loadingList/LoadingList';
import { HandBookingModal } from '../handBookingModal/HandBookingModal';


export type UserMasterHandler = {
    filterByReq: (val: boolean) => () => void;
    filterByStatus: (status: BookingStatus) => () => void;
    handleCancelConfirm: () => void;
    handleSelectCancelConfirm: () => void;
    handleHandWriteModal: () => void;
    openBookingModal: (code: string) => void
    checkOnByReq: (req?: boolean | undefined) => "" | "on"
    checkOnByStatus: (status?: BookingStatus | undefined) => "on" | ""
    handlePaymentConfirm: () => void;
    openCacnelPrompt: (item: bookingList_BookingList_data) => () => void;
    checkOnByhand: (byhand?: boolean | undefined) => "on" | "";
    byhandFilter: (byhand?: boolean | undefined) => () => void;
}

export interface IReservationTableProp {
    bookingListHook: ReturnType<typeof useBookingList>
    idSelectHook: ReturnType<typeof useIdSelecter>
    handlers: UserMasterHandler
}

export interface IFilterBtnProp {
    handlers: UserMasterHandler
}

interface IProp {
    Table: React.FC<IReservationTableProp>
    FilterBtn: React.FC<IFilterBtnProp>
}

const statusUniqList: (keyof _BookingFilter)[] = ["byHand_eq", "status_eq", "isCancelRequest_eq"]
const searchUniqList: (keyof _BookingFilter)[] = ["code_eq", "exField__title_eq", "exField__title_contains", "booker_eq", "exField__code_eq", "phoneNumber_eq"]


export const ReservationMaster: React.FC<IProp> = ({ Table, FilterBtn }) => {
    const { totalBookingCountMaster, readyBookingCountMaster, compeltedBookingCountMaster } = useCustomCount(["totalBookingCountMaster", "readyBookingCountMaster", "compeltedBookingCountMaster"])
    const [filterType, setFilterType] = useState<keyof _BookingFilter>("exField__title_contains");
    const { bookingListHook, bookingModalHook, doSearch, idSelecterHook, singleSortHook, handleDetail, dateFilterHook, getLoading } = useBookingBoard();
    const { filter, items, setFilter, setViewCount, viewCount, setUniqFilter } = bookingListHook;
    const { filterEnd, filterStart, hanldeCreateDateChange } = dateFilterHook;
    const { selectAll, selectedIds } = idSelecterHook;

    const [popupCancelItem, setpopupCancelItem] = useState<bookingList_BookingList_data>()
    const [paymentConfirm] = useBankDepositConfirm();


    const handleCancel = (reason: string) => {
        if (!popupCancelItem) throw Error
        // bookingCancel({
        //     variables: {
        //         reason,
        //         bookingId: popupCancelItem._id,
        //     }
        // })
    }

    const openCacnelPrompt = (item: bookingList_BookingList_data) => () => {
        setpopupCancelItem(item);
        openModalTimeSet("BookingCancelModal", 100)
    }


    const handleHandWriteModal = () => {
        openModalTimeSet("#HandwrittenRegistration")
    }

    const checkOnByhand = (byhand?: boolean) => byhand === filter.byHand_eq ? "on" : "";
    const checkOnByStatus = (status?: BookingStatus) => status === filter.status_eq ? "on" : "";
    const checkOnByReq = (req?: boolean) => req === filter.isCancelRequest_eq ? "on" : "";


    const byhandFilter = (byhand?: boolean) => () => {
        setUniqFilter("byHand_eq", statusUniqList, byhand);
    }

    const handlePaymentConfirm = () => {
        const paymentIds = items.filter(bk => selectedIds.includes(bk._id)).map(bk => bk.payment?._id || "");
        if (isEmpty(paymentIds)) return;

        paymentConfirm({
            variables: {
                paymentIds
            }
        })
    }

    const filterByStatus = (status: BookingStatus) => () => {
        setUniqFilter("status_eq", statusUniqList, status);
    }


    const filterByReq = (val: boolean) => () => {
        setUniqFilter("isCancelRequest_eq", statusUniqList, val);
    }

    const handleCancelConfirm = () => {
    }

    const handleSelectCancelConfirm = () => {
    }

    const doSearchMaster = (search: string) => {
        setUniqFilter(filterType, ["name_eq", "exField__sellerName_eq", "code_eq", "exField__title_contains", "phoneNumber_eq"], search);
    }


    const handlers = {
        openBookingModal: (code: string) => {
            handleDetail(code)
        },
        handleHandWriteModal,
        filterByReq,
        filterByStatus,
        handlePaymentConfirm,
        openCacnelPrompt,
        checkOnByhand,
        checkOnByStatus,
        checkOnByReq,
        byhandFilter,
        handleCancelConfirm,
        handleSelectCancelConfirm,
    }

    return <MasterLayout>
        <div className="in ">
            <h4>예약관리</h4>
            <div className="in_content">
                <ResvTopNav />
                <div className="con reservation">
                    <div className="con_box_top pb5">
                        <div className="top_info_number">
                            <ul className="ln3">
                                <li>
                                    <strong>{totalBookingCountMaster}</strong>
                                    <span>전체</span>
                                </li>
                                <li>
                                    <strong>{readyBookingCountMaster}</strong>
                                    <span>예약대기</span>
                                </li>
                                <li>
                                    <strong>{compeltedBookingCountMaster}</strong>
                                    <span>예약완료</span>
                                </li>
                            </ul>
                        </div>
                        <MasterSearchBar onDateChange={hanldeCreateDateChange} Option={
                            <select onChange={(e) => {
                                const val = e.currentTarget.value;
                                setFilterType(val as any)
                            }} value={filterType} className="option">
                                <option value={undefined}>전체</option>
                                <option value={"title_contains" as keyof _BookingFilter}>상품명</option>
                                <option value={"exField__code_eq" as keyof _BookingFilter}>상품번호</option>
                                <option value={"code_eq" as keyof _BookingFilter}>예약번호</option>
                                <option value={"exField__sellerName_eq" as keyof _BookingFilter}>판매자명</option>
                                <option value={"name_eq" as keyof _BookingFilter}>여행자명</option>
                                <option value={"phoneNumber_eq" as keyof _BookingFilter}>휴대번호</option>
                            </select>
                        } defaultRange={{}} doSearch={doSearchMaster}
                            filterEnd={filterEnd} filterStart={filterStart}
                        />
                        <MasterAlignMent
                            rightDiv={<li onClick={handleHandWriteModal}><a>수기등록</a></li>}
                            LeftDiv={
                                <div>
                                    <FilterBtn handlers={handlers} />
                                </div>
                            }
                            Sort={
                                <SingleSortSelect {...singleSortHook} />
                            }
                            excelData={getExcelByBookings(items)}
                            viewCount={viewCount}
                            setViewCount={setViewCount}
                            handleSelectAll={selectAll}
                        />
                    </div>
                    <Change change={!getLoading}>
                        <Table bookingListHook={bookingListHook} idSelectHook={idSelecterHook} handlers={handlers} />
                    </Change>
                </div>
            </div>
            <BookingModal key={bookingModalHook.info?.code} {...bookingModalHook} />
            <SearcfInfoBox />
            <Prompt onSubmit={handleCancel} title="예약 취소하기" id="BookingCancelModal" />
        </div>
        <HandBookingModal />
    </MasterLayout >
};

export default ReservationMaster;