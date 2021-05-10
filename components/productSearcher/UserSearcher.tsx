import React, { useState } from "react";
import { useUserList } from "../../hook/useUser";
import { handSearchClose } from "../../layout/components/Header";
import { Fuser } from "../../types/api";
import { BG } from "../../types/const";
import { setVal, whenEnter } from "../../utils/eventValueExtracter";
import { integratedUserSearch } from "../../utils/genFilter";
import { yyyymmdd } from "../../utils/yyyymmdd";
import { thumbNail } from "../ThunbNail/ThunbNail";

interface IProp {
    defaultSearch?: string;
    defaultUserId?: string;
    onSelectUser: (user: Fuser) => void;
}

export const UserSearcher: React.FC<IProp> = ({
    defaultSearch,
    onSelectUser,
    defaultUserId,
}) => {
    const [search, setSearch] = useState(defaultSearch);
    const { setFilter, items } = useUserList({
        initialFilter: {
            _id_eq: defaultUserId,
        },
    });

    const getData = () => {
        setFilter(integratedUserSearch(search));
        handSearchClose();
    };

    const handleSelectUser = (user: Fuser) => {
        setSearch(user.name);
        onSelectUser(user);
    };

    return (
        <div className="userSearcher">
            <div className="goodsall">
                <h3>상품선택</h3>
                <div className="goodsall__wrap">
                    <div className="goodsall__search search_top">
                        <div className="search_div">
                            <input
                                onKeyPress={whenEnter(getData)}
                                onChange={setVal(setSearch)}
                                value={search || ""}
                                className="w100"
                                type="text"
                                placeholder="검색할 상품명을 입력해주세요."
                            />
                            <div onClick={getData} className="svg_img">
                                <img
                                    src="/img/svg/search_icon.svg"
                                    alt="search icon"
                                />
                                <button />
                            </div>
                        </div>
                    </div>
                    <div className="goodsall__list">
                        <p>
                            검색결과 <strong>{items.length}건</strong>
                        </p>
                        <ul>
                            {items.map((item, i) => (
                                <li
                                    onClick={() => {
                                        handleSelectUser(item);
                                    }}
                                    key={item._id}
                                >
                                    <div className="goodsall__list__img">
                                        <img
                                            src={item.profileImg?.uri || ""}
                                            alt="상품이미지"
                                        />
                                    </div>
                                    <div className="goodsall__list__text">
                                        <div className="title">
                                            {item.name}[{item.nickName}]
                                            <div>{item.email}</div>
                                        </div>
                                        <div className="date">
                                            {yyyymmdd(item.createdAt)}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSearcher;
