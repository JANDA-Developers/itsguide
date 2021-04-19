import { MutationHookOptions, useMutation } from "@apollo/client"
import { getOperationName } from "@apollo/client/utilities"
import { pcategoryCreate, pcategoryCreateVariables } from "types/api"
import { PCATEGORY_CREATAE } from "../apollo/gql/mutations"
import { PCAT_LIST } from "../apollo/gql/queries"

export const usePCategoryCreate = (options?: MutationHookOptions<pcategoryCreate, pcategoryCreateVariables>) => {
    const [categoryCreateMu, { loading }] = useMutation<pcategoryCreate, pcategoryCreateVariables>(PCATEGORY_CREATAE, {
        refetchQueries: [getOperationName(PCAT_LIST) || ""],
        ...options,
    })

    const catCreate = (label: string) => {
        categoryCreateMu({
            variables: {
                params: { label }
            }
        })
    }

    return { catCreate }
}

