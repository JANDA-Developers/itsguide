export const reorder = <T>(list: T[], startIndex: number, endIndex: number) => {
    const copy = [...list];
    console.log({ copy });
    const moveTarget = copy[startIndex];
    const replacedTarget = copy[endIndex];
    copy.splice(endIndex, 1, moveTarget);
    console.log(copy.length);
    copy.splice(startIndex, 1, replacedTarget);
    console.log(copy.length);
    console.log({ endIndex });
    console.log({ list });
    console.log({ copy });
    return copy;
};
