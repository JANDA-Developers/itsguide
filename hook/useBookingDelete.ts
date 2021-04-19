import { MutationHookOptions, useMutation } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { BOOKING_LIST, BOOKING_UPDAET } from "../apollo/gql/booking";
import {  bookingDelete, bookingDeleteVariables } from "../types/api";

export const usebookingDelete = (options?: MutationHookOptions<bookingDelete,bookingDeleteVariables>) => {
    const [bookingDeleteMu, { loading: deleteLoading }] = useMutation<bookingDelete, bookingDeleteVariables>(BOOKING_UPDAET, {
        refetchQueries: [getOperationName(BOOKING_LIST) || ""],
        ...options
    });
    
    const bookingDelete = (variables: bookingDeleteVariables, onSucess?: () => void) => {
        bookingDeleteMu({
            variables
        }).then((data) => {
            if (data.data?.BookingDelete?.ok) {
                onSucess?.()
            }
        })
    }

    return {bookingDelete, deleteLoading}
}

