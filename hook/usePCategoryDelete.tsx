import { MutationHookOptions, useMutation } from "@apollo/client"
import { getOperationName } from "@apollo/client/utilities"
import { pcategoryDelete, pcategoryDeleteVariables } from "types/api"
import { PCATEGORY_DELETE } from "../apollo/gql/mutations"
import { PCAT_LIST } from "../apollo/gql/queries"

export const usePcategoryDelete = (options?: MutationHookOptions<pcategoryDelete, pcategoryDeleteVariables>) => {
    const [categoryDeleteMu, { loading }] = useMutation<pcategoryDelete, pcategoryDeleteVariables>(PCATEGORY_DELETE, {
        refetchQueries: [getOperationName(PCAT_LIST) || ""],
        awaitRefetchQueries: true,
        ...options,
    })

    const catDelete = (_id: string) => {
        categoryDeleteMu({
            variables: {
                _id
            }
        })
    }

    return { catDelete, loading }
}

