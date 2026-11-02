// Copyright (c) Microsoft Corporation. Licensed under the MIT license.
import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const guide = html.slice(html.indexOf('<section id="build-plan"'));
const roadmap = guide.split('<ol class="roadmap">')[1].split("</ol>")[0];
const text = (markup) => markup.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

test("guide markup uses four native anchor milestones with unique, existing destinations", () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  const nav = html.split('<nav class="journey-nav"')[1].split("</nav>")[0];
  assert.deepEqual([...nav.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]), ["understand", "example", "build-plan", "handoff"]);
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(id), `Missing anchor ${id}`);
  for (const [, references] of html.matchAll(/aria-(?:labelledby|describedby)="([^"]+)"/g)) {
    for (const id of references.split(" ")) assert.ok(ids.includes(id), `Missing accessible reference ${id}`);
  }
  assert.match(html, /href="#example">Try the example/);
  assert.match(html, /href="#build-plan">Build your app/);
});

test("documentation layout provides article landmarks without pretending to be the hosted Learn site", () => {
  assert.equal([...html.matchAll(/<main\b/g)].length, 1);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
  assert.match(html, /<main\b[^>]*id="main-content"/);
  assert.match(html, /href="#main-content">Skip to content/);
  assert.match(html, /aria-label="SharePoint Embedded documentation"/);
  assert.match(html, /aria-label="Breadcrumb"/);
  assert.match(html, /aria-label="In this article"/);
  assert.match(html, /<h2>In this article<\/h2>/);
  assert.match(html, /href="#page-title" aria-current="page"/);
  assert.match(html, /Local static example/);
  assert.ok(!/<(?:button|a)\b[^>]*>\s*(?:Sign in|Ask Learn)\s*</.test(html));
});

test("official documentation anchors resolve to current repository articles and heading fragments", async () => {
  const hrefs = [...new Set([...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((match) => match[1]).filter((href) => !href.startsWith("#")))];
  assert.ok(hrefs.length > 10);
  for (const href of hrefs) {
    const url = new URL(href);
    assert.equal(url.origin, "https://learn.microsoft.com");
    assert.ok(url.pathname.startsWith("/sharepoint/dev/embedded/"));
    assert.equal(url.search, "");
    const article = url.pathname.slice("/sharepoint/dev/".length);
    const markdown = await readFile(new URL(`../../../docs/${article}.md`, import.meta.url), "utf8");
    assert.match(markdown, /^# .+/m, `Missing article title for ${href}`);
    if (url.hash) {
      const headings = [...markdown.matchAll(/^#{1,6}\s+(.+)$/gm)].map((match) => match[1].toLowerCase().replace(/[^\w -]/g, "").replace(/ /g, "-"));
      assert.ok(headings.includes(url.hash.slice(1)), `Missing heading for ${href}`);
    }
  }
});

test("static roadmap follows canonical tenant, app/type, billing, registration, backend, and file order", async () => {
  const canonical = await readFile(new URL("../../../docs/embedded/build/build-app-end-to-end.md", import.meta.url), "utf8");
  assert.match(canonical, /canonical build sequence/);
  assert.deepEqual([...roadmap.matchAll(/<h3>(.*?)<\/h3>/g)].map((match) => match[1]), [
    "Choose the app and tenant model",
    "Register the owning app and create its container type",
    "Configure standard billing when the developer pays",
    "Register in each consuming tenant and verify access gates",
    "Activate customer pay-as-you-go when the customer pays",
    "Create the first container through a confidential backend",
    "Prove the file loop, then grow the app",
  ]);
  for (const item of roadmap.matchAll(/<article>([\s\S]*?)<\/article>/g)) {
    for (const label of ["Who owns this", "Next action", "Expected evidence"]) assert.ok(item[1].includes(`<dt>${label}</dt>`));
    assert.match(item[1], /https:\/\/learn\.microsoft\.com\/sharepoint\/dev\/embedded\//);
  }
});

test("guide states the business-object mapping without attributing contract workflow to SPE", () => {
  const explanation = text(html.split('<section id="understand"')[1].split("</section>")[0]);
  assert.match(explanation, /One matter maps to one container/);
  assert.match(explanation, /content, membership, and security boundary/);
  assert.match(explanation, /Drafting, review, approval, signature, and renewal.*not SPE operations/);
  assert.match(explanation, /due dates belong to your app/);
  assert.match(explanation, /DriveItems/);
});

test("guide distinguishes immutable billing, owning/consuming tenants, and all access gates", () => {
  const content = text(roadmap);
  for (const fact of [
    /single-tenant.*multitenant/,
    /content stays in the consuming tenant/,
    /A single tenant can both own and consume an app/,
    /A trial is single-tenant and still requires registration/,
    /One owning app owns exactly one container type/,
    /immutable billing classification/,
    /trial.*standard.*directToCustomer/,
    /trial is evaluation, not production, and cannot be converted in place/,
    /Changing classification requires a new container type/,
    /Graph consent or successful sign-in alone does not grant content access/,
    /Delegated operations also need the user's container membership and role/,
    /delegated FileStorageContainer.Selected does not inherently require admin consent/,
    /bounded retries\/backoff and a deadline/,
    /after registration and before container access/,
    /Container creation requires a confidential client, including delegated creation/,
    /never browser JavaScript or local storage/,
    /container ID is its Graph drive ID/,
    /create a container, create a folder, upload a small file, read and download it, then confirm user permissions/,
    /Store returned container and DriveItem IDs, not reconstructed URLs/,
    /All file and permission APIs remain docs-only in V1/,
  ]) assert.match(content, fact);
});

test("guide labels expansion as follow-up guidance and requires positive, forbidden, and real error evidence", () => {
  const content = text(guide);
  for (const fact of [
    /Follow-up guidance, not enabled capabilities/,
    /Office coauthoring/,
    /Preview.*search/,
    /Business metadata.*workflow/,
    /Governance.*operations/,
    /support contact, incident escalation, billing model and named billing owner/,
    /registration, required Graph consent, type-level grants, valid billing/,
    /each test user's resource membership\/role/,
    /Denied-access evidence.*nonmember.*read-only user's forbidden write/,
    /actual service status\/error codes, request or correlation IDs/,
    /Exclude tokens, credentials, and document content/,
    /No completion badges or readiness state are stored/,
  ]) assert.match(content, fact);
  assert.ok(!/type="checkbox"|<form\b|<button\b/.test(guide));
});

test("V1/V2 boundary is static, explicit, and has no credential, connection, or enabled future-operation controls", () => {
  const boundary = text(html.split('<aside class="boundary"')[1].split("</aside>")[0]);
  assert.match(html, /V1 \/ STATIC DEMO/);
  assert.match(boundary, /V1 has no tenant connection, real documents, credentials, authentication, billing setup, or model calls/);
  assert.match(boundary, /V2 would require an explicitly authorized test tenant and an owned confidential backend/);
  assert.match(boundary, /real errors and no synthetic fallback/);
  assert.match(boundary, /no automatic transfer of Demo IDs or data into Live/);
  assert.ok(!/type="(?:password|email)"|onclick=|<iframe\b/.test(html));
  assert.deepEqual([...html.matchAll(/<input\b[^>]*id="([^"]+)"/g)].map((match) => match[1]), ["method"]);
  assert.match(html, /<noscript>.*build plan, and handoff guidance remain readable/s);
});
