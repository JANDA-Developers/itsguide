export enum JDinputType {
    warning = 'warning',
    notice = 'notice',
    text = "text",
    map = "map",
    line = "line",
    switch = "switch",
    colour = 'colour',
    listLine = 'listLine',
    img = "img",
    timespace = "timespace",
    channelTak = "channelTalk",
    share = "share",
    api = "api",
    editor = "editor",
    link = "link",
    array = "array",
    tag = "tag"
}

export const SHARED_INFO = {
    shareLabel: {
        description: "공유하기 라벨",
        kr: "공유하기",
        GB: "SNS share",
        CH: "SNS share",
        JP: "SNS share"
    },
    langLabel: {
        description: "언어변경 텍스트",
        kr: "Language",
        GB: "Language",
        CH: "Language",
        JP: "Language"
    },
    link_twitter: {
        value: ""
    },
    link_facebook: {
        value: ""
    },
    link_insta: {
        value: ""
    },
    link_email: {
        value: ""
    },
    channelTalkLabel: {
        description: "채널톡 버튼 라벨",
        kr: "채널톡",
        GB: "Open Channel Talk",
        CH: "Open Channel Talk",
        JP: "Open Channel Talk"
    },
    twitter: {
        kr: "https://facebook.com",
        GB: "https://facebook.com",
        CH: "https://facebook.com",
        JP: "https://facebook.com"
    },
    facebook: {
        kr: "https://facebook.com",
        GB: "https://facebook.com",
        CH: "https://facebook.com",
        JP: "https://facebook.com"
    },
    instaGram: {
        kr: "https://facebook.com",
        GB: "https://facebook.com",
        CH: "https://facebook.com",
        JP: "https://facebook.com"
    },
    email: {
        kr: "janda@stayjanda.com",
        GB: "janda@stayjanda.com",
        CH: "捷径",
        JP: ""
    },
    goto: {
        kr: "바로가기",
        GB: "go to",
        CH: "",
        JP: ""
    },
    currency_kr: {
        kr: "원",
        GB: "KRW",
        CH: "KRW",
        JP: "KRW"
    },
    get: function (key: string, lang: string, index?: number): any {

        if (index !== undefined) {
            // @ts-ignore
            if (this[key].value) {
                // @ts-ignore
                return this[key].value[index]
            } else {
                // @ts-ignore
                return this[key][lang][index];
            }
        }

        // @ts-ignore
        if (this[key].value) {
            // @ts-ignore
            return this[key].value
        } else {
            // @ts-ignore
            return this[key][lang];
        }
    },
    set: function (key: string, lang: string, value: any, index?: number): any {

        if (index !== undefined) {
            // @ts-ignore
            if (this[key].value !== undefined) {
                // @ts-ignore
                this[key].value[index] = value
            } else {
                // @ts-ignore
                return this[key][lang][index] = value;
            }
        }


        if (index === undefined) {
            // @ts-ignore
            if (this[key].value !== undefined) {
                // @ts-ignore
                this[key].value = value
            } else {
                // @ts-ignore
                this[key][lang] = value;
            }
        }
    }
}

export const ITS_GUIDE_INFO = {
    ...SHARED_INFO,
    itsGuideEmail: {
        description: "잇츠가이드 연동 이메일",
        value: ""
    },
    topBg: {
        description: "최상단 이미지",
        type: JDinputType.img,
        kr: "별나라호텔",
        GB: "Star Hotel",
        CH: "星级饭店",
        JP: ""
    },
    channelTalk: {
        description: "채널톡",
        type: JDinputType.channelTak,
        publickKey: "チャンネルフリック"
    },
    channelTalkLabel: {
        kr: "채널톡 문의하기",
        GB: "Open Channel Talk ",
        CH: "公开频道谈话",
        JP: "チャンネルフリックお問い合わせ"
    },
    share: {
        type: JDinputType.share,
    },
    shareLabel: {
        type: JDinputType.share,
        kr: "공유하기",
        GB: "SNS share",
        CH: "SNS分享",
        JP: "共有する"
    },
    langLabel: {
        kr: "Language",
        GB: "Language",
        CH: "Language",
        JP: "Language"
    },
    contentTitle: {
        description: "소개글 라벨",
        kr: "소개글",
        GB: "Self introduce",
        CH: "自我介绍",
        JP: "紹介文"
    },
    content: {
        description: "소개글 내용",
        type: JDinputType.editor,
        kr: `1990년 관광통역가이드 취득 15년 패키지 여행안내후 프리랜서로 독립 , 한국인의 일본여행 인솔로 일본 오키나와~홋카이도까지 인솔겸 가이드,로 활동, 이후 여행사를 오픈하여 부산과 서울등 대도시에서 출발 지방으로가서 여러가지 체험과 숨겨진 관광지를 직접 기획하고 안내하는 오더메이드형 기획여행, 건강여행을 리드하고 있습니다.
        <br /> <br />
             현재까지 일본인가이드로써 서울을 비롯 제주도까지가이드 . 한국인인솔자로써 일본방문 100회이상. 일본 지상파TV TBS한국특집 한국총괄코디네이트(요리방송. 한옥 과 한방체험. 피부과 찰영등) 교류회매칭. 유네스코지정 사찰등 불교관련 답사 및 순례. .JATA박람회부스운영. 한국산후조리원 일본소개 및 제휴. 등 다양한활동
        <br /> <br />
                 유명한 관광지도 좋지만 소모성으로 피곤한 여행이 아닌, 나자신이 즐거운, 생활에 재충전이 되는 여행을 체험과 함께 즐기며 가이드하고 싶습니다.
        <br /> <br />
                     저와 함께 하시면 웰니스(Wellness)투어 즉 명상. 템플스테이. 아름다운경치를 바라보며 산책. 요트. 한방의 정보와 건강한 맛집탐방으로 편안하고 즐거운 체험으로 힐링 하실수 있을것입니다.`,
        GB: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
        CH: "性讓開參心，著演收同，一下的實。參只進……查學教了里算勢根，接發於，一開本綠麼安這、流他書，從開縣媽親公節引民我好過來超？女記路錢件……國能人把海。民多為叫得。相我成分動處我基為認中腦，而量地不說年等我管立具選大皮，走林得後會，清選程少時……嗎權是語一叫持合！那變大點發現汽成歡勢生金常由的圖政開人親般、已另外況者室。一比就讀中紀業代：空醫器事候而你心天種一是，特出知會白單氣前下玩生年合覺好今念，河行東女。營現感了用這到議領樂水他學展花出，管的單課傳寶中們題分我十業回？對商反關件東眼身二同……的分們大有用：經馬記它哥。開年有小一活？在發足要展到：口影們、朋二來眾重呢為刻強知日不層出……說相建進國，打次晚的，會半見推風其社傳前走青型民，地名知覺岸改！",
        JP: "合カヤ輔市メトロホ降3役ミ契遠ヤ下12詳るぴれけ山客リさ制3全オヌメ古盗ト夜村円え宇残秋せてえぎ。行勝ほーし高裏会げぎほ身置フナチ経治むじちト少門はせけ書米づ手用ば響図ソヌア組著百ス回員倍門分使ー。成ニウアム洋材ばりち会伊ネアレ検野メヱ奥再ウハ朝著ア題最をほ故午ん閣47動つよょ江社ヱ真1席く般国載ずル化照式げ。"
    },
    contentTitle2: {
        description: "경력 전문성",
        kr: "경력 전문성",
        GB: "Career",
        CH: "经历",
        JP: "経歴"
    },
    content2: {
        description: "경력 내용",
        type: JDinputType.editor,
        kr: `경력을 입력해주세요.`,
        GB: `-`,
        CH: "-",
        JP: "-"
    },
    title_guid: {
        kr: "가이드 정보",
        GB: "Guid Info",
        CH: "引导信息",
        JP: "ガイド情報"
    },
    guid_info1_label: {
        // 편집불가 
        kr: "총 가이드",
        GB: "Total Guid Count",
        CH: "总引导计数",
        JP: "総ガイド"
    },
    guid_info2_label: {
        // 편집불가 
        kr: "총 가이드인원",
        GB: "Guided customer count",
        CH: "导游总数",
        JP: "総ガイド人員"
    },
    guid_info3_label: {
        // 편집불가 
        kr: "가이드 리뷰",
        GB: "Guid Review",
        CH: "指南审查",
        JP: "ガイドレビュー"
    },
    guid_info4_label: {
        // 편집불가 
        kr: "가이드 상품",
        GB: "Guid Product",
        CH: "指导商品",
        JP: "ガイド商品"
    },
    profile: {
        description: "프로필 이미지",
        type: JDinputType.img,
        kr: "/template/profile/img/man01.jpg",
        GB: "/template/profile/img/man01.jpg",
        CH: "/template/profile/img/man01.jpg",
        JP: "/template/profile/img/man01.jpg"
    },
    portfolio_label: {
        // 편집불가 
        kr: "가이드 상품목록",
        GB: "Guid Product",
        CH: "指导产品清单",
        JP: "ガイド商品一覧"
    },
    productView: {
        kr: "등록된 상품",
        GB: "Product",
        CH: "注册产品",
        JP: "登録された商品"
    },
 
    noReviewData: {
        kr: "아직 리뷰한 상품이 없습니다.",
        GB: "No Review Product yet",
        CH: "尚无产品经过审查。",
        JP: "まだレビューした商品がありません。"
    },
    noProductData: {
        kr: "아직 등록한 상품이 없습니다.",
        GB: "No Regiseted Product yet",
        CH: "暂无注册产品。",
        JP: "まだ登録されて商品がありません。"
    },
    guid_info1_value: {
        kr: "0",
        GB: "0",
        CH: "0",
        JP: "0"
    },
    guid_info2_value: {
        kr: "0",
        GB: "0",
        CH: "0",
        JP: "0"
    },
    guid_info3_value: {
        kr: "0",
        GB: "0",
        CH: "0",
        JP: "0"
    },
    guid_info4_value: {
        kr: "0",
        GB: "0",
        CH: "0",
        JP: "0"
    },
}

export default ITS_GUIDE_INFO