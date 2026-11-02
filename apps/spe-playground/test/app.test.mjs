// Copyright (c) Microsoft Corporation. Licensed under the MIT license.
import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { DemoEngine, createSeedState, STORAGE_KEY, LIST_PATH, COLLECTION_PATH, CONTAINER_TYPE } from "../engine.mjs";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

class StorageFixture {
  data = new Map([["another-app", "keep me"]]);
  writes = [];
  failRead = false;
  failWrite = false;

  getItem(key) {
    if (this.failRead) throw new Error("Storage read denied");
    return this.data.get(key) ?? null;
  }

  setItem(key, value) {
    if (this.failWrite) throw new Error("Storage write denied");
    this.writes.push(key);
    this.data.set(key, value);
  }
}

// A narrow DOM/event fixture for controller integration, not a browser or layout test.
class ElementFixture extends EventTarget {
  children = [];
  attributes = new Map();
  dataset = {};
  value = "";
  disabled = false;
  hidden = false;
  #text = "";

  constructor(tagName, document) {
    super();
    this.tagName = tagName.toUpperCase();
    this.document = document;
  }

  set textContent(value) {
    this.#text = String(value);
    this.children = [];
  }

  get textContent() {
    return this.#text + this.children.map((child) => child.textContent).join("");
  }

  setAttribute(name, value) {
    this.attributes.set(name, value);
  }

  getAttribute(name) {
    return this.attributes.get(name) ?? null;
  }

  append(...children) {
    this.children.push(...children);
  }

  replaceChildren(...children) {
    this.#text = "";
    this.children = [...children];
  }

  focus() {
    this.document.activeElement = this;
  }

  click() {
    if (!this.disabled) this.dispatchEvent(new Event("click"));
  }
}

function documentFixture() {
  const elements = new Map();
  const examples = [];
  const document = {
    activeElement: null,
    createElement: (tag) => new ElementFixture(tag, document),
    getElementById: (id) => elements.get(id) ?? null,
    querySelectorAll: (selector) => {
      assert.equal(selector, "[data-example]");
      return examples;
    },
  };
  // Use the real markup's IDs, defaults, and example controls so wiring omissions fail.
  for (const match of html.matchAll(/<([a-z][\w-]*)\b([^>]*)>/gi)) {
    const [, tag, attributes] = match;
    const id = /\bid="([^"]+)"/.exec(attributes)?.[1];
    const example = /\bdata-example="([^"]+)"/.exec(attributes)?.[1];
    if (!id && !example) continue;
    const element = document.createElement(tag);
    element.hidden = /\bhidden\b/.test(attributes);
    element.disabled = /\bdisabled\b/.test(attributes);
    element.value = /\bvalue="([^"]*)"/.exec(attributes)?.[1] ?? "";
    if (tag === "textarea") element.value = html.slice(match.index + match[0].length).split("</textarea>")[0];
    if (id) elements.set(id, element);
    if (example) {
      element.dataset.example = example;
      examples.push(element);
    }
  }
  return document;
}

let instance = 0;
async function mount(t, storage = new StorageFixture(), { denyAccess = false } = {}) {
  const previousDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  const previousWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  t.after(() => {
    if (previousDocument) Object.defineProperty(globalThis, "document", previousDocument);
    else delete globalThis.document;
    if (previousWindow) Object.defineProperty(globalThis, "window", previousWindow);
    else delete globalThis.window;
  });
  const document = documentFixture();
  const window = new EventTarget();
  Object.defineProperty(window, "localStorage", {
    get() {
      if (denyAccess) throw new Error("Storage access denied");
      return storage;
    },
  });
  Object.defineProperty(globalThis, "document", { value: document, configurable: true });
  Object.defineProperty(globalThis, "window", { value: window, configurable: true });
  await import(`../app.mjs?controller-test=${++instance}`);
  const byId = document.getElementById;
  return {
    document, window, storage, byId,
    cards: () => byId("matter-list").children,
    saved: () => JSON.parse(storage.getItem(STORAGE_KEY)),
    draft: () => Object.fromEntries(["method", "path", "body"].map((id) => [id, byId(id).value])),
    example: (name) => document.querySelectorAll("[data-example]").find((button) => button.dataset.example === name).click(),
    run: () => byId("run").click(),
  };
}

function assertCardsMatchState(app) {
  const state = app.saved();
  assert.deepEqual(app.cards().map((card) => ({
    displayName: card.children[0].textContent,
    description: card.children[1].textContent,
    id: card.children[2].textContent,
  })), state.containers.map(({ displayName, description, id }) => ({ displayName, description, id })));
  assert.deepEqual(JSON.parse(app.byId("state").textContent), state);
}

test("controller initializes matter cards from the real engine seed without executing a request", async (t) => {
  const app = await mount(t);
  assertCardsMatchState(app);
  assert.equal(app.cards().length, 1);
  assert.match(app.byId("matter-count").textContent, /^1 synthetic matter workspace in Demo storage/);
  assert.match(app.byId("parsed").textContent, /No request has run/);
  assert.equal(app.byId("run").disabled, false);
  assert.equal(app.byId("matter-unavailable").hidden, true);
  assert.deepEqual(app.storage.writes, [STORAGE_KEY]);
});

test("selecting a matter only prepares its exact bodyless read and focuses the inspector", async (t) => {
  const app = await mount(t);
  const before = app.saved();
  const response = app.byId("response").textContent;
  const button = app.cards()[0].children[3];
  assert.equal(button.getAttribute("aria-label"), "Prepare read request for Demo workspace");
  button.click();
  assert.deepEqual(app.draft(), { method: "GET", path: `${COLLECTION_PATH}/demo-container-1`, body: "" });
  assert.equal(app.document.activeElement, app.byId("request-heading"));
  assert.match(app.byId("status").textContent, /Nothing ran/);
  assert.equal(app.byId("response").textContent, response);
  assert.deepEqual(app.saved(), before);
  assert.equal(app.storage.writes.length, 1);
  app.run();
  assert.deepEqual(JSON.parse(app.byId("response").textContent), before.containers[0]);
  assert.equal(app.storage.writes.length, 1);
});

test("prepare, edit, Run, observe connects a real create draft to a new persisted matter card", async (t) => {
  const app = await mount(t);
  app.example("create");
  assert.equal(app.cards().length, 1);
  assert.equal(app.storage.writes.length, 1);
  assert.equal(app.draft().method, "POST");
  assert.equal(app.draft().path, COLLECTION_PATH);
  assert.deepEqual(Object.keys(JSON.parse(app.draft().body)).sort(), ["containerTypeId", "description", "displayName"]);
  const body = { displayName: "Synthetic maintenance agreement", description: "Invented contract matter.", containerTypeId: CONTAINER_TYPE };
  app.byId("body").value = JSON.stringify(body);
  app.byId("body").dispatchEvent(new Event("input"));
  assert.equal(app.storage.writes.length, 1);
  app.run();
  assertCardsMatchState(app);
  assert.equal(app.cards().length, 2);
  assert.deepEqual(JSON.parse(app.byId("parsed").textContent), { method: "POST", path: COLLECTION_PATH, body });
  assert.deepEqual(JSON.parse(app.byId("response").textContent), { id: "demo-container-2", ...body });
  assert.match(app.byId("response-status").textContent, /Illustrative status 201.*synthetic/);
  assert.match(app.byId("effect").textContent, /Created demo-container-2/);
  assert.match(app.byId("matter-count").textContent, /^2 synthetic matter workspaces/);
  assert.equal(app.document.activeElement, app.byId("result-heading"));
  assert.equal(app.storage.getItem("another-app"), "keep me");
  assert.ok(app.storage.writes.every((key) => key === STORAGE_KEY));
  app.cards()[1].children[3].click();
  assert.deepEqual(app.draft(), { method: "GET", path: `${COLLECTION_PATH}/demo-container-2`, body: "" });
  assert.equal(app.storage.writes.length, 2);
  app.run();
  assert.deepEqual(JSON.parse(app.byId("response").textContent), { id: "demo-container-2", ...body });
  assert.equal(app.storage.writes.length, 2);
});

test("all recipe controls only prepare drafts, including Enter submission and malformed draft editing", async (t) => {
  const app = await mount(t);
  for (const button of app.document.querySelectorAll("[data-example]")) {
    button.click();
    assert.equal(app.cards().length, 1);
    assert.equal(app.storage.writes.length, 1);
    assert.match(app.byId("parsed").textContent, /No request has run/);
  }
  app.byId("body").value = "{";
  app.byId("body").dispatchEvent(new Event("change"));
  const event = new Event("submit", { cancelable: true });
  assert.equal(app.byId("request-form").dispatchEvent(event), false);
  assert.equal(event.defaultPrevented, true);
  assert.equal(app.byId("error").hidden, true);
  assert.equal(app.storage.writes.length, 1);
});

test("cards reload all saved engine containers, without persisting draft or guide state", async (t) => {
  const storage = new StorageFixture();
  const engine = new DemoEngine(storage);
  engine.initialize();
  for (const displayName of ["Synthetic review matter", "Synthetic renewal matter"]) {
    engine.run({ method: "POST", path: COLLECTION_PATH, body: JSON.stringify({ displayName, description: "", containerTypeId: CONTAINER_TYPE }) });
  }
  storage.writes = [];
  const app = await mount(t, storage);
  assertCardsMatchState(app);
  assert.equal(app.cards().length, 3);
  assert.deepEqual(app.draft(), { method: "GET", path: LIST_PATH, body: "" });
  assert.deepEqual(storage.writes, []);
  assert.deepEqual([...storage.data.keys()].sort(), ["another-app", STORAGE_KEY].sort());
  app.cards()[2].children[3].click();
  assert.equal(app.byId("path").value, `${COLLECTION_PATH}/demo-container-3`);
});

test("matter content is literal text in explicitly constructed elements and accessible labels", async (t) => {
  const app = await mount(t);
  const name = '<script>alert("not executable")</script>';
  const description = '<img src=x onerror="not executable"> & text';
  app.example("create");
  app.byId("body").value = JSON.stringify({ displayName: name, description, containerTypeId: CONTAINER_TYPE });
  app.run();
  const card = app.cards()[1];
  assert.deepEqual(card.children.map((element) => element.tagName), ["H4", "P", "CODE", "BUTTON"]);
  assert.equal(card.children[0].textContent, name);
  assert.equal(card.children[1].textContent, description);
  assert.equal(card.children[3].getAttribute("aria-label"), `Prepare read request for ${name}`);
  assert.equal(card.children[0].children.length, 0);
  assert.equal(card.children[1].children.length, 0);
  assertCardsMatchState(app);
});

for (const [name, draft, code, hasParsed] of [
  ["invalid JSON", { method: "POST", path: COLLECTION_PATH, body: "{" }, "InvalidJson", false],
  ["unsupported option", { method: "GET", path: `${LIST_PATH}&$top=1`, body: "" }, "UnsupportedQuery", true],
  ["missing matter", { method: "GET", path: `${COLLECTION_PATH}/demo-container-99`, body: "" }, "ContainerNotFound", true],
  ["unsupported file API", { method: "GET", path: "/drives/demo-container-1/root/children", body: "" }, "UnsupportedPath", true],
]) {
  test(`controller replaces prior success with labelled ${name} failure and leaves cards/state unchanged`, async (t) => {
    const app = await mount(t);
    app.run();
    assert.match(app.byId("response-status").textContent, /Illustrative status 200/);
    const before = app.saved();
    for (const [id, value] of Object.entries(draft)) app.byId(id).value = value;
    app.run();
    assert.equal(JSON.parse(app.byId("response").textContent).error.code, code);
    assert.match(app.byId("response-status").textContent, /No HTTP status or Microsoft Graph response/);
    assert.match(app.byId("effect").textContent, /No Demo state change was committed/);
    assert.equal(app.byId("error").hidden, false);
    assert.equal(app.document.activeElement, app.byId("error"));
    if (hasParsed) assert.equal(JSON.parse(app.byId("parsed").textContent).path, draft.path);
    else assert.match(app.byId("parsed").textContent, /No parsed request/);
    assert.deepEqual(app.saved(), before);
    assertCardsMatchState(app);
    assert.equal(app.storage.writes.length, 1);
  });
}

test("a failed create write produces neither a matter card nor success; retrying Run uses the same next ID", async (t) => {
  const app = await mount(t);
  app.example("create");
  app.storage.failWrite = true;
  app.run();
  assert.equal(app.cards().length, 1);
  assert.equal(JSON.parse(app.byId("response").textContent).error.code, "StorageWriteFailed");
  assertCardsMatchState(app);
  app.storage.failWrite = false;
  app.run();
  assert.equal(app.cards().length, 2);
  assert.equal(JSON.parse(app.byId("response").textContent).id, "demo-container-2");
  assertCardsMatchState(app);
});

test("Reset replaces only the app seed and refreshes the cards without executing the current draft", async (t) => {
  const app = await mount(t);
  app.example("create");
  app.run();
  const draft = app.draft();
  app.byId("reset").click();
  assert.deepEqual(app.saved(), createSeedState());
  assertCardsMatchState(app);
  assert.deepEqual(app.draft(), draft);
  assert.match(app.byId("response").textContent, /No synthetic request response/);
  assert.match(app.byId("effect").textContent, /Reset restored only the known Demo seed/);
  assert.equal(app.document.activeElement, app.byId("state-heading"));
  assert.equal(app.storage.getItem("another-app"), "keep me");
});

test("failed Reset retains the committed cards and state and reports the error", async (t) => {
  const app = await mount(t);
  app.example("create");
  app.run();
  app.storage.failWrite = true;
  app.byId("reset").click();
  assert.equal(app.cards().length, 2);
  assertCardsMatchState(app);
  assert.match(app.byId("error").textContent, /StorageWriteFailed/);
  assert.match(app.byId("effect").textContent, /Reset failed/);
});

test("corrupt storage shows no fake cards, remains untouched, and requires explicit Reset", async (t) => {
  const storage = new StorageFixture();
  storage.data.set(STORAGE_KEY, "{corrupt");
  const app = await mount(t, storage);
  assert.equal(app.cards().length, 0);
  assert.equal(app.byId("run").disabled, true);
  assert.equal(app.byId("matter-unavailable").hidden, false);
  assert.match(app.byId("error").textContent, /StorageCorrupt/);
  assert.equal(storage.getItem(STORAGE_KEY), "{corrupt");
  assert.equal(storage.writes.length, 0);
  app.byId("reset").click();
  assertCardsMatchState(app);
  assert.equal(app.byId("run").disabled, false);
  assert.equal(storage.getItem("another-app"), "keep me");
});

for (const failure of ["access", "read", "write"]) {
  test(`initial storage ${failure} failure never renders in-memory fallback cards`, async (t) => {
    const storage = new StorageFixture();
    storage.failRead = failure === "read";
    storage.failWrite = failure === "write";
    const app = await mount(t, storage, { denyAccess: failure === "access" });
    assert.equal(app.cards().length, 0);
    assert.equal(app.byId("run").disabled, true);
    assert.equal(app.byId("matter-unavailable").hidden, false);
    assert.match(app.byId("error").textContent, /Storage(?:Unavailable|ReadFailed|WriteFailed)/);
    assert.equal(storage.writes.length, 0);
    assert.equal(storage.data.has(STORAGE_KEY), false);
    if (failure !== "access") {
      storage.failRead = false;
      storage.failWrite = false;
      app.byId("retry").click();
      assertCardsMatchState(app);
      assert.match(app.byId("response").textContent, /No synthetic request response/);
    }
  });
}

test("cross-tab changes remove stale cards/results and disable Run until an explicit storage retry", async (t) => {
  const app = await mount(t);
  app.run();
  const otherEngine = new DemoEngine(app.storage);
  otherEngine.initialize();
  otherEngine.run({ method: "POST", path: COLLECTION_PATH, body: JSON.stringify({ displayName: "Synthetic other-tab matter", description: "", containerTypeId: CONTAINER_TYPE }) });
  const event = new Event("storage");
  Object.defineProperties(event, { storageArea: { value: app.storage }, key: { value: STORAGE_KEY } });
  app.window.dispatchEvent(event);
  assert.equal(app.cards().length, 0);
  assert.equal(app.byId("run").disabled, true);
  assert.match(app.byId("response").textContent, /No synthetic request response/);
  assert.match(app.byId("error").textContent, /StorageChanged/);
  const writes = app.storage.writes.length;
  app.run();
  app.byId("reset").click();
  assert.equal(app.storage.writes.length, writes);
  app.byId("retry").click();
  assertCardsMatchState(app);
  assert.equal(app.cards().length, 2);
  assert.equal(app.byId("run").disabled, false);
  assert.equal(app.storage.writes.length, writes);
});

test("unrelated storage notifications do not invalidate the matter view", async (t) => {
  const app = await mount(t);
  for (const [storageArea, key] of [[app.storage, "another-app"], [new StorageFixture(), STORAGE_KEY]]) {
    const event = new Event("storage");
    Object.defineProperties(event, { storageArea: { value: storageArea }, key: { value: key } });
    app.window.dispatchEvent(event);
    assert.equal(app.byId("run").disabled, false);
    assertCardsMatchState(app);
  }
});
