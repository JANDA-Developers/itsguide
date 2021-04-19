import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useIdSelecter } from '../../hook/useIdSelecter';
import { useUpdate } from '../../hook/useUpdater';
import { Fproduct } from '../../types/api';
import { BG } from '../../types/const';
import { TElements } from '../../types/interface';
import { autoComma } from '../../utils/formatter';
import isEmpty from '../../utils/isEmpty';
import { arraySum } from '../../utils/math';
import { openModal } from '../../utils/popUp';
import { getTypeTextOfProduct } from '../../utils/product';
import { getBracket, getTotalCount, IBasketItem, removeBracket, removeItem } from '../../utils/Storage';
import { BasketModal } from '../basketModal/BasketModal';
import { Nodata } from '../noData/Nodata';

interface IProp {
    Buttons?: TElements
    updateComponent: () => void;
    items: (IBasketItem & Fproduct)[]
}

export const Basket: React.FC<IProp> = ({ updateComponent, Buttons, items }) => {
    const [popUpProduct, setPopProduct] = useState<Fproduct & IBasketItem>();
    const allIds = items.map(i => i._id);
    const { reverseAll, toggleAll, selectedIds, check, isChecked, isAllSelected, toggle } = useIdSelecter(allIds);


    const totalPrice = arraySum(items.map((item, i) => item.price));
    const priceLines = items.map((item, i) => autoComma(item.price)).join(" + ");

    const handleModify = (product: Fproduct & IBasketItem) => () => {
        setPopProduct(product);
        openModal("#basketModal")()
    }

    const handleDeleteSelects = () => {
        selectedIds.forEach((id) => {
            removeItem(id);
        })
        updateComponent();
    }

    const handleDeleteAll = () => {
        if (confirm("정말로 장바구니 내역을 초기화 하시겠습니까?")) {
            removeBracket()
            updateComponent()
        }
    }

    return <div className="basket_box"><div className="basket_list">
        <div className="th">
            <div className="t01">
                <span className="checkbox">
                    <input onChange={toggleAll} checked={isAllSelected} type="checkbox" name="agree" id="agree0" title="전체선택" />
                    <label htmlFor="agree0" />
                </span>
            </div>
            <div className="t02">상품정보</div>
            <div className="t03">옵션</div>
            <div className="t04">상품금액</div>
            <div className="t05">상태</div>
        </div>
        <Nodata show={isEmpty(items)} label="장바구니에 상품이 존재하지 않습니다." />
        {items.map((item, i) =>
            <div key={item._id} className="td">
                <div className="t01">
                    <span className="checkbox">
                        <input checked={isChecked(item._id)} onChange={() => toggle(item._id)} type="checkbox" name="agree" id={`agree${i}`} title="개별선택" />
                        <label htmlFor={`agree${i}`} />
                    </span>
                </div>
                <div className="t02">
                    <div className="img" style={BG(item.images?.[0]?.uri || "")}></div>
                    <div className="right">
                        <div className="ct">{item?.category?.label}</div><div className="code">{item.code}</div>
                        <div className="title"><a href="/">{item.title}</a></div>
                        <div className="subtitle">{item.subTitle}</div>
                    </div>
                    <span onClick={() => {
                        removeItem(item._id)
                        updateComponent();
                    }} className="del">
                        <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                        <button />
                    </span>
                </div>
                <div className="t03">
                    <div className="day">출발일 : <strong>{dayjs(item.startDate).format("MM.DD (W)")}</strong></div>
                    <div className="start_where">출발장소 : {item.startPoint}</div>
                    <div className="tour_mode">여행방식 :{getTypeTextOfProduct(item.type, item.dateRange)}</div>
                    <div className="men">선택인원 : <strong>총 {getTotalCount(item.count)}명</strong>{` - 성인${item.count.adult}, 소인${item.count.kids}, 유아${item.count.baby}`}</div>
                    <button onClick={handleModify(item)} className="btn option_btn">조건 추가/변경</button>
                </div>
                <div className="t04">
                    <div className="money"><strong>{autoComma(item.price)} 원</strong></div>
                    <button className="btn hit">주문하기</button>
                </div>
                <div className="t05">
                    <div className="day_cunt">출발 D-{item.Dday}</div>
                    <div className="men_cunt">모집 인원 : <strong>{item.compeltePeopleCnt}</strong> / {item.maxMember}</div>
                    <div className="state onsale">{item.status}</div>
                </div>
            </div>
        )}


        <div className="baket_bottom">
            <div className="sum01"><strong>합계금액</strong></div>
            <div className="sum02">상품금액<strong>{autoComma(totalPrice)}원</strong></div>
            <div className="sum03">=</div>
            <div className="sum04"><strong>{priceLines}원</strong></div>
        </div>

        <div className="baket_check">
            <div className="left">
                <button onClick={reverseAll} className="btn"><input checked={isAllSelected} type="checkbox" />전체선택</button>
                <button onClick={handleDeleteSelects} className="btn">선택삭제</button>
                <button onClick={handleDeleteAll} className="btn">전체삭제</button>
            </div>
        </div>
        {Buttons}
        {/* popup은 언제나 class fade와 함께 있어야 한다. */}
        <BasketModal
            key={popUpProduct?._id || ""}
            product={popUpProduct}
            updateComponent={updateComponent}
        />
        <div className="fade"></div>
    </div>
    </div>;
};


