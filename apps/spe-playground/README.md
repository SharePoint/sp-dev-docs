# SharePoint Embedded Demo playground

A dependency-free, browser-only learning app. Original application code is governed by the repository's [MIT code license](../../LICENSE-CODE). This is the Demo slice of the Hosted SPE playground, not a deployed service or Live client.

## Run locally

Use Node.js 22 or later. From the repository root:

```sh
node apps/spe-playground/server.mjs
```

Open `http://127.0.0.1:4173`. An optional port argument selects another local port, for example `node apps/spe-playground/server.mjs 4174`. The server binds only to loopback and serves an allowlist of frontend assets with GET/HEAD. It has no API endpoints, simulated backend, credentials, or write operations. Opening `index.html` directly as a file is not supported because browser ES modules require an HTTP origin.

No install, build, external dependency, CDN, font request, app registration, Graph traffic, tenant operation, assistant/model call, or deployment is involved. No hosted URL is provided. Publishing Learn documentation does not deploy this application.

## Try the recipe

1. Choose **List containers**, inspect the editable method/path/body, then select **Run Demo request**. The seed is `demo-container-1`.
2. Choose **Create a container**, edit its name/description if desired, then **Run Demo request**. The first create after Reset produces `demo-container-2`.
3. Choose **List again**, then **Run Demo request** to see both synthetic containers.
4. Choose **Read the new container**, then **Run Demo request**. This example fills `demo-container-2`; edit the ID to read a different existing Demo container.

Examples only fill drafts. Run is the only control that executes an operation. Initialization/retry can save the known seed when this app's storage key is absent; Reset explicitly saves that seed. They do not execute requests. The UI separates the actual parsed request, synthetic response, illustrative status, state effect, and current synthetic state. An empty body is displayed as `null` in the parsed request, meaning no request body, not a sent JSON `null`.

## Supported Demo contract

| Operation | Exact method and relative path | Body | Illustrative status / effect |
| --- | --- | --- | --- |
| List | `GET /storage/fileStorage/containers?$filter=containerTypeId eq demo-container-type` | None | 200; `{ "value": [...] }`; unchanged state |
| Create | `POST /storage/fileStorage/containers` | JSON below | 201; synthetic container; persists one new container |
| Read | `GET /storage/fileStorage/containers/demo-container-1` (or another existing synthetic ID) | None | 200; synthetic container; unchanged state |

```json
{
  "displayName": "My Demo project",
  "description": "Created only in this browser.",
  "containerTypeId": "demo-container-type"
}
```

The Demo requires exactly these three create properties. `displayName` must be a nonblank string of at most 100 characters; `description` must be a string of at most 500 characters and can be empty. These are Demo limits, not a complete Graph validation specification. Text is preserved, including leading/trailing whitespace when the name is not blank. URL-encoded equivalents of the one supported list filter are accepted.

Bare collection GET is **not** a valid list shape here: actual Microsoft Graph v1.0 list requires a `containerTypeId` filter. All IDs and the type are visibly synthetic `demo-` strings, not GUIDs, and are **invalid for Live use**. Actual Graph creation uses a confidential client; Demo creation is only a synthetic browser-state change.

Other APIs, hosts/absolute URLs, `/v1.0` prefixes, trailing slashes, fragments, encoded IDs, methods, query options, duplicate filters, other filters/types, missing containers, Live IDs, malformed JSON, extra/missing create fields, and bodies on reads are rejected with labelled Demo errors. No error produces a success-shaped response or commits a state change. A parsed request is shown when parsing succeeded; invalid JSON has no parsed request. Error labels are local Demo diagnostics, not Graph error contracts or HTTP responses.

## Storage and safety

Only the synthetic versioned state is saved in `localStorage`, under **`spe-playground.demo.v1`**. The app does not persist drafts, responses, request history, tokens, or credentials. Do not paste secrets or personal data. Learner content is rendered as text, never HTML.

Missing state initializes the known seed. Corrupt or incompatible saved state is explicitly reported and is not silently reset. Storage read/access/write failures are explicit, with no in-memory-only success fallback. Create and Reset write successfully before committing state in memory. Reads do not write. **Reset Demo** overwrites only this app's key with the known seed, repeatably; it never clears all storage, touches another app's keys, or calls a Live API. **Retry storage** explicitly reloads saved state. Another tab's storage-change notification disables execution until Retry; this is a single-page learning app, not an atomic multi-tab database.

## Demo / Live boundary

All responses are synthetic. 200/201 are illustrative status values, not evidence that an HTTP request occurred. The app proves nothing about Graph service behavior, authentication, authorization, tenant configuration, paging, concurrency, quotas, or real resource lifecycle.

Live is unavailable/pending. There is no login, credential input, Live execution, or synthetic fallback for Live. Readiness would require an owned confidential backend, an approved application and tenant, Graph consent, container-type grants, user/resource access, and an explicitly authorized operation sequence. This slice adds no hosting/deployment changes and no assistant controls.

## Validate

Run the native Node test runner directly from the repository root:

```sh
node --test apps/spe-playground/test/*.test.mjs
```

The tests execute the real engine using a small Web Storage fixture, including injected storage failures, and the real static HTTP server on loopback with an ephemeral port. No filesystem fixtures, package installation, external service, or simulated API server is needed.
