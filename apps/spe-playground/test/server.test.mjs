// Copyright (c) Microsoft Corporation. Licensed under the MIT license.
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { request } from "node:http";
import { once } from "node:events";
import { readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { createStaticServer } from "../server.mjs";

let server;
let port;

before(async () => {
  server = createStaticServer();
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  port = server.address().port;
});

after(async () => {
  server.close();
  await once(server, "close");
});

function get(path, method = "GET") {
  return new Promise((resolve, reject) => {
    // CLI checks can outlive pooled sockets; each assertion needs its own connection.
    const req = request({ host: "127.0.0.1", port, path, method, agent: false, timeout: 5000 }, (response) => {
      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("error", reject);
      response.on("end", () => resolve({
        status: response.statusCode, headers: response.headers, body: Buffer.concat(chunks).toString("utf8"),
      }));
    });
    req.on("error", reject);
    req.on("timeout", () => req.destroy(new Error("Static server did not respond")));
    req.end();
  });
}

for (const [path, file, contentType] of [
  ["/", "index.html", "text/html"],
  ["/index.html", "index.html", "text/html"],
  ["/styles.css", "styles.css", "text/css"],
  ["/app.mjs", "app.mjs", "text/javascript"],
  ["/engine.mjs", "engine.mjs", "text/javascript"],
]) {
  test(`serves the real ${path} asset, with network-blocking security headers`, async () => {
    const result = await get(path);
    assert.equal(result.status, 200);
    assert.ok(result.headers["content-type"].startsWith(contentType));
    assert.equal(result.body, await readFile(new URL(`../${file}`, import.meta.url), "utf8"));
    assert.equal(Number(result.headers["content-length"]), Buffer.byteLength(result.body));
    assert.match(result.headers["content-security-policy"], /connect-src 'none'/);
    assert.match(result.headers["content-security-policy"], /frame-ancestors 'none'/);
    assert.equal(result.headers["x-content-type-options"], "nosniff");
    assert.equal(result.headers["cache-control"], "no-store");
    assert.equal(result.headers["referrer-policy"], "no-referrer");
    assert.equal(result.headers["cross-origin-resource-policy"], "same-origin");
    assert.equal(result.headers.connection, "close");
    assert.equal(result.headers["access-control-allow-origin"], undefined);
  });
}

test("HEAD serves asset metadata but no body", async () => {
  const result = await get("/", "HEAD");
  assert.equal(result.status, 200);
  assert.equal(result.body, "");
  assert.ok(Number(result.headers["content-length"]) > 0);
});

for (const path of [
  "/storage/fileStorage/containers?$filter=containerTypeId%20eq%20demo-container-type",
  "/storage/fileStorage/containers/demo-container-1",
  "/api/containers",
  "/README.md",
  "/server.mjs",
  "/test/engine.test.mjs",
  "/../LICENSE-CODE",
  "/%2e%2e/LICENSE-CODE",
  "/styles.css/../../LICENSE-CODE",
  "/%2findex.html",
  "//index.html",
  "/index.html?unexpected=true",
  "/favicon.ico",
]) {
  test(`does not expose APIs, source outside the asset allowlist, or traversal: ${path}`, async () => {
    const result = await get(path);
    assert.equal(result.status, 404);
    assert.match(result.body, /only the playground frontend assets/);
    assert.ok(!result.body.includes("The MIT License"));
  });
}

for (const method of ["POST", "PUT", "PATCH", "DELETE", "OPTIONS"]) {
  test(`rejects ${method}; the server is never a simulated API backend`, async () => {
    const result = await get("/storage/fileStorage/containers", method);
    assert.equal(result.status, 405);
    assert.equal(result.headers.allow, "GET, HEAD");
    assert.match(result.body, /No API operations/);
  });
}

test("HEAD failure responses also have no body", async () => {
  const result = await get("/not-an-asset", "HEAD");
  assert.equal(result.status, 404);
  assert.equal(result.body, "");
});

test("CLI rejects invalid ports instead of binding a shared interface or silently falling back", () => {
  for (const value of ["0", "80", "65536", "abc", "4173.5", "127.0.0.1:4173"]) {
    const result = spawnSync(process.execPath, [new URL("../server.mjs", import.meta.url).pathname, value], { encoding: "utf8", timeout: 5000 });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /Usage:/);
    assert.equal(result.stdout, "");
  }
});

test("frontend declares local-only assets, labelled editors and accessible result/status regions", async () => {
  const html = (await get("/")).body;
  assert.match(html, /<html lang="en">/);
  assert.match(html, /connect-src 'none'/);
  assert.match(html, /script type="module" src="\.\/app\.mjs"/);
  assert.match(html, /href="\.\/styles\.css"/);
  assert.ok(!/<(?:script|link|img|iframe|source)\b[^>]*(?:src|href)\s*=\s*["'](?:https?:)?\/\//i.test(html));
  for (const id of ["method", "path", "body"]) {
    assert.ok(html.includes(`label for="${id}"`));
    assert.ok(html.includes(`id="${id}"`));
  }
  assert.match(html, /role="status" aria-live="polite"/);
  assert.match(html, /role="alert" tabindex="-1"/);
  assert.match(html, /id="run" type="button" disabled/);
  assert.match(html, /V2 is a future authorized integration, not a mode switch/);
  assert.match(html, /identifiers are invalid for Live use/);
  assert.match(html, /<noscript>/);
});

test("UI code renders learner content as text and exposes no network or destructive storage calls", async () => {
  const app = (await get("/app.mjs")).body;
  const engine = (await get("/engine.mjs")).body;
  for (const source of [app, engine]) {
    assert.ok(!/\b(?:innerHTML|outerHTML|insertAdjacentHTML|eval|XMLHttpRequest|WebSocket|EventSource)\b/.test(source));
    assert.ok(!/\bfetch\s*\(/.test(source));
    assert.ok(!/localStorage\.clear\s*\(/.test(source));
  }
  assert.match(app, /textContent/);
  assert.match(app, /addEventListener\("submit", \(event\) => event\.preventDefault\(\)\)/);
  assert.match(app, /byId\("run"\)\.addEventListener\("click"/);
});
