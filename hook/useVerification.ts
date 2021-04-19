import { useMutation } from "@apollo/client"
import { VERIFICATION_COMPLETE, VERIFICATION_START } from "../apollo/gql/user";
import { verificationComplete, verificationCompleteVariables, VerificationEvent, verificationStart, verificationStartVariables, VerificationTarget } from "../types/api";


type TCallBack<T> = (data: T | undefined) => void

export const useVerification = () =>  {
    const [verifyMu,{loading:startLoading}] = useMutation<verificationStart,verificationStartVariables>(VERIFICATION_START);
    const [verifyCompleteMu,{loading:completeLoading}] = useMutation<verificationComplete,verificationCompleteVariables>(VERIFICATION_COMPLETE);

    const verify = (payload:string,callBack?:TCallBack<verificationStart>) => {
        verifyMu({
            variables: {
                event: VerificationEvent.UserVerifyPhone,
                target: VerificationTarget.PHONE,
                payload,
            }
        }).then(({data})=> {
            callBack?.(data || undefined)
        })
    }

    const verifyComplete = (params:Omit<verificationCompleteVariables,"target">,callBack?:TCallBack<verificationComplete>) => {
        verifyCompleteMu({
            variables: {
                ...params,
                target: VerificationTarget.PHONE,
            }
        }).then(({data})=> {
            callBack?.(data || undefined)
        })
    }

    return {verify, verifyComplete};
}
