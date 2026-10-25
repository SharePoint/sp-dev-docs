---
title: Migrate a SharePoint web part from Microsoft Graph Toolkit
description: Migration guidance for SharePoint web parts that used the retired Microsoft Graph Toolkit.
ms.date: 10/25/2026
ms.localizationpriority: high
---

# Migrate a SharePoint web part from Microsoft Graph Toolkit

> [!WARNING]
> Microsoft Graph Toolkit was deprecated on September 1, 2025 and retired on August 28, 2026. It is no longer maintained or supported. Do not use the former toolkit installation tutorial to build new web parts. See the [Microsoft Graph Toolkit retirement announcement](https://devblogs.microsoft.com/microsoft365dev/microsoft-graph-toolkit-retirement/).

This page replaces the former Microsoft Graph Toolkit getting-started tutorial. Existing links to the tutorial remain valid so that developers maintaining toolkit-based web parts can find migration guidance.

## Build new web parts with Microsoft Graph

Use SharePoint Framework's [MSGraphClientV3](../../use-msgraph.md) to authenticate and call Microsoft Graph, and render the results with your own UI. Follow [Use Microsoft Graph in your solution](using-microsoft-graph-apis.md) for the supported tutorial.

## Migrate a web part built with the former tutorial

The former tutorial used the `@microsoft/mgt-spfx` package, the `SharePointProvider`, and toolkit elements such as `<mgt-person>`. Replace these dependencies rather than deploying another copy of the retired toolkit:

1. Replace `SharePointProvider` initialization and toolkit data access with MSGraphClientV3. It is available in SPFx 1.15.0 and later and uses the existing SharePoint Framework authentication context.
1. Replace `<mgt-person>` or its React wrapper with UI that renders the required user details returned by Microsoft Graph. For the signed-in user, see [Get user](/graph/api/user-get).
1. If you added an Agenda component, replace it with your own calendar UI and Microsoft Graph calendar requests. See [List calendarView](/graph/api/user-list-calendarview) for events in a time range, including recurring event occurrences.
1. Request only the permissions needed by your replacement API calls in `config/package-solution.json`, and have an administrator approve them through [SharePoint API access](/sharepoint/api-access).
1. Remove unused toolkit code and dependencies, build and deploy the web part, and test it on a SharePoint page. Include loading, error, and accessibility checks.

For the complete migration checklist, including safe removal of the shared toolkit library package, see [Migrate SharePoint Framework solutions from Microsoft Graph Toolkit](../../use-microsoft-graph-toolkit.md).
