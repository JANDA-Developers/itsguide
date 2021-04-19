import { useState } from "react";


export interface IUseModal<T = any> {
    isOpen: boolean;
    openModal: (inInfo?: T) => void;
    closeModal: () => void;
    info?: T;
  }
  
  // 모달훅
  export function useModal<T = any>(
    defaultValue: boolean = false,
    defaultInfo?: T
  ): IUseModal<T> {
    const [isOpen, setIsOpen] = useState(defaultValue);
    const [info, setInfo] = useState(defaultInfo);
  
    const openModal = (inInfo?: any) => {
      setIsOpen(true);
      setInfo(inInfo);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    return {
      isOpen,
      openModal,
      closeModal,
      info,
    };
  }
  