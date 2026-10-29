---
title: SharePoint development overview
description: Choose supported SharePoint and Microsoft 365 development options, including SPFx Copilot UX components, web parts, extensions, APIs, and automation.
ms.date: 10/28/2026
ms.assetid: f86e2695-4d7a-4fc5-bc23-689de96c4b06
ms.localizationpriority: high
---

# SharePoint development overview

Build SharePoint and Microsoft 365 experiences with SharePoint Framework (SPFx), declarative customization, supported APIs, and Power Platform. Choose the development model for the experience and host you need.

## Introducing the SharePoint development platform
<a name="bk_introduction"> </a>

SPFx provides client-side components, tenant deployment, and integration with Microsoft 365 hosts. With SPFx 1.24, **Copilot UX components** add interactive UI to Microsoft 365 Copilot conversations. Web parts, extensions, and Adaptive Card Extensions address different SharePoint, Teams, and Viva Connections scenarios.

Use the [supported-platform overview](../spfx/supported-extensibility-platforms-overview.md) and [compatibility reference](../spfx/compatibility.md) before selecting a framework version. A component's host, permissions, licensing, and supported clients are part of its requirements, not interchangeable defaults.

## What kinds of development can you do with SharePoint?
<a name="bk_whatkinds"> </a>

| Goal | Start here |
| --- | --- |
| Render interactive experiences in Microsoft 365 Copilot | [Copilot UX components](../spfx/copilot/overview-copilot-apps.md) |
| Add client-side web parts to SharePoint pages | [SPFx web parts](../spfx/web-parts/overview-client-side-web-parts.md) |
| Extend page, list, or form experiences | [SPFx extensions](../spfx/extensions/overview-extensions.md) |
| Build Viva Connections cards | [Viva Connections and SPFx](../spfx/viva/overview-viva-connections.md) |
| Reuse web-part functionality in Microsoft Teams | [SPFx integration with Teams](../spfx/integrate-with-teams-introduction.md) |
| Format list columns and views without a custom component | [Column formatting](../declarative-customization/column-formatting.md) and [view formatting](../declarative-customization/view-formatting.md) |
| Apply repeatable site configuration | [Site templates and site scripts](../declarative-customization/site-design-overview.md) |
| Build forms and automate processes | [Power Apps and Power Automate](../business-apps/introduction-to-sharepoint-business-process-integration.md) |
| Access sites and content through APIs | [SharePoint in Microsoft Graph](/graph/sharepoint-concept-overview) and [SPFx data access](../spfx/use-msgraph.md) |

## Set up your development environment and start developing
<a name="bk_getstarted"> </a>

For SPFx 1.24, follow the [development environment setup](../spfx/set-up-your-development-environment.md) with **Node.js 24 LTS**. Use the version-specific prerequisites for older projects and SharePoint Server.

- [Build your first Copilot UX component](../spfx/copilot/get-started/build-your-first-copilot-app.md).
- [Build your first web part](../spfx/web-parts/get-started/build-a-hello-world-web-part.md).
- [Build your first extension](../spfx/extensions/get-started/build-a-hello-world-extension.md).
- Debug web parts on actual SharePoint pages with the [developer toolbar](../spfx/debug-toolbar.md). Use the fully supported **Copilot Workbench** for Copilot UX components.

Copilot UX components require the Microsoft 365 Copilot add-on USL on top of E3, E5, or E7. Review [availability and client limitations](../spfx/copilot/overview-copilot-apps.md#availability), [deployment and dynamic discovery](../spfx/copilot/development-and-deployment.md), and [visible context](../spfx/copilot/provide-context-to-copilot.md).

## Publish and distribute your solution

Copilot UX components are supported in the **SharePoint Store starting with SPFx 1.24 GA**. Use the [Marketplace guidance](../spfx/publish-to-marketplace-overview.md) and [submission checklist](../spfx/publish-to-marketplace-checklist.md). Store publication doesn't bypass tenant deployment, license requirements, API consent, or supported-client restrictions.

## SharePoint Server development

Server solutions have version-specific APIs, deployment models, and tooling. Follow the [Server support guidance](../spfx/sharepoint-2019-and-subscription-edition-support.md) and, for server-side customizations, [farm solution guidance](build-farm-solutions-in-sharepoint.md). Don't treat farm deployment or old mobile-platform walkthroughs as current SharePoint Online setup.

## See also

- [SharePoint Framework roadmap](../spfx/roadmap.md)
- [SPFx web part samples](https://pnp.github.io/sp-dev-fx-webparts/)
- [Copilot UX component samples](https://aka.ms/spfx/copilot/samples)
- [Microsoft 365 & Power Platform community calls](https://aka.ms/community/calls)
- [Support and feedback](../support-feedback.md)
