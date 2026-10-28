// Copyright (c) Microsoft Corporation. Licensed under the MIT license.

export const STORAGE_KEY = "spe-playground.demo.v1";
export const CONTAINER_TYPE = "demo-container-type";
export const COLLECTION_PATH = "/storage/fileStorage/containers";
export const LIST_PATH = `${COLLECTION_PATH}?$filter=containerTypeId eq ${CONTAINER_TYPE}`;
export const SYNTHETIC_SOURCE = "Demo only - synthetic, not a Microsoft Graph result";

export class DemoError extends Error {
  constructor(code, message, options = {}) {
    super(`Demo error: ${message}`, options);
    this.name = "DemoError";
    this.code = code;
    this.request = options.request ?? null;
  }
}

export function createSeedState() {
  return {
    version: 1,
    nextId: 2,
    containers: [{
      id: "demo-container-1",
      displayName: "Demo workspace",
      description: "A synthetic container for learning. No tenant resource exists.",
      containerTypeId: CONTAINER_TYPE,
    }],
  };
}

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function hasKeys(value, keys) {
  return isRecord(value) && Object.keys(value).length === keys.length
    && keys.every((key) => Object.hasOwn(value, key));
}

function validContainerBody(body) {
  return hasKeys(body, ["displayName", "description", "containerTypeId"])
    && typeof body.displayName === "string"
    && body.displayName.trim().length > 0 && body.displayName.length <= 100
    && typeof body.description === "string" && body.description.length <= 500
    && body.containerTypeId === CONTAINER_TYPE;
}

function validState(state) {
  if (!hasKeys(state, ["version", "nextId", "containers"])
    || state.version !== 1 || !Array.isArray(state.containers)
    || state.containers.length < 1 || !Number.isSafeInteger(state.nextId)
    || state.nextId !== state.containers.length + 1) {
    return false;
  }
  const seed = createSeedState().containers[0];
  return state.containers.every((container, index) => {
    if (!hasKeys(container, ["id", "displayName", "description", "containerTypeId"])) {
      return false;
    }
    const { id, ...body } = container;
    return id === `demo-container-${index + 1}` && validContainerBody(body)
      && (index !== 0 || Object.keys(seed).every((key) => container[key] === seed[key]));
  });
}

export function parseRequest(draft) {
  if (!hasKeys(draft, ["method", "path", "body"])
    || !["method", "path", "body"].every((key) => typeof draft[key] === "string")) {
    throw new DemoError("InvalidDraft", "Supply method, path and body as text.");
  }

  const request = { method: draft.method, path: draft.path, body: null };
  if (draft.body.trim()) {
    try {
      request.body = JSON.parse(draft.body);
    } catch (error) {
      if (!(error instanceof SyntaxError)) throw error;
      throw new DemoError("InvalidJson", "The body is not valid JSON. Nothing ran.", { cause: error });
    }
  }
  const fail = (code, message) => {
    throw new DemoError(code, message, { request });
  };
  if (!["GET", "POST"].includes(request.method)) {
    fail("UnsupportedMethod", "Only uppercase GET and POST are supported.");
  }
  if (!request.path.startsWith(`${COLLECTION_PATH}`)
    || /[#\r\n\t]/.test(request.path) || /%(?![0-9a-f]{2})/i.test(request.path)) {
    fail("UnsupportedPath", "Use an exact supported relative Demo path, without a host or fragment.");
  }
  const [pathname, query, extra] = request.path.split("?");
  if (extra !== undefined) fail("UnsupportedQuery", "Multiple query delimiters are not supported.");
  if (request.method === "GET" && draft.body.trim()) {
    fail("UnexpectedBody", "List and read requests must have no request body.");
  }
  if (pathname === COLLECTION_PATH && request.method === "GET") {
    const entries = [...new URLSearchParams(query)];
    if (entries.length !== 1 || entries[0][0] !== "$filter"
      || entries[0][1] !== `containerTypeId eq ${CONTAINER_TYPE}` || query.includes("&")) {
      fail("UnsupportedQuery", `List requires only $filter=containerTypeId eq ${CONTAINER_TYPE}.`);
    }
    return { request, operation: "list" };
  }
  if (query !== undefined) {
    fail("UnsupportedQuery", "Query options are supported only for the exact Demo list filter.");
  }
  if (pathname === COLLECTION_PATH && request.method === "POST") {
    if (!validContainerBody(request.body)) {
      fail("InvalidBody", `Create requires exactly displayName (1-100 characters, not blank), description (0-500 characters), and containerTypeId "${CONTAINER_TYPE}".`);
    }
    return { request, operation: "create" };
  }
  const id = pathname.slice(COLLECTION_PATH.length + 1);
  if (pathname.startsWith(`${COLLECTION_PATH}/`) && /^demo-container-[1-9]\d*$/.test(id)) {
    if (request.method !== "GET") {
      fail("UnsupportedMethod", "A synthetic container supports GET only.");
    }
    return { request, operation: "read", id };
  }
  fail("UnsupportedPath", "Use the collection path or an unencoded synthetic ID such as demo-container-1. Live IDs and other APIs are unsupported.");
}

export class DemoEngine {
  #storage;
  #state;

  constructor(storage) {
    if (!storage || typeof storage.getItem !== "function" || typeof storage.setItem !== "function") {
      throw new DemoError("StorageUnavailable", "Browser storage is required. No in-memory fallback is used.");
    }
    this.#storage = storage;
  }

  initialize() {
    let raw;
    try {
      raw = this.#storage.getItem(STORAGE_KEY);
    } catch (cause) {
      throw new DemoError("StorageReadFailed", "Browser storage could not be read. State was not initialized.", { cause });
    }
    if (raw === null) {
      this.#commit(createSeedState());
    } else {
      let state;
      try {
        state = JSON.parse(raw);
      } catch (cause) {
        if (!(cause instanceof SyntaxError)) throw cause;
        throw new DemoError("StorageCorrupt", "Saved Demo state is corrupt. It was not overwritten. Use Reset Demo to restore the known seed.", { cause });
      }
      if (!validState(state)) {
        throw new DemoError("StorageCorrupt", "Saved Demo state has an unsupported shape. It was not overwritten. Use Reset Demo to restore the known seed.");
      }
      this.#state = state;
    }
    return this.getState();
  }

  getState() {
    if (!this.#state) {
      throw new DemoError("NotInitialized", "Demo state is unavailable. Retry storage or explicitly Reset Demo.");
    }
    return structuredClone(this.#state);
  }

  #commit(state) {
    try {
      this.#storage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (cause) {
      throw new DemoError("StorageWriteFailed", "Browser storage could not be written. No in-memory state change was committed.", { cause });
    }
    this.#state = state;
  }

  reset() {
    this.#commit(createSeedState());
    return this.getState();
  }

  run(draft) {
    const parsed = parseRequest(draft);
    const state = this.getState();
    const { request, operation } = parsed;
    let body;
    let effect = { kind: "none", message: "No state change. Read synthetic browser state only." };
    if (operation === "list") {
      body = { value: state.containers };
    } else if (operation === "read") {
      body = state.containers.find((container) => container.id === parsed.id);
      if (!body) {
        throw new DemoError("ContainerNotFound", `Synthetic container "${parsed.id}" does not exist. Nothing changed.`, { request });
      }
    } else {
      if (!Number.isSafeInteger(state.nextId + 1)) {
        throw new DemoError("IdLimit", "The Demo identifier limit was reached. Nothing changed.", { request });
      }
      body = { id: `demo-container-${state.nextId}`, ...request.body };
      state.containers.push(body);
      state.nextId += 1;
      try {
        this.#commit(state);
      } catch (error) {
        if (!(error instanceof DemoError)) throw error;
        error.request = request;
        throw error;
      }
      effect = { kind: "created", message: `Created ${body.id} in synthetic browser state only. No tenant resource exists.` };
    }
    return structuredClone({
      source: SYNTHETIC_SOURCE,
      request,
      response: { status: operation === "create" ? 201 : 200, body },
      effect,
      state,
    });
  }
}
