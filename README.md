# denoname
A dead simple way to get the Deno equivalent way of dirname and filename.

## CDN
You can get this package from a raw Github CDN or from [deno.land/x](https://deno.land/x/denoname@latest).

### Usage
```typescript
import dirname from "https://deno.land/x/denoname/mod/dirname.ts";
import filename from "https://deno.land/x/denoname/mod/filename.ts";

const __dirname = dirname(import.meta);
const __filename = filename(import.meta);
```

You can also generate both of them in one go!

```typescript
import generate from "https://deno.land/x/denoname/mod.ts";

const { dirname, filename } = generate(import.meta);
```