---
title: SharePoint Framework roadmap
description: Released SharePoint Framework capabilities and planned investments across SharePoint and Microsoft 365.
ms.date: 10/28/2026
ms.localizationpriority: high
---

# SharePoint Framework roadmap

SharePoint Framework (SPFx) supports client-side extensibility across SharePoint and Microsoft 365. This roadmap distinguishes released capabilities from planned investments. For exact version requirements and changes, use the [compatibility reference](compatibility.md) and the release notes.

For monthly roadmap updates from the Microsoft engineering team, visit the [Microsoft 365 Developer Blog](https://devblogs.microsoft.com/microsoft365dev/).

This page incorporates the [September 2026 roadmap update](https://devblogs.microsoft.com/microsoft365dev/sharepoint-framework-spfx-roadmap-update-september-2026/) and the October 28 SPFx 1.24 GA release. The September post describes the preview state at publication; the current release notes and availability guidance supersede its preview licensing and release-status statements.

[!INCLUDE [sp-add-in-deprecation](../../includes/snippets/sp-add-in-spfx.md)]

## Released: SPFx 1.24 - October 28, 2026

- **Copilot UX components generally available.** Package interactive UI with a declarative agent using the SPFx deployment model. See [availability, licensing, and supported clients](copilot/overview-copilot-apps.md#availability).
- **React 18.3.1** for React-based SPFx solutions.
- **Node.js 24 and 26 support**, alongside Node.js 22. Use Node.js 24 LTS for a new SPFx 1.24 development environment.
- **SharePoint Store distribution** for solutions containing Copilot UX components.
- Component display-mode improvements, build-time declarative-agent validation, and dynamic tool discovery.

See the [SPFx 1.24 release notes](release-1.24.0.md) for the full change list, installation guidance, and known limitations.

## Planned: SPFx 1.25 - December 2026 / January 2027

The current target window is **December 2026 through January 2027**. Planned investments include:

- Further development of the Copilot UX components model.
- General availability of the open-source SPFx CLI and updated solution templates, with a planned transition from the Yeoman generator.
- Navigation customizers for extending navigation nodes or experiences.
- Dependency maintenance and quality improvements informed by customer and partner feedback.

> [!IMPORTANT]
> These are plans, not released capabilities or delivery commitments. Dates and scope can change. Continue using the documented SPFx 1.24 scaffolding path; the planned CLI transition doesn't make the CLI generally available in 1.24.

## Planned follow-ups for Copilot UX components

- Automatic Sync to Teams support for solutions that combine Copilot UX components and SPFx Teams functionality. At 1.24 GA, use a manually created Teams package for this combination.
- Support for iOS and Android clients. Mobile clients, including Teams mobile, aren't supported at 1.24 GA.
- Additional Copilot hosting surfaces. Support in a desktop or browser client doesn't establish support in other applications.

The automatic-sync fix and mobile support are planned as fast follows after GA, with **no committed delivery date**. These aren't guarantees for the 1.25 release. Review [GA limitations](copilot/overview-copilot-apps.md#ga-limitations) before choosing a deployment or client target.

## Earlier releases

- [SPFx 1.23.2 - June 30, 2026](release-1.23.2.md): quality and platform improvements.
- [SPFx 1.23.0 - May 13, 2026](release-1.23.0.md): list view command set improvements and the SPFx CLI preview.

Older release notes remain available in the table of contents.

## Feedback and community

Use the feedback tools in the [SPFx developer toolbar](debug-toolbar.md), the [SPFx issue list](https://aka.ms/spfx/issues), and the [Microsoft 365 & Power Platform community calls](https://aka.ms/community/calls) to share requirements and report issues. SharePoint Online workbench debugging is deprecated; debug web parts on SharePoint pages with the developer toolbar. **Copilot Workbench remains fully supported** for Copilot UX components.

Explore [SPFx web part samples](https://pnp.github.io/sp-dev-fx-webparts/) and [Copilot UX component samples](https://aka.ms/spfx/copilot/samples) for implementation patterns and community contributions.
