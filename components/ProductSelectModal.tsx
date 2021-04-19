import React from 'react';
import ReactDOM from 'react-dom';
import { Fproduct } from '../types/api';
import { closeModal } from '../utils/popUp';
import { Modal } from './modal/Modal';
import ProductSearcher from './productSearcher/ProductSearcher2';

interface IProp {
    id?: string;
    onSelect: (pd: Fproduct) => void;
}

export const ProductSelectModal: React.FC<IProp> = ({ id, onSelect }) => {
    if (typeof window === "undefined") return null
    const target = document.getElementById("portal");
    return target ? ReactDOM.createPortal(<Modal title="상품선택" id={id || "ProductSearchModal"} className="popup_bg" inClassName="productSelectModal master_popup">
        {/* TODO 카테고리 셀렉터 */}
        {/* <select> 
            <option />
        </select> */}
        <ProductSearcher onSelectProduct={(product) => {
            onSelect(product);
        }} />
    </Modal>, target) : null;
};
