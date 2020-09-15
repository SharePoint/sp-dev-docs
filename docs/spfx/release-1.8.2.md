---
title: SharePoint Framework v1.8.2 release notes
description: Release notes for the SharePoint Framework v1.8.2 release
ms.date: 07/03/2020
ms.prod: sharepoint
localization_priority: Priority
---
# SharePoint Framework v1.8.2 release notes

This is a minor patch release that mostly focuses on build and tooling issues, with some changes to the scaffolded projects and APIs.

**Released:** May 7, 2019

## Upgrading projects from v1.8.1 to v1.8.2

1. In the project's **package.json** file, identify all SPFx v1.8.1 packages. For each SPFx package:
    1. Uninstall the existing v1.8.1 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.8.1
        ```

    1. Install the refreshed v1.8.2 package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.8.2.0 --save --save-exact
        ```

> [!TIP]
> The [CLI for Microsoft 365](https://aka.ms/o365cli) provides an easy step-by-step guidance to [upgrade](https://pnp.github.io/cli-microsoft365/cmd/spfx/project/project-upgrade/) your solutions to latest SharePoint Framework version.

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

## Changes in this release

- Released the `context.microsoftTeams` property to generally available (GA).
  - [#3826](https://github.com/SharePoint/sp-dev-docs/issues/3826)
- Fixed the issue with out of memory exceptions during the webPack phase of a build.  We've bumped the tools to use the latest version of WebPack 3
  - [#3679](https://github.com/SharePoint/sp-dev-docs/issues/3679)
- Updated the build tools to use versions that result in a smaller combined size of the **node_modules** folder. Expect a reduction of *50-150 MB* in size.
- Updated the generator to use the updated tooling, SPFx version 1.8.2, and **rush-stack-compiler-2.9**.  Feel free to use a different version of **rush-stack-compiler** if you need a different typescript version.  The number after the final '-' is the version of typescript that will be used.  Remember to update your **tsconfig.json** file to reference the correct rush-stack-compiler.
- For the React-scaffolded projects, we now explicitly add **office-ui-fabric-react** (OUIFR) v6 to **package.json**.  We were finding a common pattern where people weren't adding OUIFR to **package.json**, but were using it.
  - OUIFR would end up in the **node_modules** folder because of downstream dependencies. While the solution would compile, it could cause issues in the future such as when the solution was upgraded to use a different version of the framework. In this case, a different version of OUIFR would get used.
  - In general, using packages in this pattern (*via shadow dependencies*) is a bad thing.  You're more than welcome to remove the reference in **package.json** if you aren't using OUIFR in your solution, or change the version if needed.  We also updated the type declarations for the React packages to match the versions of React / React DOM referenced in the release.
- Support for [Node.js 10](https://nodejs.org/).  Node.js v8 is still supported, but will be removed in a future release.

### Updates added to SharePoint Online

- App pages can be created through the "add a page" user interface
  - [Microsoft 365 & SharePoint Community - PnP: Community demo - Out of the box modern page templates and app pages built with SharePoint Framework](https://www.youtube.com/watch?v=Fj44FjYKpOM)
- Mobile and native apps will correctly authenticate to external web APIs like Microsoft Graph or third-party APIs registered through Azure Active Directory.

### Updates rolling into SharePoint Online (ongoing)

- We continue to fix issues around extensions in modern lists and libraries.  We realize that we need to improve the stability in this application.
- Improvements to the authentication of WebAPIs, both for performance and stability (particularly around the multiple accounts).
- Improvements to isolated web parts (working in Teams, issues around authentication problems when using multiple isolated domains).
- Improvements to the SharePoint administration API management page (avoiding duplicate and redundant rows).
- Fix an issue where the `DynamicDataSharedDepth` property wouldn't work with v1.8.1
  - [#3820](https://github.com/SharePoint/sp-dev-docs/issues/3820)
