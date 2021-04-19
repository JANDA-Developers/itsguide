import { gql } from "@apollo/client";

export const COUNT = gql`
    query count {
        Count {
        ok
        error {
      location
      severity
      code
      message
    }
        data  {
            buyTotalCount
            salesTotalCount
            settleUnsolvedRequestCount
            productRegistCount
            salesOfThisMonth
            salesofLastMonth
            totalSalesCount
            settleAvaiableAmount
        }
    }
}
`

export const COUNT_MANAGER = gql`
    query countManager {
        Count {
            ok
            error {
                location
                severity
                code
                message
            }
            data  {
                buyTotalCount
                salesTotalCount
                settleUnsolvedRequestCount
                productRegistCount
                salesOfThisMonth
                salesofLastMonth
                totalSalesCount
                settleAvaiableAmount
                totalTourCount
                totalExpCount
                totalProdCount
                buyerCount
                bookingCancelReqCount
                todayBookingCount
                expireProductCountMaster
                updateRequestCountMaster
                busiPartnerBCountMaster
                busiPartnerCountMaster
                totalBookingCountMaster
                readyBookingCountMaster
                determiendProductCountMaster
                totalProductCountMaster
                totalCancelCompleteCount
                cancelBookingCountMaster
                compeltedBookingCountMaster
                cancelProductCountMaster
                updateRequestRefuseCountMaster
                undeterMinedProductCountMaster
                refusedCountMaster
                createRequestCountMaster
                cancelReturnPrice
                settlementRequestCountMaster
                elseReqCount
                compeltedProductCountMaster
                tourBookingCountMaster
                expBookingCountMaster
                foreginMemberCount
                koreanMemberCount
                totalIndiMemberCount
                busiPartnerCountMaster
                confimedBusiPartnerCount
                unConfimedBusiPartnerCount
                unConfimedPartnerCount
                confimedPartnerCount
                totalSettlementCount
                settlementReadyCountMater
                cancelReqBookingCountMaster
                settlementCompleteCountMaster
                totalPartnerMemberCount
                answeredQuestionCount
                openProductCountMaster
                unAnsweredQuestionCount 
                countOfTourBooking
                countOfExpBooking
            }
        }
    }
`
