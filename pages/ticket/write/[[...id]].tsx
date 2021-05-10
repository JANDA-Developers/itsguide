import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BoardWrite } from "components/board/Write";
import { useBoard } from "hook/useBoard";
import { omits } from "../../../utils/omit";
import { auth } from "../../../utils/with";
import { ALLOW_LOGINED } from "../../../types/const";
import { Validater } from "../../../utils/validate";
import {
    useTicketCreate,
    useTicketDelete,
    useTicketFindById,
    useTicketUpdate,
} from "../../../hook/useTicket";
import { getFromUrl } from "../../../utils/url";
import { UserSelectModal } from "../../../components/UserSelectModal";
import { closeModal, openModal } from "../../../utils/popUp";

interface IProp {}

export const TicketWrite: React.FC<IProp> = () => {
    const router = useRouter();
    const id = router.query.id?.[0] as string;
    const { item: ticket } = useTicketFindById(id);
    const mode = id ? "edit" : "create";
    const urluserId = getFromUrl("pid") || "";
    const urlUserName = getFromUrl("name") || "";

    const [ticketUpdateMu] = useTicketUpdate({
        onCompleted: ({ TicketUpdate }) => {
            if (TicketUpdate.ok) {
                const id = TicketUpdate.data!._id;
                router.push(`/service/ticket/view/${id}`);
            }
        },
        awaitRefetchQueries: true,
    });

    const [ticketCreateMu] = useTicketCreate({
        onCompleted: ({ TicketCreate }) => {
            if (TicketCreate.ok) {
                const id = TicketCreate.data!._id;
                router.push(`/service/ticket/view/${id}`);
            }
        },
        awaitRefetchQueries: true,
    });

    const [ticketDeleteMu] = useTicketDelete({
        onCompleted: ({ TicketDelete }) => {
            if (TicketDelete.ok) router.push(`/service/ticket`);
        },
    });

    const boardHook = useBoard(
        {
            ...ticket,
        },
        { storeKey: "ticketWrite" }
    );

    const [userId, setUserId] = useState(urluserId);
    const [userName, setUserName] = useState(urlUserName);

    const {
        boardData,
        loadKey,
        handleCancel,
        handleLoad,
        handleTempSave,
        setBoardData,
    } = boardHook;

    const { validate } = new Validater([
        {
            value: boardData.title,
            failMsg: "제목 값은 필수 입니다.",
        },
        {
            value: boardData.contents,
            failMsg: "콘텐츠 값은 필수 입니다.",
        },
    ]);

    const handleUpdate = () => {
        if (!validate()) return;

        const params = {
            ...boardData,
        };

        ticketUpdateMu({
            variables: {
                params: omits(params, ["categoryId", "files"]),
                id,
            },
        });
    };

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            ticketDeleteMu({
                variables: {
                    id,
                },
            });
    };

    const handleCreate = () => {
        if (!validate()) return;

        const next = {
            ...boardData,
            userId,
        };

        ticketCreateMu({
            variables: {
                recipientId: userId,
                params: {
                    ...omits(next, ["categoryId", "files"]),
                    url: location.origin + "/ticket/view/",
                },
            },
        });
    };

    useEffect(() => {
        setBoardData({
            title: ticket?.title,
            contents: ticket?.contents,
        });
        setUserId(ticket?.recipientId);
    }, [ticket?._id]);

    return (
        <div>
            <BoardWrite
                author={ticket?.author}
                WriteInjection={
                    <div className="write_type">
                        <div className="title">상품명</div>
                        <div className="input_form">
                            <input
                                onFocus={openModal("#UserSelectModal")}
                                readOnly={!!urlUserName}
                                id="title"
                                value={userName}
                                type="text"
                                name="title"
                                className="inputText w100"
                            />
                        </div>
                    </div>
                }
                boardHook={boardHook}
                key={loadKey + (ticket?._id || "") + userId}
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
            <UserSelectModal
                id="UserSelectModal"
                onSelect={(pd) => {
                    setUserId(pd._id);
                    setUserName(pd.title);
                    closeModal("#UserSelectModal")();
                }}
            />
        </div>
    );
};

export default auth(ALLOW_LOGINED)(TicketWrite);
