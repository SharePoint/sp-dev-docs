---
title: SharePoint Framework v1.22.2 release notes
description: Release notes for the SharePoint Framework v1.22.2 release
ms.date: 01/28/2026
ms.localizationpriority: high
---
# SharePoint Framework v1.22.2 release notes

This is a _minor bump_ that addresses known npm vulnerabilities which were reported since the last minor release.

> [!TIP]
> It's safe to keep on using SharePoint Framework 1.22.x version, but we do recommend using always the latest version in the production, which in this case would be the 1.22.1, which has fix on the reported GitHub issues as listed below.

**Released:** January 28, 2025

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest** tag:

```console
npm install @microsoft/generator-sharepoint@latest --global
```

## Upgrading projects from v1.22.1 to v1.22.2

In the project's **package.json** file, identify all SPFx v1.22 packages. For each SPFx package:

1. Uninstall the existing v1.22.1 package:

    ```console
    npm uninstall @microsoft/{spfx-package-name}@1.22.1
    ```

1. Install the new v1.22.2 package:

    ```console
    npm install @microsoft/{spfx-package-name}@latest --save --save-exact
    ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## Fixed Issues

Starting January 2026, we are introducing a monthly minor release cycle focused on keeping the SharePoint Framework developer environment clean from known npm vulnerabilities. The goal is to avoid confusion when npm audit reports issues during solution scaffolding on local development machines.

Critical runtime vulnerabilities will still be fixed as fast as possible. The monthly cadence is specifically for addressing npm audit findings that are not runtime vulnerabilities. These findings originate from server-side npm packages that are only used during local development.

The SharePoint Framework toolchain relies on server-side npm packages for build and debugging operations, but these packages are never included in the final sppkg package that runs in SharePoint Online or Microsoft 365. Because these packages only support the localhost experience and are not exposed to end users, they do not create risks in production environments.

This model ensures predictable updates, reduces unnecessary concern, and keeps npm audit reports clean when creating new SPFx solutions.

See more details on understanding this model from following document:

* [Understanding npm audit vulnerabilities in SPFx projects](./npm-vulnerabilities.md)
