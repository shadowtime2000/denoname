import { assert, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import path from "./path.ts";

Deno.test({
  name: ".path()",
  fn(): void {
    const __path = path(import.meta);
    assert(!__path.startsWith("file:///"));
    assert(/[\\|//]/.test(__path));
    assertThrows(
      () => path({ url: "https://foo.bar", main: false }),
      Error,
      "You should not be using this in a hosted a script!",
    );
  },
});
