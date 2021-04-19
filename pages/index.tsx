import React, { useContext, useEffect } from 'react';
import pageInfoDefault from 'info/main.json';
import { Meta } from 'components/common/meta/Meta';
import { Upload } from 'components/common/Upload';
import Link from 'next/link';
import defaultPageInfo from "../info/main.json"
import { useRouter } from 'next/router';
import { getStaticPageInfo, Ipage } from '../utils/page';
import { GoodsListAPI } from '../components/common/GoodsListAPI';
import Slider from "react-slick";
import { usePageEdit } from '../hook/usePageEdit';
import { openAutos } from '../hook/usePopups';
import { AppContext } from './_app';
import { usePublicSellerList } from '../hook/useUser';
import { ProfileListAPI, ProfileListAPIwithGoods } from '../components/common/ProfileListAPI';
import { PageEditor } from '../components/common/PageEditer';
import { Bg } from '../components/Img/Img';
import { LinkRoundIcon } from '../components/common/icon/LinkIcon';
import { A } from '../components/A/A';
import { tourSearchLink } from './search';

export const getStaticProps = getStaticPageInfo("main")
export const Main: React.FC<Ipage> = (pageInfo) => {
  const { homepage, groupsMap, categoriesMap } = useContext(AppContext);
  const { items } = usePublicSellerList();

  const pageTools = usePageEdit(pageInfo, defaultPageInfo);
  const router = useRouter()

  const { edit, imgEdit, imgKit, linkEdit, page, editMode, get } = pageTools;

  useEffect(() => {
    if (homepage?.modal) {
      openAutos(homepage?.modal)
    }
  }, [homepage?.modal])

  const handleLink = (key: keyof typeof page) => () => {
    if (!editMode)
      // @ts-ignore
      router.push(page[key].value)
  }

  return <div className="body main" id="main" >
    <Meta title="[It's Guide] 잇츠가이드에서 당신의 가이드를 매칭 해드립니다." description="잇츠가이드로 여행을 시작하세요. 맞춤 여행을 경험해보세요." />
    <div className="main_con_box1 Slider_box">
      <PageEditor pageTools={pageTools} />
      <Slider
        autoplay
        prevArrow={<div className="rev"><img src="/img/svg/arr_right_w.svg" alt="이전" /></div>}
        nextArrow={<div className="next"><img src="/img/svg/arr_right_w.svg" alt="다음" /></div>}
        arrows={true}
        dots={false}
        infinite={true}
        className="mainSlider">
        <div>
          <Bg className="main_top_images img1"  {...imgKit("m_01_mainBg")}>
            <div className="w1200">
              <strong {...edit("m_01_title")} />
              <span {...edit('m_01_subtitle')}>
              </span>
              <div className="btn_list">
                {categoriesMap.REGION.map(region =>
                  <Link key={region._id} href={tourSearchLink({
                    regionLabel: region.label
                  })}>
                    <a className="tourLink">{region.label}</a>
                  </Link>
                )}
              </div>
            </div>
          </Bg>
        </div>
        <div>
          <Bg className="main_top_images img1"  {...imgKit("m_01_mainBg2")}>
            <div className="w1200">
              <strong {...edit("m_01_title2")} />
              <span {...edit('m_01_subtitle2')}>
              </span>
              <div className="btn_list">
                <Link href="/member/join">
                  <a className="tourLink" {...edit("m_01_mainLink2_1")} />
                </Link>
              </div>
            </div>
          </Bg>
        </div>
      </Slider>
    </div>

    <div className="main_con_box2">
      <div className="w1200">
        {/* <div className="top_txt">
          <h2 >
            <span {...edit("m_02_title")} />
          </h2>
          <strong {...edit("m_02_number")} />
        </div> */}
        <ProfileListAPI mode="short" />
      </div>
    </div>
    <div className="main_con_box3">
      <div className="w1200">
        <div className="top_txt">
          <span className="sidetxt" {...edit("m_02_title")} />
          <h2 >
            <span {...edit("m_03_title")} />
          </h2>
        </div>
        <ul>
          <li><a href={tourSearchLink({
            keyward: get("m_03_link01")
          })} {...edit("m_03_link01")} /></li>
          <li><a href={
            tourSearchLink({
              keyward: get("m_03_link02")
            })
          } {...edit("m_03_link02")} /></li>
          <li><a href="/tour" {...edit("m_03_link03")} /></li>
          <li><a href="/tour" {...edit("m_03_link04")} /></li>
          <li><a href="/tour" {...edit("m_03_link05")} /></li>
          <li><a href="/tour" {...edit("m_03_link06")} /></li>
          <li><a href="/tour" {...edit("m_03_link07")} /></li>
          <li><a href="/tour" {...edit("m_03_link08")} /></li>
          <li><a href="/tour" {...edit("m_03_link09")} /></li>
          <li><a href="/tour" {...edit("m_03_link10")} /></li>
          <li><a href="/tour" {...edit("m_03_link11")} /></li>
          <li><a href="/tour" {...edit("m_03_link12")} /></li>
          <li><a href="/tour" {...edit("m_03_link13")} /></li>
        </ul>
      </div>
    </div>

    <div className="main_con_box4">
      <div className="w1200">
        <div className="deal_list">
          <div className="alignment">
            <div className="left_div"><h2><span {...edit("goods_list1_title")} /></h2></div>
            <div className="right_div">
              <span className="goto_page"><a href="/tour">바로가기<i className="flaticon-menu-1"></i></a></span>
            </div>
          </div>
          <GoodsListAPI initialOption={{
            initialViewCount: 4,
            initialFilter: {
              _id_in: groupsMap.Main1
            }
          }} />
        </div>

        <div className="deal_list">
          <div className="alignment">
            <div className="left_div"><h2 >
              <span {...edit("goods_list2_title")} />
            </h2>
            </div>
            <div className="right_div">
              <span className="goto_page"><a href="/tour">바로가기<i className="flaticon-menu-1"></i></a></span>
            </div>
          </div>
          <GoodsListAPI slide initialOption={{
            initialViewCount: 8,
            initialSort: []
          }} />
        </div>

      </div>
    </div>

    <div className="main_con_box5">
      <div className="w1200">
        <div className="txt">
          <h2>
            GUIDE<span {...edit("m_05_subtitle")} />
          </h2>
        </div>
        <ProfileListAPIwithGoods />
      </div>
    </div>
    <div className="main_con_box6">
      <div className="w1200">
        <h2>추천 테마 여행</h2>
        <div className="theme_deal">
          <ul>
            <Bg onClick={handleLink("m_06_link01_bgimg_link")} {...imgKit("m_06_link01_bgimg")} tag="li" className="top_01">
              <A className="m_06_link__linker" {...linkEdit("m_06_link01_bgimg_link")} editComponent={<LinkRoundIcon />} />
              <div className="theme_deal__textBox">
                <span className="first" {...edit("m_06_link01_text")} /><br />
                <span className="tag" {...edit("m_06_link01_tage")} />
              </div>
            </Bg>
            <Bg onClick={handleLink("m_06_link02_bgimg_link")} {...imgKit("m_06_link02_bgimg")} tag="li" className="top_02">
              <A className="m_06_link__linker" {...linkEdit("m_06_link02_bgimg_link")} editComponent={<LinkRoundIcon />} />
              <div className="theme_deal__textBox">
                <span className="title" {...edit("m_06_link02_text")} />
              </div>
            </Bg>
            <Bg onClick={handleLink("m_06_link03_bgimg_link")} {...imgKit("m_06_link03_bgimg")} tag="li" className="top_03">
              <A className="m_06_link__linker" {...linkEdit("m_06_link03_bgimg_link")} editComponent={<LinkRoundIcon />} />
              <div className="theme_deal__textBox">
                <span className="title" {...edit("m_06_link03_text")} />
              </div>
            </Bg>
            <Bg onClick={handleLink("m_06_link04_bgimg_link")} {...imgKit("m_06_link04_bgimg")} tag="li" className="top_04">
              <A className="m_06_link__linker" {...linkEdit("m_06_link04_bgimg_link")} editComponent={<LinkRoundIcon />} />
              <div className="theme_deal__textBox">
                <span className="title" {...edit("m_06_link03_text")} />
              </div>
            </Bg>
            <Bg onClick={handleLink("m_06_link05_bgimg_link")} {...imgKit("m_06_link05_bgimg")} tag="li" className="top_05">
              <A className="m_06_link__linker" {...linkEdit("m_06_link05_bgimg_link")} editComponent={<LinkRoundIcon />} />
              <div className="theme_deal__textBox">
                <span className="title" {...edit("m_06_link03_text")} />
              </div>
            </Bg>
            <Bg onClick={handleLink("m_06_link06_bgimg_link")} {...imgKit("m_06_link06_bgimg")} tag="li" className="top_06">
              <A className="m_06_link__linker" {...linkEdit("m_06_link06_bgimg_link")} editComponent={<LinkRoundIcon />} />
              <div className="theme_deal__textBox">
                <span className="title" {...edit("m_06_link03_text")} />
              </div>
            </Bg>
          </ul>
        </div>
      </div>
    </div>

    <div className="main_con_box8">
      <div className="w1200">

        {/* 최신순 */}
        <div className="deal_list">
          <div className="alignment">
            <div className="left_div"><h2><span {...edit("goodsListA_title")} /></h2></div>
            <div className="right_div">
              <span className="goto_page"><a href="/tour">바로가기<i className="flaticon-menu-1"></i></a></span>
            </div>
          </div>
          <GoodsListAPI initialOption={{
            initialViewCount: 4,
          }} />
        </div>

        {/* 리뷰순 */}
        <div className="deal_list">
          <div className="alignment">
            <div className="left_div"><h2><span {...edit("goodsListB_title")} /></h2></div>
            <div className="right_div">
              <span className="goto_page"><a href="/tour">바로가기<i className="flaticon-menu-1"></i></a></span>
            </div>
          </div>
          <GoodsListAPI initialOption={{
            initialViewCount: 4,
            initialFilter: {
              _id_in: groupsMap.Main1
            }
          }} />
        </div>
      </div>
    </div>


    <div className="main_con_box7">
      <div className="box01">
        <div className="w1200">
          <span className="sidetxt" {...edit("m_07_box01_subtitle")} />
          <h2>
            <span {...edit("m_07_box01_title")} />
          </h2>
          <div className="link"><a href="/member/join" {...edit("m_07_box01_link")}></a></div>
        </div>
        <div className="ovj" {...edit("m_07_box01_ovj")} />
      </div>
      <div className="box02">
        <div className="left">
          <h3 {...edit("m_07_box02_title")} />
          <p ><span {...edit("m_07_box02_text")} /></p>
        </div>
        <Bg className="right" {...imgKit("m_07_box02_rigthbg")}>
          <div className="txt">
            <strong {...edit("m_07_box02_rigthnumber")} />
            <p><span {...edit("m_07_box02_rigthtitle")} /></p>
          </div>
        </Bg>
      </div>
      <div className="box03">
        <Bg className="left" {...imgKit("m_07_box03_rigthbg")}>
          <Upload onUpload={imgEdit("m_07_box03_rigthbg")} />
          <div className="txt">
            <strong {...edit("m_07_box03_rigthnumber")} />
            <p><span {...edit("m_07_box03_rigthtitle")} /></p>
          </div>
        </Bg>
        <div className="right">
          <h3 {...edit("m_07_box03_title")} />
          <p {...edit("m_07_box03_text")} />
        </div>
      </div>
    </div>
  </div >

};

export interface IGetProps {
  pageInfo: typeof pageInfoDefault | "",
}

export default Main;
