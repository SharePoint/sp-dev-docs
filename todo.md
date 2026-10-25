# SPFx documentation health and 1.24 GA tracker

Last reviewed: October 25, 2026

Scope: all of [docs/spfx](docs/spfx), [docs/community](docs/community), navigation in [docs/toc.yml](docs/toc.yml), [README](README.md), and directly related setup, support, landing-page, and shared-content references. Expanded to SharePoint Online Add-in end-of-life notices in Add-in, API, schema, solution, and scenario documentation.

This is an implementation backlog, not a declaration that GA documentation or runtime validation is complete. The initial scan added this tracker; subsequent implementation is recorded below. Keep task IDs stable when adding follow-up requirements. **Use `[x]` for completed implementation or verification work. For partially completed tasks, check completed subtasks and leave the parent unchecked. Track release verification and publication separately under G01-G03 and V01-V09; don't leave completed content work unchecked solely because launch checks are pending.**

## Current implementation status - October 25, 2026

- [x] Prepared the remaining GA reference batch: roadmap, three new Copilot articles, lifecycle/context/configuration cross-links, Store guidance, setup/debug/toolchain references, community/support, README, and retirement notices. See [the complete per-file review inventory](ga-docs-review.md).
- [x] Used the [September 2026 roadmap announcement](https://devblogs.microsoft.com/microsoft365dev/sharepoint-framework-spfx-roadmap-update-september-2026/) as the roadmap source. Product owner approved December 2026 / January 2027 as a **tentative** 1.25 window; October 29 remains the locked 1.24 GA date.
- [x] Inspected RC0 declarations/configuration for context bridge signatures, default display mode, agent schemas, Node engine ranges, React/TypeScript/Heft versions, and generated scripts. RC0 is the unchanged GA contract.
- [ ] **Execution blocked:** the environment rejected the isolated-sample/Node.js 24 build command twice, including after explicit user approval. No copy, dependency installation, build, or tenant test from that command ran. Installed Node.js is 22.23.4; Node.js 24 execution remains unverified.
- [ ] **Implementation hold reaffirmed by user:** after execution was denied, the user instructed **keep code changes blocked until execution is available**. Narrative, notices, links, prerequisite pins, and debugging references were corrected; application/React implementations and CI/migration scripts were not rewritten.
- [ ] **Owner confirmations still open:** exact 10 KB measurement, Subscription Edition maximum SPFx version, host-specific authentication/principal details, combined custom-package Store acceptance, and relevant Viva/ACE lifecycle/consent behavior. No boundary checker or replacement SDK migration was invented.

The dated completion notes under each task supersede the initial-scan descriptions that follow them. Retained requirement text describes the original acceptance scope, not a claim that every listed defect is still present. A fork commit is a review checkpoint, not publication to Learn or evidence that runtime acceptance tests passed.

## Historical implementation batch - October 23, 2026

**R01 and Copilot GA notice preparation implemented locally; not yet published.** The user authorized starting R01 and removing the Copilot preview notices. No commits, PRs, final-package builds, or tenant tests are included in this pass.

- [1.24 release notes](docs/spfx/release-1.24.0.md): GA title/date/metadata and pinned stable install command; React/Node.js facts; confirmed USL/no-consumption wording; Store/client availability; unchanged RC0 contract; dynamic discovery and initial-versus-baseline sync; 10 KB context-blocking limit; mixed-solution workaround and mobile exclusions. Removed the preview include, current preview restrictions, empty list item, and unverified blanket npm-audit safety claim. Preserved prerelease history and historical resource titles.
- **R02/R03 partial implementation:** removed preview warnings from all seven [Copilot articles](docs/spfx/copilot), replaced preview licensing/Store sections in the overview, added GA support/limitations, and updated Copilot claims in the [framework overview](docs/spfx/sharepoint-framework-overview.md) and [platform overview](docs/spfx/supported-extensibility-platforms-overview.md). Copilot Workbench remains explicitly fully supported.
- **N03 partial implementation:** the [TOC](docs/toc.yml) now uses October 29 for 1.24 and the label **Display modes**. Existing paths remain unchanged.
- **Narrow tutorial exception authorized for GA preparation:** updated Copilot tutorial titles/link labels, availability prerequisites, and the direct `@microsoft/sp-http` beta install pin to `1.24.0`. No tutorial application logic, React rendering/dependencies, or screenshots were rewritten. The React upgrade walkthrough, unrelated previews, and the rest of C06/Q01 remain held.
- **Validation:** `git diff --check` passed after line-ending normalization; targeted checks parsed changed YAML/frontmatter, resolved **115** relative local links and **32** anchors, and passed GA-content/preview-notice assertions. Editor diagnostics reported no errors for the checked release/overview/navigation files. `checkLinks` on the release notes: **29 valid, zero broken**.
- **External-check caveats:** `checkLinks` on the overview/first tutorial also probes illustrative tenant and localhost URLs; those aren't public links to repair. The SharePoint-data tutorial reports pre-existing 404 companion links to `https://github.com/pnp/spfx-copilot-apps/samples/tutorial-access-data`, alongside placeholder/code URLs. Companion-link verification remains under C05; this pass doesn't claim all tutorial links or scenarios pass.

**Historical batch status:** R01 was completed in this batch. The October 25 work supersedes its outstanding content list. Stable npm publication, the final announcement link, remaining owner confirmations, and fixture/host tests are still open.

## Locked launch target - October 29, 2026

**Product-owner confirmation, October 23: SPFx 1.24 and Copilot UX components GA is locked for Thursday, October 29, 2026.** Prepare the documentation as GA content for that date; do not retain an unconfirmed-date gate or use the draft blog date/RC date as the launch date.

- **Before October 29:** complete the mandatory baseline and agreed GA reference/availability/Store/navigation updates, review the staged changes, and record validation results and remaining blockers. Aim for review-ready content by October 28; owners/reviewers still need assignment.
- **On October 29:** publish the approved GA scope in coordination with release availability and the announcement, verify stable npm packages/dist-tags and the public announcement link, and check the live Learn pages. A locked date does not prove package publication or successful runtime tests.
- **After launch:** retain explicit status for held tutorial modernization and planned fast follows. Do not silently broaden the launch scope or claim those items are complete.

## Execution policy - baseline first, tutorials later

**Current product-owner direction, October 25:** baseline setup is mandatory. Tutorial modernization was authorized subject to baseline validation, then implementation changes were blocked again when execution was denied. Continue documentation-level corrections; resume application/React/CI/migration code changes only when execution is available and the baseline is validated.

- **Mandatory baseline:** G01/G03, U02, the setup/tooling consistency parts of U04/C04, and B01 below. Update the setup/reference documents, not tutorial implementations, in this phase.
- **Other current guidance:** roadmap, community resources, lifecycle/retirement notices, support matrices, and navigation can be refreshed without embarking on tutorial modernization. Publish only confirmed facts.
- **Held tutorial work:** implementation/runtime portions of D03/D04/U03/C05/C06/Q01 remain blocked; completed narrative/reference/prerequisite corrections are checked separately. A P0 label doesn't bypass the execution gate.
- **React 18:** reference pins and compatibility guidance can be corrected; rendering/unmount implementation rewrites remain held. Don't make the entire historical tutorial backlog a prerequisite for the baseline refresh.
- **Debugging direction:** every current reference to the **SharePoint Online/hosted workbench** must direct readers to debugging on SharePoint pages with the **SharePoint Framework Debug Toolbar (developer toolbar)**. Web-part debugging with the Online workbench is deprecated. **Copilot Workbench is fully supported and remains the development/testing model for Copilot UX components**; never include it in a blanket workbench deprecation/removal. Track these corrections in deferred tutorials without starting their rewrites.
- **Graph Toolkit direction:** flag **every recommendation, preference, or new-project instruction for Microsoft Graph Toolkit for removal**, including navigation, landing pages, community catalogs, and tutorial cross-links. Replace recommendations with supported SPFx Graph clients/SDK access and appropriate UI guidance. Historical retirement/migration explanations may name Graph Toolkit, but must not recommend adopting it. Tutorial implementation changes remain deferred.

## Sources and release gates

- **Announcement draft:** "Copilot UX components are generally available: bring interactive experiences into Copilot", post ID `26291`, reviewed through the supplied preview link. Treat its contents as launch requirements pending final approval. Do not publish the preview URL or its access parameters in customer documentation. Replace preview-era announcement references with the final public permalink when available.
- **Product-owner guidance:** initial **Sync to Teams** deploys the baseline agent definition. Subsequent changes to tool parameters or the number of Copilot UX components/functions are discovered at runtime and do not require another sync. Changes to baseline agent configuration, such as its image, title, or starter prompts, require re-sync.
- **Additional product-owner requirements:** use `createCopilotTextContent` to provide Copilot with context about what the component currently displays. The context limit is **10 KB**; anything larger blocks sending the message to Copilot. Context helps Copilot provide additional natural-language information alongside the UX, so both Copilot and the user have more context in the session. Copilot UX components are supported in the **SharePoint Store starting at GA**; update all directly related Store documentation, not only the Copilot overview.
- **Confirmed licensing and costs:** Copilot UX components require a **USL (user-specific license)**: the **Microsoft 365 Copilot add-on license**, on top of the user's normal **E3, E5, or E7** license. The base license alone is not sufficient. Copilot UX components themselves **do not fall under a consumption-based plan and have no consumption-based charges**. APIs/services called by a component's implementation may have their own charges; distinguish those from the component capability, and do not present pay-as-you-go consumption as an alternative to the required user license.
- **Confirmed technical baseline:** the GA technical contract is **unchanged from RC0 (`1.24.0-rc.0`)**. Use the product-owner-provided projects under `D:\pnp\124rc0` for documentation examples and validation now; see the fixture inventory below. Final stable-package verification remains a release check, not a reason to postpone drafting against this contract.
- **Platform reference:** [Dynamic tool discovery for MCP plugins in Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/plugin-dynamic-tool-discovery). Discovery occurs at runtime/per session, with runtime validation; do not promise instantaneous refresh in an already-open conversation.
- **Repository evidence:** existing SPFx 1.24 release notes, all seven Copilot articles, compatibility/setup/upgrade guidance, deployment/Store guidance, navigation, and searches across the complete SPFx text inventory.
- The draft's October 20 date and the existing TOC's October 2 RC date are not the GA date. Use the locked **October 29, 2026** date in the release notes, TOC, roadmap, and launch references.

### Confirmed decisions and remaining publication checks

- [ ] **G01 - Apply the locked release date and verify publication facts.** GA is confirmed for **October 29, 2026**; no further date approval is required. Prepare stable `1.24.0` guidance for launch, then verify final package versions/dist-tags, the final announcement permalink, and rollout status before publication. Do not mark this task complete from the date confirmation alone. Dependencies: none.
  - [x] **October 25 delivered:** Locked October 29 date applied; roadmap and GA references prepared.
  - [ ] **Remaining:** Verify stable npm publication/dist-tags, final announcement permalink and rollout at launch.

- [ ] **G02 - Apply confirmed licensing/cost wording and close remaining availability details.** Use the confirmed USL requirement: Microsoft 365 Copilot add-on on top of normal E3/E5/E7, no component consumption plan/charges, and possible implementation-specific API/service charges. This licensing model is no longer an open approval question. Confirm commercial-cloud/geographic scope and supported browser/desktop clients, and establish Workbench/development licensing separately without inferring an exemption. Confirm the SharePoint Store submission/update path and any agent approval requirements with the Store owner. Dependencies: none.
  - [x] **October 25 delivered:** Confirmed USL/add-on, E3/E5/E7, no component consumption, API-cost and browser/desktop/mobile wording applied.
  - [ ] **Remaining:** Cloud/geographic scope, development licensing and special Store acceptance still require owner confirmation.

- [ ] **G03 - Validate examples against the confirmed RC0-to-GA contract.** The contract is unchanged from RC0; inspect and exercise the supplied fixtures now rather than waiting for a new GA scaffold. Validate component/agent manifests, default-display-mode declaration, dynamic discovery configuration, version-bump behavior, and SDK signatures, including `createCopilotTextContent` and its integration into the supported message flow. Verify how the documented 10 KB context limit is measured (byte definition, encoding/serialization, per-content versus aggregate payload) before publishing an exact byte-count implementation. The limit and blocking behavior are product requirements, not open questions. All three supplied package manifests declare Node.js `>=22.14.0 <23.0.0 || >=24.0.0 <25.0.0 || >=26.0.0 <27.0.0`; use this as RC0 evidence, verify the final package engines, and reconcile setup's blanket "LTS only" rule. Create isolated sample variants only where a new article needs additional coverage; repeat relevant build/package checks on stable packages when available under V01. Dependencies: none for RC0 validation; G01 for final publication verification.
  - [x] **October 25 delivered:** Inspected supplied RC0 manifests, declarations, generated scripts and context/display/schema contracts.
  - [ ] **Remaining:** Execution was denied twice; user keeps implementation blocked. Exact 10 KB measurement deliberately remains unconfirmed.


### Supplied RC0 validation fixtures

These are local authoring/test inputs, not public companion-sample URLs. Preserve the original projects; create separate, clearly named variants as needed for new documentation. Do not copy machine-local paths, tenant configuration, or credentials into published examples.

| Local project | Inspected baseline | Planned use |
| --- | --- | --- |
| `D:\pnp\124rc0\reactwp` | React web part; SPFx packages pinned to `1.24.0-rc.0`, React 18.3.1. | Baseline scaffold/toolchain/build/package and page/developer-toolbar checks; not authorization to rewrite existing React tutorials. |
| `D:\pnp\124rc0\copilotreact` | React Copilot UX component; RC0 packages, React 18.3.1, component and agent configuration. | D01/C01/U01 lifecycle, configuration, display-mode and Copilot Workbench examples. |
| `D:\pnp\124rc0\travel-expenses` | Two components, submit/view; shared base uses `createCopilotTextContent` with `updateModelContextAsync` and `sendFollowUpMessageAsync`; project defines source/UX/build/package checks. | T01/V07 contextual messaging, multi-component discovery and D01/C01 examples. Validate its custom behavior and mock-data assumptions before reuse; its implementation is not itself the platform specification. |

**Evidence status:** read-only inspection on October 23 and 25 confirmed bridge signatures, `capabilities.defaultDisplayMode`, v1.8 agent configuration, React 18.3.1, TypeScript ~5.8.0, Heft 1.3.2, and `temp/build/manifests.js`. No build/package, UX, size-boundary, or live-tenant tests ran; isolated execution was denied. Additional sample creation and Node.js 24 were approved, but implementation remains gated on restoring execution.

## Initial scan coverage and boundaries (historical evidence)

The initial scan inventoried **233 SPFx text files**: 230 Markdown articles, two YAML FAQs, and one release-note template. The remaining 83 files under SPFx are image assets. The broader follow-up read all 233 SPFx text files plus all **five community articles** for static checks and pattern analysis, and inspected relevant current articles in detail. Scope now also includes support guidance and shared SPFx snippets. This is a documentation gap scan, not execution of every tutorial, exhaustive external-link validation, or visual inspection of every image.

| Content family | Text files | Disposition |
| --- | ---: | --- |
| Copilot | 7 | All seven contain preview warnings; update all seven and reconcile their deployment/API guidance. |
| Root guidance, including FAQs | 66 | Update current entry points, setup, compatibility, roadmap, upgrade, and Store/deployment connections; see tasks below. |
| Toolchain | 18 | Reconcile the explicit 1.24 Gulp-support claim; connect upgrade guidance to React 18 and preserve version-specific migration paths. |
| Web parts | 44 | Check React 18 compatibility of current tutorials and shared UX reuse; do not mass-rewrite historical samples. |
| Extensions | 19 | Check React 18 dialogs, placeholders, property-pane integration, and cleanup examples where applicable. |
| Viva Connections | 34 | Regression-test React-based HTML quick views; Copilot GA does not make unrelated Viva previews GA. |
| Office/Outlook | 1 | Link the existing host-adapter model rather than implying a Copilot component directly becomes an Outlook app. |
| Release history and template | 44 | Convert the existing 1.24 page; preserve earlier release history and the reusable template. |

**Priorities:** P0 = mandatory baseline or required for an accurate GA launch; P1 = broader documentation health/current-guidance corrections; P2 = deferred tutorial modernization and follow-up improvements. Honor the baseline-first gate regardless of priority. The GA publication target is locked to **October 29, 2026**; individual owners/reviewers and intermediate task dates still need assignment.

**Preserve:** published article paths, SDK identifiers (`BaseCopilotComponent`, `CopilotComponent`, `copilotType`, package names), generated file/folder names, historical video titles, older release notes, on-premises version limits, and genuine previews unrelated to Copilot UX components. Prefer label/title changes over URL renames. If a URL must change, add a redirect in [.openpublishing.redirection.json](.openpublishing.redirection.json).

## P0 - Release and availability

- [x] **R01 - Convert the existing 1.24 release notes to GA.**  
  **Completed October 23:** GA content implemented and locally validated. Final stable-package verification and the public announcement link/publication remain separately tracked under G01, V01, and V06.
  Updated [release-1.24.0.md](docs/spfx/release-1.24.0.md), not a second release page. Converted the title/H1/description, opening, install section (`@next` to pinned `1.24.0`), licensing, Store ban, limitations, and deprecations; corrected `Copims.date` to `ms.date`. Added React 18, Node.js 24/26, Copilot UX components, build-time agent-schema validation, automatic manifest-version updates, and v1.8 scaffolding. Retained beta/RC dates and rollback details as historical context; corrected dynamic discovery terminology. Included upgrade and theme/design pointers and the existing fixed-issue entry; removed the dangling empty list item and unsupported npm-audit safety assessment.
  **Implementation acceptance met:** current sections describe the October 29, 2026 GA, use confirmed USL/no-consumption wording and stable-version commands, and distinguish prerelease history from current restrictions. Local validation passed, including all 29 release-note links. **Launch acceptance remains under G01-G03/V01/V06**, not this completed content checkbox.

- [ ] **R02 - Replace preview availability with the GA support matrix.**  
  - [x] **October 25 delivered:** GA availability/licensing/client/Store wording applied across required documentation.
  - [ ] **Remaining:** Close cloud/development-license and Store-owner questions; run V03 before claiming runtime verification.

  - [x] Replaced preview availability, free-license wording, and Store prohibition in the Copilot overview with confirmed GA licensing, costs, supported clients, Store support, and exclusions.
  - [ ] Close remaining cloud/development-test licensing and Store-owner confirmations under G02; reconcile any resulting wording before sign-off.

  Make [overview-copilot-apps.md](docs/spfx/copilot/overview-copilot-apps.md) the canonical availability/licensing reference. Replace "Availability during preview", "No license required", Store prohibition, and preview-only known issues. State GA on **October 29, 2026**, worldwide subject to confirmed cloud scope. Explicitly require a **USL (user-specific license), the Microsoft 365 Copilot add-on on top of normal E3, E5, or E7**; the base license alone is insufficient. Explain the unlicensed-user message. State that **Copilot UX components are not on a consumption-based plan and incur no component consumption charges**; APIs/services used inside the implementation can incur their own charges. Do not imply consumption billing replaces the USL. List Copilot browser/desktop and Copilot through Teams browser/desktop as GA clients. Keep Android/iOS, standard-chat Copilot plug-in packaging, Cowork, and additional surfaces explicitly planned, not supported at GA. GA packaging is a declarative agent plus components in one SPFx solution.  
  **Done when:** every availability claim agrees with the approved launch facts; development/test licensing is stated separately or linked to authoritative guidance. Dependencies: G02.

- [x] **R03 - Remove GA-blocking warnings and normalize the product name.**  
  - [x] **October 25 completion:** Completed current naming/preview-warning and entry-point cleanup; historical resource titles and SDK identifiers preserved.

  - [x] Removed preview/production-use warnings from all seven Copilot articles and the framework/platform overviews.
  - [x] Updated the first tutorial and display-mode titles/descriptions/H1s, affected tutorial link labels, and framework/platform Copilot naming.
  - [x] Completed current naming/label and Copilot Workbench setup-note corrections; historical titles/SDK identifiers preserved.

  Update titles, descriptions, H1s, introductory prose, link labels, and relevant image alt text to **Copilot UX components** across all seven [Copilot articles](docs/spfx/copilot), [sharepoint-framework-overview.md](docs/spfx/sharepoint-framework-overview.md), [supported-extensibility-platforms-overview.md](docs/spfx/supported-extensibility-platforms-overview.md), and the Copilot Workbench note in [set-up-your-development-environment.md](docs/spfx/set-up-your-development-environment.md). The first tutorial and display-mode titles and the GA production-use warnings are corrected as checked above. Add one short historical-name explanation in the overview if useful.  
  **Done when:** no current guidance calls the GA capability a preview or uses an old name as its product title; historical names and code identifiers remain intact. Dependencies: G01, R02.

- [ ] **L01 - Publish explicit GA technical limitations and workarounds.**  
  - [x] **October 25 delivered:** Applied automatic-sync mismatch/manual-package workaround and iOS/Android exclusions across lifecycle, Teams and all Store documents.
  - [ ] **Remaining:** Exercise the combined package/client matrix under V02/V03; Store certification for embedded custom packages remains a separate approval.

  - [x] Added mixed-solution sync/manual-package and mobile limitations to release notes and the Copilot overview, with pointers in the first tutorial, troubleshooting, design, and platform guidance.
  - [x] Completed D01, Teams-deployment and Store guidance.
  - [ ] Validate the manual combined-solution package under V02/V03.

  Product-owner requirements: **combining Copilot UX components and SPFx Teams solutions in the same solution causes a mismatch in the automatic Sync to Teams operation at GA**. A developer-provided, manually created Teams package for the solution works and is the supported workaround for this scenario. This is an automatic packaging/sync limitation, not a blanket prohibition on sharing UI code or combining components when using that workaround. A fix is planned as a **fast follow after GA**, with no committed date.

  **Copilot UX components are not supported on iOS or Android mobile clients at GA.** Mobile support is planned as a **fast follow after GA**, not a GA capability or a guaranteed delivery date. Support for Copilot in Teams browser/desktop does not imply support for Teams mobile.

  Add a **GA limitations** section to [overview-copilot-apps.md](docs/spfx/copilot/overview-copilot-apps.md) and [release-1.24.0.md](docs/spfx/release-1.24.0.md). Carry the mixed-solution warning and manual-package workaround into D01, the deployment prerequisites in [build-your-first-copilot-app.md](docs/spfx/copilot/get-started/build-your-first-copilot-app.md), [deployment-spfx-teams-solutions.md](docs/spfx/deployment-spfx-teams-solutions.md), and [troubleshooting-copilot-ux-components.md](docs/spfx/copilot/troubleshooting-copilot-ux-components.md). Link the existing developer-provided Teams package instructions and validate their applicability to the combined Copilot/Teams scenario; document any required differences rather than assuming the web-part-only example is sufficient. Add mobile exclusions to the availability matrix, tutorial prerequisites, and relevant design/platform guidance. Include both limitations in applicable Store setup, listing, and reviewer-test guidance under N02.

  **Done when:** the automatic sync mismatch, manual-package workaround, and iOS/Android exclusions are explicit and consistent on all relevant surfaces; cross-host reuse and Store support do not obscure them. Track the fixes/mobile enablement separately, and remove restrictions only after their actual rollout is confirmed. Dependencies: G03, R02, D01; verification through V02/V03.

## P0 - Development, deployment, and dynamic discovery

- [x] **D01 - Create the canonical development and deployment model article.**  
  - [x] **October 25 completion:** Created the canonical lifecycle article, including the update decision table, identities/versions, tenant rollout, rollback/retirement, and mixed-solution workaround. Live acceptance remains under V02.

  Proposed new article: `docs/spfx/copilot/development-and-deployment.md`, titled **Develop and deploy Copilot UX components**. This lifecycle deserves a dedicated article; don't repeat the full explanation in every tutorial. Cover the local inner loop, initial deployment, subsequent component/tool updates, baseline-agent updates, stable identities, propagation checks, and cleanup/rollback considerations. Link to [dynamic tool discovery](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/plugin-dynamic-tool-discovery) and the existing first tutorial for basic packaging steps. Use the decision table below as the core requirement.  
  **Done when:** a reader can identify whether a change requires rebuilding/redeploying, syncing, or both, without conflating local hot reload and tenant deployment. Dependencies: G03.

### Required decision table for D01

| Change | Development/deployment action | Sync to Teams / Add to Teams? |
| --- | --- | --- |
| Iterate locally on UI, properties, themes, or display modes | Rebuild/serve locally and test in Copilot Workbench; no tenant package upload for each local edit. Workbench doesn't validate agent discovery or intent matching. | No. |
| Deploy the solution/agent for the first time | Build/package, upload and enable the `.sppkg` in the tenant app catalog, then publish the baseline agent using the catalog action. Document tenant-wide deployment and permissions prerequisites. | **Yes, initially**, so the baseline agent definition is deployed. |
| Update component implementation, UI, or styling only | Build/package and redeploy the updated solution. | **No**, if baseline agent configuration is unchanged. |
| Add/change/remove tool parameters, descriptions, or component functions | Update component manifests/schemas and applicable component grouping, build/package, and redeploy. Runtime dynamic discovery supplies the updated tool surface; confirm description/removal details against GA. | **No** for parameter or component/function-count changes alone. |
| Add or remove Copilot UX components in the existing agent | Update component source/manifests and grouping, build/package, and redeploy. The number of functions is discovered dynamically. | **No**, unless the change also modifies baseline agent configuration. |
| Change agent image/icon, title/name, or starter prompts | Update baseline agent files/assets, build/package, redeploy, and synchronize the new baseline definition. | **Yes**. |
| Change agent instructions, knowledge sources, other actions, identity, or solution binding | Explain the baseline-agent boundary and confirm the specific update/migration procedure. Don't classify these automatically as dynamic tool-only changes. | Baseline changes need re-sync; identity/rebinding details require GA verification. |

Dynamic discovery is **not** automatic deployment of source edits, a substitute for API consent, or a bypass of tenant governance. Do not tell developers to author/host an external MCP server merely to use SPFx-managed components. Link the generic platform article for the discovery concept, and describe SPFx's own generated configuration separately.

**GA exception for the D01 table:** a solution combining Copilot UX components with SPFx Teams functionality cannot rely on automatic Sync to Teams packaging because of the mismatch described in L01. Document the manually created Teams package workaround for this combination. The initial-sync/baseline-update versus runtime-discovery distinction still applies; dynamic discovery does not fix this packaging mismatch.

- [x] **D02 - Reconcile overview lifecycle and versioning claims.**  
  - [x] **October 25 completion:** Reconciled overview versioning/sync claims, linked D01, and removed unsupported automatic agent-cleanup implications.

  Update [overview-copilot-apps.md](docs/spfx/copilot/overview-copilot-apps.md), especially "Declarative agents synced to the tenant agent catalog", "How the copilot folder is packaged and deployed", and "Update the declarative agent version on every change". Replace the broad assertion that catalog updates/removal automatically update/remove the agent with verified lifecycle details. Distinguish package/component versions, the Teams/Microsoft 365 app's numeric `manifest.json` version, and the declarative-agent schema version (`v1.8`). **Do not instruct developers to increment the schema version for routine content updates.** Link to D01 rather than duplicating it. Verify deletion behavior separately.  
  **Done when:** the overview cannot lead readers to re-sync every component update or edit a schema version as a deployment counter. Dependencies: D01, G03.

- [ ] **D03 - Update the first-component tutorial for GA scaffolding and initial sync.**  
  - [x] **October 25 delivered:** Updated GA prerequisites/naming, initial sync and new reference links.
  - [ ] **Remaining:** Complete verified generated-file walkthrough, retained v1.7 excerpt/build-command review and screenshots after the code/execution hold.

  Update [build-your-first-copilot-app.md](docs/spfx/copilot/get-started/build-your-first-copilot-app.md): remove the beta-2 minimum/no-license preview note, show a verified stable generator install, align prerequisites with setup/availability, and compare every shown file with GA output. Its declarative-agent example currently targets v1.7; GA scaffolding is expected to use v1.8. Verify exact generator labels before changing quoted prompts. Explain that the first **Add to Teams**/**Sync to Teams** deploys the baseline agent, then link to D01 for updates. Confirm actual catalog labels and screenshots rather than promising a future rename.  
  **Done when:** the tutorial works from a clean GA project through licensed-user rendering and does not imply re-sync is part of every UI iteration. Dependencies: R02, D01, G03.

- [ ] **D04 - Split the SharePoint-data tutorial's update scenarios correctly.**  
  - [x] **October 25 delivered:** Explained combined baseline update versus parameter-only no-sync variant and corrected sample/next-step links.
  - [ ] **Remaining:** Execute both variants and address held sample error-handling changes after baseline validation.

  Update [connect-to-sharepoint-data.md](docs/spfx/copilot/get-started/connect-to-sharepoint-data.md): replace `1.24.0-beta.5` in prerequisites and the `@microsoft/sp-http` install with the verified stable target. Explain that changing `message` to `siteUrl` and changing the tool description alone do **not** require re-sync. **Keep re-sync in this walkthrough**, because it also changes `instruction.txt` and the `conversation_starters` baseline. Add a parameter-only variation that redeploys without changing the baseline or syncing, then confirms new arguments in a fresh conversation. Avoid replacing the tutorial's current resync step with an unconditional "never sync again".  
  **Done when:** both the combined baseline update and the parameter-only update are explained and tested. Dependencies: D01, D03.

- [ ] **D05 - Rebase troubleshooting on GA rather than preview workarounds.**  
  - [x] **October 25 delivered:** Added schema/context failures and lifecycle links; removed routine component resync, schema counters, universal sign-out/service-worker fixes and casual identity resets.
  - [ ] **Remaining:** Validate retained principal-specific workarounds and clean-build/baseline-repair steps in a tenant.

  Update [troubleshooting-copilot-ux-components.md](docs/spfx/copilot/troubleshooting-copilot-ux-components.md). Add license/client/tenant-policy checks; document schema-validation build failures and runtime discovery/validation failures. Add an oversized-context symptom: messages are blocked when `createCopilotTextContent` context exceeds 10 KB; link to T01 for diagnosis and reducing the context. Explain why a component-only update does not need another sync. Reconcile the current fourth-segment/hotfix-state narrative with actual GA version-bump behavior and release-note wording. Keep manual version repair only for verified baseline-update conflict cases, including clean builds/CI. Distinguish agent version from runtime-discovered tool/schema freshness in debug info. Re-test the service-worker and sign-out workarounds; don't present preview observations as universal GA fixes. Treat changing an app ID/deleting agents as a migration/last-resort action, not normal update advice.  
  **Done when:** troubleshooting links to the lifecycle decision table, no longer requires routine manual bumps/re-sync for component-only updates, and retained workarounds have current evidence. Dependencies: D01-D04, R02, G03.

## P0 - Give Copilot context about the visible UX

- [ ] **T01 - Document `createCopilotTextContent` and the 10 KB hard limit.**  
  - [x] **October 25 delivered:** Created context article with verified bridge roles, latest-view replacement semantics, 10 KB blocking behavior, reduction/retry guidance and linked view-specific prose examples.
  - [ ] **Remaining:** Add a compiled runnable example and execute V07 when permitted. Do not invent 10,000/10,240-byte, encoding or aggregate rules.

  Proposed new article: `docs/spfx/copilot/provide-context-to-copilot.md`, titled **Provide Copilot with context from your component**. None of the seven existing Copilot articles currently mentions `createCopilotTextContent`. Explain that rendering the component alone is not a substitute for supplying textual context about what the user sees. Use `createCopilotTextContent` in a verified GA example to describe the current view, relevant values, filters, selection, and state. Show how that content participates in the supported message flow so the user gets the interactive UX plus useful natural-language information and Copilot has context for session follow-ups. Do not invent an API signature, imply the helper sends a message on its own, or promise that Copilot automatically reads the DOM.  
  Add a prominent **10 KB maximum context** callout: **anything larger blocks sending the message to Copilot**, rather than being silently truncated or merely reducing response quality. Explain the verified size-measurement rule; avoid assuming JavaScript string length equals payload bytes. Keep context concise and relevant to the visible experience, omit hidden/unnecessary sensitive data, and regenerate it from the current view rather than sending stale data. Show an explicit, actionable oversized-context error and a deliberate summary/reduction path; never silently drop context and report success.  
  **Done when:** the article contains a working GA example, the hard-limit failure behavior, and a sample exchange showing UX plus contextual natural-language information. Add a conceptual summary to [overview-copilot-apps.md](docs/spfx/copilot/overview-copilot-apps.md), a small example/next-step link in [build-your-first-copilot-app.md](docs/spfx/copilot/get-started/build-your-first-copilot-app.md), and a view-specific example/link in [access-data.md](docs/spfx/copilot/access-data.md) or [connect-to-sharepoint-data.md](docs/spfx/copilot/get-started/connect-to-sharepoint-data.md). Wire troubleshooting and navigation. Dependencies: G03, D03.

## P0 - Display behavior and platform upgrade

- [ ] **U01 - Align display-mode and design guidance with the GA contract.**  
  - [x] **October 25 delivered:** Documented defaultDisplayMode from RC0 declarations, host authority and startup/close/reopen behavior; removed obsolete future-design claims.
  - [ ] **Remaining:** Execute display/theme/keyboard/state-retention tests and refresh illustrations.

  Update [displayMode.md](docs/spfx/copilot/displayMode.md), the mode summary in [overview-copilot-apps.md](docs/spfx/copilot/overview-copilot-apps.md), and [theme-and-design.md](docs/spfx/copilot/theme-and-design.md). Verify/document the manifest field for the default display mode rather than assuming inline is always the default. Explain initial invocation, close-to-inline, and explicit reopen behavior described in the release notes. Resolve the discrepancy between "`requestDisplayModeAsync` only accepts fullscreen" and the theme article's beta.5 observation that inline requests succeeded; use the supported GA contract, not observed beta behavior. Replace "design guidance coming at GA" with actual guidance. Re-test expand/collapse ownership, optional host fields, frame sizing, iframe-local styling, state retention, and the reported dark/light panel artifacts. A mobile-capable host-context type isn't a promise of mobile GA support.  
  **Done when:** examples agree, declare only supported modes, and pass the theme/mode/accessibility matrix. Dependencies: G03, R02.

- [ ] **U02 - Align environment setup and compatibility with SPFx 1.24.**  
  - [x] **October 25 delivered:** Completed Node.js 24 LTS/setup/toolchain/reference alignment, stable generator pins and React 18.3.1 reference installation.
  - [ ] **Remaining:** Final engines, clean Node.js 24 scaffold/serve/build/package acceptance remain blocked under B01/V01.

  - [x] **October 25:** updated the environment installation guide to recommend the latest Node.js **24 LTS** release for SPFx 1.24, explain the expected `v24.` version output and active version-manager shell, and retain version-specific guidance for older projects.
  - [x] **October 25:** aligned the compatibility reference with that recommendation, documented Node.js 22's 22.14.0 minimum, and distinguished supported Node.js 26 Current from LTS. Removed the setup's blanket "LTS only" claim and the table's misleading "Node.js (LTS)" heading; older support rows and on-premises limits are unchanged.
  - [x] October 25 reference batch aligned the React installation example to 18.3.1; no tutorial rendering changes.
  - [ ] Complete final package-engine verification and clean-environment scaffold/serve/build/package checks under G03/V01/B01 before full baseline sign-off.

  **October 25 validation:** Node.js recommendation/support assertions, unchanged existing compatibility rows, YAML metadata, 234 local links across the changed files/tracker, the new setup anchor, and editor diagnostics passed. No environment installs or sample builds were performed in this documentation-only pass.

  Update [set-up-your-development-environment.md](docs/spfx/set-up-your-development-environment.md) and [compatibility.md](docs/spfx/compatibility.md). The initial Node.js 22-for-1.22 recommendation and LTS-only contradictions are corrected as checked above. Compatibility lists 1.24 with Node.js 22/24/26 and React 18.3.1. Verify final package minimums and preserve older-version/on-premises boundaries. Make the unqualified React install example match current GA or label it as an older-version example.
  **Done when:** setup, compatibility, release notes, and tutorial prerequisites recommend compatible versions with no unsupported blanket claims. Dependencies: G01, G03.

- [ ] **U03 - Graduate the existing React 18 upgrade guide and add preview-to-GA pointers.**  
  - [x] **October 25 delivered:** Updated GA prerequisite/dependency reference pins and preview framing without changing rendering/migration algorithms.
  - [ ] **Remaining:** Compile and execute upgrade scenarios and host lifecycles when execution is available.

  **Held until baseline acceptance under B01.** Track the following edits now; do not implement the existing walkthrough changes during the baseline phase. Stable-release facts and package-version guidance in R01/U02 are not held.
  Update [react-18-upgrade.md](docs/spfx/react-18-upgrade.md): remove the preview include, RC-target description/note, all `1.24.0-rc.0` install/package pins, and the closing preview-only production warning. Retain the useful root ownership/cleanup table and peer-dependency checks. Cover both 1.23-to-1.24 upgrades and the final dependency refresh for existing 1.24 previews. Add Copilot-specific preview migration guidance in the release notes/D01: aligned SPFx packages, generated config comparison, v1.8 schema validation, supported discovery configuration, stable identities, and whether the baseline definition requires re-sync. Link from [update-latest-packages.md](docs/spfx/toolchain/update-latest-packages.md).  
  **Done when:** the documented commands target one stable SPFx version and validation covers the actual hosts, not just compilation. Dependencies: G01, G03, D01.

- [x] **U04 - Correct the 1.24 Heft/Gulp support boundary.**  
  - [x] **October 25 completion:** Corrected modern Heft versus legacy Gulp scope without retiring valid older/on-premises projects. Runtime migrations remain under V01.

  Reconcile [sharepoint-framework-toolchain-rushstack-heft.md](docs/spfx/toolchain/sharepoint-framework-toolchain-rushstack-heft.md), which explicitly says Gulp becomes unsupported in 1.24, with the setup/compatibility pages and the actual support policy. Remove obsolete future-tense 1.23 transition speculation where it affects current guidance. Link to existing [migration guidance](docs/spfx/toolchain/migrate-gulptoolchain-hefttoolchain.md) and React 18 guidance; preserve the manual migration article's explicit 1.21.1-to-1.22 scope. **Do not imply GA ends support for all older Gulp-based SPFx releases or on-premises deployments.**  
  **Done when:** readers can distinguish upgrading to 1.24 from maintaining a supported older-version project. Dependencies: G03, U02.

## P0 - Discovery, Store, and navigation

- [x] **N01 - Update framework entry points and roadmap.**  
  - [x] **October 25 completion:** Refreshed roadmap using the September announcement and approved tentative 1.25 window; added lifecycle/sample links and separated GA facts from undated fast follows.

  - [x] Updated framework/platform entry points for Copilot GA, licensing/support pointers, and the framework overview's iframe/DOM distinction.
  - [x] Refreshed roadmap and lifecycle/entry-point links.

  Update [sharepoint-framework-overview.md](docs/spfx/sharepoint-framework-overview.md) and [supported-extensibility-platforms-overview.md](docs/spfx/supported-extensibility-platforms-overview.md) with the GA name, license/support pointers, and lifecycle link. Qualify the framework overview's blanket "no iframes"/normal-page-DOM claims for Copilot's iframe hosting. Do not imply all SPFx hosts are mobile-ready merely because the framework overview says so. Update [roadmap.md](docs/spfx/roadmap.md): replace "Feature X", the June 1.24/September 1.25 schedule, and React 18 "Top of Mind" with shipped facts; only add the draft's December 2026/January 2027 1.25 window after approval, explicitly as a plan. Don't carry forward unrelated unconfirmed roadmap promises.  
  **Done when:** entry points agree with R01/R02 and the roadmap clearly separates shipped work from plans. Dependencies: R01-R03, D01, G01.

- [ ] **N02 - Document the GA SharePoint Store path.**  
  - [x] **October 25 delivered:** Updated all five Store articles: eligibility, USL/costs, initial sync, updates, clients, mixed-solution warning and reviewer/context checks.
  - [ ] **Remaining:** Confirm special Store submission/acceptance for combined developer-provided Teams packages; deployment workaround is not a certification waiver.

  Update all five general SPFx Store documents listed below. State explicitly that **Copilot UX components are supported in the SharePoint Store starting with SPFx 1.24 GA**, including existing Store solutions adding the capability, subject to confirmed submission rules. Cover the declarative-agent-plus-components package, target-client tests, license disclosure, API permissions, and tenant deployment/initial sync. Check the FAQ's ban on embedded custom Teams manifests against the Copilot packaging path; explain the supported distinction rather than deleting a potentially valid restriction. Do not imply independent Teams Store or every marketplace distribution route is now supported.  
  **Done when:** Store guidance and the Copilot overview no longer contradict each other, and the submission/update path is approved. Dependencies: G02, D01, R02.

  | Store document | Required GA update |
  | --- | --- |
  | [Publishing overview](docs/spfx/publish-to-marketplace-overview.md) | Call out support from 1.24 GA, supported packaging/distribution, and the Copilot documentation entry point. |
  | [Submission checklist](docs/spfx/publish-to-marketplace-checklist.md) | Include Copilot UX components among solution types; document applicable license, agent setup, supported-client, permissions, context-size, and end-to-end test expectations without inventing unapproved certification rules. |
  | [FAQ](docs/spfx/publish-to-marketplace-faq.yml) | Add a direct "Can I publish Copilot UX components?" answer: yes, starting at GA. Clarify Copilot agent packaging versus the existing custom Teams manifest restriction. |
  | [After publishing](docs/spfx/publish-to-marketplace-after-publishing.md) | Explain Store-acquired solution installation and updates, adding components to an existing listing, and when a baseline agent change requires re-sync versus runtime-discovered component/tool changes. |
  | [Common validation errors](docs/spfx/publish-to-marketplace-common-validation-errors.md) | Include missing Copilot capability/license disclosures, incomplete agent/test setup instructions, and broken component experiences where applicable to the approved review process. |

  Keep the separate [bot-powered ACE Store article](docs/spfx/viva/bot-powered/publish-to-marketplace-overview.md) scoped to bot-powered ACEs; Copilot GA does not automatically change its distribution rules.

- [x] **N03 - Wire navigation and release labels.**  
  - [x] **October 25 completion:** Wired all three new articles and cross-links; added landing-page Copilot/sample/call entries, community navigation, and retired-feature labels.

  - [x] Updated the 1.24 TOC release date to October 29, 2026 and renamed **Display Mode** to **Display modes**; preserved existing paths.
  - [x] Added all three new pages/cross-links and approved landing-page changes.

  Update [docs/toc.yml](docs/toc.yml). Keep the existing **Copilot UX components** group and all seven article paths. Add D01 after Getting started and T01 as **Provide context to Copilot**; rename **Display Mode** to **Display modes**. Add the proposed configuration reference (C01) when ready, not as a dead link. Update the 1.24 release entry from **October 2, 2026** to **October 29, 2026**; keep the React 18 upgrade entry. Add overview/tutorial/sample-gallery links to the SPFx/Samples cards in [docs/index.yml](docs/index.yml) if approved as the directly related landing-page change. Link the lifecycle article from the overview, both tutorials, troubleshooting, and the existing [Teams deployment article](docs/spfx/deployment-spfx-teams-solutions.md), while preserving that article's distinct web-part/Teams-tab flow.  
  **Done when:** new pages are reachable, existing URLs still resolve, and navigation uses current product names/dates. Dependencies: D01, T01, R01, R03; C01 for its reference entry.

## P1 - Complete and consolidate existing guidance

- [ ] **C01 - Add a focused component/agent configuration reference.**  
  - [x] **October 25 delivered:** Created component/agent configuration reference with schema responsibilities, grouping, default modes and add-second-component procedure.
  - [ ] **Remaining:** Add and execute the runnable multi-component example after the test gate is lifted.

  Proposed new article: `docs/spfx/copilot/component-and-agent-configuration.md`, titled **Configure Copilot UX components and agents**. Existing docs scatter component capabilities, `tools`, Zod properties, `config/copilot-agent.json`, and agent files across the overview/tutorial. Document their responsibilities and relationships, multiple tools/components in one solution, build-time validation, and the generated dynamic-discovery configuration. Show an example adding a second component to an existing agent without a baseline change. Keep schema examples aligned with GA; link to authoritative SPFx/agent schemas rather than copying entire external specifications. Explain metadata for intent matching separately from baseline agent instructions.  
  **Done when:** the reference uses validated GA examples and D01 remains the single source for deployment/sync decisions. Dependencies: G03, D01, D03.

- [ ] **C02 - Refresh data, identity, permissions, and consequential actions.**  
  - [x] **October 25 delivered:** Added authorization/consent/cost boundaries, visible-data context and consequential-action confirmation/backend-enforcement guidance.
  - [ ] **Remaining:** Replace silent resize/fullscreen error handling and validate action/authentication examples after testing becomes available.

  Update [access-data.md](docs/spfx/copilot/access-data.md) and relevant tutorial sections. Preserve delegated signed-in-user access, SharePoint/Graph clients, consent, least privilege, loading/error states, and input validation. Explain that automatic hosting/SSO does not grant access to business data or remove backend API operations/costs. Link to existing [AadHttpClient guidance](docs/spfx/use-aadhttpclient.md) for external APIs rather than inventing an authentication model. Add a short action-design section: let users review/confirm consequential changes, authorize on the backend, and show success/failure clearly; do not imply Copilot adds those safeguards automatically. Re-test resize behavior and replace silent resize-error swallowing with appropriate sample diagnostics if the GA example is retained. Link deployment to D01 and availability to R02.  
  **Done when:** GA data guidance distinguishes authentication, authorization, consent, discovery, and user confirmation. Dependencies: R02, D01, G03.

- [x] **C03 - Make cross-host and multi-tenant reuse precise.**  
  - [x] **October 25 completion:** Qualified shared UI versus host adapters, tenant deployment/consent/backend costs, and combined-package limitations across Copilot, Teams and Office references.

  Qualify all combined-solution examples with L01: automatic Sync to Teams has a GA mismatch when Copilot UX components and SPFx Teams solutions share a solution; use a manually created Teams package for that scenario. Distinguish this packaging limitation from reusing shared code across separate solutions.
  Extend the existing reuse section in [overview-copilot-apps.md](docs/spfx/copilot/overview-copilot-apps.md), linking [Teams integration](docs/spfx/integrate-with-teams-introduction.md) and [Outlook/Office guidance](docs/spfx/office/overview.md). Show the shared UI/business logic and distinct `BaseCopilotComponent`/`BaseClientSideWebPart` host adapters; include Outlook's full-page app entry point without claiming the Copilot component manifest runs everywhere unchanged. Explain deploying the same `.sppkg` to development/test/production/customer tenants while keeping tenant-specific data/configuration/consent separate. Add a compact hosting/routing/SSO/governance explanation based on the announcement.  
  **Done when:** reuse and "no separate component hosting" claims do not imply automatic backend hosting, universal client support, or cross-tenant authorization. Dependencies: R02, D01.

- [ ] **C04 - Refresh generator guidance without graduating unrelated tooling.**  
  - [x] **October 25 delivered:** Updated generator/template references, Fluent UI links and distinct CLI/version scope; unrelated previews preserved.
  - [ ] **Remaining:** Verify a fresh scaffold and generator screenshots.

  Add the Copilot UX component option and links to its three starter templates in [yeoman-generator-for-spfx-intro.md](docs/spfx/yeoman-generator-for-spfx-intro.md); update relevant GA output/screenshots. Link React consumers in [tools-and-libraries.md](docs/spfx/tools-and-libraries.md) and [fluent-ui-integration.md](docs/spfx/fluent-ui-integration.md) to compatibility/upgrade/design guidance where appropriate. Review [sharepoint-framework-cli.md](docs/spfx/toolchain/sharepoint-framework-cli.md) only for conflicts with the recommended GA path; its prerelease status and separate Node.js prerequisites do not automatically change with SPFx 1.24. Leave [agent-skills.md](docs/spfx/agent-skills.md) preview status unchanged unless separately approved.  
  **Done when:** the supported GA scaffolding path is unambiguous and unrelated previews remain properly labeled. Dependencies: G03, U02.

- [ ] **C05 - Validate sample links, screenshots, and legacy labels.**  
  - [x] **October 25 delivered:** Verified canonical companion README destinations; fixed swapped/broken links and linked the public sample gallery with version caveats.
  - [ ] **Remaining:** Recapture screenshots and execute companion samples, which can still declare beta/RC dependencies.

  Resolve inconsistent sample references: [access-data.md](docs/spfx/copilot/access-data.md) points at `tutorial-connect-to-sharepoint-data`, while [connect-to-sharepoint-data.md](docs/spfx/copilot/get-started/connect-to-sharepoint-data.md) links to `tutorial-access-data`; both use repository paths without the `tree/main` segment. The theme article uses a different `spfx-copilot-components` repository name while other pages use `spfx-copilot-apps`. Verify redirects/destinations before standardizing. Prefer the announcement's [sample gallery](https://aka.ms/SPFx/Copilot/Samples) as the discovery entry point, retaining precise verified companion links. Re-capture GA generator, deployment, licensing, rendering, and debug screenshots as needed; keep original historical video titles, with current-name context. Check all affected image alt text and final announcement/resource links.  
  **Done when:** companion links reach the intended sample and illustrations match the instructions; no preview-access URL is published. Dependencies: D03-D05, U01, G01.

- [ ] **C06 - Triage React 18 tutorial fallout beyond Copilot.**  
  - [x] **October 25 delivered:** Added historical/current scope and lifecycle/upgrade pointers to affected tutorials; application/React implementation fences remain unchanged.
  - [ ] **Remaining:** Convert and execute the inventoried render/cleanup examples after baseline execution is restored.

  **P2 / implementation deferred until B01 is accepted. Historical-scope notices and prerequisite reference corrections are delivered; React rendering changes remain held.**
  Use U03 as the shared migration source. For each candidate below, either update a current 1.24 path with owned `createRoot`/cleanup examples and verified dependencies, or explicitly retain its older target version with a link to the upgrade guide. Test property panes, dialogs, placeholders, and field cells with their own container lifecycles; don't mechanically replace rendering calls. Run a latest-GA React web part/extension/HTML quick-view smoke test even when a tutorial doesn't contain a legacy API match.  
  **Done when, in the later tutorial phase:** current-version tutorials don't pair 1.24 scaffolding with unqualified React 17 installs/rendering, and version-bound historical paths remain usable. Dependencies: B01, U02, U03.

### React 18 candidates found by the scan

These are compatibility-review candidates, not a claim that every legacy API is a new runtime regression. Most matches use React's legacy rendering API; some are version-specific examples or lint-rule comments.

| Existing article | Review needed |
| --- | --- |
| [Custom dialogs](docs/spfx/extensions/guidance/using-custom-dialogs-with-spfx.md) | Explicit React 17.0.1 installation and legacy render/unmount; align current-version path and dialog reopen cleanup. |
| [Migrate UserCustomActions](docs/spfx/extensions/guidance/migrate-from-usercustomactions-to-spfx-extensions.md) | Unversioned React installation plus placeholder render/unmount. |
| [Migrate JSLink](docs/spfx/extensions/guidance/migrate-from-jslink-to-spfx-extensions.md) | Legacy field-cell cleanup guidance; preserve per-cell ownership. |
| [Fabric React tutorial](docs/spfx/web-parts/get-started/use-fabric-react-components.md) | Claims latest SPFx while showing legacy render and older Fabric assumptions. |
| [Custom property-pane controls](docs/spfx/web-parts/guidance/build-custom-property-pane-controls.md) | Multiple React containers and disposal callbacks. |
| [Cascading property-pane dropdowns](docs/spfx/web-parts/guidance/use-cascading-dropdowns-in-web-part-properties.md) | Web-part and property-control roots. |
| [Localize web parts](docs/spfx/web-parts/guidance/localize-web-parts.md) | Repeated legacy-render snippets. |
| [Section backgrounds](docs/spfx/web-parts/guidance/supporting-section-backgrounds.md) | Theme-sensitive web-part rendering. |
| [Preconfigured entries](docs/spfx/web-parts/guidance/simplify-adding-web-parts-with-preconfigured-entries.md) | Legacy-render example. |
| [Connect through JSOM](docs/spfx/web-parts/guidance/connect-to-sharepoint-using-jsom.md) | Legacy-render example; keep the JSOM-specific scope. |
| [Dynamic data](docs/spfx/dynamic-data.md) | Review React/type compatibility without changing the dynamic-data API model. |
| [AAD tutorial](docs/spfx/use-aad-tutorial.md) | Review React typings/dependencies and target-version assumptions. |
| [Manual Heft migration](docs/spfx/toolchain/migrate-gulptoolchain-hefttoolchain-manual.md) | Preserve its 1.22 scope; old rendering mentioned in lint-rule comments is not itself a migration requirement. |
| [HTML quick-view tutorial](docs/spfx/viva/get-started/build-html-quickview-adaptive-card-extension.md) | Regression candidate for React-based quick views and their disposal, not a legacy-render search hit. |

## Broader documentation health scan - findings beyond Copilot

### Overall assessment

The main problem is **inconsistent generations of guidance**, not simply old metadata. Several current pages combine Heft-era commands with removed generator prompts, old React/Fabric assumptions, retired APIs, or workbench instructions. Other pages correctly preserve older-version guidance. Fix the supported entry path first, label historical content accurately, and avoid treating every old date or legacy keyword as a defect.

| Area | Observed evidence | Recommended treatment |
| --- | --- | --- |
| Setup/runtime | Initial scan found Node.js 22-for-1.22 setup guidance beside a 1.24 compatibility row with 22/24/26. | Node.js 24 LTS recommendation and support/lifecycle wording corrected October 25 under U02; final package/runtime baseline validation remains open under G03/V01/B01. |
| Debugging | 55 active SPFx files mention a workbench, including valid Copilot Workbench references. Shared notice deprecates the SharePoint Online workbench from May 13, 2026 and schedules retirement for December 1, 2026. Some pages still promise a local workbench or suggest debugging extensions there. | Direct every current Online workbench reference to page-based debugging with the developer toolbar. Copilot Workbench remains fully supported. Track deferred tutorial corrections separately. |
| Retired capabilities | Isolated web parts' documented retirement date was April 2, 2026; Graph Toolkit's announced full retirement date was August 28, 2026. Both remain in current development navigation. | Remove all Graph Toolkit recommendations and preferred getting-started links; retain only clearly labeled historical/migration context where needed. Refresh lifecycle notices; hold tutorial implementation rewrites. |
| On-premises support | Compatibility lists Subscription Edition up to SPFx 1.5, while the server guide and platform overview describe parity with 2019/1.4.1. | Resolve the actual supported matrix with the product owner; do not guess or upgrade on-premises to 1.24. |
| Toolchain | Heft overview says `config.json` was eliminated; the ejection article describes removing it from a default 1.22 project; modern setup also shows it. | Verify generated configuration by version and reconcile references. |
| Identity | Current authentication guidance describes implicit flow/older principals; Copilot troubleshooting describes a newer principal. | Confirm current flow/principal and keep supported management procedures consistent. |
| Community | All five articles have useful content but include stale project catalogs, old contribution promises, and obsolete channel descriptions. | Refresh against canonical community/project sources; distinguish active and archived projects. |
| Local health | No missing SPFx/community TOC file targets found. One genuine missing article target in the active-file check, one invalid date, and shared snippet targets need correction. | Fix precise references/metadata; do not claim every HTTP link or anchor passed. |

Static pattern inventory, excluding release-history/template content: **12** active SPFx files mention domain isolation, **eight** contain old generator-prompt candidates, **19** mention legacy configuration concepts, **17** contain TODO/placeholder-style markers, and **five** carry Gulp migration/legacy notices. These overlap and include legitimate historical examples; they are triage inputs, not defect counts.

### Public facts checked during the broader scan

- [Node.js release status](https://nodejs.org/en/about/previous-releases), checked October 23: Node.js 22 and 24 are listed as LTS; 26 is **Current**, not LTS. Recommend **Node.js 24 LTS for a fresh SPFx 1.24 environment**, subject to the final GA package/minimum-patch verification in G03. List 22/26 according to the confirmed SPFx support matrix; don't call 26 LTS merely because SPFx supports it. Node.js lifecycle status and SPFx compatibility are distinct.
- [Microsoft 365 & Power Platform community](https://pnp.github.io/) and [community calls](https://aka.ms/community/calls): the calls short link resolves to the canonical community site's events section. Prefer this living schedule/invite source over hard-coded GMT conversions that can drift with daylight saving.
- [PnP PowerShell](https://pnp.github.io/powershell/): current cross-platform module, own Entra application registration required; the former shared PnP Management Shell app was deleted September 9, 2024. Don't describe modern PnP PowerShell as the old combined Online/on-premises module.
- [PnPjs getting started](https://pnp.github.io/pnpjs/getting-started/): provides version-specific SPFx setup and older/on-premises paths. Match samples and package majors rather than installing an unspecified latest major into an old walkthrough.
- [Graph Toolkit retirement announcement](https://devblogs.microsoft.com/microsoft365dev/microsoft-graph-toolkit-retirement/) and [Learn overview](https://learn.microsoft.com/en-us/graph/toolkit/overview): full retirement was scheduled for August 28, 2026; SDK-based data access and custom UI are the transition direction. Do not claim retired web components necessarily stop rendering on that date.
- GitHub repository metadata was queried directly, not inferred from old names: [PnP-Sites-Core](https://github.com/pnp/PnP-Sites-Core), [PnP-PowerShell](https://github.com/pnp/PnP-PowerShell), [PnP-JS-Core](https://github.com/SharePoint/PnP-JS-Core), and [the Visual Studio extension](https://github.com/pnp/sp-dev-fx-vs-extension) are **archived**. [PnP Core SDK](https://github.com/pnp/pnpcore), [PnP Framework](https://github.com/pnp/pnpframework), [PnP PowerShell](https://github.com/pnp/powershell), and both [React controls](https://github.com/pnp/sp-dev-fx-controls-react) and [property controls](https://github.com/pnp/sp-dev-fx-property-controls) are not archived. This verifies location/archival status, not SPFx 1.24 compatibility.

### Mandatory baseline setup gate

- [ ] **B01 - Accept the updated getting-started baseline before tutorial modernization.**  
  - [x] **October 25 delivered:** Mandatory getting-started reference edits prepared, including Node.js 24 and real-page debugging.
  - [ ] **Remaining:** Acceptance blocked: no clean Node.js 24 scaffold/build/package execution. Do not mark baseline signed off from static inspection.

  Complete U02 and the applicable setup/reference changes in U04/C04. Align [environment setup](docs/spfx/set-up-your-development-environment.md), [tenant setup](docs/spfx/set-up-your-developer-tenant.md), [compatibility](docs/spfx/compatibility.md), [generator reference](docs/spfx/yeoman-generator-for-spfx-intro.md), and [tools/libraries](docs/spfx/tools-and-libraries.md). State the recommended Node.js baseline, all supported alternatives/minimums, TypeScript/React compatibility, stable generator install, Heft prerequisites, version-manager guidance for side-by-side projects, developer certificate trust, and a supported debug target. Remove tenant setup's claim that a local workbench ships with current SPFx. Link legacy setup separately and keep its required old versions explicitly scoped. Distinguish tenant eligibility from Copilot licensing; don't promise everyone a free developer tenant.  
  **Acceptance:** validate the documented installation/scaffolding/serve and production-package commands on the recommended Node.js baseline using a clean disposable project, and verify supported alternatives as agreed in G03. Record exact versions/results. No existing tutorial implementation or React render/unmount snippet changes are part of this gate. Dependencies: G01, G03, U02, U04, C04.

### P0/P1 - Current guidance corrections

- [ ] **M01 - Make the modern debugging path and workbench lifecycle unambiguous.** **P0 for baseline references.**  
  - [x] **October 25 delivered:** Replaced current web-part workbench guidance with pages/developer toolbar across baseline references, FAQ, tutorials and shared notices; Copilot Workbench remains supported.
  - [ ] **Remaining:** Live VS Code/browser debugging, screenshots and Viva/ACE replacement-host acceptance remain unverified.

  **Required guidance at every Online workbench reference:** debugging web parts with the SharePoint Online workbench is deprecated; debug on actual SharePoint pages using the [SharePoint Framework Debug Toolbar](docs/spfx/debug-toolbar.md). Apply this direction across setup, concepts, debugging references, FAQs, enterprise guidance, navigation/link labels, and shared includes; queue in-tutorial steps under Q01. **Copilot Workbench is fully supported and continues as the model for Copilot UX components**, not a deprecated exception to be removed. Acceptance requires checking each workbench match in context and preserving valid Copilot guidance.
  Update the reference portions of [debug-in-vscode.md](docs/spfx/debug-in-vscode.md), [debug-modern-pages.md](docs/spfx/debug-modern-pages.md), [debug-toolbar.md](docs/spfx/debug-toolbar.md), tenant/setup guidance, and their shared notices. Prefer real SharePoint pages plus the Debug Toolbar for web parts/extensions; don't instruct developers to debug an extension in the hosted workbench, which the toolbar article correctly says is unsupported. Remove current local-workbench promises (local workbench was removed in 1.13). State the documented December 1, 2026 Online workbench retirement as upcoming on this review date, not already completed. Preserve the separate **Copilot Workbench** and validate the Viva/ACE replacement path with its owner rather than assuming a normal web-part page covers all cases. Align launch/debug manifest paths with the actual Heft version and current built-in VS Code debugger. Inventory in-tutorial steps/screenshots under Q01. Dependencies: G03. Complete the setup-facing reference corrections before B01 acceptance.

- [x] **M02 - Correct retired-feature status and navigation without rewriting tutorials yet.** **P1, high impact.**  
  - [x] **October 25 completion:** Changed domain-isolation and MGT pages to retirement/migration guidance; removed MGT adoption instructions and recommendations without introducing replacement application code.

  **Graph Toolkit removal scope:** flag/remove every recommendation to choose, install, or prefer MGT in current guidance, including [Graph Toolkit guidance](docs/spfx/use-microsoft-graph-toolkit.md), its [tutorial](docs/spfx/web-parts/get-started/build-web-part-microsoft-graph-toolkit.md), TOC getting-started entries, landing pages, community/project recommendations, and inbound "next steps" links. Replace preferred paths with [MSGraphClientV3](docs/spfx/use-msgraph.md), [the existing Graph API tutorial](docs/spfx/web-parts/get-started/using-microsoft-graph-apis.md), or appropriate supported SDK/UI guidance. For the deferred tutorial, record the removal/migration work now rather than modernizing its MGT implementation. Keeping an old URL for migration context is not approval to keep MGT as a recommended option. Acceptance requires a scoped recommendation sweep, not just adding another deprecation warning.
  Update [isolated web parts](docs/spfx/web-parts/isolated-web-parts.md), its [retirement guidance](docs/spfx/web-parts/isolated-web-parts-retirement.md), [Graph Toolkit guidance](docs/spfx/use-microsoft-graph-toolkit.md), relevant FAQ/overview references, and TOC labels. Dates already documented are past; replace future-tense launch recommendations with accurate retirement/migration context. The Store FAQ currently says either isolated or non-isolated web parts can be published; correct that conflict with the lifecycle owner. Don't confuse retired domain isolation with Copilot's iframe hosting. Reclassify the Graph Toolkit tutorial in navigation as legacy/migration material; defer rewriting its body under Q01. Use existing [MSGraphClientV3 guidance](docs/spfx/use-msgraph.md) and supported UI libraries as migration entry points. Preserve old URLs or redirect intentionally. Dependencies: owner confirmation of current lifecycle status; Q01 is not a prerequisite for reference notices.

- [ ] **M03 - Resolve the contradictory SharePoint Server/Subscription Edition matrix.** **P0 for support accuracy.**  
  - [x] **October 25 delivered:** Preserved historical/on-premises target scope and tracked the contradictory SE values.
  - [ ] **Remaining:** Product owner chose to leave 1.4.1-versus-1.5 unresolved pending engineering confirmation; no maximum was guessed.

  Reconcile [compatibility.md](docs/spfx/compatibility.md), [the 2019/SE guide](docs/spfx/sharepoint-2019-and-subscription-edition-support.md), [supported platforms](docs/spfx/supported-extensibility-platforms-overview.md), [enterprise guidance](docs/spfx/enterprise-guidance.md), and [2016 support](docs/spfx/sharepoint-2016-support.md). The repository currently says SE supports 1.5 in one place and has the same requirements as 2019/1.4.1 elsewhere. Obtain authoritative engineering confirmation before choosing a value. Remove contradictory claims that the latest generator can scaffold older targets; keep exact legacy generator/runtime instructions and clearly distinguish supported configurations from "can be made to work" lockfile hacks. Flag EOL development runtimes with appropriate legacy-environment guidance, not an untested Node.js upgrade. Dependencies: platform owner confirmation; coordinate with U02.

- [ ] **M04 - Reconcile identity, Graph access, and permission-management guidance.** **P1.**  
  - [x] **October 25 delivered:** Qualified authentication/default-grant claims, linked supported API-access administration, removed obsolete identity commands and scoped token-provider historical flow.
  - [ ] **Remaining:** Confirm principal identities and host/version behavior; held internal-provider/sample implementation still needs replacement and execution.

  Review [AadHttpClient](docs/spfx/use-aadhttpclient.md), [AadTokenProvider](docs/spfx/use-aadtokenprovider.md), [MSGraphClientV3](docs/spfx/use-msgraph.md), [enterprise API guidance](docs/spfx/use-aadhttpclient-enterpriseapi.md), and the Card Designer/API references against the supported current platform. Confirm old/new principal names and IDs, supported admin consent operations, actual auth flow, popup/cookie constraints, and admin roles. In particular, MSGraphClientV3 says it requires SPFx 1.15+, yet suggests use on premises despite lower server SPFx limits. Resolve that conflict and verify its default Graph-permission claim rather than copying it forward. Keep class identifiers unchanged while updating prose to Microsoft Entra ID. Don't casually transplant direct grant-editing workarounds from Copilot troubleshooting into general guidance. Existing tutorial implementations remain deferred. Dependencies: identity/platform owner confirmation, M03.

- [ ] **M05 - Reconcile Heft/configuration and dependency-update reference guidance.** **P1.**  
  - [x] **October 25 delivered:** Corrected Heft/configuration/Sass/lockfile/reference guidance, broken schema references, current lint/test prose and historical toolchain scope.
  - [ ] **Remaining:** Execute production/ejection/library/scaffold paths and held commands; don't assume command-name substitution is a complete migration.

  Compare [Heft overview](docs/spfx/toolchain/sharepoint-framework-toolchain-rushstack-heft.md), [ejection reference](docs/spfx/toolchain/customize-heft-toolchain-eject-webpack.md), [Sass configuration](docs/spfx/toolchain/configure-sass.md), [package updates](docs/spfx/toolchain/update-latest-packages.md), and [team development](docs/spfx/team-based-development-on-sharepoint-framework.md) with generated version-specific projects. Fix the blanket `config.json` elimination claim only after checking the actual configuration ownership. Correct the Sass processor description that calls `sass` an implementation of a deprecated `dart-sass` package; use the upstream terminology. Package-update guidance incorrectly says lockfiles cause manifest edits to be ignored and recommends deleting the lockfile routinely; replace with controlled dependency updates, preserved lockfiles, aligned SPFx versions, and reproducible restore guidance. Label older Gulp examples rather than converting them indiscriminately. Dependencies: G03, U04.

- [ ] **M06 - Refresh enterprise/governance and the general FAQ.** **P1.**  
  - [x] **October 25 delivered:** Refreshed FAQ, enterprise/why/Online lifecycle guidance and Add-in retirement context; removed undecided SharePoint 2019 wording.
  - [ ] **Remaining:** Final host/support-owner acceptance and SE conflict remain open.

  Update [enterprise guidance](docs/spfx/enterprise-guidance.md), [known issues/FAQ](docs/spfx/known-issues-and-common-questions.yml), [SharePoint Online support](docs/spfx/spfx-sharepoint-online.md), and [why SPFx](docs/spfx/sharepoint-framework-why.md) where they make current claims. Examples: enterprise guidance still says SPFx is new, the generator offers React/Knockout, and designers can use the Workbench without SharePoint; FAQ leads with a Chrome 58/2017 certificate issue and treats SharePoint 2019 support as undecided. Scope historical issues by affected versions and put current setup/debug/support pointers first. Qualify "all versions/betas will always work" promises against explicit retirements, supported dependencies, and actual host constraints. Modernize SharePoint Add-in comparisons as historical context, not a currently equivalent new Online investment; preserve on-premises distinctions. Dependencies: B01, M01-M04.

- [ ] **M07 - Correct npm-audit explanation without treating every finding as exploitable.** **P1.**  
  - [x] **October 25 delivered:** Replaced blanket npm-audit safety advice with scoped advisory/dependency assessment and current toolchain links.
  - [ ] **Remaining:** Dependency-owner acceptance remains open; no advisory-specific exploitability or runtime test was performed.

  Update [npm-vulnerabilities.md](docs/spfx/npm-vulnerabilities.md) and link it from package/update guidance. The article correctly says `node_modules` isn't shipped, but incorrectly generalizes that installed npm packages are only build-time: bundled runtime dependency code can be deployed in JavaScript. Separate development tools, shipped dependencies, actual exposure, and third-party packages. Replace blanket "proceed without investigating" advice with version/advisory-specific assessment and escalation while retaining caution against blind `npm audit fix --force`. No vulnerability determination was performed in this documentation scan. Correct its missing toolchain link to the appropriate existing article. Dependencies: review by the SPFx dependency/documentation owner.

- [ ] **M08 - Review Viva/ACE reference freshness and distinguish SDK lifecycles.** **P1 for notices; tutorial implementations deferred.**  
  - [x] **October 25 delivered:** Removed stale Card Designer rollout/default/consent prose; scoped historical advanced-card/SDK examples and updated debug references.
  - [ ] **Remaining:** Validate tenant/UI/ACE lifecycle with owner; $take=5 and bot SDK/runtime/auth examples remain held, not silently modernized.

  [Card Designer API support](docs/spfx/viva/features/card-designer/card-designer-api-support.md) still forecasts rollout in late 2023/early 2024; verify the current tenant switch, supported permissions process, and UI rather than merely changing its date. Its Graph events example uses `$take=5`; review/correct to supported Graph query syntax. Check [Viva overview](docs/spfx/viva/overview-viva-connections.md), [ACE known issues](docs/spfx/viva/known-issues-adaptive-cards.md), and [advanced card-view guidance](docs/spfx/viva/get-started/advanced-card-view-functionality.md) for stale beta/minimum-version labels, distinguishing design-time Preview mode from a preview feature. Bot-powered ACE examples target .NET Core 3.1, Bot Framework v4, and older Toolkit workflows: inventory supported-framework/SDK/auth migration with the ACE owner. Attempts to fetch current Bot Framework/Agents migration pages returned 404, so this scan **does not assert a newly verified retirement date or an automatic replacement path for bot-powered ACEs**. Don't apply Copilot mobile/Store restrictions to ACEs. Dependencies: Viva/ACE owner confirmation; defer walkthrough changes under Q01.

- [ ] **M09 - Validate existing Teams/Outlook guidance as a distinct host path.** **P1.**  
  - [x] **October 25 delivered:** Updated Teams/Office host distinctions, combined-solution warnings and Developer Portal/historical SDK prose.
  - [ ] **Remaining:** Run SDK/context/manifest/client/consent/deployment checks; no arbitrary Teams SDK override introduced.

  Review [Teams overview](docs/spfx/build-for-teams-overview.md), [considerations](docs/spfx/build-for-teams-considerations.md), [deployment](docs/spfx/deployment-spfx-teams-solutions.md), and [Outlook/Office overview](docs/spfx/office/overview.md). Check supported SDK/context access, current manifest requirements, client limitations, tenant deployment, and provided-package behavior. Preserve the supported framework-provided Teams SDK rule; do not install arbitrary SDK versions to fix examples. Remove outdated implicit-flow-only framing where unsupported by current identity guidance. Keep the combined-solution GA limitation/workaround in L01 explicit. Inventory older Leads/meeting/personal-app walkthroughs for later validation, not wholesale rewrites now. Dependencies: M04, L01, relevant host-owner confirmation.

- [ ] **M10 - Fix precise publishing hygiene and assess discoverability.** **P1.**  
  - [x] **October 25 delivered:** Fixed invalid metadata, missing toolchain/release links and shared migration-note links; added intentional community/new-article navigation.
  - [ ] **Remaining:** Rendered publishing validation and legacy discoverability decisions remain open.

  Correct `05/39/2024` in [isolated-web-parts.md](docs/spfx/web-parts/isolated-web-parts.md) and the already tracked `Copims.date` in R01 using actual review dates. The active-page static audit found a genuine missing extensionless `sharepoint-framework-toolchain` target in [npm-vulnerabilities.md](docs/spfx/npm-vulnerabilities.md). Source-relative checks also flag `release-1.22.md` in [the migration commands snippet](includes/snippets/spfx-gulp-heft-migration-commands.md) and [the migration WIP snippet](includes/snippets/spfx-gulp-heft-migration-wip.md); validate the rendered include resolution and correct to the existing release path. Don't count sample `CRM.aspx`, `SearchCenter.aspx`, or `Privacy.aspx` links as broken documentation targets. All SPFx/community TOC file targets exist, but 20 active pages lack a direct entry: four community pages, nine bot-powered ACE pages, and seven other SPFx pages. Some are intentionally linked from parent pages or retained as legacy; decide visibility/archival deliberately, not by automatically adding them all to the TOC. Check anchors/redirects/rendered snippets with publishing validation. Dependencies: relevant content decisions in M02/K01-K04.

### P1 - Roadmap, community, and support refresh

The roadmap refresh is already required by **N01**. Expand it beyond the Copilot story: reconcile the 1.23/1.23.1 milestones with actual released notes (including 1.23.2), React 18 delivery, Node.js support, command-set work, npm dependency work, CLI status, and unconfirmed navigation-customizer/list-panel plans. Use **Shipped**, **Planned**, and **Under consideration** sections, link released versions rather than duplicating changelogs, and assign an owner/review cadence. Remove stale dates and "Feature X"; don't turn missed forecast dates or announcement aspirations into commitments.

- [x] **K01 - Refresh the community landing page and call information.**  
  - [x] **October 25 completion:** Updated community identity, canonical living call/calendar links, videos, galleries, demo requests and product-versus-community support boundaries.

  Update [community.md](docs/community/community.md): align frontmatter/H1/description with **Microsoft 365 & Power Platform Community**, clarify SharePoint/SPFx's place in it, replace obsolete developer-blog destinations and Windows 10/Enterprise Mobility channel descriptions, and link the canonical community site, current videos, sample galleries, and demo-request route. Replace "UserVoice updates" with the current feedback mechanism. Prefer live calendar/invite links and explicit timezone/DST handling rather than publishing fixed PT/GMT conversions as universal. Review the support statement: community assets are not Microsoft product support, but supported platform defects have their normal Microsoft support route. Don't imply the community exclusively controls official product docs. Dependencies: verified community-owner channels/schedule.

- [x] **K02 - Replace the undifferentiated community project catalog with active/legacy sections.**  
  - [x] **October 25 completion:** Separated current and archived projects, canonicalized repositories, and removed MGT/new-project recommendations and unverified universal compatibility claims.

  Update [open-source-projects.md](docs/community/open-source-projects.md) and [repositories.md](docs/community/repositories.md). Add current PnP Core SDK, PnP Framework, PnP PowerShell, PnPjs, CLI for Microsoft 365, controls, SPFx samples, and the official SPFx CLI/templates repository where appropriate. Use canonical `pnp` destinations for moved repositories. Mark the four verified archived projects above as historical and provide migration links where documented, rather than recommending their installation for new projects. Verify Starter Kit/provisioning/other entries individually before marking them active or archived; only the queried statuses are established by this scan. Remove the claim to list "all" repositories and avoid freezing package/command counts. Distinguish the official SPFx CLI, CLI for Microsoft 365, and the community Yeoman extension. Dependencies: repository-maintainer/project documentation checks; coordinate C04/C05.

- [x] **K03 - Refresh contribution and social-channel guidance.**  
  - [x] **October 25 completion:** Updated contribution routes and verified social destinations; removed stale acknowledgment, branding and response-time promises.

  Update [contribute.md](docs/community/contribute.md) and [social-media.md](docs/community/social-media.md). Include both SharePoint and PnP organizations, current per-repository contribution instructions, community calls/demo requests, docs fixes, and applicable sample galleries. Reconfirm or remove promises about monthly acknowledgments, company logos, a response "within days", and blanket bans on external sample links; don't invent replacement policies. Replace Twitter-only framing with verified current X, Microsoft 365 developer/community LinkedIn, YouTube, blog, and community links. Validate ownership/activity of OfficeDev/Facebook/other old channels before retaining or dropping them. Dependencies: community-owner confirmation; K01/K02 for canonical destinations.

- [x] **K04 - Align support routing, navigation, and landing-page discovery.**  
  - [x] **October 25 completion:** Separated product/docs/how-to/library/feature support routes and updated navigation/landing-page discovery with current community destinations.

  Update [support-feedback.md](docs/support-feedback.md), support/community entries in [toc.yml](docs/toc.yml), and relevant [landing-page links](docs/index.yml). The programming-questions Stack Overflow link currently targets `microsoft-teams` despite asking users for SharePoint/SPFx tags; use a matching destination or verified current support forum. Separate product bugs/docs feedback, feature requests, how-to questions, and community-library issues. Verify legacy feedback/community short links, including `spdev-uservoice`, instead of assuming every old short link is dead. Route library defects to the library repository and keep Microsoft product support separate. Decide whether to surface the four community reference articles under Support & feedback or keep them parent-linked; the current Community TOC entry goes directly to an external site. Dependencies: K01-K03, M10.

### P2 / held - Additional tutorial update inventory

- [ ] **Q01 - Maintain the non-React tutorial inventory, then schedule it after baseline acceptance.**  
  - [x] **October 25 delivered:** Maintained full non-React tutorial inventory; delivered relevant notices, prerequisites, page-debugging and historical-scope corrections.
  - [ ] **Remaining:** Executable CI/authentication/migration/Teams/ACE and other inventoried walkthrough changes remain held until baseline execution.

  The following are concrete later-work candidates from the broad scan. **No existing tutorial changes in the baseline phase.** Keep C06's per-file React inventory as well; avoid duplicate rewrites when a page appears in both lists. Before implementing, choose an explicit current or historical SPFx target and verify the whole scenario, not just replace command names. Dependencies: B01 accepted and product-owner approval to start tutorial work.

  | Tutorial/guidance target | Later update to assess |
  | --- | --- |
  | [First web part](docs/spfx/web-parts/get-started/build-a-hello-world-web-part.md), [serve on a page](docs/spfx/web-parts/get-started/serve-your-web-part-in-a-sharepoint-page.md) | Baseline scaffold/output, page-based debug workflow, real host deployment; React edits remain under C06. |
  | [First extension](docs/spfx/extensions/get-started/build-a-hello-world-extension.md), [form customizer](docs/spfx/extensions/get-started/building-form-customizer.md), [field customizer](docs/spfx/extensions/get-started/building-simple-field-customizer.md), [command set](docs/spfx/extensions/get-started/building-simple-cmdset-with-dialog-api.md) | Current generator/Heft/debug steps and stale Gulp screenshots/alt text; retain distinct list/form/cell lifecycles. |
  | [Serve extensions](docs/spfx/extensions/get-started/serving-your-extension-from-sharepoint.md), [tenant-wide extensions](docs/spfx/extensions/basics/tenant-wide-deployment-extensions.md), [ECB migration](docs/spfx/extensions/guidance/migrate-from-ecb-to-spfx-extensions.md) | Removed prompts, correct deployment configuration, and current verification steps. |
  | [PnPjs walkthrough](docs/spfx/web-parts/guidance/use-sp-pnp-js-with-spfx-web-parts.md) | Old baseline/isolated-permission prompts, unspecified package major alongside v3-era guidance, older compiler/Gulp instructions, and current companion sample. |
  | [AAD tutorial](docs/spfx/use-aad-tutorial.md), [enterprise API](docs/spfx/use-aadhttpclient-enterpriseapi.md), [multitenant API](docs/spfx/use-aadhttpclient-enterpriseapi-multitenant.md) | Removed generator prompts, current app registration/consent/admin UX, auth assumptions, and exact dependency compatibility. |
  | [Graph Toolkit tutorial](docs/spfx/web-parts/get-started/build-web-part-microsoft-graph-toolkit.md) | Flag its adoption/install recommendations and preferred inbound links for removal. Plan archival/migration treatment, not an updated MGT build path. M02 covers current navigation/reference recommendations now; tutorial implementation remains deferred. |
  | [Azure Pipelines](docs/spfx/toolchain/implement-ci-cd-with-azure-pipelines.md), [classic DevOps](docs/spfx/toolchain/implement-ci-cd-with-azure-devops.md) | Current CLI own-app/tenant setup and unattended auth; avoid username/password as the default. Verify local Heft command resolution on clean hosted agents, test-report failure behavior, supported Node.js versions, and current cache/coverage task versions. Preserve explicit legacy scope instead of mixing 1.22+ claims with old React/Jest presets. |
  | [Manual Heft migration](docs/spfx/toolchain/migrate-gulptoolchain-hefttoolchain-manual.md), [CLI migration](docs/spfx/toolchain/migrate-gulptoolchain-hefttoolchain.md) | Exact target-version scope, CLI upgrade-report capabilities, generated configuration changes, and differences between recommended automation and supported manual instructions. Don't replace historical 1.22 pins with 1.24 mechanically. |
  | [CDN deployment](docs/spfx/web-parts/get-started/deploy-web-part-to-cdn.md), [Microsoft 365 CDN hosting](docs/spfx/web-parts/get-started/hosting-webpart-from-office-365-cdn.md), [provision assets](docs/spfx/web-parts/get-started/provision-sp-assets-from-package.md) | Removed prompts, assets/package hosting defaults, command/configuration version scope, and actual tenant permissions. |
  | [External libraries](docs/spfx/web-parts/basics/add-an-external-library.md), [existing JavaScript libraries](docs/spfx/web-parts/guidance/use-existing-javascript-libraries.md) | Bundle/externals/loader examples versus actual Heft configuration; old screenshots are not proof a current command is wrong. |
  | [People-search ACE](docs/spfx/viva/get-started/build-people-search-adaptive-card-extension.md), [advanced card view](docs/spfx/viva/get-started/advanced-card-view-functionality.md), [HTML quick view](docs/spfx/viva/get-started/build-html-quickview-adaptive-card-extension.md) | Check production API versus beta use, TODO error handling, stale package-beta prerequisites, supported debug surface, and separately deferred React roots/cleanup. |
  | [First bot-powered ACE (.NET)](docs/spfx/viva/bot-powered/Building-Your-First-Bot-Powered-ACE.md), [Toolkit/TypeScript path](docs/spfx/viva/bot-powered/Building-Your-First-Bot-Powered-ACE-TTK-TS.md), [extend a Teams bot](docs/spfx/viva/bot-powered/Extending-existing-Teams-Bot.md) | Supported .NET/Node/SDK/Toolkit versions and supported ACE integration; migration path requires ACE-owner verification, not an assumed SDK swap. |
  | [Configure Teams](docs/spfx/build-for-teams-configure-in-teams.md), [personal app](docs/spfx/build-for-teams-me-experience.md), [meeting app](docs/spfx/build-for-teams-meeting-app.md) | Current sample compatibility, manifest/SDK/client behavior and screenshots; preserve L01's combined-solution limitation. |
  | [Domain-isolation discovery/migration script](docs/spfx/web-parts/isolated-web-parts-retirement.md) | Current PnP PowerShell application registration/certificate setup and supported cmdlet names; reference-level retirement corrections belong to M02 now. |

  This is a targeted candidate inventory, not a promise every remaining tutorial is already compatible with 1.24. As later scenario testing finds additional affected tutorials, add their paths and evidence here.

## Verification and publishing checklist

- [x] **V00 - Complete initial inventory and create this tracker.** Scanned all 233 SPFx text files for release-relevant patterns, inspected relevant current guidance/navigation, and compared the supplied announcement and dynamic-discovery reference. No published articles, packages, tenant settings, or TOC entries changed in this pass.
- [ ] **V01 - Validate RC0-baseline examples and final stable packages.** Start now with the three supplied fixtures under `D:\pnp\124rc0`, using isolated variants for new documentation scenarios; the GA contract is unchanged from RC0. Record exact Node.js/package versions and each project's actual scripts/results. Both baseline React projects define `npm run build` as `heft test --clean --production && heft package-solution --production`; the travel-expenses project adds source checks, Playwright UX tests, and package auditing. Do not substitute compilation for those checks or assume the earlier proposed `heft build --production` command is supported without verification. Record generator install/scaffolding and schema-validation results; add Minimal/No framework coverage as needed beyond the supplied React fixtures. Repeat relevant checks with final stable packages when published and compare generated output for packaging differences without reopening the confirmed API contract. Do not install sample dependencies into this documentation repository. Dependencies: G03 for RC0 checks; G01, R01, U02-U04 for final stable/setup sign-off.
  - [x] **October 25 delivered:** Read-only evidence captured for actual RC0 scripts and dependency versions.
  - [ ] **Remaining:** Isolated Node.js 24 build attempt denied before execution twice; no copy/install/build/package succeeded, and no alternate bypass was attempted.

- [ ] **V02 - Verify the deployment decision table in a development tenant.** First deploy and sync; then separately change a parameter, add a component/function, remove a component/function, and change UI only. Redeploy without syncing and verify runtime tools/arguments in fresh conversations. Next change the agent title, icon, and starter prompts and confirm baseline updates after re-sync. Test a combined change, stable IDs, clean-build/CI versioning, and documented propagation behavior. Capture actual outcomes, not just successful package builds. Dependencies: D01-D05, C01.
  Also reproduce the mixed Copilot/Teams automatic-sync mismatch in an isolated test solution, then verify that a manually created Teams package deploys both experiences correctly, including a subsequent baseline update. Record the working package structure and procedure for L01 without using the workaround to claim automatic sync is fixed.
- [ ] **V03 - Run the GA client/permission/UX matrix.** Test licensed and unlicensed rendering, Copilot browser/desktop, and Copilot in Teams browser/desktop. Exercise inline/fullscreen, declared default mode, close/reopen, light/dark themes, keyboard focus, narrow widths, late-loading content, missing/invalid parameters, denied data access, and consent failures. Verify backend operations require intended permissions/confirmation. Verify that the support matrix and prerequisites explicitly exclude iOS and Android mobile clients, including Teams mobile; responsive layouts and mobile-capable SDK types do not establish support. Describe mobile as planned fast-follow support only. Dependencies: R02, L01, U01, C02.
- [ ] **V07 - Verify contextual messaging and the exact size boundary.** With the GA-supported size calculation, test context just below 10 KB, exactly at the limit, and just above it; the first two must send and the last must block sending. Include multibyte/localized text and any counted serialization overhead, not just ASCII character counts. Confirm an explicit diagnostic, no success-shaped fallback, and successful retry after deliberate context reduction. In a live session, confirm the UX appears with useful natural-language information and a follow-up can refer to the visible data/selection. Check that refreshed context matches the current view and doesn't include hidden or unauthorized data. Dependencies: G03, T01.
- [ ] **V04 - Run publishing validation and link checks.** Validate Markdown/YAML/frontmatter, includes, images, local links, TOC targets, and anchors changed by heading renames. Check incoming links to removed sections such as `#availability-during-preview`. Use the repository's publishing validation/preview and `git diff --check`; the checked-in workflow currently handles labels, not a documentation test suite. Verify redirects only if paths change. Check public links after launch, and ensure the tracker itself stays outside the published docs content tree. Dependencies: all implemented content/navigation tasks.
  - [x] **October 25 delivered:** Ran batch static YAML/frontmatter, links/includes/images, new anchors, TOC and whitespace validation; results are recorded in ga-docs-review.md.
  - [ ] **Remaining:** DocFX/publishing render preview, final public links and live Learn checks remain open.

  - [x] Validated the October 23 implementation: changed YAML/frontmatter, 115 relative local links, 32 anchors, editor diagnostics, scoped GA assertions, and `git diff --check`.
  - [x] Checked all 29 release-note links successfully; triaged broader checks into illustrative tenant/localhost URLs and pre-existing companion-link 404s tracked under C05.
  - [ ] Repeat validation for subsequent batches, complete publishing-preview checks, and verify final public links after launch.
- [ ] **V05 - Perform the final scoped consistency sweep.** Search current SPFx content for old product names, beta/RC 1.24 pins, stale production warnings, free-preview licensing, Store prohibitions, "coming at GA", `v1.7` examples, unconditional re-sync advice, and stale roadmap/release dates. Review each match in context; don't remove historical examples, SDK identifiers, or unrelated preview warnings. Confirm facts and final links agree across implemented release/reference/Store/navigation changes. Ensure contextual-messaging guidance consistently states the 10 KB blocking limit and Store guidance explicitly states support from GA. **Baseline acceptance does not depend on completing held tutorials:** list their known discrepancies explicitly and validate them only when their phase resumes. Dependencies for the full GA content sweep: implemented R/D/T/U/N/C tasks and V01-V04/V07 as applicable; C06/Q01 completion is not a baseline prerequisite.
  - [x] **October 25 delivered:** Completed scoped GA naming/licensing/context/Store/roadmap/retirement/debug-reference sweep; held discrepancies are explicitly listed.
  - [ ] **Remaining:** Final post-publication sweep and held code/host acceptance remain open; no all-tutorial-compatibility claim.

- [ ] **V06 - Coordinate publication for the locked October 29, 2026 GA.** Assign owners/reviewers, target review-ready content for October 28, and stage approved content in coherent changes for October 29. Verify actual package/rollout availability before publishing production-use claims, without treating the GA date as an unresolved decision, and verify the live Learn pages after deployment. Replace draft references with the final public announcement URL. Record deferred P1/P2 items explicitly rather than declaring all GA docs complete. Dependencies: G01-G03, V05.

V05/V06 must also include L01: verify that the combined-solution sync restriction and manual-package workaround appear wherever combined deployment is recommended, and that iOS/Android support is never described as available at GA. Keep fast-follow wording separate from confirmed availability.

- [x] **V08 - Complete the broader static/documentation-health scan and extend the backlog.** Read all 238 SPFx/community text files for static analysis; inspect current setup/debug/support/community/reference evidence, check SPFx/community TOC file targets, examine relevant shared snippets, and verify selected public community/project/runtime facts. Inventory tutorial work without implementing it. Static regex findings were triaged for sample-code false positives. Existing tutorial execution, all external URLs/anchors, and visual assets have not been exhaustively validated.
- [ ] **V09 - Validate the baseline and broader reference refresh separately from deferred tutorials.** Verify exact Node.js/toolchain versions, scaffold/serve/build/package results, lifecycle/support wording, canonical community links/project archival labels, TOC/anchor/include behavior, and every changed local link. Record unresolved platform/community-owner decisions. Assign owners and review cadence to roadmap/community/reference pages. Publish a clear status showing baseline done versus tutorials held; do not declare the whole library modernized. Dependencies: B01, implemented M01-M10/K01-K04 and N01; no dependency on C06/Q01.
  - [x] October 25: completed static reference/navigation/link validation, zero current workbench references without replacement guidance, zero unqualified MGT references outside release history, and the single-notice Add-in coverage checks. Results and per-file scope are in the review inventory.
  - [ ] Node.js 24 execution, host/publishing acceptance and remaining owner decisions are still open; baseline is not signed off.
  Explicitly verify that current Online workbench references provide the page/developer-toolbar replacement, Copilot Workbench remains described as fully supported, and all Graph Toolkit preferences/recommendations are either removed from implemented guidance or explicitly queued for removal in the held tutorial inventory.

## Suggested implementation batches

1. **Mandatory baseline first, ahead of October 29:** apply the locked date under G01; validate the unchanged RC0 contract using the supplied fixtures under G03; complete U02, setup/reference parts of U04/C04, M01/M03, B01. Apply confirmed USL/no-consumption wording under G02 in parallel and close only the remaining release/availability questions.
2. **Current reference and discovery refresh:** N01, K01-K04, M02/M04-M10; validate separately with V09.
3. **GA capability/reference story:** R01-R03, R02/D01-D02/L01/C01, D05/T01/U01/C02-C03/N02-N03 as applicable; don't rewrite existing tutorial code as incidental cleanup.
4. **Held until baseline acceptance and approval:** D03-D04, U03 walkthrough edits, C05 tutorial screenshots, C06 React inventory, Q01 broader tutorial inventory. Use the accepted baseline in every resumed walkthrough.
5. **Verify/publish the agreed scope on October 29:** V01-V07/V09 as applicable (V07 before contextual-messaging sign-off); target review readiness on October 28. Explicitly list held tutorial work, unresolved facts, and follow-on owners rather than blocking baseline completion on the entire backlog.

## P2 / intentionally deferred

- A separate write-action tutorial (for example, a reviewed/confirmed request form) could follow C02; it isn't needed to explain the supplied deployment requirement.
- Historical tutorial/React modernization is explicitly deferred under C06/Q01 until after baseline setup; it is now inventoried here, not omitted from the overall health review. Fix current setup/reference conflicts first and preserve legitimate legacy Gulp/version-specific material.
- The combined Copilot/Teams automatic-sync fix and iOS/Android support are planned fast follows after GA. Their **GA limitations and workaround documentation are P0 under L01**, not deferred. Track post-GA availability before updating the support claims; no delivery date is committed here.
- Standard Copilot chat plug-in packaging, Cowork, new CLI GA status, and other roadmap items require their own availability confirmation and documentation work. Do not enable them by removing preview wording globally.


## Added scope - retirement, README and explicit review inventory

- [x] **E01 - Mark SharePoint Online Add-in guidance end of life without deleting it.**
  Updated the shared Add-in/ACS retirement snippets for April 2, 2026, clarified REST/CSOM/JSOM/SPFx and SharePoint Server exclusions, and applied notices to 112 of 114 Add-in articles (two deliberate exclusions). Extended notices to 233 outside-folder articles: one API, two comparisons, 53 solution-guidance, 171 Add-in-schema and six scoped scenario pages. The experimental license terms and modern Entra admin-API article are excluded; generic schema/mixed scenario pages aren't labeled retired solely for incidental references. Shared snippets affect unchanged consuming pages; see the review inventory for that separate impact list.
- [x] **K05 - Refresh the repository README.**
  Updated purpose, Learn/support/community/contribution pointers and retirement context; included community calls, https://pnp.github.io/sp-dev-fx-webparts/ and https://aka.ms/spfx/copilot/samples without claiming every sample is GA-compatible.
- [x] **V10 - Provide an explicit review inventory.**
  [ga-docs-review.md](ga-docs-review.md) lists every changed/new file relative to the previous fork checkpoint, shared-notice impact, validation results, and the remaining code/runtime/publication gates.
