import { MutationHookOptions, useMutation } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { USER_UPDATE } from "../apollo/gql/user";
import { userUpdate, userUpdateVariables } from "../types/api";

export const useUserUpdate = (options?: MutationHookOptions<userUpdate,userUpdateVariables>) => {
    const [userUpdateMu, { loading: updateLoading }] = useMutation<userUpdate, userUpdateVariables>(USER_UPDATE, {
        refetchQueries: [getOperationName(USER_UPDATE) || ""],
        ...options
    });
    
    const userUpdate = (variables: userUpdateVariables, onSucess?: () => void) => {
        userUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.UserUpdate?.ok) {
                onSucess?.()
            }
        })
    }

    return {userUpdate, updateLoading}
}