import { MutationHookOptions, useMutation } from "@apollo/client";
import { MULTI_UPLOAD } from "../apollo/gql/mutations";
import { Ffile, multiUpload, multiUploadVariables} from "../types/api";

export const useUpload = (options?: MutationHookOptions<multiUpload, multiUploadVariables>) => {
    const [multMu, { loading: uploadLoading }] = useMutation<multiUpload, multiUploadVariables>(MULTI_UPLOAD, {
        ...options
    });

    const signleUpload = (file: FileList , onSucess?: (url:string,data: Ffile) => void) => {
        if(!file) return;
        multMu({
            variables: {
                file
            }
        }).then(({data})=> {
            const file = data?.MultiUpload.data?.[0];
            const url = file?.uri;
            if(url && file) {
                onSucess?.(url,file)
            }
        })
    }


    return {signleUpload, uploadLoading}
}

