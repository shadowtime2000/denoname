<img src="assets/logo.jpg" align="center" />
<h1 align="center">denoname</h1>
<p align="center">A dead simple way to get the Deno equivalent way of dirname and filename.</p>

## CDN
You can get this package from [denopkg](https://denopkg.com/shadowtime2000/denoname) or from [deno.land/x](https://deno.land/x/denoname).

### Usage
```typescript
import dirname from "https://deno.land/x/denoname/mod/dirname.ts";
import path from "https://deno.land/x/denoname/mod/path.ts";
import filename from "https://deno.land/x/denoname/mod/filename.ts";

const __dirname = dirname(import.meta);
const __path = path(import.meta);
const __filename = filename(import.meta);
```

You can also generate both of them in one go!

```typescript
import generate from "https://deno.land/x/denoname/mod.ts";

const { dirname, path, filename } = generate(import.meta);
```