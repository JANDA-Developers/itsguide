import dayjs from "dayjs";
import React, { useMemo } from "react";
import { useUpdate } from "../../hook/useUpdater";
import isEmpty from "../../utils/isEmpty";
import { closeModal } from "../../utils/popUp";
import { IProductTemp, ProductTempBoard } from "../../utils/Storage2";
import { Modal } from "../modal/Modal";

interface IProp {
    onLoad: (item: IProductTemp) => void;
}

export const LocalStorageBoard: React.FC<IProp> = ({ onLoad }) => {
    const { updateComponent } = useUpdate();

    const items = ProductTempBoard.getItems();

    const handleDelete = (item: IProductTemp) => () => {
        ProductTempBoard.removeItem(item._id);
        updateComponent();
    };

    const handleLoad = (item: IProductTemp) => () => {
        closeModal("#LocalStorageBoard")();
        onLoad(item);
        alert("상품 불러오기 완료.");
    };

    return (
        <Modal
            inClassName="LocalStorageBoard"
            title="저장된 데이터"
            id="LocalStorageBoard"
        >
            <div className="LocalStorageBoard__blocks">
                {items?.map((item) => (
                    <div className="LocalStorageBoard__block" key={item._id}>
                        <h3 className="LocalStorageBoard__title">
                            {" "}
                            <div>
                                {item.simpleData.title ||
                                    "타이틀 값이 없습니다."}
                            </div>
                            <span className="LocalStorageBoard__date">
                                {dayjs(item.pickupAt).format(
                                    "YYYY.MM.DD일 hh시 mm분"
                                )}
                            </span>
                        </h3>
                        <div className="LocalStorageBoard__btns">
                            <button
                                className="LocalStorageBoard__btn LocalStorageBoard__btn--left btn small"
                                onClick={handleLoad(item)}
                            >
                                불러오기
                            </button>
                            <button
                                className="LocalStorageBoard__btn btn small"
                                onClick={handleDelete(item)}
                            >
                                삭제하기
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Modal>
    );
};

interface ISampleBoardProp {
    items: string[];
    onLoad: (index: number) => void;
    onDelete: (index: number) => void;
}

export const SampleBoard: React.FC<ISampleBoardProp> = ({
    onLoad,
    items,
    onDelete,
}) => {
    const handleDelete = (index: number) => () => {
        onDelete(index);
    };

    const handleLoad = (index: number) => () => {
        onLoad(index);
    };
    const sampleProducts = useMemo(() => {
        return items.map((item) => JSON.parse(item));
    }, [items.length]);

    return (
        <Modal
            inClassName="LocalStorageBoard"
            title="샘플 상품"
            id="SampleSelecter"
        >
            <div className="LocalStorageBoard__blocks">
                {isEmpty(sampleProducts) && (
                    <div className="no__data">
                        <span>제공된 샘플이 없습니다.</span>
                    </div>
                )}
                {sampleProducts?.map((item, index) => (
                    <div className="LocalStorageBoard__block" key={item._id}>
                        <h3 className="LocalStorageBoard__title">
                            {" "}
                            <div>
                                {item.simpleData.title ||
                                    "타이틀 값이 없습니다."}
                            </div>
                            <span className="LocalStorageBoard__date">
                                {dayjs(item.pickupAt).format(
                                    "YYYY.MM.DD일 hh시 mm분"
                                )}
                            </span>
                        </h3>
                        <div className="LocalStorageBoard__btns">
                            <button
                                className="LocalStorageBoard__btn LocalStorageBoard__btn--left btn small"
                                onClick={handleLoad(index)}
                            >
                                불러오기
                            </button>
                            <button
                                className="LocalStorageBoard__btn btn small"
                                onClick={handleDelete(index)}
                            >
                                삭제하기
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Modal>
    );
};
