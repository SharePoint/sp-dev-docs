---
title: Migrate SharePoint Framework solutions from Microsoft Graph Toolkit
description: Replace the retired Microsoft Graph Toolkit in SharePoint Framework solutions with MSGraphClientV3 and your own user interface.
ms.date: 10/25/2026
ms.localizationpriority: high
---

# Migrate SharePoint Framework solutions from Microsoft Graph Toolkit

> [!WARNING]
> Microsoft Graph Toolkit was deprecated on September 1, 2025 and retired on August 28, 2026. It is no longer maintained or supported. Do not adopt or install it for new SharePoint Framework solutions. See the [Microsoft Graph Toolkit retirement announcement](https://devblogs.microsoft.com/microsoft365dev/microsoft-graph-toolkit-retirement/).

Microsoft Graph Toolkit provided reusable components and authentication providers for Microsoft Graph. This article is retained to help maintainers migrate existing SharePoint Framework (SPFx) solutions. The retirement applies to the toolkit, not to Microsoft Graph or SPFx.

## Use MSGraphClientV3 instead

For Microsoft Graph access in SPFx, use [MSGraphClientV3](./use-msgraph.md). It handles authentication using the SharePoint Framework context. Your solution makes the Microsoft Graph requests, handles responses and errors, and renders the user interface.

MSGraphClientV3 is available in SPFx 1.15.0 and later. If your solution uses an older SPFx version, upgrade it to a supported version before migrating. Start with the [Microsoft Graph API tutorial](./web-parts/get-started/using-microsoft-graph-apis.md) for an end-to-end example.

## Migrate an existing solution

1. Inventory toolkit dependencies, including `@microsoft/mgt-spfx`, `@microsoft/mgt-react`, other `@microsoft/mgt-*` packages, provider initialization, and `<mgt-*>` elements.
1. Identify the Microsoft Graph endpoints and least-privileged permissions needed for each feature. Replace toolkit provider and data-access calls with MSGraphClientV3.
1. Replace toolkit components with your own UI, using components appropriate for your project's supported React version where needed. There is no direct replacement for every toolkit component. Implement loading, empty, error, and accessibility states as well as the data display.
1. Review `webApiPermissionRequests` in `config/package-solution.json` and have an administrator approve the required permissions through [SharePoint API access](/sharepoint/api-access). For configuration details, see [Request permissions to a Microsoft Entra ID application](./use-aadhttpclient.md#request-permissions-to-an-entra-id-application).
1. Remove unused toolkit imports, provider initialization, and package dependencies after replacing their functionality. Update the project's lockfile using its package manager.
1. Build, deploy, and test the migrated solution on a SharePoint page. Verify permissions, API responses, user interface behavior, and accessibility.
1. Remove the shared `mgt-spfx.sppkg` library from the tenant app catalog only after confirming that no deployed solutions still depend on it. Review unused permissions separately before revoking them, because other SPFx solutions might use the same grants.

## See also

- [Use MSGraphClientV3 to connect to Microsoft Graph](./use-msgraph.md)
- [Use Microsoft Graph in your solution](./web-parts/get-started/using-microsoft-graph-apis.md)
- [Migrate a SharePoint web part from Microsoft Graph Toolkit](./web-parts/get-started/build-web-part-microsoft-graph-toolkit.md)
- [Microsoft Graph SDKs overview](/graph/sdks/sdks-overview)
