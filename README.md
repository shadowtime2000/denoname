# denoname
A dead simple way to get the Deno equivalent way of dirname and filename.

## CDN
You can get this package from a raw Github CDN or from [deno.land/x](https://deno.land/x/denoname@latest).

### Usage
```typescript
import dirname from "https://raw.githubusercontent.com/shadowtime2000/denoname/master/mod/dirname.ts";
import filename from "https://raw.githubusercontent.com/shadowtime2000/denoname/master/mod/filename.ts";

const __dirname = dirname(import.meta);
const __filename = filename(import.meta);
```