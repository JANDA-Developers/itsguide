import React, { useContext, useState } from "react";
import Link from "next/link";
import SubTopNav from "../../../layout/components/SubTop";
import { usePageEdit } from "../../../hook/usePageEdit";
import { getStaticPageInfo, Ipage } from "../../../utils/page";
import defaultPageInfo from "../../../info/qna.json";
import { AppContext } from "../../_app";
import { useRouter } from "next/router";
import { MemberTopNav } from "../../../components/topNav/MemberTopNav";
import { useQnaList } from "../../../hook/useQna";
import { qnaList_QnaList_data } from "../../../types/api";
import { Change } from "../../../components/loadingList/LoadingList";
import { generateClientPaging } from "../../../utils/generateClientPaging";
import { Paginater } from "../../../components/common/Paginator";
import { PageEditor } from "../../../components/common/PageEditer";
import { cn } from "../../../utils/findCatLocaleName";

export const getStaticProps = getStaticPageInfo("qna");
export const Qna: React.FC<Ipage> = (pageInfo) => {
    const { isManager, categoriesMap, myProfile, lang, locale, ln } =
        useContext(AppContext);
    const { items, getLoading } = useQnaList({
        initialViewCount: 999,
        fixingFilter: {
            isOpen_eq: isManager ? undefined : true,
        },
    });
    const [filterCat, setFilterCat] = useState<string>();
    const router = useRouter();
    const pageTools = usePageEdit(pageInfo, defaultPageInfo);
    const [openId, setOpenId] = useState("");

    const gotoWrite = () => {
        router.push("/service/qna/write/");
    };

    const checkCatEq = (catId?: string) => (filterCat === catId ? "on" : "");
    const checkCatCount = (catId: string) =>
        items.filter((item) => item.category?._id === catId).length;

    const handleToogle = (qna: qnaList_QnaList_data) => () => {
        if (openId === qna._id) {
            setOpenId("");
        } else {
            setOpenId(qna._id);
        }
    };

    const handleCatFilter = (catId?: string) => () => {
        setFilterCat(catId);
    };

    const filteredItems = filterCat
        ? items.filter((item) => item.category?._id === filterCat)
        : items;

    const { slice, paging, setPage } = generateClientPaging(
        filteredItems || [],
        10
    );

    return (
        <div>
            <PageEditor pageTools={pageTools} />
            <SubTopNav pageTools={pageTools}>
                <li className="homedeps1">Member</li>
                <li className="homedeps2">
                    <Link href="/service/qna">
                        <a>{ln("frequentQuestion")}</a>
                    </Link>
                </li>
            </SubTopNav>
            <div className="qna_box w1200">
                <MemberTopNav />
                <div className="board_qna board_box">
                    <div className="alignment">
                        <div className="left_div">
                            <ul className="board_option">
                                <li className={checkCatEq(undefined)}>
                                    <a>{ln("all")}</a>
                                </li>
                                {categoriesMap.QNA.map((cat) => (
                                    <li
                                        className={checkCatEq(cat._id)}
                                        onClick={handleCatFilter(cat._id)}
                                        key={cat._id}
                                    >
                                        <a>
                                            {cn(cat.localeLabel, locale)}
                                            <strong>
                                                {checkCatCount(cat._id)}
                                            </strong>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="right_div"></div>
                    </div>
                    <Change change={!getLoading}>
                        {slice.map((qna) => (
                            <div
                                onClick={handleToogle(qna)}
                                key={qna._id}
                                className={`dl ${
                                    openId === qna._id && "active"
                                }`}
                            >
                                <div className="dt">
                                    <span>
                                        <i className="Q"></i>
                                        {qna.category?.label}
                                    </span>
                                    {qna.title}
                                    {isManager && (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                router.push(
                                                    "/service/qna/write/" +
                                                        qna._id
                                                );
                                            }}
                                            type="submit"
                                            className="btn mini ml10"
                                        >
                                            수정하기
                                        </button>
                                    )}

                                    <i className="jandaicon-arr4-bottom"></i>
                                </div>

                                <div className="dd panel-collapse collapse in">
                                    <div className="form">
                                        <i className="A" />
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: qna.contents,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Change>
                </div>

                <div className="tr list_bottom">
                    {isManager && (
                        <button
                            onClick={gotoWrite}
                            type="submit"
                            className="btn medium footer pointcolor"
                        >
                            글쓰기
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Qna;
