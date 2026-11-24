---
title: SharePoint Framework roadmap
description: Released SharePoint Framework capabilities and planned investments across SharePoint and Microsoft 365.
ms.date: 11/24/2026
ms.localizationpriority: high
ai-usage: ai-assisted
---

# SharePoint Framework roadmap

SharePoint Framework (SPFx) supports client-side extensibility across SharePoint and Microsoft 365. This roadmap distinguishes released capabilities from planned investments. For exact version requirements and changes, use the [compatibility reference](compatibility.md) and the release notes.

For monthly roadmap updates from the Microsoft engineering team, visit the [Microsoft 365 Developer Blog](https://devblogs.microsoft.com/microsoft365dev/).

This page incorporates the [November 2026 roadmap update](https://devblogs.microsoft.com/microsoft365dev/copilot-ux-components-now-available-in-cowork-with-plugins-spfx-roadmap-update-for-november-2026/), published on November 24, 2026. It includes the SPFx 1.24.2 maintenance release, available Copilot Cowork support through plugins, the mobile rollout, and updated plans for SPFx 1.25 and 1.26.

[!INCLUDE [sp-add-in-deprecation](../../includes/snippets/sp-add-in-spfx.md)]

## Released: SPFx 1.24.2 - November 20, 2026

SPFx 1.24.2 is the latest public release. It fixes two React 18 dependency issues: an npm installation conflict caused by the image helper, and TypeScript build failures with pnpm caused by mismatched React dependencies in SPFx runtime packages.

Use the 1.24.2 generator for new projects. Existing projects require dependency updates; installing the generator alone doesn't upgrade them. See the [SPFx 1.24.2 release notes](release-1.24.2.md) for installation and upgrade guidance. The SPFx 1.24 platform requirements and capabilities remain unchanged.

## Released: SPFx 1.24.1 - November 2, 2026

SPFx 1.24.1 corrects the default project scaffolding to reference stable SPFx packages instead of `1.24.0-rc.0` packages and addresses some reported npm dependency vulnerabilities. Dependency maintenance continues.

See the [SPFx 1.24.1 release notes](release-1.24.1.md) for details of this maintenance update.

## Released: SPFx 1.24 - October 28, 2026

- **Copilot UX components generally available.** Package interactive UI with a declarative agent using the SPFx deployment model. See [availability, licensing, and supported clients](copilot/overview-copilot-apps.md#availability).
- **React 18.3.1** for React-based SPFx solutions.
- **Node.js 24 and 26 support**, alongside Node.js 22. Use Node.js 26 LTS for a new SPFx 1.24 development environment.
- **SharePoint Store distribution** for solutions containing Copilot UX components.
- Component display-mode improvements, build-time declarative-agent validation, and dynamic tool discovery.
- Addressing npm audit findings.

See the [SPFx 1.24 release notes](release-1.24.0.md) for the full change list, installation guidance, and known limitations.

## Available: Copilot UX components in Cowork with plugins

Copilot UX components are now supported in **Copilot Cowork and standard Copilot chat through plugins**. Package your components together with skills and other assets as a plugin. Once the plugin is deployed and activated in the context, Copilot can detect the user's intent and surface the appropriate component without the user opening a specific declarative agent.

The components remain built with SPFx and hosted in your Microsoft 365 tenant. Plugin packaging is currently manual; you don't need to wait for SPFx 1.25 to use it. See [Manually package a Copilot UX component as a plug-in](copilot/package-copilot-ux-component-as-plugin.md).

Users need a Microsoft 365 Copilot license. Admins can centrally deploy, make available, or block plugins for users and groups through **Agents > Tools** in the Microsoft 365 admin center. See [Manage plugins for Copilot Cowork](https://learn.microsoft.com/en-us/copilot/cowork/cowork-manage-plugins).

## Rolling out: Copilot UX components on mobile

Support for **iOS and Android, including Teams mobile**, is gradually rolling out to production. The implementation changes are complete, but availability isn't yet worldwide. Check availability in your target clients and tenant before relying on mobile support.

## Planned: SPFx 1.25 - December 2026 / January 2027

The current target window is **December 2026 through January 2027**. Planned investments include:

- Exploring build settings to package Copilot UX components and skills as plugins, replacing today's manual packaging.
- **Preview of a new single-page application (SPA) model for SharePoint.** An SPFx solution controls the site's full welcome page, rather than a section of a SharePoint page, while the site retains its libraries, lists, permissions, and other features.
- General availability of the open-source [SPFx CLI](https://github.com/SharePoint/spfx) and updated solution templates, with a planned transition from the Yeoman generator.
- Dependency maintenance and quality improvements, including addressing new npm audit findings.
- Other potential investments based on customer and partner feedback.

> [!IMPORTANT]
> These are plans, not released capabilities or delivery commitments. Dates and scope can change. Continue using the documented SPFx 1.24.x scaffolding path; the planned CLI transition doesn't make the CLI generally available in 1.24.

## Planned: SPFx 1.26

Planned investments include:

- Continued development of Copilot UX component experiences with new features.
- **General availability of the new SPA model for SharePoint**, following the planned SPFx 1.25 preview.
- Dependency maintenance and quality improvements, including addressing new npm audit findings.
- Other potential investments based on customer and partner feedback.

No target release date has been announced for SPFx 1.26. These plans aren't delivery commitments; dates and scope can change.

## Planned follow-ups for Copilot UX components

- Automatic Sync to Teams support for solutions that combine Copilot UX components and SPFx Teams functionality. At 1.24 GA, use a manually created Teams package for this combination.
- Additional Copilot hosting surfaces, building on the available Cowork support through plugins. Support in one client or application doesn't establish support in other applications.

The automatic-sync fix remains planned as a fast follow after GA, with **no committed delivery date**. It isn't guaranteed for the 1.25 release. Until the fix is available, use a manually created Teams package for combined solutions. See [Deploy SPFx solutions to Microsoft Teams](deployment-spfx-teams-solutions.md) for packaging guidance.

## Thinking for future releases

The following ideas are potential directions under consideration for future releases. They represent early thinking, not committed roadmap items, and have no target release or delivery date.

- **Navigation customizers** for extending navigation nodes or experiences.
- **SPFx-powered views in lists** for tailored list experiences.

## Earlier releases

- [SPFx 1.23.2 - June 30, 2026](release-1.23.2.md): quality and platform improvements.
- [SPFx 1.23.0 - May 13, 2026](release-1.23.0.md): list view command set improvements and the SPFx CLI preview.

Older release notes remain available in the table of contents.

## Feedback and community

Use the feedback tools in the [SPFx developer toolbar](debug-toolbar.md), the [SPFx issue list](https://aka.ms/spfx/issues), and the [Microsoft 365 & Power Platform community calls](https://aka.ms/community/calls) to share requirements and report issues. SharePoint Online workbench debugging is deprecated; debug web parts on SharePoint pages with the developer toolbar. **Copilot Workbench remains fully supported** for Copilot UX components.

The [SPFx developer survey](https://aka.ms/spfx/feedback) is open until **December 2, 2026**. Share how SPFx is working for you and what you need next to help shape future investments.

Explore [SPFx web part samples](https://pnp.github.io/sp-dev-fx-webparts/) and [Copilot UX component samples](https://aka.ms/spfx/copilot/samples) for implementation patterns and community contributions.
