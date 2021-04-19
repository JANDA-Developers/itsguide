export function isIE() {
    if (typeof window === "undefined") return;
    var user_agent = window.navigator.userAgent;
    var is_it_ie = user_agent.indexOf("MSIE ") > -1 || user_agent.indexOf("Trident/") > -1;
    return is_it_ie;
  }