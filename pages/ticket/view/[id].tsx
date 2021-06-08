import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { BoardView } from "components/board/View";
import { Fanswer, Fticket } from "types/api";
import { useTicketDelete, useTicketFindById } from "../../../hook/useTicket";
import PageLoading from "../../Loading";
import Page404 from "../../404";
import { CommentWrite } from "../../../components/comment/CommentWrite";
import { AppContext } from "../../_app";
import Comment from "../../../components/comment/Comment";
import {
    useAnswerCreate,
    useAnswerDelete,
    useAnswerUpdate,
} from "../../../hook/useAnswer";
import PageDeny from "../../Deny";
import isEmpty from "../../../utils/isEmpty";
import { getFromUrl } from "../../../utils/url";

interface IProp {}

export const TicketDetail: React.FC<IProp> = () => {
    const router = useRouter();
    const ticketId = router.query.id as string;
    const pid = getFromUrl("pid");
    const { myProfile, isManager } = useContext(AppContext);
    const [createAnswerMu] = useAnswerCreate({
        onCompleted: ({ AnswerCreate }) => {
            if (AnswerCreate.ok) {
                alert("답변이 작성 되었습니다.");
            }
        },
    });
    const [answerDeleteMu] = useAnswerDelete();
    const [answerUpdateMu] = useAnswerUpdate();
    const [ticketDeleteMu] = useTicketDelete({
        onCompleted: ({ TicketDelete }) => {
            if (TicketDelete.ok) toList();
        },
    });

    const { item: ticket, error } = useTicketFindById(ticketId);
    const myTicket = ticket?.recipientId === myProfile?._id;

    if (error) return <Page404 />;
    if (!ticket) return <PageLoading />;
    const { title, thumb, createdAt, contents, subTitle, _id, author, isOpen } =
        ticket;

    const toDetail = () => {
        router.push(`/ticket/write/${_id}`);
    };

    const toList = () => {
        if (pid) {
            location.href = `/tour/view/` + pid;
        } else router.push(`/member/ticket/`);
    };

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            ticketDeleteMu({
                variables: {
                    id: _id,
                },
            });
    };

    const handleAnswerDelete = (answer: Fanswer) => () => {
        answerDeleteMu({
            variables: {
                id: answer._id,
                target: "Ticket",
                targetId: ticketId,
            },
        });
    };

    const handleAnswer = (content: string) => {
        createAnswerMu({
            variables: {
                params: {
                    content,
                },
                target: "Ticket",
                targetId: ticketId,
            },
        });
    };

    const handleEdit = async (_id: string, content: string) => {
        const result = await answerUpdateMu({
            variables: {
                _id,
                params: {
                    content,
                },
                target: "Ticket",
                targetId: ticketId,
            },
        });

        return !!result.data?.AnswerUpdate.ok;
    };

    return (
        <div>
            <BoardView
                isOpen={!!isOpen}
                authorId={author?._id || ""}
                thumb={thumb}
                content={contents}
                writer={author?.nickName || ""}
                title={title}
                subTitle={subTitle || ""}
                onDelete={handleDelete}
                onEdit={toDetail}
                createAt={createdAt}
                Foot={
                    <div className="comment__div">
                        {(isManager || myTicket) && (
                            <div>
                                <h3>Comment</h3>
                                {!isEmpty(ticket.answers) && (
                                    <div className="comment_box">
                                        <ul className="comment_box_list">
                                            {ticket.answers
                                                .filter(
                                                    (answer) =>
                                                        !answer?.isDelete
                                                )
                                                .map((answer) => {
                                                    return (
                                                        <Comment
                                                            title={
                                                                answer.author
                                                                    ?.name
                                                            }
                                                            onCompleteEdit={
                                                                handleEdit
                                                            }
                                                            onDelete={handleAnswerDelete(
                                                                answer
                                                            )}
                                                            key={answer?._id}
                                                            {...answer!}
                                                        />
                                                    );
                                                })}
                                        </ul>
                                    </div>
                                )}
                                <CommentWrite
                                    defaultContent={""}
                                    title={myProfile?.nickName}
                                    onSubmit={handleAnswer}
                                />
                            </div>
                        )}
                    </div>
                }
            />
        </div>
    );
};

export default TicketDetail;

// 측정 Invocie
// CRUD
// => Create 데코레이터 다는거....
