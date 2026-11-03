// Copyright (c) Microsoft Corporation. Licensed under the MIT license.
import { spawn } from "node:child_process";
import { EventEmitter, once } from "node:events";
import { mkdtemp, rm } from "node:fs/promises";
import { createStaticServer } from "../server.mjs";

export async function startBrowser() {
  const profile = await mkdtemp(new URL(".chrome-", import.meta.url));
  const server = createStaticServer();
  const child = spawn(process.env.CHROME_BIN ?? "google-chrome", [
    "--headless=new", "--remote-debugging-pipe", `--user-data-dir=${profile}`,
    "--no-first-run", "--no-default-browser-check", "--disable-background-networking",
    "--disable-component-update", "--disable-sync", "--disable-extensions",
    "--disable-default-apps", "--no-proxy-server", "--no-sandbox", "about:blank",
  ], { stdio: ["ignore", "ignore", "pipe", "pipe", "pipe"] });
  const events = new EventEmitter();
  const pending = new Map();
  let serial = 0;
  let buffer = "";
  let stderr = "";
  let failure;
  child.stderr.setEncoding("utf8").on("data", (chunk) => { stderr = (stderr + chunk).slice(-4000); });
  function fail(error) {
    failure = error;
    for (const { reject } of pending.values()) reject(error);
    pending.clear();
  }
  const exited = new Promise((resolve) => {
    child.once("error", (error) => { fail(error); resolve(); });
    child.once("close", (code, signal) => {
      fail(new Error(`Chrome exited (${signal ?? code}): ${stderr}`));
      resolve();
    });
  });
  child.stdio[3].on("error", fail);
  child.stdio[4].setEncoding("utf8").on("data", (chunk) => {
    buffer += chunk;
    let end;
    while ((end = buffer.indexOf("\0")) !== -1) {
      const message = JSON.parse(buffer.slice(0, end));
      buffer = buffer.slice(end + 1);
      if (message.id) {
        const request = pending.get(message.id);
        pending.delete(message.id);
        if (message.error) request?.reject(new Error(`${request.method}: ${message.error.message}`));
        else request?.resolve(message.result);
      } else {
        events.emit("message", message);
      }
    }
  });
  function send(method, params = {}, sessionId) {
    if (failure) return Promise.reject(failure);
    const id = ++serial;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.delete(id);
        reject(new Error(`Chrome timed out: ${method}\n${stderr}`));
      }, 30000);
      const finish = (callback) => (value) => { clearTimeout(timer); callback(value); };
      pending.set(id, { method, resolve: finish(resolve), reject: finish(reject) });
      child.stdio[3].write(`${JSON.stringify({ id, method, params, sessionId })}\0`);
    });
  }
  async function close() {
    try {
      if (!failure) await send("Browser.close");
    } finally {
      if (child.pid && child.exitCode === null && child.signalCode === null) child.kill();
      await exited;
      try {
        if (server.listening) await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
      } finally {
        await rm(profile, { recursive: true, force: true });
      }
    }
  }
  try {
    await send("Browser.getVersion");
    server.listen(0, "127.0.0.1");
    await once(server, "listening");
  } catch (error) {
    fail(error);
    await close();
    throw error;
  }
  const origin = `http://127.0.0.1:${server.address().port}`;
  return {
    close,
    origin,
    async page(t, { javascript = true, initialization = "", width = 1440, browserContextId } = {}) {
      if (!browserContextId) {
        ({ browserContextId } = await send("Target.createBrowserContext"));
        t.after(() => send("Target.disposeBrowserContext", { browserContextId }));
      }
      const { targetId } = await send("Target.createTarget", { url: "about:blank", browserContextId });
      const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
      const command = (method, params) => send(method, params, sessionId);
      const observed = [];
      const listener = (message) => { if (message.sessionId === sessionId) observed.push(message); };
      events.on("message", listener);
      t.after(() => events.off("message", listener));
      for (const domain of ["Page", "Runtime", "Network", "DOMStorage", "Log"]) await command(`${domain}.enable`);
      await command("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: false });
      await command("Emulation.setScriptExecutionDisabled", { value: !javascript });
      if (initialization) await command("Page.addScriptToEvaluateOnNewDocument", { source: initialization });
      const evaluate = async (action, ...args) => {
        const result = await command("Runtime.evaluate", {
          expression: `(${action})(...${JSON.stringify(args)})`, awaitPromise: true, returnByValue: true,
        });
        if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description ?? result.exceptionDetails.text);
        return result.result.value;
      };
      const loaded = new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          events.off("message", onLoad);
          reject(new Error("Playground load timed out"));
        }, 30000);
        function onLoad(message) {
          if (message.sessionId !== sessionId || message.method !== "Page.loadEventFired") return;
          clearTimeout(timer);
          events.off("message", onLoad);
          resolve();
        }
        events.on("message", onLoad);
      });
      await command("Page.navigate", { url: origin });
      await loaded;
      const click = async (selector, index = 0) => {
        const point = await evaluate((selector, index) => {
          const element = document.querySelectorAll(selector)[index];
          element.scrollIntoView({ block: "center" });
          const rect = element.getBoundingClientRect();
          return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
        }, selector, index);
        await command("Input.dispatchMouseEvent", { type: "mousePressed", ...point, button: "left", clickCount: 1 });
        await command("Input.dispatchMouseEvent", { type: "mouseReleased", ...point, button: "left", clickCount: 1 });
      };
      const press = async (key, code, windowsVirtualKeyCode, modifiers = 0) => {
        const params = { key, code, windowsVirtualKeyCode, modifiers };
        await command("Input.dispatchKeyEvent", {
          type: "keyDown", ...params, ...(key === "Enter" ? { text: "\r", unmodifiedText: "\r" } : {}),
        });
        await command("Input.dispatchKeyEvent", { type: "keyUp", ...params });
      };
      return {
        command, evaluate, observed, click, press, browserContextId,
        async fill(selector, value) {
          await click(selector);
          await press("a", "KeyA", 65, 2);
          await press("Backspace", "Backspace", 8);
          if (value) await command("Input.insertText", { text: value });
        },
      };
    },
  };
}
