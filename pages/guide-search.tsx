import React, { useContext, useEffect, useState } from 'react';
import { Paginater } from '../components/common/Paginator';
import { DayPickerModal } from '../components/dayPickerModal/DayPickerModal';
import { ProductPhotoBlock } from '../components/list/ProductPhoto';
import { openListFilter, useProductList } from '../hook/useProduct';
import isEmpty from '../utils/isEmpty';
import dayjs from "dayjs";
import { filterToRange, rangeToFilter } from '../utils/filter';
import { ProductListBlock } from '../components/list/ProductList';
import { ViewCount } from '../components/common/ViewCount';
import { closeModal, openModal } from '../utils/popUp';
import { ViewSelect } from '../components/common/ViewSelect';
import SubTopNav from '../layout/components/SubTop';
import { integratedProductSearch, integratedUserSearch } from '../utils/genFilter';
import SortSelect from '../components/common/SortMethod';
import { ProductType } from '../types/api';
import { whenEnter } from '../utils/eventValueExtracter';
import { getAllFromUrl, getFromUrl } from '../utils/url';
import pageInfoDefault from "info/search.json";
import { getStaticPageInfo, Ipage } from '../utils/page';
import { usePageEdit } from '../hook/usePageEdit';
import { AppContext } from './_app';
import { PageEditor } from '../components/common/PageEditer';
import { usePublicSellerList } from '../hook/useUser';
import { GuideLine } from '../components/guidLi/GuideLi';
import { Change } from '../components/loadingList/LoadingList';

type TSearchParam = {
    keyward?: string; //라벨
    name?: string;
}

export const guideSearchLink = (param: TSearchParam) => {
    let link = `/guide-search`

    const attach = (key: string, value: string) => {
        if (!link.includes("?")) {
            link = link + "?" + key + "=" + value
            return;
        }
        if (!link.endsWith("&")) {
            link = link + "&" + key + "=" + value
        }
    }

    for (let key in param) {
        // @ts-ignore
        const val = param[key];
        attach(key, val);
    }

    return link;
}

//url 인터페이스 
//판매자::seller=
//
interface IProp { }

export const getStaticProps = getStaticPageInfo("search");
export const GuideSearch: React.FC<Ipage> = (_pageInfo) => {
    const pageTools = usePageEdit(_pageInfo, pageInfoDefault);
    const all = getAllFromUrl<TSearchParam>()
    const { keyward, name } = all;

    const defaultSearch = getFromUrl("search") || keyward || name;
    const initialFilter = {
        ...openListFilter,
        initialFilter: {
            ...integratedUserSearch(defaultSearch),
            keywards_in: keyward ? [keyward] : undefined
        }
    }
    const guideListHook = usePublicSellerList(initialFilter)
    const { items: users, setPage, filter, getLoading, pageInfo, setFilter, sort, setSort, viewCount, setViewCount } = guideListHook;
    const { categoriesMap } = useContext(AppContext);

    const [search, setSearch] = useState(defaultSearch);
    const { totalCount } = pageInfo;

    const onClickKeyward = (keyward?: string) => () => {
        setFilter({
            keywards_in: keyward ? [keyward] : undefined
        })
    }

    const keywardOn = (keyward?: string) => {
        return filter.keywards_in?.includes(keyward) ? "on" : ""
    }

    const reset = () => {
        setFilter({});
    }

    const openDayPicker = () => {
        openModal("#dayPickerModal")()
    }

    const doSearch = () => {
        setFilter(integratedUserSearch(search, filter))
    }


    useEffect(() => {
        if (!keyward) return;
        const target = categoriesMap.GUIDE_KEYWARD.find(_keyward => {
            return keyward?.trim() === _keyward.label?.trim()
        })

        if (target) {
            onClickKeyward(target.label)()
        }
    }, [keyward, categoriesMap.GUIDE_KEYWARD.length])

    const noProduct = isEmpty(users);
    return <div className="guideSearch">
        <SubTopNav pageTools={pageTools} >
            <li className="homedeps1">Member</li>
            <li className="homedeps2">
                <a href="/">가이드검색</a>
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
                    <div className="jul3">
                        <div className="title">키워드</div>
                        <div className="guideSearch__keywards in">
                            <span onClick={onClickKeyward(undefined)} className={`check ${keywardOn()}`}>전국</span>
                            {categoriesMap.GUIDE_KEYWARD.map(keyward =>
                                <span key={keyward._id} onClick={onClickKeyward(keyward.label)} className={`check ${keywardOn(keyward.label)}`}>{keyward.label}</span>
                            )}
                        </div>
                    </div>
                    <div className="jul1">
                        <div className="srearch__input search_div">
                            <input onKeyPress={whenEnter(doSearch)} onChange={(e) => {
                                setSearch(e.currentTarget.value);
                            }} value={search} type="text" placeholder="검색 내용을 입력해주세요." />
                            <div onClick={doSearch} className="svg_img">
                                <img src="/img/svg/search_icon.svg" alt="search icon" />
                                <button />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Change change={!getLoading}>
                <div className="con_bottom">
                    {isEmpty(users) &&
                        <div className="alignment2">
                            <div className="left_div">총 <strong>{totalCount}</strong>건의 검색결과가 있습니다.</div>
                        </div>
                    }
                    <div id="ProductViewer" className="con_box">
                        <div className="alignment">
                            <div className="left_div">
                                <h5>가이드인원<strong>{totalCount}</strong></h5>
                            </div>
                            <div className="right_div">
                                <SortSelect onChange={setSort} sort={sort} />
                                <ViewCount value={viewCount} onChange={setViewCount} />
                            </div>
                        </div>

                        {/*검색결과가 없을때*/}
                        {noProduct && <div className="no_search">
                            <i className="jandaicon-info3" />
                            <div>검색결과 없음</div>
                        </div>}
                        {/*리스트로 보기*/}
                        <div className="list selectViewList">
                            <ul className="list_ul">
                                {users.map(guide =>
                                    <GuideLine guide={guide} key={guide._id} />
                                )}
                            </ul>
                        </div>
                        <Paginater setPage={setPage} pageInfo={pageInfo} />
                    </div>
                </div>
            </Change>
        </div>
        <DayPickerModal defaultRange={filterToRange(filter, "startDate")} onSubmit={(range) => {
            closeModal("#dayPickerModal")()
            const data = rangeToFilter(range, "startDate")
            setFilter({
                ...filter,
                ...data,
            })
        }} />
    </div>
}


export default GuideSearch