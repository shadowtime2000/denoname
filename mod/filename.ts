import dirname from "./dirname.ts";

// @ts-ignore: Unreachable code error
export default (meta: ImportMeta): string => /[^/\\]*$/.exec(dirname(meta))[0];
