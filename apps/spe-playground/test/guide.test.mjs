// Copyright (c) Microsoft Corporation. Licensed under the MIT license.
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { startBrowser } from "./browser.mjs";
import { createSeedState, STORAGE_KEY, COLLECTION_PATH, LIST_PATH, CONTAINER_TYPE } from "../engine.mjs";

let browser;
before(async () => { browser = await startBrowser(); });
after(async () => { await browser?.close(); });

async function documentationLinkModel(href) {
  const url = new URL(href);
  assert.equal(url.origin, "https://learn.microsoft.com");
  assert.ok(url.pathname.startsWith("/sharepoint/dev/embedded/"));
  assert.equal(url.search, "");
  const markdown = await readFile(new URL(`../../../docs/${url.pathname.slice("/sharepoint/dev/".length)}.md`, import.meta.url), "utf8");
  const headings = [];
  const links = [];
  const sections = [];
  let section;
  let fence = false;
  for (const line of markdown.split("\n")) {
    if (/^\s*```/.test(line)) { fence = !fence; continue; }
    if (fence) continue;
    const heading = /^(#{1,6})\s+(.+?)\s*#*$/.exec(line);
    if (heading) {
      const name = heading[2].replace(/[`*]/g, "");
      const slug = name.toLowerCase().replace(/[^\w -]/g, "").replace(/ /g, "-");
      headings.push({ level: heading[1].length, name, slug });
      if (heading[1].length === 2) {
        section = { name, links: [] };
        sections.push(section);
      }
    }
    for (const [, target] of line.matchAll(/(?<!!)\[[^\]]+\]\(([^)\s]+)\)/g)) {
      const link = new URL(target, url);
      if (link.pathname.endsWith(".md")) link.pathname = link.pathname.slice(0, -3);
      links.push(link.href);
      section?.links.push(link.href);
    }
  }
  assert.equal(headings.filter(({ level }) => level === 1).length, 1, href);
  if (url.hash) assert.ok(headings.some(({ slug }) => slug === url.hash.slice(1)), `Missing heading destination: ${href}`);
  return { headings, links, sections };
}

function assertNoServiceTraffic(page) {
  const requests = page.observed.filter(({ method }) => method === "Network.requestWillBeSent").map(({ params }) => params.request);
  assert.deepEqual([...new Set(requests.map(({ url }) => new URL(url).pathname))].sort(), ["/", "/app.mjs", "/engine.mjs", "/styles.css"]);
  for (const request of requests) {
    assert.equal(new URL(request.url).origin, browser.origin);
    assert.equal(new URL(request.url).search, "");
    assert.equal(request.method, "GET");
  }
  assert.deepEqual(page.observed.filter(({ method }) => method === "Runtime.exceptionThrown"), []);
  assert.deepEqual(page.observed.filter(({ method, params }) => method === "Log.entryAdded" && params.entry.level === "error"), []);
}

function executionSnapshot(page) {
  return page.evaluate((key) => ({
    saved: localStorage.getItem(key),
    parsed: document.querySelector("#parsed").textContent,
    response: document.querySelector("#response").textContent,
  }), STORAGE_KEY);
}

test("the browser consumes guide landmarks, accessible references, and a single native-anchor article navigation", async (t) => {
  const page = await browser.page(t);
  const model = await page.evaluate(() => ({
    language: document.documentElement.lang,
    mainCount: document.querySelectorAll("main").length,
    titleCount: document.querySelectorAll("h1").length,
    ids: [...document.querySelectorAll("[id]")].map((element) => element.id),
    fragments: [...document.querySelectorAll('a[href^="#"]')].map((link) => ({
      id: link.hash.slice(1), exists: Boolean(document.getElementById(link.hash.slice(1))),
    })),
    references: [...document.querySelectorAll("[aria-labelledby], [aria-describedby]")].flatMap((element) =>
      ["aria-labelledby", "aria-describedby"].flatMap((attribute) => (element.getAttribute(attribute) ?? "").split(/\s+/).filter(Boolean).map((id) => ({
        id, exists: Boolean(document.getElementById(id)),
      })))),
    navigations: [...document.querySelectorAll("nav")].map((nav) => ({
      name: nav.getAttribute("aria-label"),
      destinations: [...nav.querySelectorAll('a[href^="#"]')].map((link) => link.hash),
    })),
    entries: [...document.querySelectorAll(".start-links a")].map((link) => link.hash),
    model: [...document.querySelectorAll(".model-flow > div")].map((pair) => ({
      term: pair.querySelector("dt").innerText, definition: pair.querySelector("dd").innerText,
    })),
    guideControls: document.querySelectorAll("#understand input, #build-plan :is(input,textarea,button,form), #handoff :is(input,textarea,button,form)").length,
    fields: [...document.querySelectorAll("input, textarea, select")].map((element) => element.id),
    forms: document.forms.length,
    actions: [...document.querySelectorAll("button")].map((button) => button.dataset.example
      ? `prepare:${button.dataset.example}` : button.closest("#matter-list") ? "prepare:read" : button.id),
    currentPage: document.querySelector('a[aria-current="page"]').hash,
  }));
  assert.equal(model.language, "en");
  assert.equal(model.mainCount, 1);
  assert.equal(model.titleCount, 1);
  assert.equal(new Set(model.ids).size, model.ids.length);
  for (const reference of [...model.fragments, ...model.references]) assert.equal(reference.exists, true, reference.id);
  assert.deepEqual(model.navigations.map(({ name }) => name), ["SharePoint Embedded documentation", "Breadcrumb", "In this article"]);
  assert.deepEqual(model.navigations.filter(({ name }) => name === "In this article").map(({ destinations }) => destinations),
    [["#understand", "#example", "#build-plan", "#handoff"]]);
  assert.deepEqual(model.entries, ["#example", "#build-plan"]);
  assert.equal(model.currentPage, "#page-title");
  assert.equal(model.model.length, 3);
  assert.ok(model.model.every(({ term, definition }) => term && definition));
  assert.equal(model.guideControls, 0);
  assert.deepEqual(model.fields, ["method", "path", "body"]);
  assert.equal(model.forms, 1);
  assert.deepEqual(model.actions, ["prepare:create", "prepare:read", "prepare:list", "prepare:create", "prepare:list", "prepare:read", "run", "retry", "reset"]);

  const { nodes } = await page.command("Accessibility.getFullAXTree");
  for (const name of ["Method", "Relative Graph-style path", "JSON body"]) {
    assert.ok(nodes.some((node) => !node.ignored && node.role.value === "textbox" && node.name.value === name), `Missing accessible editor: ${name}`);
  }
  assert.ok(nodes.some((node) => node.role.value === "status" && node.properties.some(({ name, value }) => name === "live" && value.value === "polite")));
  const before = await executionSnapshot(page);
  for (const destination of ["example", "build-plan"]) {
    await page.click(`.start-links a[href="#${destination}"]`);
    assert.equal(await page.evaluate(() => location.hash), `#${destination}`);
    assert.deepEqual(await executionSnapshot(page), before);
  }
  for (const destination of ["understand", "example", "build-plan", "handoff"]) {
    await page.click(`.journey-nav a[href="#${destination}"]`);
    assert.equal(await page.evaluate(() => location.hash), `#${destination}`);
    assert.deepEqual(await executionSnapshot(page), before);
  }
  assertNoServiceTraffic(page);
});

test("the consumed roadmap links follow canonical procedures and retain structured handoff and expansion guidance", async (t) => {
  const page = await browser.page(t);
  const model = await page.evaluate(() => {
    const links = (element) => [...element.querySelectorAll("a[href]")].map((link) => link.href);
    return {
      links: links(document).filter((href) => new URL(href).origin !== location.origin),
      steps: [...document.querySelectorAll(".roadmap > li > article")].map((article) => ({
        heading: article.querySelector("h3").innerText,
        evidence: [...article.querySelectorAll(":scope > dl > div")].map((pair) => ({
          term: pair.querySelector("dt").innerText,
          definition: pair.querySelector("dd").innerText,
          links: links(pair.querySelector("dd")),
        })),
      })),
      featureRows: [...document.querySelectorAll(".feature-map tbody tr")].map((row) => ({
        heading: row.querySelector('th[scope="row"]').innerText,
        cells: [...row.querySelectorAll("td")].map((cell) => ({ text: cell.innerText, links: links(cell) })),
      })),
      handoffLinks: links(document.querySelector("#handoff")),
      validation: [...document.querySelectorAll("#handoff .validation dt")].map((term) => ({
        term: term.innerText, definition: term.nextElementSibling.innerText,
      })),
    };
  });
  const documentation = new Map();
  assert.ok(new Set(model.links).size > 10);
  for (const href of new Set(model.links)) documentation.set(href, await documentationLinkModel(href));
  assert.equal(model.steps.length, 7);
  assert.equal(new Set(model.steps.map(({ heading }) => heading)).size, 7);
  for (const step of model.steps) {
    assert.ok(step.heading);
    assert.deepEqual(step.evidence.map(({ term }) => term), ["Who owns this", "Next action", "Expected evidence"]);
    assert.ok(step.evidence.every(({ definition }) => definition));
    assert.ok(step.evidence[1].links.length > 0);
  }
  const root = "https://learn.microsoft.com/sharepoint/dev/embedded/";
  const core = [
    "plan/app-tenant-architecture", "build/create-container-type", "plan/choose-billing-model",
    "build/register-application-permissions", "build/create-manage-containers", "build/manage-files",
  ].map((path) => `${root}${path}`);
  const canonical = documentation.get(`${root}build/build-app-end-to-end`);
  const canonicalOrder = canonical.sections.filter(({ name }) => /^\d+\./.test(name))
    .flatMap(({ links }) => links).filter((href) => core.includes(href));
  assert.equal(canonicalOrder.length, core.length);
  const actions = model.steps.map(({ evidence }) => evidence[1].links.map((href) => href.split("#")[0]));
  assert.deepEqual(actions.map((links) => links.find((href) => core.includes(href))).filter(Boolean), canonicalOrder);
  const customerBilling = `${root}admin/setup-billing-microsoft-365-admin-center`;
  assert.ok(documentation.get(`${root}plan/choose-billing-model`).links.includes(customerBilling));
  assert.equal(actions.findIndex((links) => links.includes(customerBilling)),
    actions.findIndex((links) => links.includes(`${root}build/register-application-permissions`)) + 1);
  assert.equal(model.featureRows.length, 6);
  for (const row of model.featureRows) {
    assert.ok(row.heading);
    assert.equal(row.cells.length, 2);
    assert.ok(row.cells.every(({ text }) => text));
  }
  for (const path of ["publish/prepare-customer-installation", "publish/customer-tenant-setup-guide", "publish/validate-customer-installation"]) {
    assert.ok(model.handoffLinks.includes(`${root}${path}`));
  }
  assert.deepEqual(model.validation.map(({ term }) => term), ["Success evidence", "Denied-access evidence", "Error evidence"]);
  assert.ok(model.validation.every(({ definition }) => definition));
});

test("without JavaScript the guide is rendered, disclosures and keyboard anchors work, and Run stays unavailable", async (t) => {
  const page = await browser.page(t, { javascript: false });
  assert.deepEqual(await page.evaluate(() => ({
    cards: document.querySelector("#matter-list").children.length,
    disabled: document.querySelector("#run").disabled,
    saved: localStorage.length,
    noticeVisible: document.querySelector("noscript p").checkVisibility(),
  })), { cards: 0, disabled: true, saved: 0, noticeVisible: true });
  await page.press("Tab", "Tab", 9);
  assert.equal(await page.evaluate(() => document.activeElement.hash), "#main-content");
  await page.press("Enter", "Enter", 13);
  assert.equal(await page.evaluate(() => document.activeElement.id), "main-content");
  for (const id of ["understand", "build-plan", "handoff"]) {
    await page.click(`.journey-nav a[href="#${id}"]`);
    const visible = await page.evaluate((id) => {
      const section = document.getElementById(id);
      return {
        hash: location.hash, heading: section.querySelector("h2").checkVisibility(),
        paragraphs: [...section.querySelectorAll("p")].filter((element) => element.checkVisibility() && element.innerText.trim()).length,
      };
    }, id);
    assert.equal(visible.hash, `#${id}`);
    assert.equal(visible.heading, true);
    assert.ok(visible.paragraphs > 0);
  }
  await page.click(".boundary summary");
  assert.equal(await page.evaluate(() => document.querySelector(".boundary details p").checkVisibility()), true);
  await page.click(".roadmap details summary");
  assert.equal(await page.evaluate(() => document.querySelector(".permission-purposes dd").checkVisibility()), true);
  assert.equal(await page.evaluate(() => localStorage.length), 0);
});

test("native preparation, editing, submission, Run and reset preserve text, storage and network boundaries", async (t) => {
  const page = await browser.page(t, { initialization: 'localStorage.setItem("another-app", "keep me");' });
  const initial = await executionSnapshot(page);
  assert.deepEqual(JSON.parse(initial.saved), createSeedState());
  const count = await page.evaluate(() => document.querySelectorAll("[data-example]").length);
  assert.ok(count >= 4);
  for (let index = 0; index < count; index++) {
    await page.click("[data-example]", index);
    assert.equal(await page.evaluate(() => document.activeElement.id), "request-heading");
    assert.deepEqual(await executionSnapshot(page), initial);
  }
  await page.click("#matter-list button");
  assert.deepEqual(await page.evaluate(() => ["method", "path", "body"].map((id) => document.getElementById(id).value)),
    ["GET", `${COLLECTION_PATH}/demo-container-1`, ""]);
  await page.evaluate(() => {
    globalThis.observedSubmissions = [];
    document.querySelector("form").addEventListener("submit", (event) => {
      observedSubmissions.push({ prevented: event.defaultPrevented, trusted: event.isTrusted });
    });
  });
  await page.click("#method");
  await page.press("Enter", "Enter", 13);
  assert.deepEqual(await page.evaluate(() => observedSubmissions), [{ prevented: true, trusted: true }]);
  assert.deepEqual(await executionSnapshot(page), initial);

  const body = {
    displayName: '<img src="/unexpected" onerror="globalThis.learnerExecuted=true">',
    description: '<svg onload="globalThis.learnerExecuted=true"></svg> & literal text',
    containerTypeId: CONTAINER_TYPE,
  };
  await page.click('[data-example="create"]');
  await page.fill("#body", JSON.stringify(body));
  assert.deepEqual(await executionSnapshot(page), initial);
  await page.click("#run");
  const created = await page.evaluate((key) => ({
    state: JSON.parse(localStorage.getItem(key)),
    displayed: JSON.parse(document.querySelector("#state").textContent),
    request: JSON.parse(document.querySelector("#parsed").textContent),
    response: JSON.parse(document.querySelector("#response").textContent),
    status: document.querySelector("#response-status").innerText,
    cards: [...document.querySelectorAll("#matter-list li")].map((card) => ({
      name: card.querySelector("h4").textContent, description: card.querySelector("p").textContent,
      id: card.querySelector("code").textContent, label: card.querySelector("button").getAttribute("aria-label"),
    })),
    injectedElements: document.querySelectorAll("#matter-list :is(img,svg,script,iframe), #response *, #state *").length,
    executed: globalThis.learnerExecuted === true,
    focus: document.activeElement.id,
  }), STORAGE_KEY);
  const container = { id: "demo-container-2", ...body };
  assert.deepEqual(created.request, { method: "POST", path: COLLECTION_PATH, body });
  assert.deepEqual(created.response, container);
  assert.deepEqual(created.state, { version: 1, nextId: 3, containers: [...createSeedState().containers, container] });
  assert.deepEqual(created.displayed, created.state);
  assert.deepEqual(created.cards, created.state.containers.map(({ displayName, description, id }) => ({
    name: displayName, description, id, label: `Prepare read request for ${displayName}`,
  })));
  assert.match(created.status, /Illustrative status 201.*synthetic/);
  assert.equal(created.focus, "result-heading");
  assert.equal(created.injectedElements, 0);
  assert.equal(created.executed, false);
  await page.click("#matter-list li:last-child button");
  await page.click("#run");
  assert.deepEqual(JSON.parse((await executionSnapshot(page)).response), container);
  await page.fill("#method", "GET");
  await page.fill("#path", LIST_PATH);
  await page.click("#run");
  assert.deepEqual(JSON.parse((await executionSnapshot(page)).response), { value: created.state.containers });
  await page.fill("#body", "{");
  await page.click("#run");
  assert.equal(JSON.parse((await executionSnapshot(page)).response).error.code, "InvalidJson");
  assert.equal((await executionSnapshot(page)).saved, JSON.stringify(created.state));
  assert.equal(await page.evaluate(() => document.activeElement.id), "error");
  const { nodes } = await page.command("Accessibility.getFullAXTree");
  assert.ok(nodes.some((node) => !node.ignored && node.role.value === "alert"
    && node.properties.some(({ name, value }) => name === "live" && value.value === "assertive")));
  for (let iteration = 0; iteration < 2; iteration++) {
    await page.click("#reset");
    assert.deepEqual(await executionSnapshot(page), initial);
    assert.equal(await page.evaluate(() => document.querySelector("#matter-list").children.length), 1);
    assert.equal(await page.evaluate(() => document.activeElement.id), "state-heading");
    assert.equal(await page.evaluate(() => document.querySelector("#body").value), "{");
  }
  assert.deepEqual(await page.evaluate(() => ({
    entries: Object.fromEntries(Object.entries(localStorage)), sessionKeys: Object.keys(sessionStorage),
  })), { entries: { "another-app": "keep me", [STORAGE_KEY]: JSON.stringify(createSeedState()) }, sessionKeys: [] });
  const storageEvents = page.observed.filter(({ method }) => method.startsWith("DOMStorage.domStorage"));
  assert.ok(storageEvents.some(({ params }) => params.key === STORAGE_KEY && JSON.parse(params.newValue).containers.length === 2));
  for (const { method, params } of storageEvents) {
    assert.ok(["DOMStorage.domStorageItemAdded", "DOMStorage.domStorageItemUpdated"].includes(method), method);
    assert.ok(["another-app", STORAGE_KEY].includes(params.key), params.key);
  }
  assertNoServiceTraffic(page);
});

for (const failure of ["access", "read", "write", "corrupt"]) {
  test(`browser storage ${failure} failure is visible and requires explicit recovery`, async (t) => {
    const page = await browser.page(t, { initialization: `(() => {
      const failure = ${JSON.stringify(failure)};
      localStorage.setItem("another-app", "keep me");
      if (failure === "corrupt") localStorage.setItem(${JSON.stringify(STORAGE_KEY)}, "{corrupt");
      const descriptor = Object.getOwnPropertyDescriptor(window, "localStorage");
      const method = failure === "read" ? "getItem" : "setItem";
      const original = Storage.prototype[method];
      if (failure === "access") Object.defineProperty(window, "localStorage", {
        configurable: true, get() { throw new DOMException("Test denied storage access", "SecurityError"); },
      });
      else if (failure !== "corrupt") Storage.prototype[method] = function () {
        throw new DOMException("Test denied storage operation", "QuotaExceededError");
      };
      globalThis.restoreStorage = () => {
        if (failure === "access") Object.defineProperty(window, "localStorage", descriptor);
        else Storage.prototype[method] = original;
      };
    })();` });
    const unavailable = await page.evaluate(() => ({
      cards: document.querySelector("#matter-list").children.length,
      disabled: document.querySelector("#run").disabled,
      error: document.querySelector("#error").checkVisibility(),
      focus: document.activeElement.id,
      message: document.querySelector("#error").innerText,
    }));
    assert.equal(unavailable.cards, 0);
    assert.equal(unavailable.disabled, true);
    assert.equal(unavailable.error, true);
    assert.equal(unavailable.focus, "error");
    assert.ok(unavailable.message.includes({
      access: "StorageUnavailable", read: "StorageReadFailed", write: "StorageWriteFailed", corrupt: "StorageCorrupt",
    }[failure]));
    await page.evaluate(() => restoreStorage());
    assert.equal(await page.evaluate(() => localStorage.getItem("another-app")), "keep me");
    assert.equal(await page.evaluate((key) => localStorage.getItem(key), STORAGE_KEY), failure === "corrupt" ? "{corrupt" : null);
    await page.click(failure === "corrupt" ? "#reset" : "#retry");
    assert.deepEqual(await page.evaluate((key) => ({
      saved: JSON.parse(localStorage.getItem(key)), displayed: JSON.parse(document.querySelector("#state").textContent),
      cards: document.querySelector("#matter-list").children.length, disabled: document.querySelector("#run").disabled,
      error: document.querySelector("#error").checkVisibility(),
    }), STORAGE_KEY), { saved: createSeedState(), displayed: createSeedState(), cards: 1, disabled: false, error: false });
    assertNoServiceTraffic(page);
  });
}

test("rendered documentation typography and navigation reflow without mobile document overflow", async (t) => {
  const page = await browser.page(t);
  const layouts = [];
  for (const scheme of ["light", "dark"]) {
    await page.command("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: scheme }] });
    for (const width of [1440, 390, 320]) {
      await page.command("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: false });
      const layout = await page.evaluate(() => {
        const body = getComputedStyle(document.body);
        const title = getComputedStyle(document.querySelector("h1"));
        return {
          viewport: innerWidth, document: document.documentElement.scrollWidth,
          bodyFont: body.fontSize, bodyLine: body.lineHeight,
          foreground: body.color, background: body.backgroundColor,
          titleFont: title.fontSize, titleLine: title.lineHeight, titleWeight: title.fontWeight,
          articleWidth: document.querySelector(".article-body").getBoundingClientRect().width,
          sidebar: document.querySelector(".docs-sidebar").checkVisibility(),
          navigationCount: [...document.querySelectorAll('nav[aria-label="In this article"]')].filter((nav) => nav.checkVisibility()).length,
        };
      });
      assert.equal(layout.viewport, width);
      assert.ok(layout.document <= width, JSON.stringify(layout));
      assert.equal(layout.bodyFont, "16px");
      assert.equal(layout.bodyLine, "28px");
      assert.equal(layout.foreground, scheme === "light" ? "rgb(23, 23, 23)" : "rgb(255, 255, 255)");
      assert.equal(layout.background, scheme === "light" ? "rgb(255, 255, 255)" : "rgb(31, 31, 31)");
      assert.ok(layout.articleWidth <= 768);
      assert.equal(layout.navigationCount, 1);
      assert.equal(layout.sidebar, width === 1440);
      if (width === 1440) {
        assert.equal(layout.titleFont, "40px");
        assert.equal(layout.titleLine, "52px");
        assert.equal(layout.titleWeight, "600");
      }
      layouts.push({ scheme, ...layout });
    }
  }
  t.diagnostic(JSON.stringify({ layouts }));
});

test("keyboard-only preparation and mobile Run create only the explicitly submitted synthetic matter", async (t) => {
  const page = await browser.page(t, { width: 320 });
  const initial = await executionSnapshot(page);
  let tabs = 0;
  while (await page.evaluate(() => document.activeElement.dataset.example !== "create")) {
    assert.ok(++tabs < 60, "Create preparation must be reachable through native Tab navigation");
    await page.press("Tab", "Tab", 9);
  }
  await page.press("Enter", "Enter", 13);
  assert.equal(await page.evaluate(() => document.activeElement.id), "request-heading");
  assert.deepEqual(await executionSnapshot(page), initial);
  for (const id of ["method", "path", "body"]) {
    await page.press("Tab", "Tab", 9);
    assert.equal(await page.evaluate(() => document.activeElement.id), id);
  }
  const body = {
    displayName: "Synthetic keyboard matter",
    description: "x".repeat(500),
    containerTypeId: CONTAINER_TYPE,
  };
  await page.press("a", "KeyA", 65, 2);
  await page.command("Input.insertText", { text: JSON.stringify(body) });
  assert.deepEqual(await executionSnapshot(page), initial);
  await page.press("Tab", "Tab", 9);
  assert.equal(await page.evaluate(() => document.activeElement.id), "run");
  await page.press("Enter", "Enter", 13);
  const result = await page.evaluate((key) => ({
    response: JSON.parse(document.querySelector("#response").textContent),
    status: document.querySelector("#response-status").innerText,
    saved: JSON.parse(localStorage.getItem(key)),
    cardCount: document.querySelector("#matter-list").children.length,
    focus: document.activeElement.id,
    viewport: innerWidth,
    document: document.documentElement.scrollWidth,
    entries: Object.keys(localStorage),
  }), STORAGE_KEY);
  assert.deepEqual(result.response, { id: "demo-container-2", ...body });
  assert.match(result.status, /Illustrative status 201.*synthetic/);
  assert.equal(result.cardCount, 2);
  assert.equal(result.focus, "result-heading");
  assert.equal(result.saved.containers[1].description.length, 500);
  assert.equal(result.viewport, 320);
  assert.ok(result.document <= result.viewport);
  assert.deepEqual(result.entries, [STORAGE_KEY]);
  assertNoServiceTraffic(page);
  t.diagnostic(JSON.stringify({ keyboardCreate: result }));
});

async function safetyView(page) {
  return page.evaluate((key) => ({
    saved: localStorage.getItem(key),
    displayed: document.querySelector("#state").textContent,
    cards: [...document.querySelectorAll("#matter-list li")].map((card) => ({
      name: card.querySelector("h4").textContent,
      id: card.querySelector("code").textContent,
    })),
    response: document.querySelector("#response").textContent,
    status: document.querySelector("#response-status").innerText,
    parsed: document.querySelector("#parsed").textContent,
    error: document.querySelector("#error").hidden ? null : document.querySelector("#error").innerText,
    disabled: document.querySelector("#run").disabled,
    unrelated: localStorage.getItem("another-app"),
  }), STORAGE_KEY);
}

async function fillDraft(page, { method = "GET", path = LIST_PATH, body = "" } = {}) {
  await page.fill("#method", method);
  await page.fill("#path", path);
  await page.fill("#body", body);
}

async function observeStorageChange(page, key) {
  await page.evaluate((key) => {
    globalThis.nextStorageChange = new Promise((resolve) => {
      function changed(event) {
        if (event.storageArea !== localStorage || event.key !== key) return;
        removeEventListener("storage", changed);
        resolve({ key: event.key, trusted: event.isTrusted, oldValue: event.oldValue, newValue: event.newValue });
      }
      addEventListener("storage", changed);
    });
  }, key);
}

test("native Run rejects unsupported requests after success without stale results, writes, or service traffic", async (t) => {
  const page = await browser.page(t);
  const initial = await safetyView(page);
  const body = { displayName: "Synthetic matter", description: "", containerTypeId: CONTAINER_TYPE };
  const failures = [
    ["bare list", { path: COLLECTION_PATH }, "UnsupportedQuery"],
    ["other filter", { path: `${COLLECTION_PATH}?$filter=displayName eq sample` }, "UnsupportedQuery"],
    ["extra option", { path: `${LIST_PATH}&$top=1` }, "UnsupportedQuery"],
    ["duplicate filter", { path: `${LIST_PATH}&$filter=containerTypeId eq ${CONTAINER_TYPE}` }, "UnsupportedQuery"],
    ["Live type", { path: `${COLLECTION_PATH}?$filter=containerTypeId eq 00000000-0000-0000-0000-000000000001` }, "UnsupportedQuery"],
    ["absolute Graph URL", { path: `https://graph.microsoft.com/v1.0${LIST_PATH}` }, "UnsupportedPath"],
    ["file API", { path: "/drives/demo-container-1/root/children" }, "UnsupportedPath"],
    ["encoded ID", { path: `${COLLECTION_PATH}/demo-container-%31` }, "UnsupportedPath"],
    ["Live ID", { path: `${COLLECTION_PATH}/00000000-0000-0000-0000-000000000001` }, "UnsupportedPath"],
    ["missing Demo ID", { path: `${COLLECTION_PATH}/demo-container-999` }, "ContainerNotFound"],
    ["DELETE", { method: "DELETE", path: `${COLLECTION_PATH}/demo-container-1` }, "UnsupportedMethod"],
    ["read body", { path: `${COLLECTION_PATH}/demo-container-1`, body: "null" }, "UnexpectedBody"],
    ["invalid JSON", { method: "POST", path: COLLECTION_PATH, body: "{" }, "InvalidJson"],
    ["extra create field", { method: "POST", path: COLLECTION_PATH, body: JSON.stringify({ ...body, id: "demo-container-2" }) }, "InvalidBody"],
    ["non-Demo create type", { method: "POST", path: COLLECTION_PATH, body: JSON.stringify({ ...body, containerTypeId: "real-type" }) }, "InvalidBody"],
  ];
  const transcript = [];
  for (const [name, request, code] of failures) {
    await page.click('[data-example="list"]');
    await page.click("#run");
    assert.match((await safetyView(page)).status, /Illustrative status 200/);
    await fillDraft(page, request);
    await page.click("#run");
    const failed = await safetyView(page);
    assert.equal(JSON.parse(failed.response).error.code, code, name);
    assert.match(failed.status, /No HTTP status or Microsoft Graph response/);
    assert.equal(failed.saved, initial.saved, name);
    assert.equal(failed.displayed, initial.displayed, name);
    assert.deepEqual(failed.cards, initial.cards, name);
    assert.ok(failed.error.includes(`[${code}]`), name);
    assert.equal(await page.evaluate(() => document.activeElement.id), "error");
    if (code === "InvalidJson") assert.match(failed.parsed, /No parsed request/);
    else assert.equal(JSON.parse(failed.parsed).path, request.path ?? LIST_PATH);
    transcript.push({ action: name, error: code, responseStatus: failed.status });
  }
  const writes = page.observed.filter(({ method }) => method === "DOMStorage.domStorageItemAdded" || method === "DOMStorage.domStorageItemUpdated");
  assert.equal(writes.length, 1);
  assert.equal(writes[0].params.key, STORAGE_KEY);
  await page.click('[data-example="create"]');
  await page.click("#run");
  assert.equal(JSON.parse((await safetyView(page)).response).id, "demo-container-2");
  assertNoServiceTraffic(page);
  t.diagnostic(JSON.stringify({ rejectedRequests: transcript, stateAfterFailures: JSON.parse(initial.saved), firstCreatedId: "demo-container-2" }));
});

test("native storage quota and injected Reset write failures preserve committed cards and ID allocation", async (t) => {
  const page = await browser.page(t, { initialization: 'localStorage.setItem("another-app", "keep me");' });
  const initial = await safetyView(page);
  await page.click('[data-example="create"]');
  await page.command("DOMStorage.disable");
  const quota = await page.evaluate(() => {
    let low = 0;
    let high = 6 * 1024 * 1024;
    let quotaError;
    while (low < high) {
      const middle = Math.ceil((low + high) / 2);
      try {
        localStorage.setItem("owned-quota-fixture", "x".repeat(middle));
        low = middle;
      } catch (error) {
        if (!(error instanceof DOMException) || error.name !== "QuotaExceededError") throw error;
        quotaError = error.name;
        high = middle - 1;
      }
    }
    localStorage.setItem("owned-quota-fixture", "x".repeat(low));
    return { filledCharacters: low, actualBrowserException: quotaError };
  });
  assert.equal(quota.actualBrowserException, "QuotaExceededError");
  await page.click("#run");
  const failed = await safetyView(page);
  assert.equal(JSON.parse(failed.response).error.code, "StorageWriteFailed");
  assert.equal(failed.saved, initial.saved);
  assert.equal(failed.displayed, initial.displayed);
  assert.deepEqual(failed.cards, initial.cards);
  assert.match(failed.status, /No HTTP status/);
  await page.evaluate(() => localStorage.removeItem("owned-quota-fixture"));
  assert.equal((await safetyView(page)).response, failed.response);
  await page.click("#run");
  const committed = await safetyView(page);
  assert.equal(JSON.parse(committed.response).id, "demo-container-2");
  assert.equal(committed.cards.length, 2);
  assert.deepEqual(JSON.parse(committed.displayed), JSON.parse(committed.saved));
  await page.evaluate(() => {
    const original = Storage.prototype.setItem;
    Storage.prototype.setItem = function () { throw new DOMException("Test quota exhausted", "QuotaExceededError"); };
    globalThis.restoreStorageWrites = () => { Storage.prototype.setItem = original; };
  });
  await page.click("#reset");
  const resetFailed = await safetyView(page);
  assert.ok(resetFailed.error.includes("[StorageWriteFailed]"));
  assert.equal(resetFailed.saved, committed.saved);
  assert.equal(resetFailed.displayed, committed.displayed);
  assert.deepEqual(resetFailed.cards, committed.cards);
  await page.evaluate(() => restoreStorageWrites());
  await page.click("#reset");
  const reset = await safetyView(page);
  assert.deepEqual(JSON.parse(reset.saved), createSeedState());
  assert.equal(reset.unrelated, "keep me");
  assertNoServiceTraffic(page);
  t.diagnostic(JSON.stringify({
    quota,
    failedCreate: JSON.parse(failed.response), stateAfterFailedCreate: JSON.parse(failed.saved),
    successfulRetry: JSON.parse(committed.response), failedReset: resetFailed.error,
    finalState: JSON.parse(reset.saved), unrelated: reset.unrelated,
  }));
});

test("actual same-origin pages invalidate stale state, reload saved matters, and require explicit storage recovery", async (t) => {
  const first = await browser.page(t, { initialization: 'localStorage.setItem("another-app", "keep me");' });
  const second = await browser.page(t, { browserContextId: first.browserContextId });
  await first.click("#run");
  assert.match((await safetyView(first)).status, /Illustrative status 200/);
  await observeStorageChange(first, "another-app");
  await second.evaluate(() => localStorage.setItem("another-app", "updated elsewhere"));
  assert.equal((await first.evaluate(() => nextStorageChange)).trusted, true);
  const unchanged = await safetyView(first);
  assert.equal(unchanged.disabled, false);
  assert.equal(unchanged.error, null);
  assert.equal(unchanged.cards.length, 1);
  await observeStorageChange(first, STORAGE_KEY);
  await second.click('[data-example="create"]');
  await second.fill("#body", JSON.stringify({
    displayName: "Synthetic second-page matter", description: "Cross-tab validation", containerTypeId: CONTAINER_TYPE,
  }));
  await second.click("#run");
  assert.match((await safetyView(second)).status, /Illustrative status 201/);
  const createdEvent = await first.evaluate(() => nextStorageChange);
  assert.equal(createdEvent.trusted, true);
  assert.equal(JSON.parse(createdEvent.newValue).containers.length, 2);
  const stale = await safetyView(first);
  assert.equal(stale.disabled, true);
  assert.deepEqual(stale.cards, []);
  assert.ok(stale.error.includes("[StorageChanged]"));
  assert.match(stale.response, /No synthetic request response/);
  assert.match(stale.status, /No illustrative status/);
  await first.click("#reset");
  assert.equal((await safetyView(first)).saved, (await safetyView(second)).saved);
  assert.equal((await safetyView(first)).disabled, true);
  await first.click("#retry");
  const recovered = await safetyView(first);
  assert.equal(recovered.disabled, false);
  assert.equal(recovered.error, null);
  assert.equal(recovered.cards.length, 2);
  assert.deepEqual(JSON.parse(recovered.displayed), JSON.parse(recovered.saved));
  assert.equal(recovered.unrelated, "updated elsewhere");
  const reopened = await browser.page(t, { browserContextId: first.browserContextId });
  const restored = await safetyView(reopened);
  assert.deepEqual(restored.cards, recovered.cards);
  assert.equal(restored.saved, recovered.saved);
  assert.match(restored.response, /No synthetic request response/);
  assert.deepEqual(await reopened.evaluate(() => ["method", "path", "body"].map((id) => document.getElementById(id).value)),
    ["GET", LIST_PATH, ""]);
  await observeStorageChange(first, STORAGE_KEY);
  await second.evaluate((key) => localStorage.removeItem(key), STORAGE_KEY);
  const removedEvent = await first.evaluate(() => nextStorageChange);
  assert.equal(removedEvent.trusted, true);
  assert.equal(removedEvent.newValue, null);
  const removed = await safetyView(first);
  assert.equal(removed.disabled, true);
  assert.ok(removed.error.includes("[StorageChanged]"));
  await first.click("#retry");
  assert.deepEqual(JSON.parse((await safetyView(first)).saved), createSeedState());
  assert.equal((await safetyView(first)).unrelated, "updated elsewhere");
  assertNoServiceTraffic(first);
  assertNoServiceTraffic(second);
  assertNoServiceTraffic(reopened);
  t.diagnostic(JSON.stringify({
    createdEvent,
    stale: { error: stale.error, status: stale.status, cards: stale.cards, disabled: stale.disabled },
    recovered: { cards: recovered.cards, disabled: recovered.disabled, unrelated: recovered.unrelated },
    restored: { cards: restored.cards, response: restored.response },
    removedKey: { error: removed.error, disabled: removed.disabled },
    finalState: JSON.parse((await safetyView(first)).saved),
  }));
});
