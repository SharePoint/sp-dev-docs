---
title: What's new in SharePoint Embedded?
description: Updates about Microsoft SharePoint Embedded.
ms.date: 06/23/2025
ms.localizationpriority: medium
---

# What's new in SharePoint Embedded

## June 2025

- The `CopilotEmbeddedChatHosts` container type setting is now required to use [SharePoint Embedded agent](./development/declarative-agent/spe-da-adv.md#csp-policies). It must be set by the application owner via [`Set-SPOContainerTypeConfiguration`](/powershell/module/sharepoint-online/set-spocontainertypeconfiguration) and can optionally be overridden by consuming tenant administrators via [`Set-SPOApplication`](/powershell/module/SharePoint-online/set-spoapplication).

## May 2025

- The limit of container types that a partner tenant can create has been increased to 25 by default. See [Limits and Calling Patterns](./development/limits-calling.md#size-limits).
- SharePoint Embedded agent switched to a consumption-based model for all users regardless of whether they have a Copilot license or not. See [SharePoint Embedded agent](./development/declarative-agent/spe-da2.md).
- The guidance on how to grant admin consent to a SharePoint Embedded application has been updated to use URL-based admin consent. See [Authentication and authorization](./development/auth.md#whats-next).
- Documented an exceptional access pattern for operations that may require a user license. See [Authentication and authorization](./development/auth.md#operations-that-require-a-user-license).
