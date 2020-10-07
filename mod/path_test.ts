import { assert } from "https://deno.land/std/testing/asserts.ts";
import path from "./path.ts";

Deno.test({
  name: ".path()",
  fn(): void {
    const __path = path(import.meta);
    assert(!__path.startsWith("file:///"));
    assert(/[\\|//]/.test(__path));
  },
});
