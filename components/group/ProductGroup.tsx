import React from "react";
import { useProductList } from "../../hook/useProduct";
import { Fgroup, Fproduct } from "../../types/api";
import { BG } from "../../types/const";
import { yyyymmdd } from "../../utils/yyyymmdd";
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from "react-beautiful-dnd";
import { reorder } from "../../utils/reorder";
import { useCopy } from "../../hook/useUpdate";
import { ProductSelectModal } from "../ProductSelectModal";
import { closeModal, openModal } from "../../utils/popUp";
import { cloneObject } from "../../utils/clone";
import { Change } from "../loadingList/LoadingList";
import { thumbNail } from "../ThunbNail/ThunbNail";

interface IProp {
    group: Fgroup;
    onChangeTitle: (title: string) => void;
    onDelete: () => void;
    onSave: (group: Fgroup) => void;
}

export const ProductGroup: React.FC<IProp> = ({
    group: defaultGroup,
    onChangeTitle,
    onDelete: handleDelete,
    onSave: handleSave,
}) => {
    const [group, setGroup] = useCopy(defaultGroup);
    const { items: products, filter, setFilter, getLoading } = useProductList(
        {
            initialViewCount: 40,
            initialFilter: {
                _id_in: defaultGroup.members,
            },
        },
        { fetchPolicy: "network-only" }
    );

    const handleDrop = (result: DropResult) => {
        const ordered = reorder(
            arrangedProd.map((p) => p._id),
            result.source.index,
            result.destination?.index!
        );
        group.members = [...ordered];

        console.log({ ordered });

        setGroup({ ...group });
    };

    const handleExtract = (index: number) => () => {
        group.members.splice(index, 1);
        console.log(group.members);
        setGroup({ ...group });
    };

    const handleAdd = () => {
        openModal("#ProductModal" + group._id)();
    };

    const handleProductSelect = (pd: Fproduct) => {
        group.members.push(pd._id);
        setGroup({ ...group });
        filter._id_in = group.members;
        setFilter({
            ...filter,
        });
        closeModal("#ProductModal" + group._id)();
    };

    const groupMembersProd = cloneObject(products).filter((p) =>
        group.members.includes(p._id)
    );
    const arrangedProd = group.members
        .map((member) => groupMembersProd.find((prod) => prod._id === member)!)
        .filter((prod) => prod);

    console.log(group.members);
    console.log({ arrangedProd });

    return (
        <div className="block_box productGroupBox">
            <div className="head">
                <h5>{group.label}</h5>
            </div>
            <div className="body">
                <div className="body-title">
                    <div className="th">{group.label}</div>
                    {/* <div className="td">
                    {group.label}
                </div> */}
                </div>
                <div className=" productGroup body-list">
                    <Change change={!getLoading}>
                        <DragDropContext onDragEnd={handleDrop}>
                            <Droppable
                                direction="horizontal"
                                droppableId="droppable"
                            >
                                {(provided, snapshot) => (
                                    <ul
                                        className="droppable"
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        {/* 오름차순 정렬 */}
                                        {arrangedProd.map((pd, index) => (
                                            <Draggable
                                                draggableId={pd._id}
                                                index={index}
                                                key={pd._id}
                                            >
                                                {(provided: any) => (
                                                    <li
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <span
                                                            onClick={handleExtract(
                                                                index
                                                            )}
                                                            className="productGroup__del del"
                                                        >
                                                            <img
                                                                src="/img/svg/del.svg"
                                                                alt="삭제"
                                                                className="svg_del"
                                                            />
                                                            <button />
                                                        </span>
                                                        <div
                                                            className="img"
                                                            style={BG(
                                                                thumbNail(
                                                                    pd.images
                                                                )?.uri || ""
                                                            )}
                                                        ></div>
                                                        <div className="title">
                                                            {pd.title}
                                                        </div>
                                                        <div className="date">
                                                            {yyyymmdd(
                                                                pd.startDate
                                                            )}
                                                            ~
                                                            {yyyymmdd(
                                                                pd.endDate
                                                            )}
                                                        </div>
                                                    </li>
                                                )}
                                            </Draggable>
                                        ))}

                                        {provided.placeholder}
                                        <li>
                                            <div
                                                onClick={handleAdd}
                                                className="add"
                                            >
                                                <button>
                                                    <i className="flaticon-add"></i>
                                                    추가
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </Change>
                </div>
            </div>
            <div className="fin">
                <div className="float_left"></div>
                <div className="float_right">
                    {/* {isManager &&
                    <button onClick={handleDelete} type="submit" className="btn medium">삭제하기</button>
                } */}
                    <button
                        onClick={() => {
                            handleSave(group);
                        }}
                        type="submit"
                        className="btn medium"
                    >
                        저장하기
                    </button>
                </div>
            </div>
            <ProductSelectModal
                id={"ProductModal" + group._id}
                onSelect={handleProductSelect}
            />
        </div>
    );
};
