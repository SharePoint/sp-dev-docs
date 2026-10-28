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
    body: pretty({ displayName: "My Demo project", description: "Created only in this browser.", containerTypeId: CONTAINER_TYPE }),
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
  byId("state").textContent = pretty(engine.getState());
}

function clearExecution(message) {
  byId("parsed").textContent = "No request has run since storage was initialized or reset.";
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
    byId("state").textContent = "State unavailable. Saved data was not silently reset.";
    clearExecution("Initialization failed. No request ran. Retry storage, or explicitly Reset Demo to replace corrupt saved state.");
    showError(error);
  }
}

document.querySelectorAll("[data-example]").forEach((button) => {
  button.addEventListener("click", () => {
    const draft = examples[button.dataset.example];
    for (const key of Object.keys(fields)) fields[key].value = draft[key];
    byId("status").textContent = "Example loaded into the draft only. Nothing ran. Inspect it, then select Run Demo request.";
    byId("request-heading").focus();
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
    byId("run").disabled = true;
    engine = undefined;
    showError(new DemoError("StorageChanged", "Demo storage changed in another page. Retry storage before running or resetting."));
  }
});

connectStorage();
