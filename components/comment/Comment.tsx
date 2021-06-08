import dayjs from "dayjs";
import dynamic from "next/dynamic";
import React, { useContext, useState } from "react";
import { AppContext } from "../../pages/_app";
import { Fanswer, Fquestion } from "../../types/api";
import { BG, BGprofile } from "../../types/const";
import { LoadEditor } from "../edit/EdiotrLoading";
const Editor = LoadEditor();

interface IProp extends Fanswer {
    className?: string;
    title: string;
    onDelete: (_id: string) => void;
    onCompleteEdit?: (id: string, content: string) => Promise<boolean>;
}

export const Comment: React.FC<IProp> = ({
    _id,
    className,
    content,
    createdAt,
    title,
    onDelete: handleDelete,
    author,
    onCompleteEdit,
}) => {
    const [editMode, setEditMode] = useState(false);
    const [model, setModel] = useState(content);
    const { myProfile, isManager } = useContext(AppContext);
    const isMyComment = author?._id === myProfile?._id || isManager;

    const handleEditComplete = async () => {
        if (onCompleteEdit)
            if (await onCompleteEdit(_id, model)) setEditMode(false);
    };

    return (
        <li className={`list_comment ${className}`}>
            <div className="title">
                <i
                    className="profile"
                    style={BGprofile(author?.profileImg)}
                ></i>
                {title}
            </div>
            {editMode || (
                <p
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                />
            )}
            {editMode && (
                <div>
                    <Editor data={model} onChange={setModel} />
                </div>
            )}
            <span className="date">
                [{dayjs(createdAt).format("YYYY.M.DD HH:mm")}]
            </span>
            {isMyComment && (
                <div className="btn_bottom">
                    {editMode && (
                        <button
                            onClick={handleEditComplete}
                            className="comment_btn mini"
                        >
                            완료
                        </button>
                    )}
                    {editMode && (
                        <button
                            onClick={() => {
                                setEditMode(false);
                            }}
                            className="comment_btn mini"
                        >
                            취소
                        </button>
                    )}
                    {editMode || (
                        <button
                            onClick={() => {
                                setEditMode(true);
                            }}
                            className="comment_btn mini"
                        >
                            수정
                        </button>
                    )}
                    <button
                        onClick={() => {
                            handleDelete(_id);
                        }}
                        className="comment_btn mini"
                    >
                        삭제
                    </button>
                </div>
            )}
        </li>
    );
};

export default Comment;
