---
title: SharePoint Framework developer preview releases
description: Details on how to use developer preview pre-release packages with SharePoint Framework.
ms.date: 04/13/2021
ms.prod: sharepoint
localization_priority: Priority
---
# SharePoint Framework developer preview releases

Starting with SharePoint Framework (SPFx) v1.12, developers can try preview releases of new SPFx generator packages as part of a developer preview.

> [!CAUTION]
> Developer preview releases aren't officially supported or recommended, especially for production projects and environments. These public preview releases are provided for the community to test and report issues prior to the official release.

## How to determine if a developer preview version is available

To determine if there's a preview release available, use the following command:

```console
npm info @microsoft/generator-sharepoint
```

The NPM **info** command will display a section **dist-tags** near the end of its output with two properties:

- **latest**: the current production released version of the package
- **next**: the most recent developer preview release of the package

For example, the following is a sample output of what you'd see if you ran the above command. Note that some things have been omitted for brevity:

```text
@microsoft/generator-sharepoint@1.11.0 | SEE LICENSE IN "EULA" FOLDER | deps: 11 | versions: 34
Yeoman generator for the SharePoint Framework
http://aka.ms/spfx

keywords: yeoman-generator

dist
.tarball: https://registry.npmjs.org/@microsoft/generator-sharepoint/-/generator-sharepoint-1.11.0.tgz
.shasum: 43323fa642165e4ce5b1b9d4624244b07d6332bb
.integrity: sha512-ySYCMk5nMIk3mZhDoxS0Dgxs6dnM5JBAOrEpwWDb1jLQCoxnXFBsanfHzbBSS3UIokpaS3ZNrocr22d2RIdQww==
.unpackedSize: 1.9 MB

dependencies:
@microsoft/node-core-library: 3.15.1 colors: ~1.2.1                       uuid: ~3.1.0
@types/es6-promise: 0.0.33           fs-extra: ~5.0.0                     yeoman-generator: ~2.0.5
@types/node: 8.10.54                 lodash: ~4.17.5                      yosay: ~1.1.1
argparse: ~1.0.7                     update-notifier: ~1.0.2

maintainers:
- microsoft1es <npmjs@microsoft.com>
- odspnpm <odspnpm@microsoft.com>

dist-tags:
latest: 1.11.0     next: 1.12.1-rc.0

published 9 months ago by odspnpm <odspnpm@microsoft.com>
```

In the sample output above, you can see the current released version is *1.11* while the developer preview version available is *1.12.1-rc.0*.

## How to install a developer preview version

To install a specific version of an NPM package, add `@` followed by the version number at the end of the package name.

For example, if the **info** command lists the **next** version is *10.11.12-rc.5*, you'd globally install the latest version of the generator with the following command:

```console
npm install @microsoft/generator-sharepoint@10.11.12-rc.5 --global
```

> [!NOTE]
> For more information on installing NPM packages, see the NPM documentation on [npm-install](https://docs.npmjs.com/cli/v7/commands/npm-install).

## Reporting issues

If during your testing you encounter an issue or bug with a developer preview release, please submit it to the [SharePoint/sp-dev-docs](https://aka.ms/spdev-issues) issue list. Make sure to indicate in your submission that the issue is about a specific preview release by including the version number in the title.
