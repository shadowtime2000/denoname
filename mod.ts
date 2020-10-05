import dirname from './mod/dirname.ts';
import path from "./mod/path.ts";
import filename from "./mod/filename.ts";

export default function generate(
  meta: ImportMeta,
): { dirname: string; path: string; filename: string } {
  return {
    dirname: dirname(meta),
    path: path(meta),
    filename: filename(meta),
  };
}
