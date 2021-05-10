import dayjs from "dayjs";
import { IHumanCount, IProduct, TCount } from "types/interface";
import { Fproduct } from "../types/api";

export type LocalManagerConfig = {
    readonly storage: 'localStorage' | 'sessionStorage';
};


export class LocalManager<T extends string> {
    storage

    constructor(config: LocalManagerConfig) {
        if (typeof window === "undefined") return;
        if (config.storage === 'sessionStorage')
            this.storage = sessionStorage;
        else this.storage = localStorage;
    }

    saveLocal(key: T, value: string | number | Object): void {
        let _value = value;

        if (typeof value === 'number') {
            _value = value.toString();
        }

        if (typeof value === 'object') {
            try {
                _value = JSON.stringify(value);
            } catch (e) {
                this.storage?.removeItem(key);
                console.error('LocalManager::saveLocal:stringFyFailed');
                console.error(e);
            }
        }

        if (typeof _value === 'string') this.storage?.setItem(key, _value);
    }

    getLocalObj<O>(key: T, or?: O): O | undefined {
        if (typeof window === "undefined") return undefined;
        const value = this.storage?.getItem(key) || '';
        let result = or;

        try {
            result = value ? JSON.parse(value) : "";
        } catch (e) {
            this.storage?.removeItem(key);
            console.error('LocalManager::getLocalOj:parseFailed');
            console.error(e);
        }

        return result;
    }

    getLocal(key: T, or: string): string {
        const item = this.storage?.getItem(key) || '';
        return item || or;
    }

    getLocalNum(key: T, or: number): number {
        const item = this.storage?.getItem(key) || '';
        return parseInt(item) || or;
    }
}


export type TStoreKeys = "ticketWrite" | "ReviewWrite" | "productTempBoard" | "lastLoginType" | "qnaWrite" | "announceWrite" | "lastProd" | "signUpRole" | "questionWrite" | "newsWrite" | "write" | "bracket" | "saveid" | "saveSession?" | "saveId?" | "portfolioWrite" | "jwt" | "lastLogin";

export let Storage: LocalManager<TStoreKeys> | null = null;

export const initStorage = () => {
    Storage = new LocalManager<TStoreKeys>({
        storage: "localStorage"
    });
}
Storage = new LocalManager<TStoreKeys>({
    storage: "localStorage"
});


export interface IBasketItem extends Partial<Fproduct> {
    _id: string;
    name: string;
    price: number;
    count: IHumanCount
    pickupAt?: Date;
    version?: number;
}

export const deleteExpireBracket = () => {
    const bracket = getBracket();
    const unExpiredSet = bracket?.filter((bk) => dayjs(bk.startDate).add(1, "day").toDate() > new Date());
    saveBracket(unExpiredSet || []);
}

export const removeBracket = () => {
    return localStorage.removeItem("bracket");
}

export const getBracket = () => {
    return Storage?.getLocalObj<IBasketItem[]>("bracket", []);
}

export const haveItem = (_id: string): boolean => {
    const products = getBracket() || []
    return !!products.find(prod => prod._id === _id)
}

export const humanCountToCount = (count: IHumanCount) => {
    return [{ key: "kid", label: "성인", value: count.adult },
    { key: "kid", label: "소아", value: count.kids },
    { key: "baby", label: "유아", value: count.baby }]
}


export const countToHumanCount = (count: TCount[]): IHumanCount => {
    return {
        adult: count[0].value,
        kids: count[1].value,
        baby: count[2].value,
    }
}


export const overrideItem = (_id: string, product: Partial<IBasketItem>) => {
    const products = getBracket() || []
    const targetIndex = products.findIndex(prod => prod._id === _id);
    if (targetIndex === -1) throw Error(`these is no item ${_id} in bracket`);
    products[targetIndex] = {
        ...products[targetIndex],
        ...product
    }

    saveBracket(products);
}

export const removeItem = (_id: string) => {
    const products = getBracket() || []
    const targetIndex = products.findIndex(prod => prod._id === _id);
    products.splice(targetIndex, 1);
    saveBracket(products);
}

export const addItem = (product: IBasketItem) => {
    product.pickupAt = new Date();
    const products = getBracket() || []
    const duplicated = products.findIndex(p => p._id === product._id);
    let updateProducts: IBasketItem[] = [];
    if (duplicated !== -1) {
        updateProducts.splice(duplicated, 1, product);
    } else
        updateProducts = [product, ...products];

    saveBracket(updateProducts);
}

export const getItem = (_id: string) => {
    const products = getBracket() || []
    if (!haveItem(_id)) throw Error(`these is no item ${_id} in bracket`);
    return products.find((prod) => prod._id === _id)!;
}

const version = 2;
export const saveBracket = (products: IBasketItem[]) => {
    products.forEach(p => { p.version = version });
    Storage?.saveLocal("bracket", products)
}


export const bracketVergionChange = () => {
    const products = getBracket();
    if (products && products.find(prod => prod.version !== version)) {
        removeBracket();
    }
}

export const getTotalCount = (count: IHumanCount): number => {
    return count.adult + count.baby + count.kids;
}

export const getItemCount = (): number => {
    const brakcet = getBracket();
    return brakcet?.length || 0
}


    // humanCountToCount(count: IHumanCount) {
    //     return [{ key: "kid", label: "성인", value: count.adult },
    //     { key: "kid", label: "소아", value: count.kids },
    //     { key: "baby", label: "유아", value: count.baby }]
    // }


    // countToHumanCount(count: TCount[]): IHumanCount {
    //     return {
    //         adult: count[0].value,
    //         kids: count[1].value,
    //         baby: count[2].value,
    //     }
    // }
