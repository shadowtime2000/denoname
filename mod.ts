import dirname from "./mod/dirname.ts";
import path from "./mod/path.ts";
import filename from "./mod/filename.ts";
import { Output } from "./mod/output.ts";

export default function generate(
  meta: ImportMeta,
): Output {
  return {
    dirname: dirname(meta),
    path: path(meta),
    filename: filename(meta),
  };
}
