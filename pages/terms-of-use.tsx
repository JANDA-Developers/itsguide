import Link from "next/link";
import React from "react";
import { getStaticPageInfo } from "../utils/page";

export const getStaticProps = getStaticPageInfo("main");
const TermsOfUse = () => {
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
                            <Link href="/">
                                <a></a>
                            </Link>
                        </li>
                        <li className="homedeps1">Member</li>
                        <li className="homedeps2">
                            <Link href="/terms-of-use">
                                <a>이용약관</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="rule_box w1200">
                <h4>제 1조 목적</h4>
                <p>
                    이 이용약관(이하 “약관”)은 주식회사 잇츠가이드(이하
                    “회사”)가 제공하는 잇츠가이드 광고서비스(이하 “서비스”)을
                    이용함에 있어 필요한 “회사”와 “회원” 간의 제반 사항을
                    규정함을 목적으로 합니다.
                </p>
                <h4 className="mt20">제 2조 정의</h4>
                <ul>
                    <li>
                        “서비스”라 함은 “광고주”가 “회사”에 요청한 앱광고를
                        “잇츠가이드 회원”이 “광고매체”에 게재하고 “광고매체
                        이용자”가 광고를 클릭한 후 다운로드, 실행, 설치하는 등의
                        행위를 통해 발생한 “광고수익”을 “회사”와 “잇츠가이드
                        회원”이 일정한 비율로 배분하는 광고서비스를 의미합니다.
                    </li>
                    <li>
                        “광고주”라 함은 “서비스”를 이용하기 위해 약관에 따라
                        “회사”와 이용계약을 체결하고 “회사”가 제공하는
                        “서비스”를 이용하는 고객을 의미합니다.
                    </li>
                    <li>
                        “잇츠가이드 회원”이라 함은 “서비스”에 접속하여 “약관”에
                        따라 “회사”와 이용계약을 체결하고 “회사”가 제공하는
                        “서비스”를 이용하며, “광고주”가 “회사”에 요청한 광고를
                        “광고매체”에 게재, 홍보하여 발생한 광고수익에 대해
                        회사로부터 일정한 비율로 배분받는 자를 의미합니다.
                    </li>
                    <li>
                        “광고매체”라 함은 “회사”가 “서비스”를 제공하기 위해
                        이용하는 PC, TV, 휴대형 단말기 등 각종 유무선 장치를
                        포함한 어플리케이션 및 웹사이트 기반의 매체입니다.
                    </li>
                    <li>
                        “광고매체 이용자”라 함은 “광고매체”를 이용하는 이용자를
                        의미하며, “광고매체”의 회원 또는 비회원 모두를
                        지칭합니다.
                    </li>
                    <li>
                        “광고센터”라 함은 “잇츠가이드 회원”이 “서비스”의 신청,
                        집행, 관리, 취소 등을 위해 “회사”가 제공하는
                        관리사이트를 의미합니다.
                    </li>
                    <li>
                        “회원계정”이라 함은 “회원”의 식별 및 “서비스” 관리를
                        위해 “회원” 별로 제공되는 “광고센터”의 전용 계정을
                        의미합니다.
                    </li>
                    <li>
                        “광고수익”이라 함은 “회사”의 “서비스”를 통해 광고를
                        의뢰한 광고주로부터 지급받은 대가를 의미합니다.
                    </li>
                    <li>
                        “정산금”이라 함은 “광고수익” 중 “회사”가 별도로 정하는
                        수익 배분의 기준에 의해 “잇츠가이드 회원”에게 지급되는
                        금액을 의미합니다.
                    </li>
                </ul>
                <h4 className="mt20">제 3조 약관의 게시와 개정</h4>
                <ul>
                    <li>
                        “회사”는 이 약관의 내용을 이용자가 쉽게 알 수 있도록
                        “서비스” 화면에 게시합니다.
                    </li>
                    <li>
                        “회사”는 필요한 경우 관련법을 위배하지 않는 범위 내에서
                        “약관”을 개정할 수 있습니다.
                    </li>
                    <li>
                        “회사”는 “약관”을 개정할 경우 개정내용과 적용일자를
                        명시하여 “서비스”에서 적용일자 7일 전까지 “회원”에게 제
                        1항의 방법으로 공지합니다. 다만, “회원”의 권리 또는
                        의무에 관한 중요한 규정의 변경은 일정기간 서비스 내
                        전자우편, 전자쪽지, 서비스 접속 시 동의창 등의 전자적
                        수단을 통해 따로 명확히 통지합니다.
                    </li>
                    <li>
                        “회사”가 위 3항에 따라 “회원”에게 통지하였음에도
                        “회원”이 명시적으로 거부의 의사표시를 하지 않은 경우
                        “회원”이 이 개정 약관에 동의한 것으로 봅니다.
                    </li>
                    <li>
                        “회원”은 개정 약관에 동의하지 않는 경우 적용일자
                        전일까지 “회사”에 거부의사를 표시하고 이용계약을 해지할
                        수 있습니다.
                    </li>
                    <li>
                        본 약관에 명시되지 않은 사항에 대해서는 전기통신기본법,
                        전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에
                        관한 법률(이하 “정보통신망법”), 전자상거래 등에서의
                        소비자보호에 관한 법률(이하 “전소법”) 등의 관계법령 및
                        회사가 정한 별도의 운영정책에 따르며 “회원”은 “회사”가
                        정한 운영정책을 반드시 확인하고 준수하여야 합니다.
                    </li>
                </ul>
                <h4 className="mt20">제 4조 광고주 이용계약 체결</h4>
                <ul>
                    <li>
                        서비스 이용계약은 “광고주”가 광고 게재를 신청하고
                        “회사”가 이를 승인한 경우에 성립되며, 구체적인 신청 및
                        승인절차에 대해서는 “회사”가 “광고주”에게 별도로
                        고지합니다.
                    </li>
                    <li>
                        “광고주”는 반드시 “회사”가 요구하는 양식과 절차에 따라
                        서비스를 신청해야 하며 “회사”는 “광고주”의 신청에 대해
                        수정이나 승인 여부, 방식 등을 결정할 권한을 가집니다.
                    </li>
                    <li>
                        “서비스”를 이용하는 중간에 “광고주”의 의사에 따라
                        광고내용 변경 시, “서비스”가 최초 승인내용과 달라진 경우
                        재심사를 받아야 하며 재심사로 인해 발생하는 불이익은
                        “광고주”가 부담합니다.
                    </li>
                    <li>
                        “회사”가 본 조에 따라 광고게재신청을 승인한 경우라도
                        추후 재확인 시 위반 사항이 확인되는 경우에는 언제든지
                        해당 승인을 취소할 수 있습니다.
                    </li>
                </ul>
                <h4 className="mt20">제 5조 잇츠가이드 회원 이용계약 체결</h4>
                <ul>
                    <li>
                        이용계약은 회원이 되고자 하는 자(이하 “가입신청자”)가
                        약관에 동의를 한 뒤 회원가입신청을 하고, “회사”가 이를
                        승인함으로써 체결됩니다.
                    </li>
                    <li>
                        “회사”는 “가입신청자”의 신청에 대하여 승인하는 것을
                        원칙으로 하나, “가입신청자” 중 아래 각호에 해당되는
                        경우에는 승인을 거부할 수 있으며, 등록이 된 이후에도
                        아래 각호의 사유가 확인된 경우에는 승낙을 취소할 수
                        있습니다.
                        <ul>
                            <li>
                                가입신청자가 이 약관 또는 서비스 운영 정책에
                                의하여 회원 자격을 상실한 경우, 단 회사의 회원
                                재가입 승낙을 얻은 경우는 예외로 함
                            </li>
                            <li>
                                타인의 명의를 이용하거나 신청 양식을 허위로
                                기재한 경우
                            </li>
                            <li>신청양식의 기재사항이 누락된 경우</li>
                            <li>
                                가입신청자의 귀책사유로 인하여 승인이
                                불가능하거나 기타 규정한 제반 사항을 위반해
                                신청하는 경우
                            </li>
                            <li>기타 회사가 필요하다고 판단한 경우</li>
                        </ul>
                    </li>
                    <li>
                        회원이 본 약관에 동의함은 본 서비스와 관련하여 회사에서
                        제공하거나 제공할 모든 서비스에 동의하는 것으로 봅니다.
                    </li>
                </ul>
                <h4 className="mt20">제 6조 개인정보의 보호</h4>
                <p>
                    “회사”는 “정보통신망 이용촉진 및 정보보호 등에 관한 법률” 등
                    관계 법령이 정하는 바에 따라 “회원”의 개인정보를 보호하기
                    위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련법
                    및 “회사”의 개인정보 취급방침이 적용됩니다. 다만, “회사”의
                    공식 사이트 이외의 링크된 사이트에서는 “회사”의
                    개인정보취급방침이 적용되지 않습니다.
                </p>
                <h4 className="mt20">제 7조 회원정보의 관리 및 변경</h4>
                <ul>
                    <li>
                        “회원”의 “계정”과 “비밀번호”에 대한 관리책임은
                        “회원”에게 있으며, 이를 제3자가 이용하도록 하여서는
                        안됩니다.
                    </li>
                    <li>
                        “회원”은 회원정보수정 화면을 통해서 본인의 개인정보를
                        열람하고 수정할 수 있습니다.
                    </li>
                    <li>
                        “회원”은 개인정보가 변경되었을 경우 즉시 이를 수정해야
                        하며, 수정하지 않음으로 인해 발생한 불이익에 대해서는
                        “회사”가 책임지지 않습니다.
                    </li>
                </ul>
                <h4 className="mt20">제 8조 회사의 의무</h4>
                <ul>
                    <li>
                        “회사”는 관련 법령과 “약관”을 준수하며, 안정적으로
                        “서비스”를 제공하기 위하여 최선을 다하여 노력합니다.
                    </li>
                    <li>
                        “회사”는 “서비스” 이용과 관련하여 “광고주” 및
                        “잇츠가이드 회원”으로부터 제기된 의견이나 불만이
                        정당하다고 인정할 경우에는 이를 처리하여야 합니다.
                    </li>
                    <li>
                        “회사”는 “회사”가 별도로 정한 수익배분 기준에 따라
                        “수익금”을 “잇츠가이드 회원”에게 지급합니다.
                    </li>
                    <li>
                        “회사”는 컴퓨터 등 정보통신설비의 보수점검, 교체, 고장,
                        장애, 통신두절 또는 운영상 합리적인 사유가 있는 경우
                        “서비스” 제공을 일시적으로 중단할 수 있으며, 본 항에
                        따른 “서비스” 제공 중단으로 발생한 “회원”의 손해에
                        대해서는 고의 또는 중과실이 없는 한 책임을 지지
                        않습니다.
                    </li>
                    <li>
                        전항의 경우 “회사”는 제 14조에 따른 방법으로 “회원”에게
                        통지합니다. 다만, “회사”가 통지할 수 없는 부득이한
                        사유가 있는 경우 사후에 통지할 수 있습니다.
                    </li>
                </ul>
                <h4 className="mt20">제 9조 회원의 의무</h4>
                <ul>
                    <li>
                        “회원”은 관련 법령, 이 약관의 규정, 이용안내 및
                        “서비스”와 관련하여 공지한 주의사항, “회사”가 통지하는
                        사항 등을 준수하여야 하며, 기타 “회사”의 업무에 방해되는
                        행위를 하여서는 안 됩니다.
                    </li>
                    <li>
                        “회원”은 아래의 행위를 하여서는 안 됩니다.
                        <ul>
                            <li>
                                “회원”가입을 신청하거나 “회원”정보 변경을 신청할
                                때 허위 또는 타인의 정보를 입력하는 행위
                            </li>
                            <li>
                                “회사” 또는 제 3자의 저작권 등 지적재산권을
                                침해하는 행위
                            </li>
                            <li>
                                “회사” 또는 제 3자의 명예를 손상시키거나 업무를
                                방해하는 행위
                            </li>
                            <li>
                                “회사” 또는 제 3자를 가장 또는 사칭하여 글을
                                게시하거나 메일을 발송하는 행위
                            </li>
                            <li>
                                “회사”의 “서비스”에 게시된 정보를 변경하거나
                                “서비스”를 이용하여 얻은 정보를 “회사”의 사전
                                승낙 없이 영리 또는 비영리의 목적으로 복제,
                                출판, 방송 등에 사용하거나 제 3자에게 제공하는
                                행위
                            </li>
                            <li>
                                수동과 자동을 불문하고 다양한 부정 행위를
                                사용하여 광고를 게재, 홍보하여 “광고주”에게
                                손해를 주거나 자신 또는 제 3자에게 이익을 주는
                                행위
                            </li>
                            <li>
                                수입을 일으키려는 목적으로 부정하거나 부적절한
                                방법으로 광고를 게재, 홍보하는 일체의 행위
                            </li>
                            <li>
                                계정을 매매, 양도, 명의변경, 재판매하거나 질권의
                                목적으로 사용하는 행위
                            </li>
                            <li>
                                “서비스” 이용 권한을 타인에게 공유, 제공, 양도,
                                중개, 재판매하는 행위
                            </li>
                            <li>
                                “회원”이 “회사”와 계약된 방법 이외의 부정한
                                수익을 추구하여 “광고주”와 “회사”에 고의적으로
                                손실을 입히는 행위
                            </li>
                            <li>
                                기타 “서비스”의 운영정책에 위배되는 모든 행위
                            </li>
                        </ul>
                    </li>
                </ul>
                <h4 className="mt20">제 10조 이용의 제한 등</h4>
                <p>
                    “회사”는 “회원”이 관련법령, “약관” 또는 운영정책을
                    위반하거나 기타 “서비스”의 정상적인 운영을 방해하는 경우,
                    “회사”는 “서비스”의 이용제한, 계약의 직권 해지 등의 조치를
                    취할 수 있습니다.
                </p>
                <h4 className="mt20">제 11조 계약의 해지 등</h4>
                <ul>
                    <li>
                        “회원”은 언제든지 “회사”로 요청하거나 직접 “광고센터”에
                        접속하여 이용계약의 해지를 신청할 수 있으며, “회사”는
                        관련 법령이 정하는 바에 따라 이를 즉시 처리하여야
                        합니다. 다만, “회원”의 해지 신청 시 미정산 수익금이 있는
                        경우 “회사”가 별도로 정한 운영정책에 따라 정산절차 완료
                        후 계약을 해지합니다.
                    </li>
                    <li>
                        “약관”에 따라 계약이 직권 해지된 “회원” 또는 이용 제한
                        중 해지한 “회원”은 재가입이 제한될 수 있습니다.
                    </li>
                </ul>
                <h4 className="mt20">제 12조 손해배상</h4>
                <ul>
                    <li>
                        “회사”는 “회원”이 서비스를 이용함에 있어 “회사”의 고의
                        또는 과실로 인해 손해가 발생한 경우에는 민법 등 관련
                        법령이 규율하는 범위 내에서 그 손해를 배상합니다.
                    </li>
                    <li>
                        “회원”은 이 약관을 위반하거나 관계 법령을 위반하여
                        “회사”에 손해가 발생한 경우에는 “회사”에 그 손해를
                        배상하여야 합니다.
                    </li>
                    <li>
                        “회원”은 이 약관을 위반하거나 관계 법령을 위반하여 제
                        3자가 “회사”를 상대로 민형사상의 법적 조치를 취하는
                        경우, 자신의 비용과 책임으로 “회사”를 면책시켜야 하며,
                        이로 인해 발생하는 손해에 대해 배상하여야 합니다.
                    </li>
                </ul>
                <h4 className="mt20">제 13조 책임제한</h4>
                <ul>
                    <li>
                        “회사”는 천재지변 또는 이에 준하는 불가항력으로 인하여
                        “서비스”를 제공할 수 없는 경우에는 “서비스” 제공에 관한
                        책임이 면제됩니다.
                    </li>
                    <li>
                        “회사”는 “광고주”의 귀책사유로 인한 “서비스” 이용의
                        장애에 대하여는 책임을 지지 않습니다.
                    </li>
                    <li>
                        “회사”는 “광고주”가 “서비스”와 관련하여 제공한 신청자료
                        및 자신의 웹사이트에 게재한 정보, 자료, 사실의 신뢰도,
                        정확성 등의 내용에 관하여는 책임을 지지 않습니다.
                    </li>
                </ul>
                <h4 className="mt20">제 14조 회원에 대한 통지</h4>
                <ul>
                    <li>
                        “회사”가 “회원”에 대하여 통지를 하는 경우 “약관”에
                        별도의 규정이 없는 한 “회원”이 제공한 전자우편주소,
                        휴대전화번호 등으로 할 수 있습니다.
                    </li>
                    <li>
                        “회사”는 “회원” 전체에 대하여 통지하는 경우 7일 이상
                        “서비스” 내 게시판에 게시함으로써 전항의 통지를 갈음할
                        수 있습니다. 다만, “서비스” 이용에 중대한 영향을 주는
                        사항에 대해서는 전항에 따른 방법으로 통지합니다.
                    </li>
                    <li>
                        “회사”가 제 1항의 방법에 따라 정상적으로 발송하거나, 제
                        2항의 방법에 따라 게시하는 경우 통지가 도달한 것으로
                        보며, “회사”에 제공한 전자우편주소, 휴대전화번호 등이
                        사실과 다르거나 “회원”이 통지를 확인하지 않아 발생한
                        문제에 대하여 “회사”는 책임을 지지 않습니다.
                    </li>
                </ul>
                <h4 className="mt20">제 15조 권리의 귀속</h4>
                <p>
                    “회사”가 “회원”에게 제공하는 “서비스”에 대한 저작권 및
                    지적재산권은 “회사”에 귀속됩니다. 단, “회원”이 “서비스”를
                    이용하는 과정에서 작성한 컨텐츠 등에 대한 일체의 권리는
                    별도의 의사표시가 없는 한 각 “회원”에게 귀속됩니다.
                </p>
                <h4 className="mt20">제 16조 양도 및 권한위임 금지</h4>
                <p>
                    “회원”은 회사의 동의 없이 본 약관 상의 권리 또는 의무의 전부
                    또는 일부를 제 3자에게 양도, 위임하거나 담보의 목적으로
                    제공할 수 없습니다.
                </p>
                <h4 className="mt20">제 17조 재판권 및 준거법</h4>
                <ul>
                    <li>
                        “회사”와 “회원” 간 발생한 분2쟁에 대하여는 대한민국법을
                        준거법으로 합니다.
                    </li>
                    <li>
                        “회사”와 “회원” 간 발생한 분쟁에 관한 소송은 민사소송법
                        상의 관할법원에 제소합니다.
                    </li>
                </ul>
                <h4 className="mt20">부칙</h4>
                <p>이 약관은 2020년 01월 01일부터 적용됩니다.</p>
                <p />
            </div>
        </div>
    );
};

export default TermsOfUse;
