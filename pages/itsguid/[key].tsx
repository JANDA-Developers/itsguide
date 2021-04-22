import React, { useContext, useEffect, useState } from "react";
import { usePageEdit } from "../../hook/usePageEdit";
import { usePageInfoRead, useSellerFindByKey } from "../../hook/usePageInfo";
import ITS_GUIDE_INFO from "../../info/itsGuide";
import { Ipage } from "../../utils/page";
import { Bg } from "../../components/Img/Img";
import { autoComma, deepCopy, IselectedOption } from "../../utils/formatter";
import { PageEditor } from "../../components/common/PageEditer";
import isEmpty from "../../utils/isEmpty";
import dynamic from "next/dynamic";
import { Paginater } from "../../components/common/Paginator";
import { generateClientPaging } from "../../utils/generateClientPaging";
import { NoData } from "../../components/common/NoData";
import { Modal } from "../../components/modal/Modal";
import { closeModal, openModal } from "../../utils/popUp";
import { SHARE } from "../../css/component/Share";
import {
    Ffile,
    sellerFindByKey_SellerFindByKeyPublic_data,
} from "../../types/api";
import { Router, useRouter } from "next/router";
import { AppContext } from "../_app";
import Link from "next/link";
import { BG, BGprofile } from "../../types/const";
import { tourSearchLink } from "../search";
import { guideSearchLink } from "../guide-search";
import { useUserUpdate } from "../../hook/useUser";
import { omits } from "../../utils/omit";
import { KeywardSelecter } from "../../components/keywardSelecter/KeywardSelecter";
import { LoadEditor } from "../../components/edit/EdiotrLoading";
const Editor = LoadEditor();

//URL 링크
//guideTag=
//seller=
//리팩토링
// 1 Wrap 패턴으로 예외상황 처리 분리하기
// 2. l edit setLng 등 문서정리

interface IGudeProfilePage extends Ipage {
    guideData: sellerFindByKey_SellerFindByKeyPublic_data;
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {

//     const guideData = await userFindByKey("_id", key as string);
//     const { data: homepage } = await useHomepageServerSide();
//     console.timeEnd("SSR");

//     return {
//         props: {
//             pageKey: key,
//             guideData: guideData.data,
//             pageInfo: data?.value || {},
//             homepage,
//         },
//     }
// }

export const ItsGuideWrap = () => {
    const router = useRouter();
    const key = router.query.key as string | undefined;

    const { item: pageData } = usePageInfoRead(key);
    const { data: guideData } = useSellerFindByKey({
        variables: { key: "_id", value: key },
    });

    const wrapProp: any = {
        pageKey: key,
        guideData,
        pageInfo: pageData?.value,
    };

    if (!guideData) return null;
    return <ItsGuide key={pageData?._id} {...wrapProp} />;
};

const ItsGuide: React.FC<IGudeProfilePage> = (pageInfo) => {
    const { guideData } = pageInfo;
    const { isManager, myProfile, categoriesMap } = useContext(AppContext);
    const router = useRouter();
    const { query, push, reload, locale } = router;

    const key = query.key;
    const myId = myProfile?._id;
    const isMypage = isManager || myId === key;
    const [profile, setProfile] = useState(deepCopy(guideData));

    const filteredKeywards = categoriesMap.GUIDE_KEYWARD.filter((key) => {
        return profile.keywards?.includes(key.label);
    });

    const pageTools = usePageEdit(
        { ...pageInfo, locale, changeKeyFlag: true },
        ITS_GUIDE_INFO
    );
    const {
        edit,
        set,
        arrayImgKit,
        addArray,
        removeArray,
        editMode,
        page,
        get,
        bg,
        lang,
        imgKit,
        linkEdit,
        src,
        originPage,
    } = pageTools;

    const { slice, setPage, paging } = generateClientPaging(
        guideData.products || [],
        8
    );

    const handleOpenLangModal = () => {
        openModal("#LangModal")();
    };

    const keywardsOps: IselectedOption[] = filteredKeywards.map((key) => ({
        _id: key._id,
        label: key.label,
    }));

    const handleLang = (lang: "kr" | "GB" | "JP" | "CH") => () => {
        let locale = "ko";
        if (lang === "GB") {
            locale = "en";
        }
        if (lang === "JP") {
            locale = "ja";
        }
        if (lang === "CH") {
            locale = "chi";
        }

        push("/itsguid/" + key, undefined, { locale });
        closeModal("#LangModal")();
    };

    const toProduct = (id: string) => () => {
        push("/tour/view/" + id);
    };

    const changeKeywards = (keywardLabels: string[]) => {
        profile.keywards = keywardLabels;
        setProfile({ ...profile });
    };

    const changeProfile = (file: Ffile) => {
        profile.profileImg = file;
        setProfile({ ...profile });
    };

    const toProductWrite = () => {
        push("/tour/write/");
    };

    const location =
        typeof window === "undefined" ? "" : window?.location?.href;

    return (
        <div className="profilePage mypage_in myProfilePage">
            <div className="in myProfilePage__in profile_box">
                <div className="myProfilePage__inin member_details_in w100">
                    {(isManager || isMypage) && (
                        <PageEditor
                            profileParams={profile}
                            allowToUser
                            pageTools={pageTools}
                        />
                    )}
                    <Bg className="top_bg" {...imgKit("topBg")}>
                        <div className="w1200 toolbuttons">
                            <div className="toolbuttons__right">
                                <div className="left_btn">
                                    <SHARE
                                        text={guideData.nickName}
                                        title={guideData.nickName}
                                        url={location}
                                    >
                                        <a>{get("shareLabel")}</a>
                                    </SHARE>
                                </div>
                                <div
                                    onClick={handleOpenLangModal}
                                    className="right_btn"
                                >
                                    <a>{get("langLabel")}</a>
                                </div>
                            </div>
                        </div>
                        {editMode && (
                            <div
                                onClick={() => {
                                    if (
                                        confirm(
                                            "정말로 이미지를 삭제 하시겠습니까?"
                                        )
                                    )
                                        set("topBg", "");
                                }}
                                className="top_bg__clear"
                            >
                                이미지삭제
                            </div>
                        )}
                    </Bg>
                    <div className="member_box">
                        <div className="w1200">
                            <div className="profile">
                                <div className="photo">
                                    <Bg
                                        editMode={editMode}
                                        upload={(uri) => {
                                            changeProfile({
                                                __typename: "File",
                                                name:
                                                    "profileImage" +
                                                    guideData._id,
                                                owner: guideData._id,
                                                uri,
                                            });
                                        }}
                                        bg={BGprofile(profile?.profileImg)}
                                        className="photo__bg"
                                    />
                                </div>
                                <div className="name">
                                    <i>G</i>
                                    <span>
                                        {guideData.nickName || "닉네임 없음"}
                                    </span>
                                </div>
                                {!editMode && (
                                    <div className="tag">
                                        {filteredKeywards.map(
                                            (t, i: number) => (
                                                <Link
                                                    href={guideSearchLink({
                                                        keyward: t.label,
                                                    })}
                                                >
                                                    <a key={t._id}>
                                                        #{t.label}
                                                    </a>
                                                </Link>
                                            )
                                        )}
                                    </div>
                                )}
                                <div className="profile__keywardWrap">
                                    {editMode && (
                                        <KeywardSelecter
                                            className="mypage__keywards"
                                            value={keywardsOps}
                                            handleChange={(keywards) => {
                                                const keyLabels = keywards.map(
                                                    (keyward) => keyward.label
                                                );
                                                changeKeywards(keyLabels);
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="profile_txt">
                                <div className="con01">
                                    <h3 className="title">
                                        {get("contentTitle")}
                                    </h3>
                                    <div className="txt">
                                        {editMode ? (
                                            <Editor
                                                key={lang + "editor"}
                                                data={get("content")}
                                                onChange={(content) => {
                                                    set("content", content);
                                                }}
                                            />
                                        ) : (
                                            <div
                                                className="ck-content"
                                                dangerouslySetInnerHTML={{
                                                    __html: get("content"),
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="con01">
                                    <h3 className="title">
                                        {get("contentTitle2")}
                                    </h3>
                                    <div className="txt">
                                        {editMode ? (
                                            <Editor
                                                key={lang + "editor"}
                                                data={get("content2")}
                                                onChange={(content) => {
                                                    set("content2", content);
                                                }}
                                            />
                                        ) : (
                                            <div
                                                className="ck-content"
                                                dangerouslySetInnerHTML={{
                                                    __html: get("content2"),
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="con02 mt50">
                                    <h3 className="title">
                                        {get("title_guid")}
                                    </h3>
                                    <div className="txt">
                                        <ul className="ul_info">
                                            <li>
                                                <strong
                                                    {...edit(
                                                        "guid_info1_label"
                                                    )}
                                                />
                                                <span
                                                    {...edit(
                                                        "guid_info1_value"
                                                    )}
                                                />
                                            </li>
                                            <li>
                                                <strong
                                                    {...edit(
                                                        "guid_info2_label"
                                                    )}
                                                />
                                                <span
                                                    {...edit(
                                                        "guid_info2_value"
                                                    )}
                                                />
                                            </li>
                                            <li>
                                                <strong
                                                    {...edit(
                                                        "guid_info3_label"
                                                    )}
                                                />
                                                <span
                                                    {...edit(
                                                        "guid_info3_value"
                                                    )}
                                                />
                                            </li>
                                            <li>
                                                <strong
                                                    {...edit(
                                                        "guid_info4_label"
                                                    )}
                                                />
                                                <span
                                                    {...edit(
                                                        "guid_info4_value"
                                                    )}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="review_board mt50">
                                    <div className="alignment">
                                        <div className="left_div">
                                            <h3 id="products">
                                                <span>
                                                    {get("portfolio_label")}
                                                </span>
                                            </h3>
                                        </div>
                                        <div className="right_div">
                                            <span className="goto_page">
                                                <a
                                                    href={tourSearchLink({
                                                        authorNick:
                                                            guideData.nickName,
                                                    })}
                                                >
                                                    <span>
                                                        {get("portfolio_label")}
                                                    </span>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="board_view">
                                        <ul className="list_ul line4">
                                            {slice?.map((product) => (
                                                <li
                                                    onClick={toProduct(
                                                        product._id
                                                    )}
                                                    key={product._id}
                                                    className="list_in"
                                                >
                                                    <div className="imgWrap">
                                                        <div
                                                            className="img"
                                                            style={{
                                                                backgroundImage: `url(${product?.images[0]?.uri})`,
                                                            }}
                                                        >
                                                            상품이미지
                                                        </div>
                                                    </div>
                                                    <div className="box">
                                                        <div className="category">
                                                            <span>
                                                                {
                                                                    product
                                                                        .category
                                                                        .label
                                                                }
                                                            </span>
                                                        </div>
                                                        <div className="title">
                                                            {product.title}
                                                        </div>
                                                        <div className="bottom_txt">
                                                            <div className="tag2">
                                                                {product?.keyWards?.map(
                                                                    (
                                                                        key: string,
                                                                        index: number
                                                                    ) => (
                                                                        <span
                                                                            key={
                                                                                product._id +
                                                                                index
                                                                            }
                                                                        >
                                                                            #
                                                                            {
                                                                                key
                                                                            }
                                                                        </span>
                                                                    )
                                                                )}
                                                            </div>
                                                            <div className="cash">
                                                                <strong>
                                                                    {autoComma(
                                                                        product.adult_price
                                                                    )}
                                                                </strong>
                                                                {get(
                                                                    "currency_kr"
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        {isEmpty(guideData.products) && (
                                            <NoData label="작성된 상품이 없습니다." />
                                        )}
                                        <div className="mypage_in__paginator">
                                            <Paginater
                                                isMini
                                                pageInfo={paging}
                                                setPage={setPage}
                                            />
                                        </div>
                                        {isMypage && (
                                            <button
                                                onClick={toProductWrite}
                                                className="btn small"
                                            >
                                                상품 등록하기
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* API only */}
                                {/* <div className="mt50">
                            <div className="alignment">
                                <div className="left_div"><h4>{get("productView")}<strong className="review_board__label">{""}</strong></h4></div>
                                <div className="right_div">
                                    <span className="goto_page"><a href={"/" + `/service/search&seller=${guideData.nickName}`}>{get("goto")}<i className="flaticon-menu-1"></i></a></span>
                                </div>
                            </div>
                            {slice?.map((product: any) =>
                                <ul key={product._id} className="list_ul line4">
                                    <li className="list_in">
                                        <div className="img" style={{ backgroundImage: `url(${product.thubm.uri})` }}>상품이미지</div>
                                        <div className="box">
                                            <div className="category"><span>{product.category.label}</span></div>
                                            <div className="title">{product.title}</div>
                                            <div className="bottom_txt">
                                                <div className="tag2">
                                                    {product?.keyWards?.map((key: string, index: number) => (
                                                        <span key={product._id + index}>#{key}</span>
                                                    ))}
                                                </div>
                                                <div className="cash"><strong>{autoComma(product.adult_price)}</strong>{page.currency_kr}</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            )}
                            {isEmpty(guideData.products) && <NoData label="작성된 상품이 없습니다." />}
                            {isEmpty(guideData.products) && <h4>{get("noProductData")}</h4>}
                            <div className="mypage_in__paginator">
                                <Paginater isMini pageInfo={paging} setPage={setPage} />
                            </div>
                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal id="LangModal" title="언어 교체하기">
                <button onClick={handleLang("kr")} className="btn mr20 small">
                    한국어
                </button>
                <button onClick={handleLang("GB")} className="btn mr20 small">
                    영어
                </button>
                <button onClick={handleLang("JP")} className="btn mr20 small">
                    일본어
                </button>
                <button onClick={handleLang("CH")} className="btn mr20 small">
                    중국어
                </button>
            </Modal>
        </div>
    );
};

export default ItsGuideWrap;

// export const ItsGuideWrap: React.FC<IWrapProps> = (props) => {
//     const { l, page, originPage, lang } = props;
//     const email = l.itsGuideEmail;
//     const {} = useUserFindById();
//     const { guide: guideData, getData } = useGuideInfo(email);
//     const [updateWebPageMu, { loading }] = useWebPageUpdate()

//     if (loading) return <Loading />

//     const updateEmail = (email: string) => {
//         page.set("itsGuideEmail", lang, email)
//         updateWebPageMu({
//             variables: {
//                 id: originPage?._id,
//                 input: {
//                     value: page
//                 }
//             }
//         }).then(({ data }) => {
//             if (data?.WebPageUpdate.ok) {
//                 getData({ variables: { email } })
//             } else {
//                 toast.error("이메일 업데이트 실패")
//             }
//         })
//     }

//     return <div>
//         <Helmet>
//             <script type="text/javascript" src={"/assets/loadcheck.js"} />
//             <link rel="stylesheet" href="/template/profile/css/main.css" />
//             <link rel="stylesheet" href="/template/profile/css/board.css" />
//             <script type="text/javascript" src={"/assets/js/channelTalkLoad.js"} />
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
//         </Helmet>
//         {guideData ? <ItsGuide guideData={guideData} {...props} /> : <EmailConnect defaultEmail={email} updateEmail={updateEmail} getData={getData} {...props} />}
//     </div>
// }

// 연동모드는 <-잇츠가이드 부터 프로필 정보를 가져옴 단 1번만
// 그다음 페이지 업데이트를 진행함
// 다음 Default로 지정된 값에서의 수정절차를 가능하게함
// 잘분리해야함

// @ts-ignore
// ItsGuide.Layout = ({ children }) => <div>{children}</div>
