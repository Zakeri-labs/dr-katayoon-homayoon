// Generates dist/client/index.html so static hosts (e.g. Vercel) can serve the SPA.
// TanStack Start's build does not emit a client HTML shell on its own.
import { readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const clientDir = "dist/client";
const assetsDir = join(clientDir, "assets");

if (!existsSync(assetsDir)) {
  console.error(`[generate-spa-html] ${assetsDir} not found — did the build run?`);
  process.exit(1);
}

const files = readdirSync(assetsDir);

// Find the entry JS (small index-*.js that imports the big vendor chunk).
const indexJsFiles = files.filter((f) => /^index-.*\.js$/.test(f));
if (indexJsFiles.length === 0) {
  console.error("[generate-spa-html] no index-*.js entry found");
  process.exit(1);
}
// Use the smallest one as the entry (it imports the vendor chunk).
const entryJs = indexJsFiles
  .map((f) => ({ f, size: readdirSync(assetsDir, { withFileTypes: false }) && require("node:fs").statSync(join(assetsDir, f)).size }))
  .sort((a, b) => a.size - b.size)[0].f;

const cssFile = files.find((f) => /\.css$/.test(f));

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Dr. Katayoon Homayoon — Gastroenterology & Hepatology, Dubai</title>
    <meta name="description" content="Modern medicine. Human care. Specialist gastroenterology and liver care in Dubai with advanced diagnostics, preventive medicine and concierge programs." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300&family=Inter:wght@300;400;500;600&family=Vazirmatn:wght@300;400;500;600;700&family=Tajawal:wght@300;400;500;700&display=swap" />
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ""}
    <script type="module" src="/assets/${entryJs}"></script>
  </head>
  <body></body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html);
console.log(`[generate-spa-html] wrote ${clientDir}/index.html (entry=${entryJs}, css=${cssFile ?? "none"})`);
