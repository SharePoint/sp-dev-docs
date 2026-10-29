---
title: SharePoint Framework v1.24 release notes
description: Release notes for SharePoint Framework v1.24, generally available October 28, 2026, including Copilot UX components, React 18, and Node.js 24 and 26 support.
ms.date: 10/28/2026
ms.localizationpriority: high
---
# SharePoint Framework v1.24 release notes

SharePoint Framework (SPFx) 1.24 is generally available on **October 28, 2026**. This release makes **Copilot UX components** generally available, updates the React runtime to **React 18.3.1**, and adds support for **Node.js 24 and 26**, alongside Node.js 22.

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install SPFx 1.24

Install the SPFx 1.24 generator:

```console
npm install @microsoft/generator-sharepoint@1.24.0 --global
```

Alternatively, install the latest public release using the npm `@latest` tag:

```console
npm install @microsoft/generator-sharepoint@latest --global
```

At SPFx 1.24 GA, `@latest` selects `1.24.0`. The tag advances with subsequent public releases; keep the `1.24.0` pin when reproducing this release's setup.

For existing solutions, follow [Update SharePoint Framework packages](toolchain/update-latest-packages.md). Keep the SPFx packages in a project on the same release version. Projects created with a 1.24 beta or release candidate must update their SPFx package references to `1.24.0` before production deployment.

## New features and capabilities in 1.24

### React 18 is here

New React-based SPFx solutions use React **18.3.1**. When upgrading an existing React solution, review its dependencies, React root ownership, and cleanup behavior rather than only changing package versions.

Validate the upgraded solution in each host it supports. Report issues through the [SPFx issue list](https://aka.ms/spfx/issues).

### Node.js 24 and 26 support

SPFx 1.24 supports Node.js **22, 24, and 26**. Node.js 22 requires version **22.14.0 or later within the 22.x release line**. Node.js 24 and 26 support starts at 24.0.0 and 26.0.0, respectively, within their release lines.

Node.js 24 is the recommended LTS baseline for a new development environment. At the time of this release, Node.js 26 is a Current release, not an LTS release. See the [compatibility reference](compatibility.md) for the supported platform and dependency versions.

### Copilot UX components generally available

This capability was introduced as **SharePoint Copilot Apps** in the July public preview. Its official name is **Copilot UX components**. The GA technical contract is unchanged from **1.24.0-rc.0**.

Copilot UX components bring rich, interactive experiences directly into the Microsoft 365 Copilot canvas. Instead of returning text alone, your agent can render charts, maps, KPIs, forms, approvals, and more right where the conversation happens, so users move from intent to action without leaving Copilot.

Copilot UX components are powered by the **SharePoint Framework (SPFx)** and implement the **MCP Apps** model. Components are hosted automatically in your Microsoft 365 tenant and you do not need to worry about the hosting or routing typically associated with the MCP Apps model. Developers can focus on building the UX experience and defining the metadata that determines when components are activated, without adding hosting or operational complexity.

#### Licensing, costs, and availability

Copilot UX components require a **USL (user-specific license)**: the **Microsoft 365 Copilot add-on license** on top of the user's normal **E3, E5, or E7** license. The base license alone isn't sufficient. The same requirement applies to development and testing, including Copilot Workbench.

Copilot UX components **don't use a consumption-based plan and have no consumption-based charges**. APIs or services called by a component's implementation can have their own charges. Those charges are separate from the Copilot UX component capability and don't replace the required user license.

Supported clients are **Microsoft 365 Copilot in browser and desktop clients**, and **Copilot in Microsoft Teams in browser and desktop clients**. Copilot UX components aren't supported on iOS or Android at GA, including Teams mobile.

Solutions containing Copilot UX components are supported in the **SharePoint Store starting with SPFx 1.24 GA**. A solution packages a declarative agent and its components together in an SPFx solution package (`.sppkg`). You can also deploy solutions privately through the tenant's SharePoint App Catalog.

![Copilot UX component sample scenarios shown in different display modes](../images/124-release/copilot-apps-teaser-slide.png)

#### Component and agent improvements

**Predictable default display mode:** Components can now rely on the default display mode declared in their manifest behaving consistently in the Copilot canvas: a freshly invoked component opens in its declared default mode, closing it returns the conversation to the inline view without the component reopening itself, and an explicit request from the user can reopen it in fullscreen. Previously, display-mode transitions could cause a component to snap back to its default sizing unexpectedly.

**Automatic Teams app manifest version updates:** The build toolchain updates the Teams app manifest version when it detects relevant content changes, unless the author has already updated it. This version is distinct from the declarative-agent schema version and the SPFx solution version.

**Declarative agent manifest validation at build time:** The build now validates your declarative agent manifest against the agent schema, so definitions that do not comply are caught while you build rather than failing at runtime in the Copilot canvas. Instead of deploying a solution and discovering that a component never loads or a tool never appears, you get a clear error up front, in the same inner-loop step where you can fix it. This is a meaningful reliability improvement for anyone iterating on Copilot UX components, and it removes one of the more frustrating classes of "it built fine but does not work in Copilot" problems.

**Newly scaffolded Copilot UX components target declarative agent manifest v1.8:** When you scaffold a new Copilot UX component, the declarative agent manifest is now created at v1.8, up from v1.7. You start on the current schema version rather than having to hand-upgrade a freshly created project, and your agent picks up the capabilities and behaviors defined in the newer manifest version out of the box. Existing solutions are not changed automatically — update the manifest version in your own project when you are ready.

#### Deployment and dynamic tool discovery

The initial **Sync to Teams** operation, labeled **Add to Teams** in the SharePoint App Catalog, deploys the baseline agent definition. After that initial deployment, [dynamic tool discovery](/microsoft-365/copilot/extensibility/plugin-dynamic-tool-discovery) detects changes to tool parameters and additions or removals of components/functions at runtime. Rebuild, package, and redeploy the solution for those changes, but don't re-sync when the baseline agent configuration hasn't changed.

Changes to the baseline agent configuration, such as its image, title, or starter prompts, require another sync. Test runtime-discovered changes in a new conversation; don't assume an existing conversation refreshes immediately.

#### Provide context about the visible UX

Use `createCopilotTextContent` to provide context about what the component currently displays. This helps Copilot provide natural-language information alongside the interactive UX and use that information in the conversation.

The GA limit for text context supplied using `createCopilotTextContent` is **10 KB**. Text context larger than this limit **blocks sending the message to Copilot**; it isn't silently truncated. Keep the context focused on the current view and include only information the user is authorized to access.

#### Getting started

1. Install **SPFx 1.24.0** from npm.
2. Scaffold a new Copilot UX component and pick a template (Minimal, No framework, or React).
3. Run and test it locally in the **Copilot Workbench**.
4. Deploy to your tenant and surface it in Copilot.

#### Copilot UX component sample gallery

The [Copilot UX component sample gallery](https://aka.ms/spfx/copilot/samples) is the central location for samples provided by Microsoft and the community. Use the gallery to find examples that you can deploy and test, learn implementation patterns, and explore what you can build with Copilot UX components.

#### Known limitations and considerations

- **Combined Copilot/Teams solutions:** Combining Copilot UX components and SPFx Teams functionality in the same solution causes a mismatch in automatic **Sync to Teams** at GA. A manually created Teams package for the solution works as a workaround. See [Deploy SPFx solutions to Microsoft Teams](deployment-spfx-teams-solutions.md) for developer-provided Teams package guidance. A fix for automatic sync is planned as a fast follow after GA; no delivery date is committed.
- **Mobile clients:** iOS and Android clients aren't supported at GA, including Teams mobile. Mobile support is planned as a fast follow after GA; no delivery date is committed.
- **Additional Copilot surfaces:** Standard-chat Copilot plug-in packaging, Cowork, and other additional surfaces aren't GA capabilities of this release.

Please share any questions or findings on Copilot UX components through the [sp-dev-docs repository issue list](https://aka.ms/spfx/issues). We want to hear from you.

#### Copilot UX component resources

- [Copilot UX components overview](./copilot/overview-copilot-apps.md)
- [Develop and deploy Copilot UX components](./copilot/development-and-deployment.md)
- [Provide Copilot with context from your component](./copilot/provide-context-to-copilot.md)
- [Configure Copilot UX components and agents](./copilot/component-and-agent-configuration.md)
- [Build your first Copilot UX component](./copilot/get-started/build-your-first-copilot-app.md) – documentation
- [Theme and design for the Copilot canvas](./copilot/theme-and-design.md)
- [Creating your first SharePoint Copilot App - Tutorial](https://www.youtube.com/watch?v=1TaK6osdvc0) - video
- [Going beyond text in Microsoft 365 Copilot: Introducing SharePoint Copilot Apps](https://devblogs.microsoft.com/microsoft365dev/going-beyond-text-in-microsoft-365-copilot-introducing-sharepoint-copilot-apps/) – original preview announcement
- [Introduction to SharePoint Copilot Apps](https://www.youtube.com/watch?v=mpSVo47LDHE) – video
- [Introduction to SharePoint Copilot Apps developer experience](https://www.youtube.com/watch?v=ofgERb5Zlbo) – video
- [Build UX components for your Copilot agent – My Day scenario – SharePoint Copilot Apps](https://www.youtube.com/watch?v=VCkoAucaodw) – video
- [GitHub repository for samples](https://github.com/pnp/spfx-copilot-apps) - contributions are welcome


### New documents for Copilot UX components

- [Connect your Copilot UX component to SharePoint data](./copilot/get-started/connect-to-sharepoint-data.md)
- [Access data from a Copilot UX component](./copilot/access-data.md)
- [Troubleshoot Copilot UX components](./copilot/troubleshooting-copilot-ux-components.md)

### Addressing npm audit issues

We continue to address the `npm audit` findings reported when installing the SharePoint Framework Yeoman generator or scaffolding solutions. Dependency vulnerabilities evolve over time, and we review them with every release.

Assess findings against the affected dependency, its use in your project, and the available remediation. Don't assume every finding is limited to build tooling or is harmless to your solution. Report SPFx dependency issues through the [SPFx issue list](https://aka.ms/spfx/issues).

## Prerelease history

The following dates describe earlier builds, not the GA release date:

- **beta.1 released:** July 8, 2026
- **beta.3 released:** August 27, 2026
- **beta.4 released:** September 17, 2026
- **beta.5 released:** September 23, 2026
- **rc.0 released:** October 2, 2026

Beta.5 rolled back the tool-resolution changes introduced in beta.4 to the beta.3 approach. RC0 reintroduced dynamic tool discovery. GA retains the RC0 technical contract.

## Fixed Issues

Here's a list of specific issues fixed around SharePoint Framework which are specifically fixed with this release:

- [#11030](https://github.com/SharePoint/sp-dev-docs/issues/11030) - [SPFx 1.23] Sass cannot resolve bare package imports inside dependencies — no loadPaths / importIncludePaths, no workaround (regression from 1.22)

## Deprecations

No new deprecations are introduced in SPFx 1.24. Existing deprecations and retirement notices continue to apply.

## Feedback and issues

We're interested in your feedback about the release. If you find any issues, share them using the [sp-dev-docs repository issue list](https://aka.ms/spfx/issues). You can also use [GitHub Discussions](https://github.com/SharePoint/sp-dev-docs/discussions) to start a conversation with the engineering team about this release. Thank you for your input in advance.

Happy coding! Sharing is caring! 🧡