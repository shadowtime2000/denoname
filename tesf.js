import generate from "https://deno.land/x/denoname/mod.ts";

const { dirname, filename } = generate(import.meta);

console.log(dirname, filename)