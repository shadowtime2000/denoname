import { assert } from "https://deno.land/std/testing/asserts.ts";

import dirname from './mod/dirname.ts';
import path from "./mod/path.ts";
import filename from "./mod/filename.ts";

import generate from "./mod.ts";

const __dirname = dirname(import.meta)
const __path = path(import.meta);
const __filename = filename(import.meta);

const { dirname: dir, path: pat, filename: file } = generate(import.meta);

function dirnameTest(d: string): void {
  assert(!d.endsWith("test.ts"));
}

function pathTest(p: string): void {
  assert(!p.startsWith("file:///"));
  assert(/[\\|//]/.test(p));
}

function filenameTest(f: string): void {
  assert(f.endsWith(".ts"));
  assert(f === "test.ts");
}

Deno.test({
  name: ".dirname()",
  fn(): void {
    dirnameTest(__dirname)
  }
})

Deno.test({
  name: ".path()",
  fn(): void {
    pathTest(__path);
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
    dirnameTest(dir);
    pathTest(pat);
    filenameTest(file);
  },
});
