import React from "react";
import { genderToKR, userStatusKR, withNick } from "../../utils/enumToKr";
import { autoHypenPhone } from "../../utils/formatter";
import { yyyymmdd } from "../../utils/yyyymmdd";
import { Paginater } from "../common/Paginator";
import { IMemberTableProp } from "./MemberMaster";

export const PartnerTable: React.FC<IMemberTableProp> = ({
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
        handleRestartUser,
        handleSignUpAccept,
        handleSignUpDeny,
        handleDenyPop,
    } = handleUser;
    const { items: users, setPage, pageInfo } = userHook;

    return (
        <div className="con_box_body master__table">
            <div className="list_head">
                <div className="td01">
                    <i className="checkbox">
                        <input
                            checked={isAllSelected}
                            type="checkbox"
                            name="agree"
                            id="agree0"
                            title="전체선택"
                        />
                        <label onClick={toggleAll} htmlFor="agree0" />
                    </i>
                </div>
                <div className="td02">이름</div>
                <div className="td03">아이디</div>
                <div className="td04">휴대폰</div>
                <div className="td05">성별</div>
                <div className="td06">국적</div>
                <div className="td07">가입일</div>
                <div className="td08">주소</div>
                <div className="td09">상세보기</div>
            </div>
            {users.map((user) => (
                <div key={user._id} className="list_line">
                    <div className="td01">
                        <i
                            onClick={() => {
                                toggle(user._id);
                            }}
                            className="checkbox"
                        >
                            <input
                                onChange={() => {}}
                                checked={isChecked(user._id)}
                                type="checkbox"
                                name="agree"
                                id="agree0"
                                title="선택"
                            />
                            <label htmlFor="agree0" />
                        </i>
                    </div>
                    <div className="td02">{withNick(user)}</div>
                    <div className="td03">{user.email}</div>
                    <div className="td04">
                        <i className="m_title">휴대폰:</i>
                        <a href={`tel:${user.phoneNumber}`}>
                            {autoHypenPhone(
                                user.busi_contact || user.phoneNumber
                            )}
                        </a>
                    </div>
                    <div className="td05">
                        <i className="m_title">성별:</i>
                        {genderToKR(user.gender)}
                    </div>
                    <div className="td06">
                        {userStatusKR(user)}
                        <div>
                            {user.isDenied && (
                                <i
                                    style={{ lineHeight: "22px" }}
                                    className="btn small"
                                    onClick={() => {
                                        handleSignUpAccept([user._id]);
                                    }}
                                >
                                    가입승인
                                </i>
                            )}
                        </div>
                        <div>
                            {!user.isVerifiedManager && !user.isDenied && (
                                <i
                                    style={{ lineHeight: "22px" }}
                                    className="btn small"
                                    onClick={handleDenyPop(user._id)}
                                >
                                    가입거절
                                </i>
                            )}
                        </div>
                    </div>
                    <div className="td07">
                        <i className="m_title">가입일:</i>
                        {yyyymmdd(user.createdAt)}
                    </div>
                    <div className="td08">
                        <i className="m_title">주소:</i>
                        {user.address.slice(0, 10) + "..."}
                    </div>
                    <div className="td09">
                        <div>
                            <i
                                className="btn small"
                                onClick={handleViewDetailUser(user._id)}
                            >
                                상세보기
                            </i>
                        </div>
                        <div>
                            <i
                                className="btn small"
                                onClick={handleViewUserBoard(user)}
                            >
                                작성한 게시글
                            </i>
                        </div>
                    </div>
                </div>
            ))}
            <Paginater setPage={setPage} pageInfo={pageInfo} />
        </div>
    );
};
