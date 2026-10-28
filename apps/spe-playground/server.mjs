// Copyright (c) Microsoft Corporation. Licensed under the MIT license.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const assets = new Map([
  ["/", ["index.html", "text/html; charset=utf-8"]],
  ["/index.html", ["index.html", "text/html; charset=utf-8"]],
  ["/styles.css", ["styles.css", "text/css; charset=utf-8"]],
  ["/app.mjs", ["app.mjs", "text/javascript; charset=utf-8"]],
  ["/engine.mjs", ["engine.mjs", "text/javascript; charset=utf-8"]],
]);
const headers = {
  "Cache-Control": "no-store",
  "Content-Security-Policy": "default-src 'none'; script-src 'self'; style-src 'self'; connect-src 'none'; img-src 'none'; font-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; object-src 'none'",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "no-referrer",
  "Cross-Origin-Resource-Policy": "same-origin",
};

function reply(request, response, status, type, body, extraHeaders = {}) {
  response.writeHead(status, { ...headers, "Content-Type": type, "Content-Length": Buffer.byteLength(body), ...extraHeaders });
  response.end(request.method === "HEAD" ? undefined : body);
}

export function createStaticServer() {
  return createServer(async (request, response) => {
    if (!["GET", "HEAD"].includes(request.method)) {
      reply(request, response, 405, "text/plain; charset=utf-8", "Static assets only. No API operations are served.\n", { Allow: "GET, HEAD" });
      return;
    }
    const asset = assets.get(request.url);
    if (!asset) {
      reply(request, response, 404, "text/plain; charset=utf-8", "Not found. This server serves only the playground frontend assets.\n");
      return;
    }
    let body;
    try {
      body = await readFile(new URL(asset[0], import.meta.url));
    } catch (error) {
      console.error("Playground asset could not be read:", error);
      reply(request, response, 500, "text/plain; charset=utf-8", "The frontend asset could not be read. See the server error.\n");
      return;
    }
    reply(request, response, 200, asset[1], body);
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const value = process.argv[2] ?? "4173";
  if (process.argv.length > 3 || !/^\d+$/.test(value) || Number(value) < 1024 || Number(value) > 65535) {
    console.error("Usage: node apps/spe-playground/server.mjs [port: 1024-65535]");
    process.exitCode = 1;
  } else {
    const server = createStaticServer();
    server.on("error", (error) => {
      console.error("Static server could not start:", error.message);
      process.exitCode = 1;
    });
    server.listen(Number(value), "127.0.0.1", () => {
      console.log(`Demo frontend: http://127.0.0.1:${server.address().port}`);
      console.log("Static assets only. No API backend, sign-in, or Graph connection.");
    });
  }
}
