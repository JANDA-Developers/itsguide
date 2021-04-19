import dayjs from "dayjs";
import dynamic from "next/dynamic";
import React from "react";
import { Ffile } from "types/api"
import { ContentViewer } from "../contentViewer/ContentViewer";

interface IProps {
    catName?: string;
    title: string;
    writer: string;
    thumb?: Ffile | null;
    createAt: string;
    comments?: {
        count: 0,
    }
    viewCount?: number
    summary?: string;
    files?: Ffile[]
    onNext?: () => void;
    onPrev?: () => void;
    onList?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    content?: string;
}


export const BoardView: React.FC<IProps> = (data) => {
    const { catName, createAt, title = "", writer, comments, files, summary, viewCount, thumb, content = "", onEdit, onList, onNext, onPrev, onDelete } = data;


    const handlePrev = () => {
        onPrev?.();
    }

    const handleList = () => {
        onList?.();
    }

    const handleEdit = () => {
        onEdit?.();
    }

    const handleNext = () => {
        onNext?.();
    }

    const handleDelete = () => {
        onDelete?.();
    }

    return <div className="board_box edtiorView">
        <div className="w1200">
            <div className="xe_content">
                <div className="xe_top">
                    {catName && <div className="h3_top"><span className="category ct_02">{catName}</span></div>}
                    <h3>
                        {title}
                    </h3>
                    <div className="footer_txt">
                        <span>작성자<strong>{writer}</strong></span>
                        <span>{dayjs(createAt).format('YYYY.MM.DD HH:mm')}</span>
                        {comments?.count && <span>댓글 <strong>0</strong>건</span>}{/* 댓글기능 열렷을 때 */}
                        {viewCount && <span>조회수 <strong>3423</strong>회</span>}
                    </div>
                </div>
                <div className="in_box">

                    {/*본문시작*/}
                    {summary && <>{summary}
                        <br /><br />
                    </>
                    }
                    {/*thumb && <img src={thumb.uri} alt={thumb.name} /> 섬네일이미지 안보여줘도됨...*/}
                    <ContentViewer data={content} />
                    {files &&
                        <div className="download_box">
                            <ul>
                                {files?.map((file, i) =>
                                    <li key={`file${i}`}><a href="/"><i className="flaticon-folder-15" />{file.name}<i className="end jandaicon-check" /></a></li>
                                )}
                            </ul>
                        </div>
                    }
                </div>
                {/* 댓글 */}

                <div className="boardNavigation">
                    <div className="float_left">
                        {handleList && <button onClick={handleList} type="button" className="btn medium">목록</button>}
                    </div>
                    <div className="float_right">
                        <button onClick={handleEdit} type="submit" className="btn medium pointcolor">수정</button>
                        <button onClick={handleDelete} type="submit" className="btn medium">삭제</button>
                    </div>
                </div>
                {(onPrev || onNext) && <div className="board_list_mini">
                    <ul>
                        {onPrev && <li className="first"><span><i className="flaticon-cloud-computing" />이전글<i className="flaticon-command" /></span><div>행사를 합니다~!!!!!</div></li>}
                        {onNext && <li><span><i className="flaticon-cloud-computing" />다음글<i className="flaticon-command" /></span><div>입금자 확인중입니다.</div></li>}
                    </ul>
                </div>}
            </div>
        </div>
    </div>
}
