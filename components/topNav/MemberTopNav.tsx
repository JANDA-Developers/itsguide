import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../../pages/_app";
import { checkOn } from "./MasterTopNav";

export const MemberTopNav = () => {
    const { ln } = useContext(AppContext);
    return (
        <ul className="memberTopNav subtop_nav">
            <li className={checkOn("announce")}>
                <Link href="/service/announce">
                    <a>{ln("announce")}</a>
                </Link>
            </li>
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
