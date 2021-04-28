import React, { useContext } from "react";
import { AppContext } from "../../pages/_app";
import { Fpage } from "../../types/api";
import { Page } from "../../utils/generateClientPaging";

interface IProp {
    pageInfo: Fpage | Page;
    setPage: (page: number) => void;
    isMini?: boolean;
}

export const Paginater: React.FC<IProp> = ({
    pageInfo: { totalPageSize: totalPageCount, page: pageNumber, end_page_num },
    setPage,
    isMini,
}) => {
    const { ln } = useContext(AppContext);

    const disabled = (flag: boolean) =>
        flag
            ? {
                  style: {
                      pointerEvents: "none" as "none",
                  },
              }
            : undefined;

    const goPrev = () => {
        setPage(pageNumber - 1);
    };
    const goNext = () => {
        setPage(pageNumber + 1);
    };

    console.log({ totalPageCount });
    const pageLength = totalPageCount;
    const pageStart = totalPageCount - 5;
    let pages = Array(totalPageCount)
        .slice(pageStart, pageLength)
        .fill(null)
        .map((_, i) => (pageNumber - 3 > 0 ? pageNumber - 3 : 0) + (i + 1));

    if (pages[pages.length - 1] > totalPageCount) {
        pages = Array(totalPageCount)
            .slice(pageStart, pageLength)
            .fill(null)
            .map((_, i) => totalPageCount - i)
            .reverse();
    }
    const firstPage = pageNumber < 2;
    const lastPage = pageNumber === end_page_num;

    if (isMini)
        return (
            <div className="float_left">
                <div className="pagenate_mini">
                    <div
                        {...disabled(firstPage)}
                        onClick={goPrev}
                        className="page_btn first"
                    >
                        <i className="jandaicon-arr4-left" />
                    </div>
                    <div className="count">
                        <strong>{pageNumber}</strong> / {totalPageCount}
                    </div>
                    <div
                        {...disabled(lastPage)}
                        onClick={goNext}
                        className="page_btn end"
                    >
                        <i className="jandaicon-arr4-right" />
                    </div>
                </div>
            </div>
        );

    return (
        <div className="pagenate">
            <div className="page">
                <a
                    {...disabled(firstPage)}
                    onClick={() => {
                        setPage(1);
                    }}
                    className="page_btn first"
                >
                    {ln("start")}
                </a>
                <a
                    {...disabled(firstPage)}
                    onClick={goPrev}
                    className="page_btn prev"
                >
                    {ln("prev")}
                </a>
                {pages.map((page) => (
                    <a
                        key={page + "page"}
                        onClick={() => {
                            setPage(page);
                        }}
                        className={pageNumber === page ? "on" : "off"}
                    >
                        {page}
                    </a>
                ))}
                <a
                    {...disabled(firstPage || lastPage)}
                    onClick={goNext}
                    className="page_btn next"
                >
                    {ln("next")}
                </a>
                <a
                    {...disabled(firstPage || lastPage)}
                    onClick={() => {
                        setPage(end_page_num);
                    }}
                    className="page_btn end"
                >
                    {ln("last")}
                </a>
            </div>
        </div>
    );
};
