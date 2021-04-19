import React, { useState, useContext, useEffect } from 'react';
import pageInfoDefault from 'info/main.json';
import { getEditUtils } from 'utils/pageEdit';
import { AppContext } from './_app'
import { Meta } from 'components/common/meta/Meta';
import { Upload } from 'components/common/Upload';
import Link from 'next/link';
import { HiddenSubmitBtn } from 'components/common/HiddenSubmitBtn';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { usePageInfo } from 'hook/usePageInfo';
import { IuseProductList, useProductList } from 'hook/useProduct';
import { useRouter } from 'next/router';

const DummyPhoto = [{
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}];


interface IProps {
  context: IMainWrapContext
}
export const Main: React.FC<IProps> = ({ context }) => {
  console.log("AWESOME")
  const { items, sitePageInfo } = context;
  const { editMode } = useContext(AppContext);
  const original = sitePageInfo || pageInfoDefault;
  const [page, setPage] = useState(original);
  const { edit, imgEdit, bg } = getEditUtils(editMode, page, setPage)
  const [model, setModel] = useState();
  const router = useRouter()


  const toProductBoard = (id: string) => {
    router.push(id);
  }


  return <div className="body main" id="main" >
    <Meta title="메인페이지" description="ㅁㄴㅇㄴ" />
    <div className="main_con_box1">
      <div
        className="main_top_images"
        style={{ ...bg("mainBg") }}
      >
        <Upload onUpload={imgEdit("mainBg")} />
        <div className="ovj"></div>
        <div className="w1200">
          <strong {...edit("title")} />
          <span {...edit('subtitle')}>
          </span>
          <div className="btn_list">
            <Link href="/tour">
              <a className="tourLink" {...edit("mainLink1")} />
            </Link>
            <Link href="/tour?exp=true">
              <a  {...edit("mainLink2")} />
            </Link>
          </div>
        </div>

      </div>
    </div>
    <div className="main_con_box2">
      <div className="w1200">
        <div className="top_txt">
          <h2 {...edit("purposeTitle")} />
          <span {...edit("purposeSubTitle")}></span>
        </div>
        <ul>
          <li>
            <i className="icon_01"></i>
            <strong  {...edit("purposeCircle1")} />
            <span {...edit("purposeCircle1_en")} />
          </li>
          <li>
            <i className="icon_02"></i>
            <strong {...edit("purposeCircle2")} />
            <span {...edit("purposeCircle2_en")} />
          </li>
          <li>
            <i className="icon_03"></i>
            <strong {...edit("purposeCircle3")} />
            <span {...edit("purposeCircle3_en")} />
          </li>
        </ul>
      </div>
    </div>
    <div className="main_con_box3">
      <div className="w1200">
        <div className="top_txt">
          <h2 {...edit("busi_area_title")} />
        </div>
        <ul>
          <li className="img01">
            <i></i>
            <strong {...edit("busi_area1_title")} />
            <span {...edit("busi_area1_desc")} />
          </li>
          <li className="img02">
            <i></i>
            <strong {...edit("busi_area2_title")} />
            <span {...edit("busi_area2_desc")} />
          </li>
          <li className="img03">
            <i></i>
            <strong {...edit("busi_area3_title")} />
            <span {...edit("busi_area3_desc")} />
          </li>
          <li className="img04">
            <i></i>
            <strong  {...edit("busi_area4_title")} />
            <span {...edit("busi_area4_desc")} />
          </li>
        </ul>
      </div>
    </div>
    <div className="main_con_box4">
      <div className="w100">
        <div className="photo_box">
          <ul className="photo_ul line3 main_photo_ul">
            <li className="top_txt">
              <h2 {...edit("valuable_exp")} />
              <span className="txt" {...edit("valuable_exp_sub")} />
              <div className="btn_list">
                <span><Link href="/tour"><a>공정여행</a></Link></span>
                <span><Link href="/tour"><a>더많은체험</a></Link></span>
              </div>
              <i><svg><polygon points="69.22 12.71 0 12.71 0 10.71 64.33 10.71 54.87 1.43 56.27 0 69.22 12.71" /></svg></i>
            </li>
            {items.map((item) =>
              <Link key={item._id} href={`/tour/view/${item._id}`}>
                <li className="list_in">
                  <div className="img" onClick={() => { toProductBoard(item._id) }} style={{
                    backgroundImage: `url(${item.images[0]?.uri})`
                  }}></div>
                  <div className="box">
                    <div className="category"><span>{item.category?.label}</span></div>
                    <div className="title">{item.title}</div>
                    <div className="subTitle">
                      {item.subTitle}
                    </div>
                  </div>
                </li >
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
    <div className="main_con_box5">
      <div className="txt">
        <h2 {...edit('bottom_title')} />
        <p {...edit('bottom_desc')} />
      </div>
      <div
        className="main_bg_img"
        style={{ ...bg("bottom_bg_img") }}
      />
      <Upload onUpload={imgEdit("bottom_bg_img")} />
    </div>
    <HiddenSubmitBtn original={original} setData={setPage} path="main" data={page} />
  </div >
};


interface IGetProps {
  sitePageInfo: typeof pageInfoDefault | "",
}
export const getStaticProps: GetStaticProps<IGetProps> = async (context) => {
  const { data } = await usePageInfo("main");
  return {
    revalidate: 1,
    props: {
      sitePageInfo: data?.value || "",
    }, // will be passed to the page component as props
  }
}

interface IMainWrapContext extends IuseProductList, IGetProps {
}

const MainWrap: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ sitePageInfo }) => {
  const productList = useProductList({ initialPageIndex: 1, initialViewCount: 8 });
  const context: IMainWrapContext = {
    ...productList,
    sitePageInfo
  }

  return <Main context={context} />
}

export default MainWrap;