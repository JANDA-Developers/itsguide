import React from 'react';
import { useSettlementController } from '../../hook/useSettlement';

interface IProp { }
//todo
export const UserController: React.FC<IProp> = () => {
    const { settlementComplete, settlementRject, settlementRquest, totalLoading } = useSettlementController();
    return <div > </div>;
};
