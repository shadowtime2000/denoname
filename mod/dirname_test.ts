import { assert } from "https://deno.land/std/testing/asserts.ts";
import dirname from "./dirname.ts";

Deno.test({
    name: ".dirname()",
    fn(): void {
        const __dirname = dirname(import.meta);
        assert(__dirname.includes("mod/"));
        assert(/[\\|//]/.test(__dirname));
    }
})