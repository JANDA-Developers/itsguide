import { GraphQLClient } from "graphql-request";
import { HOMEPAGE, HOMEPAGE_UPDATE } from "../apollo/gql/homepage";
import { SERVER_URI } from "../apollo/uri";
import { Fhomepage, homepage, homepageUpdate, homepageUpdateVariables, homepage_Homepage_data } from "../types/api";
import { getRefetch,} from "../utils/api";
import { generateFindQuery, generateMutationHook, generateQueryHook } from "../utils/query";

export const useHomepage = generateQueryHook<homepage,homepage_Homepage_data>(HOMEPAGE);
export const useHomepageUpdate = generateMutationHook<homepageUpdate,homepageUpdateVariables>(HOMEPAGE_UPDATE, {
    ...getRefetch(HOMEPAGE)
});
