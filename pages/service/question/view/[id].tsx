import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { BoardView } from "components/board/View";
import { Fanswer, Fquestion } from "types/api";
import {
    useQuestionDelete,
    useQuestionFindById,
} from "../../../../hook/useQuestion";
import PageLoading from "../../../Loading";
import Page404 from "../../../404";
import { CommentWrite } from "../../../../components/comment/CommentWrite";
import { AppContext } from "../../../_app";
import Comment from "../../../../components/comment/Comment";
import {
    useAnswerCreate,
    useAnswerDelete,
    useAnswerUpdate,
} from "../../../../hook/useAnswer";
import PageDeny from "../../../Deny";
import isEmpty from "../../../../utils/isEmpty";
import { getFromUrl } from "../../../../utils/url";
import { updateURLParameter } from "../../../../utils/getUpdateUrlParam";
import { useFragmentMove } from "../../../../hook/useFragmentMove";

interface IProp {}

export const QuestionDetail: React.FC<IProp> = () => {
    const router = useRouter();
    const questionId = router.query.id as string;
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
    const [questionDeleteMu] = useQuestionDelete({
        onCompleted: ({ QuestionDelete }) => {
            if (QuestionDelete.ok) toList();
        },
    });

    const { item: question, error } = useQuestionFindById(questionId);
    const myQuestion = question?.author?._id === myProfile?._id;
    const myProdQuestion = question?.product?.author?._id === myProfile?._id;

    if (
        question &&
        !question.isOpen &&
        !isManager &&
        !myQuestion &&
        !myProdQuestion
    ) {
        return <PageDeny />;
    }

    useFragmentMove();

    if (error) return <Page404 />;
    if (!question) return <PageLoading />;
    const {
        title,
        thumb,
        createdAt,
        contents,
        subTitle,
        _id,
        product,
        author,
        isOpen,
    } = question;
    const isMyProduct = myProfile?._id === product?.author?._id;

    const toDetail = () => {
        router.push(`/service/question/write/${_id}`);
    };

    const toList = () => {
        const page = getFromUrl("page");
        const to = updateURLParameter("/member/question", "page", page);

        if (pid) {
            location.href = `/tour/view/` + pid + "#questions";
        } else router.push(to);
    };

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            questionDeleteMu({
                variables: {
                    id: _id,
                },
            });
    };

    const handleAnswerDelete = (answer: Fanswer) => () => {
        answerDeleteMu({
            variables: {
                id: answer._id,
                target: "Question",
                targetId: questionId,
            },
        });
    };

    const handleAnswer = (content: string) => {
        createAnswerMu({
            variables: {
                params: {
                    content,
                },
                target: "Question",
                targetId: questionId,
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
                target: "Question",
                targetId: questionId,
            },
        });

        return !!result.data?.AnswerUpdate.ok;
    };

    return (
        <div>
            <BoardView
                isOpen={!!isOpen}
                authorId={author?._id || ""}
                onList={toList}
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
                        {(isMyProduct || isManager) && (
                            <div>
                                <h3>Comment</h3>
                                {!isEmpty(question.answers) && (
                                    <div className="comment_box">
                                        <ul className="comment_box_list">
                                            {question.answers
                                                .filter(
                                                    (answer) =>
                                                        !answer?.isDelete
                                                )
                                                .map((answer) => {
                                                    return (
                                                        <Comment
                                                            title={
                                                                answer?.author
                                                                    ?.name
                                                            }
                                                            onCompleteEdit={
                                                                handleEdit
                                                            }
                                                            onDelete={handleAnswerDelete(
                                                                answer!
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

export default QuestionDetail;

// 측정 Invocie
// CRUD
// => Create 데코레이터 다는거....
