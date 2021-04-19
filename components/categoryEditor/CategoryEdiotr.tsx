import React, { useState } from 'react';
import { Fcategory } from '../../types/api';
import { whenEnter } from '../../utils/eventValueExtracter';

interface IProp {
    wrapLabel: string;
    categories: Fcategory[]
    onAdd: (label: string) => void;
    onEdit: (cat: Fcategory, label: string) => void;
    onDelete: (cat: Fcategory) => void;
}

export const CategoryEitdor: React.FC<IProp> = ({ categories, onAdd, onDelete, onEdit, wrapLabel }) => {

    const [selelcted, setSelected] = useState<Fcategory>();
    const [label, setLabel] = useState("");

    const handleDelete = (cat: Fcategory) => () => {
        onDelete(cat);
    }

    const handleUnSelect = () => {
        setSelected(undefined);
    }
    const handleSelect = (cat: Fcategory) => (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setSelected(cat);
        setLabel(cat.label);
    }

    const handleUpdate = () => {
        if (!selelcted) throw Error("");
        onEdit(selelcted, label);
        setLabel("");
    }

    const handleAdd = () => {
        onAdd(label);
        setLabel("");
    }


    return <div className="tbody categoryEditer">
        <div className="t01">
            <div className="title">{wrapLabel}</div>
        </div>
        <div className="t02">
            <div className="txt">
                <ul className="list">
                    {categories.map((cat) =>
                        <li className={`categoryEditer__cat ${cat._id === selelcted?._id ? "categoryEditer__cat--selected" : undefined}`} onClick={handleSelect(cat)} key={cat._id}>{cat.label}<i onClick={handleDelete(cat)} className="del categoryEditer__delete"></i></li>
                    )}
                    <li className={`categoryEditer__cat ${selelcted ? undefined : "categoryEditer__cat--selected"}`} onClick={handleUnSelect} >추가</li>
                </ul>
                <input onKeyPress={whenEnter(selelcted ? handleUpdate : handleAdd)} value={label} onChange={(e) => {
                    setLabel(e.currentTarget.value)
                }} className="w30" placeholder="" type="text" />
                <button onClick={selelcted ? handleUpdate : handleAdd} className="btn">{selelcted ? "업데이트" : "추가"}</button>
            </div>
        </div>
    </div>;
};
