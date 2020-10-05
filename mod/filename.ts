import { parse } from "../dep.ts";

export default (meta: ImportMeta): string =>
  parse(meta.url).name + parse(meta.url).ext;
