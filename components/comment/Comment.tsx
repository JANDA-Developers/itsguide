import dayjs from 'dayjs';
import React from 'react';

interface IProp {
    _id: string;
    title: string;
    content: string;
    createdAt: Date;
    profileImg?: string;
    onReply: (_id: string) => void;
    onDelete: (_id: string) => void;
}

export const Comment: React.FC<IProp> = ({ _id, profileImg, content, createdAt, title, onDelete: handleDelete, onReply: handleReply }) => {
    return <li>
        <div className="title"><i className="profile" style={{ backgroundImage: `url(${profileImg})` }}></i>{title}</div>
        <p>{content}</p>
        <span className="date">{dayjs(createdAt).format("YYYY.M.DD HH:mm")}</span>
        <div className="btn_bottom">
            <button onClick={() => { handleReply(_id) }} className="comment_btn mini">답글</button>
            <button onClick={() => { handleDelete(_id) }} className="comment_btn mini">삭제</button>
        </div>
    </li>;
};


export default Comment;