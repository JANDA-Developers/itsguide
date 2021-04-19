import {  BOOKINGS_CREATE,  BOOKING_CANCEL_BYHAND, BOOKING_CANCEL_REJECT, BOOKING_CANCEL_REQ, BOOKING_COMPLETE_BY_HAND, BOOKING_CREATE_BY_HAND, BOOKING_DELETE, BOOKING_FIND_BY_CODE, BOOKING_LIST, BOOKING_UPDAET } from "../apollo/gql/booking";
import {  bookingCancelByHand, bookingCancelByHandVariables, bookingCancelReq, bookingCancelReqVariables, bookingCompleteByHand, bookingCompleteByHandVariables, bookingCreateByHand, bookingCreateByHandVariables, bookingDelete, bookingDeleteVariables, bookingFindByCode, bookingFindByCodeVariables, bookingFindByCode_BookingFindByCode_data, bookingList, bookingListVariables, bookingList_BookingList_data,  bookingsCreate, bookingsCreateVariables, bookingUpdate, bookingUpdateVariables, Fbooking,   PayMethod,   _BookingFilter, _BookingSort } from "../types/api";
import { getRefetch , } from "../utils/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";
import { useBankRefund } from "./usePayment";

export const useBookingFindByCode = generateFindQuery<bookingFindByCode,bookingFindByCodeVariables,bookingFindByCode_BookingFindByCode_data>("code",BOOKING_FIND_BY_CODE)
export const useBookingList = generateListQueryHook<_BookingFilter,_BookingSort,bookingList,bookingListVariables,bookingList_BookingList_data>(BOOKING_LIST,{initialSort:[_BookingSort.createdAt_desc]});
export const useBookingsCreate = generateMutationHook<bookingsCreate,bookingsCreateVariables>(BOOKINGS_CREATE, {
    ...getRefetch(BOOKING_LIST)
});
export const useBookingUpdate = generateMutationHook<bookingUpdate,bookingUpdateVariables>(BOOKING_UPDAET, {
    ...getRefetch(BOOKING_LIST)
});
export const useBookingDelete = generateMutationHook<bookingDelete,bookingDeleteVariables>(BOOKING_DELETE, {
    ...getRefetch(BOOKING_LIST)
});
export const useBookingCancelReject = generateMutationHook<bookingCancelReq,bookingCancelReqVariables>(BOOKING_CANCEL_REJECT, {
    onCompleted: ({BookingCancelReq}) => {
        if(BookingCancelReq?.ok) {
            alert("예약 취소가 요청이 거절 되었습니다.");
        }
    },
    ...getRefetch(BOOKING_LIST)
});
export const useBookingCancelReq = generateMutationHook<bookingCancelReq,bookingCancelReqVariables>(BOOKING_CANCEL_REQ, {
    onCompleted: ({BookingCancelReq}) => {
        if(BookingCancelReq.ok) {
            alert("예약 취소가 요청 되었습니다.");
        }
    },
    ...getRefetch(BOOKING_LIST)
});
// export const useBookingCancel = generateMutationHook<bookingCancelReq,bookingCancelReqVariables>(BOOKING_CANCEL, {
//     ...getRefetch(BOOKING_LIST)
// });

export const useBookingCompleteByHand = generateMutationHook<bookingCompleteByHand,bookingCompleteByHandVariables>(BOOKING_COMPLETE_BY_HAND, {
    ...getRefetch(BOOKING_LIST,BOOKING_FIND_BY_CODE)
});

export const useBookingCreateByHand = generateMutationHook<bookingCreateByHand,bookingCreateByHandVariables>(BOOKING_CREATE_BY_HAND, {
    ...getRefetch(BOOKING_LIST,BOOKING_FIND_BY_CODE)
});

