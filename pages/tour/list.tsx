import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import SubTopNav from "layout/components/SubTop";
import { ProductPhotoBlock } from "../../components/list/ProductPhoto";
import BoardList from "../../components/board/List";
import { ProductListBlock } from "../../components/list/ProductList";
import { openListFilter, useProductList } from "../../hook/useProduct";
import { getTypeFilterByUrl, checkIsExp } from "../../utils/product";
import { getStaticPageInfo, Ipage } from "../../utils/page";
import pageInfoDefault from "info/tourList.json";
import { usePageEdit } from "../../hook/usePageEdit";
import { PageEditor } from "../../components/common/PageEditer";
import { categoryList_CategoryList_data } from "../../types/api";
import { AppContext } from "../_app";
import Link from "next/link";
import { getFromUrl } from "../../utils/url";

export const getStaticProps = getStaticPageInfo("tourList");
export const TourList: React.FC<Ipage> = (_pageInfo) => {
    const isExp = checkIsExp();
    const catId = getFromUrl("catId");
    const pageTools = usePageEdit(_pageInfo, pageInfoDefault);
    const { initialFilter: urlInitialFilter } = getTypeFilterByUrl(isExp);
    const { categoriesMap, locale } = useContext(AppContext);
    const [view, setView] = useState<"line" | "gal">("line");
    const {
        items,
        pageInfo,
        setFilter,
        setSort,
        sort,
        filter,
        viewCount,
        setViewCount,
        setPage,
    } = useProductList({
        initialFilter: {
            ...urlInitialFilter,
            ...openListFilter,
            categoryId_eq: catId || undefined,
        },
    });
    const { totalCount } = pageInfo;

    const router = useRouter();

    const handleWrite = () => {
        router.push("/tour/write");
    };

    const handleCatFilter = (catId?: string) => () => {
        setFilter({
            ...filter,
            categoryId_eq: catId,
        });
    };

    const checkCatOn = (cat?: categoryList_CategoryList_data) =>
        cat?._id === filter.categoryId_eq ? "on" : "";

    const subTopInfo = {
        imgKey: isExp ? "exp_subTop_img" : "subTop_img",
        titleKey: isExp ? "exp_subTop_title" : "subTop_title",
        descKey: isExp ? "exp_subTop_desc" : "subTop_desc",
    };

    const cats = isExp ? categoriesMap.TOUR : categoriesMap.TOUR;

    return (
        <div>
            <SubTopNav {...subTopInfo} pageTools={pageTools}>
                <li className="homedeps1">{isExp ? "Experience" : "Tour"}</li>
                <li className="homedeps2">
                    <Link href="/tour/list">
                        <a>{isExp ? "체험목록" : "투어목록"}</a>
                    </Link>
                </li>
            </SubTopNav>
            <PageEditor pageTools={pageTools} />
            <div className="tour_box deal_list">
                <BoardList
                    pageInfo={pageInfo}
                    totalCount={totalCount}
                    Categories={
                        <div className="BoardCategories search">
                            <ul className="BoardCategories__ul">
                                <li
                                    onClick={handleCatFilter(undefined)}
                                    className={
                                        "BoardCategories__li " +
                                        checkCatOn(undefined)
                                    }
                                >
                                    <a>전체보기</a>
                                </li>
                                {cats.map((cat) => (
                                    <li
                                        onClick={handleCatFilter(cat._id)}
                                        key={cat._id}
                                        className={
                                            "BoardCategories__li " +
                                            checkCatOn(cat)
                                        }
                                    >
                                        <a>{cat.localeLabel?.[locale]}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                    setView={setView}
                    setSort={setSort}
                    view={view}
                    setViewCount={setViewCount}
                    sort={sort}
                    setPage={setPage}
                    viewCount={viewCount}
                >
                    {view === "line" && (
                        <div className=" st03 selectViewList">
                            <div className="tbody">
                                <ul className="list_ul  st03">
                                    {items.map((item, i) => (
                                        <ProductListBlock
                                            product={item}
                                            key={item._id}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                    {view === "gal" && (
                        <ul className="list_ul line3">
                            {items.map((item, i) => (
                                <ProductPhotoBlock key={item._id} item={item} />
                            ))}
                        </ul>
                    )}
                </BoardList>
            </div>
        </div>
    );
};

export default TourList;
