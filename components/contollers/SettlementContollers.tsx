import React, { useContext, useState } from 'react';
import { useSettlementController } from '../../hook/useSettlement';
import { AppContext } from '../../pages/_app';
import { Fproduct, Fsettlement, ProductStatus, SettlementStatus } from '../../types/api';
import { openModal } from '../../utils/popUp';
import { Prompt } from '../promptModal/Prompt';

interface IProp {
    settlement: Fsettlement
    product: Fproduct
}

type promptTarget = "denyReq" | "travelWithdrwal" | "update" | "create" | "settlement" | "determine" | "travelCancel";


interface IPromptInfo {
    title?: string;
    target: promptTarget;
}


export const SettlementController: React.FC<IProp> = ({ settlement, product }) => {
    const { isManager } = useContext(AppContext);
    const { settlementComplete, settlementRject, settlementRquest, totalLoading } = useSettlementController();
    const [proptTarget, setPomptTarget] = useState<IPromptInfo>();

    const settlementId = settlement._id

    const settlementRequestAB = product.status === ProductStatus.COMPLETED && settlement.status === SettlementStatus.READY;
    const settlementCompleteAB = isManager && settlement?.status === SettlementStatus.REQUEST;
    const settlementDenyAB = isManager && settlement?.status === SettlementStatus.REQUEST;

    const handleSettlementComplete = () => {
        if (totalLoading) return;
        settlementComplete({
            variables: {
                settlementId
            }
        })
    }


    const handleSettlementReject = (reason: string) => {
        if (totalLoading) return;
        settlementRject({
            variables: {
                reason,
                settlementId
            }
        })
    }

    const handleSettlementRequest = () => {
        if (totalLoading) return;
        settlementRquest({
            variables: {
                settlementId
            }
        })
    }


    const handleOpenPrompt = (target: promptTarget, title?: string) => () => {
        if (totalLoading) return;
        setPomptTarget({
            target,
            title
        });
        openModal(`#PromptModal${product?._id}`)();
    }

    const rejectHandle = (() => {
        if (proptTarget?.target === "settlement") return handleSettlementReject
        return () => { }
    })() as () => void;

    return <div>
        {/* 지급신청 */}
        {settlementRequestAB && <button onClick={handleSettlementRequest} type="submit" className="btn medium">지급신청</button>}

        {/* 지급완료 */}
        {settlementCompleteAB && <button onClick={handleSettlementComplete} type="submit" className="btn medium">지급완료</button>}

        {/* 지급보류 */}
        {settlementDenyAB && settlement?.status === SettlementStatus.REQUEST && <button onClick={handleOpenPrompt("settlement", "지급 보류 사유를 입력 해주세요.")} type="submit" className="btn medium">지급보류</button>}
        <Prompt title={proptTarget?.title || "거절 사유를 입력 해주세요"} onSubmit={rejectHandle} id={`PromptModal${product?._id}`} />
    </div>;
};
