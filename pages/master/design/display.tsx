import { MasterLayout } from "layout/MasterLayout";
import React, { useEffect, useState } from "react";
import {
    useGroupCreate,
    useGroupDelete,
    useGroupList,
    useGroupUpdate,
} from "../../../hook/useGroup";
import { ProductGroup } from "../../../components/group/ProductGroup";
import { Fgroup } from "../../../types/api";
import { DesignTopNav } from "../../../components/topNav/MasterTopNav";
import { generateRandomStringCode } from "../../../utils/codeGenerator";
import { cloneObject } from "../../../utils/clone";
import { omits } from "../../../utils/omit";
import { ProductSelectModal } from "../../../components/ProductSelectModal";
import { auth } from "../../../utils/with";
import { ALLOW_ADMINS } from "../../../types/const";

interface IProp {}

const popupOpen = () => {
    $("#Popup01").css({
        display: "flex",
    });
};
const popupClose = () => {
    $("#Popup01").css({
        display: "none",
    });
};
export const MsDesignC: React.FC<IProp> = () => {
    const { data: defaultGrupList } = useGroupList();
    const [groupList, setGroupList] = useState<Fgroup[]>([]);
    const [groupCreate] = useGroupCreate();
    const [groupUpdate] = useGroupUpdate({
        onCompleted: ({ GroupUpdate }) => {
            if (GroupUpdate.ok) alert("업데이트 완료");
        },
    });

    const [groupDelete] = useGroupDelete();

    const handleSave = (group: Fgroup) => {
        groupUpdate({
            variables: {
                key: group.key,
                params: omits(group, ["key", "target"]),
            },
        });
    };

    const handleAddGroup = () => {
        groupCreate({
            variables: {
                params: {
                    key: generateRandomStringCode(),
                    label: "",
                    members: [],
                    target: "Product",
                },
            },
        });
    };

    const handleDeleteGroup = (g: Fgroup) => () => {
        groupDelete({
            variables: {
                key: g.key,
            },
        });
    };

    const handleTitleChange = (g: Fgroup) => (nextLabel: string) => {
        g.label = nextLabel;
        setGroupList([...groupList]);
    };

    useEffect(() => {
        if (defaultGrupList) {
            setGroupList(cloneObject(defaultGrupList));
        }
    }, [defaultGrupList?.length]);

    return (
        <MasterLayout>
            <div className="in ">
                <h4>디자인 설정</h4>
                <div className="in_content">
                    <DesignTopNav />
                    <div className="con design goodslist_setting">
                        {/* 메인화면 상품진열 */}
                        {groupList.map((g) => (
                            <ProductGroup
                                onSave={handleSave}
                                onDelete={handleDeleteGroup(g)}
                                onChangeTitle={handleTitleChange(g)}
                                key={g.members.length + g._id}
                                group={g}
                            />
                        ))}
                        <div className="fin">
                            <div className="float_left" />
                            <div className="float_right">
                                {/* <button onClick={handleAddGroup} type="submit" className="btn medium">추가하기</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ProductSelectModal id={"ProductModal" + group._id} onSelect={handleProductSelect} /> */}
            {/* <ProductSelectModal onSelect={(product) => {
            popupGroup?.members.push(product._id);
            setGroupList([...groupList])
        }} /> */}
        </MasterLayout>
    );
};

export default auth(ALLOW_ADMINS)(MsDesignC);
