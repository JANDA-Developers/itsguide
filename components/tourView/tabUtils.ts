
export const tabCheck = (scrollY:number,index:number) => {

    if (typeof window === "undefined") return;
    const scrollCurrent = scrollY - window.innerHeight;
    const tab = getTab(index);
    const tabNext = getTab(index + 1);
    const tabHeight = tab?.offsetTop || 0;
    const nextHeight = tabNext?.offsetTop || 99999;

    if (index === 1 && scrollCurrent < nextHeight) return "on"

    if (scrollCurrent > tabHeight && scrollCurrent < nextHeight) {
      return "on"
    } else {
      return undefined;
    }
    
}

export const getTab = (index: number) => {
  return document.getElementById(`tap__0${index}`);
}

export const handleTab = (index: number) => () => {
  const tab = getTab(index);
  tab.scrollIntoView();
}