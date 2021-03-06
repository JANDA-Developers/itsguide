import dayjs from 'dayjs';
import React from 'react';
import { useUpdate } from '../../hook/useUpdater';
import { IProductTemp, ProductTempBoard } from '../../utils/Storage2';
import { Modal } from '../modal/Modal';

interface IProp {
    onLoad: (item: IProductTemp) => void;
}

export const LocalStorageBoard: React.FC<IProp> = ({ onLoad }) => {
    const { updateComponent } = useUpdate()

    const items = ProductTempBoard.getItems()

    const handleDelete = (item: IProductTemp) => () => {
        ProductTempBoard.removeItem(item._id)
        updateComponent();
    }

    const handleLoad = (item: IProductTemp) => () => {
        console.log({ item });
        onLoad(item)
    }

    return <Modal inClassName="LocalStorageBoard" title="저장된 데이터" id="LocalStorageBoard">
        <div className="LocalStorageBoard__blocks">
            {items?.map(item =>
                <div className="LocalStorageBoard__block" key={item._id}>
                    <h3 className="LocalStorageBoard__title"> <div>{item.simpleData.title}</div>
                        <span className="LocalStorageBoard__date">{dayjs(item.pickupAt).format("YYYY.MM.DD일 hh시 mm분")}</span></h3>
                    <div className="LocalStorageBoard__btns">
                        <button className="LocalStorageBoard__btn LocalStorageBoard__btn--left btn small" onClick={handleLoad(item)}>불러오기</button>
                        <button className="LocalStorageBoard__btn btn small" onClick={handleDelete(item)}>삭제하기</button>
                    </div>
                </div>
            )}
        </div>
    </Modal>;
};
