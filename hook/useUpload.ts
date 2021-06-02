import { MutationHookOptions, useMutation } from "@apollo/client";
import { useState } from "react";
import { MULTI_UPLOAD } from "../apollo/gql/mutations";
import { Ffile, multiUpload, multiUploadVariables } from "../types/api";

export const useUpload = (
    options?: MutationHookOptions<multiUpload, multiUploadVariables>
) => {
    const [imgUploading, setLoading] = useState(false);
    const [multMu, { loading: uploadLoading }] = useMutation<
        multiUpload,
        multiUploadVariables
    >(MULTI_UPLOAD, {
        ...options,
    });

    const signleUpload = (
        file: FileList | File[],
        onSucess?: (url: string, data: Ffile) => void
    ) => {
        if (!file) return;
        setLoading(true);
        multMu({
            variables: {
                file,
            },
        })
            .then(({ data }) => {
                const file = data?.MultiUpload.data?.[0];
                const url = file?.uri;
                if (url && file) {
                    onSucess?.(url, file);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { signleUpload, uploadLoading, imgUploading };
};
