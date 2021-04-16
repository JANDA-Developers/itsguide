import { useRouter } from "next/router";
import React, { useEffect } from 'react';
import { initStorage, Storage } from '../../../utils/Storage';
import { BoardWrite } from "components/board/Write";
import { IUseBoardData, nullcehck, useBoard } from "hook/useBoard";
import { omits } from "../../../utils/omit";
import { auth } from "../../../utils/with";
import { ALLOW_LOGINED } from "../../../types/const";
import { Fnews, NEWS_TYPE } from '../../../types/api';
import { useNewsCreate, useNewsDelete, useNewsFindById, useNewsUpdate } from "../../../hook/useNews";

const categoryOps = [{
    label: "여행이야기",
    _id: NEWS_TYPE.TRAVEL
},
{
    label: "뉴스보도",
    _id: NEWS_TYPE.MEDIA
},
{
    label: "문화이야기",
    _id: NEWS_TYPE.CULTURE
}]
interface IProp {
    news: Fnews
}

export const NewsWrite: React.FC<IProp> = () => {
    const router = useRouter();
    const id = router.query.id?.[0] as string | undefined;
    const { item: news } = useNewsFindById(id);
    const mode = id ? "edit" : "create";

    const goToView = (id: string) => {
        router.push(`/news/view/${id}`)
    }

    const [newsUpdate] = useNewsUpdate({
        awaitRefetchQueries: true,
        onCompleted: ({ NewsUpdate }) => {
            if (NewsUpdate.ok) {
                const id = NewsUpdate.data!._id;
                goToView(id)
            }
        },
    })

    const [newsCreate] = useNewsCreate({
        awaitRefetchQueries: true,
        onCompleted: ({ NewsCreate }) => {
            if (NewsCreate.ok) {
                const id = NewsCreate.data!._id;
                goToView(id)
            }
        },
    })

    const [newsDelete] = useNewsDelete({
        onCompleted: ({ NewsDelete }) => {
            if (NewsDelete.ok)
                router.push(`/news`)
        },
    })

    const boardHook = useBoard({
        ...news,
        categoryId: news?.type
    });

    const { boardData, loadKey, loadKeyAdd, setBoardData, validater: { validate } } = boardHook

    const handleUpdate = () => {
        if (!validate()) return;

        const params = {
            ...boardData,
            type: boardData.categoryId as NEWS_TYPE
        }

        newsUpdate({
            variables: {
                params: omits(params, ["categoryId", "files"]),
                id: id!
            }
        })
    }

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            newsDelete({
                variables: {
                    id: id!
                }
            })
    }

    const handleCreate = () => {
        if (!validate()) return;

        const createParams = {
            ...boardData,
            content: boardData.contents,
            type: boardData.categoryId as NEWS_TYPE
        }

        const next = omits(createParams, ["contents", "categoryId"])

        newsCreate({
            variables: {
                params: omits(next, ["categoryId", "files"])
            }
        })
    }

    const handleTempSave = () => {
        Storage?.saveLocal("newsWrite", boardData);
        alert("저장완료");
    }

    const handleCancel = () => {
        router.push("/news")
    }

    const handleLoad = () => {
        const saveData = Storage?.getLocalObj<IUseBoardData>("newsWrite");

        if (!saveData) {
            alert("저장된 데이터가 없습니다.");
            return;
        }
        setBoardData(saveData);
        loadKeyAdd();
    }

    useEffect(() => {
        initStorage()
    }, [])


    return <BoardWrite
        author={news?.author}
        boardHook={boardHook}
        key={loadKey}
        mode={mode}
        onCancel={handleCancel}
        categoryList={categoryOps}
        onCreate={handleCreate}
        onDelete={handleDelete}
        onEdit={handleUpdate}
        onSave={handleTempSave}
        onLoad={handleLoad}
        opens={{
            category: true,
            summary: true,
            thumb: true,
            title: true
        }}
    />
};


export default auth(ALLOW_LOGINED)(NewsWrite)




// UI 컴포넌트 문제 => 지금은 해결이 불가능함, 다음 작업이 생기면 예기를 해서 구조화를 잡아야할것
// 게시판문제 => 지금 형식이 아예 단점만 있는건 아니므로 유지
// 문제 복사형태 지금 맡은 2개의 프로젝트는 어차피 도화지였음!! 내가 결국에는 하나씩 맞춰 주는 수 밖에 없음
// 배포문제 : 지금 하고있잖음 ㅋ 
2