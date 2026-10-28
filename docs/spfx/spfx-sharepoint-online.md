---
title: SharePoint Framework support on SharePoint Online
description: Learn about SharePoint Framework support in SharePoint Online and the version, host, and lifecycle requirements for your solution.
ms.date: 10/28/2026
ms.localizationpriority: high
---

# SharePoint Framework support on SharePoint Online

SharePoint Online always has the broadest and most up-to-date support for the SharePoint Framework (SPFx). The SharePoint Framework is also the recommended customization and extensibility development model for SharePoint Online.

SharePoint Online provides the SPFx runtime for supported solutions. Use the [compatibility reference](compatibility.md) and release notes for the version you target, and check feature-specific retirement and preview notices. An older package version or a successfully loaded component doesn't override a retired feature, host limitation, or unsupported dependency.

Each SPFx component's manifest tells the SPFx runtime on SharePoint pages what package dependencies, including the specific versions, each component depends on. The SPFx runtime uses this information to ensure the correct SPFx libraries are loaded on the page prior to loading initializing your SPFx components.

Unless otherwise stated, all capabilities of SPFx are supported in SharePoint Online.

SPFx 1.24 adds generally available [Copilot UX components](copilot/overview-copilot-apps.md). Their Copilot license, client, and agent-deployment requirements are separate from rendering a web part on a SharePoint page.
