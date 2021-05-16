import React, { useRef, useState } from "react";
// import { Iitineraries } from "../TourWrite";
import dayjs from "dayjs";
import { ItineraryCreateInput } from "../../types/api";
import { ISet } from "types/interface";
import dynamic from "next/dynamic";
import { LoadEditor } from "../edit/EdiotrLoading";
const Editor = LoadEditor();

interface IProp {
    selectEditorIndex: {
        itsIndex: number;
        contentIndex: number;
    };
    setSelectEditorIndex: React.Dispatch<
        React.SetStateAction<{
            itsIndex: number;
            contentIndex: number;
        }>
    >;
    its: ItineraryCreateInput[];
    itinery: ItineraryCreateInput;
    setits: ISet<any[]>;
    index: number;
}

export const ItineryForm: React.FC<IProp> = ({
    selectEditorIndex,
    setSelectEditorIndex,
    itinery,
    its,
    setits,
    index,
}) => {
    const handleAddContent = () => {
        itinery.contents = [...(itinery.contents || []), ""];
        setits([...its]);
    };

    const handleDeleteImg = (index: number) => () => {
        itinery.images?.splice(index, 1);
        setits([...its]);
    };

    const handleDeleteContent = (index: number) => () => {
        itinery.contents?.splice(index, 1);
        setits([...its]);
    };

    const handleEditContent = (_index: number) => () => {
        setSelectEditorIndex({
            contentIndex: _index,
            itsIndex: index,
        });
    };

    const handleOnChange = (i: number) => (value: string) => {
        if (typeof itinery.contents?.[index] === undefined) return;
        itinery.contents![i] = value;
        setits([...its]);
    };

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        itinery.title = e.currentTarget.value;
        setits([...its]);
    };

    const lastOrSingle = (index: number) => {
        if (!itinery.contents) return;
        return (
            index === itinery.contents.length - 1 ||
            itinery.contents.length === 1
        );
    };

    const single = its.length === 1;

    return (
        <div className="day_tap">
            <div className="texta_title">
                <input
                    type="text"
                    className="input_01"
                    onChange={handleTitle}
                    value={itinery.title}
                    placeholder={single ? "OO체험" : `${index + 1}일차`}
                />
                <input
                    readOnly
                    type="text"
                    className="input_02"
                    value={dayjs(itinery.date).format("YYYY.MM.DD (ddd)")}
                />
            </div>
            {itinery.contents?.map((content, contentIndex) => (
                <div key={`${contentIndex}${index}content`}>
                    <Editor
                        holderHeight={150}
                        edit={
                            index === selectEditorIndex.itsIndex &&
                            selectEditorIndex.contentIndex === contentIndex
                        }
                        placeholder={
                            "타임라인은 시간별로 일정을 입력하셔야 합니다. 사진은 너무 크지 않게 넣어주세요. 일정은 한눈에 보여야합니다."
                        }
                        onClick={handleEditContent(contentIndex)}
                        className="itinerary__editor"
                        onChange={handleOnChange(contentIndex)}
                        key={"initeryFrom__content" + contentIndex}
                        data={content}
                    />

                    <button
                        onClick={handleDeleteContent(contentIndex)}
                        className="comment_btn mini elimination"
                    >
                        일정삭제
                    </button>
                    {lastOrSingle(contentIndex) && (
                        <button
                            onClick={handleAddContent}
                            className="comment_btn mini add"
                        >
                            일정추가
                        </button>
                    )}
                    <p className="input_form info_txt gray_font mb20">
                        <i className="jandaicon-info2 mini" />{" "}
                        타임라인(스케줄)은 시간 단위로 입력하셔야 합니다. 시간
                        단위로 입력을 하시고 "일정추가"를 클릭하셔서 다음
                        시간대의 일정을 입력해주세요.(스케줄 외의 내용은
                        2.안내및참고에 게시하기) <br /> 사진은 너무 큰 것은 넣지
                        마세요. 작게 줄이거나 포토샵을 하셔서 합쳐서 올려주세요.
                    </p>
                </div>
            ))}
            <div>
                {itinery?.images?.map((img, i) => (
                    <div key={i + "img" + index} className="initrary__img">
                        <img
                            style={{
                                height: "100px",
                            }}
                            src={img.uri}
                        />
                        <i
                            onClick={handleDeleteImg(i)}
                            className="flaticon-multiply icon_x"
                        ></i>
                    </div>
                ))}
            </div>
        </div>
    );
};
