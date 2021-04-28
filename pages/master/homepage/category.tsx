import { MasterLayout } from "layout/MasterLayout";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { AppContext } from "../../_app";
import {
    useCategoryCreate,
    useCategoryDelete,
    useCategoryList,
    useCategoryUpdate,
} from "../../../hook/useCategory";
import {
    CategoryType,
    Fcategory,
    Fcategory_localeLabel,
} from "../../../types/api";
import { CategoryEitdor } from "../../../components/categoryEditor/CategoryEdiotr";
import { categoryMap } from "../../../utils/categoryMap";
import { categoryToKR } from "../../../utils/enumToKr";
import { HomepageTopNav } from "../../../components/topNav/MasterTopNav";
import { auth } from "../../../utils/with";
import { ALLOW_ADMINS } from "../../../types/const";
import {
    ILangModalProp,
    LangModal,
} from "../../../components/langModal/LangModal";
import { useModal } from "../../../hook/useModal";
import { omits } from "../../../utils/omit";

interface IProp {}

export const MsHomepageA: React.FC<IProp> = () => {
    const { data } = useCategoryList();
    const categoriesMap = categoryMap(data || []);
    const [deleteMu] = useCategoryDelete({
        onCompleted: ({ CategoryDelete }) => {
            if (CategoryDelete.ok) {
                alert("삭제 완료");
            }
        },
    });
    const [create] = useCategoryCreate({
        onCompleted: ({ CategoryCreate }) => {
            if (CategoryCreate.ok) {
                alert("추가완료 완료");
            }
        },
    });
    const [update] = useCategoryUpdate({
        onCompleted: ({ CategoryUpdate }) => {
            if (CategoryUpdate.ok) {
                alert("업데이트 완료");
            }
        },
    });
    const lagnModalHook = useModal<ILangModalProp>();

    if (!categoriesMap) throw Error("categoriesMap is not exsist");
    const cats = Object.entries(categoriesMap);

    const handleAdd = (type: CategoryType) => (label: string) => {
        create({
            variables: {
                params: {
                    label: label,
                    type,
                },
            },
        });
    };

    const handleDelete = (cat: Fcategory) => {
        if (confirm(`정말로 카테고리 ${cat.label}을 삭제 하시겠습니까?`))
            deleteMu({ variables: { id: cat._id } });
    };

    const handleUpdate = (
        cat: Fcategory,
        label: string,
        localeLabel?: Fcategory_localeLabel
    ) => {
        update({
            variables: {
                id: cat._id,
                params: { label, localeLabel: omits(localeLabel) },
            },
        });
        lagnModalHook.closeModal();
    };

    return (
        <MasterLayout>
            <div className="in ">
                <h4>홈페이지 설정</h4>
                <div className="in_content">
                    <HomepageTopNav />
                    <div className="con homepage board">
                        <div className="design_table">
                            <div className="block_box">
                                <h5>게시판 카테고리 설정</h5>
                                {cats.map((catWrap) => (
                                    <CategoryEitdor
                                        onLang={(cat) => {
                                            lagnModalHook.openModal({
                                                cat,
                                                onSubmit: (localLabel) => {
                                                    handleUpdate(
                                                        cat,
                                                        cat.label,
                                                        localLabel
                                                    );
                                                },
                                            });
                                        }}
                                        onDelete={handleDelete}
                                        onEdit={handleUpdate}
                                        key={catWrap[0]}
                                        onAdd={handleAdd(
                                            catWrap[0] as CategoryType
                                        )}
                                        wrapLabel={categoryToKR(
                                            catWrap[0] as CategoryType
                                        )}
                                        categories={catWrap[1]}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LangModal key={lagnModalHook.info?.cat?._id} {...lagnModalHook} />
        </MasterLayout>
    );
};

export default auth(ALLOW_ADMINS)(MsHomepageA);
