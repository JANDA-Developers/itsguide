import React, { useState } from "react";
import TableRender, { ITableInfo } from "./components/TableRender";

export interface IReciptProp {
    approveTable: ITableInfo[];
    cancelTable?: ITableInfo[];
}

const CardRecipt: React.FC<IReciptProp> = ({ approveTable, cancelTable }) => {
    const [target, setTarget] = useState<"cancel" | "approval">("approval");

    const targetTable = target === "cancel" ? cancelTable : approveTable;

    return (
        <div>
            <table
                cellPadding={0}
                cellSpacing={0}
                width="100%"
                style={{
                    fontFamily: "Verdana, Geneva, sans-serif",
                    textAlign: "center",
                    zoom: -1,
                }}
            >
                <tbody>
                    <tr>
                        <td style={{ height: 20 }}></td>
                    </tr>
                    <tr>
                        <td align="center">
                            <div
                                style={{
                                    fontSize: "22px",
                                    fontWeight: "bold",
                                    color: "#4A5A71",
                                    lineHeight: "2em",
                                    maxWidth: "700px",
                                    width: "90%",
                                    textAlign: "left",
                                }}
                            >
                                결제전표
                                <div
                                    style={{
                                        textAlign: "right",
                                        fontSize: "18px",
                                        color: "#ff0000",
                                        float: "right",
                                        lineHeight: "14px",
                                        paddingTop: "9px",
                                    }}
                                >
                                    <a
                                        style={{
                                            display: "inline-block",
                                            textDecoration: "none",
                                            padding: "8px 20px",
                                            margin: "0 5px 5px",
                                            borderRadius: "5px",
                                            background: "#4A5A71",
                                            color: "#fff",
                                            fontWeight: "bold",
                                            float: "right",
                                            fontSize: "12px",
                                        }}
                                        href="javascript:window.print()"
                                    >
                                        영수증 인쇄
                                    </a>
                                    <select
                                        onChange={(e) => {
                                            const val = e.currentTarget
                                                .value as any;
                                            setTarget(val);
                                        }}
                                        style={{
                                            display: "inline-block",
                                            textDecoration: "none",
                                            padding: "6px 10px",
                                            margin: "0 5px 5px",
                                            borderRadius: "5px",
                                            border: "1px solid #929292",
                                            fontWeight: "bold",
                                            float: "right",
                                            fontSize: "12px",
                                        }}
                                    >
                                        <option value="approval">승인</option>
                                        {cancelTable && (
                                            <option value="cancel">취소</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div
                                // @ts-ignore
                                width="90%"
                                bgcolor="#ffffff"
                                style={{
                                    maxWidth: "700px",
                                    borderTop: "5px solid #4A5A71",
                                }}
                            />
                            <table
                                // @ts-ignore
                                align="center"
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                width="90%"
                                bgcolor="#ffffff"
                                style={{
                                    maxWidth: "700px",
                                    paddingBottom: "46px",
                                    borderBottom: "1px solid #d8d8d8",
                                }}
                            >
                                <tbody>
                                    {targetTable?.map((table, i) => {
                                        return (
                                            <TableRender key={i} {...table} />
                                        );
                                    })}
                                    <tr>
                                        <td
                                            style={{
                                                fontSize: "13px",
                                                color: "#2c2c2c",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    padding: "15px 10px 0 10px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        padding: "0 0 2% 0",
                                                        fontSize: "14px",
                                                        color: "#444444",
                                                        width: "100%",
                                                        lineHeight: "1.6em",
                                                        boxSizing: "border-box",
                                                    }}
                                                >
                                                    <img
                                                        src="https://stayjanda.com/email/icon_info.png"
                                                        alt="info"
                                                        style={{
                                                            verticalAlign:
                                                                "text-top",
                                                            width: "14px",
                                                        }}
                                                    />
                                                    신용카드 청구서에는
                                                    "잇츠가이드"로 표기됩니다.
                                                </div>
                                                <div
                                                    style={{
                                                        padding: "0 0 2% 0",
                                                        fontSize: "14px",
                                                        color: "#444444",
                                                        width: "100%",
                                                        lineHeight: "1.6em",
                                                        boxSizing: "border-box",
                                                    }}
                                                >
                                                    <img
                                                        src="https://stayjanda.com/email/icon_info.png"
                                                        alt="info"
                                                        style={{
                                                            verticalAlign:
                                                                "text-top",
                                                            width: "14px",
                                                        }}
                                                    />
                                                    부가세법시행령 제57조2항에
                                                    따라 결제대행업체를 총한
                                                    신용카드 매출전표는 사업자가
                                                    별도의 세금계산서를 교부하지
                                                    아니한 경우,
                                                    매입세금계산서로 사용하실 수
                                                    있습니다.
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export { CardRecipt };
export default CardRecipt;
