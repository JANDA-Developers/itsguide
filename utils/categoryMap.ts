import { CategoryType, Fcategory } from "../types/api";
import { cloneObject } from "./clone";

export const defaultCatsMap:Record<CategoryType, Fcategory[]> = {
  CUSTOMER_QNA: [],
  PORTPOLIO: [],
  QNA: [],
  EXPERIENCE: [],
  TOUR: [],
  REGION: []
}

export const categoryMap = (catList:Fcategory[]) => {
  const catsMap = cloneObject(defaultCatsMap)

  catList.forEach(cat => {
     catsMap[cat.type].push(cat);
  })

  return catsMap;
}