import React from 'react';
import { Fpage } from '../../types/api';

interface IProp {
    pageInfo: Fpage
}

export const Paginater: React.FC<IProp> = ({ pageInfo: {
    totalPageSize: totalPageCount,
    page: pageNumber
} }) => {

    const pageLength = totalPageCount;
    const pageStart = totalPageCount - 5;
    const pages = Array(totalPageCount).slice(pageStart, pageLength).fill(null).map((_, i) => i);

    return <div className="pagenate">
        <div className="page">
            <a href="/kor/view.do?no=170" className="page_btn first">처음</a>
            <a href="/kor/view.do?no=170" className="page_btn prev">이전</a>
            {pages.map(page =>
                <a key={page + "page"} href="#none" className={pageNumber === page ? "on" : "off"}>{page}</a>
            )}
            <a href="/kor/view.do?no=170" className="page_btn next">다음</a>
            <a href="/kor/view.do?no=170" className="page_btn end">마지막</a>
        </div>
    </div>;
};
