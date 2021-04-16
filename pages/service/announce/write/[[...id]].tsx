import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { BoardWrite } from "components/board/Write";
import { useBoard } from "hook/useBoard";
import { omits } from "../../../../utils/omit";
import { auth } from "../../../../utils/with";
import { ALLOW_LOGINED } from "../../../../types/const";
import { Validater } from "../../../../utils/validate";
import { useAnnounceCreate, useAnnounceDelete, useAnnounceFindById, useAnnounceUpdate } from "../../../../hook/useAnnounce";
import { getFromUrl } from "../../../../utils/url";
import { AnnounceType } from "../../../../types/api";

interface IProp { }

export const AnnounceWrite: React.FC<IProp> = () => {
    const router = useRouter();
    const id = router.query.id?.[0] as string;
    const { item: announce } = useAnnounceFindById(id);
    const mode = id ? "edit" : "create";
    const [type, setType] = useState<AnnounceType>();

    const [announceUpdateMu] = useAnnounceUpdate({
        onCompleted: ({ AnnounceUpdate }) => {
            if (AnnounceUpdate.ok) {
                const id = AnnounceUpdate.data!._id;
                router.push(`/service/announce/view/${id}`)
            }
        },
        awaitRefetchQueries: true
    })

    const [announceCreateMu] = useAnnounceCreate({
        onCompleted: ({ AnnounceCreate }) => {
            if (AnnounceCreate.ok) {
                const id = AnnounceCreate.data!._id;
                router.push(`/service/announce/view/${id}`)
            }
        },
        awaitRefetchQueries: true
    })

    const [announceDeleteMu] = useAnnounceDelete({
        onCompleted: ({ AnnounceDelete }) => {
            if (AnnounceDelete.ok)
                router.push(`/service/qna`)
        },
    })

    const boardHook = useBoard({
        ...announce,
    }, { storeKey: "announceWrite" });

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
        {
            value: type,
            failMsg: "타입 값은 필수 입니다.",
        },
    ]
    );

    const next = {
        ...boardData,
        type
    }

    const handleUpdate = () => {
        if (!validate()) return;

        const params = {
            ...next,
        }

        announceUpdateMu({
            variables: {
                params: omits(params, ["categoryId", "files"]),
                id
            }
        })
    }

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            announceDeleteMu({
                variables: {
                    id
                }
            })
    }

    const handleCreate = () => {
        if (!validate()) return



        announceCreateMu({
            variables: {
                params: omits(next, ["categoryId", "files"])
            }
        })
    }

    useEffect(() => {
        setBoardData({
            ...announce as any
        })
        setType(announce?.type)
    }, [announce?._id])


    return <BoardWrite
        author={announce?.author}
        WriteInjection={
            <div className="write_type">
                <div className="title">타입</div>
                <div className="input_form">
                    <span id="category" className="category r3">
                        <select onChange={(e) => {
                            const announceType = e.currentTarget.value as AnnounceType;
                            setType(announceType);
                        }} value={type} name="category_srl">
                            <option value={""} >
                                선택없음
                            </option>
                            <option value={AnnounceType.ACCOUNCE} >
                                공지
                            </option>
                            <option value={AnnounceType.NOICE} >
                                알림
                            </option>
                        </select>
                    </span>
                </div>
            </div>}
        boardHook={boardHook}
        key={loadKey + (announce?._id || "")}
        mode={mode}
        onCancel={handleCancel}
        onCreate={handleCreate}
        onDelete={handleDelete}
        onEdit={handleUpdate}
        onSave={handleTempSave}
        onLoad={handleLoad}
        opens={{
            title: true,
            open: true
        }}
    />
};




export default auth(ALLOW_LOGINED)(AnnounceWrite)