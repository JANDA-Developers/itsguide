import React, { useState, useContext } from 'react'
import DaumPostcode from 'react-daum-postcode';
import DayPicker, { DayModifiers } from 'react-day-picker';
import dayjs from 'dayjs'
import RegisterCheck, { TPolicyChk } from './RegisterCheck';
import Calendar from '../common/icon/CalendarIcon';
import 'react-day-picker/lib/style.css';
import { GENDER } from '../../types/api';
import { TForm } from 'pages/join';

export type TFormNormal = {
    nameLeng:number,
    email: string,
    password: string,
    passwordChk: string,
    name: string,
    contact: string,
    gender: GENDER,
    birthday: string,
    isKorean: boolean,
    address: string,
    address_detail: string,
    register_sort: string,
    is_priv_corper: boolean
}

type TFormError = {
    email: boolean,
    password: boolean,
    name: boolean,
    contact: boolean,
    gender: boolean,
    birthday: boolean,
    isKorean: boolean,
    address: boolean
}

const defaultInfo: TFormNormal = process.env.NODE_ENV === "development" ? {
    nameLeng:3,
    email: "test@naver.com",
    password: "!238917",
    passwordChk: "!238917",
    name: "테스트 네임",
    contact: "0101112222",
    gender: GENDER.FEMALE,
    birthday: "20201212",
    isKorean: true,
    address: "Address 1",
    address_detail: "Address detail",
    register_sort: "individual",
    is_priv_corper: false
} : {
        nameLeng:3,
        email: "",
        password: "",
        passwordChk: "",
        name: "",
        contact: "",
        gender: GENDER.FEMALE,
        birthday: "",
        isKorean: true,
        address: "",
        address_detail: "",
        register_sort: "individual",
        is_priv_corper: false
    }


    const currentYear = new Date().getFullYear();
    const fromMonth = new Date(currentYear, 0);
    const toMonth = new Date(currentYear + 0, 11);

    function YearMonthForm({ date, localeUtils, onChange }) {

        const months = localeUtils.getMonths();

        const years = [];
        for (let i = fromMonth.getFullYear()-70; i <= toMonth.getFullYear(); i += 1) {
            years.push(i);
        }

        const handleChange = function handleChange(e) {
            const { year, month } = e.target.form;
            onChange(new Date(year.value, month.value));
        };

        return (
            <form className="DayPicker-Caption">
            <select name="month" onChange={handleChange} value={date.getMonth()}>
                {months.map((month, i) => (
                <option key={month} value={i}>
                    {month}
                </option>
                ))}
            </select>
            <select name="year" onChange={handleChange} value={date.getFullYear()}>
                {years.map(year => (
                <option key={year} value={year}>
                    {year}
                </option>
                ))}
            </select>
            </form>
        );
        
    }


const FormNormal: React.FC<TForm> = ({ openPopup, handleJoinProcess }) => {

    const [formInfo, setFormInfo] = useState<TFormNormal>(defaultInfo)

    const [errDisplay, setErrDisplay] = useState({
        email: false,
        password: false,
        name: false,
        contact: false,
        gender: false,
        birthday: false,
        isKorean: false,
        address: false
    });

    const [daumAddress, setDaumAddress] = useState(false);

    const [birthdayPicker, setBirthDayPicker] = useState(false);

    const [dayPickerMonth, setDayPickerMonth] = useState(fromMonth);

    const handleDayPickerMonth = (newVal) => {
        setDayPickerMonth(newVal);
    }

    const handleBirthPicker = () => {

        setBirthDayPicker(!birthdayPicker)

    }

    const handleDayClick = (day: Date, modifiers: DayModifiers, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        let selectedDay = dayjs(day).format('YYYYMMDD');
        setFormInfo({
            ...formInfo,
            birthday: selectedDay
        })
        setBirthDayPicker(!birthdayPicker)

        console.log(formInfo);

    }

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {

        setErrDisplay({
            ...errDisplay,
            [e.target.name]: false
        })

        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })

    }

    const handleErrDisplay = (errTarget: keyof TFormError) => {

        let errList = errDisplay;
        errList[errTarget] = !errDisplay[errTarget];
        setErrDisplay({
            ...errList
        })

    }

    const handleGender = (gender: GENDER) => {

        setFormInfo({
            ...formInfo,
            gender: gender
        })
    }

    const handleNationality = (chkKorean: boolean) => {

        setFormInfo({
            ...formInfo,
            isKorean: !formInfo.isKorean
        })
    }

    const handleAddress = (address) => {

        setDaumAddress(true); 
   
    }

    const addressUpdate = (address) => {

        setFormInfo({
            ...formInfo,
            address: address
        })
        
    }

    const handleComplete = (data) => {

        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
     
        addressUpdate(fullAddress);
        setDaumAddress(false);
     
    }

    // console.log(` pikcer ${birthdayPicker}`); 

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                e.persist();

            }}>
                <div className="information_box">
                    {/* 회원정보:개인 */}
                    <h5>
                        개인 회원
                    <span className="info_top">
                            <i className="important_icon" />는 필수항목입니다.
                    </span>
                    </h5>
                    <div className="ph_wrap">
                        <label>
                            <i className="important_icon" />
                        이메일
                    </label>
                        <span className={`er red_font ${errDisplay.email && `on`}`}>
                            *해당 이메일은 이미 사용중입니다.
                    </span>
                        <input
                            type="email"
                            className="w100"
                            placeholder="email@email.com"
                            name="email"
                            value={formInfo.email}
                            onChange={(e) => { handleForm(e) }}
                        />
                    </div>
                    <div className="pw_wrap">
                        <label>
                            <i className="important_icon" />
                        비밀번호
                    </label>
                        <span className={`er red_font ${errDisplay.password && `on`}`}>
                            * 비밀번호는 특수문자 1개이상 숫자가 포함된 7~15 자리의 영문 숫자 조합이여야 합니다
                    </span>
                        <input
                            type="password"
                            className="w100"
                            placeholder="비밀번호를 입력해주세요"
                            name="password"
                            value={formInfo.password}
                            onChange={(e) => { handleForm(e) }}
                        />
                    </div>
                    <div className="pw_wrap_c">
                        <label>
                            <i className="important_icon" />
                        비밀번호 확인
                    </label>
                        <span className="er red_font">
                            *비밀번호가 일치하지 않습니다.
                    </span>
                        <input
                            type="password"
                            className="w100"
                            placeholder="비밀번호 확인"
                            name="passwordChk"
                            value={formInfo.passwordChk}
                            onChange={(e) => { handleForm(e) }}
                        />
                    </div>
                    <div className="name_wrap">
                        <label>
                            <i className="important_icon" />
                        이름
                    </label>
                        <span className={`er red_font ${errDisplay.name && `on`}`}>*한글 이외에 입력이 안됩니다.</span>
                        <input
                            type="text"
                            className="w100"
                            placeholder="이름을 입력해주세요"
                            name="name"
                            value={formInfo.name}
                            onChange={(e) => { handleForm(e) }}
                        />
                    </div>
                    <div className="ph_wrap">
                        <label>
                            <i className="important_icon" />
                        연락처
                    </label>
                        <span className={`er red_font ${errDisplay.contact && `on`}`}>*숫자이외에 입력이 안됩니다.</span>
                        <div className="w100">
                            <input
                                type="text"
                                className="w80"
                                placeholder="-를 제외한 휴대폰 번호를 입력해주세요"
                                name="contact"
                                value={formInfo.contact}
                                onChange={(e) => { handleForm(e) }}
                            />
                            <button type="button" className="btn btn_mini">
                                인증
                        </button>
                        </div>
                    </div>
                    <hr />
                    <h4>추가정보</h4>
                    <div className="ph_wrap">
                        <label>성별</label>
                        <span className="er red_font">
                            *두개의 성별중 하나를 선택하여 주세요.
                    </span>
                        <div className="w100">
                            <ul className="gender_check">
                                <li className={`female ${formInfo.gender == GENDER.FEMALE ? "on" : ""}`}
                                    onClick={() => { handleGender(GENDER.FEMALE) }}>여</li>
                                <li className={`men ${formInfo.gender == GENDER.MAIL ? "on" : ""}`}
                                    onClick={() => { handleGender(GENDER.MAIL) }}>남</li>
                            </ul>
                        </div>
                    </div>
                    <div className="ph_wrap">
                        <label>생년월일</label>
                        <span className={`er red_font ${errDisplay.birthday && `on`}`}>*숫자이외에 입력이 안됩니다.</span>
                        <div className="w100 join_birthday">
                            <input
                                type="text"
                                name="birthday"
                                className="w70"
                                placeholder="생년월일을 입력해주세요."
                                value={formInfo.birthday}
                                onChange={(e) => { handleForm(e) }}
                            />
                            <i className="calendar" onClick={handleBirthPicker}>
                                <Calendar />
                            </i>
                            <DayPicker
                                className={`join_birthdayPick ${birthdayPicker && `on`}`}
                                month={dayPickerMonth}
                                fromMonth={fromMonth}
                                toMonth={toMonth}
                                onDayClick={handleDayClick}
                                canChangeMonth={false}
                                captionElement={({ date, localeUtils }) => (
                                    <YearMonthForm
                                    date={date}
                                    localeUtils={localeUtils}
                                    onChange={handleDayPickerMonth}
                                    />
                                )}
                            />
                        </div>

                    </div>
                    <div className="ph_wrap">
                        <label>내국인/외국인</label>
                        <span className="er red_font">*둘중 한개를 선택해 주세요.</span>
                        <div className="w100">
                            <ul className="country_check">
                                <li className={`c_in ${formInfo.isKorean ? "on" : ""}`}
                                    onClick={() => { handleNationality(true) }}>내국인</li>
                                <li className={`c_out ${!formInfo.isKorean ? "on" : ""}`}
                                    onClick={() => { handleNationality(false) }}>외국인</li>
                            </ul>
                        </div>
                    </div>
                    <div className="ph_wrap daum_addresss_wrap">
                        <label>주소</label>
                        <span className="er red_font">*주소가 정확하지 않습니다.</span>
                        <div className="w100">
                            <input type="text" className="w80" name="address"
                                value={formInfo.address}
                                onChange={(e) => { handleForm(e) }} />
                            <button type="button" className="btn btn_mini" onClick={handleAddress}>
                                찾기
                            </button>
                        </div>
                        <div className="w100 mt5">
                            <input type="text" className="w100" name="address_detail" placeholder="상세주소"
                                value={formInfo.address_detail}
                                onChange={(e) => { handleForm(e) }} />
                        </div>
                        <div className={`daum_addresss ${daumAddress && 'on'}`}>
                            <DaumPostcode
                                onComplete={handleComplete}
                            />
                        </div>
                    </div>
                </div>
                <RegisterCheck
                    openPopup={openPopup}
                    handleJoinProcess={handleJoinProcess}
                    registerInfo={formInfo}
                    registerSort={'normal'}
                    handleErrDisplay={handleErrDisplay}
                />
            </form>
        </>

    )
}

export default FormNormal
