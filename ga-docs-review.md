# SPFx 1.24 GA documentation review

Review date: October 25, 2026. Prepared for GA on **October 29, 2026**.

This inventory covers the new batch relative to fork checkpoint `4a1f772e5ba5e2c61e038bb9e879940559a30691`. The earlier release-note/preview-warning and Node.js 24 commits are already in that checkpoint. This is a fork review, not a Learn publication.

## Main changes

- Added canonical Copilot UX component development/deployment, visible-context, and component/agent configuration articles. Updated existing Copilot guidance and navigation around those references.
- Applied the confirmed GA licensing, Store eligibility, client exclusions, mixed Teams/Copilot packaging workaround, and unchanged RC0 contract.
- Refreshed the roadmap from the September 2026 announcement: October 29 GA, tentative December 2026 / January 2027 SPFx 1.25, and separately undated fast follows.
- Updated Node.js 24 LTS setup, toolchain/debugging references, actual-page/developer-toolbar guidance and community/support resources. Copilot Workbench remains fully supported.
- Removed MGT adoption guidance; marked domain isolation and SharePoint Online Add-ins as retired, preserving historical URLs and supported REST/CSOM/JSOM/SPFx/Server scope.
- Updated README and landing pages with community calls and both requested SPFx sample galleries.

## Deliberately not completed

- **Code/runtime work is blocked by the user's explicit instruction following execution denial.** No sample builds, installs, scaffolds, package tests, browser/tenant deployments, or Node.js 24 execution succeeded. Original supplied sample projects were not changed.
- Inspected RC0 source/type/configuration evidence is not an execution test. Existing application/React implementation blocks and CI/migration scripts remain unchanged. Permitted reference changes include GA pins, debug URLs/configuration, reproducible-restore commands, and removal of obsolete/retired examples.
- Held examples include the first Copilot tutorial's v1.7 excerpt, unverified legacy build commands, resize/fullscreen error handling, React roots/disposal, Card Designer `$take=5`, and Teams/ACE/CI/migration code. Current/historical scope is called out; the tracker retains the remaining work.
- The **10 KB blocking limit is confirmed**, but exact byte counting/encoding/serialization/aggregation is not. No guessed byte-check implementation was added.
- Subscription Edition's conflicting maximum SPFx versions remain flagged per user direction. Host authentication/principal details, ACE lifecycle/consent, and Store certification for embedded combined Teams packages still need owner confirmation.
- Final stable npm publication/dist-tags, the public GA announcement permalink, publishing preview, live Learn checks and host acceptance remain open. Sample links were corrected, but gallery samples can still declare beta/RC package versions.

## Retirement scope

The shared notices mark the **SharePoint Online Add-in model and Azure ACS as retired on April 2, 2026**. They don't retire REST, CSOM, JSOM, SPFx, Office Add-ins, or SharePoint Server app-catalog deployments.

- **112 of 114 Add-in articles** use the shared notice. Exclusions: experimental license terms and the modern Entra admin-API article.
- **233 additional articles** received scoped notices: one management API, two comparisons, 53 solution-guidance articles, 171 Add-in-specific schema articles, and six scenario articles.
- Generic schema references and mixed scenarios with incidental Add-in mentions were intentionally not labeled wholly retired. Scenario notices are scoped to legacy sections.
- No article was deleted or renamed. The indirect-impact inventory below identifies existing pages whose rendered notices change even though their source files weren't edited.

## Validation

Static validation results and exact file inventories are generated below. Runtime and publishing-render validation remain explicitly open in [the tracker](todo.md).

<!-- GENERATED-REVIEW-START -->
**371 physically changed/new files**, including 4 new files; **104 additional unchanged source pages** consume an updated shared include.

### Static results

| Check | Result |
| --- | --- |
| Changed-file YAML/frontmatter/date parsing | Passed: 362 blocks. |
| Local links/includes/images and new anchors | Passed: no new unresolved references; 2714 references and 34 new anchors checked, including the generated inventory links in the final run. |
| SPFx/community TOC | Passed: 220 target files. |
| Application-code hold | Passed: 481 existing JS/TS/JSX/TSX fences unchanged outside the two retired MGT adoption pages. |
| Tutorial-owner detailed check | 417 tutorial implementation fences unchanged; CI/migration scripts unchanged. |
| Tracker | Passed: 55 unique IDs; completed parent tasks have no unchecked child task. |
| GA facts and access-link hygiene | Passed: new/reference metadata, Store GA/USL/client guidance and no confidential preview-access URL. |
| Whitespace | Passed: `git -c core.whitespace=-blank-at-eol,cr-at-eol diff --check`; separate added-line check permits Markdown two-space hard breaks only. |
| Local publishing build | Not run. Repository publishing configuration was inspected; full hosted/render validation remains open. |
| Sample/application execution | Blocked before execution twice; no passing build/runtime result claimed. |

Static authoring commands used `python ...\validate_docs.py` (session-local checker) and the Git whitespace command above. The checker is authoring scratch tooling, not a new repository build requirement. Its final rerun also checks all generated inventory links.

External checks: new lifecycle **10/10**, context **4/4**, configuration **8/8**, roadmap **13/13**. Community checks covered 209 references; Stack Overflow HTTP403 and LinkedIn HTTP999 were independently triaged. Baseline checks found 78 valid references, six HTTP403 responses and illustrative URLs. Existing AppSource HTTP403 responses and tenant/localhost placeholders are not represented as verified public failures.

One unchanged pre-existing source-route finding remains outside this edit scope: the throttling link in [Performance](docs/scenario-guidance/Performance.md) points to `/sharepoint/dev/solution-guidance/handle-sharepoint-online-throttling-by-using-exponential-back-off`. Its CDN route is covered by an existing repository redirect. This batch introduces no new unresolved local references.

### Every physically changed/new file

All paths below are relative to the repository root. Each row describes the substantive edit; related reviewed-date/metadata changes are included in the same row. **New** identifies newly added files.

#### Repository, community and navigation (11)

| File | Edit |
| --- | --- |
| [README.md](README.md) | Refreshed repository purpose, contribution/support links, Add-in retirement context, community calls and both requested sample galleries. |
| [docs/community/community.md](docs/community/community.md) | Current community identity, living call invitations, videos, samples, demo requests and support boundaries. |
| [docs/community/contribute.md](docs/community/contribute.md) | Current per-repository contribution and demo/sample routes; removed unverified recognition and response promises. |
| [docs/community/open-source-projects.md](docs/community/open-source-projects.md) | Current versus archived project catalog; modern tools/SDKs and removed MGT recommendations. |
| [docs/community/repositories.md](docs/community/repositories.md) | Canonical repository catalog and current/historical distinctions; removed universal counts and adoption claims. |
| [docs/community/social-media.md](docs/community/social-media.md) | Verified community/developer LinkedIn, X, YouTube, blog and canonical community destinations. |
| [docs/index.yml](docs/index.yml) | Added Copilot overview/tutorial, current sample galleries and community calls. |
| [docs/support-feedback.md](docs/support-feedback.md) | Separated product bugs, documentation, how-to, feature requests, library issues and Microsoft support routes. |
| [docs/toc.yml](docs/toc.yml) | Added three Copilot reference articles and community discovery; retired-feature labels and removed the MGT adoption tutorial entry. |
| [ga-docs-review.md](ga-docs-review.md) **New** | Added this complete review inventory, shared-notice impact, validation evidence and explicit remaining gates. |
| [todo.md](todo.md) | Updated all 55 stable task IDs with delivered/remaining checkboxes, execution hold, roadmap approval, expanded retirement/README scope and review evidence. |

#### Add-in API and comparisons (3)

| File | Edit |
| --- | --- |
| [docs/apis/addin-management-apis.md](docs/apis/addin-management-apis.md) | Added shared Online Add-in EOL notice and historical scope without retiring supported Server/API functionality. |
| [docs/general-development/deciding-between-sharepoint-add-ins-and-sharepoint-solutions.md](docs/general-development/deciding-between-sharepoint-add-ins-and-sharepoint-solutions.md) | Added shared Online Add-in EOL notice and historical scope without retiring supported Server/API functionality. |
| [docs/general-development/sharepoint-add-ins-compared-with-sharepoint-solutions.md](docs/general-development/sharepoint-add-ins-compared-with-sharepoint-solutions.md) | Added shared Online Add-in EOL notice and historical scope without retiring supported Server/API functionality. |

#### Mixed scenario guidance (6)

| File | Edit |
| --- | --- |
| [docs/scenario-guidance/Application-lifecycle-management.md](docs/scenario-guidance/Application-lifecycle-management.md) | Added shared Online Add-in EOL notice to the legacy Add-in section, not the whole mixed scenario. |
| [docs/scenario-guidance/Custom-configurations.md](docs/scenario-guidance/Custom-configurations.md) | Added shared Online Add-in EOL notice to the legacy Add-in section, not the whole mixed scenario. |
| [docs/scenario-guidance/Development-models.md](docs/scenario-guidance/Development-models.md) | Added shared Online Add-in EOL notice to the legacy Add-in section, not the whole mixed scenario. |
| [docs/scenario-guidance/Performance.md](docs/scenario-guidance/Performance.md) | Added shared Online Add-in EOL notice to the legacy Add-in section, not the whole mixed scenario. |
| [docs/scenario-guidance/Responding-to-changes.md](docs/scenario-guidance/Responding-to-changes.md) | Added shared Online Add-in EOL notice to the legacy Add-in section, not the whole mixed scenario. |
| [docs/scenario-guidance/Solutions-deployment.md](docs/scenario-guidance/Solutions-deployment.md) | Added shared Online Add-in EOL notice to the legacy Add-in section, not the whole mixed scenario. |

#### Add-in schema references (171)

| File | Edit |
| --- | --- |
| [docs/schema/activationdependencies-element-featuredefinition-complextypeapphostwebfeatures.md](docs/schema/activationdependencies-element-featuredefinition-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/activationdependency-element-featureactivationdependencydefinitions-complextypea.md](docs/schema/activationdependency-element-featureactivationdependencydefinitions-complextypea.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/app-element-sharepoint-add-in-manifest.md](docs/schema/app-element-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/appdefinition-complextype-sharepoint-add-in-manifest.md](docs/schema/appdefinition-complextype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/apphostwebfeatures-schema-reference.md](docs/schema/apphostwebfeatures-schema-reference.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/applyelementmanifests-element-upgradeactionsgroup-groupapphostwebfeatures.md](docs/schema/applyelementmanifests-element-upgradeactionsgroup-groupapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/apppartconfig-element-apppartconfigdefinition.md](docs/schema/apppartconfig-element-apppartconfigdefinition.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/apppartconfigdefinition-complextype-apppartconfigdefinition.md](docs/schema/apppartconfigdefinition-complextype-apppartconfigdefinition.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/apppartconfigdefinition-schema-reference.md](docs/schema/apppartconfigdefinition-schema-reference.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/apppermissionappprincipaldefinition-simpletype-sharepoint-add-in-manifest.md](docs/schema/apppermissionappprincipaldefinition-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/apppermissionpropertydefinition-complextype-sharepoint-add-in-manifest.md](docs/schema/apppermissionpropertydefinition-complextype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/apppermissionrequest-element-apppermissionrequestsdefinition-complextypesharepoi.md](docs/schema/apppermissionrequest-element-apppermissionrequestsdefinition-complextypesharepoi.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/apppermissionrequestdefinition-complextype-sharepoint-add-in-manifest.md](docs/schema/apppermissionrequestdefinition-complextype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/apppermissionrequests-element-appdefinition-complextypesharepoint-add-in-manifes.md](docs/schema/apppermissionrequests-element-appdefinition-complextypesharepoint-add-in-manifes.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/apppermissionrequestsdefinition-complextype-sharepoint-add-in-manifest.md](docs/schema/apppermissionrequestsdefinition-complextype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/apppermissionrightdefinition-simpletype-sharepoint-add-in-manifest.md](docs/schema/apppermissionrightdefinition-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/appprerequisite-complextype-sharepoint-add-in-manifest.md](docs/schema/appprerequisite-complextype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/appprerequisite-element-appprerequisitecollection-complextypesharepoint-add-in-m.md](docs/schema/appprerequisite-element-appprerequisitecollection-complextypesharepoint-add-in-m.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/appprerequisitecollection-complextype-sharepoint-add-in-manifest.md](docs/schema/appprerequisitecollection-complextype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/appprerequisites-element-appdefinition-complextypesharepoint-add-in-manifest.md](docs/schema/appprerequisites-element-appdefinition-complextypesharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/appprerequisitetypedefinition-simpletype-sharepoint-add-in-manifest.md](docs/schema/appprerequisitetypedefinition-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/appprincipal-element-appdefinition-complextypesharepoint-add-in-manifest.md](docs/schema/appprincipal-element-appdefinition-complextypesharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/appprincipaldefinition-complextype-sharepoint-add-in-manifest.md](docs/schema/appprincipaldefinition-complextype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/appprincipaltypedefinition-simpletype-sharepoint-add-in-manifest.md](docs/schema/appprincipaltypedefinition-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/autodeployedwebapplication-element-appprincipaldefinition-complextypesharepoint.md](docs/schema/autodeployedwebapplication-element-appprincipaldefinition-complextypesharepoint.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/autodeployedwebapplicationdebuginfoappurldefinition-simpletype-sharepoint-add-in.md](docs/schema/autodeployedwebapplicationdebuginfoappurldefinition-simpletype-sharepoint-add-in.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/autodeployedwebapplicationdebuginfodefinition-complextype-sharepoint-add-in-mani.md](docs/schema/autodeployedwebapplicationdebuginfodefinition-complextype-sharepoint-add-in-mani.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/button-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/button-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/checkbox-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/checkbox-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/client-web-part-definition-schema.md](docs/schema/client-web-part-definition-schema.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/clientwebpart-element-elementdefinitioncollection-complextypeapphostwebfeatures.md](docs/schema/clientwebpart-element-elementdefinitioncollection-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/clientwebpartdefinition-complextype-apphostwebfeatures.md](docs/schema/clientwebpartdefinition-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/clientwebpartdefinitioncontent-complextype-apphostwebfeatures.md](docs/schema/clientwebpartdefinitioncontent-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/clientwebpartdefinitioncontenttype-simpletype-apphostwebfeatures.md](docs/schema/clientwebpartdefinitioncontenttype-simpletype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/clientwebpartenumitem-complextype-apphostwebfeatures.md](docs/schema/clientwebpartenumitem-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/clientwebpartenumitems-complextype-apphostwebfeatures.md](docs/schema/clientwebpartenumitems-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/clientwebpartproperties-complextype-apphostwebfeatures.md](docs/schema/clientwebpartproperties-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/clientwebpartproperty-complextype-apphostwebfeatures.md](docs/schema/clientwebpartproperty-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/clientwebpartpropertytype-simpletype-apphostwebfeatures.md](docs/schema/clientwebpartpropertytype-simpletype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/colorpicker-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/colorpicker-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/combobox-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/combobox-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/commanduidefinition-element-commanduidefinitionstype-complextypeapphostwebfeatur.md](docs/schema/commanduidefinition-element-commanduidefinitionstype-complextypeapphostwebfeatur.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/commanduidefinitions-element-commanduiextensiontype-complextypeapphostwebfeature.md](docs/schema/commanduidefinitions-element-commanduiextensiontype-complextypeapphostwebfeature.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/commanduidefinitionstype-complextype-apphostwebfeatures.md](docs/schema/commanduidefinitionstype-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/commanduidefinitiontype-complextype-apphostwebfeatures.md](docs/schema/commanduidefinitiontype-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/commanduiextension-element-customactiondefinition-complextypeapphostwebfeatures.md](docs/schema/commanduiextension-element-customactiondefinition-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/commanduiextensiontype-complextype-apphostwebfeatures.md](docs/schema/commanduiextensiontype-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/commanduihandler-element-commanduihandlerstype-complextypeapphostwebfeatures.md](docs/schema/commanduihandler-element-commanduihandlerstype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/commanduihandlers-element-commanduiextensiontype-complextypeapphostwebfeatures.md](docs/schema/commanduihandlers-element-commanduiextensiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/commanduihandlerstype-complextype-apphostwebfeatures.md](docs/schema/commanduihandlerstype-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/commanduihandlertype-complextype-apphostwebfeatures.md](docs/schema/commanduihandlertype-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/content-element-clientwebpartdefinition-complextypeapphostwebfeatures.md](docs/schema/content-element-clientwebpartdefinition-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/contextualgroup-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/contextualgroup-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/contextualtabs-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/contextualtabs-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/controls-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/controls-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/culturenamedefinition-simpletype-sharepoint-add-in-manifest.md](docs/schema/culturenamedefinition-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/customaction-element-customactiondefinitions-complextypeapphostwebfeatures.md](docs/schema/customaction-element-customactiondefinitions-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/customaction-element-elementdefinitioncollection-complextypeapphostwebfeatures.md](docs/schema/customaction-element-elementdefinitioncollection-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/customactiondefinition-complextype-apphostwebfeatures.md](docs/schema/customactiondefinition-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/customactiondefinitions-complextype-apphostwebfeatures.md](docs/schema/customactiondefinitions-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/customactionlocations-simpletype-apphostwebfeatures.md](docs/schema/customactionlocations-simpletype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/customactionregistrationtype-simpletype-apphostwebfeatures.md](docs/schema/customactionregistrationtype-simpletype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/debuginfo-element-autodeployedwebapplication-elementappprincipaldefinition-compl.md](docs/schema/debuginfo-element-autodeployedwebapplication-elementappprincipaldefinition-compl.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/descriptiondefinition-simpletype-sharepoint-add-in-manifest.md](docs/schema/descriptiondefinition-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/dropdown-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/dropdown-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/elementdefinitioncollection-complextype-apphostwebfeatures.md](docs/schema/elementdefinitioncollection-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/elementfile-element-elementmanifestreferences-complextypeapphostwebfeatures.md](docs/schema/elementfile-element-elementmanifestreferences-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/elementmanifest-element-elementmanifestreferences-complextypeapphostwebfeatures.md](docs/schema/elementmanifest-element-elementmanifestreferences-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/elementmanifestreference-complextype-apphostwebfeatures.md](docs/schema/elementmanifestreference-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/elementmanifestreferences-complextype-apphostwebfeatures.md](docs/schema/elementmanifestreferences-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/elementmanifests-element-featuredefinition-complextypeapphostwebfeatures.md](docs/schema/elementmanifests-element-featuredefinition-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/elements-apphostwebfeatures.md](docs/schema/elements-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/elements-apppartconfigdefinition.md](docs/schema/elements-apppartconfigdefinition.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/elements-element-apphostwebfeatures.md](docs/schema/elements-element-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/elements-sharepoint-add-in-manifest.md](docs/schema/elements-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/enumitem-element-clientwebpartenumitems-complextypeapphostwebfeatures.md](docs/schema/enumitem-element-clientwebpartenumitems-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/enumitems-element-clientwebpartproperty-complextypeapphostwebfeatures.md](docs/schema/enumitems-element-clientwebpartproperty-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/feature-element-apphostwebfeatures.md](docs/schema/feature-element-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/feature-element-featuretemplatereferences-complextypeapphostwebfeatures.md](docs/schema/feature-element-featuretemplatereferences-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/featureactivationdependencydefinition-complextype-apphostwebfeatures.md](docs/schema/featureactivationdependencydefinition-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/featureactivationdependencydefinitions-complextype-apphostwebfeatures.md](docs/schema/featureactivationdependencydefinitions-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/featuredefinition-complextype-apphostwebfeatures.md](docs/schema/featuredefinition-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/featurepropertydefinition-complextype-apphostwebfeatures.md](docs/schema/featurepropertydefinition-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/featurepropertydefinitions-complextype-apphostwebfeatures.md](docs/schema/featurepropertydefinitions-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/featurescope-simpletype-apphostwebfeatures.md](docs/schema/featurescope-simpletype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/featuretemplatereference-complextype-apphostwebfeatures.md](docs/schema/featuretemplatereference-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/featuretemplatereferences-complextype-apphostwebfeatures.md](docs/schema/featuretemplatereferences-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/featureversion-simpletype-apphostwebfeatures.md](docs/schema/featureversion-simpletype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/flyoutanchor-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/flyoutanchor-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/gallery-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/gallery-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/gallerybutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/gallerybutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/group-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/group-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/groups-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/groups-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/grouptemplate-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/grouptemplate-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/guid-simpletype-apppartconfigdefinition.md](docs/schema/guid-simpletype-apppartconfigdefinition.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/guid-simpletype-sharepoint-add-in-manifest.md](docs/schema/guid-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/id-element-apppartconfigdefinition-complextypeapppartconfigdefinition.md](docs/schema/id-element-apppartconfigdefinition-complextypeapppartconfigdefinition.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/inserttable-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/inserttable-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/installedeventendpoint-element-propertiesdefinition-complextypesharepoint-add-in.md](docs/schema/installedeventendpoint-element-propertiesdefinition-complextypesharepoint-add-in.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/internal-element-appprincipaldefinition-complextypesharepoint-add-in-manifest.md](docs/schema/internal-element-appprincipaldefinition-complextypesharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/label-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/label-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/manifesturi-simpletype-sharepoint-add-in-manifest.md](docs/schema/manifesturi-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/maxsize-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/maxsize-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/menu-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/menu-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/menusection-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/menusection-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/mrusplitbutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/mrusplitbutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/namedefinition-simpletype-sharepoint-add-in-manifest.md](docs/schema/namedefinition-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/properties-element-appdefinition-complextypesharepoint-add-in-manifest.md](docs/schema/properties-element-appdefinition-complextypesharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/properties-element-clientwebpartdefinition-complextypeapphostwebfeatures.md](docs/schema/properties-element-clientwebpartdefinition-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/properties-element-featuredefinition-complextypeapphostwebfeatures.md](docs/schema/properties-element-featuredefinition-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/properties-element-featuretemplatereference-complextypeapphostwebfeatures.md](docs/schema/properties-element-featuretemplatereference-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/propertiesdefinition-complextype-sharepoint-add-in-manifest.md](docs/schema/propertiesdefinition-complextype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/property-element-apppermissionrequestdefinition-complextypesharepoint-add-in-man.md](docs/schema/property-element-apppermissionrequestdefinition-complextypesharepoint-add-in-man.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/property-element-clientwebpartproperties-complextypeapphostwebfeatures.md](docs/schema/property-element-clientwebpartproperties-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/property-element-featurepropertydefinitions-complextypeapphostwebfeatures.md](docs/schema/property-element-featurepropertydefinitions-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/property-element-propertybagdefinition-complextypeapphostwebfeatures.md](docs/schema/property-element-propertybagdefinition-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/propertybagdefinition-complextype-apphostwebfeatures.md](docs/schema/propertybagdefinition-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/propertybagparenttypedefinition-simpletype-apphostwebfeatures.md](docs/schema/propertybagparenttypedefinition-simpletype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/propertybagtype-simpletype-apphostwebfeatures.md](docs/schema/propertybagtype-simpletype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/propertyvalueattributedefinition-complextype-apphostwebfeatures.md](docs/schema/propertyvalueattributedefinition-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/qat-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/qat-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/remoteendpoint-element-remoteendpointsdefinition-complextypesharepoint-add-in-ma.md](docs/schema/remoteendpoint-element-remoteendpointsdefinition-complextypesharepoint-add-in-ma.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/remoteendpointdefinition-complextype-sharepoint-add-in-manifest.md](docs/schema/remoteendpointdefinition-complextype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/remoteendpoints-element-appdefinition-complextypesharepoint-add-in-manifest.md](docs/schema/remoteendpoints-element-appdefinition-complextypesharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/remoteendpointsdefinition-complextype-sharepoint-add-in-manifest.md](docs/schema/remoteendpointsdefinition-complextype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/remotewebapplication-element-appprincipaldefinition-complextypesharepoint-add-in.md](docs/schema/remotewebapplication-element-appprincipaldefinition-complextypesharepoint-add-in.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/restrictedint-simpletype-sharepoint-add-in-manifest.md](docs/schema/restrictedint-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/ribbon-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/ribbon-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/scale-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/scale-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/scaling-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/scaling-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/schema-map-apphostwebfeatures.md](docs/schema/schema-map-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/schema-map-apppartconfigdefinition.md](docs/schema/schema-map-apppartconfigdefinition.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/schema-map-sharepoint-add-in-manifest.md](docs/schema/schema-map-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/schema-reference-for-manifests-of-sharepoint-add-ins.md](docs/schema/schema-reference-for-manifests-of-sharepoint-add-ins.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/settingspage-element-propertiesdefinition-complextypesharepoint-add-in-manifest.md](docs/schema/settingspage-element-propertiesdefinition-complextypesharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/sharepoint-add-in-schemas.md](docs/schema/sharepoint-add-in-schemas.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/simplepropertydefinition-complextype-apphostwebfeatures.md](docs/schema/simplepropertydefinition-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/spinner-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/spinner-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/splitbutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/splitbutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/startpage-element-propertiesdefinition-complextypesharepoint-add-in-manifest.md](docs/schema/startpage-element-propertiesdefinition-complextypesharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/supportedlanguages-element-propertiesdefinition-complextypesharepoint-add-in-man.md](docs/schema/supportedlanguages-element-propertiesdefinition-complextypesharepoint-add-in-man.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/supportedlanguagesdefinition-simpletype-sharepoint-add-in-manifest.md](docs/schema/supportedlanguagesdefinition-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/supportedlocale-element-supportedlocalesdefinition-complextypesharepoint-add-in.md](docs/schema/supportedlocale-element-supportedlocalesdefinition-complextypesharepoint-add-in.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/supportedlocaledefinition-complextype-sharepoint-add-in-manifest.md](docs/schema/supportedlocaledefinition-complextype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/supportedlocales-element-propertiesdefinition-complextypesharepoint-add-in-manif.md](docs/schema/supportedlocales-element-propertiesdefinition-complextypesharepoint-add-in-manif.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/supportedlocalesdefinition-complextype-sharepoint-add-in-manifest.md](docs/schema/supportedlocalesdefinition-complextype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/tab-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/tab-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/tabs-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/tabs-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/textbox-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/textbox-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/title-element-propertiesdefinition-complextypesharepoint-add-in-manifest.md](docs/schema/title-element-propertiesdefinition-complextypesharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/titledefinition-simpletype-sharepoint-add-in-manifest.md](docs/schema/titledefinition-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/togglebutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.md](docs/schema/togglebutton-element-commanduidefinitiontype-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/typedefinition-simpletype-sharepoint-add-in-manifest.md](docs/schema/typedefinition-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/types-apphostwebfeatures.md](docs/schema/types-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/types-apppartconfigdefinition.md](docs/schema/types-apppartconfigdefinition.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/types-sharepoint-add-in-manifest.md](docs/schema/types-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/uiversion-simpletype-apphostwebfeatures.md](docs/schema/uiversion-simpletype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/uninstallingeventendpoint-element-propertiesdefinition-complextypesharepoint-add.md](docs/schema/uninstallingeventendpoint-element-propertiesdefinition-complextypesharepoint-add.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/upgradeactions-element-featuredefinition-complextypeapphostwebfeatures.md](docs/schema/upgradeactions-element-featuredefinition-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/upgradeactionsdefinition-complextype-apphostwebfeatures.md](docs/schema/upgradeactionsdefinition-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/upgradedeventendpoint-element-propertiesdefinition-complextypesharepoint-add-in.md](docs/schema/upgradedeventendpoint-element-propertiesdefinition-complextypesharepoint-add-in.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/urlaction-element-customactiondefinition-complextypeapphostwebfeatures.md](docs/schema/urlaction-element-customactiondefinition-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/urlactiondefinition-complextype-apphostwebfeatures.md](docs/schema/urlactiondefinition-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/urlelementdefinition-complextype-sharepoint-add-in-manifest.md](docs/schema/urlelementdefinition-complextype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/versiondefinition-simpletype-sharepoint-add-in-manifest.md](docs/schema/versiondefinition-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/versionrange-element-upgradeactionsdefinition-complextypeapphostwebfeatures.md](docs/schema/versionrange-element-upgradeactionsdefinition-complextypeapphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/versionrangedefinition-complextype-apphostwebfeatures.md](docs/schema/versionrangedefinition-complextype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/webpartpersonalizationscope-simpletype-apphostwebfeatures.md](docs/schema/webpartpersonalizationscope-simpletype-apphostwebfeatures.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/webtemplate-element-propertiesdefinition-complextypesharepoint-add-in-manifest.md](docs/schema/webtemplate-element-propertiesdefinition-complextypesharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/webtemplatedefinition-complextype-sharepoint-add-in-manifest.md](docs/schema/webtemplatedefinition-complextype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |
| [docs/schema/webtemplateiddefinition-simpletype-sharepoint-add-in-manifest.md](docs/schema/webtemplateiddefinition-simpletype-sharepoint-add-in-manifest.md) | Added scoped shared Online Add-in EOL notice; retained historical schema reference and reviewed metadata. |

#### Add-in solution guidance (53)

| File | Edit |
| --- | --- |
| [docs/solution-guidance/Autotagging-sample-app-for-SharePoint.md](docs/solution-guidance/Autotagging-sample-app-for-SharePoint.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Bulk-upload-documents-sample-app-for-SharePoint.md](docs/solution-guidance/Bulk-upload-documents-sample-app-for-SharePoint.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Configure-SP-Provider-Hosted-Apps-For-Distribution.md](docs/solution-guidance/Configure-SP-Provider-Hosted-Apps-For-Distribution.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Document-library-templates-sample-app-for-SharePoint.md](docs/solution-guidance/Document-library-templates-sample-app-for-SharePoint.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Information-management-sample-app-for-SharePoint.md](docs/solution-guidance/Information-management-sample-app-for-SharePoint.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Localize-UI-elements-sample-app-for-SharePoint.md](docs/solution-guidance/Localize-UI-elements-sample-app-for-SharePoint.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Migrate-user-profile-properties-sample-app-for-SharePoint.md](docs/solution-guidance/Migrate-user-profile-properties-sample-app-for-SharePoint.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Personalize-search-results-sample-app-for-SharePoint.md](docs/solution-guidance/Personalize-search-results-sample-app-for-SharePoint.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Read-or-update-user-profile-properties-sample-app-for-SharePoint.md](docs/solution-guidance/Read-or-update-user-profile-properties-sample-app-for-SharePoint.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Records-management-extensions-sample-app-for-SharePoint.md](docs/solution-guidance/Records-management-extensions-sample-app-for-SharePoint.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Sandbox-Solution-Transformation-Guidance.md](docs/solution-guidance/Sandbox-Solution-Transformation-Guidance.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Synchronize-term-groups-sample-app-for-SharePoint.md](docs/solution-guidance/Synchronize-term-groups-sample-app-for-SharePoint.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Taxonomy-operations-sample-app-for-SharePoint.md](docs/solution-guidance/Taxonomy-operations-sample-app-for-SharePoint.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Transform-farm-solutions-to-the-SharePoint-app-model.md](docs/solution-guidance/Transform-farm-solutions-to-the-SharePoint-app-model.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Upload-large-files-sample-app-for-SharePoint.md](docs/solution-guidance/Upload-large-files-sample-app-for-SharePoint.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/Upload-user-profile-pictures-sample-app-for-SharePoint.md](docs/solution-guidance/Upload-user-profile-pictures-sample-app-for-SharePoint.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/app-only-elevated-privileges-sharepoint-add-in.md](docs/solution-guidance/app-only-elevated-privileges-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/authorize-provider-hosted-add-in-users-at-run-time-by-using-oauth.md](docs/solution-guidance/authorize-provider-hosted-add-in-users-at-run-time-by-using-oauth.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/branding-sharepoint-sites-sharepoint-add-in.md](docs/solution-guidance/branding-sharepoint-sites-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/composite-business-apps-for-sharepoint.md](docs/solution-guidance/composite-business-apps-for-sharepoint.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/create-ux-controls-by-using-sharepoint-provider-hosted-add-ins.md](docs/solution-guidance/create-ux-controls-by-using-sharepoint-provider-hosted-add-ins.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/cross-domain-images-in-sharepoint-provider-hosted-add-ins.md](docs/solution-guidance/cross-domain-images-in-sharepoint-provider-hosted-add-ins.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/custom-actions-sharepoint-add-in.md](docs/solution-guidance/custom-actions-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/custom-field-type-sharepoint-add-in.md](docs/solution-guidance/custom-field-type-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/customize-the-ux-by-using-sharepoint-provider-hosted-add-ins.md](docs/solution-guidance/customize-the-ux-by-using-sharepoint-provider-hosted-add-ins.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/delegate-controls-sharepoint-add-in.md](docs/solution-guidance/delegate-controls-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/deploying-your-sharepoint-add-ins.md](docs/solution-guidance/deploying-your-sharepoint-add-ins.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/document-id-provider-sharepoint-add-in.md](docs/solution-guidance/document-id-provider-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/event-receiver-and-list-event-receiver-sharepoint-add-in.md](docs/solution-guidance/event-receiver-and-list-event-receiver-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/feature-stapling-sharepoint-add-in.md](docs/solution-guidance/feature-stapling-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/improve-performance-in-sharepoint-provider-hosted-add-ins.md](docs/solution-guidance/improve-performance-in-sharepoint-provider-hosted-add-ins.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/information-management-policy-sharepoint-add-in.md](docs/solution-guidance/information-management-policy-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/list-definition-template-sharepoint-add-in.md](docs/solution-guidance/list-definition-template-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/list-instance-sharepoint-add-in.md](docs/solution-guidance/list-instance-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/localization-sharepoint-add-in.md](docs/solution-guidance/localization-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/master-pages-sharepoint-add-in.md](docs/solution-guidance/master-pages-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/mms-manipulation-sharepoint-add-in.md](docs/solution-guidance/mms-manipulation-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/modules-sharepoint-add-in.md](docs/solution-guidance/modules-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/onedrive-for-business-customization-sharepoint-add-in.md](docs/solution-guidance/onedrive-for-business-customization-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/performance-considerations-sharepoint-add-in.md](docs/solution-guidance/performance-considerations-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/remote-timer-jobs-sharepoint-add-in.md](docs/solution-guidance/remote-timer-jobs-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/search-api-usage-sharepoint-add-in.md](docs/solution-guidance/search-api-usage-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/search-configuration-sharepoint-add-in.md](docs/solution-guidance/search-configuration-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/sharepoint-add-in-recipes.md](docs/solution-guidance/sharepoint-add-in-recipes.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/site-columns-and-content-types-sharepoint-add-in.md](docs/solution-guidance/site-columns-and-content-types-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/site-provisioning-sharepoint-add-in.md](docs/solution-guidance/site-provisioning-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/use-asynchronous-operations-in-sharepoint-add-ins.md](docs/solution-guidance/use-asynchronous-operations-in-sharepoint-add-ins.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/user profile manipulation-sharepoint-add-in.md](docs/solution-guidance/user%20profile%20manipulation-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/user-controls-and-web-controls-sharepoint-add-in.md](docs/solution-guidance/user-controls-and-web-controls-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/variations-sharepoint-add-in.md](docs/solution-guidance/variations-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/web-part-sharepoint-add-in.md](docs/solution-guidance/web-part-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/workflows-actions-events-and-forms-sharepoint-add-in.md](docs/solution-guidance/workflows-actions-events-and-forms-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |
| [docs/solution-guidance/yammer-integration-sharepoint-add-in.md](docs/solution-guidance/yammer-integration-sharepoint-add-in.md) | Added shared Online Add-in EOL notice while preserving migration and supported API guidance. |

#### Add-in articles and retirement (14)

| File | Edit |
| --- | --- |
| [docs/sp-add-ins/add-ins-and-azure-acs-retirements-faq.md](docs/sp-add-ins/add-ins-and-azure-acs-retirements-faq.md) | Updated Online Add-in/ACS retirement and supported API/authentication scope; retained article and modern REST guidance. |
| [docs/sp-add-ins/complete-basic-operations-using-sharepoint-rest-endpoints.md](docs/sp-add-ins/complete-basic-operations-using-sharepoint-rest-endpoints.md) | Updated Online Add-in/ACS retirement and supported API/authentication scope; retained article and modern REST guidance. |
| [docs/sp-add-ins/determine-sharepoint-rest-service-endpoint-uris.md](docs/sp-add-ins/determine-sharepoint-rest-service-endpoint-uris.md) | Updated Online Add-in/ACS retirement and supported API/authentication scope; retained article and modern REST guidance. |
| [docs/sp-add-ins/get-to-know-the-sharepoint-rest-service.md](docs/sp-add-ins/get-to-know-the-sharepoint-rest-service.md) | Updated Online Add-in/ACS retirement and supported API/authentication scope; retained article and modern REST guidance. |
| [docs/sp-add-ins/make-batch-requests-with-the-rest-apis.md](docs/sp-add-ins/make-batch-requests-with-the-rest-apis.md) | Updated Online Add-in/ACS retirement and supported API/authentication scope; retained article and modern REST guidance. |
| [docs/sp-add-ins/navigate-the-sharepoint-data-structure-represented-in-the-rest-service.md](docs/sp-add-ins/navigate-the-sharepoint-data-structure-represented-in-the-rest-service.md) | Updated Online Add-in/ACS retirement and supported API/authentication scope; retained article and modern REST guidance. |
| [docs/sp-add-ins/retirement-announcement-for-add-ins.md](docs/sp-add-ins/retirement-announcement-for-add-ins.md) | Updated Online Add-in/ACS retirement and supported API/authentication scope; retained article and modern REST guidance. |
| [docs/sp-add-ins/retirement-announcement-for-azure-acs.md](docs/sp-add-ins/retirement-announcement-for-azure-acs.md) | Updated Online Add-in/ACS retirement and supported API/authentication scope; retained article and modern REST guidance. |
| [docs/sp-add-ins/set-custom-permissions-on-a-list-by-using-the-rest-interface.md](docs/sp-add-ins/set-custom-permissions-on-a-list-by-using-the-rest-interface.md) | Updated Online Add-in/ACS retirement and supported API/authentication scope; retained article and modern REST guidance. |
| [docs/sp-add-ins/synchronize-sharepoint-items-using-the-rest-service.md](docs/sp-add-ins/synchronize-sharepoint-items-using-the-rest-service.md) | Updated Online Add-in/ACS retirement and supported API/authentication scope; retained article and modern REST guidance. |
| [docs/sp-add-ins/upload-a-file-by-using-the-rest-api-and-jquery.md](docs/sp-add-ins/upload-a-file-by-using-the-rest-api-and-jquery.md) | Updated Online Add-in/ACS retirement and supported API/authentication scope; retained article and modern REST guidance. |
| [docs/sp-add-ins/use-odata-query-operations-in-sharepoint-rest-requests.md](docs/sp-add-ins/use-odata-query-operations-in-sharepoint-rest-requests.md) | Updated Online Add-in/ACS retirement and supported API/authentication scope; retained article and modern REST guidance. |
| [docs/sp-add-ins/working-with-folders-and-files-with-rest.md](docs/sp-add-ins/working-with-folders-and-files-with-rest.md) | Updated Online Add-in/ACS retirement and supported API/authentication scope; retained article and modern REST guidance. |
| [docs/sp-add-ins/working-with-lists-and-list-items-with-rest.md](docs/sp-add-ins/working-with-lists-and-list-items-with-rest.md) | Updated Online Add-in/ACS retirement and supported API/authentication scope; retained article and modern REST guidance. |

#### SPFx setup, platform, tutorials and references (97)

| File | Edit |
| --- | --- |
| [docs/spfx/build-for-teams-considerations.md](docs/spfx/build-for-teams-considerations.md) | Added combined-solution packaging limitation and manual Teams package caveat. |
| [docs/spfx/build-for-teams-me-experience.md](docs/spfx/build-for-teams-me-experience.md) | Developer Portal terminology replaces App Studio recommendations. |
| [docs/spfx/build-for-teams-meeting-app.md](docs/spfx/build-for-teams-meeting-app.md) | Historical SDK/context scope, framework-provided SDK rule and obsolete prompt removal. |
| [docs/spfx/compatibility.md](docs/spfx/compatibility.md) | Aligned React install reference to 18.3.1; retained Node/version guidance and unchanged historical/Server support rows. |
| [docs/spfx/debug-in-vscode.md](docs/spfx/debug-in-vscode.md) | Modern built-in browser debugger/page launch reference, Heft command/manifests path and deprecated workbench/old debugger removal. |
| [docs/spfx/debug-modern-pages.md](docs/spfx/debug-modern-pages.md) | Actual-page debugging and current Heft/developer-toolbar guidance. |
| [docs/spfx/debug-toolbar.md](docs/spfx/debug-toolbar.md) | Current page/extension debugging and Online-versus-Copilot Workbench lifecycle distinction. |
| [docs/spfx/deployment-spfx-teams-solutions.md](docs/spfx/deployment-spfx-teams-solutions.md) | Combined Copilot/Teams automatic-sync limitation, manual-package workaround and initial/baseline/runtime distinction. |
| [docs/spfx/dynamic-data.md](docs/spfx/dynamic-data.md) | Scoped legacy React snippets and independent roots without changing dynamic-data implementation. |
| [docs/spfx/enterprise-guidance.md](docs/spfx/enterprise-guidance.md) | Current retirement, Store, templates, deployment and support boundaries. |
| [docs/spfx/extensions/get-started/build-a-hello-world-extension.md](docs/spfx/extensions/get-started/build-a-hello-world-extension.md) | Page debugging and historical screenshot labels. |
| [docs/spfx/extensions/get-started/building-form-customizer.md](docs/spfx/extensions/get-started/building-form-customizer.md) | Historical generator/screenshot labeling. |
| [docs/spfx/extensions/get-started/building-simple-cmdset-with-dialog-api.md](docs/spfx/extensions/get-started/building-simple-cmdset-with-dialog-api.md) | List-view debugging rather than workbench. |
| [docs/spfx/extensions/get-started/building-simple-field-customizer.md](docs/spfx/extensions/get-started/building-simple-field-customizer.md) | List-view debugging and historical screenshot labels. |
| [docs/spfx/extensions/guidance/migrate-from-ecb-to-spfx-extensions.md](docs/spfx/extensions/guidance/migrate-from-ecb-to-spfx-extensions.md) | Removed obsolete generator baseline prompt. |
| [docs/spfx/extensions/guidance/migrate-from-jslink-to-spfx-extensions.md](docs/spfx/extensions/guidance/migrate-from-jslink-to-spfx-extensions.md) | Per-cell React root lifecycle guidance; implementation unchanged. |
| [docs/spfx/extensions/guidance/migrate-from-usercustomactions-to-spfx-extensions.md](docs/spfx/extensions/guidance/migrate-from-usercustomactions-to-spfx-extensions.md) | Historical scope, placeholder lifecycle and versioned dependency warnings. |
| [docs/spfx/extensions/guidance/using-custom-dialogs-with-spfx.md](docs/spfx/extensions/guidance/using-custom-dialogs-with-spfx.md) | React 17 historical scope and dialog reopen/disposal requirements. |
| [docs/spfx/fluent-ui-integration.md](docs/spfx/fluent-ui-integration.md) | React compatibility, template-dependent Fluent UI choices and Copilot iframe/v9 links. |
| [docs/spfx/known-issues-and-common-questions.yml](docs/spfx/known-issues-and-common-questions.yml) | Current Node/setup/debug/Copilot FAQ; historical certificate scope and confirmed SharePoint 2019 support instead of undecided-release wording. |
| [docs/spfx/library-component-tutorial.md](docs/spfx/library-component-tutorial.md) | Replaced local-workbench test instruction with actual SharePoint page/developer-toolbar guidance; implementation/build walkthrough held. |
| [docs/spfx/npm-vulnerabilities.md](docs/spfx/npm-vulnerabilities.md) | Replaced blanket audit-safety advice with advisory/dependency assessment; fixed toolchain link. |
| [docs/spfx/office/overview.md](docs/spfx/office/overview.md) | Distinguished web-part/Teams/Office host adapters from Copilot component hosting and shared-code reuse. |
| [docs/spfx/publish-to-marketplace-after-publishing.md](docs/spfx/publish-to-marketplace-after-publishing.md) | Copilot package updates versus baseline sync, licensing/client/reviewer requirements and combined-package caveat. |
| [docs/spfx/publish-to-marketplace-checklist.md](docs/spfx/publish-to-marketplace-checklist.md) | Copilot GA submission checklist: USL/costs, setup, clients, consent, context and combined-package review. |
| [docs/spfx/publish-to-marketplace-common-validation-errors.md](docs/spfx/publish-to-marketplace-common-validation-errors.md) | Copilot-specific reviewer/setup/license/client/context checks, combined-package caveat and corrected extensionless local links. |
| [docs/spfx/publish-to-marketplace-faq.yml](docs/spfx/publish-to-marketplace-faq.yml) | Copilot Store support/licensing/client/sync FAQ and corrected domain-isolation retirement. |
| [docs/spfx/publish-to-marketplace-overview.md](docs/spfx/publish-to-marketplace-overview.md) | GA Copilot Store eligibility, licensing/client/deployment considerations and certification boundary for custom combined Teams packages. |
| [docs/spfx/react-18-upgrade.md](docs/spfx/react-18-upgrade.md) | GA prerequisite/reference pins, Node.js 24, removed preview/duplicate heading and page-toolbar versus supported Copilot Workbench guidance; migration algorithms unchanged. |
| [docs/spfx/release-1.24.0.md](docs/spfx/release-1.24.0.md) | Linked the three new lifecycle/context/configuration articles from the previously prepared GA release notes. |
| [docs/spfx/roadmap.md](docs/spfx/roadmap.md) | Replaced stale placeholders/dates with shipped 1.24, tentative Dec 2026-Jan 2027 1.25 plans, undated fast follows, authoritative September source and community/sample links. |
| [docs/spfx/set-up-your-developer-tenant.md](docs/spfx/set-up-your-developer-tenant.md) | Real tenant/page setup, eligibility versus licensing and removed current local-workbench promise/example. |
| [docs/spfx/set-up-your-development-environment-gulp-toolchain.md](docs/spfx/set-up-your-development-environment-gulp-toolchain.md) | Added explicit SharePoint Online page/developer-toolbar replacement notice while retaining historical Gulp/Server configuration. |
| [docs/spfx/set-up-your-development-environment.md](docs/spfx/set-up-your-development-environment.md) | Stable 1.24 generator pins, Node.js 24 baseline, page initialPage/tenant-domain references and supported Copilot Workbench distinction. |
| [docs/spfx/sharepoint-framework-overview.md](docs/spfx/sharepoint-framework-overview.md) | Added lifecycle/sample links and current Copilot reference discovery. |
| [docs/spfx/sharepoint-framework-why.md](docs/spfx/sharepoint-framework-why.md) | Shared Add-in EOL notice and historical framing of older development models. |
| [docs/spfx/spfx-sharepoint-online.md](docs/spfx/spfx-sharepoint-online.md) | Replaced blanket all-versions/betas-continue-working promise with lifecycle/host/dependency scope. |
| [docs/spfx/supported-extensibility-platforms-overview.md](docs/spfx/supported-extensibility-platforms-overview.md) | Added lifecycle/sample links and current platform guidance without resolving the unconfirmed SE maximum. |
| [docs/spfx/team-based-development-on-sharepoint-framework.md](docs/spfx/team-based-development-on-sharepoint-framework.md) | Current Heft/legacy Gulp framing, npm/lockfile workflow, ESLint/tests, historical generator scope and production-script/packaged-versus-external-asset deployment guidance. |
| [docs/spfx/toolchain/configure-sass.md](docs/spfx/toolchain/configure-sass.md) | Corrected Sass terminology/config scope and removed genuinely broken schema URL from legacy example. |
| [docs/spfx/toolchain/customize-heft-toolchain-eject-webpack.md](docs/spfx/toolchain/customize-heft-toolchain-eject-webpack.md) | Qualified version-specific configuration/ejection ownership and validation requirements. |
| [docs/spfx/toolchain/implement-ci-cd-with-azure-devops.md](docs/spfx/toolchain/implement-ci-cd-with-azure-devops.md) | Preserved Gulp scope, corrected runtime/preset claims and certificate-auth prose; historical script unchanged. |
| [docs/spfx/toolchain/implement-ci-cd-with-azure-pipelines.md](docs/spfx/toolchain/implement-ci-cd-with-azure-pipelines.md) | Historical YAML warning; current runtime/test-report guidance and own-app certificate authentication references; script unchanged. |
| [docs/spfx/toolchain/migrate-gulptoolchain-hefttoolchain-manual.md](docs/spfx/toolchain/migrate-gulptoolchain-hefttoolchain-manual.md) | Explicit 1.22.1 scope with separate React 18 migration; executable migration instructions unchanged. |
| [docs/spfx/toolchain/migrate-gulptoolchain-hefttoolchain.md](docs/spfx/toolchain/migrate-gulptoolchain-hefttoolchain.md) | Preserved 1.22.2 target and corrected upgrade-report versus automatic-migration claims. |
| [docs/spfx/toolchain/optimize-builds-for-production.md](docs/spfx/toolchain/optimize-builds-for-production.md) | Aligned production build/reference guidance with version-specific toolchain configuration. |
| [docs/spfx/toolchain/sharepoint-framework-cli.md](docs/spfx/toolchain/sharepoint-framework-cli.md) | Distinguished CLI preview/runtime requirements from stable SPFx 1.24 setup; no automatic CLI graduation. |
| [docs/spfx/toolchain/sharepoint-framework-toolchain-rushstack-heft.md](docs/spfx/toolchain/sharepoint-framework-toolchain-rushstack-heft.md) | Corrected config ownership/current generated scripts, actual RC0 tooling and historical scope. |
| [docs/spfx/toolchain/sharepoint-framework-toolchain.md](docs/spfx/toolchain/sharepoint-framework-toolchain.md) | Version-scoped Heft versus Gulp reference and current setup links. |
| [docs/spfx/toolchain/update-latest-packages.md](docs/spfx/toolchain/update-latest-packages.md) | Controlled dependency updates, save-exact references and npm ci reproducible restore rather than routine lockfile deletion. |
| [docs/spfx/tools-and-libraries.md](docs/spfx/tools-and-libraries.md) | Current template/toolchain/library guidance with React compatibility and version-scoped dependencies. |
| [docs/spfx/use-aad-tutorial.md](docs/spfx/use-aad-tutorial.md) | Historical React/version scope, canonical companion link, current permission/authentication guidance, page debugging and removed principal-substitution workaround. |
| [docs/spfx/use-aadhttpclient-enterpriseapi-multitenant.md](docs/spfx/use-aadhttpclient-enterpriseapi-multitenant.md) | Historical portal/auth scope, current consent links/prerequisites and prompt corrections. |
| [docs/spfx/use-aadhttpclient-enterpriseapi.md](docs/spfx/use-aadhttpclient-enterpriseapi.md) | Historical portal/Azure scope, current auth/prerequisites/prompts and domain-isolation retirement. |
| [docs/spfx/use-aadhttpclient.md](docs/spfx/use-aadhttpclient.md) | Qualified authentication/default grants, current administrator guidance and removed obsolete AzureRM/Azure CLI identity commands. |
| [docs/spfx/use-aadtokenprovider.md](docs/spfx/use-aadtokenprovider.md) | Scoped historical browser popup/iframe flow; removed universal hidden-iframe promise and linked public clients instead of internal-provider adoption. |
| [docs/spfx/use-developer-dashboard.md](docs/spfx/use-developer-dashboard.md) | Removed current local/hosted-workbench availability recommendation; linked page developer toolbar and preserved Copilot Workbench. |
| [docs/spfx/use-microsoft-graph-toolkit.md](docs/spfx/use-microsoft-graph-toolkit.md) | Replaced retired MGT adoption path with lifecycle/migration guidance and supported Graph clients; retained URL. |
| [docs/spfx/use-msgraph.md](docs/spfx/use-msgraph.md) | Qualified permissions/host claims and current Graph access/administration references, preserving supported Server scope. |
| [docs/spfx/viva/features/card-designer/card-designer-api-support.md](docs/spfx/viva/features/card-designer/card-designer-api-support.md) | Removed stale rollout/universal tenant defaults; current authoring/PowerShell/API-access consent guidance and obsolete Entra editing screenshots removed. Query code held. |
| [docs/spfx/viva/features/focus-feature/FocusFeatureTutorial.md](docs/spfx/viva/features/focus-feature/FocusFeatureTutorial.md) | Actual-page/developer-toolbar debugging guidance; application code unchanged. |
| [docs/spfx/viva/get-started/actions/geolocation/GeolocationPropertyPane.md](docs/spfx/viva/get-started/actions/geolocation/GeolocationPropertyPane.md) | Actual-page/developer-toolbar debugging guidance; application code unchanged. |
| [docs/spfx/viva/get-started/actions/geolocation/GeolocationTutorial.md](docs/spfx/viva/get-started/actions/geolocation/GeolocationTutorial.md) | Actual-page/developer-toolbar debugging guidance; application code unchanged. |
| [docs/spfx/viva/get-started/actions/media-upload/MediaUploadPropertyPane.md](docs/spfx/viva/get-started/actions/media-upload/MediaUploadPropertyPane.md) | Actual-page/developer-toolbar debugging guidance; application code unchanged. |
| [docs/spfx/viva/get-started/actions/media-upload/MediaUploadTutorial.md](docs/spfx/viva/get-started/actions/media-upload/MediaUploadTutorial.md) | Actual-page/developer-toolbar debugging guidance; application code unchanged. |
| [docs/spfx/viva/get-started/adaptive-card-extensions-and-teams.md](docs/spfx/viva/get-started/adaptive-card-extensions-and-teams.md) | Historical workbench dependency-workaround scope. |
| [docs/spfx/viva/get-started/advanced-card-view-functionality.md](docs/spfx/viva/get-started/advanced-card-view-functionality.md) | Historical API/beta scope, removed stale preview warning and page debugging. |
| [docs/spfx/viva/get-started/advanced-quick-view-functionality.md](docs/spfx/viva/get-started/advanced-quick-view-functionality.md) | Version-aware local-server/page debugging. |
| [docs/spfx/viva/get-started/build-data-visualization-adaptive-card-extension.md](docs/spfx/viva/get-started/build-data-visualization-adaptive-card-extension.md) | Page debugging and historical screenshot scope. |
| [docs/spfx/viva/get-started/build-first-sharepoint-adaptive-card-extension.md](docs/spfx/viva/get-started/build-first-sharepoint-adaptive-card-extension.md) | Preserved 1.18 target, distinguished toolchains and page/read-mode testing. |
| [docs/spfx/viva/get-started/build-html-quickview-adaptive-card-extension.md](docs/spfx/viva/get-started/build-html-quickview-adaptive-card-extension.md) | Preserved 1.20 scope, BaseWebQuickView terminology, page debugging and React lifecycle link. |
| [docs/spfx/viva/get-started/build-people-search-adaptive-card-extension.md](docs/spfx/viva/get-started/build-people-search-adaptive-card-extension.md) | Page debugging and historical screenshot scope. |
| [docs/spfx/web-parts/basics/use-web-parts-full-width-column.md](docs/spfx/web-parts/basics/use-web-parts-full-width-column.md) | Communication-site page debugging guidance. |
| [docs/spfx/web-parts/get-started/add-jqueryui-accordion-to-web-part.md](docs/spfx/web-parts/get-started/add-jqueryui-accordion-to-web-part.md) | Page debugging instead of Online workbench. |
| [docs/spfx/web-parts/get-started/build-a-hello-world-web-part.md](docs/spfx/web-parts/get-started/build-a-hello-world-web-part.md) | 1.24 prerequisites, page workflow, npm-audit advice and historical screenshot labels. |
| [docs/spfx/web-parts/get-started/build-web-part-microsoft-graph-toolkit.md](docs/spfx/web-parts/get-started/build-web-part-microsoft-graph-toolkit.md) | Retained URL as retirement/migration guidance; removed retired MGT adoption implementation instead of modernizing it. |
| [docs/spfx/web-parts/get-started/connect-to-sharepoint.md](docs/spfx/web-parts/get-started/connect-to-sharepoint.md) | Page context/debugging guidance with explicitly historical local-workbench behavior preserved. |
| [docs/spfx/web-parts/get-started/provision-sp-assets-from-package.md](docs/spfx/web-parts/get-started/provision-sp-assets-from-package.md) | Clarified deployment is required to provision assets. |
| [docs/spfx/web-parts/get-started/serve-your-web-part-in-a-sharepoint-page.md](docs/spfx/web-parts/get-started/serve-your-web-part-in-a-sharepoint-page.md) | Separated deployed production assets from localhost debugging; removed contradictory localhost manifest fragment/start requirement. |
| [docs/spfx/web-parts/get-started/use-fabric-react-components.md](docs/spfx/web-parts/get-started/use-fabric-react-components.md) | Historical Fabric/React scope, current Fluent UI links and page debugging. |
| [docs/spfx/web-parts/guidance/build-client-side-web-parts-with-angular-1-x.md](docs/spfx/web-parts/guidance/build-client-side-web-parts-with-angular-1-x.md) | Historical AngularJS/workbench notice and current debug alternative. |
| [docs/spfx/web-parts/guidance/build-custom-property-pane-controls.md](docs/spfx/web-parts/guidance/build-custom-property-pane-controls.md) | Independent control-root ownership/disposal requirements; implementation unchanged. |
| [docs/spfx/web-parts/guidance/connect-to-sharepoint-using-jsom.md](docs/spfx/web-parts/guidance/connect-to-sharepoint-using-jsom.md) | Historical React scope and real SharePoint-page requirement. |
| [docs/spfx/web-parts/guidance/getting-started-with-top-actions.md](docs/spfx/web-parts/guidance/getting-started-with-top-actions.md) | Page/developer-toolbar debug guidance. |
| [docs/spfx/web-parts/guidance/localize-web-parts.md](docs/spfx/web-parts/guidance/localize-web-parts.md) | React scope, multilingual-page validation and historical locale-command qualification. |
| [docs/spfx/web-parts/guidance/migrate-angular-1-x-applications-to-sharepoint-framework.md](docs/spfx/web-parts/guidance/migrate-angular-1-x-applications-to-sharepoint-framework.md) | Page debugging and historical styling context. |
| [docs/spfx/web-parts/guidance/migrate-jquery-datatables-script-to-spfx.md](docs/spfx/web-parts/guidance/migrate-jquery-datatables-script-to-spfx.md) | Page debugging instead of workbench. |
| [docs/spfx/web-parts/guidance/migrate-jquery-fullcalendar-script-to-spfx.md](docs/spfx/web-parts/guidance/migrate-jquery-fullcalendar-script-to-spfx.md) | Page debugging instead of workbench. |
| [docs/spfx/web-parts/guidance/simplify-adding-web-parts-with-preconfigured-entries.md](docs/spfx/web-parts/guidance/simplify-adding-web-parts-with-preconfigured-entries.md) | Historical React scope and page-reload guidance. |
| [docs/spfx/web-parts/guidance/supporting-section-backgrounds.md](docs/spfx/web-parts/guidance/supporting-section-backgrounds.md) | Theme-update React root ownership guidance. |
| [docs/spfx/web-parts/guidance/use-cascading-dropdowns-in-web-part-properties.md](docs/spfx/web-parts/guidance/use-cascading-dropdowns-in-web-part-properties.md) | Web-part/property-control root ownership guidance. |
| [docs/spfx/web-parts/guidance/use-sp-pnp-js-with-spfx-web-parts.md](docs/spfx/web-parts/guidance/use-sp-pnp-js-with-spfx-web-parts.md) | PnPjs v3 historical scope/current links, actual-page initialPage and obsolete prompt removal. |
| [docs/spfx/web-parts/guidance/validate-web-part-property-values.md](docs/spfx/web-parts/guidance/validate-web-part-property-values.md) | Actual-page debugging instead of workbench. |
| [docs/spfx/web-parts/isolated-web-parts-retirement.md](docs/spfx/web-parts/isolated-web-parts-retirement.md) | Past-tense retirement, preserved migration route and explicit historical script scope. |
| [docs/spfx/web-parts/isolated-web-parts.md](docs/spfx/web-parts/isolated-web-parts.md) | Domain-isolation retired/historical status, corrected invalid date, and migration links. |
| [docs/spfx/web-parts/overview-client-side-web-parts.md](docs/spfx/web-parts/overview-client-side-web-parts.md) | Actual-page/developer-toolbar debugging entry point. |
| [docs/spfx/yeoman-generator-for-spfx-intro.md](docs/spfx/yeoman-generator-for-spfx-intro.md) | GA generator pin and current Copilot/template/toolchain references; historical generated output not represented as newly tested. |

#### Copilot UX components (10)

| File | Edit |
| --- | --- |
| [docs/spfx/copilot/access-data.md](docs/spfx/copilot/access-data.md) | Corrected companion sample; clarified authorization, consent, backend cost, visible context and consequential-action confirmation. Existing implementation unchanged. |
| [docs/spfx/copilot/component-and-agent-configuration.md](docs/spfx/copilot/component-and-agent-configuration.md) **New** | New configuration reference: file/schema responsibilities, tools/grouping, adding components, default modes and schema versus app versions. |
| [docs/spfx/copilot/development-and-deployment.md](docs/spfx/copilot/development-and-deployment.md) **New** | New lifecycle article: initial versus repeat sync, dynamic discovery decision table, versions/identity, tenant deployment, rollback/retirement and combined-package workaround. |
| [docs/spfx/copilot/displayMode.md](docs/spfx/copilot/displayMode.md) | Documented defaultDisplayMode from RC0 declarations, one-time startup request and host authority; removed unsupported mode restrictions/future-design wording. |
| [docs/spfx/copilot/get-started/build-your-first-copilot-app.md](docs/spfx/copilot/get-started/build-your-first-copilot-app.md) | Initial sync versus later discovery, accurate catalog-label wording and new reference/gallery links. Existing generated-file/code walkthrough remains held. |
| [docs/spfx/copilot/get-started/connect-to-sharepoint-data.md](docs/spfx/copilot/get-started/connect-to-sharepoint-data.md) | Combined baseline update versus parameter-only no-sync case; removed blanket sign-out step and fixed companion links/placeholder. Implementation unchanged. |
| [docs/spfx/copilot/overview-copilot-apps.md](docs/spfx/copilot/overview-copilot-apps.md) | Linked new references; corrected lifecycle/versioning, visible context, default modes, host reuse, tenant boundaries and sample discovery. |
| [docs/spfx/copilot/provide-context-to-copilot.md](docs/spfx/copilot/provide-context-to-copilot.md) **New** | New visible-context article: factory versus bridge operations, latest-state context, follow-ups, 10 KB blocking limit, explicit reduction/retry and testing checklist; no invented counter. |
| [docs/spfx/copilot/theme-and-design.md](docs/spfx/copilot/theme-and-design.md) | Updated display-mode link labels and added visible-context guidance. |
| [docs/spfx/copilot/troubleshooting-copilot-ux-components.md](docs/spfx/copilot/troubleshooting-copilot-ux-components.md) | Reconciled sync/version/schema guidance; removed universal cache/sign-out/identity-reset fixes and added schema/10 KB symptoms. Owner validation of retained workarounds remains open. |

#### Shared includes (6)

| File | Edit |
| --- | --- |
| [includes/snippets/sp-add-in-deprecation.md](includes/snippets/sp-add-in-deprecation.md) | Canonical April 2, 2026 Online Add-in/ACS EOL notice; explicitly excludes Server catalog solutions and supported REST/CSOM/JSOM/SPFx. |
| [includes/snippets/sp-add-in-spfx.md](includes/snippets/sp-add-in-spfx.md) | Current Online Add-in retirement and SPFx migration framing, preserving Server scope. |
| [includes/snippets/spfx-gulp-heft-migration-commands.md](includes/snippets/spfx-gulp-heft-migration-commands.md) | Fixed release/toolchain routes in reusable include and rejected command-name-only migration assumptions. |
| [includes/snippets/spfx-gulp-heft-migration-wip.md](includes/snippets/spfx-gulp-heft-migration-wip.md) | Fixed release/toolchain routes; explicit historical/unvalidated scope instead of suggesting simple command substitution suffices. |
| [includes/snippets/spfx-gulp-toolchain-legacy.md](includes/snippets/spfx-gulp-toolchain-legacy.md) | Legacy Gulp versus current Heft scope without unsupported blanket Gulp/Server retirement. |
| [includes/snippets/spfx-online-workbench-deprecation.md](includes/snippets/spfx-online-workbench-deprecation.md) | Online workbench deprecation/December 1 retirement and page/developer-toolbar alternative; Copilot Workbench remains fully supported. |

### Shared-include impact on otherwise unchanged pages

These are **not additional edited files**. Their rendered guidance changes because they already include one of the shared notices above. Retirement is scoped by the notice: supported API/Server functionality is not retired simply because a page consumes it.

| Existing page | Changed shared include |
| --- | --- |
| [docs/sp-add-ins/access-sharepoint-data-from-add-ins-using-the-cross-domain-library.md](docs/sp-add-ins/access-sharepoint-data-from-add-ins-using-the-cross-domain-library.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/add-a-custom-content-type-to-a-sharepoint-hosted-sharepoint-add-in.md](docs/sp-add-ins/add-a-custom-content-type-to-a-sharepoint-hosted-sharepoint-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/add-a-custom-page-and-style-to-a-sharepoint-hosted-sharepoint-add-in.md](docs/sp-add-ins/add-a-custom-page-and-style-to-a-sharepoint-hosted-sharepoint-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/add-a-web-part-to-a-page-in-a-sharepoint-hosted-sharepoint-add-in.md](docs/sp-add-ins/add-a-web-part-to-a-page-in-a-sharepoint-hosted-sharepoint-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/add-a-workflow-to-a-sharepoint-hosted-sharepoint-add-in.md](docs/sp-add-ins/add-a-workflow-to-a-sharepoint-hosted-sharepoint-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/add-custom-client-side-rendering-to-a-sharepoint-hosted-sharepoint-add-in.md](docs/sp-add-ins/add-custom-client-side-rendering-to-a-sharepoint-hosted-sharepoint-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/add-custom-columns-to-a-sharepoint-hosted-sharepoint-add-in.md](docs/sp-add-ins/add-custom-columns-to-a-sharepoint-hosted-sharepoint-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/add-first-run-logic-to-the-provider-hosted-add-in.md](docs/sp-add-ins/add-first-run-logic-to-the-provider-hosted-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/add-in-authorization-policy-types-in-sharepoint.md](docs/sp-add-ins/add-in-authorization-policy-types-in-sharepoint.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/add-in-permissions-in-sharepoint.md](docs/sp-add-ins/add-in-permissions-in-sharepoint.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/add-sharepoint-write-operations-to-the-provider-hosted-add-in.md](docs/sp-add-ins/add-sharepoint-write-operations-to-the-provider-hosted-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/authorization-and-authentication-of-sharepoint-add-ins.md](docs/sp-add-ins/authorization-and-authentication-of-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/authorization-code-oauth-flow-for-sharepoint-add-ins.md](docs/sp-add-ins/authorization-code-oauth-flow-for-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/choose-patterns-for-developing-and-hosting-your-sharepoint-add-in.md](docs/sp-add-ins/choose-patterns-for-developing-and-hosting-your-sharepoint-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/complete-basic-operations-using-javascript-library-code-in-sharepoint.md](docs/sp-add-ins/complete-basic-operations-using-javascript-library-code-in-sharepoint.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/complete-basic-operations-using-sharepoint-client-library-code.md](docs/sp-add-ins/complete-basic-operations-using-sharepoint-client-library-code.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/context-token-oauth-flow-for-sharepoint-add-ins.md](docs/sp-add-ins/context-token-oauth-flow-for-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/convert-an-autohosted-sharepoint-add-in-to-a-provider-hosted-add-in.md](docs/sp-add-ins/convert-an-autohosted-sharepoint-add-in-to-a-provider-hosted-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/create-a-custom-proxy-page-for-the-cross-domain-library-in-sharepoint.md](docs/sp-add-ins/create-a-custom-proxy-page-for-the-cross-domain-library-in-sharepoint.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/create-a-custom-ribbon-button-in-the-host-web-of-a-sharepoint-add-in.md](docs/sp-add-ins/create-a-custom-ribbon-button-in-the-host-web-of-a-sharepoint-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/create-a-developer-site-on-an-existing-office-365-subscription.md](docs/sp-add-ins/create-a-developer-site-on-an-existing-office-365-subscription.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/create-a-handler-for-the-update-event-in-sharepoint-add-ins.md](docs/sp-add-ins/create-a-handler-for-the-update-event-in-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/create-a-provider-hosted-add-in-that-includes-a-custom-sharepoint-list-and-conte.md](docs/sp-add-ins/create-a-provider-hosted-add-in-that-includes-a-custom-sharepoint-list-and-conte.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/create-a-remote-event-receiver-in-sharepoint-add-ins.md](docs/sp-add-ins/create-a-remote-event-receiver-in-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/create-add-in-parts-to-install-with-your-sharepoint-add-in.md](docs/sp-add-ins/create-add-in-parts-to-install-with-your-sharepoint-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/create-an-add-in-event-receiver-in-sharepoint-add-ins.md](docs/sp-add-ins/create-an-add-in-event-receiver-in-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/create-and-use-access-tokens-in-provider-hosted-high-trust-sharepoint-add-ins.md](docs/sp-add-ins/create-and-use-access-tokens-in-provider-hosted-high-trust-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/create-custom-actions-to-deploy-with-sharepoint-add-ins.md](docs/sp-add-ins/create-custom-actions-to-deploy-with-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/create-high-trust-sharepoint-add-ins.md](docs/sp-add-ins/create-high-trust-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/create-provider-hosted-sharepoint-add-ins-to-access-sap-data-by-using-the-sap-ga.md](docs/sp-add-ins/create-provider-hosted-sharepoint-add-ins-to-access-sap-data-by-using-the-sap-ga.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/create-sharepoint-add-ins-in-visual-studio.md](docs/sp-add-ins/create-sharepoint-add-ins-in-visual-studio.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/create-ux-components-in-sharepoint.md](docs/sp-add-ins/create-ux-components-in-sharepoint.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/creating-sharepoint-add-ins-that-use-high-trust-authorization.md](docs/sp-add-ins/creating-sharepoint-add-ins-that-use-high-trust-authorization.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/creating-sharepoint-add-ins-that-use-low-trust-authorization.md](docs/sp-add-ins/creating-sharepoint-add-ins-that-use-low-trust-authorization.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/creating-sharepoint-add-ins-that-use-the-cross-domain-library.md](docs/sp-add-ins/creating-sharepoint-add-ins-that-use-the-cross-domain-library.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/customize-a-list-view-in-sharepoint-add-ins-using-client-side-rendering.md](docs/sp-add-ins/customize-a-list-view-in-sharepoint-add-ins-using-client-side-rendering.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/debug-and-troubleshoot-a-remote-event-receiver-in-a-sharepoint-add-in.md](docs/sp-add-ins/debug-and-troubleshoot-a-remote-event-receiver-in-a-sharepoint-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/deploy-and-install-a-sharepoint-hosted-sharepoint-add-in.md](docs/sp-add-ins/deploy-and-install-a-sharepoint-hosted-sharepoint-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/deploying-and-installing-sharepoint-add-ins-methods-and-options.md](docs/sp-add-ins/deploying-and-installing-sharepoint-add-ins-methods-and-options.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/design-sharepoint-add-ins.md](docs/sp-add-ins/design-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/develop-sharepoint-add-ins.md](docs/sp-add-ins/develop-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/explore-the-app-manifest-structure-and-the-package-of-a-sharepoint-add-in.md](docs/sp-add-ins/explore-the-app-manifest-structure-and-the-package-of-a-sharepoint-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/get-a-quick-overview-of-the-sharepoint-object-model.md](docs/sp-add-ins/get-a-quick-overview-of-the-sharepoint-object-model.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/get-started-creating-provider-hosted-sharepoint-add-ins.md](docs/sp-add-ins/get-started-creating-provider-hosted-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/get-started-creating-sharepoint-hosted-sharepoint-add-ins.md](docs/sp-add-ins/get-started-creating-sharepoint-hosted-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/get-user-identity-and-properties-in-sharepoint.md](docs/sp-add-ins/get-user-identity-and-properties-in-sharepoint.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/give-your-provider-hosted-add-in-the-sharepoint-look-and-feel.md](docs/sp-add-ins/give-your-provider-hosted-add-in-the-sharepoint-look-and-feel.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/handle-add-in-events-in-the-provider-hosted-add-in.md](docs/sp-add-ins/handle-add-in-events-in-the-provider-hosted-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/handle-events-in-sharepoint-add-ins.md](docs/sp-add-ins/handle-events-in-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/handle-list-item-events-in-the-provider-hosted-add-in.md](docs/sp-add-ins/handle-list-item-events-in-the-provider-hosted-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/handle-security-tokens-in-provider-hosted-low-trust-sharepoint-add-ins.md](docs/sp-add-ins/handle-security-tokens-in-provider-hosted-low-trust-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/high-trust-configuration-scripts-for-sharepoint.md](docs/sp-add-ins/high-trust-configuration-scripts-for-sharepoint.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/highlight-content-and-enhance-the-functionality-of-sharepoint-hosted-sharepoint.md](docs/sp-add-ins/highlight-content-and-enhance-the-functionality-of-sharepoint-hosted-sharepoint.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/host-webs-add-in-webs-and-sharepoint-components-in-sharepoint.md](docs/sp-add-ins/host-webs-add-in-webs-and-sharepoint-components-in-sharepoint.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/important-aspects-of-the-sharepoint-add-in-architecture-and-development-landscap.md](docs/sp-add-ins/important-aspects-of-the-sharepoint-add-in-architecture-and-development-landscap.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/include-a-custom-button-in-the-provider-hosted-add-in.md](docs/sp-add-ins/include-a-custom-button-in-the-provider-hosted-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/include-a-web-part-in-a-webpage-on-the-add-in-web.md](docs/sp-add-ins/include-a-web-part-in-a-webpage-on-the-add-in-web.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/include-an-add-in-part-in-the-provider-hosted-add-in.md](docs/sp-add-ins/include-an-add-in-part-in-the-provider-hosted-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/localize-sharepoint-add-ins.md](docs/sp-add-ins/localize-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/office-web-widgetsexperimental-overview.md](docs/sp-add-ins/office-web-widgetsexperimental-overview.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/package-and-publish-high-trust-sharepoint-add-ins.md](docs/sp-add-ins/package-and-publish-high-trust-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/programmatically-deploy-a-custom-button-in-the-provider-hosted-add-in.md](docs/sp-add-ins/programmatically-deploy-a-custom-button-in-the-provider-hosted-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/publish-sharepoint-add-ins-by-using-visual-studio.md](docs/sp-add-ins/publish-sharepoint-add-ins-by-using-visual-studio.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/publish-sharepoint-add-ins.md](docs/sp-add-ins/publish-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/query-a-remote-service-using-the-web-proxy-in-sharepoint.md](docs/sp-add-ins/query-a-remote-service-using-the-web-proxy-in-sharepoint.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/register-sharepoint-add-ins.md](docs/sp-add-ins/register-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/replace-an-expiring-client-secret-in-a-sharepoint-add-in.md](docs/sp-add-ins/replace-an-expiring-client-secret-in-a-sharepoint-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/retrieve-tenant-app-catalog-url-rest.md](docs/sp-add-ins/retrieve-tenant-app-catalog-url-rest.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/secure-data-access-and-client-object-models-for-sharepoint-add-ins.md](docs/sp-add-ins/secure-data-access-and-client-object-models-for-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/set-up-a-development-environment-for-sharepoint-add-ins-on-office-365.md](docs/sp-add-ins/set-up-a-development-environment-for-sharepoint-add-ins-on-office-365.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md](docs/sp-add-ins/set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/sharepoint-add-ins-update-process.md](docs/sp-add-ins/sharepoint-add-ins-update-process.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/sharepoint-add-ins-ux-design-guidelines.md](docs/sp-add-ins/sharepoint-add-ins-ux-design-guidelines.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/sharepoint-add-ins.md](docs/sp-add-ins/sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/sharepoint-net-server-csom-jsom-and-rest-api-index.md](docs/sp-add-ins/sharepoint-net-server-csom-jsom-and-rest-api-index.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/tenancies-and-deployment-scopes-for-sharepoint-add-ins.md](docs/sp-add-ins/tenancies-and-deployment-scopes-for-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/three-authorization-systems-for-sharepoint-add-ins.md](docs/sp-add-ins/three-authorization-systems-for-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/three-ways-to-think-about-design-options-for-sharepoint-add-ins.md](docs/sp-add-ins/three-ways-to-think-about-design-options-for-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/tools-and-environments-for-developing-sharepoint-add-ins.md](docs/sp-add-ins/tools-and-environments-for-developing-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/troubleshooting-high-trust-sharepoint-add-ins.md](docs/sp-add-ins/troubleshooting-high-trust-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/update-add-in-web-components-in-sharepoint.md](docs/sp-add-ins/update-add-in-web-components-in-sharepoint.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/update-host-web-components-in-sharepoint.md](docs/sp-add-ins/update-host-web-components-in-sharepoint.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/update-remote-components-in-sharepoint-add-ins.md](docs/sp-add-ins/update-remote-components-in-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/update-sharepoint-add-ins.md](docs/sp-add-ins/update-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/url-strings-and-tokens-in-sharepoint-add-ins.md](docs/sp-add-ins/url-strings-and-tokens-in-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/use-a-sharepoint-website-s-style-sheet-in-sharepoint-add-ins.md](docs/sp-add-ins/use-a-sharepoint-website-s-style-sheet-in-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/use-an-office-365-sharepoint-site-to-authorize-provider-hosted-add-ins-on-an-on.md](docs/sp-add-ins/use-an-office-365-sharepoint-site-to-authorize-provider-hosted-add-ins-on-an-on.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/use-the-client-chrome-control-in-sharepoint-add-ins.md](docs/sp-add-ins/use-the-client-chrome-control-in-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/use-the-client-side-people-picker-control-in-sharepoint-hosted-sharepoint-add-in.md](docs/sp-add-ins/use-the-client-side-people-picker-control-in-sharepoint-hosted-sharepoint-add-in.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/use-the-experimental-desktop-list-view-widget-in-sharepoint-add-ins.md](docs/sp-add-ins/use-the-experimental-desktop-list-view-widget-in-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/use-the-experimental-people-picker-widget-in-sharepoint-add-ins.md](docs/sp-add-ins/use-the-experimental-people-picker-widget-in-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/use-the-sharepoint-javascript-apis-to-work-with-sharepoint-data.md](docs/sp-add-ins/use-the-sharepoint-javascript-apis-to-work-with-sharepoint-data.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/using-csom-for-dotnet-standard.md](docs/sp-add-ins/using-csom-for-dotnet-standard.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/ux-design-for-sharepoint-add-ins.md](docs/sp-add-ins/ux-design-for-sharepoint-add-ins.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/what-s-new-in-office-developer-tools-for-visual-studio.md](docs/sp-add-ins/what-s-new-in-office-developer-tools-for-visual-studio.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/work-with-external-data-in-sharepoint.md](docs/sp-add-ins/work-with-external-data-in-sharepoint.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/work-with-host-web-data-from-javascript-in-the-add-in-web.md](docs/sp-add-ins/work-with-host-web-data-from-javascript-in-the-add-in-web.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins/work-with-the-cross-domain-library-across-different-internet-explorer-security-z.md](docs/sp-add-ins/work-with-the-cross-domain-library-across-different-internet-explorer-security-z.md) | `sp-add-in-deprecation.md` |
| [docs/sp-add-ins-modernize/from-app-parts-to-modern-web-parts.md](docs/sp-add-ins-modernize/from-app-parts-to-modern-web-parts.md) | `spfx-gulp-heft-migration-wip.md` |
| [docs/sp-add-ins-modernize/from-notifications-to-application-customizers.md](docs/sp-add-ins-modernize/from-notifications-to-application-customizers.md) | `spfx-gulp-heft-migration-wip.md` |
| [docs/sp-add-ins-modernize/modern-provisioning.md](docs/sp-add-ins-modernize/modern-provisioning.md) | `spfx-gulp-heft-migration-wip.md` |
| [docs/sp-add-ins-modernize/sp-add-in-modernize.md](docs/sp-add-ins-modernize/sp-add-in-modernize.md) | `sp-add-in-deprecation.md` |
| [docs/spfx/toolchain/extending-webpack-in-build-pipeline.md](docs/spfx/toolchain/extending-webpack-in-build-pipeline.md) | `spfx-gulp-toolchain-legacy.md` |
| [docs/spfx/toolchain/integrate-gulp-tasks-in-build-pipeline.md](docs/spfx/toolchain/integrate-gulp-tasks-in-build-pipeline.md) | `spfx-gulp-toolchain-legacy.md` |
<!-- GENERATED-REVIEW-END -->
