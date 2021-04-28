import dayjs from "dayjs";
import { useContext, useState } from "react";
import { DayModifiers } from "react-day-picker";
import { JoinContext } from "../pages/member/join";
import { AddUserInput, Ffile, GENDER } from "../types/api";
import { useUpload } from "./useUpload";
import { useDuplicateNickNameCheck } from "./useUser";

export interface ISignUpInput extends Partial<AddUserInput> {
    pwcheck?: string;
}

const currentYear = new Date().getFullYear();
export const fromMonth = new Date(currentYear, 0);
export const toMonth = new Date(currentYear + 0, 11);

export const useJoin = () => {
    const [errDisplay, setErrDisplay] = useState<
        Record<keyof ISignUpInput, boolean>
    >({
        email: false,
        acceptEamil: false,
        acceptSms: false,
        account_number: false,
        guideLicense: false,
        busi_department: false,
        address: false,
        address_detail: false,
        bank_name: false,
        brith_date: false,
        busi_address: false,
        busi_address_detail: false,
        manageContact: false,
        partnerName: false,
        busiRegistration: false,
        manageName: false,
        busi_contact: false,
        busi_name: false,
        busi_num: false,
        gender: false,
        is_froreginer: false,
        is_priv_corper: false,
        name: false,
        nickName: false,
        phoneNumber: false,
        pw: false,
        pwcheck: false,
        role: false,
        bankImg: false,
        guideLicenses: false,
        lang: false,
    });

    const markError = (key: keyof typeof errDisplay) => {
        errDisplay[key] = true;
        setErrDisplay({ ...errDisplay });
    };

    const { verifiData: { payload } = { payload: "" } } = useContext(
        JoinContext
    )!;
    const [data, setData] = useState<ISignUpInput>({
        email: payload,
        guideLicenses: [],
    });
    const [daumAddress, setDaumAddress] = useState(false);
    const { signleUpload } = useUpload();

    const handleAddress = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setDaumAddress(true);
    };

    const [birthdayPicker, setBirthDayPicker] = useState(false);
    const [dayPickerMonth, setDayPickerMonth] = useState(fromMonth);

    const handleDayPickerMonth = (newVal: Date) => {
        setDayPickerMonth(newVal);
    };

    const handleBirthPicker = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setBirthDayPicker(!birthdayPicker);
    };

    const [nickNameChecked, setNickNameChecked] = useState(false);

    const [nickNameCheck] = useDuplicateNickNameCheck({
        onCompleted: ({ NickNameDuplicateCheck }) => {
            if (NickNameDuplicateCheck.data?.duplicated) {
                alert("해당 닉네임은 이미 사용중입니다.");
            } else {
                alert("해당 닉네임은 사용 가능합니다.");
                setNickNameChecked(true);
            }
        },
    });

    const handleNickNameCheck = () => {
        if (data.nickName?.includes("관리자")) {
            alert("해당 닉네임은 사용할 수 없습니다.");
            return;
        }
        nickNameCheck({
            variables: {
                nickName: data.nickName || "",
            },
        });
    };

    const handleDayClick = (
        day: Date,
        modifiers: DayModifiers,
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        let selectedDay = dayjs(day).format("YYYYMMDD");
        setData({
            ...data,
            brith_date: selectedDay,
        });
        setBirthDayPicker(!birthdayPicker);
    };

    const handleGender = (gender: GENDER) => () => {
        setData({
            ...data,
            gender: gender,
        });
    };

    const addressUpdate = (address: string) => {
        setData({
            ...data,
            address: address,
        });
    };

    const handleDaumPostalComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== ""
                        ? `, ${data.buildingName}`
                        : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        addressUpdate(fullAddress);
        setDaumAddress(false);
    };

    const handleData = (key: keyof typeof data) => (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        if (key === "address") {
            alert("??");
        }

        if (key === "is_priv_corper") {
            setData({
                ...data,
                // @ts-ignore
                [key]: e.currentTarget.value === "true",
            });
        } else
            setData({
                ...data,
                [key]: e.currentTarget.value,
            });
    };

    const handleBusinessLicense = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!e.target.files) return;
        await signleUpload(e.target.files, (url, file) => {
            setData({
                ...data,
                busiRegistration: file,
            });
        });
    };

    const handleBusinessLicenses = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!e.target.files) return;
        await signleUpload(e.target.files, (url, file) => {
            setData({
                ...data,
                busiRegistration: file,
            });
        });
    };

    const handleBankImg = async (file: Ffile) => {
        if (!file) return;
        setData({
            ...data,
            bankImg: file,
        });
    };

    const handleAddLicense = (file: Ffile) => {
        if (!file) return;
        data.guideLicenses?.push(file);
        setData({ ...data });
    };

    const handleDeleteLicense = (index: number) => () => {
        data.guideLicenses?.splice(index, 1);
        setData({ ...data });
    };

    const handleGuidLicenseImg = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!e.target.files) return;
        await signleUpload(e.target.files, (url, file) => {
            setData({
                ...data,
                guideLicense: file,
            });
        });
    };

    const handleNationality = (isKorean: boolean) => () => {
        setData({
            ...data,
            is_froreginer: !isKorean,
        });
    };

    return {
        markError,
        errDisplay,
        dayPickerMonth,
        handleNickNameCheck,
        birthdayPicker,
        setBirthDayPicker,
        handleDaumPostalComplete,
        handleAddress,
        handleDayClick,
        data,
        setData,
        handleDayPickerMonth,
        daumAddress,
        nickNameChecked,
        setDaumAddress,
        handleData,
        handleBankImg,
        handleAddLicense,
        handleGuidLicenseImg,
        handleBusinessLicense,
        handleDeleteLicense,
        handleGender,
        handleBirthPicker,
        handleNationality,
    };
};
