// Copyright (c) Microsoft Corporation. Licensed under the MIT license.
import { DemoEngine, DemoError, LIST_PATH, COLLECTION_PATH, CONTAINER_TYPE, SYNTHETIC_SOURCE, STORAGE_KEY } from "./engine.mjs";

const byId = (id) => document.getElementById(id);
const fields = { method: byId("method"), path: byId("path"), body: byId("body") };
const pretty = (value) => JSON.stringify(value, null, 2);
const examples = {
  list: { method: "GET", path: LIST_PATH, body: "" },
  create: {
    method: "POST",
    path: COLLECTION_PATH,
    body: pretty({ displayName: "Synthetic services agreement", description: "A fictional contract matter for learning. No real documents or parties.", containerTypeId: CONTAINER_TYPE }),
  },
  read: { method: "GET", path: `${COLLECTION_PATH}/demo-container-2`, body: "" },
};
let engine;
let activeStorage;

function clearError() {
  byId("error").hidden = true;
  byId("error").textContent = "";
}

function showError(error) {
  const message = error instanceof DemoError
    ? `${error.message} [${error.code}]`
    : "Demo error: An unexpected application failure occurred. No success is being reported.";
  if (!(error instanceof DemoError)) console.error(error);
  byId("error").textContent = message;
  byId("error").hidden = false;
  byId("status").textContent = "Demo action failed. See the error message.";
  byId("error").focus();
}

function renderState() {
  const state = engine.getState();
  byId("state").textContent = pretty(state);
  const cards = state.containers.map((container) => {
    const card = document.createElement("li");
    const heading = document.createElement("h4");
    heading.textContent = container.displayName;
    const description = document.createElement("p");
    description.textContent = container.description;
    const id = document.createElement("code");
    id.textContent = container.id;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Prepare read request";
    button.setAttribute("aria-label", `Prepare read request for ${container.displayName}`);
    button.addEventListener("click", () => prepareDraft(
      { method: "GET", path: `${COLLECTION_PATH}/${container.id}`, body: "" },
      `Read for ${container.id} prepared in the draft only. Nothing ran. Inspect it, then select Run Demo request.`,
    ));
    card.append(heading, description, id, button);
    return card;
  });
  byId("matter-list").replaceChildren(...cards);
  byId("matter-count").textContent = `${cards.length} synthetic matter workspace${cards.length === 1 ? "" : "s"} in Demo storage.`;
  byId("matter-unavailable").hidden = true;
}

function showUnavailableState(message) {
  byId("matter-list").replaceChildren();
  byId("matter-count").textContent = "Matter workspaces unavailable.";
  byId("matter-unavailable").textContent = message;
  byId("matter-unavailable").hidden = false;
  byId("state").textContent = message;
}

function prepareDraft(draft, message) {
  for (const key of Object.keys(fields)) fields[key].value = draft[key];
  byId("status").textContent = message;
  byId("request-heading").focus();
}

function clearExecution(message) {
  byId("parsed").textContent = "No current parsed request. No request has run since storage was initialized, reset, or invalidated.";
  byId("response-status").textContent = "No illustrative status.";
  byId("response").textContent = "No synthetic request response.";
  byId("effect").textContent = message;
}

function connectStorage() {
  clearError();
  byId("run").disabled = true;
  engine = undefined;
  try {
    let storage;
    try {
      storage = window.localStorage;
    } catch (cause) {
      throw new DemoError("StorageUnavailable", "Browser storage is unavailable. Enable storage for this origin, then Retry storage. No in-memory fallback is used.", { cause });
    }
    activeStorage = storage;
    engine = new DemoEngine(storage);
    engine.initialize();
    renderState();
    clearExecution("Storage initialized. The saved Demo state or known seed is shown below. No request ran.");
    byId("run").disabled = false;
    byId("status").textContent = "Demo ready. Choose an example, inspect the draft, then Run. Nothing has executed.";
  } catch (error) {
    showUnavailableState("State unavailable. Saved data was not silently reset. Retry storage or explicitly Reset Demo.");
    clearExecution("Initialization failed. No request ran. Retry storage, or explicitly Reset Demo to replace corrupt saved state.");
    showError(error);
  }
}

document.querySelectorAll("[data-example]").forEach((button) => {
  button.addEventListener("click", () => {
    const draft = examples[button.dataset.example];
    prepareDraft(draft, "Example loaded into the draft only. Nothing ran. Inspect it, then select Run Demo request.");
  });
});

// Enter in a draft field must not implicitly execute a request.
byId("request-form").addEventListener("submit", (event) => event.preventDefault());
byId("run").addEventListener("click", () => {
  clearError();
  try {
    if (!engine) throw new DemoError("NotInitialized", "Demo storage is unavailable. Retry storage first.");
    const draft = Object.fromEntries(Object.entries(fields).map(([key, field]) => [key, field.value]));
    const result = engine.run(draft);
    byId("parsed").textContent = pretty(result.request);
    byId("response-status").textContent = `Illustrative status ${result.response.status}. ${result.source}.`;
    byId("response").textContent = pretty(result.response.body);
    byId("effect").textContent = result.effect.message;
    renderState();
    byId("status").textContent = `Demo ${result.request.method} completed. Illustrative ${result.response.status}. ${result.effect.message}`;
    byId("result-heading").focus();
  } catch (error) {
    byId("parsed").textContent = error instanceof DemoError && error.request
      ? pretty(error.request) : "No parsed request is available. The draft could not be parsed or Demo storage is unavailable.";
    byId("response-status").textContent = "Demo error only. No HTTP status or Microsoft Graph response.";
    byId("response").textContent = pretty({
      source: SYNTHETIC_SOURCE,
      error: { code: error instanceof DemoError ? error.code : "ApplicationFailure", message: error.message },
    });
    byId("effect").textContent = "Request failed. No Demo state change was committed.";
    showError(error);
  }
});

byId("retry").addEventListener("click", connectStorage);
byId("reset").addEventListener("click", () => {
  clearError();
  try {
    if (!engine) throw new DemoError("StorageUnavailable", "Browser storage is unavailable. Enable it and Retry storage before resetting.");
    engine.reset();
    renderState();
    clearExecution("Reset restored only the known Demo seed and this app's storage key. No request ran. Other storage was not touched.");
    byId("run").disabled = false;
    byId("status").textContent = "Demo reset to one seed container. Other storage is unchanged. The draft was not executed.";
    byId("state-heading").setAttribute("tabindex", "-1");
    byId("state-heading").focus();
  } catch (error) {
    byId("effect").textContent = "Reset failed. No Demo state change was committed.";
    showError(error);
  }
});

// Another tab must not silently overwrite this page's view of saved state.
window.addEventListener("storage", (event) => {
  if (event.storageArea === activeStorage && (event.key === null || event.key === STORAGE_KEY)) {
    let error = new DemoError("StorageChanged", "Demo storage changed in another page. Retry storage before running or resetting.");
    try {
      if (engine?.isStorageCurrent()) return;
    } catch (cause) {
      if (!(cause instanceof DemoError)) throw cause;
      error = cause;
    }
    byId("run").disabled = true;
    engine = undefined;
    showUnavailableState("Demo storage changed in another page. Retry storage to reload the matter workspaces and state.");
    clearExecution("Storage changed. Previous results are no longer current. No request ran. Retry storage.");
    showError(error);
  }
});

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    for (const key of Object.keys(fields)) fields[key].value = examples.list[key];
    connectStorage();
  }
});

connectStorage();
