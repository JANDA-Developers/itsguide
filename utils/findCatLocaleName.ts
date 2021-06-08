import { Fcategory, Fcategory_localeLabel } from "../types/api";
import { Locales } from "../types/const";

export const cn = (
    localLables: Fcategory_localeLabel,
    locale: Locales | string
) => {
    if (locale === Locales.ot) {
        locale = Locales.en;
    }
    console.log(locale)
    return localLables?.[locale];
};
