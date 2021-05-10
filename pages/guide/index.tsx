import { Meta } from "components/common/meta/Meta";
import Link from "next/link";
import React, { useContext } from "react";
import { GoodsListAPI } from "../../components/common/GoodsListAPI";
import { getStaticPageInfo, Ipage } from "utils/page";
import { usePageEdit } from "../../hook/usePageEdit";
import defaultPageInfo from "../../info/guideMain.json";
import {
    ProfileListAPI,
    ProfileListAPIwithGoods,
} from "../../components/common/ProfileListAPI";
import { PageEditor } from "../../components/common/PageEditer";
import { CloseIcon } from "../../components/common/icon/CloseIcon";
import { AppContext } from "../_app";
import { Bg } from "../../components/Img/Img";
import { guideSearchLink } from "../guide-search";

export const getStaticProps = getStaticPageInfo("guideMain");
export const GuideMain: React.FC<Ipage> = (pageInfo) => {
    const { groupsMap, ln, lang, categoriesMap, locale } = useContext(
        AppContext
    );
    const pageTools = usePageEdit(pageInfo, defaultPageInfo);
    const {
        imgEdit,
        edit,
        bg,
        get,
        addArray,
        removeArray,
        imgKit,
        editMode,
        page,
    } = pageTools;

    // const { items } = useProductList({ initialPageIndex: 1, initialViewCount: 8 });
    // const { imgEdit, edit, bg } = useContext<IEditPage<typeof pageInfoDefault>>(EditContext as any);
    // const router = useRouter()

    return (
        <div>
            <Meta />
            <PageEditor pageTools={pageTools} />
            {/* <SubTopNav title="temp" desc="temp" >
            <li className="homedeps1">
                <Link href="/tour/main?exp=true">
                    <a>It's가이드</a>
                </Link>
            </li>
        </SubTopNav> */}

            <div className="guide_box">
                <div className="w100">
                    <Bg
                        className="guide_top_bn w100"
                        {...imgKit("guideMain_bg")}
                    >
                        <div className="w1200">
                            <div className="txt">
                                <h3 {...edit("guideMain_top_title")} />
                                <span {...edit("guideMain_top_subtitle")} />
                                <ul className="btn_list">
                                    {categoriesMap.GUIDE_KEYWARD.map(
                                        (val, i) => (
                                            <li key={`guideMain_topBtns${i}`}>
                                                <Link
                                                    href={guideSearchLink({
                                                        keyward:
                                                            val.localeLabel[
                                                                locale
                                                            ],
                                                    })}
                                                >
                                                    <a className="guid_topBtn__btn">
                                                        <span
                                                            className="guid_topBtn__title"
                                                            {...edit(
                                                                "guideMain_topBtns",
                                                                i
                                                            )}
                                                        />
                                                        {editMode && (
                                                            <CloseIcon
                                                                className="guid_topBtn__close"
                                                                onClick={() => {
                                                                    removeArray(
                                                                        "guideMain_topBtns",
                                                                        i
                                                                    );
                                                                }}
                                                            />
                                                        )}
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    )}
                                    <li>
                                        <Link href="/guide">
                                            <a {...edit("topBtn_seeAll")} />
                                        </Link>
                                    </li>
                                    {editMode && (
                                        <li
                                            onClick={() => {
                                                const val = prompt(
                                                    "값을 입력해 주세요."
                                                );
                                                if (val) {
                                                    addArray(
                                                        "guideMain_topBtns",
                                                        val
                                                    );
                                                }
                                            }}
                                        >
                                            <a>추가하기</a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </Bg>

                    <div className="guide_content w1200">
                        <div className="con01">
                            {/* <div className="top_txt">
                            <h2><span {...edit("guideMain01_subtitle")} /></h2>
                            <strong {...edit("guideMain01_title")} />
                        </div> */}
                            <ProfileListAPI mode="short" />
                        </div>
                        <div className="con02">
                            <div className="deal_list">
                                <div className="alignment">
                                    <div className="left_div">
                                        <h2>
                                            <span
                                                {...edit("goods_list1_title")}
                                            />
                                        </h2>
                                    </div>
                                    <div className="right_div">
                                        <span className="goto_page">
                                            <Link href="/">
                                                <a>
                                                    {ln("gotoList")}
                                                    <i className="flaticon-menu-1"></i>
                                                </a>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                                <GoodsListAPI
                                    initialOption={{
                                        initialViewCount: 4,
                                        fixingFilter: {
                                            lang_eq: lang,
                                        },
                                        initialFilter: {
                                            _id_in: groupsMap.guideMain1,
                                        },
                                    }}
                                />
                            </div>
                            <div className="deal_list">
                                <div className="alignment">
                                    <div className="left_div">
                                        <h2>
                                            <span
                                                {...edit("goods_list2_title")}
                                            />
                                        </h2>
                                    </div>
                                    <div className="right_div">
                                        <span className="goto_page">
                                            <Link href="../sub/tour_list.html">
                                                <a>
                                                    {ln("gotoList")}
                                                    <i className="flaticon-menu-1"></i>
                                                </a>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                                <GoodsListAPI
                                    initialOption={{
                                        initialViewCount: 4,
                                        fixingFilter: {
                                            lang_eq: lang,
                                        },
                                        initialFilter: {
                                            _id_in: groupsMap.guideMain2,
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="main_con_box5">
                        <div className="w1200">
                            <div className="txt">
                                <div className="alignment">
                                    <div className="left_div">
                                        <h2>
                                            GUIDE
                                            <span
                                                {...edit(
                                                    "guideMain05_subtitle"
                                                )}
                                            />
                                        </h2>
                                    </div>
                                    <div className="right_div">
                                        <span className="goto_page">
                                            <Link href="/">
                                                <a>
                                                    {ln("gotoList")}
                                                    <i className="flaticon-menu-1"></i>
                                                </a>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <ProfileListAPIwithGoods />
                        </div>
                    </div>

                    <div className="main_con_box7">
                        <div className="box01">
                            <div className="w1200">
                                <span
                                    className="sidetxt"
                                    {...edit("guideMain07_subtitle")}
                                />
                                <h2>
                                    <span {...edit("guideMain07_title")} />
                                </h2>
                                <div className="link">
                                    <Link href="/member/join">
                                        <a {...edit("guideMain07_link")} />
                                    </Link>
                                </div>
                            </div>
                            <div className="ovj" {...edit("guideMain07_ovj")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideMain;
