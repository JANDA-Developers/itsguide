import dayjs from "dayjs";
import React, { useState } from "react";
import { Ftraveler, GENDER } from "../../types/api";
import { autoComma, autoHypenPhone } from "../../utils/formatter";

interface IProp {
    isLast?: boolean;
    isFisrt?: boolean;
    handleDelete: () => void;
    handleAdd: () => void;
    onChange: (traveler: Ftraveler) => void;
    traveler: Ftraveler;
}

export const Traveler: React.FC<IProp> = ({
    traveler,
    handleDelete,
    handleAdd,
    onChange,
    isLast,
    isFisrt,
}) => {
    return (
        <div className="tr">
            <div className="re01">
                여행자1
                <span className="cut_nev">
                    {!isFisrt && (
                        <i
                            onClick={handleDelete}
                            className="flaticon-substract"
                            title="추가하기"
                        ></i>
                    )}
                    {isLast && (
                        <i
                            onClick={handleAdd}
                            className="flaticon-add"
                            title="삭제하기"
                        ></i>
                    )}
                </span>
            </div>
            <div className="re02">여행자명</div>
            <div className="re03">
                <span>
                    <input
                        type="text"
                        onChange={(e) => {
                            const val = e.currentTarget.value;
                            traveler.name = val;
                            onChange(traveler);
                        }}
                        value={traveler.name || ""}
                    />
                </span>
            </div>
            <div className="re04">연락처</div>
            <div className="re05">
                <span>
                    <input
                        type="text"
                        onChange={(e) => {
                            const val = e.currentTarget.value;
                            traveler.phoneNumber = val;
                            onChange(traveler);
                        }}
                        value={autoHypenPhone(traveler.phoneNumber)}
                    />
                </span>
            </div>
            <div className="re06">성별</div>
            <div className="re07">
                <select
                    value={traveler.gender}
                    onChange={(op) => {
                        const val = op.currentTarget.value;
                        traveler.gender = val as GENDER;
                        onChange(traveler);
                    }}
                >
                    <option value={GENDER.FEMALE}>여성</option>
                    <option value={GENDER.MAIL}>남성</option>
                </select>
            </div>
            <div className="re08">나이</div>
            <div className="re09">
                <span>
                    <input
                        value={traveler.age}
                        onChange={(e) => {
                            const age = e.currentTarget.value;
                            traveler.age = age;
                            onChange(traveler);
                        }}
                        type="text"
                        placeholder="YYYYMMDD"
                    />
                </span>
                {/*input박스 클릭시 달력이 나와야 함, 우측 나이 계산은 자동으로 출력*/}
            </div>
        </div>
    );
};
