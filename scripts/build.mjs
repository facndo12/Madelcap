import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");

function parseEnv(source) {
  const values = {};
  for (const line of source.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const index = trimmed.indexOf("=");
    values[trimmed.slice(0, index)] = trimmed.slice(index + 1);
  }
  return values;
}

async function readEnv() {
  const envPath = path.join(root, ".env");
  if (!existsSync(envPath)) return {};
  return parseEnv(await readFile(envPath, "utf8"));
}

function escapeXml(value) {
  return String(value).replace(/[<>&'"]/g, (char) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    "\"": "&quot;"
  })[char]);
}

function normalizeSiteUrl(value) {
  const raw = String(value || "http://localhost:4173").trim().replace(/\/$/, "");

  let url;
  try {
    url = new URL(raw);
  } catch {
    throw new Error(`SITE_URL must be an absolute URL. Received: ${raw}`);
  }

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("SITE_URL must use http or https.");
  }

  url.hash = "";
  url.search = "";
  return url.toString().replace(/\/$/, "");
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

await cp(path.join(root, "public"), dist, { recursive: true });
await cp(path.join(root, "src", "styles.css"), path.join(dist, "styles.css"));
await cp(path.join(root, "src", "main.js"), path.join(dist, "main.js"));

let html = await readFile(path.join(root, "index.html"), "utf8");
const env = await readEnv();
const siteUrl = normalizeSiteUrl(env.SITE_URL);
html = html.replaceAll("%SITE_URL%", siteUrl);
await writeFile(path.join(dist, "index.html"), html);

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
await writeFile(path.join(dist, "robots.txt"), robots);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${escapeXml(siteUrl)}/</loc>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`;
await writeFile(path.join(dist, "sitemap.xml"), sitemap);

console.log(`Built static site in ${dist}`);
