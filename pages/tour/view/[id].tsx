import dayjs from "dayjs";
import { openListFilter, useProductFindById, useProductList } from "hook/useProduct";
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
import { getStaticPageInfo, Ipage } from "../../../utils/page";
import { usePageEdit } from "../../../hook/usePageEdit";
import defaultPageInfo from 'info/tourView.json';
import "slick-carousel/slick/slick.css";
import { ProductPhotoBlock } from "../../../components/list/ProductPhoto";
import { useGroupFind } from "../../../hook/useGroup";
import { randomSort } from "../../../utils/randomSort";
import isEmpty from "../../../utils/isEmpty";
import { cloneObject } from "../../../utils/clone";
import { productList_ProductList_data, ProductStatus } from "../../../types/api";
import { productStatus } from "../../../utils/enumToKr";
import { ProductDateSelecter } from "../../../components/ProductDateSelecter";
import { Change } from "../../../components/loadingList/LoadingList";
import OnImagesLoaded from "../../../components/onImageLoad/OnImageLoad";
import { useImgLoading } from "../../../hook/useImgLoading";
import PageDeny from "../../Deny";
import { IModalInfo, ReviewModal } from "../../../components/reviewModal/ReviewModal";
import { useModal } from "../../../hook/useModal";
import Rating from "react-rating";
import { yyyymmdd } from "../../../utils/yyyymmdd";
import { RatingStar } from "../../../components/rating/Rating";
import { BG, BGprofile } from "../../../types/const";
import { cutStr } from "../../../utils/cutStr";

export const getStaticProps = getStaticPageInfo("tourView");
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } }
    ],
    fallback: true
  };
}

const TourDetail: React.FC<Ipage> = (pageInfo) => {
  const reviewModalHook = useModal<IModalInfo>();

  const router = useRouter();
  const { item: group } = useGroupFind("Recommend")
  const groupExsist = !isEmpty(group?.members);
  const { handleLoaded, loaded } = useImgLoading()
  const { items, filter, setFilter } = useProductList({
    initialFilter: {
      ...openListFilter,
      _id_in: groupExsist ? group?.members : undefined
    }
  });

  const randomSorted: productList_ProductList_data[] = groupExsist ? cloneObject(items).sort((a, b) => group?.members.indexOf(a._id)! - group?.members.indexOf(b._id)!) : randomSort(items);

  const pageTools = usePageEdit(pageInfo, defaultPageInfo);
  const id = router.query.id as string;
  const { loading, item: product, getData } = useProductFindById(id);
  const { isManager, isAdmin, myProfile, isSeller } = useContext(AppContext);
  const isMyProduct = product?.author?._id === myProfile?._id;
  const status = product?.status;
  const reviews = product?.productReview || [];

  const reviewPagination = generateClientPaging(reviews, 4);


  const isMyReview = (authorId: string) => authorId === "";

  const { paging: questionPageInfo, slice: questionSliced, setPage: setQuestionPage } = generateClientPaging(product?.questions || [], 4);


  const sliderRef = useRef<SLIDER>(null);
  const { count, handleCount, totalPrice } = useBasketCount({
    adult_price: product?.adult_price,
    baby_price: product?.baby_price,
    kids_price: product?.kids_price,
    capacity: product ? product.maxMember - product.peopleCount : 999,
    defaultCount: {
      adult: 0,
      baby: 0,
      kids: 0
    }
  });

  const [sliderIndex, setSlideIndex] = useState(0);
  const { scrollY } = useScroll();
  const tabOnCheck = tabCheck.bind(tabCheck, scrollY);

  const [productDelete] = useProductDelete({
    onCompleted: ({
      ProductDelete
    }) => {
      if (ProductDelete.ok) {
        alert("삭제완료");
        router.push("/")
      }
    }
  })

  const toWrite = () => router.push(`/tour/write/${product?._id}`)

  const handleEdit = () => {
    toWrite();
  }

  const handleDelete = () => {
    productDelete({
      variables: {
        id: product!._id
      }
    })
  }

  const handleSliderMove = (index: number) => () => {
    sliderRef.current?.slickGoTo(index)
    setSlideIndex(index);
  }

  const checkImgOn = (index: number): string => {
    return index === sliderIndex ? "on" : ""
  }

  const addBracket = () => {
    addItem({
      count,
      price: totalPrice,
      name: product!.title,
      _id: product!._id
    })
  }

  const handleAddBracket = () => {
    addBracket();
  }

  const handleQnaClick = (id: string) => () => {
    router.push("/service/qna/view/" + id);
  }

  const handleProductChange = (target?: productList_ProductList_data) => {
    if (!target) return;
    getData({
      variables: {
        _id: target._id
      }
    })
  }

  const handleDoPay = () => {
    const addPeople = count.adult + count.baby + count.kids;
    if (addPeople === 0) {
      alert("인원을 먼저 선택 해주세요.");
      return;
    }

    const availableCount = (product?.maxMember || 0) - (product?.peopleCount || 0)

    if (availableCount < addPeople) {
      alert(`해당 인원을 수용 할 수 없습니다. 전화문의 부탁드립니다.`);
    }

    if (availableCount)
      addBracket();
    router.push("/payment/")
  }

  useEffect(() => {
    if (product && product?.status !== ProductStatus.OPEN)
      alert("해당 상품은 판매중이 아닙니다.")
  }, [])



  const randomSliced = useMemo(() => randomSorted.slice(0, 3), [randomSorted.length])

  if (loading) return <PageLoading />
  if (!product) return <div></div>

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
    itinerary,
    contents,
    inOrNor,
    caution,
    code,
    peopleCount
  } = product;

  const isPast = dayjs(startDate).isBefore(new Date());

  if (!isSeller && !product.isOpen) return <PageDeny msg="해당 게시글은 비공개 상태입니다." />
  // if (!isSeller && product.status !== ProductStatus.OPEN) return <Page404 />

  return <div className="edtiorView">
    {!loaded && <PageLoading />}
    <OnImagesLoaded delay={5000} onLoaded={handleLoaded} >
      <SubTopNav
        pageTools={pageTools}
        children={
          <>
            <li className="homedeps1">
              <Link href="/tour/">
                <a>Tour</a>
              </Link></li>
            <li className="homedeps2">
              <Link href="/tour/list">
                <a >상품리스트</a>
              </Link>
            </li>
          </>
        }
      />
      <Change change={!loading} >
        <div className="tour_details_in w1200">

          <div className="Document">
            <div className="Read_box">
              <div className="details_photo">
                <div className="main_photo">
                  <Slider ref={sliderRef} >
                    {images?.map((img, i) =>
                      <Slide key={i + "sliderImg"} >
                        <img src={img?.uri} alt={img.name} />
                      </Slide>
                    ) || ""}
                  </Slider>
                </div>
                <ul className="photo_list">
                  {images?.map((img, i) =>
                    <li className={checkImgOn(i)} onClick={handleSliderMove(i)} key={i + "sliderImgSub"}><span><img src={img?.uri} alt={img.name} /></span></li>
                  )}
                </ul>
                <div className="details_info_txt">
                  <div className="ck-content" dangerouslySetInnerHTML={{ __html: info }} />
                </div>
              </div>
            </div>
            <div id="viewControl">
              <div className="control_box">
                <div className="box2">
                  <table cellSpacing={0} summary="Extra Form" className="option_tb mb10 big_pd">
                    <tbody>
                      <tr>
                        <td colSpan={2} className="category bt_no">
                          <span className="pnt">문화/예술</span>
                          <span className="code">상품코드 {code}</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="bt_line">
                          <h3 className="maintitle">{title}</h3>
                          <p className="subtitle">{subTitle}</p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="tag bt_line">
                          <div className="tt">키워드</div>
                          <ul>
                            {keyWards?.map((keyward, i) =>
                              <li key={i + "keyward"}>#{keyward}</li>
                            )}
                          </ul>
                        </td>
                      </tr>
                      {isSeller && <tr>
                        <th className="smtitle bt_line">상태</th>
                        <td className="smtxt bt_line">{productStatus(product.status)} {product.isOpen ? "[공개]" : "[비공개]"}</td>
                      </tr>
                      }
                      <tr>
                        <th className="smtitle bt_line">출발일</th>
                        <td className="smtxt bt_line">
                          <ProductDateSelecter currentId={product._id} key={product._id} groupCode={product.groupCode} onChange={handleProductChange} />
                        </td>
                      </tr>
                      <tr>
                        <th className="smtitle bt_line">여행기간</th>
                        <td className="smtxt bt_line">{getRangeString(product)}</td>
                      </tr>
                      <tr>
                        <th className="smtitle bt_line">최소/최대 인원</th>
                        <td className="smtxt bt_line">최소{minMember}명 최대{maxMember}명</td>
                      </tr>
                      <tr>
                        <th className="smtitle bt_line">현재인원</th>
                        <td className="smtxt bt_line">{peopleCount + "/" + maxMember}명</td>
                      </tr>
                      <tr>
                        <th className="smtitle bt_no">출발장소</th>
                        <td className="smtxt bt_no">{startPoint}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {!isPast &&
                  <div className="box">
                    <table cellSpacing={0} summary="Extra Form" className="option_tb">
                      <tbody>
                        <tr>
                          <th>대인</th>
                          <td>
                            <strong>{autoComma(adult_price)}</strong>원
                  <div className="Number__box">
                              <span onClick={handleCount("adult", false)} className="left_btn"><i className="flaticon-substract" /></span>
                              <span className="number">{count.adult}</span>
                              <span onClick={handleCount("adult", true)} className="right_btn"><i className="flaticon-add" /></span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>소인</th>
                          <td>
                            <strong>{autoComma(kids_price)}</strong>원
                  <div className="Number__box">
                              <span onClick={handleCount("kids", false)} className="left_btn"><i className="flaticon-substract" /></span>
                              <span className="number">{count.kids}</span>
                              <span onClick={handleCount("kids", true)} className="right_btn"><i className="flaticon-add" /></span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>유아</th>
                          <td>
                            <strong>{autoComma(baby_price)}</strong>원
                  <div className="Number__box">
                              <span onClick={handleCount("baby", false)} className="left_btn"><i className="flaticon-substract" /></span>
                              <span className="number">{count.baby}</span>
                              <span onClick={handleCount("baby", true)} className="right_btn"><i className="flaticon-add" /></span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="Chash__box">
                      <table cellSpacing={0} summary="Extra Form" className="chash_tb">
                        <tbody>
                          <tr>
                            <th>총 금액</th>
                            <td>
                              <strong>{autoComma(totalPrice)}</strong>원
                          </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                }
                {/* btn */}
                <div className="btn_box">
                  <div className="links_wrap">
                    <div onClick={handleAddBracket} className={`link05 ${isPast && "tourBracketBtn--disabled"}`}>
                      <a>
                        장바구니 담기
                      </a>
                    </div>
                    <div className={`link02 ${isPast && "tourBracketBtn--disabled"}`}>
                      <a onClick={handleDoPay}>
                        {isPast ? "기간종료" : "예약하기"}
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
                <span onClick={handleTab(1)} className={tabOnCheck(1)}><a>여행상세설명</a></span>
                {/* <span onClick={handleTab(2)} className={tabOnCheck(2)}><a>안내 및 참고</a></span>
                <span onClick={handleTab(3)} className={tabOnCheck(3)}><a >포함 및 불포함</a></span> */}
                <span onClick={handleTab(4)} className={tabOnCheck(4)}><a >리뷰</a></span>
                <span onClick={handleTab(6)} className={tabOnCheck(6)}><a >문의하기</a></span>
              </div>
              {/* 여행상세설명 */}
              <div className="in_box" id="tap__01">
                <h4>여행일정</h4>
                {itinerary.map((it) => <div key={it._id} >
                  <div className="hang">
                    <div className="top_day">
                      <h5>{it.title}</h5>
                      <span>{dayjs(it.date).format('YYYY.MM.DD (dd)')}</span>
                    </div>
                    <div className="tour_list">
                      {it.contents.map((con, index) => <div key={index + "con" + it._id}>
                        <div className="ck-content" dangerouslySetInnerHTML={{ __html: con }} />
                      </div>
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
                )}
              </div>
              <div className="in_box" id="tap__02">
                <h4>안내 및 참고</h4>
                <div dangerouslySetInnerHTML={{
                  __html: contents
                }} className="text ck-content" />
              </div>
              {/* 포함 및 불포함 */}
              <div className="in_box" id="tap__03">
                <h4>포함 및 불포함 </h4>
                <div dangerouslySetInnerHTML={{
                  __html: inOrNor
                }} className="text ck-content" />
              </div>

              <div className="in_box" id="tap__05" >
                <h4>주의사항</h4>
                <div dangerouslySetInnerHTML={{ __html: caution }} className="text" />
              </div>

              {/* 리뷰 */}
              <div className="in_box" id="tap__04">
                <h4>리뷰 </h4>
                <div className="text ck-content">
                  <div className="review__box">
                    <ul className="review__list">
                      {reviewPagination.slice.map(review =>
                        <li onClick={() => {
                          reviewModalHook.openModal({
                            reviewId: review._id
                          })
                        }} key={review._id}>
                          <div className="top">
                            <div className="review__list_pr" style={BGprofile(review.author?.profileImg)} />
                            <div className="review__list_star">
                              <RatingStar readonly initialRating={review.rating} />
                            </div>
                            <div className="review__list_info">
                              <strong>{review.title}</strong>
                              <span className="name">{review.authorName}</span><span className="day">{yyyymmdd(review.createdAt)}</span>
                            </div>
                          </div>
                          <div className="bottom">
                            <p>{cutStr(review.contents, 150)}</p>
                          </div>
                          {
                            true
                            // isMyReview(review._id)
                            &&
                            <Link href={`/review/write/${review._id}?pid=${id}&name=${title}`}>
                              <a onClick={(e) => { e.stopPropagation(); }} className="mini_btn small2">수정하기</a>
                            </Link>
                          }
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="boardNavigation">
                  <Paginater pageInfo={reviewPagination.paging} isMini setPage={reviewPagination.setPage} />
                  <div className="float_right">
                    <Link href={`/review/write?pid=${id}&name=${title}`}>
                      <a className="mini_btn small">리뷰 쓰러가기</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="in_box" id="tap__06">
                <h4>문의하기</h4>
                <div className="board_list_mini ln04">
                  <div className="thead">
                    <div className="th01">No.</div>
                    <div className="th02">제목</div>
                    <div className="th03">글쓴이</div>
                    <div className="th04">날짜</div>
                  </div>
                  <div className="tbody">
                    <ul>
                      {questionSliced.map(qs =>
                        <QnaLi onClick={handleQnaClick(qs._id)} key={qs._id} question={qs} />
                      )}
                    </ul>
                  </div>
                  <div className="boardNavigation">
                    <Paginater pageInfo={questionPageInfo} isMini setPage={setQuestionPage} />
                    <div className="float_right">
                      <Link href={`/service/question/write?pid=${id}&name=${title}`}>
                        <a className="mini_btn small">고객센터 문의하기</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="boardNavigation">
              <div className="float_left">
              </div>
              {(isManager || isAdmin || isMyProduct) && <div className="float_right">
                <button type="submit" onClick={handleEdit} className="btn medium pointcolor">수정</button>
                {(isManager || isAdmin || isMyProduct) && <button type="submit" onClick={handleDelete} className="btn medium">삭제</button>}
              </div>}
            </div>
            <div className="add_list">
              <h4>잇츠가이드 추천여행</h4>{/* 랜덤노출 */}
              <ul className="tourView__recommendList  list_ul line3">
                {randomSliced.map(item =>
                  <ProductPhotoBlock key={item._id} item={item} />
                )}
              </ul>
            </div>
          </div>
        </div>
      </Change>
    </OnImagesLoaded >
    <ReviewModal {...reviewModalHook} />
  </div >
}



export default TourDetail;

// 5분 //