import { useRouter } from 'next/router';
import React from 'react';
import { BoardView } from "components/board/View";
import { useAnnounceDelete, useAnnounceFindById } from '../../../../hook/useAnnounce';
import PageLoading from '../../../Loading';
import Page404 from '../../../404';

interface IProp {
}

export const AnnounceDetail: React.FC<IProp> = () => {
    const router = useRouter();
    const announceId = router.query.id as string;
    const [announceDeleteMu] = useAnnounceDelete({
        onCompleted: ({ AnnounceDelete }) => {
            if (AnnounceDelete.ok) toList();
        }
    })
    const { item: announce, error } = useAnnounceFindById(announceId);

    if (error) return <Page404 />
    if (!announce) return <PageLoading />

    const { title, thumb, createdAt, contents, subTitle, _id, } = announce;


    const toDetail = () => {
        router.push(`/service/announce/write/${_id}`)
    }

    const toList = () => {
        router.push(`/service/announce/`)
    }

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            announceDeleteMu({
                variables: {
                    id: _id
                }
            })
    }

    return <div>
        <BoardView
            onList={toList}
            thumb={thumb}
            content={contents}
            writer={"관리자"}
            title={title}
            subTitle={subTitle || ""}
            onDelete={handleDelete}
            onEdit={toDetail}
            createAt={createdAt}

        />
    </div>
};


export default AnnounceDetail;