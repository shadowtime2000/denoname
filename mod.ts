import path from "./mod/path.ts";
import filename from "./mod/filename.ts";

export default function generate(
  meta: ImportMeta,
): { path: string; filename: string } {
  return {
    path: path(meta),
    filename: filename(meta),
  };
}
