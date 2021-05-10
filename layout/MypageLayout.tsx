import Link from "next/link";
import React, { useContext, useRef } from "react";
import { useCount } from "../hook/useCount";
import { usePageEditClientSide } from "../hook/usePageEdit";
import { useUnReadSystemNotiFind } from "../hook/useSystemNoti";
import { useUpload } from "../hook/useUpload";
import { useUserUpdate } from "../hook/useUser";
import { AppContext } from "../pages/_app";
import { Ffile, pageInfoRead_PageInfoRead_data } from "../types/api";
import { BGprofile } from "../types/const";
import { autoComma } from "../utils/formatter";
import { omits } from "../utils/omit";
import { getItemCount, Storage } from "../utils/Storage";
import mypageLayout from "../info/mypageLayout.json";
import SubTopNav from "./components/SubTop";
import { PageEditor } from "../components/common/PageEditer";
import { usePageFindByKey } from "../hook/usePageInfo";
import { isMaster } from "cluster";

interface IProp {
    item: pageInfoRead_PageInfoRead_data;
}

export const MypageLayoutWrap: React.FC = (props) => {
    const { item } = usePageFindByKey("mypageLayout");
    if (!item) return null;
    return <MypageLayout item={item} {...props} />;
};
export const MypageLayout: React.FC<IProp> = ({ children, item }) => {
    console.log({ item });
    const pageTools = usePageEditClientSide(
        "mypageLayout",
        item.value,
        mypageLayout
    );
    const [userUpdate] = useUserUpdate();
    const { signleUpload } = useUpload();
    const { items } = useUnReadSystemNotiFind();
    const {
        isSeller,
        isParterB,
        isParterNonB,
        myProfile,
        isLogin,
    } = useContext(AppContext);
    const { data: count } = useCount();
    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const changeProfile = (file: Ffile) => {
        if (!myProfile) throw Error("profile is not exsit");
        userUpdate({
            variables: {
                _id: myProfile._id!,
                params: {
                    profileImg: omits(file),
                },
            },
        });
    };

    const handleChangeProfile = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_: string, data: Ffile) => {
            changeProfile(data);
        };
        signleUpload(fileUploaded, onUpload);
    };

    const {
        buyTotalCount = 0,
        productRegistCount = 0,
        salesOfThisMonth = 0,
        salesTotalCount = 0,
        salesofLastMonth = 0,
        settleAvaiableAmount = 0,
        settleUnsolvedRequestCount = 0,
        totalSalesCount = 0,
    } = count || {};

    let current = "";
    if (typeof window !== "undefined") {
        current = window.location.href.split("/mypage/")[1];
    }

    const isTapOn = (value?: string) => (current === value ? "on" : "");

    return (
        <div>
            <div className="top_visual">
                <PageEditor pageTools={pageTools} />
                <SubTopNav pageTools={pageTools}>
                    <li className="homedeps1">
                        <Link href="/mypage">
                            <a>My page</a>
                        </Link>
                    </li>
                    {isLogin && (
                        <li className="homedeps2">
                            <Link href="/mypage">
                                <a>회원정보</a>
                            </Link>
                        </li>
                    )}
                </SubTopNav>
            </div>
            <div className="mypage_in w100">
                {isLogin && (
                    <ul className="subtop_nav">
                        <li className={isTapOn(undefined)}>
                            <Link href="/mypage">
                                <a>회원정보</a>
                            </Link>
                        </li>
                        {!isMaster && isSeller && (
                            <li className={isTapOn("notification")}>
                                <Link href="/mypage/notification">
                                    <a>알림</a>
                                </Link>
                            </li>
                        )}
                        {/* 개인/가이드/가이드 -*/}
                        {isSeller || (
                            <li className={isTapOn("purchase")}>
                                <Link href="/mypage/purchase">
                                    <a>구매내역</a>
                                </Link>
                            </li>
                        )}
                        {/* 개인 -*/}
                        {isSeller || (
                            <li className={isTapOn("basket")}>
                                <Link href="/mypage/basket">
                                    <a>장바구니</a>
                                </Link>
                            </li>
                        )}
                        {/* 개인 -*/}
                        <li className={isTapOn("my-board")}>
                            <Link href="/mypage/my-board">
                                <a>나의 게시글</a>
                            </Link>
                        </li>
                        {/* 개인/가이드/가이드 -*/}
                        {isSeller && (
                            <li className={isTapOn("reservation")}>
                                <Link href="/mypage/reservation">
                                    <a>예약관리</a>
                                </Link>
                            </li>
                        )}
                        {/* 가이드/가이드 -*/}
                        {isSeller && (
                            <li className={isTapOn("plainning")}>
                                <Link href="/mypage/plainning">
                                    <a>상품관리</a>
                                </Link>
                            </li>
                        )}
                        {/* 가이드 -*/}
                        {isSeller && !isParterB && (
                            <li className={isTapOn("plainning")}>
                                <Link href="/mypage/plainning">
                                    <a>기획관리</a>
                                </Link>
                            </li>
                        )}
                        {/* 가이드 -*/}
                        {isSeller && (
                            <li className={isTapOn("settlement")}>
                                <Link href="/mypage/settlement">
                                    <a>매출/정산관리</a>
                                </Link>
                            </li>
                        )}
                        {/* 가이드/가이드 -*/}
                        <li>
                            <Link href={`/itsguid/${myProfile._id}`}>
                                <a>가이드페이지</a>
                            </Link>
                        </li>
                    </ul>
                )}
                <div className="w1200">
                    {isLogin && (
                        <div className="lnb">
                            <div className="profile_box">
                                <div className="welcome">
                                    <div className="profile_box__imgWrap">
                                        <span
                                            style={BGprofile(
                                                myProfile?.profileImg
                                            )}
                                            onClick={() => {
                                                if (hiddenFileInput.current) {
                                                    hiddenFileInput.current.click();
                                                }
                                            }}
                                            className="img profile_box__profileImg"
                                        >
                                            <i className="jandaicon-setting"></i>
                                            프로필이미지
                                        </span>
                                    </div>
                                    <input
                                        onChange={handleChangeProfile}
                                        ref={hiddenFileInput}
                                        hidden
                                        type="file"
                                    />
                                    <span className="name1">
                                        {/* {isParterNonB && <i className="ct_partner">Guide</i>} 가이드 Personal Partner -*/}
                                        {isParterB && (
                                            <i className="ct_guide">Guide</i>
                                        )}
                                        {/* 가이드 Corporation Partner -*/}
                                        {isSeller && (
                                            <span>
                                                <strong>
                                                    {myProfile?.nickName}
                                                </strong>
                                                님 어서오세요 :)
                                            </span>
                                        )}
                                        {/*가이드/가이드*/}
                                        {isSeller && (
                                            <span className="point">
                                                <i>Point</i>
                                                <strong>
                                                    {autoComma(
                                                        settleAvaiableAmount
                                                    )}
                                                </strong>
                                                원
                                            </span>
                                        )}
                                        {/*가이드/가이드*/}
                                        {isSeller || (
                                            <span className="name2">
                                                <i className="ct_family">
                                                    Family
                                                </i>
                                                <strong>
                                                    {myProfile?.name}
                                                </strong>
                                                님 어서오세요 :)
                                            </span>
                                        )}
                                        {/*개인*/}
                                        {isSeller || (
                                            <span className="time">
                                                <i>최근 살펴본 여행</i>
                                                {Storage?.getLocal(
                                                    "lastProd",
                                                    ""
                                                )}
                                            </span>
                                        )}
                                        {/*개인*/}
                                        {/* //최근접속시간은 최근에 본 상품으로 변경함 */}
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        알림
                                                        <i>{items.length}</i>
                                                    </a>
                                                </Link>
                                            </li>
                                            {/* 개인/가이드/가이드 -*/}
                                            {isSeller || (
                                                <li>
                                                    <Link href="/mypage/purchase/">
                                                        <a>
                                                            구매
                                                            <i>
                                                                {buyTotalCount}
                                                            </i>
                                                        </a>
                                                    </Link>
                                                </li>
                                            )}
                                            {/* 개인 -*/}
                                            {isSeller || (
                                                <li>
                                                    <Link href="/mypage/basket">
                                                        <a>
                                                            장바구니
                                                            <i>
                                                                {getItemCount()}
                                                            </i>
                                                        </a>
                                                    </Link>
                                                </li>
                                            )}
                                            {/* 개인 -*/}
                                            {isSeller && (
                                                <li>
                                                    <Link href="/mypage/reservation">
                                                        <a>
                                                            예약
                                                            <i>
                                                                {
                                                                    totalSalesCount
                                                                }
                                                            </i>
                                                        </a>
                                                    </Link>
                                                </li>
                                            )}
                                            {/* 가이드/가이드 -*/}
                                            {isSeller && (
                                                <li>
                                                    <Link href="/mypage/settlement">
                                                        <a>
                                                            정산
                                                            <i>
                                                                {
                                                                    settleUnsolvedRequestCount
                                                                }
                                                            </i>
                                                        </a>
                                                    </Link>
                                                </li>
                                            )}
                                            {/* 가이드/가이드 -*/}
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
};

// 쌍방향 연결포기
// Booking === Product
