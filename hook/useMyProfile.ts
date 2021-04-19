import { useRef, useState } from "react";
import { AddressData } from "react-daum-postcode";
import { Ffile, getContext_GetProfile_data } from "../types/api";
import { E_INPUT } from "../types/interface";
import { closeModal } from "../utils/popUp";
import { useUpload } from "./useUpload";


type TChangeAbleData = "phoneNumber" | "keywards" | "is_froreginer" | "gender" | "address" | "account_number" | "busi_num" | "busi_address" | "bank_name" | "address_detail" |"acceptEamil" | "acceptSms" | "name" | "nickName" | "busi_department" | "busi_contact" | "is_priv_corper"
type TProfile = Pick<getContext_GetProfile_data,TChangeAbleData>;

export const useMyProfile = (defaultData:getContext_GetProfile_data  ) => {
    const [pw,setPw] = useState("");
    const [license, setLicense] = useState<Ffile | null>(defaultData.guideLicense)
    const [bankImg, setBankImg] = useState<Ffile | null>(defaultData.bankImg)
    const [busiRegistration, setBusiRegistration] = useState<Ffile | null>(defaultData.busiRegistration)
    const [nextPw, setNextPw] = useState({
        password: "",
        passwordCheck: ""
    })
    
    const hiddenBusiFileInput = useRef<HTMLInputElement>(null);
    const hiddenBankFileInput = useRef<HTMLInputElement>(null);
    const hiddenLicenseFileInput = useRef<HTMLInputElement>(null);

    const { signleUpload } = useUpload();

    const handleChangeRegistration = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_: string, data: Ffile) => {
            setBusiRegistration(data)
        }
        signleUpload(fileUploaded, onUpload);
    };

    const handleBankRegistration = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_: string, data: Ffile) => {
            setBankImg(data)
        }
        signleUpload(fileUploaded, onUpload);
    };

    const hanldeChangeLicense = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_: string, data: Ffile) => {
            setLicense(data)
        }
        signleUpload(fileUploaded, onUpload);
    };
    
    
    const [profile, setProfile] = useState<TProfile>({
        keywards: defaultData.keywards || [],
        busi_address: defaultData.busi_address || "",
        address: defaultData.address || "",
        bank_name: defaultData.bank_name || "",
        account_number: defaultData.account_number || "",
        busi_num: defaultData.busi_num || "",
        address_detail: defaultData.address_detail || "",
        busi_department: defaultData.busi_department || "",
        name: defaultData.name || "",
        nickName: defaultData.nickName || "",
        busi_contact: defaultData.busi_contact || "",
        acceptEamil: defaultData.acceptEamil || false,
        acceptSms: defaultData.acceptSms || false,
        is_priv_corper: defaultData.is_priv_corper || false,
        gender: defaultData.gender,
        is_froreginer: defaultData.is_froreginer,
        phoneNumber: defaultData.phoneNumber || ""
    });

    const toggleCheck = (key: "acceptEamil" | "acceptSms") =>  () => {
        profile[key] = !profile[key]; 
        setProfile({...profile});
    }
    
    const handlePassword = (key: keyof typeof nextPw) => (e: E_INPUT) => {
        nextPw[key] = e.currentTarget.value;
        setNextPw({ ...nextPw });
    }

    const handleCompleteFindAddress = (data:AddressData) => {
        let fullAddress = data.address;
        let extraAddress = '';
    
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        profile.busi_address = fullAddress;
        profile.address = fullAddress;
        closeModal("#addressFindModal")();
        setProfile({ ...profile });
    }


    const data = {
        license,
        bankImg,
        busiRegistration,
        profile,
        nextPw,
        pw
    }

    const setData = {
        setLicense,
        setProfile,
        setNextPw,
        setPw
    }
    
    function set<T extends keyof TProfile>(key: T, value: any) {
        profile[key] = value;
        setProfile({ ...profile })
    }


    const handleTextData = (key: keyof TProfile) => (e: E_INPUT) => {
        set(key, e.currentTarget.value)
    }


    return {
        data,
        setData,
        handlePassword,
        handleCompleteFindAddress,
        handleTextData,
        toggleCheck,
        bankImg, 
        setBankImg,
        setBusiRegistration,
        hiddenBusiFileInput,
        hiddenBankFileInput,
        hiddenLicenseFileInput,
        handleBankRegistration,
        handleChangeRegistration,
        hanldeChangeLicense
    };
}