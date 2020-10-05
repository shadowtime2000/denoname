import { assert } from "https://deno.land/std/testing/asserts.ts";

import path from "./mod/path.ts";
import filename from "./mod/filename.ts";

import generate from "./mod.ts";

const __path = path(import.meta);
const __filename = filename(import.meta);

const { path: pat, filename: file } = generate(import.meta);

function dirnameTest(d: string): void {
  assert(!d.startsWith("file:///"));
  assert(/[\\|//]/.test(d));
}

function filenameTest(f: string): void {
  assert(f.endsWith(".ts"));
  assert(f === "test.ts");
}

Deno.test({
  name: ".path()",
  fn(): void {
    dirnameTest(__path);
  },
});

Deno.test({
  name: ".filename()",
  fn(): void {
    filenameTest(__filename);
  },
});

Deno.test({
  name: ".generate()",
  fn(): void {
    dirnameTest(pat);
    filenameTest(file);
  },
});
