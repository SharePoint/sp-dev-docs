# SharePoint Embedded V1 onboarding playground

A dependency-free, browser-only learning app: understand how one contract matter maps to one SharePoint Embedded container, try the local Demo, and follow a real-app build roadmap. Original application code is governed by the repository's [MIT code license](../../LICENSE-CODE). This is a static V1 extension of the existing Demo, not a deployed service or tenant-connected client.

## Run locally

Use Node.js 22 or later. From the repository root:

```sh
node apps/spe-playground/server.mjs
```

Open `http://127.0.0.1:4173`. An optional port argument selects another local port, for example `node apps/spe-playground/server.mjs 4174`. The server binds only to loopback and serves an allowlist of frontend assets with GET/HEAD. It has no API endpoints, simulated backend, credentials, or write operations. Opening `index.html` directly as a file is not supported because browser ES modules require an HTTP origin.

No install, build, external dependency, CDN, font request, app registration, Graph traffic, tenant operation, assistant/model call, or deployment is involved. No hosted URL is provided. Publishing Learn documentation does not deploy this application.

## Try the example

The page follows the documentation layout of the [SharePoint Embedded overview on Microsoft Learn](https://learn.microsoft.com/sharepoint/dev/embedded/overview): an article column with breadcrumbs, desktop documentation navigation, an "In this article" table of contents, neutral light/dark surfaces, and restrained callouts. It uses original local markup and CSS, not copied site assets or a dependency on Learn's runtime. The header identifies it as a local static example; it doesn't imitate sign-in, Ask Learn, or an official hosted page.

The page has four native-anchor milestones: understand the model, try the example, build your app, and validate/customer handoff. The article navigation moves above the content on smaller screens; the related documentation remains reachable through the header, breadcrumbs, and guide links. Guide content is semantic HTML and remains readable without JavaScript. Only the local Demo requires JavaScript.

The matter workspace cards come directly from `DemoEngine.getState().containers`, including the unchanged known seed. No separate sample-record array, workflow state, or fake setup is maintained. All contract examples are invented synthetic text. Contract status, approvals, signatures, and due dates are app-owned concerns, not SPE business-process capabilities.

1. Select **Prepare read request** on the seed card. Inspect the bodyless GET draft, then select **Run Demo request**.
2. Select **Prepare new contract workspace**. Edit the invented matter's `displayName` and `description` in the JSON body; the draft changes but the cards and saved state do not.
3. Select **Run Demo request** to create synthetic browser state. Only a successful storage write adds the new card and displays illustrative 201.
4. Select the new card's **Prepare read request**, inspect its exact returned Demo ID, then Run. Reset restores the seed and cards; Retry storage reloads saved state.

The compact request recipe is also available:

1. Choose **List containers**, inspect the editable method/path/body, then select **Run Demo request**. The seed is `demo-container-1`.
2. Choose **Prepare a workspace**, edit its name/description if desired, then **Run Demo request**. The first create after Reset produces `demo-container-2`.
3. Choose **List again**, then **Run Demo request** to see both synthetic containers.
4. Choose **Read the new container**, then **Run Demo request**. This example fills `demo-container-2`; edit the ID to read a different existing Demo container.

Cards and examples only fill drafts and move focus to the request editor. Editing or submitting the draft form does not execute it. Run is the only control that executes an operation. Initialization/retry can save the known seed when this app's storage key is absent; Reset explicitly saves that seed. They do not execute requests. The UI separates the actual parsed request, synthetic response, illustrative status, state effect, and current synthetic state. An empty body is displayed as `null` in the parsed request, meaning no request body, not a sent JSON `null`.

## Supported Demo contract

| Operation | Exact method and relative path | Body | Illustrative status / effect |
| --- | --- | --- | --- |
| List | `GET /storage/fileStorage/containers?$filter=containerTypeId eq demo-container-type` | None | 200; `{ "value": [...] }`; unchanged state |
| Create | `POST /storage/fileStorage/containers` | JSON below | 201; synthetic container; persists one new container |
| Read | `GET /storage/fileStorage/containers/demo-container-1` (or another existing synthetic ID) | None | 200; synthetic container; unchanged state |

```json
{
  "displayName": "Synthetic services agreement",
  "description": "A fictional contract matter for learning. No real documents or parties.",
  "containerTypeId": "demo-container-type"
}
```

The Demo requires exactly these three create properties. `displayName` must be a nonblank string of at most 100 characters; `description` must be a string of at most 500 characters and can be empty. These are Demo limits, not a complete Graph validation specification. Text is preserved, including leading/trailing whitespace when the name is not blank. URL-encoded equivalents of the one supported list filter are accepted.

Bare collection GET is **not** a valid list shape here: actual Microsoft Graph v1.0 list requires a `containerTypeId` filter. All IDs and the type are visibly synthetic `demo-` strings, not GUIDs, and are **invalid for Live use**. Actual Graph creation uses a confidential client; Demo creation is only a synthetic browser-state change.

Other APIs, hosts/absolute URLs, `/v1.0` prefixes, trailing slashes, fragments, encoded IDs, methods, query options, duplicate filters, other filters/types, missing containers, Live IDs, malformed JSON, extra/missing create fields, and bodies on reads are rejected with labelled Demo errors. No error produces a success-shaped response or commits a state change. A parsed request is shown when parsing succeeded; invalid JSON has no parsed request. Error labels are local Demo diagnostics, not Graph error contracts or HTTP responses.

## Storage and safety

Only the synthetic versioned state is saved in `localStorage`, under **`spe-playground.demo.v1`**. The app does not persist drafts, responses, request history, tokens, or credentials. Do not paste secrets or personal data. Learner content is rendered as text, never HTML.

Missing state initializes the known seed. Corrupt or incompatible saved state is explicitly reported and is not silently reset. Storage read/access/write failures are explicit, with no in-memory-only success fallback. Create and Reset write successfully before committing state in memory. Reads do not write. **Reset Demo** overwrites only this app's key with the known seed, repeatably; it never clears all storage, touches another app's keys, or calls a Live API. **Retry storage** explicitly reloads saved state. Another tab's storage-change notification removes stale cards/results and disables execution until Retry; this is a single-page learning app, not an atomic multi-tab database.

## Build guidance and V1 / V2 boundary

The static roadmap follows [`docs/embedded/build/build-app-end-to-end.md`](../../docs/embedded/build/build-app-end-to-end.md): tenant/app model; owning app and container type; standard developer billing; consuming-tenant registration/consent/grants; customer pay-as-you-go when applicable; confidential-backend container creation; then file operations and expansion. Each step identifies why it matters, its owner, the next official Learn procedure, and expected evidence.

The feature map and customer handoff are educational guidance only. File operations, membership, Office, preview/search, workflow integrations, governance, and monitoring are not enabled controls. Customer validation requires real success, forbidden-operation, and error evidence in the authorized target tenant, not a sign-in or local completion badge. No guide progress/configuration is persisted.

All responses are synthetic. 200/201 are illustrative status values, not evidence that an HTTP request occurred. The app proves nothing about Graph service behavior, authentication, authorization, tenant configuration, paging, concurrency, quotas, or real resource lifecycle.

V1 has no tenant connection, real documents, login, credential input, billing setup, or model calls. V2 is a future explicitly authorized test-tenant integration with an owned confidential backend and no synthetic fallback. There is no Live toggle, Connect action, automatic transfer of Demo IDs/data, or deployed URL. Real container creation requires a confidential client even for delegated access; credentials and token acquisition must never live in browser JavaScript/local storage. This slice adds no hosting/deployment changes and no assistant, SDK, model, or runner dependency. Official documentation anchors are allowed; external runtime assets and service calls remain blocked.

## Validate

Run the native Node test runner directly from the repository root:

```sh
node --test apps/spe-playground/test/*.test.mjs
```

The tests execute the real engine using a small Web Storage fixture, including injected storage failures, and the real static HTTP server on loopback with an ephemeral port. HTTP assertions use independent connections (`agent: false`), avoiding stale pooled sockets after synchronous CLI checks; failures are not retried. Controller integration tests load the actual `app.mjs` with a narrow DOM/event fixture, exercise prepare/edit/Run/reset/retry boundaries, and compare cards with committed engine state. These are not browser/layout tests. Guide markup checks cover native anchors, accessible references, canonical order, factual boundaries, and official Learn targets against local source articles; they do not prove external availability. No package installation, external service, or simulated API server is needed. Actual browser, responsive-layout, keyboard, and assistive-technology review remains part of integration review.
