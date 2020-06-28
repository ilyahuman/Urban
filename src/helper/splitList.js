export const splitList = (list, chunkSize) => {
    return list.map((item, i) => {
        return i % chunkSize === 0 ? list.slice(i, i + chunkSize) : null;
    }).filter(e => { return e; });
};
