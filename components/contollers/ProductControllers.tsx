

import dayjs from 'dayjs';
import React, { useContext, useState } from 'react';
import { TUseProductController, useProductController } from '../../hook/useProduct';
import { AppContext } from '../../pages/_app';
import { Fproduct, ProductReOpenReq, ProductStatus } from '../../types/api';
import { CONDITION, DELETE_AVAIABLE_PRODUCTS, SYSTEM_CHECK_MESSAGE } from '../../types/const';
import { reqToKr } from '../../utils/enumToKr';
import { closeModal, openModal } from '../../utils/popUp';
import { Prompt } from '../promptModal/Prompt';

type promptTarget = "denyReq" | "travelWithdrwal" | "update" | "create" | "settlement" | "determine" | "travelCancel";


interface IPromptInfo {
    title?: string;
    target: promptTarget;
}


interface IProduct extends Fproduct {

}

interface IProp extends TUseProductController {
    product?: IProduct
}

export const ProductControllers: React.FC<IProp> = ({ product, acceptCreate, acceptUpdate, loading: totalLoading, productDelete, productElseAccept, productReOpenDeny, productElseReq, rejectCreate, rejectUpdate, tarvelDetermine, travelCancel, travelWithdrwal }) => {
    const [proptTarget, setPomptTarget] = useState<IPromptInfo>();
    const { isManager, isParterB, isParterNonB, role, isSeller } = useContext(AppContext);

    // 인원없음
    const noPeople = product?.peopleCount === 0;
    // 출발7일전
    const left7overDay = dayjs().diff(product?.startDate, "day") > 7

    // 출발 하기: 일반가이드일경우 출발 7일 전일때 
    const determindAble = (left7overDay || isManager || isParterB) && product?.determined === false && product.status === ProductStatus.OPEN;
    // 출발 안하기: 일반가이드일경우 출발 7일 전일때 
    const unDetermindAble = (left7overDay || isManager || isParterB) && product?.determined === true && product.status === ProductStatus.OPEN;

    // 취소 가능: 일반가이드일경우 인원이 없을때 
    const cancelAvailable = (noPeople || isManager || isParterB) && product?.status === ProductStatus.OPEN && product?.determined === false; // Travel 캔슬함수 사용하면됨
    // 삭제 가능: 사람없을때 || 오픈이거나 마감 상태가 아닐떄 

    const deleteAvailable = (noPeople || isManager) && product && DELETE_AVAIABLE_PRODUCTS.includes(product?.status);
    // 다시 오픈이 가능한가
    const reopenAvailable = (isManager || isParterB) && product?.status === ProductStatus.CANCELD;
    // 다시 오픈 요청이 가능한가
    const reopenReqAB = !isManager && isParterNonB && product?.status === ProductStatus.CANCELD && product?.elseReq !== ProductReOpenReq.REOPEN;
    // 다시 오픈 요청 접수가 가능한가
    const elseReopenAcceptAB = isManager && product?.elseReq === ProductReOpenReq.REOPEN;
    // 다시 오픈 요청 거절이 가능한가
    const elseReopenDenyAB = isManager && product?.elseReq === ProductReOpenReq.REOPEN;

    const handleOpenPrompt = (target: promptTarget, title?: string) => () => {
        if (totalLoading) return;
        setPomptTarget({
            target,
            title
        });
        openModal(`#PromptModal${product?._id}`)();
    }

    const ProductId = product?._id || ""
    const handleAcceptCreate = () => {
        if (totalLoading) return;
        acceptCreate({
            variables: {
                ProductId
            }
        })
    }

    const handleAcceptUpdate = () => {
        if (totalLoading) return;
        acceptUpdate({
            variables: {
                ProductId
            }
        })
    }



    const handleTravelCancel = (reason: string) => {
        if (totalLoading) return;
        if (confirm(SYSTEM_CHECK_MESSAGE.travelCancel)) {
            return travelCancel({
                variables: {
                    ProductId,
                    reason
                }
            })
        }
    }

    const handleTravelDelete = () => {
        if (totalLoading) return;
        if (confirm(SYSTEM_CHECK_MESSAGE.productDelete)) {
            return productDelete({
                variables: {
                    id: ProductId
                }
            })
        }
    }


    const handleDetermine = (message: string) => {
        if (totalLoading) return;
        tarvelDetermine({
            variables: {
                ProductId,
                message
            }
        })
    }

    const handleCreateReject = (reason: string) => {
        if (totalLoading) return;
        rejectCreate({
            variables: {
                ProductId,
                reason
            }
        })
    }

    const handleTravelWidthWral = (reason: string) => {
        if (totalLoading) return;
        travelWithdrwal({
            variables: {
                ProductId,
                reason
            }
        })
    }

    const handleUpdateReject = (reason: string) => {
        if (totalLoading) return;
        rejectUpdate({
            variables: {
                ProductId,
                reason
            }
        })
    }



    const handleDenyElseReq = (reason: string) => {
        if (totalLoading) return;
        productReOpenDeny({
            variables: {
                ProductId,
                reason
            }
        })
    }

    const handleReqElse = (req: ProductReOpenReq) => () => {
        if (totalLoading) return;
        productElseReq({
            variables: {
                reason: "",
                ProductId,
                req
            }
        })
    }

    const handleAcceptElseReq = () => {
        if (totalLoading) return;
        productElseAccept({
            variables: {
                ProductId
            }
        })
    }

    const elseReqHandle = (elseReq: ProductReOpenReq) => {
        if (elseReq === ProductReOpenReq.REOPEN) return handleReqElse(ProductReOpenReq.REOPEN)
    }

    const handleReopen = () => {
        handleReqElse(ProductReOpenReq.REOPEN)();
    }

    const rejectHandle = (() => {
        if (proptTarget?.target === "create") return handleCreateReject
        if (proptTarget?.target === "update") return handleUpdateReject
        if (proptTarget?.target === "determine") return handleDetermine
        if (proptTarget?.target === "travelWithdrwal") return handleTravelWidthWral
        // if (proptTarget?.target === "settlement") return handleSettlementReject
        if (proptTarget?.target === "travelCancel") return handleTravelCancel
        if (proptTarget?.target === "denyReq") return handleDenyElseReq
        return () => { }
    })() as () => void;



    return <div>

        {/* 출발확정 */}
        {determindAble && <button onClick={handleOpenPrompt("determine", "출발 확정 메세지를 입력 해주세요.")} type="submit" className="btn medium">출발확정
                                <i className="jandaicon-info2 tooltip" data-tip={CONDITION.travelDetermineChange} />
        </button>}

        {/* 출발미확정 */}
        {unDetermindAble && <button onClick={handleOpenPrompt("travelWithdrwal", "확정 취소 사유를 입력해 주세요.")} type="submit" className="btn medium">출발미확정
                                <i className="jandaicon-info2 tooltip" data-tip={CONDITION.travelDetermineChange} />
        </button>}

        {/* 상품삭제 */}
        {deleteAvailable && <button onClick={() => { handleTravelDelete() }} type="submit" className="btn medium">상품삭제</button>}

        {/* 여행취소 */}
        {cancelAvailable && <button onClick={handleOpenPrompt("travelCancel", "취소 사유를 입력 해주세요")} type="submit" className="btn medium">여행취소
                                {isSeller && <i className="jandaicon-info2 tooltip" data-for="TooltipProductModal" data-tip={CONDITION.travelCacnel} />}
        </button>}

        {/* 여행재개 */}
        {reopenAvailable && <button onClick={handleReopen} type="submit" className="btn medium">여행재개
                                {isParterNonB && <i className="jandaicon-info2 tooltip" data-for="TooltipProductModal" data-tip={CONDITION.travelCacnel} />}
        </button>}


        {/* 기타 요청 들::여행재개 */}
        {reopenReqAB && <button onClick={elseReqHandle(ProductReOpenReq.REOPEN)} type="submit" className="btn medium">재개요청
                                {/* {isParterNonB && <i className="jandaicon-info2 tooltip" data-for="TooltipProductModal" data-tip={CONDITION.travelCacnel} />} */}
        </button>}
        {/* 기타 요청 들 */}
        {/* 기타 요청 들 */}
        {/* 기타 요청 들 */}

        {/* 기타 요청수락 */}
        {elseReopenAcceptAB && <button onClick={handleAcceptElseReq} type="submit" className="btn medium">요청수락
                                <i className="jandaicon-info2 tooltip" data-for="TooltipProductModal" data-tip={`상품요청: ${reqToKr(product?.elseReq)}`} />
        </button>}

        {/* 기타 요청거절 */}
        {elseReopenDenyAB && <button onClick={handleOpenPrompt("denyReq", "거절 사유를 입력 해주세요")} type="submit" className="btn medium">요청거절
                                <i className="jandaicon-info2 tooltip" data-for="TooltipProductModal" data-tip={`상품요청: ${reqToKr(product?.elseReq)}`} />
        </button>}

        {/* 생성허용 */}
        {isManager && status === ProductStatus.READY && <button onClick={handleAcceptCreate} type="submit" className="btn medium">생성허용</button>}

        {/* 생성거절 */}
        {isManager && status === ProductStatus.READY && <button onClick={handleOpenPrompt("create", "생성 거절 사유를 입력 해주세요.")} type="submit" className="btn medium">생성거절</button>}

        {/* 업데이트 허용 */}
        {isManager && status === ProductStatus.UPDATE_REQ && <button onClick={handleAcceptUpdate} type="submit" className="btn medium">업데이트허용</button>}

        {/* 업데이트 거절 */}
        {isManager && status === ProductStatus.UPDATE_REQ && <button onClick={handleOpenPrompt("update", "업데이트 거절 사유를 입력 해주세요.")} type="submit" className="btn medium">업데이트거절</button>}
        <Prompt key={proptTarget?.target} title={proptTarget?.title || "거절 사유를 입력 해주세요"} onSubmit={rejectHandle} id={`PromptModal${product?._id}`} />
    </div>;
};
