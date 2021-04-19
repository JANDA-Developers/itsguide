import { BookingStatus } from "../../types/api";

export type IAuthInfo = {
    "mid": string,
    "hashString": string,
    "ediDate": string
  }

  
export interface IRefundBody {
  price: string;
  cancelMemo: string;
  partialCancelCode: "0" | "1"
  bookingId: string;
  reqStatus: BookingStatus
}

