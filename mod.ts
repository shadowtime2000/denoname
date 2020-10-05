import dirname from "./mod/dirname.ts";
import filename from "./mod/filename.ts";

export default function generate(
  meta: ImportMeta,
): { dirname: string; filename: string } {
  return {
    dirname: dirname(meta),
    filename: filename(meta),
  };
}
