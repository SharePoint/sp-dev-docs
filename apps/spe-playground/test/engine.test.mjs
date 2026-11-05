// Copyright (c) Microsoft Corporation. Licensed under the MIT license.
import test from "node:test";
import assert from "node:assert/strict";
import {
  DemoEngine, DemoError, createSeedState, parseRequest,
  COLLECTION_PATH, LIST_PATH, CONTAINER_TYPE, STORAGE_KEY, SYNTHETIC_SOURCE,
} from "../engine.mjs";

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

const listDraft = () => ({ method: "GET", path: LIST_PATH, body: "" });
const createBody = () => ({
  displayName: "Learning project",
  description: "Synthetic only",
  containerTypeId: CONTAINER_TYPE,
});
const createDraft = (body = createBody()) => ({
  method: "POST", path: COLLECTION_PATH, body: JSON.stringify(body),
});
const readDraft = (id = "demo-container-1") => ({
  method: "GET", path: `${COLLECTION_PATH}/${id}`, body: "",
});

function setup() {
  const storage = new StorageFixture();
  const engine = new DemoEngine(storage);
  engine.initialize();
  return { storage, engine };
}

function assertDemoError(action, code) {
  return assert.throws(action, (error) => {
    assert.ok(error instanceof DemoError);
    assert.equal(error.code, code);
    assert.match(error.message, /^Demo error:/);
    assert.equal(Object.hasOwn(error, "response"), false);
    return true;
  });
}

test("initialization persists exactly the known seed under only the app key", () => {
  const { storage, engine } = setup();
  assert.deepEqual(engine.getState(), createSeedState());
  assert.deepEqual(JSON.parse(storage.getItem(STORAGE_KEY)), createSeedState());
  assert.deepEqual(storage.writes, [STORAGE_KEY]);
  assert.equal(storage.getItem("another-app"), "keep me");
});

test("storage currency detects an unconsumed change without loading it or writing, then recognizes an explicit reload", () => {
  const { storage, engine } = setup();
  const initial = engine.getState();
  assert.equal(engine.isStorageCurrent(), true);
  const other = new DemoEngine(storage);
  other.initialize();
  other.run(createDraft());
  const writes = [...storage.writes];
  assert.equal(engine.isStorageCurrent(), false);
  assert.deepEqual(engine.getState(), initial);
  engine.initialize();
  assert.equal(engine.isStorageCurrent(), true);
  assert.deepEqual(engine.getState(), other.getState());
  assert.deepEqual(storage.writes, writes);
});

test("storage currency tracks the exact consumed bytes and detects deletion without silently restoring the seed", () => {
  const storage = new StorageFixture();
  const raw = JSON.stringify(createSeedState(), null, 2);
  storage.data.set(STORAGE_KEY, raw);
  const engine = new DemoEngine(storage);
  engine.initialize();
  assert.equal(engine.isStorageCurrent(), true);
  storage.data.set(STORAGE_KEY, JSON.stringify(createSeedState()));
  assert.equal(engine.isStorageCurrent(), false);
  engine.initialize();
  assert.equal(engine.isStorageCurrent(), true);
  storage.data.delete(STORAGE_KEY);
  assert.equal(engine.isStorageCurrent(), false);
  assert.equal(storage.getItem(STORAGE_KEY), null);
  assert.deepEqual(engine.getState(), createSeedState());
  assert.deepEqual(storage.writes, []);
});

test("only successful own commits advance the consumed storage snapshot", () => {
  const { storage, engine } = setup();
  engine.run(createDraft());
  assert.equal(engine.isStorageCurrent(), true);
  const state = engine.getState();
  const raw = storage.getItem(STORAGE_KEY);
  storage.failWrite = true;
  assertDemoError(() => engine.run(createDraft()), "StorageWriteFailed");
  assertDemoError(() => engine.reset(), "StorageWriteFailed");
  assert.equal(engine.isStorageCurrent(), true);
  assert.equal(storage.getItem(STORAGE_KEY), raw);
  assert.deepEqual(engine.getState(), state);
  storage.failWrite = false;
  engine.reset();
  assert.equal(engine.isStorageCurrent(), true);
  assert.deepEqual(engine.getState(), createSeedState());
});

test("uninitialized and unreadable storage currency checks report errors instead of claiming current state", () => {
  const storage = new StorageFixture();
  const engine = new DemoEngine(storage);
  assertDemoError(() => engine.isStorageCurrent(), "NotInitialized");
  engine.initialize();
  const raw = storage.getItem(STORAGE_KEY);
  const writes = [...storage.writes];
  storage.failRead = true;
  assertDemoError(() => engine.isStorageCurrent(), "StorageReadFailed");
  assert.equal(storage.data.get(STORAGE_KEY), raw);
  assert.deepEqual(storage.writes, writes);
});

test("list has the exact parsed request, synthetic 200 response and no state effect or write", () => {
  const { storage, engine } = setup();
  const before = engine.getState();
  const result = engine.run(listDraft());
  assert.equal(result.source, SYNTHETIC_SOURCE);
  assert.deepEqual(result.request, { method: "GET", path: LIST_PATH, body: null });
  assert.deepEqual(result.response, { status: 200, body: { value: before.containers } });
  assert.equal(result.effect.kind, "none");
  assert.match(result.effect.message, /No state change/);
  assert.deepEqual(result.state, before);
  assert.deepEqual(engine.getState(), before);
  assert.equal(storage.writes.length, 1);
});

test("create has the exact parsed request, synthetic 201 response and durable state effect", () => {
  const { storage, engine } = setup();
  const result = engine.run(createDraft());
  const container = { id: "demo-container-2", ...createBody() };
  assert.equal(result.source, SYNTHETIC_SOURCE);
  assert.deepEqual(result.request, { method: "POST", path: COLLECTION_PATH, body: createBody() });
  assert.deepEqual(result.response, { status: 201, body: container });
  assert.equal(result.effect.kind, "created");
  assert.match(result.effect.message, /demo-container-2.*synthetic browser state only/);
  assert.deepEqual(result.state, { ...createSeedState(), nextId: 3, containers: [...createSeedState().containers, container] });
  assert.deepEqual(result.state, engine.getState());
  assert.deepEqual(result.state, JSON.parse(storage.getItem(STORAGE_KEY)));
  assert.equal(storage.writes.length, 2);
});

test("read has the exact parsed request, synthetic 200 response and no state effect or write", () => {
  const { storage, engine } = setup();
  const before = engine.getState();
  const result = engine.run(readDraft());
  assert.equal(result.source, SYNTHETIC_SOURCE);
  assert.deepEqual(result.request, { method: "GET", path: `${COLLECTION_PATH}/demo-container-1`, body: null });
  assert.deepEqual(result.response, { status: 200, body: before.containers[0] });
  assert.equal(result.effect.kind, "none");
  assert.deepEqual(result.state, before);
  assert.deepEqual(engine.getState(), before);
  assert.equal(storage.writes.length, 1);
});

test("the complete list -> create -> list -> read recipe runs without any service", () => {
  const { engine } = setup();
  assert.deepEqual(engine.run(listDraft()).response.body.value.map((item) => item.id), ["demo-container-1"]);
  const created = engine.run(createDraft()).response.body;
  assert.deepEqual(engine.run(listDraft()).response.body.value.map((item) => item.id), ["demo-container-1", "demo-container-2"]);
  assert.deepEqual(engine.run(readDraft(created.id)).response.body, created);
  assert.equal(engine.run(createDraft()).response.body.id, "demo-container-3");
});

test("encoded equivalent list filter and blank read body are supported", () => {
  const { engine } = setup();
  for (const query of [
    "$filter=containerTypeId%20eq%20demo-container-type",
    "%24filter=containerTypeId+eq+demo-container-type",
  ]) {
    const draft = { method: "GET", path: `${COLLECTION_PATH}?${query}`, body: " \n " };
    const result = engine.run(draft);
    assert.equal(result.response.status, 200);
    assert.equal(result.request.body, null);
    assert.equal(result.request.path, draft.path);
  }
});

test("create preserves learner text, including HTML-like text, without interpreting it", () => {
  const { engine } = setup();
  const body = { ...createBody(), displayName: " <script>not executable</script> ", description: '<img src=x onerror="bad()"> & more' };
  const created = engine.run(createDraft(body)).response.body;
  assert.equal(created.displayName, body.displayName);
  assert.equal(engine.run(readDraft(created.id)).response.body.description, body.description);
});

test("Demo create length boundaries and empty descriptions are explicit", () => {
  const { engine } = setup();
  assert.equal(engine.run(createDraft({ ...createBody(), displayName: "x".repeat(100), description: "x".repeat(500) })).response.status, 201);
  assert.equal(engine.run(createDraft({ ...createBody(), description: "" })).response.status, 201);
});

const invalidRequests = [
  ["missing draft", undefined, "InvalidDraft"],
  ["null draft", null, "InvalidDraft"],
  ["array draft", [], "InvalidDraft"],
  ["missing body field", { method: "GET", path: LIST_PATH }, "InvalidDraft"],
  ["nontext method", { ...listDraft(), method: 1 }, "InvalidDraft"],
  ["nontext path", { ...listDraft(), path: null }, "InvalidDraft"],
  ["nontext body", { ...listDraft(), body: {} }, "InvalidDraft"],
  ["extra draft key", { ...listDraft(), credentials: "unsupported" }, "InvalidDraft"],
  ["bare collection list", { ...listDraft(), path: COLLECTION_PATH }, "UnsupportedQuery"],
  ["empty list query", { ...listDraft(), path: `${COLLECTION_PATH}?` }, "UnsupportedQuery"],
  ["other filter", { ...listDraft(), path: `${COLLECTION_PATH}?$filter=displayName eq hello` }, "UnsupportedQuery"],
  ["real type", { ...listDraft(), path: `${COLLECTION_PATH}?$filter=containerTypeId eq 00000000-0000-0000-0000-000000000001` }, "UnsupportedQuery"],
  ["quoted type", { ...listDraft(), path: `${COLLECTION_PATH}?$filter=containerTypeId eq 'demo-container-type'` }, "UnsupportedQuery"],
  ["extra select", { ...listDraft(), path: `${LIST_PATH}&$select=id` }, "UnsupportedQuery"],
  ["extra top", { ...listDraft(), path: `${LIST_PATH}&$top=1` }, "UnsupportedQuery"],
  ["duplicate filter", { ...listDraft(), path: `${LIST_PATH}&$filter=containerTypeId eq demo-container-type` }, "UnsupportedQuery"],
  ["empty extra parameter", { ...listDraft(), path: `${LIST_PATH}&` }, "UnsupportedQuery"],
  ["multiple query delimiters", { ...listDraft(), path: `${LIST_PATH}?more` }, "UnsupportedQuery"],
  ["bad escape", { ...listDraft(), path: `${LIST_PATH}%ZZ` }, "UnsupportedPath"],
  ["fragment", { ...listDraft(), path: `${LIST_PATH}#fragment` }, "UnsupportedPath"],
  ["control character", { ...listDraft(), path: `${LIST_PATH}\n` }, "UnsupportedPath"],
  ["absolute URL", { ...listDraft(), path: `https://graph.microsoft.com/v1.0${LIST_PATH}` }, "UnsupportedPath"],
  ["version prefix", { ...listDraft(), path: `/v1.0${LIST_PATH}` }, "UnsupportedPath"],
  ["other API", { ...listDraft(), path: "/me" }, "UnsupportedPath"],
  ["similar path", { ...listDraft(), path: `${COLLECTION_PATH}evil` }, "UnsupportedPath"],
  ["trailing slash collection", { ...listDraft(), path: `${COLLECTION_PATH}/` }, "UnsupportedPath"],
  ["trailing slash item", { ...readDraft(), path: `${COLLECTION_PATH}/demo-container-1/` }, "UnsupportedPath"],
  ["nested operation", { ...readDraft(), path: `${COLLECTION_PATH}/demo-container-1/drive` }, "UnsupportedPath"],
  ["encoded ID", readDraft("demo-container-%31"), "UnsupportedPath"],
  ["zero ID", readDraft("demo-container-0"), "UnsupportedPath"],
  ["padded ID", readDraft("demo-container-01"), "UnsupportedPath"],
  ["non-synthetic ID", readDraft("00000000-0000-0000-0000-000000000001"), "UnsupportedPath"],
  ["unsupported demo ID", readDraft("demo-other-1"), "UnsupportedPath"],
  ["missing synthetic ID", readDraft("demo-container-999"), "ContainerNotFound"],
  ["query on read", { ...readDraft(), path: `${readDraft().path}?$select=id` }, "UnsupportedQuery"],
  ["empty query on read", { ...readDraft(), path: `${readDraft().path}?` }, "UnsupportedQuery"],
  ["query on create", { ...createDraft(), path: LIST_PATH }, "UnsupportedQuery"],
  ["POST to item", { ...readDraft(), method: "POST" }, "UnsupportedMethod"],
  ["DELETE", { ...readDraft(), method: "DELETE" }, "UnsupportedMethod"],
  ["PATCH", { ...createDraft(), method: "PATCH" }, "UnsupportedMethod"],
  ["HEAD", { ...readDraft(), method: "HEAD" }, "UnsupportedMethod"],
  ["lowercase method", { ...listDraft(), method: "get" }, "UnsupportedMethod"],
  ["padded method", { ...listDraft(), method: " GET " }, "UnsupportedMethod"],
  ["body on list", { ...listDraft(), body: "{}" }, "UnexpectedBody"],
  ["body on read", { ...readDraft(), body: '{"displayName":"not used"}' }, "UnexpectedBody"],
  ["JSON null on read is still a body", { ...readDraft(), body: "null" }, "UnexpectedBody"],
  ["malformed JSON", { ...createDraft(), body: "{" }, "InvalidJson"],
  ["trailing JSON", { ...createDraft(), body: '{"displayName":"x"} garbage' }, "InvalidJson"],
  ["blank create body", { ...createDraft(), body: "" }, "InvalidBody"],
  ["null create body", createDraft(null), "InvalidBody"],
  ["array create body", createDraft([]), "InvalidBody"],
  ["string create body", createDraft("hello"), "InvalidBody"],
  ["number create body", createDraft(1), "InvalidBody"],
  ["boolean create body", createDraft(true), "InvalidBody"],
  ["missing name", createDraft({ description: "", containerTypeId: CONTAINER_TYPE }), "InvalidBody"],
  ["missing description", createDraft({ displayName: "x", containerTypeId: CONTAINER_TYPE }), "InvalidBody"],
  ["missing type", createDraft({ displayName: "x", description: "" }), "InvalidBody"],
  ["empty name", createDraft({ ...createBody(), displayName: "" }), "InvalidBody"],
  ["blank name", createDraft({ ...createBody(), displayName: " \t\n" }), "InvalidBody"],
  ["nontext name", createDraft({ ...createBody(), displayName: 42 }), "InvalidBody"],
  ["long name", createDraft({ ...createBody(), displayName: "x".repeat(101) }), "InvalidBody"],
  ["nontext description", createDraft({ ...createBody(), description: null }), "InvalidBody"],
  ["long description", createDraft({ ...createBody(), description: "x".repeat(501) }), "InvalidBody"],
  ["non-synthetic create type", createDraft({ ...createBody(), containerTypeId: "real-container-type" }), "InvalidBody"],
  ["extra create field", createDraft({ ...createBody(), id: "demo-container-2" }), "InvalidBody"],
  ["prototype-like field", { ...createDraft(), body: '{"displayName":"x","description":"","containerTypeId":"demo-container-type","__proto__":{}}' }, "InvalidBody"],
];

for (const [name, draft, code] of invalidRequests) {
  test(`rejects ${name} without changing memory, storage, or ID allocation`, () => {
    const { engine, storage } = setup();
    const before = engine.getState();
    const saved = storage.getItem(STORAGE_KEY);
    assertDemoError(() => engine.run(draft), code);
    assert.deepEqual(engine.getState(), before);
    assert.equal(storage.getItem(STORAGE_KEY), saved);
    assert.equal(storage.writes.length, 1);
    assert.equal(storage.getItem("another-app"), "keep me");
    assert.equal(engine.run(createDraft()).response.body.id, "demo-container-2");
  });
}

test("errors expose a parsed request only when parsing succeeded", () => {
  const { engine } = setup();
  assert.throws(() => engine.run({ ...createDraft(), body: "{" }), (error) => error.request === null);
  assert.throws(() => engine.run(readDraft("demo-container-9")), (error) => {
    assert.deepEqual(error.request, { method: "GET", path: `${COLLECTION_PATH}/demo-container-9`, body: null });
    return true;
  });
});

test("parsing never mutates the draft and is independent of state", () => {
  const draft = Object.freeze(createDraft());
  assert.equal(parseRequest(draft).operation, "create");
  assert.deepEqual(draft, createDraft());
});

test("public state, result and seed snapshots cannot mutate the engine", () => {
  const { engine, storage } = setup();
  const seed = createSeedState();
  seed.containers[0].displayName = "tampered";
  const initial = engine.getState();
  initial.containers.length = 0;
  const result = engine.run(createDraft());
  result.response.body.displayName = "tampered";
  result.request.body.displayName = "tampered";
  result.state.containers[0].id = "tampered";
  const listed = engine.run(listDraft());
  listed.response.body.value.length = 0;
  const read = engine.run(readDraft());
  read.response.body.description = "tampered";
  assert.deepEqual(engine.getState(), JSON.parse(storage.getItem(STORAGE_KEY)));
  assert.equal(engine.getState().containers[0].id, "demo-container-1");
  assert.equal(engine.getState().containers[1].displayName, createBody().displayName);
});

test("persistence round-trip restores synthetic state without saving drafts or history", () => {
  const { engine, storage } = setup();
  engine.run(createDraft());
  const restored = new DemoEngine(storage);
  assert.deepEqual(restored.initialize(), engine.getState());
  assert.equal(storage.writes.length, 2);
  assert.deepEqual([...storage.data.keys()], ["another-app", STORAGE_KEY]);
  assert.deepEqual(Object.keys(JSON.parse(storage.getItem(STORAGE_KEY))).sort(), ["containers", "nextId", "version"]);
  assert.equal(restored.run(createDraft()).response.body.id, "demo-container-3");
});

test("repeated Reset restores only the known seed, without clearing unrelated storage", () => {
  const { engine, storage } = setup();
  for (let index = 0; index < 3; index += 1) {
    assert.equal(engine.run(createDraft()).response.body.id, "demo-container-2");
    const reset = engine.reset();
    assert.deepEqual(reset, createSeedState());
    reset.containers[0].id = "tampered snapshot";
    assert.deepEqual(engine.reset(), createSeedState());
    assert.deepEqual(JSON.parse(storage.getItem(STORAGE_KEY)), createSeedState());
    assert.equal(storage.getItem("another-app"), "keep me");
  }
  assert.ok(storage.writes.every((key) => key === STORAGE_KEY));
  const isolated = new DemoEngine(new StorageFixture());
  assert.deepEqual(isolated.initialize(), createSeedState());
});

const corruptStates = [
  ["invalid JSON", "{"],
  ["null", "null"],
  ["array", "[]"],
  ["empty object", "{}"],
  ["unknown version", JSON.stringify({ ...createSeedState(), version: 2 })],
  ["missing seed", JSON.stringify({ ...createSeedState(), containers: [] })],
  ["extra state key", JSON.stringify({ ...createSeedState(), history: [] })],
  ["bad next ID", JSON.stringify({ ...createSeedState(), nextId: 1 })],
  ["unsafe next ID", JSON.stringify({ ...createSeedState(), nextId: Number.MAX_SAFE_INTEGER + 1 })],
  ["non-synthetic ID", JSON.stringify({ ...createSeedState(), containers: [{ ...createSeedState().containers[0], id: "real-id" }] })],
  ["modified seed", JSON.stringify({ ...createSeedState(), containers: [{ ...createSeedState().containers[0], displayName: "changed seed" }] })],
  ["non-synthetic type", JSON.stringify({ ...createSeedState(), containers: [{ ...createSeedState().containers[0], containerTypeId: "real-type" }] })],
  ["extra container key", JSON.stringify({ ...createSeedState(), containers: [{ ...createSeedState().containers[0], token: "not allowed" }] })],
  ["null container", JSON.stringify({ ...createSeedState(), containers: [null] })],
  ["duplicate IDs", JSON.stringify({ ...createSeedState(), nextId: 3, containers: [...createSeedState().containers, createSeedState().containers[0]] })],
  ["invalid created body", JSON.stringify({ ...createSeedState(), nextId: 3, containers: [...createSeedState().containers, { id: "demo-container-2", ...createBody(), description: null }] })],
];

for (const [name, raw] of corruptStates) {
  test(`reports ${name} saved state without silently resetting; explicit reset recovers`, () => {
    const storage = new StorageFixture();
    storage.data.set(STORAGE_KEY, raw);
    const engine = new DemoEngine(storage);
    assertDemoError(() => engine.initialize(), "StorageCorrupt");
    assertDemoError(() => engine.run(listDraft()), "NotInitialized");
    assert.equal(storage.getItem(STORAGE_KEY), raw);
    assert.equal(storage.writes.length, 0);
    assert.deepEqual(engine.reset(), createSeedState());
    assert.equal(storage.getItem("another-app"), "keep me");
    assert.equal(engine.run(listDraft()).response.status, 200);
  });
}

test("unavailable storage is explicit, never an in-memory-only success", () => {
  for (const storage of [undefined, null, {}, { getItem() {} }, { setItem() {} }]) {
    assertDemoError(() => new DemoEngine(storage), "StorageUnavailable");
  }
  const engine = new DemoEngine(new StorageFixture());
  assertDemoError(() => engine.run(listDraft()), "NotInitialized");
  assertDemoError(() => engine.getState(), "NotInitialized");
});

test("read denial surfaces explicitly, preserves saved state, and can be retried", () => {
  const storage = new StorageFixture();
  storage.data.set(STORAGE_KEY, JSON.stringify(createSeedState()));
  storage.failRead = true;
  const engine = new DemoEngine(storage);
  assertDemoError(() => engine.initialize(), "StorageReadFailed");
  assertDemoError(() => engine.getState(), "NotInitialized");
  assert.equal(storage.writes.length, 0);
  storage.failRead = false;
  assert.deepEqual(engine.initialize(), createSeedState());
  assert.equal(storage.writes.length, 0);
});

test("seed persistence failure does not initialize memory or touch unrelated storage", () => {
  const storage = new StorageFixture();
  storage.failWrite = true;
  const engine = new DemoEngine(storage);
  assertDemoError(() => engine.initialize(), "StorageWriteFailed");
  assertDemoError(() => engine.getState(), "NotInitialized");
  assert.equal(storage.getItem(STORAGE_KEY), null);
  assert.equal(storage.getItem("another-app"), "keep me");
  storage.failWrite = false;
  assert.deepEqual(engine.initialize(), createSeedState());
});

test("create persistence failure commits nothing in memory and does not consume an ID", () => {
  const { engine, storage } = setup();
  const before = engine.getState();
  storage.failWrite = true;
  assertDemoError(() => engine.run(createDraft()), "StorageWriteFailed");
  assert.deepEqual(engine.getState(), before);
  assert.deepEqual(JSON.parse(storage.getItem(STORAGE_KEY)), before);
  assert.equal(engine.run(listDraft()).response.body.value.length, 1);
  assert.equal(storage.writes.length, 1);
  storage.failWrite = false;
  assert.equal(engine.run(createDraft()).response.body.id, "demo-container-2");
});

test("reset persistence failure preserves the current memory and saved state", () => {
  const { engine, storage } = setup();
  engine.run(createDraft());
  const before = engine.getState();
  storage.failWrite = true;
  assertDemoError(() => engine.reset(), "StorageWriteFailed");
  assert.deepEqual(engine.getState(), before);
  assert.deepEqual(JSON.parse(storage.getItem(STORAGE_KEY)), before);
  assert.equal(storage.getItem("another-app"), "keep me");
  storage.failWrite = false;
  assert.deepEqual(engine.reset(), createSeedState());
});

test("failed recovery reset does not erase corrupt saved data or invent initialized state", () => {
  const storage = new StorageFixture();
  storage.data.set(STORAGE_KEY, "corrupt");
  const engine = new DemoEngine(storage);
  assertDemoError(() => engine.initialize(), "StorageCorrupt");
  storage.failWrite = true;
  assertDemoError(() => engine.reset(), "StorageWriteFailed");
  assert.equal(storage.getItem(STORAGE_KEY), "corrupt");
  assertDemoError(() => engine.getState(), "NotInitialized");
});
