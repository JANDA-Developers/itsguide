import Link from "next/link";
import { checkOn } from "./MasterTopNav";



export const MemberTopNav = () => <ul className="memberTopNav subtop_nav">
    <li className={checkOn("announce")}><Link href="/service/announce"><a>공지사항</a></Link></li>
    <li className={checkOn("event")}><Link href="/service/event"><a>이벤트</a></Link></li>
    <li className={checkOn("question")}><Link href="/service/question"><a>고객문의</a></Link></li>
</ul>