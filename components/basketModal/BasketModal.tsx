import React, { useState } from 'react';
import { useBasket, useBasketCount } from '../../hook/useBasket';
import { Fproduct } from '../../types/api';
import { IHumanCount } from '../../types/interface';
import { autoComma } from '../../utils/formatter';
import { closeModal } from '../../utils/popUp';
import { IBasketItem, overrideItem } from '../../utils/Storage';
import { Modal } from '../modal/Modal';

interface IProp {
    product?: Fproduct & IBasketItem;
    updateComponent: () => void;
}

export const BasketModal: React.FC<IProp> = ({ product, updateComponent }) => {
    const { baby_price, kids_price, adult_price, count: { adult, baby, kids } } = product || {
        baby_price: 0,
        kids_price: 0,
        adult_price: 0,
        count: {
            adult: 0,
            baby: 0,
            kids: 0
        }
    };
    const { count, handleCount, totalPrice } = useBasketCount({
        baby_price,
        kids_price,
        adult_price,
        capacity: product ? product.maxMember - product.peopleCount : 0,
        defaultCount: {
            adult,
            baby,
            kids
        }
    })
    const handleBracketSave = () => {
        overrideItem(product!._id, {
            count,
            price: totalPrice
        })
        updateComponent();
        closeModal("#basketModal")()
    }

    return <Modal title="조건 추가/변경" id="basketModal" >
        <div className="box">
            <table className="option_tb">
                <tbody>
                    <tr>
                        <th>대인</th>
                        <td>
                            <strong>{autoComma(product?.adult_price)}</strong>원
                                <div className="Number__box">
                                <span onClick={handleCount("adult", false)} className="left_btn"><i className="flaticon-substract"></i></span>
                                <span className="number">{count.adult}</span>
                                <span onClick={handleCount("adult", true)} className="right_btn"><i className="flaticon-add"></i></span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>소인</th>
                        <td>
                            <strong>{autoComma(product?.kids_price)}</strong>원
                                <div className="Number__box">
                                <span onClick={handleCount("kids", false)} className="left_btn"><i className="flaticon-substract"></i></span>
                                <span className="number">{count.kids}</span>
                                <span onClick={handleCount("kids", true)} className="right_btn"><i className="flaticon-add"></i></span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>유아</th>
                        <td>
                            <strong>{autoComma(product?.baby_price)}</strong>원
                                <div className="Number__box">
                                <span onClick={handleCount("baby", false)} className="left_btn"><i className="flaticon-substract"></i></span>
                                <span className="number">{count.baby}</span>
                                <span onClick={handleCount("baby", true)} className="right_btn"><i className="flaticon-add"></i></span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="Chash__box">
                <table className="chash_tb">
                    <tbody>
                        <tr>
                            <th>총 금액</th>
                            <td>
                                <strong>{autoComma(totalPrice)}</strong>원
                                    </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={handleBracketSave} className="btn w100">변경하기</button>
        </div>
    </Modal>;
};
