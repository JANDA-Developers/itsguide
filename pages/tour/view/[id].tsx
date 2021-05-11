import dayjs from "dayjs";
import {
    openListFilter,
    useProductFindById,
    useProductList,
} from "hook/useProduct";
import SubTopNav from "layout/components/SubTop";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { autoComma } from "utils/formatter";
import Page404 from "pages/404";
import { AppContext } from "pages/_app";
import { useProductDelete } from "hook/useProduct";
import Slider, { Slide } from "../../../components/slider/Slider";
import SLIDER from "react-slick";
import { useScroll } from "../../../hook/useScroll";
import { handleTab, tabCheck } from "../../../components/tourView/tabUtils";
import { addItem } from "../../../utils/Storage";
import { useBasketCount } from "../../../hook/useBasket";
import { getRangeString } from "../../../utils/product";
import { generateClientPaging } from "../../../utils/generateClientPaging";
import { Paginater } from "../../../components/common/Paginator";
import { QnaLi } from "../../../components/qna/QnaLi";
import PageLoading from "../../Loading";
import { getQueryIndex, getStaticPageInfo, Ipage } from "../../../utils/page";
import { usePageEdit } from "../../../hook/usePageEdit";
import defaultPageInfo from "info/tourView.json";
import "slick-carousel/slick/slick.css";
import { ProductPhotoBlock } from "../../../components/list/ProductPhoto";
import { useGroupFind } from "../../../hook/useGroup";
import { randomSort } from "../../../utils/randomSort";
import isEmpty from "../../../utils/isEmpty";
import { isImg, isImgFile } from "../../../utils/isImgFile";
import { cloneObject } from "../../../utils/clone";
import {
    productList_ProductList_data,
    ProductStatus,
} from "../../../types/api";
import { productStatus } from "../../../utils/enumToKr";
import { ProductDateSelecter } from "../../../components/ProductDateSelecter";
import { Change } from "../../../components/loadingList/LoadingList";
import OnImagesLoaded from "../../../components/onImageLoad/OnImageLoad";
import { useImgLoading } from "../../../hook/useImgLoading";
import PageDeny from "../../Deny";
import {
    IModalInfo,
    ReviewModal,
} from "../../../components/reviewModal/ReviewModal";
import { useModal } from "../../../hook/useModal";
import Rating from "react-rating";
import { yyyymmdd } from "../../../utils/yyyymmdd";
import { RatingStar } from "../../../components/rating/Rating";
import { BG, BGprofile } from "../../../types/const";
import { cutStr } from "../../../utils/cutStr";
import { getDescriptionFromUser } from "../../../utils/getDescriptionFromUser";
import { strip } from "../../../utils/stripHtml";
import { staticInfo } from "../../../info/static.json";
import { Video } from "../../../components/video/Video";
import { stopAllVideo } from "../../../utils/video";

export const getStaticProps = getStaticPageInfo("tourView");
export async function getStaticPaths() {
    return {
        paths: [{ params: { id: "1" } }],
        fallback: true,
    };
}

const TourDetail: React.FC<Ipage> = (pageInfo) => {
    const reviewModalHook = useModal<IModalInfo>();

    const router = useRouter();
    const { item: group } = useGroupFind("Recommend");
    const groupExsist = !isEmpty(group?.members);
    const { handleLoaded, loaded } = useImgLoading();
    const { items, filter, setFilter } = useProductList({
        initialFilter: {
            ...openListFilter,
            _id_in: groupExsist ? group?.members : undefined,
        },
    });

    const randomSorted: productList_ProductList_data[] = groupExsist
        ? cloneObject(items).sort(
              (a, b) =>
                  group?.members.indexOf(a._id)! -
                  group?.members.indexOf(b._id)!
          )
        : randomSort(items);

    const pageTools = usePageEdit(pageInfo, defaultPageInfo);
    const id = router.query.id as string;
    const { loading, item: product, getData } = useProductFindById(id);
    const { isManager, isAdmin, myProfile, isSeller } = useContext(AppContext);
    const isMyProduct = product?.author?._id === myProfile?._id;
    const status = product?.status;
    const reviews = product?.productReview || [];
    const confirmedReviwes = reviews.filter(review => review.isConfiremd);
    const renderReviews = (isMyProduct || isManager) ? reviews : confirmedReviwes
    const reviewPagination = generateClientPaging(renderReviews, 4);
    const isMyReview = (authorId: string) => authorId === "";

    const {
        paging: questionPageInfo,
        slice: questionSliced,
        setPage: setQuestionPage,
    } = generateClientPaging(product?.questions || [], 4);

    const sliderRef = useRef<SLIDER>(null);
    const { count, handleCount, totalPrice } = useBasketCount({
        adult_price: product?.adult_price,
        baby_price: product?.baby_price,
        kids_price: product?.kids_price,
        capacity: product ? product.maxMember - product.peopleCount : 999,
        defaultCount: {
            adult: 0,
            baby: 0,
            kids: 0,
        },
    });

    const [sliderIndex, setSlideIndex] = useState(0);
    const { scrollY } = useScroll();
    const tabOnCheck = tabCheck.bind(tabCheck, scrollY);

    const [productDelete] = useProductDelete({
        onCompleted: ({ ProductDelete }) => {
            if (ProductDelete.ok) {
                alert("삭제완료");
                router.push("/");
            }
        },
    });

    const toWrite = () => router.push(`/tour/write/${product?._id}`);

    const handleEdit = () => {
        toWrite();
    };

    const handleDelete = () => {
        productDelete({
            variables: {
                id: product!._id,
            },
        });
    };

    const handleSliderMove = (index: number) => () => {
        sliderRef.current?.slickGoTo(index);
        setSlideIndex(index);
    };

    const checkImgOn = (index: number): string => {
        return index === sliderIndex ? "on" : "";
    };

    const addBracket = () => {
        addItem({
            count,
            price: totalPrice,
            name: product!.title,
            _id: product!._id,
        });
    };

    const handleAddBracket = () => {
        addBracket();
    };

    const handleQnaClick = (id: string) => () => {
        router.push("/service/qna/view/" + id);
    };

    const handleProductChange = (target?: productList_ProductList_data) => {
        if (!target) return;
        getData({
            variables: {
                _id: target._id,
            },
        });
    };

    const handleDoPay = () => {
        const addPeople = count.adult + count.baby + count.kids;
        if (addPeople === 0) {
            alert("인원을 먼저 선택 해주세요.");
            return;
        }

        const availableCount =
            (product?.maxMember || 0) - (product?.peopleCount || 0);

        if (availableCount < addPeople) {
            alert(`해당 인원을 수용 할 수 없습니다. 전화문의 부탁드립니다.`);
        }

        if (availableCount) addBracket();
        router.push("/payment/");
    };

    useEffect(() => {
        if (product && product?.status !== ProductStatus.OPEN)
            alert("해당 상품은 판매중이 아닙니다.");
    }, []);

    const randomSliced = useMemo(() => randomSorted.slice(0, 3), [
        randomSorted.length,
    ]);

    if (loading) return <PageLoading />;
    if (!product) return <div></div>;

    const {
        images,
        keyWards,
        adult_price,
        baby_price,
        kids_price,
        title,
        subTitle,
        info,
        startDate,
        minMember,
        maxMember,
        startPoint,
        author,
        itinerary,
        contents,
        inOrNor,
        category,
        caution,
        code,
        peopleCount,
    } = product;

    const isPast = dayjs(startDate).isBefore(new Date());
    const { locale } = useRouter();
    const ln = staticInfo(locale as any);

    if (!isSeller && !product.isOpen)
        return <PageDeny msg="해당 게시글은 비공개 상태입니다." />;
    // if (!isSeller && product.status !== ProductStatus.OPEN) return <Page404 />

    return (
        <div className="edtiorView">
            {!loaded && <PageLoading />}
            <OnImagesLoaded delay={5000} onLoaded={handleLoaded}>
                <SubTopNav
                    pageTools={pageTools}
                    children={
                        <>
                            <li className="homedeps1">
                                <Link href="/tour/">
                                    <a>Tour</a>
                                </Link>
                            </li>
                            <li className="homedeps2">
                                <Link href="/tour/list">
                                    <a>{ln("productlist")}</a>
                                </Link>
                            </li>
                        </>
                    }
                />
                <Change change={!loading}>
                    <div className="tour_details_in w1200">
                        <div className="Document">
                            <div className="Read_box">
                                <div className="details_photo">
                                    <div className="main_photo">
                                        <Slider
                                            beforeChange={() => {
                                                stopAllVideo();
                                            }}
                                            dots={false}
                                            ref={sliderRef}
                                        >
                                            {images?.map((img, i) => (
                                                <Slide key={i + "sliderImg"}>
                                                    {isImg(img.extension) ? (
                                                        <div
                                                            style={BG(img?.uri)}
                                                        />
                                                    ) : (
                                                        <Video
                                                            controls
                                                            src={img?.uri}
                                                        />
                                                    )}
                                                </Slide>
                                            )) || ""}
                                        </Slider>
                                    </div>
                                    <ul className="photo_list">
                                        {images?.map((img, i) => (
                                            <li
                                                className={checkImgOn(i)}
                                                onClick={handleSliderMove(i)}
                                                key={i + "sliderImgSub"}
                                            >
                                                <div style={{ height: "100%" }}>
                                                    {isImg(img.extension) ? (
                                                        <div
                                                            className="tourView__thumbBg"
                                                            style={BG(img?.uri)}
                                                        />
                                                    ) : (
                                                        <Video src={img?.uri} />
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="details_info_txt">
                                        <div
                                            className="ck-content"
                                            dangerouslySetInnerHTML={{
                                                __html: info,
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* guide info */}
                                <div className="guide__infobox">
                                    <div className="profile">
                                        <div
                                            className="photo"
                                            style={BGprofile(author.profileImg)}
                                        ></div>
                                        <div className="name profileListBig__toName">
                                            <i className="profileListBig__G">
                                                G
                                            </i>
                                            <span>{author.nickName}</span>
                                        </div>
                                    </div>
                                    <div className="txtbox">
                                        <p>
                                            {strip(
                                                getDescriptionFromUser(author)
                                            )}
                                        </p>
                                        <div className="bottom_btn">
                                            <Link
                                                href={`/itsguid/${author._id}`}
                                            >
                                                <a className="btn profil_link">
                                                    {ln("guideinfolink")}
                                                    <i className="flaticon-menu-1"></i>
                                                </a>
                                            </Link>
                                            <Link
                                                href={`/itsguid/${author._id}#products`}
                                            >
                                                <a className="btn profil_link ml10">
                                                    {ln("moretravels")}
                                                    <i className="flaticon-menu-1"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="viewControl">
                                <div className="control_box">
                                    <div className="box2">
                                        <table
                                            cellSpacing={0}
                                            summary="Extra Form"
                                            className="option_tb mb10 big_pd"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        colSpan={2}
                                                        className="category bt_no"
                                                    >
                                                        <span className="pnt">
                                                            {
                                                                category
                                                                    .localeLabel[
                                                                    locale
                                                                ]
                                                            }
                                                        </span>
                                                        <span className="code">
                                                            {ln("goodscode")}
                                                            {code}
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        colSpan={2}
                                                        className="bt_line"
                                                    >
                                                        <h3 className="maintitle">
                                                            {title}
                                                        </h3>
                                                        <p className="subtitle">
                                                            {subTitle}
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        colSpan={2}
                                                        className="tag bt_line"
                                                    >
                                                        <div className="tt">
                                                            {ln("keywords")}
                                                        </div>
                                                        <ul>
                                                            {keyWards?.map(
                                                                (
                                                                    keyward,
                                                                    i
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            i +
                                                                            "keyward"
                                                                        }
                                                                    >
                                                                        #
                                                                        {
                                                                            keyward
                                                                        }
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </td>
                                                </tr>
                                                {isSeller && (
                                                    <tr>
                                                        <th className="smtitle bt_line">
                                                            {ln("state")}
                                                        </th>
                                                        <td className="smtxt bt_line">
                                                            {productStatus(
                                                                product.status
                                                            )}
                                                            {product.isOpen
                                                                ? ln("public")
                                                                : ln(
                                                                      "nondisclosure"
                                                                  )}
                                                        </td>
                                                    </tr>
                                                )}
                                                <tr>
                                                    <th className="smtitle bt_line">
                                                        {ln("departuredate")}
                                                    </th>
                                                    <td className="smtxt bt_line">
                                                        <ProductDateSelecter
                                                            currentId={
                                                                product._id
                                                            }
                                                            key={product._id}
                                                            groupCode={
                                                                product.groupCode
                                                            }
                                                            onChange={
                                                                handleProductChange
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="smtitle bt_line">
                                                        {ln("travelperiod")}
                                                    </th>
                                                    <td className="smtxt bt_line">
                                                        {getRangeString(
                                                            product
                                                        )}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="smtitle bt_line">
                                                        {ln("minimum")}/
                                                        {ln("maximum")}
                                                        {ln("personnel")}
                                                    </th>
                                                    <td className="smtxt bt_line">
                                                        {ln("minimum")}
                                                        {minMember}
                                                        {ln("person_unit")}
                                                        {ln("maximum")}
                                                        {maxMember}
                                                        {ln("person_unit")}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="smtitle bt_line">
                                                        {ln(
                                                            "currentnumberofpeople"
                                                        )}
                                                    </th>
                                                    <td className="smtxt bt_line">
                                                        {peopleCount +
                                                            "/" +
                                                            maxMember}
                                                        {ln("person_unit")}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="smtitle bt_no">
                                                        {ln("startPoint")}
                                                    </th>
                                                    <td className="smtxt bt_no">
                                                        {startPoint}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {!isPast && (
                                        <div className="box">
                                            <table
                                                cellSpacing={0}
                                                summary="Extra Form"
                                                className="option_tb"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <th>{ln("adult")}</th>
                                                        <td>
                                                            <strong>
                                                                {autoComma(
                                                                    adult_price
                                                                )}
                                                            </strong>
                                                            {ln("money_unit")}
                                                            <div className="Number__box">
                                                                <span
                                                                    onClick={handleCount(
                                                                        "adult",
                                                                        false
                                                                    )}
                                                                    className="left_btn"
                                                                >
                                                                    <i className="flaticon-substract" />
                                                                </span>
                                                                <span className="number">
                                                                    {
                                                                        count.adult
                                                                    }
                                                                </span>
                                                                <span
                                                                    onClick={handleCount(
                                                                        "adult",
                                                                        true
                                                                    )}
                                                                    className="right_btn"
                                                                >
                                                                    <i className="flaticon-add" />
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>{ln("kid")}</th>
                                                        <td>
                                                            <strong>
                                                                {autoComma(
                                                                    kids_price
                                                                )}
                                                            </strong>
                                                            {ln("money_unit")}
                                                            <div className="Number__box">
                                                                <span
                                                                    onClick={handleCount(
                                                                        "kids",
                                                                        false
                                                                    )}
                                                                    className="left_btn"
                                                                >
                                                                    <i className="flaticon-substract" />
                                                                </span>
                                                                <span className="number">
                                                                    {count.kids}
                                                                </span>
                                                                <span
                                                                    onClick={handleCount(
                                                                        "kids",
                                                                        true
                                                                    )}
                                                                    className="right_btn"
                                                                >
                                                                    <i className="flaticon-add" />
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>{ln("baby")}</th>
                                                        <td>
                                                            <strong>
                                                                {autoComma(
                                                                    baby_price
                                                                )}
                                                            </strong>
                                                            {ln("money_unit")}
                                                            <div className="Number__box">
                                                                <span
                                                                    onClick={handleCount(
                                                                        "baby",
                                                                        false
                                                                    )}
                                                                    className="left_btn"
                                                                >
                                                                    <i className="flaticon-substract" />
                                                                </span>
                                                                <span className="number">
                                                                    {count.baby}
                                                                </span>
                                                                <span
                                                                    onClick={handleCount(
                                                                        "baby",
                                                                        true
                                                                    )}
                                                                    className="right_btn"
                                                                >
                                                                    <i className="flaticon-add" />
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="Chash__box">
                                                <table
                                                    cellSpacing={0}
                                                    summary="Extra Form"
                                                    className="chash_tb"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <th>{ln("sum")}</th>
                                                            <td>
                                                                <strong>
                                                                    {autoComma(
                                                                        totalPrice
                                                                    )}
                                                                </strong>
                                                                {ln(
                                                                    "money_unit"
                                                                )}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                    {/* btn */}
                                    <div className="btn_box">
                                        <div className="links_wrap">
                                            <div
                                                onClick={handleAddBracket}
                                                className={`link05 ${
                                                    isPast &&
                                                    "tourBracketBtn--disabled"
                                                }`}
                                            >
                                                <a>{ln("shopping_cart")}</a>
                                            </div>
                                            <div
                                                className={`link02 ${
                                                    isPast &&
                                                    "tourBracketBtn--disabled"
                                                }`}
                                            >
                                                <a onClick={handleDoPay}>
                                                    {isPast
                                                        ? ln("end_of_sale")
                                                        : ln(
                                                              "make_a_reservation"
                                                          )}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // 본문 출력 // */}
                        <div className="boardReadBody">
                            <div className="xe_content">
                                <div className="con_top_tap">
                                    <span
                                        onClick={handleTab(1)}
                                        className={tabOnCheck(1)}
                                    >
                                        <a>{ln("travel_details")}</a>
                                    </span>
                                    {/* <span onClick={handleTab(2)} className={tabOnCheck(2)}><a>안내 및 참고</a></span>
                <span onClick={handleTab(3)} className={tabOnCheck(3)}><a >참가자 준비물</a></span> */}
                                    <span
                                        onClick={handleTab(4)}
                                        className={tabOnCheck(4)}
                                    >
                                        <a>{ln("review")}</a>
                                    </span>
                                    <span
                                        onClick={handleTab(6)}
                                        className={tabOnCheck(6)}
                                    >
                                        <a>{ln("questions")}</a>
                                    </span>
                                </div>
                                {/* 여행상세설명 */}
                                <div className="in_box" id="tap__01">
                                    <h4>{ln("itinerary")}</h4>
                                    {itinerary.map((it) => (
                                        <div key={it._id}>
                                            <div className="hang">
                                                <div className="top_day">
                                                    <h5>{it.title}</h5>
                                                    <span>
                                                        {dayjs(it.date).format(
                                                            "YYYY.MM.DD (dd)"
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="tour_list">
                                                    {it.contents.map(
                                                        (con, index) => (
                                                            <div
                                                                key={
                                                                    index +
                                                                    "con" +
                                                                    it._id
                                                                }
                                                            >
                                                                <div
                                                                    className="ck-content"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: con,
                                                                    }}
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                {/* <div className="tour_content_img_list">
                  {it.images.map((img, index) => <img key={index} style={{
                    width: "auto",
                    height: "100px",
                    display: "inline-block"
                  }} src={img?.uri} />)}
                </div> */}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <span className="sub__txt">
                                    {ln("like_this")}
                                </span>
                                <div className="in_box" id="tap__02">
                                    <h4>{ln("guidance_and_notes")}</h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: contents,
                                        }}
                                        className="text ck-content"
                                    />
                                </div>
                                {/* 참가자 준비물 */}
                                <div className="in_box" id="tap__03">
                                    <h4>{ln("participant_preparation")}</h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: inOrNor,
                                        }}
                                        className="text ck-content"
                                    />
                                </div>

                                {/* <div className="in_box" id="tap__05">
                                    <h4>주의사항</h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: caution,
                                        }}
                                        className="text"
                                    />
                                </div> */}

                                {/* 리뷰 */}
                                <div className="in_box" id="tap__04">
                                    <h4>{ln("review")}</h4>
                                    <div className="text ck-content">
                                        <div className="review__box">
                                            <ul className="review__list">
                                                {reviewPagination.slice.map(
                                                    (review) => (
                                                        <li
                                                            onClick={() => {
                                                                reviewModalHook.openModal(
                                                                    {
                                                                        reviewId:
                                                                            review._id,
                                                                    }
                                                                );
                                                            }}
                                                            key={review._id}
                                                        >
                                                            <div className="top">
                                                                <div
                                                                    className="review__list_pr"
                                                                    style={BGprofile(
                                                                        review
                                                                            .author
                                                                            ?.profileImg
                                                                    )}
                                                                />
                                                                <div className="review__list_star">
                                                                    <RatingStar
                                                                        readonly
                                                                        initialRating={
                                                                            review.rating
                                                                        }
                                                                    />
                                                                    <div>{review.isConfiremd ?  "Open" : "Close"}</div>
                                                                </div>
                                                                <div className="review__list_info">
                                                                    <strong>
                                                                        {
                                                                            review.title
                                                                        }
                                                                    </strong>
                                                                    <span className="name">
                                                                        {
                                                                            review.authorName
                                                                        }
                                                                    </span>
                                                                    <span className="day">
                                                                        {yyyymmdd(
                                                                            review.createdAt
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="bottom">
                                                                <p>
                                                                    {cutStr(
                                                                        review.contents,
                                                                        150
                                                                    )}
                                                                </p>
                                                            </div>
                                                            {true && (
                                                                // isMyReview(review._id)
                                                                <Link
                                                                    href={`/review/write/${review._id}?pid=${id}&name=${title}`}
                                                                >
                                                                    <a
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            e.stopPropagation();
                                                                        }}
                                                                        className="mini_btn small2"
                                                                    >
                                                                        {ln(
                                                                            "tomodify"
                                                                        )}
                                                                    </a>
                                                                </Link>
                                                            )}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="boardNavigation">
                                        <Paginater
                                            pageInfo={reviewPagination.paging}
                                            isMini
                                            setPage={reviewPagination.setPage}
                                        />
                                        <div className="float_right">
                                            <Link
                                                href={`/review/write?pid=${id}&name=${title}`}
                                            >
                                                <a className="mini_btn small">
                                                    {ln("fall_review")}
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="in_box" id="tap__06">
                                    <h4>{ln("questions")}</h4>
                                    <div className="board_list_mini ln04">
                                        <div className="thead">
                                            <div className="th01">No.</div>
                                            <div className="th02">
                                                {ln("title")}
                                            </div>
                                            <div className="th03">
                                                {ln("writer")}
                                            </div>
                                            <div className="th04">
                                                {ln("date")}
                                            </div>
                                        </div>
                                        <div className="tbody">
                                            <ul>
                                                {questionSliced.map(
                                                    (qs, index) => (
                                                        <QnaLi
                                                            no={getQueryIndex(
                                                                index,
                                                                questionPageInfo,
                                                                questionSliced.length
                                                            )}
                                                            onClick={handleQnaClick(
                                                                qs._id
                                                            )}
                                                            key={qs._id}
                                                            question={qs}
                                                        />
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <div className="boardNavigation">
                                            <Paginater
                                                pageInfo={questionPageInfo}
                                                isMini
                                                setPage={setQuestionPage}
                                            />
                                            <div className="float_right">
                                                <Link
                                                    href={`/service/question/write?pid=${id}&name=${title}`}
                                                >
                                                    <a className="mini_btn small">
                                                        {ln(
                                                            "contact_customer_center"
                                                        )}
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="boardNavigation">
                                <div className="float_left"></div>
                                {(isManager || isAdmin || isMyProduct) && (
                                    <div className="float_right">
                                        <button
                                            type="submit"
                                            onClick={handleEdit}
                                            className="btn medium pointcolor"
                                        >
                                            {ln("modify")}
                                        </button>
                                        {(isManager ||
                                            isAdmin ||
                                            isMyProduct) && (
                                            <button
                                                type="submit"
                                                onClick={handleDelete}
                                                className="btn medium"
                                            >
                                                {ln("elimination")}
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className="add_list">
                                <h4>{ln("itsguide_recommendationtxt")}</h4>
                                {/* 랜덤노출 */}
                                <ul className="tourView__recommendList  list_ul line3">
                                    {randomSliced.map((item) => (
                                        <ProductPhotoBlock
                                            key={item._id}
                                            item={item}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Change>
            </OnImagesLoaded>
            <ReviewModal {...reviewModalHook} />
        </div>
    );
};

export default TourDetail;

// 5분 //
