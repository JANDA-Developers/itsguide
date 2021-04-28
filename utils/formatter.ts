const autoComma = (str: string | number = ""): string => {
    if (typeof str === "number") return autoComma(str.toString());
    let t = `${str}`;
    const comma = /,/g;
    t = t.replace(comma, "");
    const x = t.split(".");
    let x1 = x[0];
    const x2 = x.length > 1 ? `.${x[1]}` : "";
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
    }

    return x1 + x2;
};

export { autoComma };

export interface IselectedOption<T = any> {
    label: string;
    _id: T;
}

export function toOps<T, C extends keyof T>(
    op: Array<T>,
    id: C,
    label: C
): IselectedOption[] {
    return op.map((o) => ({
        label: o[label] as any,
        _id: o[id] as any,
    }));
}

export const deepCopy = <T>(inObject: T): T => {
    let outObject, value, key;

    if (typeof inObject !== "object" || inObject === null) {
        return inObject; // Return the value if inObject is not an object
    }

    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {};

    for (key in inObject) {
        // @ts-ignore
        value = inObject[key];

        // Recursively (deep) copy for nested objects, including arrays
        // @ts-ignore
        outObject[key] = deepCopy(value);
    }

    // @ts-ignore
    return outObject;
};

export const autoHypenPhone = (str: string = ""): string => {
    const inStr = str.replace(/[^0-9]/g, "");
    let tmp = "";
    if (inStr.length < 4) {
        return inStr;
    }
    if (inStr.length < 7) {
        tmp += inStr.substr(0, 3);
        tmp += "-";
        tmp += inStr.substr(3);
        return tmp;
    }
    if (inStr.length < 11) {
        tmp += inStr.substr(0, 3);
        tmp += "-";
        tmp += inStr.substr(3, 3);
        tmp += "-";
        tmp += inStr.substr(6);
        return tmp;
    }
    if (inStr.length >= 11) {
        tmp += inStr.substr(0, 3);
        tmp += "-";
        tmp += inStr.substr(3, 4);
        tmp += "-";
        tmp += inStr.substr(7);
        return tmp;
    }

    return inStr;
};

export function cc_format(value: string) {
    var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    var matches = v.match(/\d{6,13}/g);
    var match = (matches && matches[0]) || "";
    var parts = [];
    let len = 0;
    for (let i = 0, len = match.length; i < len; i += 6) {
        parts.push(match.substring(i, i + 6));
    }
    if (parts.length > 1 && parts[1].length > 4) {
        parts[1] = [parts[1].slice(0, 4), " ", parts[1].slice(4)].join("");
    }
    if (parts.length) {
        return parts.join(" ");
    } else {
        return v;
    }
}

export const card_hypen = (value: string = "") => {
    var v = value.replace(/\s+/g, "").replace(/[^0-9\*]/gi, "");
    var matches = v.match(/[0-9\*]{4,20}/g);
    var match = (matches && matches[0]) || "";
    var parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
        return parts.join("-");
    } else {
        return value;
    }
};

export const removeSpecialChar = (str: string) => {
    const test = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    return str.replace(test, "");
};
