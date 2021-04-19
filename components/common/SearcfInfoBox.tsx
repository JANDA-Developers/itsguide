import React from 'react';

interface IProp {
}

export const SearcfInfoBox: React.FC<IProp> = () => {
    return <div className="search_info_box">
        <ul>
            <li><h3><i className="jandaicon-info2 tooltip"></i> 검색조건 안내</h3></li>
            <li>승인여부 : 승인대기 / 승인 / 미승인</li>
            <li>상품상태 : 예약진행중 / 예약마감 / 여행취소 / 여행완료 / 체험완료 / 체험취소</li>
            <li>예약상태 : 예약완료 / 예약대기 / 예약취소</li>
            <li>진행여부 : 진행미정 / 진행확정</li>
            <li>결제상태 : 입금대기중 / 결제완료</li>
            <li>환불상태 : 전액환불 / 부분환불 / 전액취소 / 부분취소</li>
            <li>취소상태 : 취소대기 / 취소완료</li>
            <li>결제종류 : 무통장입금 / 카드결제{/*  / 카카오페이 / 네이버페이 */}</li>
            <li>카테고리 : 문화·예술여행 / 교육·답사여행 / 역사여행 / 팸투어 / 원데이클래스 / 체험학습 / 한달살기</li>
        </ul>
    </div>;
};
