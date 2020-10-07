import { assert } from "https://deno.land/std/testing/asserts.ts";
import filename from "./filename.ts";

Deno.test({
    name: ".filename()",
    fn(): void {
        const __filename = filename(import.meta);
        assert(__filename === "filename_test.ts");
    }
})