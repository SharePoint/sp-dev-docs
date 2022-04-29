---
title: SharePoint Framework v1.6 release notes
description: Release notes for the SharePoint Framework v1.6 release
ms.date: 09/08/2021
ms.service: sharepoint
ms.subservice: sharepoint-framework
ms.localizationpriority: high
---
# SharePoint Framework v1.6 release notes

This release contains two main features:

- The final release of the **WebAPI feature** first previewed in v1.4.1
- Support for **extensions to be configured tenant wide** without a need for activating or configuring every site.

**Released:** September 5, 2018

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Upgrading projects from v1.5.1 to v1.6

1. In the project's **package.json** file, identify all SPFx v1.5.1 packages. For each SPFx package:
    1. Uninstall the existing v1.5.1 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.5.1
        ```

    1. Install the refreshed v1.6 package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.6.0 --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Web API (general availability)

For the **WebAPI** feature, there are a few changes introduced in the GA (general availability) work. All of the access to AAD protected resources is handled by a third-party AAD application and service principal. The application is created the first time a tenant admin approves a permission scope, and it's created with zero permissions. So any connection you make to data (either through the Microsoft Graph or a call to an endpoint that uses AAD for its permissions) needs to be explicitly allowed.

- [Connect to Azure AD-secured APIs in SharePoint Framework solutions](use-aadhttpclient.md)

> [!IMPORTANT]
> **Any permissions that were granted previous to the v1.6.0 release will need to be re-granted**, as we have changed which AAD application is used.

- Use the `MSGraphClient`. It exists on the context of your component (web part or extension). For performance reasons, the full code is loaded on demand, so it's accessed via a promise.
- **Stop** using `GraphHttpClient` (if you haven't already stopped). Sometime in the next month or so we'll remove it completely from our code. Any solutions that you have that use it will stop working.
- Similar to `MSGraphClient`, there's a general `AadHttpClient` off the context for making calls to AAD secured endpoints, and an AadTokenProvider that you can use to get auth tokens manually.

### Tenant-Wide Deployment of extensions

You can now make tenant-wide configurations for extensions. The easiest way (as a developer) to deploy across the tenancy is to modify the **\SharePoint\ClientInstance.xml** file (created with a new v1.6.0 solution). This creates an entry in a new list in the app catalog (Tenant-Wide Extensions). You can also modify that list directly as an app catalog owner.

- [Tenant-wide Deployment of SharePoint Framework Extensions](extensions/basics/tenant-wide-deployment-extensions.md)

## Changes in this release

### Build and tooling changes

We're trying to move away from some of the wrappers around common build tools. The first two are the tslint and ts compiler steps. Because of these changes, your previous code won't compile without a few of changes.

- First, you need to have a **\*.ts** file at the root of the source directory (by default, we now create one under \src called index.ts that is empty).
- Second, the **tslint.json** file has changed location (from **\config** to the root of the project) and format. it's now just a standard **tslint.json** file. The easiest thing to do is created a new project and copy the **tslint.json** file from it.
- Third, grab the tsconfig.json file from the root of the new project in step 2, and copy it to the root of the original project. If you have made change to the **tsconfig.json** file, you'll want to merge them.

### Promotion of CSS classes to general availability

We found some classes in the **\@microsoft/sp-dialog** package that were marked as Beta. We've moved them to the public.

> [!NOTE]
> This is the last release where the build tools will support Node.js v6.
