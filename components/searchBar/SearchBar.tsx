import dayjs from 'dayjs';
import React, { useState } from 'react';
import { lastMonthFirstDate, lastMonthLastDate, oneYearBefore, sixMonthBefore, thisMonthFirstDate, thisMonthLastDate } from '../../types/const';
import { TElements } from '../../types/interface';
import { onKeyPressEnter } from '../../utils/onKeyPress';
import { closeModal, openModal } from '../../utils/popUp';
import CalendarIcon from '../common/icon/CalendarIcon';
import { DayPickerModal, IDayPickerModal } from '../dayPickerModal/DayPickerModal';
import { TRange } from '../tourWrite/helper';

export type TDateShortCut = "thisMonth" | "lastMonth" | "sixMonth" | "oneYear";

interface IProp extends Omit<IDayPickerModal, "onSubmit"> {
    Status?: TElements;
    filterStart?: Date
    filterEnd?: Date
    SearchSelect?: TElements;
    onDateChange: (ragne: TRange) => void;
    doSearch: (search: string) => void;
}

export const SearchBar: React.FC<IProp> = ({ Status, SearchSelect, onDateChange, defaultRange, filterEnd, filterStart, doSearch }) => {
    const [search, setSearch] = useState("")

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


    const check = (should: TDateShortCut): boolean => {
        const checkDay = (start: Date, end: Date) => dayjs(filterStart).isSame(start, "day") && dayjs(filterEnd).isSame(end, "day")
        if (should === "thisMonth") {
            return checkDay(thisMonthFirstDate, thisMonthLastDate);
        } else if (should === "oneYear") {
            return checkDay(oneYearBefore, new Date())
        } else if (should === "lastMonth") {
            return checkDay(lastMonthFirstDate, lastMonthLastDate);
        } else if (should === "sixMonth") {
            return checkDay(sixMonthBefore, new Date());
        };
        return false;
    }

    const checkOn = (should: TDateShortCut) => {
        return check(should) ? "on" : "";
    }

    return <div className="search_box">
        {Status && Status}
        <div className="jul4">
            <div className="title">날짜</div>
            <div className="text">
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
                <div className="input_box">
                    <input readOnly value={_filterStart} onFocus={openDayPicker} type="text" className="day w100" />
                    <CalendarIcon />
                </div>
                <span className="pc"> ~ </span>
                <div className="input_box">
                    <input readOnly value={_filterEnd} onFocus={openDayPicker} type="text" className="day w100" />
                    <CalendarIcon />
                </div>
            </div>
        </div>
        <div className="jul1">
            <div>
                {/* //class 를 .opiton 주시오 */}
                {SearchSelect}
                <div className="search_div">
                    <input value={search} onKeyPress={onKeyPressEnter(handleSearch)} onChange={(e) => {
                        const val = e.currentTarget.value
                        setSearch(val);
                    }} className="" type="text" placeholder="검색 내용을 입력해주세요." />
                    <div onClick={handleSearch} className="svg_img">
                        <img src="/img/svg/search_icon.svg" alt="검색아이콘" />
                        <button />
                    </div>
                </div>
            </div>
        </div>
        <DayPickerModal defaultRange={defaultRange} onSubmit={(range) => {
            closeModal("#dayPickerModal")()
            onDateChange(range);
        }} />
    </div>;
};
