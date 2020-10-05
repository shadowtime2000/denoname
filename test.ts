import { assert } from "https://deno.land/std/testing/asserts.ts";

import dirname from './mod/dirname.ts';
import filename from './mod/filename.ts';

Deno.test({
  name: ".dirname()",
  fn(): void {
    assert(dirname(import.meta).startsWith("file://"));
  },
});

Deno.test({
  name: ".filename()",
  fn(): void {
    assert(filename(import.meta).endsWith(".ts"))
  }
})