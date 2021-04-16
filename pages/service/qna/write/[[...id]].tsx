import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from 'react';
import { BoardWrite } from "components/board/Write";
import { useBoard } from "hook/useBoard";
import { omits } from "../../../../utils/omit";
import { auth } from "../../../../utils/with";
import { ALLOW_ADMINS, ALLOW_LOGINED } from "../../../../types/const";
import { Validater } from "../../../../utils/validate";
import { useQnaCreate, useQnaDelete, useQnaFindById, useQnaUpdate } from "../../../../hook/useQna";
import { getFromUrl } from "../../../../utils/url";
import { AppContext } from "../../../_app";

interface IProp { }

export const QnaWrite: React.FC<IProp> = () => {
    const router = useRouter();
    const id = router.query.id?.[0] as string;
    const { item: qna } = useQnaFindById(id);
    const mode = id ? "edit" : "create";
    const { categoriesMap } = useContext(AppContext);

    const [qnaUpdateMu] = useQnaUpdate({
        onCompleted: ({ QnaUpdate }) => {
            if (QnaUpdate.ok) {
                const id = QnaUpdate.data!._id;
                router.push(`/service/qna`)
            }
        },
        awaitRefetchQueries: true
    })

    const [qnaCreateMu] = useQnaCreate({
        onCompleted: ({ QnaCreate }) => {
            if (QnaCreate.ok) {
                const id = QnaCreate.data!._id;
                router.push(`/service/qna`)
            }
        },
        awaitRefetchQueries: true
    })

    const [qnaDeleteMu] = useQnaDelete({
        onCompleted: ({ QnaDelete }) => {
            if (QnaDelete.ok)
                router.push(`/service/qna`)
        },
    })

    const boardHook = useBoard({
        ...qna,
    }, { storeKey: "qnaWrite" });

    const { boardData, loadKey, handleCancel, handleLoad, handleTempSave, setBoardData } = boardHook

    const { validate } = new Validater([
        {
            value: boardData.title,
            failMsg: "제목 값은 필수 입니다.",
        },
        {
            value: boardData.categoryId,
            failMsg: "카테고리 값은 필수 입니다.",
        },
        {
            value: boardData.contents,
            failMsg: "콘텐츠 값은 필수 입니다.",
        },
    ]
    );

    const handleUpdate = () => {
        if (!validate()) return;

        const params = {
            ...boardData,
        }

        qnaUpdateMu({
            variables: {
                params: omits(params, ["files"]),
                id
            }
        })
    }

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            qnaDeleteMu({
                variables: {
                    id
                }
            })
    }

    const handleCreate = () => {
        if (!validate()) return

        const next = {
            ...boardData,
        }

        qnaCreateMu({
            variables: {
                params: omits(next, ["files"])
            }
        })
    }


    useEffect(() => {
        setBoardData({
            ...qna as any,
            categoryId: qna?.category?._id
        })
    }, [qna?._id])

    return <BoardWrite
        author={qna?.author}
        boardHook={boardHook}
        key={loadKey + (qna?._id || "")}
        mode={mode}
        categoryList={categoriesMap.QNA}
        onCancel={handleCancel}
        onCreate={handleCreate}
        onDelete={handleDelete}
        onEdit={handleUpdate}
        onSave={handleTempSave}
        onLoad={handleLoad}
        opens={{
            title: true,
            category: true,
            // open: true
        }}
    />
};




export default auth(ALLOW_ADMINS)(QnaWrite)