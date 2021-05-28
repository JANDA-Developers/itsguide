import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { initStorage } from "../../../utils/Storage";
import "react-day-picker/lib/style.css";
import SubTopNav from "layout/components/SubTop";
import Link from "next/link";
import {
    Fproduct,
    ItineraryCreateInput,
    Lang,
    ProductStatus,
    ProductType,
} from "../../../types/api";
import DayRangePicker from "components/dayPicker/DayRangePicker";
import { ItineryForm } from "components/tourWrite/ItineryForm";
import { AppContext } from "pages/_app";
import { tapCheck } from "../../../utils/style";
import TagInput from "../../../components/tagInput/TagInput";
import {
    getDefault,
    TRangeType,
    useTourWrite,
} from "../../../hook/useTourWrite";
import {
    useProductFindById,
    useProductUpdateReq,
} from "../../../hook/useProduct";
import { changeVal } from "../../../utils/eventValueExtracter";
import PageLoading from "../../Loading";
import { auth } from "../../../utils/with";
import { ALLOW_SELLERS } from "../../../types/const";
import { LoadEditor } from "../../../components/edit/EdiotrLoading";
import pageInfoDefault from "info/tourWrite.json";
import { getStaticPageInfo, Ipage } from "../../../utils/page";
import { usePageEdit } from "../../../hook/usePageEdit";
import { cloneObject } from "../../../utils/clone";
import { productStatus } from "../../../utils/enumToKr";
import { Prompt } from "../../../components/promptModal/Prompt";
import { closeModal, openModal } from "../../../utils/popUp";
import {
    LocalStorageBoard,
    SampleBoard,
} from "../../../components/localStorageBoard/LocalStorageBoard";
import dayjs from "dayjs";
import { checkIsExp } from "../../../utils/product";
import { PageEditor } from "../../../components/common/PageEditer";
import { yyyymmdd } from "../../../utils/yyyymmdd";
import { useHomepage, useHomepageUpdate } from "../../../hook/useHomepage";
import { filterOver } from "../../../components/tourWrite/helper";
import { toNumber } from "../../../utils/toNumber";
// const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr: false });

const Editor = LoadEditor();
interface IProp {}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    //   const res = await fetch('https://.../posts')
    //   const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    //   const paths = posts.map((post) => ({
    //     params: { id: post.id },
    //   }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    //   return { paths, fallback: false }

    return {
        paths: [{ params: { id: [] } }],
        fallback: true,
    };
}
export const getStaticProps = getStaticPageInfo("tourWrite");
export const TourWrite: React.FC<Ipage> = (pageInfo) => {
    const router = useRouter();
    const isExp = checkIsExp();
    const { query } = router;
    const pageTools = usePageEdit(pageInfo, pageInfoDefault);
    const id = query.id?.[0] as string | undefined;
    const isCreateMode = id?.length > 10 ? false : true;
    const { item: product, getData, loading } = useProductFindById(id);
    const [selectEditorIndex, setSelectEditorIndex] = useState({
        itsIndex: 0,
        contentIndex: 0,
    });
    const { data: homepage } = useHomepage();
    const sampleProducts = homepage?.productSamples || [];
    const [homepageUpdate] = useHomepageUpdate();
    const [sampleIndex, setSampleIndex] = useState<number>(-1);
    const notSample = sampleIndex === -1;

    const updateSampels = (nextSample: string[], suecssMessage: string) => {
        homepageUpdate({
            variables: {
                params: {
                    productSamples: nextSample,
                },
            },
        }).then(({ data }) => {
            if (data?.HomepageUpdate.ok) {
                alert(suecssMessage);
            }
        });
    };

    const sampleUpdate = (sample: string, index: number) => {
        const newSamples = [...sampleProducts];
        newSamples.splice(index, 1, sample);
        updateSampels(newSamples, "업데이트 완료");
    };

    const sampleCreate = (sample: string) => {
        const nextSampls = [sample, ...sampleProducts];
        updateSampels(nextSampls, "추가 완료");
    };

    const handleSampleDelete = (index: number) => {
        const newSamples = [...sampleProducts];
        newSamples.splice(index, 1);
        const nextSampls = [...newSamples];
        updateSampels(nextSampls, "삭제 완료");
    };

    const handleSampleCreate = () => {
        const sample = JSON.stringify(tourData);
        sampleCreate(sample);
    };

    const handleSampleUpdate = () => {
        const sample = JSON.stringify(tourData);
        sampleUpdate(sample, sampleIndex);
    };

    const handleSampleLoad = (index: number) => {
        const target = sampleProducts[index];
        const val = JSON.parse(target);
        if (val) {
            alert("불러오기 완료");
            closeModal("#SampleSelecter")();
            setSampleIndex(index);
            setTourData(val);
        }
    };

    const [updateReq, { loading: updateReqLoading }] = useProductUpdateReq({
        onCompleted: ({ ProductUpdateReq }) => {
            if (ProductUpdateReq?.ok) {
                alert("상품 수정요청이 접수 되었습니다.");
                router
                    .push(`/tour/view/${ProductUpdateReq?.data?._id}`)
                    .then(() => window.scrollTo(0, 0));
            }
        },
    });
    const {
        categoriesMap,
        isAdmin,
        myProfile,
        isManager,
        isParterB,
        isParterNonB,
        productGroupList,
    } = useContext(AppContext);
    const isMyProduct = product?.author?._id === myProfile?._id;

    const {
        rangeType,
        setRangeType,
        range,
        setRange,
        imgUploading,
        tourSets,
        tourData,
        loadKey,
        validater: { validate },
        handles,
        firstDate,
        getCreateInput,
        getUpdateInput,
        setTourData,
        mutations,
        setGroupCode,
        hiddenFileInput,
        lastDate,
        tempSavedIts,
        setTempSavedIts,
    } = useTourWrite(getDefault(cloneObject(product)));

    useEffect(() => {
        const newProductData = getDefault(cloneObject(product));

        // 수정일때는 회차연결을 신경쓰지 말아야함
        if (isCreateMode) {
            // 회차연결을 위한 조치
            setTempSavedIts(newProductData.its);
            newProductData.its = [];
            //하지만 여기서 상태값에 대해서는 신경쓰지 말아야함.
            newProductData.status = undefined;
        }

        setTourData(newProductData);
    }, [product]);

    const { createFn, deleteFn, updateFn } = mutations;
    const {
        categoryId,
        its,
        simpleData,
        status,
        thumbs,
        keyWards,
        type,
        regionId,
        lang,
    } = tourData;
    const { setkeyWards, setits, setType, setLang, setSimpleData } = tourSets;
    const {
        address,
        adult_price,
        baby_price,
        kids_price,
        maxMember,
        minMember,
        startPoint,
        unIncluded,
        subTitle,
        title,
        contents,
        caution,
        inOrNor,
        info,
        isOpen,
    } = simpleData;
    const {
        handleRegionChange,
        handleTextData,
        handleCatChange,
        handleChangeStatus,
        handleChangeSumbNail,
        handleClearThumb,
        handleDateState,
        handleInputChange,
        handleInputCommaChange,
        handleLoad,
        handleTempSave,
        handleUploadClick,
    } = handles;
    const [tab, setTab] = useState<number>(1);
    const handleChangeOpen = (e: React.ChangeEvent<HTMLInputElement>) => {
        const bool = e.currentTarget.value === "true";
        setSimpleData({
            ...simpleData,
            isOpen: bool,
        });
    };

    const sampleSelectOpen = () => {
        openModal("#SampleSelecter")();
    };

    const tabOnCheck = (index: number) => (tab === index ? "on" : undefined);

    const handleTab = (index: number) => () => {
        setTab(index);
        const target = document.getElementById("texta_0" + index);
        //모바일일때 필수
        setTimeout(() => {
            console.log({ target });
            target.scrollIntoView({ block: "center", behavior: "smooth" });
        }, 300);
    };

    const handleCreate = async () => {
        if (validate()) {
            const nextData = getCreateInput();
            createFn(nextData);
        }
    };
    const handleEdit = async () => {
        if (!product) return;
        if (validate()) {
            const nextData = getUpdateInput();
            updateFn(product._id, nextData);
        }
    };
    const handleEditReq = () => {
        openModal("#UpdateMemo")();
    };

    const handleSubmitUpdateReq = (memo: string) => {
        if (!product) return;
        if (!updateReqLoading) {
            const nextData = getUpdateInput();
            updateReq({
                variables: {
                    reason: "",
                    params: {
                        ...nextData,
                        requestMemo: memo,
                    },
                    _id: product?._id,
                },
            });
        }
    };

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            deleteFn(product!._id);
    };

    const handleCancel = () => {
        if (confirm("작성하시던 내용이 저장되지 않을 수 있습니다."))
            router.push("/tour/list");
    };

    const tapDisplay = tapCheck.bind(tapCheck, tab);

    const setAsNewProduct = () => {
        location.reload();
    };

    const handleBaseProdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.currentTarget.value;
        if (!val) {
            setAsNewProduct();
            return;
        }
        const target = productGroupList.find((g) => g._id === val);
        setGroupCode(target?.groupCode);
        getData({
            variables: {
                _id: val,
            },
        });
    };

    useEffect(() => {
        initStorage();
    }, []);

    const noram_partner_updateable_status = [
        ProductStatus.READY,
        ProductStatus.UPDATE_REQ,
        ProductStatus.UPDATE_REQ_REFUSED,
        ProductStatus.REFUSED,
    ];
    const updateAble =
        (!isCreateMode && (isParterB || isManager)) ||
        noram_partner_updateable_status.includes(product?.status!);
    const normalPartnerUpdateReqAble = updateBtnDisableCheck(
        product!,
        isParterB || false
    );

    const categories =
        type === ProductType.TOUR ? categoriesMap.TOUR : categoriesMap.TOUR;
    const regionCategories = categoriesMap.REGION;

    // if (!isManager && !isMyProduct) return <PageDeny />
    if (loading) return <PageLoading />;
    return (
        <div key={loadKey} className="tour_box w100 board_write">
            <SubTopNav
                pageTools={pageTools}
                children={
                    <>
                        <li className="homedeps1">
                            <Link href={isExp ? "/tour?exp=true" : "/tour"}>
                                <a>{isExp ? "Experience" : "Tour"}</a>
                            </Link>
                        </li>
                        <li className="homedeps2">
                            <Link href="/tour/write">
                                <a>상품등록</a>
                            </Link>
                        </li>
                    </>
                }
            />
            <PageEditor pageTools={pageTools} />
            <div className="w1200 con_bottom">
                <div className="write_box">
                    {product && (
                        <h3 className="write_top_tag">
                            {productStatus(product.status)}
                        </h3>
                    )}

                    {isCreateMode && (
                        <div className="write_type">
                            <div className="title">회차연결</div>
                            <div className="input_form">
                                <div style={{ display: "flex" }}>
                                    <span className="category r3">
                                        <select
                                            onChange={handleBaseProdChange}
                                            value={product?._id}
                                            name="type"
                                        >
                                            <option value={""}>
                                                새로운상품
                                            </option>
                                            {productGroupList.map((p) => (
                                                <option
                                                    key={p._id}
                                                    value={p._id}
                                                >
                                                    {p.label}
                                                </option>
                                            ))}
                                        </select>
                                    </span>
                                    <button
                                        onClick={sampleSelectOpen}
                                        className="btn medium write"
                                    >
                                        샘플 불러오기
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="write_type">
                        <div className="title">상품타입</div>
                        <div className="input_form">
                            <span className="category r3 mr20">
                                <select
                                    onChange={changeVal(setType)}
                                    value={type}
                                    name="type"
                                >
                                    <option value={ProductType.TOUR}>
                                        투어
                                    </option>
                                    <option value={ProductType.EXPERIENCE}>
                                        체험
                                    </option>
                                    <option value="">선택없음</option>
                                </select>
                            </span>
                            <input
                                onChange={(e) => {
                                    const val = e.currentTarget.value;
                                    setRangeType(val as TRangeType);
                                }}
                                type="radio"
                                id="single"
                                name="gender"
                                value="Single"
                                checked={rangeType === "Single"}
                            />
                            <label htmlFor="single">당일</label>
                            <input
                                onChange={(e) => {
                                    const val = e.currentTarget.value;
                                    setRangeType(val as TRangeType);
                                }}
                                type="radio"
                                id="range"
                                name="gender"
                                value="Range"
                                checked={rangeType === ("Range" as TRangeType)}
                            />
                            <label htmlFor="range">연일</label>
                            {rangeType === "Range" && (
                                <div>
                                    <input
                                        onChange={(e) => {
                                            const range = toNumber(
                                                e.currentTarget.value
                                            );
                                            setRange(range);
                                        }}
                                        className="w10 mr10"
                                        type="text"
                                        value={range || ""}
                                    />
                                    박
                                    <span className="mr10" />
                                    <input
                                        className="w10 mr10"
                                        type="text"
                                        readOnly
                                        value={range + 1 || ""}
                                    />
                                    일
                                </div>
                            )}
                            <p className="info_txt">
                                <i className="jandaicon-info2 mini"></i> 연일과
                                당일은 체험과 여행 둘다 가능합니다.
                            </p>
                        </div>
                    </div>
                    <div className="write_type">
                        <div className="title">언어</div>
                        <div className="input_form">
                            <span className="category r3">
                                <select
                                    key={lang + "selecter"}
                                    onChange={(e) => {
                                        const lang = e.currentTarget
                                            .value as Lang;
                                        setLang(lang);
                                    }}
                                    value={lang}
                                    name="category_srl"
                                >
                                    <option value={Lang.KO}>KOREAN</option>
                                    <option value={Lang.EN}>ENGLISH</option>
                                    <option value={Lang.CH}>CHINESE</option>
                                    <option value={Lang.JP}>JAPANESE</option>
                                    <option value={Lang.OT}>OTHERS</option>
                                </select>
                            </span>
                            <p className="info_txt">
                                <i className="jandaicon-info2 mini"></i> 해당
                                언어를 선택한 상품은 해당언어 선택시에만 노출이
                                됩니다. <br />
                                만약 두가지 언어에서 동일한 상품판매를 원하시면
                                상품을 두개를 등록하셔야 합니다.
                            </p>
                        </div>
                    </div>
                    <div className="write_type">
                        <div className="title">카테고리</div>
                        <div className="input_form">
                            <span className="category r3">
                                <select
                                    id="category"
                                    onChange={handleCatChange}
                                    value={categoryId}
                                    name="category_srl"
                                >
                                    {categories.map((cat) => (
                                        <option value={cat._id} key={cat._id}>
                                            {cat.label}
                                        </option>
                                    ))}
                                    <option value="">선택없음</option>
                                </select>
                            </span>
                        </div>
                    </div>
                    <div className="write_type">
                        <div className="title">제목</div>
                        <div className="input_form">
                            <input
                                maxLength={60}
                                id="title"
                                onChange={handleInputChange("title")}
                                value={title}
                                type="text"
                                name="title"
                                className="inputText w100"
                            />
                        </div>
                    </div>
                    <div className="write_type">
                        <div className="title">부제목</div>
                        <div className="input_form">
                            <input
                                maxLength={60}
                                onChange={handleInputChange("subTitle")}
                                value={subTitle || ""}
                                type="text"
                                name="title"
                                className="inputText w100"
                            />
                        </div>
                    </div>

                    <div className="write_type">
                        <div className="title">판매금액</div>
                        <div className="input_form">
                            <div>
                                <span className="mr5">성인</span>
                                <input
                                    onChange={handleInputCommaChange(
                                        "adult_price"
                                    )}
                                    value={adult_price}
                                    type="text"
                                    className="text w20 mr15"
                                />
                                <span className="mr5">소인</span>
                                <input
                                    onChange={handleInputCommaChange(
                                        "kids_price"
                                    )}
                                    value={kids_price}
                                    type="text"
                                    className="text w20 mr15"
                                />
                                <span className="mr5">유아</span>
                                <input
                                    onChange={handleInputCommaChange(
                                        "baby_price"
                                    )}
                                    value={baby_price}
                                    type="text"
                                    className="text w20"
                                />
                            </div>
                            <p className="info_txt">
                                <i className="jandaicon-info2 mini"></i> 원을
                                빼고 ','를 넣어서 구분해서 입력해주세요. ex)
                                50,000
                            </p>
                        </div>
                    </div>

                    <div className="write_type">
                        <div className="title">인원설정</div>
                        <div className="input_form">
                            <div>
                                <span className="mr5">최소인원</span>
                                <input
                                    onChange={handleInputChange("minMember")}
                                    value={minMember}
                                    type="text"
                                    className="text w20 mr15"
                                />
                                <span className="mr5">최대인원</span>
                                <input
                                    onChange={handleInputChange("maxMember")}
                                    value={maxMember}
                                    type="text"
                                    className="text w20"
                                />
                            </div>
                            <p className="info_txt">
                                <i className="jandaicon-info2 mini"></i>{" "}
                                최소인원만 충족된다면 출발이 가능합니다.
                            </p>
                        </div>
                    </div>

                    <div className="write_type">
                        <div className="title">지역</div>
                        <div className="input_form">
                            <span className="category">
                                <select
                                    id="RegionId"
                                    onChange={handleRegionChange}
                                    value={regionId || ""}
                                    name="category_srl"
                                >
                                    {regionCategories.map((cat) => (
                                        <option value={cat._id} key={cat._id}>
                                            {cat.label}
                                        </option>
                                    ))}
                                    <option value="">선택없음</option>
                                </select>
                            </span>
                        </div>
                    </div>

                    <div className="write_type">
                        <div className="title">장소</div>
                        <div className="input_form">
                            <div>
                                <input
                                    id="address"
                                    onChange={handleInputChange("address")}
                                    value={address}
                                    type="text"
                                    className="text w100"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="write_type">
                        <div className="title">출발장소</div>
                        <div className="input_form">
                            <div>
                                <input
                                    id="startPoint"
                                    onChange={handleInputChange("startPoint")}
                                    value={startPoint}
                                    type="text"
                                    className="text w100"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="write_type">
                        <div className="title">불포함사항</div>
                        <div className="input_form">
                            <div>
                                <input
                                    id="startPoint"
                                    onChange={handleInputChange("unIncluded")}
                                    value={unIncluded}
                                    type="text"
                                    className="text w100"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="write_type">
                        <div className="title">키워드</div>
                        <div className="input_form">
                            <TagInput
                                id="keywards"
                                tags={keyWards}
                                setTags={setkeyWards}
                            />
                            <p className="input_form info_txt">
                                <i className="jandaicon-info2 mini" /> 'Enter'로
                                구분시 자동으로 키워드가 생성됩니다. 단어
                                하나하나 'Enter'를 쳐주세요.
                            </p>
                        </div>
                    </div>
                    <div className="write_type">
                        <div className="title">공개/비공개</div>
                        <div className="input_form">
                            <ul>
                                <li>
                                    <input
                                        onChange={handleChangeOpen}
                                        type="radio"
                                        name="isOpen"
                                        id="status-open"
                                        value={"true"}
                                        checked={!!isOpen}
                                        className="radio"
                                    />
                                    <label htmlFor="status-open">공개</label>
                                </li>
                                <li>
                                    <input
                                        onChange={handleChangeOpen}
                                        type="radio"
                                        name="isOpen"
                                        id="status-sold"
                                        value={"false"}
                                        checked={!isOpen}
                                        className="radio"
                                    />
                                    <label htmlFor="status-sold">비공개</label>
                                </li>
                            </ul>
                            <p className="info_txt">
                                <i className="jandaicon-info2 mini" /> 비공개를
                                하셔도 관리자와 판매자는 열람이 가능합니다.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="write_type bottom_write">
                    <div className="write_type">
                        <div className="title">이미지</div>
                        <div className="img_box_add">
                            <ul className="img_add">
                                {thumbs.map((thumb, i) => (
                                    <li key={i + "thumb"} className="on_file">
                                        {thumb.name}
                                        <i
                                            onClick={handleClearThumb(i)}
                                            className="flaticon-multiply icon_x"
                                        ></i>
                                    </li>
                                ))}
                                {thumbs.length < 6 && (
                                    <li id="thumb" onClick={handleUploadClick}>
                                        {imgUploading
                                            ? "파입업로드중..."
                                            : "이미지추가"}
                                        <i className="flaticon-add icon_plus"></i>
                                    </li>
                                )}
                                <input
                                    onChange={handleChangeSumbNail}
                                    ref={hiddenFileInput}
                                    hidden
                                    type="file"
                                />
                            </ul>
                            <p className="input_form info_txt blue_font">
                                <i className="jandaicon-info2 mini" /> 썸네일
                                이미지 사이즈는 720px * 434px 입니다. 이미지
                                사이즈는 자동으로 줄여지지 않습니다. 꼭 이미지를
                                권장 사이즈에 맞춰주세요. 그래야 좀더 퀄리티
                                높은 상품으로 등록이 됩니다. <br />
                                (이미지 사이즈를 지키지 않는 건으로 인한 이상
                                현상은 문의를 받지 않습니다.)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="write_con">
                    <ul className="con_tap">
                        <li
                            id="tap1"
                            onClick={handleTab(1)}
                            className={tabOnCheck(1)}
                        >
                            <span>
                                <i>01.</i>상세일정(타임라인)
                            </span>
                        </li>
                        <li
                            id="tap2"
                            onClick={handleTab(2)}
                            className={tabOnCheck(2)}
                        >
                            <span>
                                <i>02.</i>이런분께 추천드립니다.
                            </span>
                        </li>
                        <li
                            id="tap3"
                            onClick={handleTab(3)}
                            className={tabOnCheck(3)}
                        >
                            <span>
                                <i>03.</i>참가자 준비물
                            </span>
                        </li>
                        <li
                            id="tap4"
                            onClick={handleTab(4)}
                            className={tabOnCheck(4)}
                        >
                            <span>
                                <i>04.</i>유의사항.
                            </span>
                        </li>
                    </ul>
                    <div
                        {...tapDisplay(1)}
                        id="texta_01"
                        className="texta tourWrite__daypikcer"
                    >
                        <h5 id="itinerary">상세일정</h5>
                        <DayRangePicker
                            intercept
                            Header={
                                tempSavedIts && (
                                    <h2 style={{ marginBottom: "1rem" }}>
                                        새로운 출발일을 선택 해주세요
                                    </h2>
                                )
                            }
                            month={dayjs().add(20, "day").toDate()}
                            disabledDays={{
                                before: dayjs().add(30, "day").toDate(),
                                after: dayjs().add(90, "day").toDate(),
                            }}
                            isRange={type === ProductType.TOUR}
                            onRangeChange={handleDateState}
                            from={firstDate}
                            to={lastDate}
                        >
                            <div className="tourWrite__dayPikcerRangeViewer  mb10">
                                <div>
                                    선택된 날짜 {yyyymmdd(firstDate)} ~
                                    {yyyymmdd(lastDate)}
                                </div>
                            </div>
                            <div className="info_txt">
                                <h4>
                                    <i className="jandaicon-info2"></i>여행일정
                                    등록시 유의점
                                </h4>
                                <ul>
                                    <li>
                                        - 여행일은 최소 30일 이전 최대 90일
                                        이상해주세요.
                                    </li>
                                    <li>
                                        - 달력에서 여행기간을 선택해 주세요.
                                        그래야 아래에 입력창이 생성됩니다.
                                    </li>
                                    <li>
                                        - 이미지를 첨부시에 이미지 내부에
                                        이미지를 입력할 경우 텍스트를 크게
                                        써주세요.
                                        <br />
                                        모바일 화면도 고려해야합니다.
                                    </li>
                                    <li>
                                        - 이미지를 꼭 한번 용량을 압축해서
                                        올려주세요. 로딩시에 시간이 단축됩니다.
                                        <br />
                                        <a
                                            href="https://www.iloveimg.com/ko/compress-image"
                                            target="_blank"
                                        >
                                            (추천사이트 이동)
                                        </a>
                                    </li>
                                    <li>
                                        - 일정에 관련된 내용만 간략하게
                                        써주세요.
                                    </li>
                                </ul>
                            </div>
                        </DayRangePicker>
                        {filterOver(its).map((itinery, index) => (
                            <div key={"itineryForm" + index}>
                                <ItineryForm
                                    setSelectEditorIndex={setSelectEditorIndex}
                                    selectEditorIndex={selectEditorIndex}
                                    index={index}
                                    setits={setits}
                                    itinery={itinery}
                                    its={its}
                                />
                            </div>
                        ))}
                        <p className="input_form info_txt mb20">
                            <i className="jandaicon-info2 mini" />{" "}
                            타임라인(스케줄)은 시간 단위로 입력하셔야 합니다.
                            시간 단위로 입력을 하시고 "일정추가"를 클릭하셔서
                            다음 시간대의 일정을 입력해주세요.
                            <br />
                            스케줄 이외에 부연설명은 "2.안내및참고"에
                            입력해주세요. <br /> 사진은 너무 큰 것은 넣지
                            마세요. 작게 줄이거나 포토샵을 하셔서 합쳐서
                            올려주세요.
                        </p>
                    </div>
                    <div {...tapDisplay(2)} id="texta_02" className="texta">
                        <h5>상품 안내문</h5>
                        <p className="input_form info_txt mb20">
                            <i className="jandaicon-info2 mini" /> 여행에 대한
                            부연설명을 입력해주세요. 사진과 이미지가 적절히
                            섞여야 합니다.
                            <br />
                            단 이미지는 원본을 넣지 마시고, 포토샵으로 다듬어서
                            넣어주세요. 여러사진을 넣을 경우에는 이미지를 합쳐서
                            편집하여 올려주세요. <br />
                            표는 모바일에서 보기 힘들 수 있으니 가급적 사용하지
                            맙시다.
                        </p>
                        <Editor
                            edit={tab === 2}
                            data={contents}
                            onChange={handleTextData("contents")}
                        />
                    </div>
                    <div {...tapDisplay(3)} id="texta_03" className="texta">
                        <h5>참가자 준비물</h5>
                        <p className="input_form info_txt mb20">
                            <i className="jandaicon-info2 mini" /> 여행이나
                            체험시에 요구할 준비물이나 필수품등을 직관적으로
                            적어주세요. 너무 추상적일 경우에는 의사전달이 안될
                            수 있습니다.
                        </p>
                        <Editor
                            edit={tab === 3}
                            data={inOrNor}
                            onChange={handleTextData("inOrNor")}
                        />
                    </div>
                    <div {...tapDisplay(4)} id="texta_04" className="texta">
                        <h5>간략한 안내문</h5>
                        <p className="input_form info_txt mb20">
                            <i className="jandaicon-info2 mini" /> 안내문은
                            상세페이지 제일 맨위 썸네일 밑에 출력이 됩니다. 해당
                            상품에 대한 필수 안내, 혹은 참여가 힘들 수 있는
                            연령층을 공지 한다던지, 필수 주의사항 등을 적는게
                            바람직합니다.
                        </p>
                        <Editor
                            edit={tab === 4}
                            data={info}
                            onChange={handleTextData("info")}
                        />
                    </div>
                </div>
                <div className="boardNavigation">
                    <div className="float_left">
                        <button
                            onClick={handleTempSave}
                            type="button"
                            className="btn medium"
                        >
                            임시 저장
                        </button>
                        <button
                            onClick={handleLoad}
                            type="button"
                            className="btn medium"
                        >
                            불러오기
                        </button>
                    </div>
                    <div className="float_right">
                        {/* 차라리 여기서 상품을 취소 상태로 변경하거나, 다시 오픈 상태로 변경 하거나 요청을 수락 하거나  */}
                        {/* {isManager && status === ProductStatus.OPEN && <button onClick={handleEdit} type="submit" className="btn medium pointcolor">
                        상품취소
                    </button>}
                    {isManager && status === ProductStatus.CANCELD && <button onClick={handleEdit} type="submit" className="btn medium pointcolor">
                        취소철회
                    </button>}
                    {isManager && status === ProductStatus.UPDATE_REQ && <button onClick={handleEdit} type="submit" className="btn medium pointcolor">
                        수정수락
                    </button>}
                    {isManager && status === ProductStatus.READY && <button onClick={handleEdit} type="submit" className="btn medium pointcolor">
                        생성수락
                    </button>} */}
                        {!updateAble && !isCreateMode && isParterNonB && (
                            <button
                                disabled={!normalPartnerUpdateReqAble}
                                onClick={handleEditReq}
                                type="submit"
                                className="btn medium pointcolor"
                            >
                                {status === ProductStatus.UPDATE_REQ_REFUSED
                                    ? "재신청"
                                    : "수정요청"}
                                <i
                                    data-for="ToolTipLayOut"
                                    className="jandaicon-info2 tooltip"
                                    data-iscapture={true}
                                    data-tip="수정요청은 예약인원이 없을때만 가능합니다."
                                />
                            </button>
                        )}
                        {updateAble && (
                            <button
                                onClick={handleEdit}
                                type="submit"
                                className="btn medium pointcolor"
                            >
                                {status === ProductStatus.REFUSED
                                    ? "재신청"
                                    : "수정완료"}
                            </button>
                        )}
                        {isCreateMode && (
                            <button
                                onClick={handleCreate}
                                type="submit"
                                className="btn medium pointcolor"
                            >
                                등록완료
                            </button>
                        )}
                        {isManager && (
                            <button
                                onClick={
                                    notSample
                                        ? handleSampleCreate
                                        : handleSampleUpdate
                                }
                                type="submit"
                                className="btn medium pointcolor"
                            >
                                {notSample
                                    ? "샘플로 등록하기"
                                    : "샘플 업데이트"}
                            </button>
                        )}
                        <button
                            onClick={handleCancel}
                            type="button"
                            className="btn medium impact"
                        >
                            취소
                        </button>
                        {!isCreateMode && (
                            <button
                                onClick={handleDelete}
                                type="submit"
                                className="btn medium"
                            >
                                삭제
                            </button>
                        )}
                    </div>
                </div>
                <LocalStorageBoard key={loadKey} onLoad={setTourData} />
                <SampleBoard
                    items={sampleProducts}
                    onDelete={handleSampleDelete}
                    onLoad={handleSampleLoad}
                />
            </div>
            <Prompt
                id="UpdateMemo"
                onSubmit={handleSubmitUpdateReq}
                title="업데이트 변경 사항을 입력 해주세요."
            />
            {/* <ReactTooltip id="ToolTipLayOut" effect="solid" type="info" /> */}
        </div>
    );
};

export default auth(ALLOW_SELLERS)(TourWrite);

const updateBtnDisableCheck = (
    product: Fproduct,
    isParterB: boolean
): boolean => {
    if (!product) return false;
    // 기업 파트너면 업데이트가 가능하다.
    if (isParterB) return true;
    // 예약자가 없으면 업데이트 요청이 가능하다.
    if (product.peopleCount === 0) return true;
    // 확정되지 않은 예약만 수정요청 할 수 있다.
    if (product.determined === false) return true;
    return false;
};
