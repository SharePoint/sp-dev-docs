---
title: SharePoint Framework v1.8.1 release notes
description: Release notes for the SharePoint Framework v1.8.1 release
ms.date: 07/03/2020
ms.prod: sharepoint
localization_priority: Priority
---
# SharePoint Framework v1.8.1 release notes

This is a _minor bump_ that fixes the issues with the Yeoman generator, projects using the SharePoint 2016 and 2019 configurations, and an issue around using the legacy Fabric CSS setting.

**Released:** April 16, 2019

## Upgrading projects from v1.8.0 to v1.8.1

1. In the project's **package.json** file, identify all SPFx v1.8.0 packages. For each SPFx package:
    1. Uninstall the existing v1.8.0 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.8.0
        ```

    1. Install the refreshed v1.8.1 package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.8.1.0 --save --save-exact
        ```

> [!TIP]
> The [CLI for Microsoft 365](https://aka.ms/o365cli) provides an easy step-by-step guidance to [upgrade](https://pnp.github.io/cli-microsoft365/cmd/spfx/project/project-upgrade/) your solutions to latest SharePoint Framework version.

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

## Changes in this release

- Fixed: Not able to set up SharePoint Server 2016 or SharePoint Server 2019 on premises using **\@microsoft/sharepoint** Yeoman generator  (two issues mentioned – incorrect SupportedHosts property and incorrect reference to sp-property-pane)
  - [#3621](https://github.com/SharePoint/sp-dev-docs/issues/3621)
- Fixed: Can't use **loadLegacyFabricCss** in SPFX 1.8
  - [#3612](https://github.com/SharePoint/sp-dev-docs/issues/3612)
- Fixed: issues around *unmet peer dependencies with certain versions of rush-stack-compiler*. You can use the recent versions.

## Investigating

We're still looking into the issues around out of memory conditions during builds – the current information looks like an issue with the **3.x compilers**, **tslint** configurations, and **office-ui-fabric-react**.

If you're coming across this memory issue, the current workaround is to add **--max_old_space_size=8192** to your gulp commands. We'll release another update when we have a more concrete solution. So as an example you can bundle your solution using the following command:

```console
gulp bundle --ship --max_old_space_size=4000
```

We're looking into potentially addressing the memory and version conflict/confusion with additional *1.8.2 version*, including updated version matrix related on the React, TypeScript, and Office UI Fabric releases.
