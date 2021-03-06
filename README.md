<img src="assets/logo.jpg" align="center" />
<h1 align="center">denoname</h1>
<p align="center">A dead simple way to get the Deno equivalent of <code>dirname</code> <code>path</code> and <code>filename</code>.</p>
<p align="center">
    <span align="center"><a href="https://deno.land/x/denoname"><img src="https://img.shields.io/badge/deno-module-informational?logo=deno" /></a></span>
    <span align="center"><a href="https://nest.land/package/denoname"><img src="https://nest.land/badge.svg" /></a></span>
    <span align="center"><img src="https://img.shields.io/github/license/shadowtime2000/denoname" /></span>
</p>

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
