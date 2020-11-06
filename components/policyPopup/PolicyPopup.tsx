import React from 'react'

interface IProps {
    closePopup:(element:string | null) => void;
}

const PolicyPopup:React.FC<IProps> = ({closePopup}) => {
    return (
        <>
            <div id="Popup01" className="popup_bg" style={{ display: "none" }}>
                <a className="close_icon">
                <i
                    className="flaticon-multiply"
                    onClick={()=>{
                        closePopup('Popup01');
                    }}
                />
                </a>
                <div className="policyA in_txt">
                <h4 className="rule_tit">이용약관</h4>
                <div className="terms-contents">
                    <h5>제 1조 목적</h5>
                    <p>
                    이 이용약관(이하 “약관”)은 주식회사 핑크로더(이하 “회사”)가
                    제공하는 핑크로더 광고서비스(이하 “서비스”)을 이용함에 있어 필요한
                    “회사”와 “회원” 간의 제반 사항을 규정함을 목적으로 합니다.
                    </p>
                    <br />
                    <br />
                    <h5>제 2조 정의</h5>
                    <ol>
                    <li>
                        “서비스”라 함은 “광고주”가 “회사”에 요청한 앱광고를 “핑크로더
                        회원”이 “광고매체”에 게재하고 “광고매체 이용자”가 광고를 클릭한
                        후 다운로드, 실행, 설치하는 등의 행위를 통해 발생한 “광고수익”을
                        “회사”와 “핑크로더 회원”이 일정한 비율로 배분하는 광고서비스를
                        의미합니다.
                    </li>
                    <li>
                        “광고주”라 함은 “서비스”를 이용하기 위해 약관에 따라 “회사”와
                        이용계약을 체결하고 “회사”가 제공하는 “서비스”를 이용하는 고객을
                        의미합니다.
                    </li>
                    <li>
                        “메이전시 회원”이라 함은 “서비스”에 접속하여 “약관”에 따라
                        “회사”와 이용계약을 체결하고 “회사”가 제공하는 “서비스”를
                        이용하며, “광고주”가 “회사”에 요청한 광고를 “광고매체”에 게재,
                        홍보하여 발생한 광고수익에 대해 회사로부터 일정한 비율로
                        배분받는 자를 의미합니다.
                    </li>
                    <li>
                        “광고매체”라 함은 “회사”가 “서비스”를 제공하기 위해 이용하는 PC,
                        TV, 휴대형 단말기 등 각종 유무선 장치를 포함한 어플리케이션 및
                        웹사이트 기반의 매체입니다.
                    </li>
                    <li>
                        “광고매체 이용자”라 함은 “광고매체”를 이용하는 이용자를
                        의미하며, “광고매체”의 회원 또는 비회원 모두를 지칭합니다.
                    </li>
                    <li>
                        “광고센터”라 함은 “메이전시 회원”이 “서비스”의 신청, 집행, 관리,
                        취소 등을 위해 “회사”가 제공하는 관리사이트를 의미합니다.
                    </li>
                    <li>
                        “회원계정”이라 함은 “회원”의 식별 및 “서비스” 관리를 위해 “회원”
                        별로 제공되는 “광고센터”의 전용 계정을 의미합니다.
                    </li>
                    <li>
                        “광고수익”이라 함은 “회사”의 “서비스”를 통해 광고를 의뢰한
                        광고주로부터 지급받은 대가를 의미합니다.
                    </li>
                    <li>
                        “정산금”이라 함은 “광고수익” 중 “회사”가 별도로 정하는 수익
                        배분의 기준에 의해 “메이전시 회원”에게 지급되는 금액을
                        의미합니다.
                    </li>
                    </ol>
                    <br />
                    <br />
                    <h5>제 3조 약관의 게시와 개정</h5>
                    <ol>
                    <li>
                        “회사”는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 “서비스”
                        화면에 게시합니다.
                    </li>
                    <li>
                        “회사”는 필요한 경우 관련법을 위배하지 않는 범위 내에서 “약관”을
                        개정할 수 있습니다.
                    </li>
                    <li>
                        “회사”는 “약관”을 개정할 경우 개정내용과 적용일자를 명시하여
                        “서비스”에서 적용일자 7일 전까지 “회원”에게 제 1항의 방법으로
                        공지합니다. 다만, “회원”의 권리 또는 의무에 관한 중요한 규정의
                        변경은 일정기간 서비스 내 전자우편, 전자쪽지, 서비스 접속 시
                        동의창 등의 전자적 수단을 통해 따로 명확히 통지합니다.
                    </li>
                    <li>
                        “회사”가 위 3항에 따라 “회원”에게 통지하였음에도 “회원”이
                        명시적으로 거부의 의사표시를 하지 않은 경우 “회원”이 이 개정
                        약관에 동의한 것으로 봅니다.
                    </li>
                    <li>
                        “회원”은 개정 약관에 동의하지 않는 경우 적용일자 전일까지
                        “회사”에 거부의사를 표시하고 이용계약을 해지할 수 있습니다.
                    </li>
                    <li>
                        본 약관에 명시되지 않은 사항에 대해서는 전기통신기본법,
                        전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한
                        법률(이하 “정보통신망법”), 전자상거래 등에서의 소비자보호에 관한
                        법률(이하 “전소법”) 등의 관계법령 및 회사가 정한 별도의
                        운영정책에 따르며 “회원”은 “회사”가 정한 운영정책을 반드시
                        확인하고 준수하여야 합니다.
                    </li>
                    </ol>
                    <br />
                    <br />
                    <h5>제 4조 광고주 이용계약 체결</h5>
                    <ol>
                    <li>
                        서비스 이용계약은 “광고주”가 광고 게재를 신청하고 “회사”가 이를
                        승인한 경우에 성립되며, 구체적인 신청 및 승인절차에 대해서는
                        “회사”가 “광고주”에게 별도로 고지합니다.
                    </li>
                    <li>
                        “광고주”는 반드시 “회사”가 요구하는 양식과 절차에 따라 서비스를
                        신청해야 하며 “회사”는 “광고주”의 신청에 대해 수정이나 승인
                        여부, 방식 등을 결정할 권한을 가집니다.
                    </li>
                    <li>
                        “서비스”를 이용하는 중간에 “광고주”의 의사에 따라 광고내용 변경
                        시, “서비스”가 최초 승인내용과 달라진 경우 재심사를 받아야 하며
                        재심사로 인해 발생하는 불이익은 “광고주”가 부담합니다.
                    </li>
                    <li>
                        “회사”가 본 조에 따라 광고게재신청을 승인한 경우라도 추후 재확인
                        시 위반 사항이 확인되는 경우에는 언제든지 해당 승인을 취소할 수
                        있습니다.
                    </li>
                    </ol>
                    <br />
                    <br />
                    <h5>제 5조 메이전시 회원 이용계약 체결</h5>
                    <ol>
                    <li>
                        이용계약은 회원이 되고자 하는 자(이하 “가입신청자”)가 약관에
                        동의를 한 뒤 회원가입신청을 하고, “회사”가 이를 승인함으로써
                        체결됩니다.
                    </li>
                    <li>
                        “회사”는 “가입신청자”의 신청에 대하여 승인하는 것을 원칙으로
                        하나, “가입신청자” 중 아래 각호에 해당되는 경우에는 승인을
                        거부할 수 있으며, 등록이 된 이후에도 아래 각호의 사유가 확인된
                        경우에는 승낙을 취소할 수 있습니다.
                        <ul>
                        <li>
                            가입신청자가 이 약관 또는 서비스 운영 정책에 의하여 회원
                            자격을 상실한 경우, 단 회사의 회원 재가입 승낙을 얻은 경우는
                            예외로 함
                        </li>
                        <li>
                            타인의 명의를 이용하거나 신청 양식을 허위로 기재한 경우
                        </li>
                        <li>신청양식의 기재사항이 누락된 경우</li>
                        <li>
                            가입신청자의 귀책사유로 인하여 승인이 불가능하거나 기타
                            규정한 제반 사항을 위반해 신청하는 경우
                        </li>
                        <li>기타 회사가 필요하다고 판단한 경우</li>
                        </ul>
                    </li>
                    <li>
                        회원이 본 약관에 동의함은 본 서비스와 관련하여 회사에서
                        제공하거나 제공할 모든 서비스에 동의하는 것으로 봅니다.
                    </li>
                    </ol>
                    <br />
                    <br />
                    <h5>제 6조 개인정보의 보호</h5>
                    <p>
                    “회사”는 “정보통신망 이용촉진 및 정보보호 등에 관한 법률” 등 관계
                    법령이 정하는 바에 따라 “회원”의 개인정보를 보호하기 위해
                    노력합니다. 개인정보의 보호 및 사용에 대해서는 관련법 및 “회사”의
                    개인정보 취급방침이 적용됩니다. 다만, “회사”의 공식 사이트 이외의
                    링크된 사이트에서는 “회사”의 개인정보취급방침이 적용되지 않습니다.
                    </p>
                    <br />
                    <br />
                    <p>
                    제 7조 회원정보의 관리 및 변경
                    <ol>
                        <li>
                        “회원”의 “계정”과 “비밀번호”에 대한 관리책임은 “회원”에게
                        있으며, 이를 제3자가 이용하도록 하여서는 안됩니다.
                        </li>
                        <li>
                        “회원”은 회원정보수정 화면을 통해서 본인의 개인정보를 열람하고
                        수정할 수 있습니다.
                        </li>
                        <li>
                        “회원”은 개인정보가 변경되었을 경우 즉시 이를 수정해야 하며,
                        수정하지 않음으로 인해 발생한 불이익에 대해서는 “회사”가
                        책임지지 않습니다.
                        </li>
                    </ol>
                    <br />
                    <br />
                    <h5>제 8조 회사의 의무</h5>
                    <ol>
                        <li>
                        “회사”는 관련 법령과 “약관”을 준수하며, 안정적으로 “서비스”를
                        제공하기 위하여 최선을 다하여 노력합니다.
                        </li>
                        <li>
                        “회사”는 “서비스” 이용과 관련하여 “광고주” 및 “메이전시
                        회원”으로부터 제기된 의견이나 불만이 정당하다고 인정할
                        경우에는 이를 처리하여야 합니다.
                        </li>
                        <li>
                        “회사”는 “회사”가 별도로 정한 수익배분 기준에 따라 “수익금”을
                        “메이전시 회원”에게 지급합니다.
                        </li>
                        <li>
                        “회사”는 컴퓨터 등 정보통신설비의 보수점검, 교체, 고장, 장애,
                        통신두절 또는 운영상 합리적인 사유가 있는 경우 “서비스” 제공을
                        일시적으로 중단할 수 있으며, 본 항에 따른 “서비스” 제공
                        중단으로 발생한 “회원”의 손해에 대해서는 고의 또는 중과실이
                        없는 한 책임을 지지 않습니다.
                        </li>
                        <li>
                        전항의 경우 “회사”는 제 14조에 따른 방법으로 “회원”에게
                        통지합니다. 다만, “회사”가 통지할 수 없는 부득이한 사유가 있는
                        경우 사후에 통지할 수 있습니다.
                        </li>
                    </ol>
                    <p>제 9조 회원의 의무</p>
                    <ol>
                        <li>
                        “회원”은 관련 법령, 이 약관의 규정, 이용안내 및 “서비스”와
                        관련하여 공지한 주의사항, “회사”가 통지하는 사항 등을
                        준수하여야 하며, 기타 “회사”의 업무에 방해되는 행위를 하여서는
                        안 됩니다.
                        </li>
                        <li>
                        “회원”은 아래의 행위를 하여서는 안 됩니다.
                        <ul>
                            <li>
                            “회원”가입을 신청하거나 “회원”정보 변경을 신청할 때 허위
                            또는 타인의 정보를 입력하는 행위
                            </li>
                            <li>
                            “회사” 또는 제 3자의 저작권 등 지적재산권을 침해하는 행위
                            </li>
                            <li>
                            “회사” 또는 제 3자의 명예를 손상시키거나 업무를 방해하는
                            행위
                            </li>
                            <li>
                            “회사” 또는 제 3자를 가장 또는 사칭하여 글을 게시하거나
                            메일을 발송하는 행위
                            </li>
                            <li>
                            “회사”의 “서비스”에 게시된 정보를 변경하거나 “서비스”를
                            이용하여 얻은 정보를 “회사”의 사전 승낙 없이 영리 또는
                            비영리의 목적으로 복제, 출판, 방송 등에 사용하거나 제
                            3자에게 제공하는 행위
                            </li>
                            <li>
                            수동과 자동을 불문하고 다양한 부정 행위를 사용하여 광고를
                            게재, 홍보하여 “광고주”에게 손해를 주거나 자신 또는 제
                            3자에게 이익을 주는 행위
                            </li>
                            <li>
                            수입을 일으키려는 목적으로 부정하거나 부적절한 방법으로
                            광고를 게재, 홍보하는 일체의 행위
                            </li>
                            <li>
                            계정을 매매, 양도, 명의변경, 재판매하거나 질권의 목적으로
                            사용하는 행위
                            </li>
                            <li>
                            “서비스” 이용 권한을 타인에게 공유, 제공, 양도, 중개,
                            재판매하는 행위
                            </li>
                            <li>
                            “회원”이 “회사”와 계약된 방법 이외의 부정한 수익을
                            추구하여 “광고주”와 “회사”에 고의적으로 손실을 입히는 행위
                            </li>
                            <li>기타 “서비스”의 운영정책에 위배되는 모든 행위</li>
                        </ul>
                        </li>
                    </ol>
                    <br />
                    <br />
                    <h5>제 10조 이용의 제한 등</h5>
                    <p>
                        “회사”는 “회원”이 관련법령, “약관” 또는 운영정책을 위반하거나
                        기타 “서비스”의 정상적인 운영을 방해하는 경우, “회사”는
                        “서비스”의 이용제한, 계약의 직권 해지 등의 조치를 취할 수
                        있습니다.
                    </p>
                    <br />
                    <br />
                    <h5>제 11조 계약의 해지 등</h5>
                    <ol>
                        <li>
                        “회원”은 언제든지 “회사”로 요청하거나 직접 “광고센터”에
                        접속하여 이용계약의 해지를 신청할 수 있으며, “회사”는 관련
                        법령이 정하는 바에 따라 이를 즉시 처리하여야 합니다. 다만,
                        “회원”의 해지 신청 시 미정산 수익금이 있는 경우 “회사”가
                        별도로 정한 운영정책에 따라 정산절차 완료 후 계약을
                        해지합니다.
                        </li>
                        <li>
                        “약관”에 따라 계약이 직권 해지된 “회원” 또는 이용 제한 중
                        해지한 “회원”은 재가입이 제한될 수 있습니다.
                        </li>
                    </ol>
                    <br />
                    <br />
                    <h5>제 12조 손해배상</h5>
                    <ol>
                        <li>
                        “회사”는 “회원”이 서비스를 이용함에 있어 “회사”의 고의 또는
                        과실로 인해 손해가 발생한 경우에는 민법 등 관련 법령이
                        규율하는 범위 내에서 그 손해를 배상합니다.
                        </li>
                        <li>
                        “회원”은 이 약관을 위반하거나 관계 법령을 위반하여 “회사”에
                        손해가 발생한 경우에는 “회사”에 그 손해를 배상하여야 합니다.
                        </li>
                        <li>
                        “회원”은 이 약관을 위반하거나 관계 법령을 위반하여 제 3자가
                        “회사”를 상대로 민형사상의 법적 조치를 취하는 경우, 자신의
                        비용과 책임으로 “회사”를 면책시켜야 하며, 이로 인해 발생하는
                        손해에 대해 배상하여야 합니다.
                        </li>
                    </ol>
                    <br />
                    <br />
                    <h5>제 13조 책임제한</h5>
                    <ol>
                        <li>
                        “회사”는 천재지변 또는 이에 준하는 불가항력으로 인하여
                        “서비스”를 제공할 수 없는 경우에는 “서비스” 제공에 관한 책임이
                        면제됩니다.
                        </li>
                        <li>
                        “회사”는 “광고주”의 귀책사유로 인한 “서비스” 이용의 장애에
                        대하여는 책임을 지지 않습니다.
                        </li>
                        <li>
                        “회사”는 “광고주”가 “서비스”와 관련하여 제공한 신청자료 및
                        자신의 웹사이트에 게재한 정보, 자료, 사실의 신뢰도, 정확성
                        등의 내용에 관하여는 책임을 지지 않습니다.
                        </li>
                    </ol>
                    <br />
                    <br />
                    <h5>제 14조 회원에 대한 통지</h5>
                    <ol>
                        <li>
                        “회사”가 “회원”에 대하여 통지를 하는 경우 “약관”에 별도의
                        규정이 없는 한 “회원”이 제공한 전자우편주소, 휴대전화번호
                        등으로 할 수 있습니다.
                        </li>
                        <li>
                        “회사”는 “회원” 전체에 대하여 통지하는 경우 7일 이상 “서비스”
                        내 게시판에 게시함으로써 전항의 통지를 갈음할 수 있습니다.
                        다만, “서비스” 이용에 중대한 영향을 주는 사항에 대해서는
                        전항에 따른 방법으로 통지합니다.
                        </li>
                        <li>
                        “회사”가 제 1항의 방법에 따라 정상적으로 발송하거나, 제 2항의
                        방법에 따라 게시하는 경우 통지가 도달한 것으로 보며, “회사”에
                        제공한 전자우편주소, 휴대전화번호 등이 사실과 다르거나
                        “회원”이 통지를 확인하지 않아 발생한 문제에 대하여 “회사”는
                        책임을 지지 않습니다.
                        </li>
                    </ol>
                    <br />
                    <br />
                    <h5>제 15조 권리의 귀속</h5>
                    <p>
                        “회사”가 “회원”에게 제공하는 “서비스”에 대한 저작권 및
                        지적재산권은 “회사”에 귀속됩니다. 단, “회원”이 “서비스”를
                        이용하는 과정에서 작성한 컨텐츠 등에 대한 일체의 권리는 별도의
                        의사표시가 없는 한 각 “회원”에게 귀속됩니다.
                    </p>
                    <br />
                    <br />
                    <h5>제 16조 양도 및 권한위임 금지</h5>
                    <p>
                        “회원”은 회사의 동의 없이 본 약관 상의 권리 또는 의무의 전부
                        또는 일부를 제 3자에게 양도, 위임하거나 담보의 목적으로 제공할
                        수 없습니다.
                    </p>
                    <br />
                    <br />
                    <h5>제 17조 재판권 및 준거법</h5>
                    <ol>
                        <li>
                        “회사”와 “회원” 간 발생한 분2쟁에 대하여는 대한민국법을
                        준거법으로 합니다.
                        </li>
                        <li>
                        “회사”와 “회원” 간 발생한 분쟁에 관한 소송은 민사소송법 상의
                        관할법원에 제소합니다.
                        </li>
                    </ol>
                    <br />
                    <br />
                    <h5>부칙</h5>
                    <p>이 약관은 2020년 01월 01일부터 적용됩니다.</p>
                    </p>
                </div>
                </div>
            </div>
            {/* // Popup:이용약관 */}
            {/* Popup:개인정보 수집 및 이용 동의 */}
            <div id="Popup02" className="popup_bg" style={{ display: "none" }}>
                <a className="close_icon">
                <i
                    className="flaticon-multiply"
                    onClick={()=>{
                        closePopup('Popup02');
                    }}
                />
                </a>
                <div className="policyA in_txt">
                <h4>개인정보 수집 및 이용 동의</h4>
                <p>
                    MAGENCY(이하 “회사”)는 회원님의 개인정보를 중요시하며, 개인정보의
                    보호와 관련하여 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」
                    및 개인정보 보호법 등 관련법 상의 개인정보 보호 규정을 준수하고
                    있습니다.
                    <br />
                    회사는 개인정보처리방침을 통하여 회원님의 개인정보가 남용되거나
                    유출되지 않도록 최선을 다할 것이며, 회원님께서 제공하시는 개인정보가
                    어떠한 용도와 방식으로 이용되고 있고, 개인정보보호를 위해 어떠한
                    조치가 취해지고 있는지 알려드립니다. 회사는 개인정보 처리방침을
                    홈페이지 첫 화면에 공개함으로써 회원님이 언제나 용이하게 보실 수
                    있도록 조치하고 있습니다. 단, 본 개인정보 처리방침은 정부의 법령 및
                    지침의 변경, 또는 보다 나은 서비스의 제공을 위하여 그 내용이 변경될
                    수 있으니, 회원님들께서는 홈페이지 방문 시 수시로 그 내용을 확인하여
                    주시기 바라며, 회사는 개인정보처리방침을 개정하는 경우 웹사이트
                    공지사항(또는 개별공지)을 통하여 공지할 것입니다.
                    <br />
                    <br />
                    <br />
                    0. 개인정보 수집에 대한 동의 회사는 이용자들이 회사의 개인정보
                    처리방침 또는 이용약관의 내용에 대하여 「동의」버튼 또는
                    「취소」버튼을 클릭할 수 있는 절차를 마련하여, 「동의」버튼을
                    클릭하면 개인정보 수집에 대해 동의한 것으로 봅니다.
                    <br />
                    1.개인정보의 수집 및 이용 목적 '개인정보'라 함은 생존하는 개인에
                    관한 정보로, 성명, 이메일 주소, 전화번호 등 개인을 식별할 수 있는
                    정보를 말합니다. 대부분의 메이전시 서비스는 별도의 사용자 등록이
                    없이 언제든지 볼 수 있습니다. 그러나 회사는 회원서비스(메이전시와
                    같이 현재 제공 중이거나 향후 제공될 로그인 기반의 서비스)등을 통하여
                    이용자들에게 맞춤 식 서비스를 비롯한 보다 더 향상된 양질의 서비스를
                    제공하기 위하여 이용자 개인의 정보를 수집하고 있습니다. 회사는
                    이용자의 사전 동의 없이는 이용자의 개인 정보를 공개하지 않으며,
                    수집된 정보는 아래와 같이 이용하고 있습니다.
                    <br />
                    첫째, 이용자들의 개인정보를 기반으로 보다 더 유용한 서비스를 개발할
                    수 있습니다. 회사는 신규 서비스개발이나 콘텐츠의 확충 시에 기존
                    이용자들이 회사에 제공한 개인정보를 바탕으로 개발해야 할 서비스의
                    우선 순위를 보다 더 효율적으로 정하고, 회사는 이용자들이 필요로 할
                    콘텐츠를 합리적으로 선택하여 제공할 수 있습니다.
                    <br />
                    둘째, 회사가 제공하는 서비스의 원활한 이용을 위하여 회원은 적법한
                    동의절차를 거쳐 SNS 업체가 연결을 위한 정보를 회사에 제공하도록 할
                    수 있습니다. 회사는 연결된 SNS 를 원활한 서비스 제공을 위해
                    사용자에게서 권한이 허락된 범위 안에서 이를 활용할 수 있으며,
                    허락되지 않은 범위에 대해서는 절대 활용하지 않습니다. 서비스 이용을
                    위하여 회원으로부터 추가적인 권한의 요청을 필요로 할 경우, 각 SNS의
                    인증서비스를 통하여 이에 대한 사전 동의를 반드시 구할 것 입니다.
                    <br />
                    세째, 회원구분에 따라서 다음의 목적을 위해서 회원정보를 수집,
                    이용하고 있습니다.
                    <br />
                    필수 : 성명, E-MAIL, 비밀번호, 휴대전화번호
                    <br />
                    선택 : 태그, 간단소개
                    <br />
                    네째, 기타 이용과정이나 사업처리 과정에서 아래와 같은 정보들이
                    자동으로 생성되어 수집될 수 있습니다.
                    <br />
                    -서비스 이용기록, 접속 로그, 쿠키, 접속IP 정보, 결제기록: 부정 이용
                    방지, 비인가 사용 방지 등<br />
                    <br />
                    다섯째, 회원님의 기본적 인권 침해의 우려가 있는 민감정보 (범죄경력,
                    유전정보 등)를 수집하지 않습니다.
                    <br />
                    <br />
                    여섯째, 회원님이 제공하신 모든 정보는 상기 목적에 필요한 용도
                    이외로는 사용되지 않으며, 수집정보의 범위나 사용목적, 용도가 변경될
                    시에는 반드시 회원님들께 사전동의를 구할 것 입니다.
                    <br />
                    <br />
                    위 정보는 가입 당시 정보만 아니라 정보수정으로 변경된 정보를 포함
                    합니다.
                    <br />
                    <br />
                    2. 개인정보의 보유 및 이용기간
                    <br />
                    회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
                    개인정보를 지체 없이 파기합니다.
                    <br />
                    단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존
                    합니다.
                    <br />
                    - 보존 항목 : 쿠키,세션
                    <br />
                    - 보존 근거 : 회사의 서비스이용약관 및 개인정보취급방침에 동의
                    <br />
                    - 보존 기간 : 로그아웃 시 삭제
                    <br />
                    그리고 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는
                    아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를
                    보관합니다.
                    <br />
                    - 보존 항목 : 이름, E-MAIL, 휴대전화번호, 비밀번호, 이용정보,
                    정산정보, 기업정보
                    <br />
                    - 보존 근거 : 회사의 서비스이용약관 및 개인정보취급방침에 동의
                    <br />
                    - 보존 기간 : 회원으로서의 자격을 유지하는 동안
                    <br />
                    <br />
                    [기타]
                    <br />
                    1) 계약 또는 청약철회 등에 관한 기록
                    <br />
                    - 보존근거: 전자상거래 등에서의 소비자보호에 관한 법률
                    <br />
                    - 보존기간: 5년
                    <br />
                    (모임/행사 참가신청 정보는 계약 정보에 해당 합니다.)
                    <br />
                    2) 대금결제 및 재화 등의 공급에 관한 기록
                    <br />
                    - 보존근거: 전자상거래 등에서의 소비자보호에 관한 법률
                    <br />
                    - 보존기간: 5년
                    <br />
                    3) 소비자의 불만 또는 분쟁처리에 관한 기록
                    <br />
                    - 보존근거: 전자상거래등에서의 소비자보호에 관한 법률
                    <br />
                    - 보존기간: 3년
                    <br />
                    4) 웹사이트 방문기록
                    <br />
                    -보존근거: 통신비밀보호법
                    <br />
                    -보존기간: 3개월
                    <br />
                    <br />
                    3. 개인정보의 파기절차 및 방법
                    <br />
                    회원님의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이
                    달성되면 지체 없이 파기합니다.
                    <br />
                    가. 파기절차
                    <br />
                    - 회원님이 회원가입 등을 위해 입력한 정보는 목적이 달성된 후
                    별도의DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련
                    법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간
                    저장된 후 파기됩니다.
                    <br />
                    - 별도DB로 옮겨진 개인정보는 법률에 의한 경우를 제외하고는 다른
                    목적으로 이용되지 않습니다.
                    <br />
                    나. 파기방법
                    <br />
                    - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
                    파기합니다.
                    <br />
                    - 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
                    방법을 사용하여 삭제합니다.
                    <br />
                    <br />
                    4. 개인정보의 제3자 제공 및 공유
                    <br />
                    가. 회사는 회원님의 개인정보를 제1조에서 고지한 범위 내에서
                    사용하며, 회원님의 사전 동의 없이는 동 범위를 초과하여 이용하거나
                    원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만,
                    아래의 경우에는 예외로 합니다.
                    <br />
                    - 이용자들이 사전에 공개 또는 제3자 제공에 동의한 경우
                    <br />
                    - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
                    방법에 따라 수사기관의 요구가 있는 경우
                    <br />
                    나. 회사가 제공하는 서비스를 통하여 주문 및 결제가 이루어진 경우
                    상담 등 거래 당사자간 원활한 의사소통과 배송 및 모임 등 거래이행을
                    위하여 관련된 정보를 필요한 범위 내에서 거래 당사자에게 제공합니다.
                    <br />
                    <br />
                    5. 개인정보의 처리 위탁
                    <br />
                    회사는 서비스 향상을 위해서 아래와 같이 개인정보를 위탁하고 있으며,
                    관계 법령에 따라 위탁계약 시 개인정보가 안전하게 관리될 수 있도록
                    필요한 사항을 규정하고 있습니다. 현재 회사의 개인정보 위탁처리 기관
                    및 위탁업무 내용은 다음과 같습니다.
                    <br />
                    <br />
                    수탁자 | 위탁업무 | 개인정보 보유 및 이용기간
                    <br />
                    향후 지정예정 | 전자결제 대행 | 회원탈퇴 시 혹은 위탁계약 종료시
                    까지
                    <br />
                    향후 지정예정 | SMS 발송 | 회원탈퇴 시 혹은 위탁계약 종료시 까지
                    <br />
                    <br />
                    6. 회원의 권리와 그 행사방법
                    <br />
                    가. 회원님은 언제든지 등록되어 있는 본인의 개인정보를 조회하거나
                    수정할 수 있으며 회원 탈퇴 절차를 통하여 개인정보 이용에 대한 동의
                    등을 철회할 수 있습니다.
                    <br />
                    나. 개인정보의 조회/수정을 위해서는
                    사이트의[마이페이지]내의[회원정보수정] 항목에서 확인 가능하며, 가입
                    해지(동의철회)는[마이페이지] 상단 메뉴 '탈퇴하기'를 통하여 탈퇴하실
                    수 있습니다. 이 외에도 회사의 개인정보 보호책임자에게 서면, 전화
                    또는 이메일로 연락하여 열람/수정/탈퇴를 요청하실 수 있습니다.
                    <br />
                    다. 회원님이 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
                    완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 회사는
                    회원님의 요청에 의해 해지 또는 삭제된 개인정보는 제2조에 명시된 바에
                    따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고
                    있습니다.
                    <br />
                    <br />
                    7. 회원의 의무
                    <br />
                    가. 회원님은 자신의 개인정보를 보호할 의무가 있으며, 회원님 본인의
                    부주의나 인터넷 상의 문제 등으로 개인정보가 유출되어 발생한 문제에
                    대하여 회사는 일체의 책임을 지지 않습니다.
                    <br />
                    나. 회원님의 개인정보를 최신의 상태로 정확하게 입력하시기 바랍니다.
                    회원님의 부정확한 정보입력으로 발생하는 문제의 책임은 회원님
                    자신에게 있으며, 타인의 주민등록번호 등 개인정보를 도용하여 서비스
                    이용 시 회원자격 상실과 함께 주민등록법에 의거하여 처벌될 수
                    있습니다.
                    <br />
                    다. 회원님은 개인정보를 보호받을 권리와 함께 스스로를 보호하고
                    타인의 정보를 침해하지 않을 의무도 가지고 있습니다. 아이디,
                    비밀번호를 포함한 회원님의 개인정보가 유출되지 않도록 조심하시고
                    게시물을 포함한 타인의 개인정보를 훼손하지 않도록 유의해 주십시오.
                    <br />
                    라. 회원님은 『정보통신망이용촉진및정보보호등에관한법률』,
                    개인정보보호법, 주민등록법 등 기타 개인정보에 관한 법률을 준수하여야
                    합니다.
                    <br />
                    <br />
                    8. 링크사이트
                    <br />
                    회사는 회원님께 다른 회사의 웹사이트 또는 자료에 대한 링크를 제공할
                    수 있습니다. 이 경우 회사는 외부웹사이트 및 자료에 대한 아무런
                    통제권이 없으므로 그로부터 제공받는 서비스나 자료의 유용성에 대해
                    책임질 수 없으며 보증할 수 없습니다. 회사가 포함하고 있는 링크를
                    통하여 타 웹사이트의 페이지로 옮겨갈 경우 해당 웹사이트의
                    개인정보처리방침은 회사와 무관하므로 새로 방문한 웹사이트의 정책을
                    검토해보시기 바랍니다.
                    <br />
                    <br />
                    9. 개인정보 자동수집 장치(쿠키 등)의 설치, 운영 및 그 거부에 관한
                    사항
                    <br />
                    가. 회사는 회원님들에게 보다 적절하고 유용한 서비스를 제공하기
                    위하여 회원님의 정보를 수시로 저장하고 불러오는 ‘쿠키(cookie)’를
                    사용합니다. 쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가
                    회원님의 컴퓨터로 전송하는 아주 작은 텍스트 파일로서 회원님의 컴퓨터
                    하드디스크에 저장됩니다. 회원님께서는 쿠키의 사용여부에 대하여
                    선택하실 수 있습니다. 단, 쿠키를 사용하지 않아 생기는 서비스 사용의
                    문제및 제한은 회사가 책임 지지 않습니다.
                    <br />
                    나. 쿠키 설정 거부 방법
                    <br />
                    - 회원님은 사용하시는 웹 브라우저의 옵션을 설정함으로써 모든 쿠키를
                    허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을
                    거부할 수 있습니다. 단, 쿠키의 저장을 거부할 경우 로그인이 필요한
                    일부 서비스의 이용에 제한이 생길 수 있음을 양지하시기 바랍니다.
                    <br />
                    - 쿠키 설치 허용 여부를 지정하는 방법(Internet Explorer의 경우)
                    <br />
                    1) [도구] 메뉴에서[인터넷 옵션]을 선택
                    <br />
                    2) [개인정보]를 클릭
                    <br />
                    3) [고급]을 클릭
                    <br />
                    4) 쿠키 허용여부를 선택
                    <br />
                    <br />
                    10. 개인정보의 기술적/관리적 보호 대책
                    <br />
                    회사는 회원님의 개인정보를 보호하기 위하여 다음과 같은 보호 대책을
                    시행하고 있습니다.
                    <br />
                    가. 비밀번호의 암호화
                    <br />
                    회원님의 비밀번호는 암호화되어 저장 및 관리되고 있습니다. 비밀번호는
                    오직 회원 본인만이 알 수 있으며 개인정보를 확인 및 변경할 경우에도
                    비밀번호를 알고 있는 본인에 의해서만 가능합니다. 따라서 회원님의
                    비밀번호가 타인에게 알려지지 않도록 각별히 주의하시기 바랍니다.
                    <br />
                    나. 해킹 및 컴퓨터 바이러스 등에 대비
                    <br />
                    회사는 해킹이나 컴퓨터 바이러스에 의하여 회원님들의 개인정보가
                    유출되거나 훼손되는 것을 막기 위하여 필요한 보안조치를 이용하고
                    있으며, 더욱 향상된 보안조치를 확보할 수 있도록 가능한 모든 기술적
                    방법을 구비하기 위하여 노력하고 있습니다.
                    <br />
                    다. 개인정보 처리자의 제한 및 교육
                    <br />
                    회사는 개인정보를 처리하는 직원을 최소한으로 제한하고 있으며, 관련
                    직원들에 대한 교육을 수시로 실시하여 본 방침의 이행 및 준수여부를
                    확인하고 있습니다.
                    <br />
                    <br />
                    11. 개인정보보호책임자
                    <br />
                    회원님의 개인정보를 보호하고 개인정보와 관련된 불만 등을 처리하기
                    위하여 회사는 개인정보보호책임자를 두고 있습니다. 회원님의
                    개인정보와 관련한 문의사항은 아래의 개인정보보호책임자에게 연락하여
                    주시기 바랍니다.
                    <br />
                    <br />
                    고객서비스담당 부서
                    <br />
                    이메일: support@stayjanda.com
                    <br />
                    <br />
                    개인정보보호책임자 성명: 김홍찬
                    <br />
                    소속/직위: 기술전략이사
                    <br />
                    전화번호: 070-4128-8244
                    <br />
                    이메일: cdo@stayjanda.com
                    <br />
                    <br />
                    기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에
                    문의하시기 바랍니다.
                    <br />
                    1. 개인분쟁조정위원회(www.1336.or.kr/1336)
                    <br />
                    2. 정보보호마크인증위원회(www.eprivacy.or.kr/02-580-0533~4)
                    <br />
                    3. 대검찰청 인터넷범죄수사센터(icic.sppo.go.kr/02-3480-3600)
                    <br />
                    4. 경찰청 사이버테러대응센터(www.ctrc.go.kr/02-392-0330)
                    <br />
                    <br />
                    12. 개인정보처리방침의 개정과 그 공지
                    <br />본 방침은 2020년 1월 1일 부터 시행됩니다. 본 개인정보
                    처리방침이 변경될 경우 회사는 변경 내용을 그 시행일7일 전부터
                    홈페이지 ‘공지사항’을 통하여 공지할 예정입니다.
                </p>
                </div>
            </div>
            {/* // Popup:개인정보 수집 및 이용 동의 */}
            {/* Popup:개인정보처리 위탁 */}
            <div id="Popup03" className="popup_bg" style={{ display: "none" }}>
                <a className="close_icon">
                <i
                    className="flaticon-multiply"
                    onClick={()=>{
                        closePopup('Popup03');
                    }}
                />
                </a>
                <div className="policyA in_txt2">
                <h4>개인정보처리 위탁</h4>
                <p></p>
                <table>
                    <colgroup>
                    <col style={{ width: "30%" }} />
                    <col />
                    </colgroup>
                    <thead>
                    <tr>
                        <th>수탁업체</th>
                        <th>위탁업무내용</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>잔다</td>
                        <td>예약 및 예약관리와 정산을 위한 서비스 제공</td>
                    </tr>
                    </tbody>
                </table>
                <p />
                </div>
            </div>
            {/* // Popup:개인정보처리 위탁 */}
            {/* Popup:여행자약관 */}
            <div id="Popup04" className="popup_bg" style={{ display: "none" }}>
                <a className="close_icon">
                <i
                    className="flaticon-multiply"
                    onClick={()=>{
                        closePopup('Popup04');
                    }}
                />
                </a>
                <div className="policyA in_txt">
                <h4>여행자약관</h4>
                <p>
                    여행자약관여행자약관여행자약관여행자약관여행자약관여행자약관여행자약관여행자약관
                </p>
                </div>
            </div>
            {/* // Popup:여행자약관 */}
            {/* Popup:개인정보 제3자 제공 */}
            <div id="Popup05" className="popup_bg" style={{ display: "none" }}>
                <a className="close_icon">
                <i
                    className="flaticon-multiply"
                    onClick={()=>{
                        closePopup('Popup05');
                    }}
                />
                </a>
                <div className="policyA in_txt">
                <h4>개인정보 제3자 제공</h4>
                <p>개인정보 제3자 제공</p>
                </div>
            </div>
            {/* // Popup:개인정보 제3자 제공 */}
            {/* Popup:마케팅정보 수신동의 */}
            <div id="Popup06" className="popup_bg" style={{ display: "none" }}>
                <a className="close_icon">
                <i
                    className="flaticon-multiply"
                    onClick={()=>{
                        closePopup('Popup06');
                    }}
                />
                </a>
                <div className="policyA in_txt">
                <h4>마케팅정보 수신동의</h4>
                <p>
                    마케팅정보 수신동의마케팅정보 수신동의마케팅정보 수신동의마케팅정보
                    수신동의마케팅정보 수신동의마케팅정보 수신동의마케팅정보 수신동의
                </p>
                </div>
            </div>
            {/* // Popup:마케팅정보 수신동의 */}
            {/* Popup:파트너약관 */}
            <div id="Popup07" className="popup_bg" style={{ display: "none" }}>
                <a className="close_icon">
                <i
                    className="flaticon-multiply"
                    onClick={()=>{
                        closePopup('Popup07');
                    }}
                />
                </a>
                <div className="policyA in_txt">
                <h4>파트너약관</h4>
                <p>파트너약관파트너약관파트너약관파트너약관파트너약관</p>
                </div>
            </div>
        </>
    )
}

export default PolicyPopup