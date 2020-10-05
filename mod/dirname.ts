import path from "./path.ts";

// @ts-ignore: Unreachable code error
export default (meta: ImportMeta): string => /^(.*[\\\/])/.exec(path(meta))[0];
