import Link from "next/link";
import { checkOn } from "./MasterTopNav";



export const MemberTopNav = () => <ul className="memberTopNav subtop_nav">
    <li className={checkOn("announce")}><Link href="/service/announce"><a>공지사항</a></Link></li>
    <li className={checkOn("qna")}><Link href="/service/qna"><a>자주하는 질문</a></Link></li>
    <li className={checkOn("question")}><Link href="/service/question"><a>고객문의</a></Link></li>
</ul>