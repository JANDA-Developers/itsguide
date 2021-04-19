import React from 'react';
import { AddtionalFeesStatus, AddtionalFeesUpdateInput, FfeePolicy_addtionalFees } from '../../types/api';

interface IProp {
    addtionPolicy: AddtionalFeesUpdateInput;
    onChange: <T extends keyof AddtionalFeesUpdateInput>(value: AddtionalFeesUpdateInput[T], key: T) => void;
    onDelete: () => void;
}
// key={"busiPartnerPolicy" + index}
export const AdditionFeePolicyBlock: React.FC<IProp> = ({ addtionPolicy: bpp, onChange, onDelete: handleDelete }) => {
    const isPer = bpp.type === AddtionalFeesStatus.DEFAULT;
    return <div className="tbody">
        <div className="t01">
            <div className="title">수수료 항목</div>
        </div>
        <div className="t02">
            <div className="txt">
                <input onChange={e => {
                    const val = e.currentTarget.value;
                    onChange(val, "feeName");
                }} value={bpp.feeName} className="w30 mr5" placeholder="항목명" type="text" />
                <input onChange={e => {
                    const val = e.currentTarget.value;
                    onChange(parseInt(val), isPer ? "fee" : "feePercent");
                }} value={isPer ? (bpp.fee || 0) : (bpp.feePercent || 0)} className="w30 mr5" placeholder="숫자만 입력해 주세요." type="text" />
                <select onChange={(e) => {
                    const val = e.currentTarget.value as any;
                    onChange(val, "type");
                }} className="w10">
                    <option value={AddtionalFeesStatus.PERCNET}>%</option>
                    <option value={AddtionalFeesStatus.DEFAULT}>원</option>
                </select>
                <button onClick={handleDelete} className="btn small float_right">항목삭제</button>
                <p className="infotxt_gray">정산 계산시 공제 할 금액입니다. 시스템상에서는 -로 표기가 됩니다.</p>
            </div>
        </div>
    </div>;
};
