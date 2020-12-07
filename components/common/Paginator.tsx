import React from 'react';
import { Fpage } from '../../types/api';

interface IProp {
    pageInfo: Fpage
    setPage: (page: number) => void;
}

export const Paginater: React.FC<IProp> = ({ pageInfo: {
    totalPageSize: totalPageCount,
    page: pageNumber,
    end_page_num
}, setPage }) => {

    const disabled = (flag: boolean) => flag ? {
        style: {
            pointerEvents: "none"
        }
    } : undefined;

    const pageLength = totalPageCount;
    const pageStart = totalPageCount - 5;
    const pages = Array(totalPageCount).slice(pageStart, pageLength).fill(null).map((_, i) => i + 1);
    const firstPage = pageNumber < 2;
    const lastPage = pageNumber === end_page_num

    return <div className="pagenate">
        <div className="page">
            <a  {...disabled(firstPage)} onClick={() => {
                setPage(1)
            }} className="page_btn first">처음</a>
            <a {...disabled(firstPage)} onClick={() => {
                setPage(pageNumber - 1)
            }} href="/kor/view.do?no=170" className="page_btn prev">이전</a>
            {pages.map(page =>
                <a key={page + "page"} onClick={() => {
                    setPage(page);
                }} className={pageNumber === page ? "on" : "off"}>{page}</a>
            )}
            <a {...disabled(firstPage || lastPage)} onClick={() => {
                setPage(pageNumber + 1)
            }} className="page_btn next">다음</a>
            <a  {...disabled(firstPage || lastPage)} onClick={() => {
                setPage(end_page_num)
            }} className="page_btn end">마지막</a>
        </div>
    </div>;
};
