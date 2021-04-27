import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { openListFilter } from "../../hook/useProduct";
import { useRandomPublicSellerList } from "../../hook/useUser";
import {
    randomSellerListPublicVariables,
    sellerListPublic_SellerListPublic_data,
    _SellerFilter,
    _SellerSort,
    _UserSort,
} from "../../types/api";
import { BGprofile } from "../../types/const";
import { GoodsListAPI } from "./GoodsListAPI";
import Slider from "react-slick";
import { useResizeDetector } from "react-resize-detector";
import { IRef } from "../../types/interface";

interface IProp {
    mode?: "wide" | "short";
    variables?: randomSellerListPublicVariables;
    selectedSeller?: sellerListPublic_SellerListPublic_data;
    setSelectedSeller?: React.Dispatch<
        React.SetStateAction<sellerListPublic_SellerListPublic_data | undefined>
    >;
}

export const ProfileListAPI: React.FC<IProp> = ({
    variables,
    selectedSeller,
    setSelectedSeller,
    mode = "wide",
}) => {
    const router = useRouter();
    const { ref, width } = useResizeDetector<
        HTMLDivElement | HTMLUListElement
    >();
    const { data: items = [] } = useRandomPublicSellerList({
        nextFetchPolicy: "cache-first",
        variables: {
            filter: {
                profileImg_not_eq: null,
            },
            random: 40,
            ...variables,
        },
    });

    const handleSelectUser = (
        user: sellerListPublic_SellerListPublic_data
    ) => () => {
        setSelectedSeller?.(user);
    };

    const isShort = mode === "short";

    const toGuidePage = (code: string) => {
        router.push("/itsguid/" + code);
    };

    function Arrow(props) {
        const { className, style, onClick, isLeft } = props;
        return (
            <div
                className={className + " profileListBig__arrows"}
                style={{ ...style }}
                onClick={onClick}
            >
                <i
                    className={
                        isLeft ? "jandaicon-arr2-left" : "jandaicon-arr2-right"
                    }
                ></i>
            </div>
        );
    }

    const sizeSlideCountMini = (() => {
        if (width < 500) return 5;
        if (width < 800) return 7;
        if (width < 1000) return 9;
        return 10;
    })();

    const sizeSlideCount = (() => {
        if (width < 500) return 3;
        if (width < 800) return 4;
        if (width < 1000) return 5;
        return 6;
    })();

    useEffect(() => {
        if (items?.[0] && !selectedSeller) {
            setSelectedSeller?.(items[0]);
        }
    }, [items?.length]);

    if (isShort)
        return (
            <ul ref={ref as IRef<HTMLUListElement>} className="pr_list">
                <Slider
                    slidesToShow={sizeSlideCountMini}
                    autoplay
                    draggable={false}
                    arrows={false}
                    dots={false}
                    infinite={true}
                >
                    {items.map((item) => (
                        <div key={item._id}>
                            <div
                                className="pr_list__li peple"
                                onClick={() => {
                                    toGuidePage(item._id);
                                }}
                                style={BGprofile(item.profileImg)}
                            >
                                <i className="plus flaticon-add"></i>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* <li className="plus"><a href="/guide-search">+</a></li> */}
            </ul>
        );

    return (
        <div>
            {/* <div className="man_list">
            <a onClick={handleScrollArrowClick(false)} className="left_mov"><i className="jandaicon-arr2-left"></i></a>
            <div ref={guidesRef} className="man_box">
                <ul>
                    {items.map((item, i) =>
                        <li key={item._id + "guid"} className={selectedSeller?._id === item._id ? "on" : ""}>
                            <span className="photo" onClick={handleSelectUser(item)} style={BG(item.profileImg?.uri || "/img/profile_default160.gif")} />
                            <div className="max_box__infoWrap">
                                <div className="home" onClick={() => {
                                    toGuidePage(item._id)
                                }}></div>
                                <div className="max_box__name name" onClick={handleSelectUser(item)}><i>G</i>{item.nickName}</div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <a onClick={handleScrollArrowClick(true)} className="right_mov"><i className="jandaicon-arr2-right"></i></a>
        </div> */}
            <div ref={ref as IRef<HTMLDivElement>} className="profileListBig">
                <Slider
                    nextArrow={<Arrow />}
                    prevArrow={<Arrow isLeft />}
                    slidesToScroll={2}
                    slidesToShow={sizeSlideCount}
                    autoplay
                    draggable={false}
                    arrows={true}
                    dots={false}
                    infinite={true}
                >
                    {items.map((item) => (
                        <div>
                            <div
                                className={`profileListBig__cell ${
                                    selectedSeller?._id === item._id
                                        ? "profileListBig__cell--selected"
                                        : ""
                                }`}
                                key={item._id}
                            >
                                <div
                                    className="profileListBig__photo"
                                    onClick={handleSelectUser(item)}
                                    style={BGprofile(item.profileImg)}
                                    title="가이드의 상품을 보기 원하시면 클릭해주세요."
                                />
                                <div className="profileListBig__titleWrap">
                                    {/* <div className="profileListBig__toGuide"></div> */}
                                    <div
                                        className="profileListBig__toName"
                                        onClick={() => {
                                            toGuidePage(item._id);
                                        }}
                                        title="가이드 페이지 바로가기"
                                    >
                                        <i className="profileListBig__G">G</i>
                                        {item.nickName}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export const ProfileListAPIwithGoods = () => {
    const [
        selectedSeller,
        setSelectedSeller,
    ] = useState<sellerListPublic_SellerListPublic_data>();

    return (
        <div>
            <ProfileListAPI
                selectedSeller={selectedSeller}
                setSelectedSeller={setSelectedSeller}
            />
            <div className="goods_list">
                <GoodsListAPI
                    options={{
                        variables: {
                            filter: {
                                ...openListFilter,
                                authorEmail_eq: selectedSeller?.email,
                            },
                            pageInput: {
                                cntPerPage: 12,
                                page: 1,
                            },
                        },
                        nextFetchPolicy: "cache-first",
                    }}
                />
            </div>
        </div>
    );
};
