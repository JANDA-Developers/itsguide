import { useMutation } from "@apollo/client"
import { useState } from "react";
import { VERIFICATION_COMPLETE, VERIFICATION_START } from "../apollo/gql/user";
import { verificationComplete, verificationCompleteVariables, verificationStart_VerificationStart_data as VerifiStartData, VerificationEvent, verificationStart, verificationStartVariables, VerificationTarget,  verificationComplete_VerificationComplete_data } from "../types/api";
import { generateMutationHook } from "../utils/query";


export const useVerificationStart =  generateMutationHook<verificationStart,verificationStartVariables>(VERIFICATION_START)
export const useVerificationComplete = generateMutationHook<verificationComplete, verificationCompleteVariables>(VERIFICATION_COMPLETE)

type TVerifiData = Partial<Omit<verificationComplete_VerificationComplete_data, "__typename">>;
export type TuseVerification = ReturnType<typeof useVerification>
export const useVerification = (defaultData?:TVerifiData) =>  {
    const [code, setCode] = useState("");
    const [verifiData, setVerifiData] = useState<TVerifiData | undefined>(defaultData)
    const [verifyMu, {loading:startLoading}] = useVerificationStart({onCompleted:
        ({VerificationStart})=>{
            if(VerificationStart.data)
                setVerifiData(VerificationStart.data)
    }});
    const [verifyCompleteMu, {loading:completeLoading}] = useVerificationComplete({
        onCompleted: ({VerificationComplete}) => {
            if(VerificationComplete.data)
                setVerifiData(VerificationComplete.data)
        }
    });

    const verifiStart = async (variables:verificationStartVariables) => {
        return await verifyMu({
            variables
        }).then(result => {
            return {...result?.data?.VerificationStart};
        })
    }

    const verifiComplete = async (_code?:string) => {
        return await verifyCompleteMu({
            variables: {
                code: _code || code,
                payload: verifiData?.payload || "",
                target: verifiData?.target || VerificationTarget.EMAIL,
                verificationId: verifiData?._id || ""
            }
        }).then(result => {
            return {...result?.data?.VerificationComplete};
        })
    }

    const totalLoading = startLoading || completeLoading;

    return { code, setCode, verifiStart, verifiComplete, verifyMu, verifyCompleteMu, verifiData, totalLoading, setVerifiData};
}

