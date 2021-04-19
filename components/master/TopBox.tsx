import dayjs from 'dayjs';
import React, { useState } from 'react';
import Search from '../../pages/search';
import { lastMonthFirstDate, lastMonthLastDate, thisMonthFirstDate, thisMonthLastDate } from '../../types/const';
import { ISet, TElements } from '../../types/interface';
import { onKeyPressEnter } from '../../utils/onKeyPress';
import { closeModal, openModal } from '../../utils/popUp';
import CalendarIcon from '../common/icon/CalendarIcon';
import { ViewCount } from '../common/ViewCount';
import { DayPickerModal, IDayPickerModal } from '../dayPickerModal/DayPickerModal';
import Excel from '../excel/Execel';
import { TRange } from '../tourWrite/helper';
import { TopCount } from './TopCount';


interface IProp extends Omit<IDayPickerModal, "onSubmit"> {
    Select: TElements;
    Option: TElements;
    filterStart?: Date
    filterEnd?: Date
    viewCount: number;
    setViewCount: ISet<number>;
    onSelectAll: () => void;
    onDateChange: (ragne: TRange) => void;
    doSearch: (search: string) => void;
}

export const TopBox: React.FC<IProp> = ({ doSearch, filterStart, filterEnd, onDateChange, Select, Option, viewCount, setViewCount, onSelectAll }) => {

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


    return <div className="con_box_top pb5">
        <TopCount />
        <div className="search_top">
            <div className="hang">
                <ul className="day_ul">
                    <li onClick={setThisMonth} >
                        <span>이번달</span>
                    </li>
                    <li onClick={setLastMonth} >
                        <span>저번달</span>
                    </li>
                    <li onClick={sixMonth}>
                        <span>6개월</span>
                    </li>
                    <li onClick={oneYear}>
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
        </div>
        <div className="alignment">
            <div className="left_div">
                <ul className="board_option">
                    <li className="on"><a href="/">전체<strong>46</strong></a></li>
                    <li><a href="/">여행<strong>23</strong></a></li>
                    <li><a href="/">체험<strong>23</strong></a></li>
                </ul>
                {/* <ul className="board_option">
                <li className="on"><a href="/">전체<strong>46</strong></a></li>
                <li><a href="/">온라인예약<strong>46</strong></a></li>
                <li><a href="/">수기등록<strong>46</strong></a></li>
            </ul> */}
            </div>
            <div className="right_div">
                <ul className="board_option">
                    <li onClick={onSelectAll}><a>전체선택</a></li>
                    <li><Excel data={[]} element={<a>엑셀파일</a>} /></li>
                </ul>
                {Search}
                {/* <select onChange={()=>{}} className="sel01">
                    <option >출발일 &uarr;</option>
                    <option>출발일 &darr;</option>
                    <option>등록일 &uarr;</option>
                    <option>등록일 &darr;</option>
                </select> */}
                <ViewCount value={viewCount} onChange={setViewCount} />
            </div>
        </div>
        <DayPickerModal defaultRange={{}} onSubmit={(range) => {
            closeModal("#dayPickerModal")()
            onDateChange(range);
        }} />
    </div>;
};
