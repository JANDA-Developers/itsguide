import React from 'react';
import Head from 'next/head';
import RCDayPicker, { DateUtils, DayPickerProps } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { ISet, TElements } from 'types/interface';
import dayjs from 'dayjs';

type Range = {
    from?: Date,
    to?: Date
}
type ThandleSate = (range: Range) => void;
interface IProps extends DayPickerProps {
    from?: Date,
    to?: Date,
    isRange?: boolean
    onRangeChange: ThandleSate
    Header?: TElements
}

export const DayRangePicker: React.FC<IProps> = ({ Header, from, to, onRangeChange, isRange = true, children, ...props }) => {
    const defaultProps = {
        numberOfMonths: 2,
    };

    function handleDayClick(day: any) {
        if (!isRange) {
            onRangeChange({ from: day, to: day });
            return
        }

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
            {Header}
            {/* @ts-ignore */}
            <RCDayPicker
                {...props}
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
            {children}
        </div>
    );
}

export default DayRangePicker;