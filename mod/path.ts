export default (meta: ImportMeta): string => {
    if (meta.url.startsWith("file:///")) return meta.url.slice(8, meta.url.length);
    else {
        throw new Error("You should not be using this in a hosted a script!");
    }
};
