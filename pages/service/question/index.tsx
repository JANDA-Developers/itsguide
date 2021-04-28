import React, { useContext } from "react";
import Link from "next/link";
<<<<<<< HEAD
import SubTopNav from '../../../layout/components/SubTop';
import { usePageEdit } from '../../../hook/usePageEdit';
import { getStaticPageInfo, Ipage } from '../../../utils/page';
import defaultPageInfo from "../../../info/question.json"
import { useQuestionList } from '../../../hook/useQuestion';
import { questionSatus } from '../../../utils/enumToKr';
import { yyyymmddHHmm } from '../../../utils/yyyymmdd';
import { Paginater } from '../../../components/common/Paginator';
import { useRouter } from 'next/router';
import SearchMini from '../../../components/common/SearchMini';
import { useCustomCount } from '../../../hook/useCount';
import { SingleSortSelect } from '../../../components/common/SortSelect';
import { useSingleSort } from '../../../hook/useSort';
import { ViewCount } from '../../../components/common/ViewCount';
import { questionList_QuestionList_data, QuestionStatus } from '../../../types/api';
import { MemberTopNav } from '../../../components/topNav/MemberTopNav';
import { Change } from '../../../components/loadingList/LoadingList';
import dayjs from 'dayjs';
import { AppContext } from '../../_app';
=======
import SubTopNav from "../../../layout/components/SubTop";
import { usePageEdit } from "../../../hook/usePageEdit";
import { getStaticPageInfo, Ipage } from "../../../utils/page";
import defaultPageInfo from "../../../info/question.json";
import { useQuestionList } from "../../../hook/useQuestion";
import { questionSatus } from "../../../utils/enumToKr";
import { yyyymmdd, yyyymmddHHmm } from "../../../utils/yyyymmdd";
import { Paginater } from "../../../components/common/Paginator";
import { useRouter } from "next/router";
import SearchMini from "../../../components/common/SearchMini";
import { useCustomCount } from "../../../hook/useCount";
import { SingleSortSelect } from "../../../components/common/SortSelect";
import { useSingleSort } from "../../../hook/useSort";
import { ViewCount } from "../../../components/common/ViewCount";
import {
    questionList_QuestionList_data,
    QuestionStatus,
} from "../../../types/api";
import { MemberTopNav } from "../../../components/topNav/MemberTopNav";
import { Change } from "../../../components/loadingList/LoadingList";
import { LockIcon } from "../../../components/common/icon/LockIcon";
import dayjs from "dayjs";
import { AppContext } from "../../_app";
>>>>>>> design

export const getStaticProps = getStaticPageInfo("question");
export const Question: React.FC<Ipage> = (pageInfo) => {
    const router = useRouter();
    const {
        getLoading,
        filter,
        setFilter,
        viewCount,
        setViewCount,
        items: inquiries,
        pageInfo: pagingInfo,
        setPage,
        setOR,
        sort,
        setSort,
    } = useQuestionList();
    const { isManager } = useContext(AppContext);
    const pageTool = usePageEdit(pageInfo, defaultPageInfo);
    const { unAnsweredQuestionCount } = useCustomCount([
        "unAnsweredQuestionCount",
    ]);
    const signleSortHook = useSingleSort(sort, setSort);

    const handleSetFilter = (status?: QuestionStatus) => () => {
        filter.status_eq = status;
        setFilter({ ...filter });
    };

    const handleWrite = () => {
        router.push("/service/question/write");
    };

    const handleSearch = (value: string) => {
        setOR(["no_eq", "title_eq", "code_eq"], value);
    };

    const gotoView = (inq: questionList_QuestionList_data) => () => {
        router.push("/service/question/view/" + inq._id);
    };

    const checkOnStatus = (status?: QuestionStatus) =>
        filter.status_eq === status ? "on" : "";

    return (
        <div>
            <SubTopNav pageTools={pageTool}>
                <li className="homedeps1">Member</li>
                <li className="homedeps2">
                    <Link href="/service/question">
                        <a>고객문의</a>
                    </Link>
                </li>
            </SubTopNav>
            <div className="question_box w1200">
                <MemberTopNav />
                <div className="board_box">
                    <div className="alignment">
                        <div className="left_div">
                            <ul className="board_option">
                                <li
                                    onClick={handleSetFilter(undefined)}
                                    className={checkOnStatus(undefined)}
                                >
                                    <a>전체</a>
                                </li>
                                <li
                                    onClick={handleSetFilter(
                                        QuestionStatus.READY
                                    )}
                                    className={checkOnStatus(
                                        QuestionStatus.READY
                                    )}
                                >
                                    <a>
                                        미답변
                                        <strong>
                                            {unAnsweredQuestionCount}
                                        </strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="right_div">
                            <SingleSortSelect {...signleSortHook} />
                            <ViewCount
                                value={viewCount}
                                onChange={setViewCount}
                            />
                        </div>
                    </div>

                    <div className="board_list st01">
                        <div className="tbody">
                            <Change change={!getLoading}>
                                <ul>
                                    {inquiries.map((inq) => (
                                        <li
                                            onClick={gotoView(inq)}
                                            key={inq._id}
                                        >
                                            <div className="td01">
                                                {inq.product
                                                    ? "상품문의"
                                                    : "일반문의"}
                                            </div>
                                            {/* <div className="td02"><Link href={`/question/view/${inq._id}`}><a>{inq.title} {inq. && <LockIcon />} </a></Link></div> */}
                                            <div className="td03">
                                                {inq.title}
                                                {dayjs(inq.createdAt).isAfter(
                                                    dayjs().add(-8, "hour")
                                                ) && (
                                                    <img
                                                        className="new"
                                                        src="../img/svg/new.svg"
                                                        alt="new"
                                                    />
                                                )}
                                                <i className="q_no">
                                                    {questionSatus(inq.status)}
                                                </i>
                                            </div>
                                            <div className="td04">
                                                {inq.author?.nickName}
                                            </div>
                                            <div className="td05">
                                                {yyyymmddHHmm(inq.createdAt)}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Change>
                        </div>
                    </div>
                    <Paginater pageInfo={pagingInfo} setPage={setPage} />
                    <div className="tr list_bottom">
                        <SearchMini onSubmit={handleSearch} />
                        <button
                            onClick={handleWrite}
                            type="submit"
                            className="btn medium footer pointcolor"
                        >
                            글쓰기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
