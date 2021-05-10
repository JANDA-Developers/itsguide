import { Meta } from "components/common/meta/Meta";
import SubTopNav from "layout/components/SubTop";
import Link from "next/link";
import React, { useContext } from "react";
import { InferGetStaticPropsType } from "next";
import { AppContext } from "../_app";
import { getStaticPageInfo, Ipage } from "../../utils/page";
import { checkIsExp } from "../../utils/product";
import { TourMainBoard } from "../../components/tour/TourMainBoard";
import pageInfoDefault from "info/tourMain.json";
import { usePageEdit } from "../../hook/usePageEdit";
import { useHomepage } from "../../hook/useHomepage";
import { useGroupList } from "../../hook/useGroup";
import isEmpty from "../../utils/isEmpty";
import { GoodsListAPI } from "../../components/common/GoodsListAPI";
import { PageEditor } from "../../components/common/PageEditer";
import { Bg, Img } from "../../components/Img/Img";
import { A } from "../../components/A/A";
import { LinkRoundIcon } from "../../components/common/icon/LinkIcon";
import { GoodsListTable } from "../../components/common/GoodListTable";
import { useRouter } from "next/router";
import { openListFilter } from "../../hook/useProduct";
import { getFromUrl } from "../../utils/url";
import OnImagesLoaded from "../../components/onImageLoad/OnImageLoad";

interface IProp extends InferGetStaticPropsType<typeof getStaticProps> {}

export const getStaticProps = getStaticPageInfo("tourMain");
export const TourMain: React.FC<Ipage> = (pageInfo) => {
    const isExp = checkIsExp();
    const { data } = useHomepage();
    const pageTools = usePageEdit(pageInfo, pageInfoDefault);
    const { categoriesMap, isSeller, groupsMap, ln, lang } = useContext(
        AppContext
    );
    const cats = categoriesMap?.TOUR || [];
    const { editMode, page, linkEdit, imgKit, edit, get } = pageTools;
    const router = useRouter();

    const handleLink = (key: keyof typeof page) => () => {
        const link = get(key);
        if (!link) return;
        if (link.icnludes("http")) {
            location.href = link;
        } else if (!editMode) {
            // @ts-ignore
            router.push(get(key));
        }
    };

    // searchData로 이동하는 로직 (Tap, 로컬축제)

    const scrollMoveTo = () => {
        const tabBtn = document?.getElementById("localFestival");
        const GoodsListTable = document?.getElementById("GoodsListTable");
        // hack 코드 로컬축제 라는 키워드에 관해서
        const searchData = getFromUrl("searchData");
        const localFestival = ["로컬축제", "Local Festival", "...", "..."];
        if (searchData) {
            GoodsListTable?.scrollIntoView({
                behavior: "auto",
                block: "center",
            });
            tabBtn?.click();
        } //hack 이부분 이 있으면 로컬 축제검색으로 가정함. //
    };
    if (!data) return null;
    return (
        <div>
            <OnImagesLoaded onTimeout={scrollMoveTo} onLoaded={scrollMoveTo}>
                <Meta />
                <PageEditor pageTools={pageTools} />
                <SubTopNav pageTools={pageTools}>
                    <li className="homedeps1">
                        <Link href="/tour">
                            <a>{ln("itstour")}</a>
                        </Link>
                    </li>
                </SubTopNav>
                <div className="in ">
                    <div className="itstour_box">
                        <div className="w1200">
                            <div className="theme_deal">
                                <ul>
                                    <Bg
                                        onClick={handleLink(
                                            "m_06_link01_bgimg_link"
                                        )}
                                        {...imgKit("m_06_link01_bgimg")}
                                        tag="li"
                                        className="top_01"
                                    >
                                        <A
                                            className="m_06_link__linker"
                                            {...linkEdit(
                                                "m_06_link01_bgimg_link"
                                            )}
                                            editComponent={<LinkRoundIcon />}
                                        />
                                        <div className="theme_deal__textBox">
                                            <span
                                                className="first"
                                                {...edit("m_06_link01_text")}
                                            />
                                            <br />
                                            <span
                                                className="tag"
                                                {...edit("m_06_link01_tage")}
                                            />
                                        </div>
                                    </Bg>
                                    <Bg
                                        onClick={handleLink(
                                            "m_06_link02_bgimg_link"
                                        )}
                                        {...imgKit("m_06_link02_bgimg")}
                                        tag="li"
                                        className="top_02"
                                    >
                                        <A
                                            className="m_06_link__linker"
                                            {...linkEdit(
                                                "m_06_link02_bgimg_link"
                                            )}
                                            editComponent={<LinkRoundIcon />}
                                        />
                                        <div className="theme_deal__textBox">
                                            <span
                                                className="title"
                                                {...edit("m_06_link02_text")}
                                            />
                                        </div>
                                    </Bg>
                                    <Bg
                                        onClick={handleLink(
                                            "m_06_link03_bgimg_link"
                                        )}
                                        {...imgKit("m_06_link03_bgimg")}
                                        tag="li"
                                        className="top_03"
                                    >
                                        <A
                                            className="m_06_link__linker"
                                            {...linkEdit(
                                                "m_06_link03_bgimg_link"
                                            )}
                                            editComponent={<LinkRoundIcon />}
                                        />
                                        <div className="theme_deal__textBox">
                                            <span
                                                className="title"
                                                {...edit("m_06_link03_text")}
                                            />
                                        </div>
                                    </Bg>
                                    <Bg
                                        onClick={handleLink(
                                            "m_06_link04_bgimg_link"
                                        )}
                                        {...imgKit("m_06_link04_bgimg")}
                                        tag="li"
                                        className="top_04"
                                    >
                                        <A
                                            className="m_06_link__linker"
                                            {...linkEdit(
                                                "m_06_link04_bgimg_link"
                                            )}
                                            editComponent={<LinkRoundIcon />}
                                        />
                                        <div className="theme_deal__textBox">
                                            <span
                                                className="title"
                                                {...edit("m_06_link04_text")}
                                            />
                                        </div>
                                    </Bg>
                                    <Bg
                                        onClick={handleLink(
                                            "m_06_link05_bgimg_link"
                                        )}
                                        {...imgKit("m_06_link05_bgimg")}
                                        tag="li"
                                        className="top_05"
                                    >
                                        <A
                                            className="m_06_link__linker"
                                            {...linkEdit(
                                                "m_06_link05_bgimg_link"
                                            )}
                                            editComponent={<LinkRoundIcon />}
                                        />
                                        <div className="theme_deal__textBox">
                                            <span
                                                className="title"
                                                {...edit("m_06_link05_text")}
                                            />
                                        </div>
                                    </Bg>
                                    <Bg
                                        onClick={handleLink(
                                            "m_06_link06_bgimg_link"
                                        )}
                                        {...imgKit("m_06_link06_bgimg")}
                                        tag="li"
                                        className="top_06"
                                    >
                                        <A
                                            className="m_06_link__linker"
                                            {...linkEdit(
                                                "m_06_link06_bgimg_link"
                                            )}
                                            editComponent={<LinkRoundIcon />}
                                        />
                                        <div className="theme_deal__textBox">
                                            <span
                                                className="title"
                                                {...edit("m_06_link06_text")}
                                            />
                                        </div>
                                    </Bg>
                                </ul>
                            </div>

                            <div className="deal_list mt30">
                                <div className="alignment">
                                    <div className="left_div">
                                        <h4>
                                            <span
                                                {...edit("goods_list1_title")}
                                            />
                                        </h4>
                                    </div>
                                    <div className="right_div">
                                        <span className="goto_page">
                                            <Link href="tour/list">
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
                                            _id_in: groupsMap.tourMain1,
                                        },
                                    }}
                                />
                            </div>

                            <div className="deal_list mt30">
                                <div className="alignment">
                                    <div className="left_div">
                                        <h4>
                                            <span
                                                {...edit("goods_list2_title")}
                                            />
                                        </h4>
                                    </div>
                                    <div className="right_div">
                                        <span className="goto_page">
                                            <Link href="tour/list">
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
                                            _id_in: groupsMap.tourMain2,
                                        },
                                    }}
                                />
                            </div>

                            <div className="goods_box">
                                <div className="w1200">
                                    <div className="bn_box line2">
                                        <Img
                                            className="banner"
                                            onClick={handleLink(
                                                "banner1__link"
                                            )}
                                            {...imgKit("banner1")}
                                        >
                                            <A
                                                {...linkEdit("banner1__link")}
                                                editComponent={
                                                    <LinkRoundIcon />
                                                }
                                            />
                                        </Img>
                                        <Img
                                            className="banner"
                                            onClick={handleLink(
                                                "banner2__link"
                                            )}
                                            {...imgKit("banner2")}
                                        >
                                            <A
                                                {...linkEdit("banner2__link")}
                                                editComponent={
                                                    <LinkRoundIcon />
                                                }
                                            />
                                        </Img>
                                    </div>
                                    {/* {cats.map(cat =>
                                <TourMainBoard key={cat._id} cat={cat} />
                            )} */}
                                </div>
                            </div>
                            <GoodsListTable />
                            {isSeller && (
                                <button
                                    type="submit"
                                    className="sum btn"
                                    onClick={() => {
                                        router.push("/tour/write/");
                                    }}
                                >
                                    등록
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </OnImagesLoaded>
        </div>
    );
};

export default TourMain;
