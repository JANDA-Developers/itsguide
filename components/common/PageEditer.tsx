import { useRouter } from "next/router";
import React from "react";
import { IUsePageEdit } from "../../hook/usePageEdit";
import { sellerFindByKey_SellerFindByKeyPublic_data } from "../../types/api";
import { isIE } from "../../utils/isIE";
import { EditBtn } from "./EditBtn";
import { NewGoodsBtn, NewProfileBtn } from "./NewGoodsBtn";

interface IProp {
    allowToUser?: boolean;
    pageTools: IUsePageEdit<any>;
    profileParams?: sellerFindByKey_SellerFindByKeyPublic_data;
}

export const PageEditor: React.FC<IProp> = ({
    pageTools,
    allowToUser,
    profileParams,
}) => {
    const { editMode, reset, submitEdit, setEditMode } = pageTools;
    const rotuer = useRouter();

    const inTourWrite = rotuer.pathname.includes("tour/write");
    const inProfilePage = rotuer.pathname.includes("itsguid/");

    console.log("rotuer.pathname");
    console.log(rotuer.pathname);
    console.log(inTourWrite);

    const submit = () => {
        if (isIE()) {
            alert(
                `인터넷 익스플로어에서는 편집기능을 사용하실 수 없습니다.
        \n 다른 브라우저로 접근 바랍니다.`
            );
            return;
        }
        if (editMode) {
            if (confirm("변경내용을 저장 하시겠습니까?")) {
                submitEdit(
                    profileParams
                        ? {
                              profileImg: profileParams.profileImg,
                              keywards: profileParams.keywards,
                          }
                        : undefined
                );
            } else {
            }
            setEditMode(false);
        } else {
            setEditMode(true);
        }
    };

    return (
        <div>
            <div id="FloatingBtnBox">
                <EditBtn
                    allowToUser={allowToUser || false}
                    onSubmit={submit}
                    editMode={editMode}
                />
                {/* <NewGoodsBtn /> */}
                {/* <NewProfileBtn /> */}
            </div>
        </div>
    );
};

const hiddenStyle: React.CSSProperties = {
    opacity: 0,
    position: "absolute",
    width: "1px",
    height: "1px",
};
