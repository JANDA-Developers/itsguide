import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { BoardWrite } from "components/board/Write";
import { useBoard } from "hook/useBoard";
import { omits } from "../../../../utils/omit";
import { auth } from "../../../../utils/with";
import { ALLOW_LOGINED } from "../../../../types/const";
import { ProductSearcher } from "../../../../components/productSearcher/ProductSearcher";
import { Validater } from "../../../../utils/validate";
import { useQuestionCreate, useQuestionDelete, useQuestionFindById, useQuestionUpdate } from "../../../../hook/useQuestion";
import { getFromUrl } from "../../../../utils/url";

interface IProp { }

export const QuestionWrite: React.FC<IProp> = () => {
    const router = useRouter();
    const id = router.query.id?.[0] as string;
    const { item: question } = useQuestionFindById(id);
    const mode = id ? "edit" : "create";
    const urlProductId = getFromUrl("pid") || "";
    const urlProductName = getFromUrl("name") || "";

    const [questionUpdateMu] = useQuestionUpdate({
        onCompleted: ({ QuestionUpdate }) => {
            if (QuestionUpdate.ok) {
                const id = QuestionUpdate.data!._id;
                router.push(`/service/question/view/${id}`)
            }
        },
        awaitRefetchQueries: true
    })

    const [questionCreateMu] = useQuestionCreate({
        onCompleted: ({ QuestionCreate }) => {
            if (QuestionCreate.ok) {
                const id = QuestionCreate.data!._id;
                router.push(`/service/question/view/${id}`)
            }
        },
        awaitRefetchQueries: true
    })

    const [questionDeleteMu] = useQuestionDelete({
        onCompleted: ({ QuestionDelete }) => {
            if (QuestionDelete.ok)
                router.push(`/service/question`)
        },
    })

    const boardHook = useBoard({
        ...question,
    }, { storeKey: "questionWrite" });

    const [productId, setProductId] = useState(urlProductId);
    const { boardData, loadKey, handleCancel, handleLoad, handleTempSave, setBoardData } = boardHook

    const { validate } = new Validater([
        {
            value: boardData.title,
            failMsg: "제목 값은 필수 입니다.",
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

        questionUpdateMu({
            variables: {
                params: omits(params, ["categoryId", "files"]),
                id
            }
        })
    }

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            questionDeleteMu({
                variables: {
                    id
                }
            })
    }

    const handleCreate = () => {
        if (!validate()) return

        const next = {
            ...boardData,
            productId,
        }

        questionCreateMu({
            variables: {
                params: {
                    ...omits(next, ["categoryId", "files"]),
                    productId: productId ? productId : undefined
                }
            }
        })
    }

    useEffect(() => {
        setBoardData({
            title: question?.title,
            contents: question?.contents,
        })
        setProductId(question?.product?._id || "")
    }, [question?._id])


    return <BoardWrite
        author={question?.author}
        WriteInjection={
            urlProductId ? <div className="write_type">
                <div className="title">상품명</div>
                <div className="input_form">
                    <input readOnly id="title" value={urlProductName} type="text" name="title" className="inputText w100" />
                </div>
            </div> :
                undefined
        }
        boardHook={boardHook}
        key={loadKey + (question?._id || "") + productId}
        mode={mode}
        onCancel={handleCancel}
        onCreate={handleCreate}
        onDelete={handleDelete}
        onEdit={handleUpdate}
        onSave={handleTempSave}
        onLoad={handleLoad}
        opens={{
            title: true,
            open: true,
        }}
    />
};




export default auth(ALLOW_LOGINED)(QuestionWrite)