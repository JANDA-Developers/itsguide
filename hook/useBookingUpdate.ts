import { MutationHookOptions, useMutation } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { BOOKING_LIST, BOOKING_UPDAET } from "../apollo/gql/booking";
import {  bookingUpdate, bookingUpdateVariables } from "../types/api";

export const usebookingUpdate = (options?: MutationHookOptions<bookingUpdate,bookingUpdateVariables>) => {
    const [bookingUpdateMu, { loading: updateLoading }] = useMutation<bookingUpdate, bookingUpdateVariables>(BOOKING_UPDAET, {
        refetchQueries: [getOperationName(BOOKING_LIST) || ""],
        ...options
    });
    
    const bookingUpdate = (variables: bookingUpdateVariables, onSucess?: () => void) => {
        bookingUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.BookingUpdate?.ok) {
                onSucess?.()
            }
        })
    }

    return {bookingUpdate, updateLoading}
}

