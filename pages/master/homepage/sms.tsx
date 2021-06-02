import { MasterLayout } from "layout/MasterLayout";
import React, { useState } from "react";
import { useTemplateList } from "../../../hook/useNotification";
import { FsmsTemplate, _ITemplateSort } from "../../../types/api";
import { openModal } from "../../../utils/popUp";
import {
    SMSmodal,
    SMStemplateTagKr,
    TSMStemplateTag,
} from "../../../components/sms/SMSmodal";
import { ALLOW_ADMINS } from "../../../types/const";
import { auth } from "../../../utils/with";
import { SortSelecter } from "../../../components/common/SortSelect";
import { HomepageTopNav } from "../../../components/topNav/MasterTopNav";

export const MsHomepageA: React.FC = () => {
    const { items: templates, setSort, sort } = useTemplateList();
    const [template, setTemplate] = useState<FsmsTemplate>();
    const [smsTagFilter, setSmsTagFilter] =
        useState<TSMStemplateTag | null>(null);

    const handleOpenSmsModal = (template: FsmsTemplate) => () => {
        setTemplate(template);
        openModal("#SMSmodal")();
    };

    const handleOpenCreateModal = () => () => {
        setTemplate(undefined);
        openModal("#SMSmodal")();
    };

    const checkOn = (type: TSMStemplateTag | null) =>
        smsTagFilter === type ? "on" : "";
    const tagCount = (type: TSMStemplateTag | null) =>
        templates.filter((temp) => temp?.tags[0]?.value === type).length;

    const count = templates.length;
    const resvCount = tagCount("RESERVATION");
    const memberCount = tagCount("MEMBER");
    const settlementCount = tagCount("SETTLEMENT");

    const handleFilterType = (type: TSMStemplateTag | null) => () => {
        setSmsTagFilter(type);
    };

    const filtered = smsTagFilter
        ? templates.filter((tp) => tp.tags?.[0]?.value === smsTagFilter)
        : templates;

    return (
        <MasterLayout>
            <div className="in ">
                <h4>홈페이지 설정</h4>
                <div className="in_content">
                    <HomepageTopNav />
                    <div className="con homepage sms">
                        <div className="fin ifMobile">
                            <div className="alignment">
                                <div className="left_div">
                                    <ul className="board_option">
                                        <li
                                            onClick={handleFilterType(null)}
                                            className={checkOn(null)}
                                        >
                                            <a>
                                                전체<strong>{count}</strong>
                                            </a>
                                        </li>
                                        <li
                                            onClick={handleFilterType(
                                                "RESERVATION"
                                            )}
                                            className={checkOn("RESERVATION")}
                                        >
                                            <a>
                                                예약<strong>{resvCount}</strong>
                                            </a>
                                        </li>
                                        <li
                                            onClick={handleFilterType("MEMBER")}
                                            className={checkOn("MEMBER")}
                                        >
                                            <a>
                                                회원
                                                <strong>{memberCount}</strong>
                                            </a>
                                        </li>
                                        <li
                                            onClick={handleFilterType(
                                                "SETTLEMENT"
                                            )}
                                            className={checkOn("SETTLEMENT")}
                                        >
                                            <a>
                                                정산
                                                <strong>
                                                    {settlementCount}
                                                </strong>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right_div">
                                    <SortSelecter
                                        onChange={setSort}
                                        sort={sort}
                                    >
                                        <option
                                            value={
                                                _ITemplateSort.createdAt_desc
                                            }
                                        >
                                            최신순 &uarr;
                                        </option>
                                        <option
                                            value={_ITemplateSort.createdAt_asc}
                                        >
                                            최신순 &darr;
                                        </option>
                                    </SortSelecter>
                                </div>
                            </div>
                        </div>
                        <div className="sms-list">
                            <ul>
                                {filtered.map((template) => (
                                    <li
                                        key={template._id}
                                        onClick={handleOpenSmsModal(template)}
                                    >
                                        <div className="title">
                                            <h5>{template.name}</h5>
                                            <div className="tag">
                                                {template.tags[0] && (
                                                    <span className="ct">
                                                        {
                                                            SMStemplateTagKr[
                                                                template.tags[0]
                                                                    .value as TSMStemplateTag
                                                            ]
                                                        }
                                                    </span>
                                                )}
                                                {template.trigger?.event && (
                                                    <span className="auto">
                                                        자동
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <p>{template.description}</p>
                                        </div>
                                        <div
                                            onClick={handleOpenSmsModal(
                                                template
                                            )}
                                            className="mouseover"
                                        >
                                            <span>
                                                <i className="jandaicon-setting"></i>
                                                수정
                                            </span>
                                        </div>
                                    </li>
                                ))}
                                <li
                                    className="add"
                                    onClick={handleOpenCreateModal()}
                                >
                                    <button>
                                        <i className="flaticon-add"></i>템플릿
                                        생성
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* popup-SMS문자 템플릿 */}
                <SMSmodal
                    key={template?._id || "CreateTemplateModal"}
                    template={template}
                />
            </div>
        </MasterLayout>
    );
};

export default auth(ALLOW_ADMINS)(MsHomepageA);
