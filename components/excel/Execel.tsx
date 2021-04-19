import React from "react";
// @ts-ignore
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

export type TMultiColumnData = {
    value: string;
    style?: any;
}[];

export type TMultiColumns = {
    columns: string[];
    data: TMultiColumnData[];
};

export interface IExcelProps {
    data: TMultiColumns[];
    element?: JSX.Element;
}

export const Excel: React.FC<IExcelProps> = ({ data: datas, element }) => {
    return (
        <ExcelFile
            element={
                element
            }
        >
            <ExcelSheet dataSet={datas} name="Organization" />
        </ExcelFile>
    );
};

// 데이터 예시
export default Excel;