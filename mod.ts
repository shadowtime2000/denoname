import dirname from "./mod/dirname.ts";
import filename from "./mod/filename.ts";

export default function generate(meta: ImportMeta) {
  return {
    dirname: dirname(meta),
    filename: filename(meta),
  };
}
