import dayjs from "dayjs";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React from "react";
import { useIdSelecter } from "../../hook/useIdSelecter";
import { useBoardControl, useMyBoardList } from "../../hook/useMyBoardList";
import {
    BoardAction,
    BoardType,
    Fuser,
    myBoardList_MyBoardList_data,
    _BoardSort,
} from "../../types/api";
import { boardTypeRedirection } from "../../utils/boardTypeRedirection";
import { isOpenKr } from "../../utils/enumToKr";
import isEmpty from "../../utils/isEmpty";
import { closeModal } from "../../utils/popUp";
import { Paginater } from "../common/Paginator";
import SortSelect from "../common/SortMethod";
import { ViewCount } from "../common/ViewCount";
import { Change } from "../loadingList/LoadingList";

interface IProp {
    user: Fuser;
}

export const BoardModal: React.FC<IProp> = ({ user }) => {
    const { email, name } = user;
    const router = useRouter();
    const [boardControl] = useBoardControl();
    const {
        items: boards,
        pageInfo,
        setPage,
        viewCount,
        setViewCount,
        sort,
        setSort,
        getLoading,
    } = useMyBoardList(
        {},
        {
            overrideVariables: {
                email,
            },
        }
    );
    const { selectAll, selectedIds, toggle, isChecked } = useIdSelecter(
        boards.map((bd) => bd._id)
    );

    const handleBoardChange = (action: BoardAction) => () => {
        const selectedBoards = boards.filter((bd) =>
            selectedIds.includes(bd._id)
        );
        boardControl({
            variables: {
                action,
                targets: selectedBoards.map((sb) => ({
                    id: sb._id,
                    type: sb.boardType,
                })),
            },
        });
    };

    if (!email) return null;
    return (
        <div id="BoardModal" className="popup_bg_full">
            <div className="in_txt master_popup">
                <Link href="/">
                    {" "}
                    <a
                        className="close_icon"
                        onClick={closeModal("#BoardModal")}
                    >
                        <i className="flaticon-multiply"></i>
                    </a>
                </Link>
                <div className="page">
                    <h3>
                        <strong>{name}</strong>님이 작성한 글{" "}
                    </h3>
                    {/* 작성한글 */}
                    <div className="info_page">
                        <div className="alignment">
                            <div className="left_div">
                                <span className="infotxt">
                                    총 <strong>{boards.length}</strong>건
                                </span>
                            </div>
                            <div className="right_div">
                                <SortSelect onChange={setSort} sort={sort}>
                                    {/* <option value={_BoardSort.createdAt_asc}>작성일 &uarr;</option> */}
                                    {/* <option value={_BoardSort.createdAt_desc}>작성일 &darr;</option> */}
                                    <option value={_BoardSort.viewCount_asc}>
                                        조회수 &uarr;
                                    </option>
                                    <option value={_BoardSort.viewCount_desc}>
                                        조회수 &darr;
                                    </option>
                                </SortSelect>
                                <ViewCount
                                    onChange={setViewCount}
                                    value={viewCount}
                                />
                            </div>
                        </div>

                        <div className="board_list_mini ln05">
                            <div className="thead">
                                <div className="tt01 checkbox">
                                    <input
                                        onClick={selectAll}
                                        type="checkbox"
                                        name="agree"
                                        id="agree-popup-0"
                                        title="모두선택"
                                    />
                                    <label htmlFor="agree-popup-0" />
                                </div>
                                <div className="tt02">게시판</div>
                                <div className="tt03">번호</div>
                                <div className="tt04">제목</div>
                                <div className="tt05">날짜</div>
                                <div className="tt06">공개</div>
                            </div>
                            <div className="tbody">
                                <Change change={!getLoading}>
                                    <ul>
                                        {boards.map((board) => (
                                            <li
                                                onClick={() => {
                                                    boardTypeRedirection(
                                                        board.boardType,
                                                        board._id
                                                    );
                                                }}
                                                key={board._id}
                                            >
                                                <div className="tt01 checkbox">
                                                    <i
                                                        onClick={() => {
                                                            toggle(board._id);
                                                        }}
                                                        className="checkbox"
                                                    >
                                                        <input
                                                            checked={isChecked(
                                                                board._id
                                                            )}
                                                            type="checkbox"
                                                            name="agree"
                                                            id="agree0"
                                                            title="전체선택"
                                                        />
                                                        <label htmlFor="agree0" />
                                                    </i>
                                                </div>
                                                <div className="tt02">
                                                    <i className="m_title">
                                                        게시판:
                                                    </i>
                                                    {board.boardType}
                                                </div>
                                                <div className="tt03">
                                                    <i className="m_title">
                                                        조회:
                                                    </i>
                                                    {board.viewCount}
                                                </div>
                                                <div className="tt04">
                                                    <a>
                                                        {board.title}
                                                        <i className="q_ok">
                                                            {
                                                                board.questionStatus
                                                            }
                                                        </i>
                                                    </a>
                                                </div>
                                                <div className="tt05">
                                                    {dayjs(
                                                        board.createdAt
                                                    ).format(
                                                        "YYYY.MM.DD hh:mm"
                                                    )}
                                                </div>
                                                <div className="tt06">
                                                    {isOpenKr(!!board.isOpen)}
                                                </div>
                                            </li>
                                        ))}
                                        {isEmpty(boards) && (
                                            <li className="no_data">
                                                {/*게시글이 없을때*/}
                                                <i className="jandaicon-info3" />
                                                <span>게시글이 없습니다.</span>
                                            </li>
                                        )}
                                    </ul>
                                </Change>
                            </div>
                            <Paginater setPage={setPage} pageInfo={pageInfo} />
                        </div>

                        <div className="fin ifMobile">
                            <div className="float_left">
                                <button
                                    onClick={selectAll}
                                    type="submit"
                                    className="btn medium"
                                >
                                    모두선택
                                </button>
                            </div>
                            <div className="float_right">
                                <button
                                    onClick={handleBoardChange(
                                        BoardAction.delete
                                    )}
                                    type="submit"
                                    className="btn medium mr5"
                                >
                                    삭제
                                </button>
                                <button
                                    onClick={handleBoardChange(
                                        BoardAction.hide
                                    )}
                                    type="submit"
                                    className="btn medium mr5"
                                >
                                    비공개전환
                                </button>
                                <button
                                    onClick={handleBoardChange(
                                        BoardAction.open
                                    )}
                                    type="submit"
                                    className="btn medium"
                                >
                                    공개전환
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
