---
title: Overview of Viva Connections Extensibility
description: Build engaging experiences for Microsoft Viva Connections with the SharePoint Framework.
ms.date: 09/08/2021
ms.prod: sharepoint
localization_priority: Priority
---
# Overview of Viva Connections Extensibility

Developers can extend [Microsoft Viva Connections](https://www.microsoft.com/microsoft-viva) for building engaging experiences with the widely adopted SharePoint Framework (SPFx). Viva Connections is your gateway to a modern employee experience where you can build and integrate apps that shape culture and foster connections to help employees thrive. With SPFx, you have multiple ways to extend – using the same out-of-the-box or custom SPFx web parts, SPFx extensions (e.g. header, footer), and specific components for optimized mobile experiences.

> [!TIP]
> To learn more about Microsoft Viva Connections, see [Microsoft 365: Developer Blog - Announcing upcoming Microsoft Viva Connections public developer preview](https://developer.microsoft.com/microsoft-365/blogs/announcing-upcoming-microsoft-viva-connections-public-developer-preview/).

## Extensibility opportunities

Viva Connections is available as both a desktop via the installable Microsoft Teams client as well the mobile app. Both of these experiences, desktop & mobile, leverage the SPFx for all customizations and extensibility opportunities.

### Viva Connections desktop experience

The Viva Connections desktop experience is implemented using SharePoint modern pages in SharePoint Online. Developers use the SPFx to customize modern pages in SharePoint using client-side web parts and extensions.

To learn more about customizing modern pages in SharePoint with SPFx, see [Overview of SPFx client-side web parts](../web-parts/overview-client-side-web-parts.md) & [Overview of SPFx Extensions](../extensions/overview-extensions.md).

### Viva Connections dashboard & mobile experience

The Viva Connections dashboard & mobile experience can be extended and customized using Adaptive Card Extensions (ACEs). Developers must use the SPFx create custom ACEs enabling customized experiences in Viva Connections dashboards and the Viva Connections mobile app.

## Prerequisites

The SPFx v1.13 introduced support for building solutions to customize and extend Microsoft Viva Connections. To learn more about SPFx v1.13, including prerequisites & how to install it, see: [SharePoint Framework v1.13 release notes](../release-1.13.md).

[!INCLUDE [spfx-release-beta](../../../includes/snippets/spfx-release-beta.md)]

## Start building for Microsoft Viva Connections

Once you've completed the prerequisites, start creating your first Adaptive Card Extension (ACE) in the following tutorials:

- [Build your first SharePoint Adaptive Card Extension](get-started/build-first-sharepoint-adaptive-card-extension.md)
- [Advanced Card View Functionality](get-started/advanced-card-view-functionality.md)
- [Advanced Quick View Functionality](get-started/advanced-quick-view-functionality.md)
- [Adaptive Card Extensions and Teams Apps](get-started/adaptive-card-extensions-and-teams.md)
