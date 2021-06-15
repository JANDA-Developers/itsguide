import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../../pages/_app";
import { AnnounceTarget } from "../../types/api";
import { checkOn } from "./MasterTopNav";

export const MemberTopNav = () => {
    const { ln, isSeller } = useContext(AppContext);
    return (
        <ul className="memberTopNav subtop_nav">
            <li
                className={(() => {
                    const onClass = checkOn("announce");
                    if (typeof window === "undefined") return "";
                    return window.location.search !== "?target=GUIDE"
                        ? onClass
                        : "";
                })()}
            >
                <Link href="/service/announce">
                    <a>{ln("announce")}</a>
                </Link>
            </li>
            {isSeller && (
                <li
                    className={(() => {
                        const onClass = checkOn("announce");
                        if (typeof window === "undefined") return "";
                        return window.location.search === "?target=GUIDE"
                            ? onClass
                            : "";
                    })()}
                >
                    <Link
                        href={`/service/announce?target=${AnnounceTarget.GUIDE}`}
                    >
                        <a>{ln("guideAnnounce")}</a>
                    </Link>
                </li>
            )}
            <li className={checkOn("qna")}>
                <Link href="/service/qna">
                    <a>{ln("frequentQuestion")}</a>
                </Link>
            </li>
            {/* <li className={checkOn("event")}>
                <Link href="/service/event">
                    <a>{ln("event")}</a>
                </Link>
            </li> */}
            <li className={checkOn("question")}>
                <Link href="/service/question">
                    <a>{ln("question")}</a>
                </Link>
            </li>
        </ul>
    );
};
