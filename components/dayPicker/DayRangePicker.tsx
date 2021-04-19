import React from 'react';
import Head from 'next/head';
import RCDayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { ISet } from 'types/interface';

type Range = {
    from?: Date,
    to?: Date
}
type ThandleSate = (range: Range) => void;
interface IProps {
    from?: Date,
    to?: Date,
    onRangeChange: ThandleSate
}

export const DayRangePicker: React.FC<IProps> = ({ from, to, onRangeChange }) => {
    const defaultProps = {
        numberOfMonths: 2,
    };

    function handleDayClick(day: any) {
        // @ts-ignore
        const range = DateUtils.addDayToRange(day, { from, to });

        // From을 SET 할지 TO를 SET 할지 물어봄
        const isFromSelect = (inFrom: any, inTo: any, day: any) => {
            // From 이전의 날자를 선택했다면
            const isBeforeFirstDay =
                inFrom && DateUtils.isDayBefore(day, inFrom);
            // From과 To 가 ⭐️이미️️️⭐️ 존재하는가?
            const isRangeSelected = inFrom && inTo;
            return !inFrom || isBeforeFirstDay || isRangeSelected;
        };



        // 선택한 날자 뒤를 누른경우에
        if (from && day <= from) {
            handleResetClick();
            return;
        }

        // 이미 선택된 날을 눌렀을경우에
        if (from && to && day >= from && day <= to) {
            handleResetClick();
            return;
        }
        // From 선택일때
        if (!from) {
            // 첫날을 셋팅하고 나머지날자는 널 기입
            onRangeChange({ from: day, to: undefined });
        } else {
            onRangeChange({ from: from, to: day });
        }

    }

    function handleResetClick() {
        onRangeChange({ from: undefined, to: undefined });
    }

    const modifiers = { start: from, end: to };

    return (
        <div className="RangeExample">
            {/* @ts-ignore */}
            <RCDayPicker
                className="Selectable"
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={handleDayClick}
                {...defaultProps}
            />
            <Head>
                <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
            </Head>
            <div className="info_txt">
                <h4><i className="jandaicon-info2"></i>여행일정 등록시 유의점</h4>
                <ul>
                    <li>- 달력에서 여행기간을 선택해 주세요. 그래야 아래에 입력창이 생성됩니다.</li>
                    <li>- 이미지를 첨부시에 이미지 내부에 이미지를 입력할 경우 텍스트를 크게 써주세요.<br />모바일 화면도 고려해야합니다.</li>
                    <li>- 이미지를 꼭 한번 용량을 압축해서 올려주세요. 로딩시에 시간이 단축됩니다.<br /><a href="https://www.iloveimg.com/ko/compress-image" target="_blank">(추천사이트 이동)</a></li>
                    <li>- 일정에 관련된 내용만 간략하게 써주세요.</li>
                </ul>
            </div>
        </div>
    );
}

export default DayRangePicker;