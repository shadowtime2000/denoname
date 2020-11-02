<img src="assets/logo.jpg" align="center" />
<h1 align="center">denoname</h1>
<p align="center">A dead simple way to get the Deno equivalent way of <code>dirname</code> <code>path</code> and <code>filename</code>.</p>

## CDN
You can get this package from [denopkg](https://denopkg.com/shadowtime2000/denoname) or from [deno.land/x](https://deno.land/x/denoname) or from [nest.land](https://nest.land/package/denoname).

### Usage
```typescript
import dirname from "https://x.nest.land/denoname@0.8.2/mod/dirname.ts";
import path from "https://x.nest.land/denoname@0.8.2/mod/path.ts";
import filename from "https://x.nest.land/denoname@0.8.2/mod/filename.ts";

const __dirname = dirname(import.meta);
const __path = path(import.meta);
const __filename = filename(import.meta);
```

You can also generate both of them in one go!

```typescript
import generate from "https://x.nest.land/denoname@0.8.2/mod.ts";

const { dirname, path, filename } = generate(import.meta);
```