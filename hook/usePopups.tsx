import ReactDOMServer from "react-dom/server";
import { useReducer, useState } from "react";
import { IPopupStyle } from "../components/popupconfig/PopupBox";
import { BG } from "../types/const";
import { Fmodal } from "../types/api";
import { Ipopup } from "../types/interface";
import dayjs from "dayjs";
import { todayIn } from "../utils/todayIn";
import { Storage } from "../utils/Storage";

export const covertPer = (parent: number, px: number) => (px / parent) * 100;
export const covertPx = (parent: number, per: number) => (per / 100) * parent;
export const getOpenParam = (
    left: number,
    top: number,
    width: number,
    height: number
) =>
    `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=${width},height=${height},left=${left},top=${top}`;

export const getMarkUp = (popup: Ipopup) => {
    return (
        <html>
            <head>
                <title>{popup.title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
                />
                <link rel="stylesheet" href={location.origin + "/popup.css"} />
            </head>
            <body>
                <div
                    className="ck-content"
                    dangerouslySetInnerHTML={{ __html: popup.content || "" }}
                    style={{
                        ...BG(popup.style.backgroundImage || ""),
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        height: "100%",
                    }}
                />
                {/* <div className="modal__controller">
                오늘 하루동안 보지않기 <span className="modal__closerWrap"> <input id="DaycheckBox"
                    type="checkbox" checked={false} /> <span id="Closer" className="modal__closer">닫기</span></span>
            </div> */}
                <script src={location.origin + "/popup.js"}></script>
            </body>
        </html>
    );
};

export const openPercentage = (popup: Ipopup) => {
    function isMobile() {
        return window.outerWidth <= 800 && window.innerHeight <= 600;
    }

    if (isMobile()) return;

    const { perHeight, perLeft, perTop, perWidth } = popup.style;

    if (
        perHeight === undefined ||
        perLeft === undefined ||
        perTop === undefined ||
        perWidth === undefined
    )
        return;
    const w = (window.screen.width * perWidth) / 100;
    const h = (window.screen.height * perHeight) / 100;
    const l = (window.screen.width * perLeft) / 100;
    const t = (window.screen.height * perTop) / 100;
    //높이값은 어쩌면 width에 대한 비율 이여하지 않을까?

    const param = getOpenParam(l, t, w, h);

    open(popup, param);
};

export const openAllPecentage = (popups: Fmodal[]) => {
    popups.forEach((modal) => {
        openPercentage(modal);
    });
};

export const open = (modal: Ipopup, openParam: string) => {
    const popup = window.open(undefined, modal.title, openParam);
    if (!popup) throw Error("can not open popup");
    popup.document.title = modal.title || "popup";
    popup.document.body.innerHTML = ReactDOMServer.renderToStaticMarkup(
        getMarkUp(modal)
    );
};

export const openAll = (popups: Fmodal[]) => {
    popups.forEach((modal) => {
        const { left, top, height, width } = modal.style as IPopupStyle;
        const param = getOpenParam(left, top, width, height);
        open(modal, param);
    });
};

export const validatePopup = (popup: Fmodal) => {
    const lastPopup = Storage?.getLocalObj<Date>(("popup" + popup._id) as any);

    const dateOk = todayIn(popup.startDate, popup.endDate);
    const lastPopupOk = !lastPopup || lastPopup < dayjs().add(-1, "h").toDate();

    if (dateOk && lastPopupOk) return true;
    return false;
};

export const savePopUpdate = (id: string, date: Date = new Date()) => {
    Storage?.saveLocal(("popup" + id) as any, date);
};

export const openAutos = (popups: Fmodal[]) => {
    popups.forEach((popup) => {
        if (validatePopup(popup)) {
            openPercentage(popup);
            savePopUpdate(popup._id);
        }
    });
};

export interface IUsePopups extends ReturnType<typeof usePopups> {}
//뭐가 필요한지 알았으니 구조에 대해서 다시 생각해 봐야겠다.
export const usePopups = (defaultModals: Ipopup[], wrapperId: string) => {
    const [popups, _setPopups] = useState<Fmodal[]>(defaultModals);
    const [selectedIndex, setSelcetedIndex] = useState<number>(0);
    const [hideIds, setHideIds] = useState<string[]>([]);
    const selectedPopup = popups[selectedIndex] || undefined;

    const setPopups = (pp: any) => {
        _setPopups(pp);
    };

    const changeToPercentage = (view: IPopupStyle) => {
        const { offsetWidth, offsetHeight } =
            document.getElementById(wrapperId)!;
        const perWidth = covertPer(offsetWidth, view.width);
        const perLeft = covertPer(offsetWidth, view.left);
        const perHeight = covertPer(offsetHeight, view.height);
        const perTop = covertPer(offsetHeight, view.top);

        return { perWidth, perHeight, perTop, perLeft };
    };

    const changeAllToPercentage = () => {
        const result = popups.map((popup) => changeToPercentage(popup.style));
        const integratedInfo = popups.map((v, i) => ({ ...v, ...result[i] }));
        return integratedInfo;
    };

    const savePercentageInModal = () => {
        const result = popups.map((popup) => changeToPercentage(popup.style));
        popups.forEach((m, i) => {
            m.style = {
                ...m.style,
                ...result[i],
            };
        });
    };

    return {
        hideIds,
        setHideIds,
        savePercentageInModal,
        changeAllToPercentage,
        selectedIndex,
        selectedPopup,
        setSelcetedIndex,
        popups,
        setPopups,
        openAll,
        open,
        changeToPercentage,
        openAllPecentage,
        openPercentage,
    };
};
