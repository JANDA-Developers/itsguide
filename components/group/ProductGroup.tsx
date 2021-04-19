import React, { useContext, useEffect, useState } from 'react';
import { openListFilter, useProductList } from '../../hook/useProduct';
import { Fgroup, Fproduct, productList_ProductList_data, ProductStatus } from '../../types/api';
import { BG } from '../../types/const';
import { yyyymmdd } from '../../utils/yyyymmdd';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { reorder } from '../../utils/reorder';
import { useCopy } from '../../hook/useUpdate';
import { ProductSelectModal } from '../ProductSelectModal';
import { closeModal, openModal } from '../../utils/popUp';
import { cloneObject } from '../../utils/clone';
import { Change } from '../loadingList/LoadingList';
import { AppContext } from '../../pages/_app';
import PageLoading from '../../pages/Loading';

interface IProp {
    group: Fgroup
    onChangeTitle: (title: string) => void;
    onDelete: () => void;
    onSave: (group: Fgroup) => void;
}

export const ProductGroup: React.FC<IProp> = ({ group: defaultGroup, onChangeTitle, onDelete: handleDelete, onSave: handleSave }) => {
    const [group, setGroup] = useCopy(defaultGroup);
    const { isManager } = useContext(AppContext);
    const { items: products, filter, setFilter, getLoading } = useProductList({
        initialFilter: {
            _id_in: defaultGroup.members
        }
    })

    const handleDrop = (result: DropResult) => {
        const ordered = reorder(group.members, result.source.index, result.destination?.index!);
        group.members = ordered;
        setGroup({ ...group })
    }

    const handleExtract = (index: number) => () => {
        group.members.splice(index, 1);
        setGroup({ ...group });
    }

    const handleAdd = () => {
        openModal("#ProductModal" + group._id)();
    }

    const handleProductSelect = (pd: Fproduct) => {
        group.members.push(pd._id);
        setGroup({ ...group });
        closeModal("#ProductModal" + group._id)();
    }


    //그룹 업데이트후 다시 프로덕트 목록 가져옴
    useEffect(() => {
        filter._id_in = group.members
        setFilter({
            ...filter
        })
    }, [
        group.members.length, group
    ])

    return <div className="block_box productGroupBox">
        <div className="head">
            <h5>{group.label}</h5>
        </div>
        <div className="body">
            <div className="body-list">
                <Change change={!getLoading}>
                    <DragDropContext onDragEnd={handleDrop}>
                        <Droppable direction="horizontal" droppableId="droppable">
                            {(provided, snapshot) => (
                                <ul className="droppable" ref={provided.innerRef}  {...provided.droppableProps}>
                                    {/* 오름차순 정렬 */}
                                    {cloneObject(products).sort((a, b) => group.members.indexOf(a._id) - group.members.indexOf(b._id)).map((pd, index) =>
                                        <Draggable draggableId={pd._id} index={index} key={pd._id}>
                                            {(provided: any) => (
                                                <li
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <span onClick={handleExtract(index)} className="del">
                                                        <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                                        <button />
                                                    </span>
                                                    <div className="img" style={BG(pd.images?.[0]?.uri || "")}></div>
                                                    <div className="title">{pd.title}</div>
                                                    <div className="date">{yyyymmdd(pd.startDate)} ~ {yyyymmdd(pd.endDate)}</div>
                                                </li>
                                            )}
                                        </Draggable>
                                    )}

                                    {provided.placeholder}
                                    <li>
                                        <div onClick={handleAdd} className="add"><button><i className="flaticon-add"></i>추가</button></div>
                                    </li>
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Change>
            </div>
        </div>
        <div className="fin">
            <div className="float_left">
            </div>
            <div className="float_right">
                {/* {isManager &&
                    <button onClick={handleDelete} type="submit" className="btn medium">삭제하기</button>
                } */}
                <button onClick={() => {

                    handleSave(group)
                }} type="submit" className="btn medium">저장하기</button>
            </div>
        </div>
        <ProductSelectModal id={"ProductModal" + group._id} onSelect={handleProductSelect} />
    </div>;
};
