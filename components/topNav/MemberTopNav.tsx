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
                    <a>{ln("announce")}공지사항</a>
                </Link>
            </li>
            <li className={checkOn("qna")}>
                <Link href="/service/qna">
                    <a>자주하는 질문</a>
                </Link>
            </li>
            <li className={checkOn("event")}>
                <Link href="/service/event">
                    <a>이벤트</a>
                </Link>
            </li>
            <li className={checkOn("question")}>
                <Link href="/service/question">
                    <a>고객문의</a>
                </Link>
            </li>
        </ul>
    );
};
