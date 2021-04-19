import { ApolloClient, from } from "@apollo/client";
import uri from "./uri";
import cache from "./cache";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export function getCookie(name: string) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

export function eraseCookie(name: string) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

const getCookieToken = () => {
  const cookieToken = getCookie("jwt")
  if (cookieToken) {
    window.localStorage.setItem("jwt", cookieToken);
    eraseCookie("jwt")
  }
}

const getToken = () => {
  if (typeof window === "undefined") {
    return ""
  } else {
    getCookieToken();
    return window.localStorage.getItem("jwt")
  }
}

const headers = {
  "Authorization": "Bearer " + getToken()
}


const fileUploadLink = createUploadLink({
  uri,
  headers
});

export const PinkClient = new ApolloClient({
  link: from([errorLink, fileUploadLink]),
  cache
});

export default PinkClient;