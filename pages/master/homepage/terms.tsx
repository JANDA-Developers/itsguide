import { MasterLayout } from "layout/MasterLayout";
import React, { useState } from "react";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getHomepage, TGetHomepage } from "../../../utils/page";
import { useHomepageUpdate } from "../../../hook/useHomepage";
import { HomepageUpdateInput } from "../../../types/api";
import { LoadEditor } from "../../../components/edit/EdiotrLoading";
import { auth } from "../../../utils/with";
import { ALLOW_ADMINS } from "../../../types/const";
import { HomepageTopNav } from "../../../components/topNav/MasterTopNav";

const Editor = LoadEditor();

interface IProp {}
export const getStaticProps = getHomepage;
export const MsHomepageA: React.FC<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ homepage }) => {
    if (typeof window === "undefined") return null;

    const [homepageUpdateMu] = useHomepageUpdate();

    const defaults = homepage as any;

    const [datas, setDatas] = useState<HomepageUpdateInput>({
        ...defaults,
    });

    const setPoliicy = (key: keyof HomepageUpdateInput) => (data: string) => {
        // @ts-ignore
        datas[key] = data;
        setDatas({ ...datas });
    };

    const textReverse = (key: keyof HomepageUpdateInput) => {
        if (key === "usePolicy") return "이용약관";
        if (key === "PrivacyPolicy") return "개인정보약관";
        if (key === "partnerBpolicy") return "비지니스가이드약관";
        if (key === "partnerPolicy") return "가이드약관";
        if (key === "marketingPolic") return "마케팅약관";
        if (key === "thirdPolicy") return "삼자정보제공약관";
        if (key === "travelerPolicy") return "여행자약관";
        return "";
    };

    const handleSave = (key: keyof HomepageUpdateInput) => async () => {
        const next = {
            ...datas,
            [key]: datas[key] as string,
        };
        homepageUpdateMu({
            variables: {
                params: {
                    ...next,
                },
            },
        }).then((result) => {
            if (result.data?.HomepageUpdate?.ok) {
                alert(`${textReverse(key)} 저장이 완료되었습니다.`);
            }
        });
    };

    return (
        <MasterLayout>
            <div className="in ">
                <h4>홈페이지 설정</h4>
                <div className="in_content">
                    <HomepageTopNav />
                    <div className="con terms">
                        <div className="jul">
                            <h5>이용약관</h5>
                            <Editor
                                data={datas.usePolicy}
                                onChange={setPoliicy("usePolicy")}
                            />
                            <div className="terms__termBox fin ifMobile">
                                <button
                                    onClick={handleSave("usePolicy")}
                                    type="submit"
                                    className="terms__saveBtn btn medium"
                                >
                                    저장하기
                                </button>
                            </div>
                        </div>

                        <div className="jul">
                            <h5>개인정보수집 및 이용</h5>
                            <Editor
                                data={datas.PrivacyPolicy}
                                onChange={setPoliicy("PrivacyPolicy")}
                            />
                            <div className="terms__termBox fin">
                                <button
                                    onClick={handleSave("PrivacyPolicy")}
                                    type="submit"
                                    className="terms__saveBtn btn medium"
                                >
                                    저장하기
                                </button>
                            </div>
                        </div>

                        <div className="jul">
                            <h5>개인정보 제3자 제공</h5>
                            <Editor
                                data={datas.thirdPolicy}
                                onChange={setPoliicy("thirdPolicy")}
                            />
                            <div className="terms__termBox fin">
                                <button
                                    onClick={handleSave("thirdPolicy")}
                                    type="submit"
                                    className="terms__saveBtn btn medium"
                                >
                                    저장하기
                                </button>
                            </div>
                        </div>

                        <div className="jul">
                            <h5>여행자약관</h5>

                            <Editor
                                data={datas.travelerPolicy}
                                onChange={setPoliicy("travelerPolicy")}
                            />

                            <div className="terms__termBox fin">
                                <button
                                    onClick={handleSave("travelerPolicy")}
                                    type="submit"
                                    className="terms__saveBtn btn medium"
                                >
                                    저장하기
                                </button>
                            </div>
                        </div>

                        <div className="jul">
                            <h5>마케팅정보 수신동의</h5>
                            <Editor
                                data={datas.marketingPolic}
                                onChange={setPoliicy("marketingPolic")}
                            />
                            <div className="terms__termBox fin">
                                <button
                                    onClick={handleSave("marketingPolic")}
                                    type="submit"
                                    className="terms__saveBtn btn medium"
                                >
                                    저장하기
                                </button>
                            </div>
                        </div>

                        <div className="jul">
                            <h5>가이드 이용 약관동의</h5>
                            <Editor
                                data={datas.partnerPolicy}
                                onChange={setPoliicy("partnerPolicy")}
                            />
                            <div className="terms__termBox fin">
                                <button
                                    onClick={handleSave("partnerPolicy")}
                                    type="submit"
                                    className="terms__saveBtn btn medium"
                                >
                                    저장하기
                                </button>
                            </div>
                        </div>

                        <div className="jul">
                            <h5>가이드 이용 약관동의</h5>
                            <Editor
                                data={datas.partnerBpolicy}
                                onChange={setPoliicy("partnerBpolicy")}
                            />
                            <div className="terms__termBox fin ifMobile">
                                <button
                                    onClick={handleSave("partnerBpolicy")}
                                    type="submit"
                                    className="terms__saveBtn btn medium"
                                >
                                    저장하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
};

export default auth(ALLOW_ADMINS)(MsHomepageA as any);
