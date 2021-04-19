import { useRouter } from "next/router";
import { useNewsCreate, useNewsDelete, useNewsFindById, useNewsUpdate } from "../../hook/useNews";
import { TCreateFn, TDeleteFn, TUpdateFn } from "../../pages/news/write/[[...id]]";
import { Fnews, NewsCreateInput, NewsUpdateInput } from "../../types/api";
import { omits } from "../../utils/omit";


export interface ITourWriteWrapContext {
    createFn: TCreateFn;
    updateFn: TUpdateFn;
    deleteFn: TDeleteFn;
    news?: Fnews;
    findLoading: boolean;
    createLoading: boolean;
    mode: "create" | "edit"
    id?: string;
}

interface IComponentProp {
    context: ITourWriteWrapContext;
    [key: string]: any
}

export const NewsWriteWrap= (Compoent: React.FC<IComponentProp & any>) => (props) => {
    const router = useRouter(); // => 넥스트에서는 변경
    const id = router.query.id?.[0] as string | undefined;
    
    const { newsUpdate, updateLoading } = useNewsUpdate({
        onCompleted: ({ NewsUpdate }) => {
            if (NewsUpdate.ok) {
                const id = NewsUpdate.data!._id;
                router.push(`/news/view/${id}`)
            }
        },
        awaitRefetchQueries: true
    })

    const { newsCreate, createLoading } = useNewsCreate({
        onCompleted: ({ NewsCreate }) => {
            if (NewsCreate.ok) {
                const id = NewsCreate.data!._id;
                router.push(`/news/view/${id}`)
            }
        },
        awaitRefetchQueries: true
    })

    const { newsDelete } = useNewsDelete({
        onCompleted: ({ NewsDelete }) => {
            if (NewsDelete.ok)
                router.push(`/news`)
        },
    })

    const { news, loading: findLoading } = useNewsFindById(id);

    const createFn: TCreateFn = (params: NewsCreateInput) => {
        newsCreate({
            params: omits(params, ["categoryId", "files"])
        })
    }

    const deleteFn: TDeleteFn = (id: string) => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            newsDelete({
                id
            })
    }

    const updateFn = (id: string, params: NewsUpdateInput) => {
        newsUpdate({
            params: omits(params, ["categoryId", "files"]),
            id
        })
    }

    if (createLoading || findLoading) return null;

    const context: ITourWriteWrapContext = {
        createFn,
        updateFn,
        deleteFn,
        news,
        findLoading,
        createLoading,
        mode: !id ? "create" : "edit",
        id
    }

    if (findLoading) return null;

    return <Compoent {...props} context={context} />;
};
