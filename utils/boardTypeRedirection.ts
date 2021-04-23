import { useRouter } from "next/router";
import { BoardType, myBoardList_MyBoardList_data } from "../types/api";

export const boardTypeRedirection = (boardType: BoardType, id: string) => {
    const router = useRouter();
    const isProduct = boardType === BoardType.PRODUCT;
    const isQuestion = boardType === BoardType.QUESTION;
    if (isProduct) router.push(`/tour/view/${id}`);
    if (isQuestion) router.push(`/member/question/view/${id}`);
};
