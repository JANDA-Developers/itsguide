import { MasterLayout } from 'layout/MasterLayout';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { HomepageTopNav } from '../../../components/topNav/MasterTopNav';
import { useFeePolicy, useFeePolicyUpdate } from '../../../hook/useFeePolicy';
import { AddtionalFeesStatus, AddtionalFeesUpdateInput, FeePolicyStatus, FeePolicyUpdateInput, TargetStatus } from '../../../types/api';
import { omits } from '../../../utils/omit';
import { AdditionFeePolicyBlock } from '../../../components/feePolicyBlock/AdditionFeePolicyBlock';
import { cloneObject } from '../../../utils/clone';
import { ALLOW_ADMINS } from '../../../types/const';
import { auth } from '../../../utils/with';

interface IProp { }

export const MsHomepageA: React.FC<IProp> = () => {
    const { data: defaultFeePolicy } = useFeePolicy();
    const [updatePolicy] = useFeePolicyUpdate({
        onCompleted: ({ FeePolicyUpdate }) => {
            if (FeePolicyUpdate.ok) {
                alert("수수료 변경이 완료되었습니다.");
            } else {
                alert("변경에 실패 했습니다. (잔다측 문의 주십시요)")
            }
        }
    });
    const [feePolicy, setFeePolicy] = useState<null | FeePolicyUpdateInput>(null);

    useEffect(() => {
        if (defaultFeePolicy)
            setFeePolicy({
                ...cloneObject(defaultFeePolicy)
            });
    }, [defaultFeePolicy])

    const handleSave = () => {
        const nextFeePolicy = omits(feePolicy, ["status" as any])
        updatePolicy({
            variables: {
                params: {
                    ...nextFeePolicy
                }
            }
        })
    }

    const { addtionalFees = [] } = feePolicy || {}

    const handleAddtionFeeChange = (addtionFee: AddtionalFeesUpdateInput, index: number) => <_, T extends keyof AddtionalFeesUpdateInput>(value: AddtionalFeesUpdateInput[T], key: T) => {
        if (!feePolicy) throw Error
        addtionFee[key] = value;
        // @ts-ignore
        feePolicy.addtionalFees[index] = { ...addtionFee }
        setFeePolicy({ ...feePolicy });
    }

    const handleAddPolicy = (target: TargetStatus) => () => {
        if (!feePolicy) throw Error
        const defaultPolicy = { feeName: "", target, type: AddtionalFeesStatus.DEFAULT, fee: 0, feePercent: 0 };
        feePolicy.addtionalFees = [...(feePolicy.addtionalFees || []), defaultPolicy]
        setFeePolicy({
            ...feePolicy
        })
    }

    const handleDelete = (index: number) => () => {
        if (!feePolicy) throw Error
        // @ts-ignore
        feePolicy.addtionalFees.splice(index, 1);
        setFeePolicy({
            ...feePolicy
        })
    }



    return <MasterLayout>
        <div className="in ">
            <h4>홈페이지 설정</h4>
            <div className="in_content">
                <HomepageTopNav />
                <div className="con homepage terms">
                    <div className="fin ifMobile">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button onClick={handleSave} type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>
                    <div className="design_table">
                        <div className="block_box">
                            <h5>가이드 - 추가금액<button onClick={handleAddPolicy(TargetStatus.BUSINESS)} className="btn float_right"><i className="flaticon-add"></i>항목추가</button></h5>
                            {(addtionalFees || []).map((bpp, index) => {
                                if (bpp.target !== TargetStatus.BUSINESS) return null;
                                return <AdditionFeePolicyBlock onDelete={handleDelete(index)} addtionPolicy={bpp} onChange={handleAddtionFeeChange(bpp, index)} key={"businessFeePolicy" + index} />
                            })}
                        </div>

                        <div className="block_box">
                            <h5>가이드 - 추가금액<button onClick={handleAddPolicy(TargetStatus.PERSONAL)} className="btn float_right"><i className="flaticon-add"></i>항목추가</button></h5>
                            {(addtionalFees || []).map((bpp, index) => {
                                if (bpp.target !== TargetStatus.PERSONAL) return null;
                                return <AdditionFeePolicyBlock onDelete={handleDelete(index)} addtionPolicy={bpp} onChange={handleAddtionFeeChange(bpp, index)} key={"indiPartner" + index} />
                            })}
                        </div>
                        {/* 
                        <div className="block_box">
                            <h5>가이드 - 추가금액<button className="btn float_right"><i className="flaticon-add"></i>항목추가</button></h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">추가항목1</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="항목명" type="text" />
                                        <input className="w30 mr5" placeholder="숫자만 입력해 주세요." type="text" />
                                        <select className="w10">
                                            <option>%</option>
                                            <option>원</option>
                                        </select>
                                        <p className="infotxt_gray">정산 계산시 추가할 금액입니다. 시스템상에서는 +로 표기가 됩니다.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block_box">
                            <h5>가이드 - 추가금액<button className="btn float_right"><i className="flaticon-add"></i>항목추가</button></h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">추가항목1</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="항목명" type="text" />
                                        <input className="w30 mr5" placeholder="숫자만 입력해 주세요." type="text" />
                                        <select className="w10">
                                            <option>%</option>
                                            <option>원</option>
                                        </select>
                                        <p className="infotxt_gray">정산 계산시 추가할 금액입니다. 시스템상에서는 +로 표기가 됩니다.</p>

                                    </div>
                                </div>
                            </div>
                        </div> */}


                    </div>
                    <div className="fin ifMobile">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </MasterLayout >
};

export default auth(ALLOW_ADMINS)(MsHomepageA);