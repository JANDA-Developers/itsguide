import React from "react";
import SubTopNav from "layout/components/SubTop";
import Link from "next/link";

interface IProp {}

export const Rule: React.FC<IProp> = () => {
    return (
        <div>
            <div className="top_visual sub_nav_ok">
                <div
                    className="sub_header sub_bg"
                    style={{ backgroundImage: `url(/its/su_visual_bg.jpg)` }}
                >
                    <div className="w1200">
                        <h2 className="title">이용약관</h2>
                        <p className="text">지금 여행을 떠나세요~!~~!!!!!</p>
                    </div>
                </div>
                <div className="header_nav">
                    <ul>
                        <li className="home">
                            <Link href="/index">
                                <a></a>
                            </Link>
                        </li>
                        <li className="homedeps1">서비스</li>
                        <li className="homedeps2">
                            <Link href="/">
                                <a>이용약관</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="rule_box w1200">
                <ul className="subtop_nav">
                    <li className="on">
                        <Link href="/service/rule">
                            <a>이용약관</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/service/privacy-policy">
                            <a>개인정보처리방침</a>
                        </Link>
                    </li>
                </ul>

                <h4>제 1조 목적</h4>
                <p>
                    이 약관은 주식회사 잇츠가이드(이하 "당사"이라 합니다)이
                    운영하는 웹사이트(www.itsguide.co.kr) 및
                    어플리케이션(Application, 통칭하여 "잇츠가이드 플랫폼")에서
                    제공하는 서비스(이하 “서비스”라 합니다)를 이용함에 있어
                    "당사"와 이용자의 권리 및 의무 및 책임사항을 규정함을
                    목적으로 합니다.
                </p>
                <h4 className="mt20">제 2조 (정의)</h4>
                <ul>
                    <li>
                        1. "당사"란 서비스를 제공하는 (주)잇츠가이드를 말하며,
                        (주)잇츠가이드가 중개 및 판매하는 재화 또는 용역(이하
                        "재화 등"이라 합니다)을 이용자에게 제공하기 위하여
                        컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수
                        있도록 설정한 가상의 영업장인 사이버 몰의 의미로도
                        사용합니다.
                    </li>
                    <li>
                        2. "이용자"란 "당사"에 접속하여 이 약관에 따라 "당사"가
                        제공하는 서비스를 받는 회원을 말합니다.
                    </li>
                    <li>
                        3. "회원"이라 함은 "당사"에 개인정보를 제공하여
                        회원등록을 한 자로서, "당사"의 정보를 지속적으로
                        제공받으며, "당사"가 제공하는 서비스를 계속적으로 이용할
                        수 있는 자를 말합니다.
                    </li>
                    <li>
                        4. “가이드"라고 함은 당사와 협약이 체결된 이로서
                        이용자에게 각종 여행 서비스를 제공하는 ”가이드”와 “개인
                        가이드”(이하 “가이드”)를 말합니다.
                    </li>
                    <li>
                        5. "가이드"라고 함은 당사 또는 가이드의 인력으로
                        플랫폼을 통해 직접 여행지에서 여행자에게 서비스를
                        제공하는 자를 말합니다.
                    </li>
                </ul>

                <h4 className="mt20">제 3조 (약관의 명시와 개정)</h4>
                <ul>
                    <li>
                        1. "당사"는 이 약관의 내용과 상호 및 대표자 성명, 영업소
                        소재지, 주소(소비자의 불만을 처리할 수 있는 곳의 주소를
                        포함), 전화번호, Fax, 전자우편주소, 사업자등록번호,
                        통신판매업신고번호, 개인정보관리책임자 등을 이용자가
                        쉽게 알 수 있도록 “당사” 웹사이트의 초기
                        서비스화면(전면)에 게시합니다. 다만, 약관의 내용은
                        이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
                    </li>
                    <li>
                        2. "당사"는 「전자상거래 등에서의 소비자보호에 관한
                        법률」, 「약관의 규제에 관한 법률」, 「전자문서 및
                        전자거래기본법」, 「전자금융거래법」, 「전자서명법」,
                        「정보통신망 이용촉진 및 정보보호 등에 관한 법률」,
                        「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련
                        법을 위배하지 않는 범위에서 이 약관을 개정할 수
                        있습니다.
                    </li>
                    <li>
                        3. “당사”가 약관을 개정할 경우에는 적용일자 및
                        개정사유를 명시하여 현행약관과 함께 “당사”의 “플랫폼”
                        초기화면이나 초기화면과의 연결화면에 그 적용일자 7일
                        이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게
                        불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의
                        사전 유예기간을 두고 공지합니다. 이 경우 “당사”는
                        중요내용에 관하여 개정 전 내용과 개정 후 내용을 명확하게
                        비교하여 이용자가 알기 쉽도록 표시합니다.
                    </li>
                    <li>
                        4. “당사”가 약관을 개정할 경우에는 그 개정약관은 그
                        적용일자 이후에 체결되는 계약에만 적용되고 그 이전에
                        이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로
                        적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관
                        조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의
                        공지기간 내에 “당사”에 송신하여 동의를 받은 경우에는
                        개정약관 조항이 적용됩니다.
                    </li>
                    <li>
                        5. “당사”가 약관을 개정하는 경우 이용자는 개정약관에
                        동의하지 않을 권리가 있습니다. 이용자가 개정약관에
                        동의하지 않을 경우에는 서비스 이용을 중단하고 “당사”에
                        탈퇴를 요청할 수 있습니다. 다만 이용자가 제3항의 방법
                        등으로 고지한 개정약관의 개정 유예기간 내에 “당사”의
                        개정약관에 동의하지 않겠다는 명시적인 의사표시를 하지
                        않는 경우 개정 약관에 동의한 것으로 간주합니다.
                    </li>
                    <li>
                        6. 이 약관은 “당사”와 이용자간에 성립되는 서비스 이용
                        관련 기본약정입니다. “당사”는 필요한 경우 특정 서비스에
                        관하여 적용될 사항(이하 "개별약관"이라고 합니다)을
                        정하여 미리 공지할 수 있으며, 이러한 개별약관에 동의하고
                        특정 서비스를 이용하는 경우에는 개별약관이 우선적으로
                        적용되고, 이 약관은 보충적인 효력을 갖습니다. 개별약관의
                        변경에 관해서는 위 제 3 항 및 제 4 항을 준용합니다.
                    </li>
                    <li>
                        7. 이용자가 가입시 동의한 약관에 관하여 열람을 요구할
                        경우, “당사”는 이용자가 가입시 기재한 전자우편 주소로
                        내용을 전송합니다.
                    </li>
                    <li>
                        8. "당사"는 제공하는 서비스의 구체적 내용에 따라 개별
                        서비스에 대한 약관 및 이용조건을 각 개별 서비스마다
                        별도로 정하여 회원의 동의를 얻을 수 있습니다. 이 경우
                        개별 서비스에 대한 이용약관 등이 본 약관에 우선합니다.
                    </li>
                    <li>
                        9. 이 약관에서 정하지 아니한 사항과 이 약관의 해석에
                        관하여는 전자상거래 등에서의 소비자보호에 관한 법률,
                        약관의 규제 등에 관한 법률, 공정거래위원회가 정하는
                        「전자상거래 등에서의 소비자 보호지침」 및 관계법령 또는
                        상관례에 따릅니다.
                    </li>
                </ul>

                <h4 className="mt20">제 4조 (서비스의 제공 및 변경)</h4>
                <ul>
                    <li>
                        1. "당사"는 다음과 같은 업무를 수행합니다.
                        <br />
                        (1) "당사”가 직접 판매하는 재화 등에 대한 정보 제공, 및
                        재화 등의 판매계약 체결
                        <br />
                        (2) “가이드”와의 여행계약 체결 중개를 포함한 재화 등의
                        판매계약의 중개
                        <br />
                        (3) 기타 "당사"가 정하는 업무 등
                    </li>
                    <li>
                        2. 중개 서비스의 경우 “당사”는 가이드와 이용자 간의
                        거래의 신뢰도 및 안정성을 증진시키는 도구(플랫폼)만을
                        제공하며, 가이드와 이용자 간에 성립된 거래에 관련된
                        책임은 거래의 당사들 스스로가 부담하여야 합니다.
                    </li>
                    <li>
                        3. "당사"는 재화 또는 용역의 품절 또는 기술적 사양의
                        변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화
                        또는 용역의 내용을 변경할 수 있습니다. 이 경우에는
                        변경된 재화 또는 용역의 내용 및 제공일자를 명시하여
                        현재의 재화 또는 용역의 내용을 게시한 곳에 즉시
                        공지합니다.
                    </li>
                    <li>
                        4. "당사"가 제공하기로 이용자와 계약을 체결한 서비스의
                        내용을 재화 등의 품절 또는 기술적 사양의 변경 등의
                        사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능한
                        주소로 즉시 통지합니다.
                    </li>
                    <li>
                        5. 전항의 경우 “당사”는 이로 인하여 이용자가 입은 손해를
                        배상합니다. 다만, “당사”가 고의 또는 과실이 없음을
                        입증하는 경우에는 그러하지 아니합니다.
                    </li>
                    <li>
                        6. "당사”는 필요하다고 판단하는 경우 서비스의 일부를
                        제휴업체 등 제3자에 위탁할 수 있습니다.
                    </li>
                </ul>

                <h4 className="mt20">제 5조 (서비스의 중단)</h4>
                <ul>
                    <li>
                        1. "당사"는 컴퓨터 등 정보통신설비의 보수 점검, 교체 및
                        고장, 통신의 두절, 서비스 이용의 폭주 및 국가비상사태,
                        정전, 천재지변 등의 불가항력적인 사유가 있는 경우 등,
                        정상적인 서비스 이용에 지장이 있는 경우 등의 사유가
                        발생한 경우에는 서비스의 제공을 일시적으로 중단할 수
                        있습니다.
                    </li>
                    <li>
                        2. 사업종목의 전환, 사업의 포기, 업체 간 통합 등의
                        이유로 서비스를 제공할 수 없게 되는 경우에는 "당사”는 제
                        8 조에 정한 방법으로 이용자에게 통지합니다.
                    </li>
                </ul>

                <h4 className="mt20">제 6조 (회원가입)</h4>
                <p>
                    1. 이용자는 "당사"가 정한 가입 양식에 따라 회원정보를 기입한
                    후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을
                    신청합니다.
                </p>
                <p>
                    2. "당사"는 제 1 항과 같이 회원으로 가입할 것을 신청한
                    이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
                </p>
                <ul>
                    <li>
                        (1) 가입신청자가 이 약관 제 7 조 제 3 항에 의하여 이전에
                        회원자격을 상실한 적이 있는 경우, 다만 제 7 조 제 3 항에
                        의한 회원자격 상실 후 3 년이 경과한 자로서 "당사"의 회원
                        재가입 승낙을 얻은 경우에는 예외로 합니다.
                    </li>
                    <li>(2) 등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                    <li>
                        (3) 기타 회원으로 등록하는 것이 "당사"의 기술상 현저히
                        지장이 있다고 판단되는 경우
                    </li>
                </ul>
                <p>
                    3. 회원가입의 성립시기는 "당사"의 승낙이 회원에게 도달한
                    시점으로 합니다.
                </p>
                <p>
                    4. 회원은 제 1 항에 의한 등록사항에 변경이 있는 경우, 즉시
                    전자우편 및 기타 방법으로 “당사”에 그 변경사항을 알려야
                    합니다.
                </p>
                <h4 className="mt20">제 7 조 (회원 탈퇴 및 자격 상실 등)</h4>
                <ul>
                    <li>
                        1. 회원은 "당사"에 언제든지 탈퇴를 요청할 수 있으며
                        "당사"는 즉시 회원 탈퇴를 처리합니다.
                    </li>
                    <li>
                        2. 회원이 다음 각 호의 사유에 해당하는 경우, "당사"는
                        회원자격을 제한 또는 정지시킬 수 있습니다. 이로 인하여
                        “당사”가 손해를 입은 경우, 회원은 그러한 손해를
                        배상하여야 합니다.
                        <br />
                        <div className="ml10">
                            (1) 가입 신청 시에 허위 내용을 등록한 경우
                        </div>
                        <div className="ml10">
                            (2) "당사"를 이용하여 구입한 재화 등의 대금, 기타
                            "당사"이용에 관련하여 회원이 부담하는 채무를 기일에
                            지급하지 않는 경우
                        </div>
                        <div className="ml10">
                            (3) 다른 사람의 "당사" 이용을 방해하거나 그 정보를
                            도용하는 등 전자상거래질서를 위협하는 경우
                        </div>
                        <div className="ml10">
                            (4) "당사"를 이용하여 법령 또는 이 약관이 금지하거나
                            공서양속에 반하는 행위를 하는 경우
                        </div>
                        <div className="ml10">
                            (5) 다음과 같은 행위 등으로 "당사"의 건전한 운영을
                            해하거나 "당사"의 업무를 방해하는 경우
                        </div>
                        <div className="ml20 mb10">
                            가. "당사"의 운영에 관련하여 근거 없는 사실 또는
                            허위의 사실을 적시하거나 유포하여 "당사"의 명예를
                            실추시키고 "당사"의 신뢰성을 해하는 경우
                            <br />
                            나. "당사"의 운영과정에서 직원에게 폭언 또는 음란한
                            언행을 하여 업무환경을 심각히 해하는 경우
                            <br />
                            다. "당사"의 운영과정에서 이유 없는 잦은 연락이나
                            소란 또는 협박, 인과관계가 입증되지 않는 피해에 대한
                            보상(적립금, 현금, 상품)요구 등으로 업무를 방해하는
                            경우
                            <br />
                            라. "당사"를 통해 구입한 상품 또는 용역에 특별한
                            하자가 없는데도 불구하고 일부 사용 후 상습적인 취소,
                            전부 또는 일부 반품 등으로 회사의 업무를 방해하는
                            경우
                        </div>
                        <div className="ml10">
                            (6) 타인의 정보를 도용하는 경우
                        </div>
                        <div className="ml10">
                            (7) 서비스의 이용권한, 기타 “당사” 와의 계약상
                            지위를 타인에게 양도, 임대하거나 담보로 제공하는
                            경우
                        </div>
                        <div className="ml10">
                            (8) "당사"의 사전 서면 승낙 없이 서비스를 이용하여
                            영업활동을 하는 경우
                        </div>
                        <div className="ml10">
                            (9) 서비스에 위해를 가하거나, 변경하는 경우
                        </div>
                        <div className="ml10">
                            (10) 서비스를 통해 얻은 정보를 “당사”의 사전 승낙
                            없이 서비스 이용 외의 목적으로 복제하거나, 이를 출판
                            및 방송 등에 사용하거나, 제3자에게 제공하는 경우
                        </div>
                        <div className="ml10">
                            (11) 모욕적이거나 명예 훼손적인 내용 또는 공서양속에
                            위반되는 저속, 음란한 내용의 정보를 유포하는 행위
                        </div>
                        <div className="ml10">
                            (12) 다른 이용자를 희롱 또는 위협하거나, 특정
                            이용자에게 지속적으로 고통 또는 불편을 주는 행위
                        </div>
                        <div className="ml10">
                            (13) 타인의 개인정보를 수집하는 행위을 포함하여 기타
                            당사가 정한 제반 규정 또는 이용 규정 등을 위한 하는
                            경우
                        </div>
                    </li>
                    <li>
                        3. "당사"가 회원 자격을 제한 또는 정지시킨 후 동일한
                        행위가 2회 이상 반복되거나 30일 이내에 그 사유가
                        시정되지 아니하는 경우 "당사"는 회원자격을 상실시킬 수
                        있습니다.
                    </li>
                    <li>
                        4. "당사"가 회원자격을 상실시키는 경우에는 회원등록을
                        말소합니다. 이 경우 회원에게 이를 통지하고 회원등록 말소
                        전에 최소한 30일 이상의 기간을 정하여 소명할 기회를
                        부여합니다.
                    </li>
                </ul>

                <h4 className="mt20">제 8 조 (회원에 대한 통지)</h4>
                <ul>
                    <li>
                        1. "당사"가 회원에 대한 통지를 하는 경우, 회원이
                        "당사"에 회원가입시 제출한 전자우편 주소로 할 수
                        있습니다.
                    </li>
                    <li>
                        2. "당사"는 불특정다수 회원에 대한 통지의 경우 1주일
                        이상 "당사" 게시판에 게시함으로써 개별 통지에 갈음할 수
                        있습니다. 다만, 회원 본인의 거래와 관련하여 중대한
                        영향을 미치는 사항에 대하여는 개별통지를 합니다.
                    </li>
                </ul>

                <h4 className="mt20">제 9 조 (게시물의 관리)</h4>
                <ul>
                    <li>
                        1. "당사"는 이용자가 사이트상에 게시하거나 등록하는
                        내용물이 다음 각 사항에 해당된다고 판단되는 경우 사전
                        통지없이 삭제할 수 있습니다.
                        <div className="ml10">
                            (1) 다른 이용자 또는 제3자를 비방하거나 중상모략으로
                            명예를 손상시키는 내용인 경우
                        </div>
                        <div className="ml10">
                            (2) 공공질서 및 미풍양속에 위반되는 내용인 경우
                        </div>
                        <div className="ml10">
                            (3) 사전에 동의하지 아니한 영리를 목적으로 하는
                            광고일 경우
                        </div>
                        <div className="ml10">
                            (4) 범죄적 행위에 결부된다고 인정되는 내용일 경우
                        </div>
                        <div className="ml10">
                            (5) 제3자의 저작권 등 기타권리를 침해하는 내용인
                            경우
                        </div>
                        <div className="ml10">
                            (6) 기타 관계법령이나 "당사"에서 정한 규정에
                            위배되는 경우
                        </div>
                    </li>
                    <li>
                        2. "당사"는 가이드 또는 이용자가 다른 가이드 또는
                        이용자가 기재한 정보, 자료, 사실의 정확성 등을
                        신뢰함으로써 입은 손해에 대하여 "당사"의 고의·과실이
                        없는 한 책임을 지지 않습니다.
                    </li>
                </ul>

                <h4 className="mt20">제 10 조 (정보제공 및 광고)</h4>
                <p>
                    1. "당사"는 회원이 서비스 이용 중 필요하다고 인정되는 다양한
                    정보를 공지사항 또는 전자우편이나 서신우편, SMS, 전화 등의
                    방법으로 회원에게 제공할 수 있습니다. 다만, 회원은 관련법에
                    따른 거래관련정보 및 고객문의 등에 대한 답변 등을 제외하고는
                    언제든지 SMS, 전자우편 등에 대해서 수신 거절을 할 수
                    있습니다.
                </p>
                <p>
                    2. "당사"는 서비스상 게재되어 있거나, 서비스를 통한 광고 및
                    판촉활동에 이용자가 참여하거나 교신 또는 거래를 함으로써
                    발생하는 손실과 손해에 대해 "당사"의 고의·과실이 없는 한
                    책임을 지지 않습니다.
                </p>

                <h4 className="mt20">제 11 조 (대금지급방법)</h4>
                <ul>
                    <li>
                        "당사"에서 구매한 재화 또는 용역에 대한 대금지급 또는
                        “당사”가 중개한 여행 및 체험 계약에 관한 대금지급은 다음
                        각 호의 방법 중 “당사”가 지정하는 방식으로 이루어집니다.
                        <div className="ml10">
                            (1) 온라인 무통장 입금, 가상계좌 입금, 실시간
                            계좌이체 등의 각종 계좌이체
                        </div>
                        <div className="ml10">
                            (2) 선불카드, 직불카드, 국내 및 해외 신용카드 등의
                            각종 카드 결제
                        </div>
                        <div className="ml10">
                            (3) 페이팔(Paypal), 카카오페이, 네이버페이, 페이코
                            등의 전자결제수단을 통한 결제
                        </div>
                        <div className="ml10">
                            (4) 기타 “당사”가 인정하는 결제수단
                        </div>
                    </li>
                </ul>

                <h4 className="mt20">
                    제 12 조 (수신확인통지·예약신청 변경 및 취소)
                </h4>
                <ul>
                    <li>
                        1. “당사”는 이용자의 예약신청이 있는 경우 이용자에게
                        수신확인통지를 합니다.
                    </li>
                    <li>
                        2. 수신확인통지를 받은 이용자는 의사표시의 불일치 등이
                        있는 경우에는 수신확인통지를 받은 후 즉시 예약신청 변경
                        및 취소를 요청할 수 있고 “당사”는 여행 및 체험 개시 전에
                        이용자의 요청이 있는 경우에는 지체 없이 그 요청에 따라
                        처리하여야 합니다. 다만 이미 대금을 지불한 경우에는
                        제15조의 청약철회 등에 관한 규정에 따릅니다.
                    </li>
                </ul>

                <h4 className="mt20">제 13 조 (손해배상 및 면책)</h4>
                <ul>
                    <li>
                        1. "당사"는 “당사”의 고의·과실로 인하여 이용자나
                        제3자에게 발생한 손해에 관하여, 통상 손해를 그 한도로
                        하여 배상할 책임이 있으며, 특별한 사정으로 인한 손해는
                        "당사"가 그 사정을 알았거나 알 수 있었다는 점에 관한
                        객관적 증빙이 되었을 경우에 그 한도에 한하여 배상할
                        책임이 있습니다. 단 "당사"가 계약체결
                        전(확정대기-준비중) 상태에서 즉시 계약 해지를 통보하며
                        계약관계를 해소한 건에 대해서는 배상할 책임이 없습니다.
                    </li>
                    <li>
                        2. 이용자가 이 약관의 규정을 위반함으로 인하여 “당사”에
                        손해가 발생하게 되는 경우 이 약관을 위반한 이용자는
                        "당사"에 발생하는 손해에 관하여 통상손해를 그 한도로
                        하여 배상할 책임이 있으며, 특별한 사정으로 인한 손해는
                        "이용자"가 그 사정을 알았거나 알 수 있었을 때에 한하여
                        배상할 책임이 있습니다.
                    </li>
                    <li>
                        3. "당사"는 다음 각 호의 경우에는 면책됩니다.
                        <div className="ml10">
                            (1) “당사”는 천재지변, 전쟁 및 기타 이에 준하는
                            불가항력으로 인하여 서비스를 제공할 수 없는 경우에는
                            서비스 제공에 대한 책임이 면제됩니다.
                        </div>
                        <div className="ml10">
                            (2) “당사”는 기간통신 사업자가 전기통신 서비스를
                            중지하거나 정상적으로 제공하지 아니하여 손해가
                            발생한 경우 책임이 면제됩니다.
                        </div>
                        <div className="ml10">
                            (3) “당사”는 서비스용 설비의 보수, 교체, 정기점검,
                            공사 등 부득이한 사유로 발생한 손해에 대한 책임이
                            면제됩니다.
                        </div>
                        <div className="ml10">
                            (4) “당사”는 이용자의 귀책사유로 인한 서비스 이용의
                            장애 또는 손해에 대하여 책임을 지지 않습니다.
                        </div>
                        <div className="ml10">
                            (5) “당사”는 이용자의 컴퓨터 오류에 의해 손해가
                            발생한 경우, 또는 이용자가 개인정보 및
                            전자우편주소를 부실하게 기재하여 손해가 발생한 경우
                            책임을 지지 않습니다.
                        </div>
                        <div className="ml10">
                            (6) “당사”는 이용자가 서비스를 이용하여 기대하는
                            수익을 얻지 못하거나 상실한 것에 대하여 책임을 지지
                            않습니다.
                        </div>
                        <div className="ml10">
                            (7) “당사”는 이용자가 서비스를 이용하면서 얻은
                            자료로 인한 손해에 대하여 책임을 지지 않습니다. 또한
                            “당사”는 이용자가 서비스를 이용하며 타 이용자로 인해
                            입게 되는 정신적 피해에 대하여 보상할 책임을 지지
                            않습니다.
                        </div>
                        <div className="ml10">
                            (8) “당사”는 이용자가 당사에 게재한 각종 정보, 자료,
                            사실의 신뢰도, 정확성 등 내용에 대하여 책임을 지지
                            않습니다.
                        </div>
                        <div className="ml10">
                            (9) “당사”는 이용자 상호간 및 이용자와 제3자 상호
                            간에 서비스를 매개로 발생한 분쟁에 대해 개입할
                            의무가 없으며, 이로 인한 손해를 배상할 책임도
                            없습니다. 다만 “당사”는 내부 지침에 따라서 분쟁의
                            해결을 위한 중재를 제안하거나, 자율 분쟁 조정 센터를
                            운영할 수 있습니다.
                        </div>
                    </li>
                </ul>

                <h4 className="mt20">제 14 조 (재화 등의 공급)</h4>
                <ul>
                    <li>
                        1. "당사"는 이용자와 재화 등의 공급시기에 관하여 별도의
                        약정이 없는 이상, 이용자가 청약을 한 날부터 7일 이내에
                        재화 등을 배송할 수 있도록 주문제작, 포장 등 기타의
                        필요한 조치를 취합니다. 다만, "당사"가 이미 재화 등의
                        대금의 전부 또는 일부를 받은 경우에는 대금의 전부 또는
                        일부를 받은 날부터 3 영업일 이내에 조치를 취합니다. 이때
                        "당사"는 이용자가 재화 등의 공급 절차 및 진행사항을
                        확인할 수 있도록 적절한 조치를 합니다. 특히 “당사”는
                        여행계약 등의 중개 서비스는 해당 서비스에 적용되는
                        별도의 약관이 있는 경우에 이를 교부하고 해당 서비스가
                        차질 없이 진행되도록 일련의 조치를 하여야 합니다.
                    </li>
                    <li>
                        2. "당사"는 이용자가 구매한 재화에 대해 배송수단, 수단별
                        배송비용 부담자, 수단별 배송기간 등을 명시합니다.
                        "당사"가 여행계약 등의 중개 서비스를 제공하는 경우
                        이용자가 예약한 상품에 대한 별도의 여행안내서 등을
                        교부하고, 이용자가 해당 서비스의 구매와 이용에 대한 내용
                        (여행일정, 여행기간 등)을 공급자를 통해 알 수 있도록
                        공급자의 홈페이지 등을 링크하는 방식으로 관련 정보를
                        제공합니다.
                    </li>
                    <li>
                        3. 공휴일 및 기타 휴무일 또는 천재지변 등의 불가항력적
                        사유가 발생하는 경우 그 해당기한은 배송소요기간에서
                        제외합니다.
                    </li>
                </ul>

                <h4 className="mt20">제 15 조 (환급, 반품 및 교환)</h4>
                <p>
                    1. "당사"는 이용자가 구매신청 한 재화 등이 품절 등의 사유로
                    인도 또는 제공을 할 수 없을 때에는 지체 없이 그 사유를
                    이용자에게 통지하고 사전에 재화 등의 대금을 받은 경우에는
                    대금을 받은 날부터 3 영업일 이내에 환급하거나 환급에 필요한
                    조치를 취합니다. 다만, 여행계약 등의 중개 서비스를 제공한
                    경우에는 별도의 약관에 따릅니다.
                </p>
                <p>
                    2. 재화 등의 반품 또는 교환에 필요한 왕복배송비용 기타
                    필요한 비용은 귀책사유 있는 측에서 부담하며, 배송상의 문제로
                    이용자가 입은 손해에 대한 배상책임은 귀책사유 있는
                    배송업체를 지정한 “당사”에게 있습니다.
                </p>
                <p>
                    3. 해외업체에서 운영하는 중개판매에 해당되는 상품의 경우에는
                    현지업체의 정책에 따라 반품, 교환, 환급이 제한될 수 있으며,
                    이에 관하여 당사는 별도의 고지를 합니다. 해외에서 국내로
                    배송되는 재화와, 중개 상품의 경우에는 현지업체의 정책에 따라
                    반품, 교환, 환급이 제한될 수 있으며, 이에 관하여 당사는
                    별도의 고지를 합니다.
                </p>

                <h4 className="mt20">제 16 조 (청약철회 등)</h4>
                <p>
                    1. "당사"와 재화 등의 구매에 관한 계약을 체결한 이용자는
                    수신확인의 통지를 받은 날부터 7일 이내에는 청약의 철회를 할
                    수 있습니다. 다만, 여행계약 등의 중개 서비스의 경우 별도의
                    약관에 따릅니다.
                </p>
                <p>
                    2. 이용자는 재화 등을 배송 받은 경우 다음 각 호의 경우에는
                    청약철회 및 교환을 할 수 없습니다.
                    <div className="ml10">
                        (1) 이용자에게 책임 있는 사유로 재화 등이 멸실 또는
                        훼손된 경우 (다만, 재화 등의 내용을 확인하기 위하여 포장
                        등을 훼손한 경우에는 사전에 청약철회 제한에 관해
                        고지하지 않은 한 청약철회 등을 할 수 있습니다.)
                    </div>
                    <div className="ml10">
                        (2) 이용자의 사용 또는 일부 소비에 의하여 재화 등의
                        가치가 현저히 감소한 경우
                    </div>
                    <div className="ml10">
                        (3) 시간의 경과에 의하여 재판매가 곤란할 정도로 재화
                        등의 가치가 현저히 감소한 경우
                    </div>
                    <div className="ml10">
                        (4) 같은 성능을 지닌 재화 등으로 복제가 가능한 경우 그
                        원본인 재화 등의 포장을 훼손한 경우
                    </div>
                    <div className="ml10">
                        (5) 용역 또는 「문화산업진흥 기본법」 제2조 제5호의
                        디지털 콘텐츠의 제공이 개시된 경우. (다만, 가분적 용역
                        또는 가분적 디지털 콘텐츠로 구성된 계약의 경우에는
                        제공이 개시되지 아니한 부분에 대하여는 사전에 청약철회
                        제한에 관해 고지하지 않은 한 청약철회 등을 할 수
                        있습니다.)
                    </div>
                </p>
                <p>
                    3. 제 2 항 제 2 호 내지 제 4 호의 경우에 "당사"가 사전에
                    청약철회 등이 제한되는 사실을 소비자가 쉽게 알 수 있는 곳에
                    명기하거나 시용상품을 제공하는 등의 조치를 하지 않았다면
                    이용자의 청약철회 등이 제한되지 않습니다.
                </p>
                <p>
                    4. 이용자는 제 1 항 및 제 2 항의 규정에 불구하고 재화 등의
                    내용이 광고 내용과 다르거나 계약내용과 다르게 이행된 때에는
                    당해 재화 등을 공급받은 날부터 3 월 이내, 그 사실을 안 날
                    또는 알 수 있었던 날부터 30 일 이내에 청약철회 등을 할 수
                    있습니다.
                </p>

                <h4 className="mt20">제 17 조 (티켓에 대한 청약철회)</h4>
                <ul>
                    <li>
                        1. "당사"가 이용자에게 판매한 재화가 여행과 관련한
                        입장권, 관람권, 교통권 기타 티켓(이하 “티켓”이라고
                        합니다)인 경우, 제15조 규정에도 불구하고 티켓에 대한
                        청약철회 기타 교환·환불에 관한 사항은 별도로 공지한
                        내용에 따릅니다.
                    </li>
                    <li>
                        2. 제1항의 공지에 구체적인 내용이 포함되어 있지 않은
                        경우, 해당 티켓의 청약철회 기타 교환·환불에 관하여
                        제16조의 규정이 적용됩니다.
                    </li>
                    <li>
                        3. “당사”는 부득이한 사유로 제1항의 공지를 통하여 해당
                        티켓의 청약철회 기타 교환·환불에 대하여 제16조보다
                        불리한 내용을 규정하는 경우, 이러한 내용을 굵은 글씨
                        등을 통하여 이용자들이 인식하기 쉽게 표시하여야 합니다.
                    </li>
                </ul>

                <h4 className="mt20">제 18 조 (청약철회 등의 효과)</h4>
                <ul>
                    <li>
                        1. "당사"는 이용자로부터 재화 등을 반환 받은 경우 영업일
                        3일 이내에 이미 지급받은 재화 등의 대금을 환급합니다. 이
                        경우 "당사"가 이용자에게 재화 등의 환급을 지연한 때에는
                        그 지연기간에 대하여 전자상거래 등에서의 소비자보호에
                        관한 법률 시행령이 정하는 지연이자율을 곱하여 산정한
                        지연이자를 지급합니다. 다만, “여행계약 등의 중개
                        서비스의 경우 별도의 약관에 따릅니다.
                    </li>
                    <li>
                        2. "당사"는 위 대금을 환급함에 있어서 이용자가 신용카드
                        또는 전자화폐 등의 결제수단으로 재화 등의 대금을 지급한
                        때에는 지체 없이 당해 결제수단을 제공한 사업자로 하여금
                        재화 등의 대금의 청구를 정지 또는 취소하도록 요청합니다.
                    </li>
                    <li>
                        3. 청약철회 등의 경우 공급받은 재화 등의 반환에 필요한
                        비용은 이용자가 부담합니다.
                    </li>
                    <li>
                        4. 이용자가 재화 등을 제공받을 때 발송비를 부담한 경우에
                        "당사"는 청약철회 시 그 비용을 누가 부담하는지를
                        이용자가 알기 쉽도록 명확하게 표시합니다.
                    </li>
                </ul>

                <h4 className="mt20">제 19 조 (개인정보보호방침)</h4>
                <ul>
                    <li>
                        1. “당사”는 이용자의 개인정보 수집 시 서비스제공을
                        위하여 필요한 범위에서 최소한의 개인정보를 수집합니다.
                    </li>
                    <li>
                        2. “당사”는 회원가입 시 구매계약이행에 필요한 정보를
                        미리 수집하지 않습니다. 다만, 관련 법령상 의무이행을
                        위하여 구매계약 이전에 본인확인이 필요한 경우로서
                        최소한의 특정 개인정보를 수집하는 경우에는 그러하지
                        아니합니다.
                    </li>
                    <li>
                        3. “당사”는 이용자의 개인정보를 수집·이용하는 때에는
                        당해 이용자에게 그 목적을 고지하고 동의를 받습니다.
                    </li>
                    <li>
                        4. “당사”는 수집된 개인정보를 목적 외의 용도로 이용할 수
                        없으며, 새로운 이용목적이 발생한 경우 또는 제3자에게
                        제공하는 경우에는 이용·제공단계에서 당해 이용자에게 그
                        목적을 고지하고 동의를 받습니다. 다만, 관련 법령에 달리
                        정함이 있는 경우에는 예외로 합니다.
                    </li>
                    <li>
                        5. “당사”가 제3항과 제4항에 의해 이용자의 동의를 받아야
                        하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및
                        전화번호, 기타 연락처), 정보의 수집목적 및 이용목적,
                        제3자에 대한 정보제공 관련사항(제공받은자, 제공목적 및
                        제공할 정보의 내용) 등 「정보통신망 이용촉진 및 정보보호
                        등에 관한 법률」 제22조 제2항이 규정한 사항을 미리
                        명시하거나 고지해야 하며 이용자는 언제든지 이 동의를
                        철회할 수 있습니다.
                    </li>
                    <li>
                        6. 이용자는 언제든지 “당사”가 가지고 있는 자신의
                        개인정보에 대해 열람 및 오류정정을 요구할 수 있으며
                        “당사”는 이에 대해 지체 없이 필요한 조치를 취할 의무를
                        가집니다. 이용자가 오류의 정정을 요구한 경우에는
                        “당사”는 그 오류를 정정할 때까지 당해 개인정보를
                        이용하지 않습니다.
                    </li>
                    <li>
                        7. “당사”는 개인정보보호를 위하여 이용자의 개인정보를
                        취급하는 자를 최소한으로 제한하여야 하며 신용카드,
                        은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난,
                        유출, 동의 없는 제3자 제공, 변조 등으로 인한 이용자의
                        손해에 대하여 모든 책임을 집니다.
                    </li>
                    <li>
                        8. “당사” 또는 그로부터 개인정보를 제공받은 제3자는
                        개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는
                        당해 개인정보를 지체 없이 파기합니다.
                    </li>
                    <li>
                        9. “당사”는 개인정보의 수집·이용·제공에 관한 동의란을
                        미리 선택한 것으로 설정해두지 않습니다. 또한 개인정보의
                        수집·이용·제공에 관한 이용자의 동의거절시 제한되는
                        서비스를 구체적으로 명시하고, 필수수집항목이 아닌
                        개인정보의 수집·이용·제공에 관한 이용자의 동의 거절을
                        이유로 회원가입 등 서비스 제공을 제한하거나 거절하지
                        않습니다.
                    </li>
                </ul>

                <h4 className="mt20">제 20 조 ("당사"의 의무)</h4>
                <ul>
                    <li>
                        1. "당사"는 법령과 이 약관이 금지하거나 공서양속에
                        반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라
                        지속적이고 안정적으로 서비스를 제공하는 데 최선을
                        다하여야 합니다.
                    </li>
                    <li>
                        2. "당사"는 이용자가 안전하게 서비스를 이용할 수 있도록
                        이용자의 개인정보(신용정보 포함)보호를 위한 보안시스템을
                        갖추어야 합니다.
                    </li>
                </ul>

                <h4 className="mt20">
                    제 21 조 (회원의 ID 및 비밀번호에 대한 의무)
                </h4>
                <ul>
                    <li>
                        1. 제 17 조의 경우를 제외한 ID 와 비밀번호에 관한
                        관리책임은 회원에게 있습니다.
                    </li>
                    <li>
                        2. 회원은 자신의 ID및 비밀번호를 제 3 자에게 이용하게
                        해서는 안 됩니다.
                    </li>
                    <li>
                        3. 회원이 자신의 ID및 비밀번호를 도난당하거나 제 3 자가
                        사용하고 있음을 인지한 경우에는 바로 "당사"에 통보하고
                        "당사"의 안내가 있는 경우에는 그에 따라야 합니다.
                    </li>
                </ul>

                <h4 className="mt20">제 22 조 (이용자의 의무)</h4>
                <ul>
                    <li>
                        이용자는 다음 행위를 하여서는 안 됩니다.
                        <div className="ml10">
                            (1) 신청 또는 변경 시 허위내용의 등록
                        </div>
                        <div className="ml10">(2) 타인의 정보 도용</div>
                        <div className="ml10">
                            (3) "당사"에 게시된 정보를 변경하거나 고의로 변경을
                            시도하는 행위
                        </div>
                        <div className="ml10">
                            (4) "당사”가 정한 정보 이외의 정보(컴퓨터 프로그램
                            등)의 송신 또는 게시
                        </div>
                        <div className="ml10">
                            (5) "당사" 기타 제 3 자의 저작권 등 지적재산권에
                            대한 침해
                        </div>
                        <div className="ml10">
                            (6) "당사" 기타 제 3 자의 명예를 손상시키거나 업무를
                            방해하는 행위
                        </div>
                        <div className="ml10">
                            (7) 외설 또는 폭력적인 메시지/화상/음성/기타
                            공서양속에 반하는 정보를 “당사” 서비스에 공개 또는
                            게시하는 행위
                        </div>
                        <div className="ml10">
                            (8) “당사”가 내부 지침에 따라서 분쟁의 해결을 위한
                            중재를 제안하거나, 자율 분쟁 조정 센터를 운영하는
                            등의 고객불만사항을 처리하는 일체의 절차를 진행 중에
                            통상의 범위를 현저히 벗어나는 욕설, 비하 등의 언행
                            및 위력을 과시하는 등의 공포를 유발하는 행위
                        </div>
                        <div className="ml10">
                            (9) “당사”의 중개를 통하여 알게 된 가이드 상품 등의
                            일체의 여행상품을 가이드 및 제3자와 직거래하는 행위
                        </div>
                        <div className="ml10">
                            (10) 법령에 따라 거래가 제한되는 재화 및 용역을
                            구매하려는 행위
                        </div>
                    </li>
                </ul>

                <h4 className="mt20">
                    제 23 조 (연결 "회사"와 피연결 "회사" 간의 관계)
                </h4>
                <ul>
                    <li>
                        1. 상위 "회사"와 하위 "회사"가 하이퍼 링크 (예: 하이퍼
                        링크의 대상에는 문자, 그림 및 동영상 등이
                        포함됩니다)방식 등으로 연결된 경우, 전자를 연결
                        "회사"(웹사이트)이라고 하고 후자를 피연결
                        "회사"(웹사이트)라고 합니다.
                    </li>
                    <li>
                        2. 연결 "회사"는 피연결 "회사"가 독자적으로 제공하는
                        재화 등에 의하여 이용자와 행하는 거래에 대해서
                        보증책임을 진다는 뜻을 피연결 "회사"의 초기화면 또는
                        연결되는 시점의 팝업화면으로 명시한 경우에만 그 거래에
                        대한 보증책임을 집니다.
                    </li>
                </ul>

                <h4 className="mt20">제 24 조 (회원의 게시물 및 저작권)</h4>
                <ul>
                    <li>
                        1. 게시물이라 함은 회원이 서비스를 이용하면서 게시한 글,
                        사진, 각종 파일과 링크 등을 말합니다.
                    </li>
                    <li>
                        2. 회원의 게시물에 의한 손해나 기타 문제가 발생하는
                        경우, 회원은 이에 대한 책임을 지게 되며, “당사”는 책임을
                        지지 않습니다.
                    </li>
                    <li>
                        3. 회원이 게시한 게시물의 저작권은 제3자의 권리를
                        침해하지 않는 한 게시한 회원에게 귀속됩니다. 단,
                        "당사"는 잇츠가이드 플랫폼을 홍보하고 잠재 게스트에게
                        상품리스트의 노출을 늘리기 위해서는 상품 리스트와 상품별
                        콘텐츠를 타 웹사이트, 앱, 이메일, 온오프라인 등에 노출할
                        수 있습니다.
                    </li>
                    <li>
                        4. 회원이 이용계약 해지를 한 경우 타인에 의해 보관, 담기
                        등으로 재게시 되거나 복제된 게시물과 타인의 게시물과
                        결합되어 제공되는 게시물, 공용 게시판에 등록된 게시물
                        등은 삭제되지 않습니다.
                    </li>
                </ul>

                <h4 className="mt20">제 25 조 (분쟁해결)</h4>
                <ul>
                    <li>
                        1. "당사"는 이용자가 제기하는 정당한 의견이나 불만을
                        반영하고 그 피해를 보상처리하기 위하여 관련 법령과
                        “당사”의 내부 정책에 따라 피해보상처리기구를 설치 또는
                        운영합니다.
                    </li>
                    <li>
                        2. "당사"는 이용자로부터 제출되는 불만사항 및 의견은
                        우선적으로 그 사항을 처리하기 위해 노력하며, 중개상품의
                        경우 가이드 및 제3자와 이용자와의 원활한 협의를 위하여
                        내부 정책에 따라 중재할 수 있습니다. 다만, 신속한 처리가
                        곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시
                        통보합니다.
                    </li>
                    <li>
                        3. "당사"와 이용자간에 발생한 전자상거래 분쟁과 관련하여
                        이용자의 피해구제신청이 있는 경우에는 공정거래위원회
                        또는 시/도지사가 의뢰하는 분쟁조정기관의 조정신청을
                        안내할 수 있습니다.
                    </li>
                    <li>
                        4. 회원이 이용계약 해지를 한 경우 타인에 의해 보관, 담기
                        등으로 재게시 되거나 복제된 게시물과 타인의 게시물과
                        결합되어 제공되는 게시물, 공용 게시판에 등록된 게시물
                        등은 삭제되지 않습니다.
                    </li>
                </ul>

                <h4 className="mt20">제 26 조 (재판권 및 준거법)</h4>
                <ul>
                    <li>
                        1. "당사"와 이용자간에 발생한 분쟁에 관한 소송은 소송의
                        관할은 당사자 간의 합의에 따르며, 사전 합의된 바가 없는
                        경우에는 민사소송법의 관할 규정에 따릅니다.
                    </li>
                    <li>
                        2. "당사"와 이용자간에 제기된 소송에는 대한민국법을
                        적용합니다.
                    </li>
                </ul>

                <h4 className="mt20">제 27 조 (특별규정)</h4>
                <ul>
                    <li>
                        이 약관에 명시되지 않은 사항은 전자거래기본법,
                        전자서명법, 전자상거래 등에서의 소비자보호에 관한 법률
                        등 기타 관련법령의 규정에 의합니다.
                    </li>
                    <li>
                        공지일자: 2020년 12월 01일
                        <br />
                        시행일자: 2020년 12월 01일
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Rule;
