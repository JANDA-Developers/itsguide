import React from 'react';
import { IUsePageEdit } from '../../hook/usePageEdit';
import { sellerFindByKey_SellerFindByKeyPublic_data } from '../../types/api';
import { EditBtn } from './EditBtn';
import { NewGoodsBtn } from './NewGoodsBtn';

interface IProp {
    allowToUser?: boolean;
    pageTools: IUsePageEdit<any>;
    profileParams?: sellerFindByKey_SellerFindByKeyPublic_data
}

export const PageEditor: React.FC<IProp> = ({ pageTools, allowToUser, profileParams }) => {
    const { editMode, reset, submitEdit, setEditMode } = pageTools;

    const submit = () => {
        if (editMode) {
            if (confirm("변경내용을 저장 하시겠습니까?")) {
                submitEdit(profileParams ? {
                    profileImg: profileParams.profileImg,
                    keywards: profileParams.keywards
                } : undefined)
            } else {
            }
            setEditMode(false)
        } else {
            setEditMode(true)
        }
    }

    return <div >
        <EditBtn allowToUser={allowToUser || false} onSubmit={submit} editMode={editMode} /><NewGoodsBtn />

    </div>;
};


const hiddenStyle: React.CSSProperties = {
    opacity: 0,
    position: "absolute",
    width: "1px",
    height: "1px"
}
