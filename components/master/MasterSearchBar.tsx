import dayjs from "dayjs"
import { useState } from "react"
import { lastMonthFirstDate, lastMonthLastDate, oneYearBefore, sixMonthBefore, thisMonthFirstDate, thisMonthLastDate } from "../../types/const"
import { ISet, TElements } from "../../types/interface"
import { onKeyPressEnter } from "../../utils/onKeyPress"
import { closeModal, openModal } from "../../utils/popUp"
import CalendarIcon from "../common/icon/CalendarIcon"
import { DayPickerModal, IDayPickerModal } from "../dayPickerModal/DayPickerModal"
import { TDateShortCut } from "../searchBar/SearchBar"
import { TRange } from "../tourWrite/helper"

interface IProp extends Omit<IDayPickerModal, "onSubmit"> {
    Option: TElements;
    filterStart?: Date
    filterEnd?: Date
    onDateChange: (ragne: TRange) => void;
    doSearch: (search: string) => void;
}

export const MasterSearchBar: React.FC<IProp> = ({ doSearch, filterStart, filterEnd, onDateChange, Option }) => {
    const [search, setSearch] = useState("")

    function check(should: TDateShortCut): boolean {
        const checkDay = (start: Date, end: Date) => dayjs(filterStart).isSame(start, "day") && dayjs(filterEnd).isSame(end, "day")
        if (should === "thisMonth") {
            return checkDay(thisMonthFirstDate, thisMonthLastDate)
        } else if (should === "oneYear") {
            return checkDay(oneYearBefore, new Date())
        } else if (should === "lastMonth") {
            return checkDay(lastMonthFirstDate, lastMonthLastDate)
        } else if (should === "sixMonth") {
            return checkDay(sixMonthBefore, new Date())
        };
        return false
    }

    const checkOn = (should: TDateShortCut) => {
        return check(should) ? "on" : "";
    }

    const openDayPicker = () => {
        openModal("#dayPickerModal")()
    }

    const setThisMonth = () => {
        onDateChange({
            from: thisMonthFirstDate,
            to: thisMonthLastDate,
        })
    }
    const setLastMonth = () => {
        onDateChange({
            from: lastMonthFirstDate,
            to: lastMonthLastDate
        })
    }

    const sixMonth = () => {
        onDateChange({
            from: dayjs().add(-6, "month").toDate(),
            to: new Date()
        })
    }

    const oneYear = () => {
        onDateChange({
            from: dayjs().add(-1, "year").toDate(),
            to: dayjs().toDate()
        })
    }


    const handleSearch = () => {
        doSearch(search)
    }


    const _filterStart = filterStart ? dayjs(filterStart).format("YYYY.MM.DD") : "";
    const _filterEnd = filterEnd ? dayjs(filterEnd).format("YYYY.MM.DD") : "";


    return <div className="search_top">
        <div className="hang">
            <ul className="day_ul">
                <li className={checkOn("thisMonth")} onClick={setThisMonth} >
                    <span>이번달</span>
                </li>
                <li className={checkOn("lastMonth")} onClick={setLastMonth} >
                    <span>저번달</span>
                </li>
                <li className={checkOn("sixMonth")} onClick={sixMonth}>
                    <span>6개월</span>
                </li>
                <li className={checkOn("oneYear")} onClick={oneYear}>
                    <span>1년</span>
                </li>
            </ul>
        </div>
        <div className="hang">
            <div className="input_box">
                <input value={_filterStart} onFocus={openDayPicker} type="text" className="day w100" />
                <CalendarIcon />
            </div>
            <span className="pc"> ~ </span>
            <div className="input_box">
                <input value={_filterEnd} onFocus={openDayPicker} type="text" className="day w100" />
                <CalendarIcon />
            </div>
        </div>
        <div className="hang fr">
            {Option}
            {/* <select className="option">
                <option>전체</option>
                <option>상품명</option>
                <option>상품번호</option>
                <option>예약번호</option>
                <option>예약자명</option>
                <option>실여행자명</option>
                <option>휴대번호</option>
                <option>가이드명</option>
                <option>상품상태</option>
                <option>진행여부</option>
            </select> */}
            <div className="search_div">
                <input
                    onChange={(e) => {
                        const val = e.currentTarget.value
                        setSearch(val);
                    }}
                    onKeyPress={onKeyPressEnter(handleSearch)}
                    className="w100"
                    type="text"
                    placeholder="검색 내용을 입력해주세요."
                />
                <div onClick={handleSearch} className="svg_img">
                    <img src="/img/svg/search_icon.svg" alt="검색아이콘" />
                    <button />
                </div>
            </div>
        </div>
        <DayPickerModal defaultRange={{}} onSubmit={(range) => {
            closeModal("#dayPickerModal")()
            onDateChange(range);
        }} />
    </div>
}