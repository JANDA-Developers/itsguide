import Link from "next/link";
import React from "react";
import {
    foreginKR,
    genderToKR,
    userRoleToKR,
    withNick,
} from "../../utils/enumToKr";
import { autoComma, autoHypenPhone } from "../../utils/formatter";
import { yyyymmdd } from "../../utils/yyyymmdd";
import { Paginater } from "../common/Paginator";
import { IMemberTableProp } from "./MemberMaster";

export const SignOutTable: React.FC<IMemberTableProp> = ({
    userHook,
    idSelectHook,
    handleUser,
}) => {
    const {
        check,
        handleCheck,
        isAllSelected,
        isChecked,
        reverseAll,
        selectAll,
        selectLength,
        selectedIds,
        setSelectedIds,
        toggle,
        toggleAll,
        unCheck,
        unSelectAll,
    } = idSelectHook;
    const {
        handleResignUser,
        handleStopUser,
        handleViewDetailUser,
        handleViewUserBoard,
    } = handleUser;
    const { items: users, setPage, pageInfo } = userHook;

    return (
        <div className="con_box_body master__table">
            <div className="list_head">
                {/* <div className="td01">
                <i className="checkbox">
                    <input checked={isAllSelected} type="checkbox" name="agree" id="agree0" title="전체선택" />
                    <label onClick={toggleAll} htmlFor="agree0" />
                </i>
            </div> */}
                <div className="td02">이름</div>
                <div className="td03">아이디</div>
                <div className="td04">휴대폰</div>
                <div className="td05">성별</div>
                <div className="td06">타입</div>
                <div className="td07">가입일</div>
                <div className="td08">탈퇴일</div>
                <div className="td09">상세보기</div>
            </div>
            {users.map((user) => (
                <div key={user._id} className="list_line">
                    {/* <div className="td01">
                    <i onClick={() => {
                        toggle(user._id)
                    }} className="checkbox">
                        <input onChange={() => { }} checked={isChecked(user._id)} type="checkbox" name="agree" id="agree0" title="선택" />
                        <label htmlFor="agree0" />
                    </i>
                </div> */}
                    <div className="td02">{withNick(user)}</div>
                    <div className="td03">{user.email}</div>
                    <div className="td04">
                        <i className="m_title">휴대폰:</i>
                        <Link href={`tel:${user.phoneNumber}`}>
                            <a>
                                {autoHypenPhone(
                                    user.busi_contact || user.phoneNumber
                                )}
                            </a>
                        </Link>
                    </div>
                    <div className="td05">
                        <i className="m_title">성별:</i>
                        {genderToKR(user.gender)}
                    </div>
                    <div className="td06">
                        <i className="m_title">타입:</i>
                        {userRoleToKR(user.role)}
                    </div>
                    <div className="td07">
                        <i className="m_title">가입일:</i>
                        {yyyymmdd(user.createdAt)}
                    </div>
                    <div className="td08">
                        <i className="m_title">탈퇴일:</i>
                        {yyyymmdd(user.resignDate)}
                    </div>
                    <div className="td09">
                        <i
                            className="btn small"
                            onClick={handleViewDetailUser(user._id)}
                        >
                            상세보기
                        </i>
                        <i
                            className="btn small"
                            onClick={handleViewUserBoard(user)}
                        >
                            작성한 게시글
                        </i>
                    </div>
                </div>
            ))}
            <Paginater setPage={setPage} pageInfo={pageInfo} />
            {/* <div className="fin ifMobile">
            <div className="float_left">
                <button onClick={selectAll} type="submit" className="btn medium">전체선택</button>
            </div>
            <div className="float_right">
                <button onClick={handleResignUser} type="submit" className="btn medium mr5">탈퇴</button>
                <button onClick={handleStopUser} type="submit" className="btn medium">활동정지</button>
                <button onClick={handleStopUser} type="submit" className="btn medium">활동재개</button>
            </div>
        </div> */}
        </div>
    );
};
