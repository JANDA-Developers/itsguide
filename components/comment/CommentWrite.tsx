import React, { useState } from 'react';

export type TContentSubmit = {
    content: string;
    isSecret: boolean;
}

interface IProp {
    user: {}
    onSubmit: (data: TContentSubmit) => void;
}

export const CommentWrite: React.FC<IProp> = ({ onSubmit }) => {
    const [isSecret, setIsSecret] = useState(false);
    const [content, setContent] = useState<string>("");
    const length = content.length;

    const validate = (): boolean => {
        if (length > 3000) {
            alert("3000글자 까지만 적을 수 있습니다.");
            return false;
        }

        return true;
    }

    return <div className="write_comment">
        <div className="comment_layout">
            <ul className="text_box">
                <li>
                    <div className="title">
                        <i
                            className="profile"
                            style={{ backgroundImage: "url(/src/img/profile_f.png)" }}
                        />
                        부산아주머니
                    </div>
                </li>
                <li>
                    <div className="txta w100">
                        <textarea
                            onChange={(e) => {
                                const value = e.currentTarget.value
                                setContent(value)
                            }}
                            value={content}
                            style={{ height: 100 }}
                            placeholder="모두가 함께 보는 댓글입니다."
                            defaultValue={""}
                        />
                    </div>
                </li>
                <li className="tr count">0/3000</li>
            </ul>
            <div className="text_box_bottom">
                <div className="float_left w50">
                    <span onClick={() => {
                        setIsSecret(!isSecret);
                    }} className={isSecret ? `on` : undefined}>
                        <i className="flaticon-locked" />
                        비밀댓글
                    </span>
                </div>
                <div className="btn_send float_right">
                    <button onClick={() => {
                        if (validate()) onSubmit({
                            content: "",
                            isSecret: false,
                        })
                    }} className="comment_btn">등록</button>{" "}
                </div>
            </div>
        </div>
    </div>;
};
