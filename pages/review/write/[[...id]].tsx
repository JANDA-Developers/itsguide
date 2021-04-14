import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from 'react';
import { BoardWrite } from "components/board/Write";
import { useBoard } from "hook/useBoard";
import { useProductReviewCreate, useProductReviewDelete, useProductReviewFindById, useProductReviewUpdate } from "../../../hook/useReview";
import { getFromUrl } from "../../../utils/url";
import { omits } from "../../../utils/omit";
import { auth } from "../../../utils/with";
import { ALLOW_LOGINED } from "../../../types/const";
import { Validater } from "../../../utils/validate";
import { useUpload } from "../../../hook/useUpload";
import { Ffile } from "../../../types/api";
import Page404 from "../../404";
import { RatingStar } from "../../../components/rating/Rating";

interface IProp { }

export const ReviewWrite: React.FC<IProp> = () => {
    const router = useRouter();
    const id = router.query.id?.[0] as string;
    const { item: productreview } = useProductReviewFindById(id, { skip: !id });
    const mode = id ? "edit" : "create";
    const urlProductId = getFromUrl("pid") || "";
    const urlProductName = getFromUrl("name") || "";
    const [rate, setRate] = useState<number>(productreview?.rating || 0)
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const { signleUpload } = useUpload();


    const [productreviewUpdateMu] = useProductReviewUpdate({
        onCompleted: ({ ProductReviewUpdate }) => {
            if (ProductReviewUpdate.ok) {
                const id = ProductReviewUpdate.data!._id;
                router.push(`/tour/view/${urlProductId}`)
            }
        },
        awaitRefetchQueries: true
    })

    const [productreviewCreateMu] = useProductReviewCreate({
        onCompleted: ({ ProductReviewCreate }) => {
            if (ProductReviewCreate.ok) {
                const id = ProductReviewCreate.data!._id;
                router.push(`/tour/view/${urlProductId}`)
            }
        },
        awaitRefetchQueries: true
    })

    const [productreviewDeleteMu] = useProductReviewDelete({
        onCompleted: ({ ProductReviewDelete }) => {
            if (ProductReviewDelete.ok)
                router.push(`/tour/view/${urlProductId}`)
        },
    })

    const boardHook = useBoard({
        ...productreview,
        files: productreview?.attachFiles || []
    }, { storeKey: "ReviewWrite" });

    const { boardData, loadKey, handleCancel, handleLoad, handleTempSave, setBoardData, boardSets } = boardHook
    const { files } = boardData;
    const { setFiles } = boardSets;

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
            value: 0 < rate && rate <= 5,
            failMsg: "평점을 입력 해주세요.",
        },

    ]
    );

    const handleUpdate = () => {
        if (!validate()) return;

        const params = {
            ...boardData,
        }

        productreviewUpdateMu({
            variables: {
                params: {
                    ...omits(params, ["categoryId", "files"]),
                    rating: rate,
                    attachFiles: omits(files)
                },
                id
            }
        })
    }

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            productreviewDeleteMu({
                variables: {
                    id
                }
            })
    }

    const handleCreate = () => {
        if (!validate()) return

        const next = {
            ...boardData,
        }


        productreviewCreateMu({
            variables: {
                params: {
                    ...omits(next, ["categoryId", "files"]),
                    product: urlProductId,
                    rating: rate,
                    attachFiles: omits(files)
                }
            }
        })
    }

    useEffect(() => {
        setBoardData({
            title: productreview?.title,
            contents: productreview?.contents,
            files: [...productreview?.attachFiles || []]
        })
        setRate(productreview?.rating || 0)
    }, [productreview?._id])


    const handleUploadClick = () => {
        hiddenFileInput.current?.click();
    }


    const handleChangeSumbNail = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_: string, data: Ffile) => {
            files.push(data);
            setFiles([...files])
        }
        signleUpload(fileUploaded, onUpload);
    };

    const handleClearThumb = (index: number) => () => {
        files.splice(index, 1);
        setFiles([...files])
    }

    if (!urlProductId) return <Page404 />;
    return <BoardWrite
        useTextarea
        WriteInjection={
            <div>
                <div className="write_type">
                    <div className="title">상품명</div>
                    <div className="input_form">
                        <input readOnly id="title" value={urlProductName} type="text" name="title" className="inputText w100" />
                    </div>
                </div>
                <div className="write_type">
                    <div className="title">평점</div>
                    <div className="input_form">
                        <RatingStar
                            initialRating={rate}
                            onChange={setRate}
                        />
                    </div>
                </div>
                <div className="write_type">
                    <div className="title">썸네일</div>
                    <div className="img_box_add">
                        <ul className="img_add">
                            {files.map((thumb, i) =>
                                <li key={i + "thumb"} className="on_file">{thumb.name}<i onClick={handleClearThumb(i)} className="flaticon-multiply icon_x"></i></li>
                            )}
                            {files.length < 4 && <li id="thumb" onClick={handleUploadClick}>이미지추가<i className="flaticon-add icon_plus"></i></li>}
                            <input onChange={handleChangeSumbNail} ref={hiddenFileInput} hidden type="file" />
                        </ul>
                        <p className="input_form info_txt">- 썸네일 이미지사이즈 720px * 434px</p>
                    </div>
                </div>
            </div>
        }
        boardHook={boardHook}
        key={loadKey + (productreview?._id || "") + urlProductId}
        mode={mode}
        onCancel={handleCancel}
        onCreate={handleCreate}
        onDelete={handleDelete}
        onEdit={handleUpdate}
        onSave={handleTempSave}
        onLoad={handleLoad}
        opens={{
            title: true,
            open: false,
        }}
    />
};




export default auth(ALLOW_LOGINED)(ReviewWrite)