import { Locale } from "dayjs/locale/*";
import { useRouter } from "next/router";
import { productFindById_ProductFindById_data_author } from "../types/api";

export const localeToGuideLangs = (locale: string) => {
    if (locale === "en") return "GB";
    if (locale === "ko") return "kr";
    if (locale === "ja") return "JP";
    if (locale === "CH") return "CH";
    return "kr";
};

export const getDescriptionFromUser = (
    autor: productFindById_ProductFindById_data_author,
    wishLocale?: string
) => {
    const { locale } = useRouter();

    if (autor.description) {
        return autor.description["content"][
            localeToGuideLangs(wishLocale || locale)
        ];
    }

    return "";
};
