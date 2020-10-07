export default (meta: ImportMeta): string => {
    if (meta.url.startsWith("file:///")) return meta.url.slice(8, meta.url.length);
    else if (meta.url.startsWith("http://")) return meta.url.slice(7, meta.url.length);
    else if (meta.url.startsWith("https://")) return meta.url.slice(8, meta.url.length);
    else if (true) return meta.url;
};
