import dynamic from "next/dynamic";
import { useContext } from "react";
import { Ffile, Fuser } from "types/api";
import { TElements } from "types/interface";
import React from "react";
import { useUpload } from "hook/useUpload";
import { IUseBoard } from "hook/useBoard";
import { AppContext } from "../../pages/_app";
import { LoadEditor } from "../edit/EdiotrLoading";
const Editor = LoadEditor();

export interface IBoardOpen {
    title: boolean;
    subTitle: boolean;
    category: boolean;
    files: boolean;
    summary: boolean;
    thumb: boolean;
    open: boolean;
}

export type TCategory = { _id: string; label: string };
interface IProps {
    Button?: TElements;
    useTextarea?: boolean;
    className?: string;
    boardHook: IUseBoard;
    categoryList?: TCategory[];
    WriteInjection?: TElements;
    mode: "create" | "edit";
    onSave?: () => void;
    onDelete?: () => void;
    onEdit?: () => void;
    onCreate?: () => void;
    onLoad?: () => void;
    onCancel?: () => void;
    opens: Partial<IBoardOpen>;
    author?: Fuser;
}

export const BoardWrite: React.FC<IProps> = ({
    Button,
    author,
    className,
    boardHook,
    useTextarea,
    categoryList,
    opens,
    mode,
    WriteInjection,
    onCancel: handleCancel,
    onCreate: handleCreate,
    onDelete: handleDelete,
    onEdit: handleEdit,
    onLoad: handleLoad,
    onSave: handleSave,
}) => {
    const { myProfile } = useContext(AppContext);
    const name = author?.nickName || "";
    const isCreateMode = mode === "create";
    const { signleUpload } = useUpload();
    const { boardData, boardSets } = boardHook;
    const {
        categoryId,
        isOpen,
        subTitle,
        summary,
        thumb,
        title,
        contents,
        files,
    } = boardData;
    const {
        setCategoryId,
        setContents,
        setIsOpen,
        setSummary,
        setThumb,
        setTitle,
        setFiles,
        setSubTitle,
    } = boardSets;
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);

    const handleCatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextCat = e.currentTarget.value;
        setCategoryId(nextCat);
    };

    const handleChangeOpen = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsOpen(e.currentTarget.value === "true");
    };

    const handleAddFile = () => {
        hiddenFileInput.current?.click();
    };

    const handleUploadClick = () => {
        hiddenFileInput.current?.click();
    };

    const handleClearFile = (index: number) => () => {
        files.splice(index, 1);
        setFiles([...files]);
    };

    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_: string, data: Ffile) => {
            files.push(data);
            setFiles([...files]);
        };

        signleUpload(fileUploaded, onUpload);
        // data.images[FILE_SELECT_INDEX] = fileUploaded;
    };

    const handleChangeSumbNail = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_: string, data: Ffile) => {
            setThumb(data);
        };

        signleUpload(fileUploaded, onUpload);
        // data.images[FILE_SELECT_INDEX] = fileUploaded;
    };

    return (
        <div className={`writing_in w100 board_write ${className}`}>
            <div className="w1200">
                <div className="write_box">
                    {opens.category && (
                        <div className="write_type">
                            <div className="title">카테고리</div>
                            <div className="input_form">
                                <span id="category" className="category r3">
                                    <select
                                        className=""
                                        onChange={handleCatChange}
                                        value={categoryId}
                                        name="category_srl"
                                    >
                                        <option value={""}>선택없음</option>
                                        {categoryList?.map((cat) => (
                                            <option
                                                value={cat._id}
                                                key={cat._id}
                                            >
                                                {cat.label}
                                            </option>
                                        ))}
                                    </select>
                                </span>
                            </div>
                        </div>
                    )}
                    <div className="write_type">
                        <div className="title">작성자</div>
                        <div className="input_form">
                            <input
                                readOnly
                                value={name}
                                type="text"
                                name="title"
                                className="inputText w50 fix"
                            />
                            {/* 자동출력 고정 */}
                        </div>
                    </div>
                    <div className="write_type">
                        <div className="title">제목</div>
                        <div className="input_form">
                            <input
                                id="title"
                                onChange={(e) => {
                                    setTitle(e.currentTarget.value);
                                }}
                                value={title}
                                type="text"
                                name="title"
                                className="inputText w100"
                            />
                        </div>
                    </div>
                    {opens.thumb && (
                        <div className="write_type">
                            <div className="title">썸네일</div>
                            <div className="img_box_add">
                                <ul className="img_add">
                                    {thumb ? (
                                        <li
                                            onClick={handleUploadClick}
                                            className="on_file"
                                        >
                                            {thumb.name}
                                        </li>
                                    ) : (
                                        <li onClick={handleUploadClick}>
                                            이미지추가
                                            <i className="flaticon-add icon_plus"></i>
                                        </li>
                                    )}
                                    <input
                                        onChange={handleChangeSumbNail}
                                        multiple={false}
                                        ref={hiddenFileInput}
                                        hidden
                                        type="file"
                                    />
                                </ul>
                                <p className="input_form info_txt">
                                    - 썸네일 이미지사이즈 400px * 400px
                                </p>
                            </div>
                        </div>
                    )}
                    {opens.subTitle && (
                        <div className="write_type">
                            <div className="title">부제목</div>
                            <div className="input_form">
                                <input
                                    onChange={(e) => {
                                        setSubTitle(e.currentTarget.value);
                                    }}
                                    value={subTitle}
                                    type="text"
                                    name="subTitle"
                                    className="inputText w100"
                                />
                            </div>
                        </div>
                    )}
                    {opens.summary && (
                        <div className="write_type">
                            <div className="title">요약</div>
                            <div className="input_form">
                                <input
                                    onChange={(e) => {
                                        setSummary(e.currentTarget.value);
                                    }}
                                    value={summary}
                                    type="text"
                                    name="summary"
                                    className="inputText w100"
                                />
                            </div>
                        </div>
                    )}
                    {opens.open && (
                        <div className="write_type">
                            <div className="title">글 설정</div>
                            <div className="input_form">
                                <ul>
                                    <li>
                                        <input
                                            onChange={handleChangeOpen}
                                            type="radio"
                                            name="status"
                                            id="status-open"
                                            value={"true"}
                                            checked={isOpen}
                                            className="radio"
                                        />
                                        <label htmlFor="status-open">
                                            공개
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            onChange={handleChangeOpen}
                                            type="radio"
                                            name="status"
                                            id="status-sold"
                                            value={"false"}
                                            checked={!isOpen}
                                            className="radio"
                                        />
                                        <label htmlFor="status-sold">
                                            비공개
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {WriteInjection}
                </div>
                {/* 첨부파일 */}
                {opens.files && (
                    <div className="write_type bottom_write">
                        <div className="write_type">
                            <div className="title">첨부파일</div>
                            <div className="img_box_add">
                                <ul className="img_add">
                                    {files.map((file, i) => (
                                        <li
                                            key={i + "thumb"}
                                            className="on_file"
                                        >
                                            {file.name}
                                            <i
                                                onClick={handleClearFile(i)}
                                                className="flaticon-multiply icon_x"
                                            ></i>
                                        </li>
                                    ))}
                                    {files.length < 6 && (
                                        <li onClick={handleAddFile}>
                                            파일추가
                                            <i className="flaticon-add icon_plus" />
                                        </li>
                                    )}
                                </ul>
                                <input
                                    onChange={handleChangeFile}
                                    multiple={false}
                                    ref={hiddenFileInput}
                                    hidden
                                    type="file"
                                />
                                <p className="input_form info_txt">
                                    - 20MB 제한이 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                {/* 내용 */}
                <div className="write_con">
                    {useTextarea && (
                        <textarea
                            onChange={(e) => {
                                const val = e.currentTarget.value;
                                setContents(val);
                            }}
                            value={contents}
                            className="board_write__textarea"
                        />
                    )}
                    {useTextarea || (
                        <Editor
                            onChange={(data: any) => {
                                setContents(data);
                            }}
                            data={contents}
                        />
                    )}
                </div>

                {/* 하단메뉴 */}
                <div className="boardNavigation">
                    <div className="float_left">
                        <button
                            onClick={handleSave}
                            type="button"
                            className="btn medium"
                        >
                            임시 저장
                        </button>
                        <button
                            onClick={handleLoad}
                            type="button"
                            className="btn medium"
                        >
                            불러오기
                        </button>
                    </div>
                    <div className="float_right">
                        {Button}
                        {isCreateMode || (
                            <button
                                onClick={handleEdit}
                                type="submit"
                                className="btn medium pointcolor"
                            >
                                수정
                            </button>
                        )}
                        {isCreateMode && (
                            <button
                                onClick={handleCreate}
                                type="submit"
                                className="btn medium pointcolor"
                            >
                                등록
                            </button>
                        )}
                        <button
                            onClick={handleCancel}
                            type="button"
                            className=" btn medium impact"
                        >
                            취소
                        </button>
                        <button
                            onClick={handleDelete}
                            type="submit"
                            className="btn medium"
                        >
                            삭제
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardWrite;
