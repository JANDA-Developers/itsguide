import { gql, useQuery } from "@apollo/client";
import { COUNT, COUNT_MANAGER } from "../apollo/gql/count";
import { count, countManager, countManager_Count_data, count_Count_data } from "../types/api";
import { generateQueryHook } from "../utils/query";

export const useCount = generateQueryHook<count,count_Count_data>(COUNT);
export const useCountManager = generateQueryHook<countManager,countManager_Count_data>(COUNT_MANAGER,{ queryName: "Count"});

export const useCustomCount = <K extends keyof countManager_Count_data>(requires: K[]): Record<keyof countManager_Count_data, number> => {
    let requireString = ``
    const defaultObj:any = {};

    requires.forEach(rq => {
        requireString= `${requireString}
                        ${rq}`;
        defaultObj[rq] = 0;
    })

    const wantedString = `
    query countCustom {
        Count {
            ok
            data  {
                ${requires}
            }
        }
    }`

    if(wantedString.replaceAll) {
    wantedString.replaceAll(",","\n");
    }

    const queryString = gql`${wantedString}`;
    const result = useQuery(queryString)
    const data = result?.data?.["Count"]?.data;
    const count = Object.assign(defaultObj,data || {});


    
    return count;
}