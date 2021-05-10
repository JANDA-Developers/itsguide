import React, { useContext, useState } from "react";
import { Paginater } from "../components/common/Paginator";
import { DayPickerModal } from "../components/dayPickerModal/DayPickerModal";
import { ProductPhotoBlock } from "../components/list/ProductPhoto";
import { openListFilter, useProductList } from "../hook/useProduct";
import isEmpty from "../utils/isEmpty";
import dayjs from "dayjs";
import { filterToRange, rangeToFilter } from "../utils/filter";
import { ProductListBlock } from "../components/list/ProductList";
import { ViewCount } from "../components/common/ViewCount";
import { closeModal, openModal } from "../utils/popUp";
import { ViewSelect } from "../components/common/ViewSelect";
import SubTopNav from "../layout/components/SubTop";
import { integratedProductSearch } from "../utils/genFilter";
import SortSelect from "../components/common/SortMethod";
import { ProductType, _ProductFilter } from "../types/api";
import { whenEnter } from "../utils/eventValueExtracter";
import { getAllFromUrl, getFromUrl } from "../utils/url";
import pageInfoDefault from "info/search.json";
import { getStaticPageInfo, Ipage } from "../utils/page";
import { usePageEdit } from "../hook/usePageEdit";
import { AppContext } from "./_app";
import { PageEditor } from "../components/common/PageEditer";
import { Change } from "../components/loadingList/LoadingList";
import { removeSpecialChar } from "../utils/formatter";
import Link from "next/link";

type TSearchParam = {
    authorNick?: string;
    regionLabel?: string;
    keyward?: string;
    title?: string;
};

export const tourSearchLink = (param: TSearchParam) => {
    let link = `/search`;

    const attach = (key: string, value: string) => {
        if (!link.includes("?")) {
            link = link + "?" + key + "=" + removeSpecialChar(value);
            return;
        }
        if (!link.endsWith("&")) {
            link = link + "&" + key + "=" + removeSpecialChar(value);
        }
    };

    for (let key in param) {
        // @ts-ignore
        const val = param[key];
        attach(key, val);
    }

    return link;
};

//url 인터페이스
//판매자::seller=
//
interface IProp {}

export const getStaticProps = getStaticPageInfo("search");
export const Search: React.FC<Ipage> = (_pageInfo) => {
    const { locale } = useContext(AppContext);
    const pageTools = usePageEdit(_pageInfo, pageInfoDefault);
    const all = getAllFromUrl<TSearchParam>();
    const { keyward, title, regionLabel, authorNick } = all;
    const defaultUrlSearch = authorNick || keyward || title;
    const initialFilter = {
        ...openListFilter,
        initialFilter: {
            ...integratedProductSearch(defaultUrlSearch),
            regionLabel_eq: regionLabel || undefined,
        },
    };

    const productListHook = useProductList(initialFilter);
    const {
        items: products,
        setPage,
        filter,
        getLoading,
        pageInfo,
        setFilter,
        sort,
        setSort,
        viewCount,
        setViewCount,
    } = productListHook;
    const { categoriesMap } = useContext(AppContext);

    const [view, setView] = useState<"line" | "gal">("line");
    const [search, setSearch] = useState(defaultUrlSearch);
    const { totalCount } = pageInfo;

    const onClickDistrict = (regionLabel?: string) => () => {
        setFilter({
            regionLabel_eq: regionLabel,
        });
    };

    const districtOn = (region?: string) => {
        return filter.regionLabel_eq === region ? "on" : "";
    };

    const handleTypeFilter = (type?: ProductType) => () => {
        setFilter({
            type_eq: type,
        });
    };

    const typeOn = (type?: ProductType) => {
        return filter.type_eq === type ? "on" : "";
    };

    const reset = () => {
        setFilter({});
    };

    const openDayPicker = () => {
        openModal("#dayPickerModal")();
    };

    const doSearch = () => {
        setFilter(integratedProductSearch(search, filter));
    };

    const filterStart = filter.startDate_gte
        ? dayjs(filter.startDate_gte).format("YYYY.MM.DD")
        : "";
    const filterEnd = filter.startDate_lte
        ? dayjs(filter.startDate_lte).format("YYYY.MM.DD")
        : "";

    const noProduct = isEmpty(products);
    return (
        <div>
            <SubTopNav pageTools={pageTools}>
                <li className="homedeps1">Member</li>
                <li className="homedeps2">
                    <Link href="/">
                        <a>상품검색</a>
                    </Link>
                </li>
            </SubTopNav>
            <PageEditor pageTools={pageTools} />
            <div className="search_in w1200">
                <div className="con_top">
                    <h4>상세검색</h4>
                    <div className="search_box">
                        <div className="jul0">
                            <span onClick={reset}>검색조건 초기화</span>
                        </div>
                        <div className="jul2">
                            <div className="title">유형</div>
                            <div className="in">
                                <span className={`check ${typeOn()}`}>ALL</span>
                                <span
                                    onClick={handleTypeFilter(ProductType.TOUR)}
                                    className={`check ${typeOn(
                                        ProductType.TOUR
                                    )}`}
                                >
                                    여행
                                </span>
                            </div>
                        </div>
                        <div className="jul3">
                            <div className="title">지역</div>
                            <div className="in">
                                <span
                                    onClick={onClickDistrict()}
                                    className={`check ${districtOn()}`}
                                >
                                    전국
                                </span>
                                {categoriesMap.REGION.map((region) => (
                                    <span
                                        key={region._id}
                                        onClick={onClickDistrict(region.label)}
                                        className={`check ${districtOn(
                                            region.label
                                        )}`}
                                    >
                                        {region.localeLabel?.[locale]}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="jul4">
                            <div className="title">날짜</div>
                            <div className="in">
                                <div className="inf">
                                    <input
                                        value={filterStart}
                                        onFocus={openDayPicker}
                                        type="text"
                                        className="day"
                                    />
                                    <span
                                        onClick={openDayPicker}
                                        className="calendar"
                                    >
                                        <img
                                            src="/img/svg/CalendarIcon.svg"
                                            className="svg_calendar"
                                        />
                                    </span>
                                </div>
                                <div className="ovj">~</div>
                                <div className="inf">
                                    <input
                                        value={filterEnd}
                                        onFocus={openDayPicker}
                                        type="text"
                                        className="day"
                                    />
                                    <span
                                        onClick={openDayPicker}
                                        className="calendar"
                                    >
                                        <img
                                            src="/img/svg/CalendarIcon.svg"
                                            className="svg_calendar"
                                        />
                                        <button />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="jul1">
                            <div className="srearch__input search_div">
                                <input
                                    onKeyPress={whenEnter(doSearch)}
                                    onChange={(e) => {
                                        setSearch(e.currentTarget.value);
                                    }}
                                    value={search}
                                    type="text"
                                    placeholder="검색 내용을 입력해주세요."
                                />
                                <div onClick={doSearch} className="svg_img">
                                    <img
                                        src="/img/svg/search_icon.svg"
                                        alt="search icon"
                                    />
                                    <button />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Change change={!getLoading}>
                    <div className="con_bottom">
                        {isEmpty(products) && (
                            <div className="alignment2">
                                <div className="left_div">
                                    총 <strong>{totalCount}</strong>건의
                                    검색결과가 있습니다.
                                </div>
                            </div>
                        )}

                        <div id="ProductViewer" className="con_box">
                            <div className="alignment">
                                <div className="left_div">
                                    <h5>
                                        여행상품<strong>{totalCount}</strong>
                                    </h5>
                                </div>
                                <div className="right_div">
                                    <SortSelect
                                        onChange={setSort}
                                        sort={sort}
                                    />
                                    <ViewCount
                                        value={viewCount}
                                        onChange={setViewCount}
                                    />
                                    <ViewSelect
                                        select={view}
                                        onChange={setView}
                                    />
                                </div>
                            </div>

                            {/*검색결과가 없을때*/}
                            {noProduct && (
                                <div className="no_search">
                                    <i className="jandaicon-info3" />
                                    <div>검색결과 없음</div>
                                </div>
                            )}
                            {/*리스트로 보기*/}
                            {view === "line" && (
                                <div className="list selectViewList">
                                    <ul className="list_ul">
                                        {products.map((product) => (
                                            <ProductListBlock
                                                key={product._id}
                                                product={product}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {/*이미지로 보기*/}
                            {view === "gal" && (
                                <div className="list selectViewImg">
                                    <ul className="list_ul line3">
                                        {products.map((product) => (
                                            <ProductPhotoBlock
                                                key={product._id}
                                                item={product}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <Paginater setPage={setPage} pageInfo={pageInfo} />
                        </div>
                    </div>
                </Change>
            </div>
            <DayPickerModal
                defaultRange={filterToRange(filter, "startDate")}
                onSubmit={(range) => {
                    closeModal("#dayPickerModal")();
                    const data = rangeToFilter(range, "startDate");
                    setFilter({
                        ...filter,
                        ...data,
                    });
                }}
            />
        </div>
    );
};

export default Search;
