---
title: SharePoint Framework Platform & Toolchain Compatibility Reference
description: Find which versions of the SharePoint Framework are compatible with SharePoint platform versions and dependencies including the build toolchain.
ms.date: 11/18/2025
ms.localizationpriority: high
---
# SharePoint Framework Platform & Toolchain Compatibility Reference

As the SharePoint Framework (SPFx) evolves, so do the various development tools and libraries it uses and depends on.

## SPFx compatibility with SharePoint platforms

Because SharePoint Online and the on-premises versions of SharePoint Server have different release cycles for new capabilities, they also support different SPFx capabilities.

SharePoint Online always uses the latest version of the SPFx, but on-premises SharePoint versions only support SPFx versions that match the server-side dependencies of the deployed packages. The following table lists the versions of the SPFx that are supported on the different SharePoint deployments. *Any versions not listed do not support the SPFx.*

|           SharePoint version           | Supported SPFx version |                                   Supported features                                    |
| -------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------- |
| SharePoint Online                      | All                    | All                                                                                     |
| SharePoint Server Subscription Edition | v1.0 - v1.5            | SPFx client-side web parts in classic and modern pages, and extensions in modern pages. |
| SharePoint Server 2019                 | v1.0 - v1.4.1          | SPFx client-side web parts in classic and modern pages, and extensions in modern pages. |
| SharePoint Server 2016 with Feature Pack 2         | v1.0 - v1.1            | SPFx client-side web parts hosted in classic SharePoint pages.                          |

Learn more about SPFx development with SharePoint Server 2016 with Feature Pack 2, SharePoint Server 2019, and SharePoint Server Subscription Edition:

- [SPFx development with SharePoint 2016 Feature Pack 2](sharepoint-2016-support.md)
- [SPFx development with SharePoint Server 2019 and Subscription Edition](sharepoint-2019-and-subscription-edition-support.md)

## SPFx development environment compatibility

As each new version of the SPFx is released, support for newer library versions is updated to ensure the toolset remains current.

The following table lists the SPFx and compatible versions of common tools and libraries:

|              SPFx               | Node.js (LTS) |   TypeScript   |    React    |
| ------------------------------- | ------------- | -------------- | ----------- |
| [1.22.0](release-1.22.md)       | v22           | v2.9 - v5.8    | v17.0.1     |
| [1.21.1](release-1.21.1.md)     | v22           | v5.3           | v17.0.1     |
| [1.21.0](release-1.21.md)       | v22           | v5.3           | v17.0.1     |
| [1.20.0](release-1.20.md)       | v18           | v4.5, v4.7     | v17.0.1     |
| [1.19.0](release-1.19.md)       | v18           | v4.5, v4.7     | v17.0.1     |
| [1.18.2](release-1.18.2.md)     | v16, v18      | v4.5, v4.7     | v17.0.1     |
| [1.18.1](release-1.18.1.md)     | v16, v18      | v4.5, v4.7     | v17.0.1     |
| [1.18](release-1.18.md)         | v16, v18      | v4.5, v4.7     | v17.0.1     |
| [1.17.4](release-1.17.4.md)     | v16.13+       | v4.5           | v17.0.1     |
| [1.17.3](release-1.17.3.md)     | v16.13+       | v4.5           | v17.0.1     |
| [1.17.2](release-1.17.2.md)     | v16.13+       | v4.5           | v17.0.1     |
| [1.17.1](release-1.17.1.md)     | v16.13+       | v4.5           | v17.0.1     |
| [1.17.0](release-1.17.md)       | v16.13+       | v4.5           | v17.0.1     |
| [1.16.1](release-1.16.1.md)     | v16.13+       | v4.5           | v17.0.1     |
| [1.16.0](release-1.16.md)       | v16.13+       | v4.5           | v17.0.1     |
| [1.15.2](release-1.15.2.md)     | v12, v14, v16 | v4.5           | v16.13.1    |
| [1.15.0](release-1.15.md)       | v12, v14, v16 | v4.5           | v16.13.1    |
| [1.14.0](release-1.14.md)       | v12, v14      | v3.9           | v16.13.1    |
| [1.13.1](release-1.13.1.md)     | v12, v14      | v3.9           | v16.13.1    |
| [1.13.0](release-1.13.md)       | v12, v14      | v3.9           | v16.13.1    |
| [1.12.1](release-1.12.1.md)     | v10, v12, v14 | v3.7           | v16.9.0     |
| ~~[1.12.0](release-1.12.0.md)~~ | ~~v12, v10~~  | ~~v3.7~~       | ~~v16.9.0~~ |
| [1.11.0](release-1.11.0.md)     | v10           | v3.3           | v16.8.5     |
| [1.10.0](release-1.10.0.md)     | v8, v10       | v3.3           | v16.8.5     |
| [1.9.1](release-1.9.1.md)       | v8, v10       | v2.9           | v16.8.5     |
| [1.8.2](release-1.8.2.md)       | v8, v10       | v2.9           | v16.7.0     |
| [1.8.1](release-1.8.1.md)       | v8            | v2.7, v2.9, v3 | v16.7.0     |
| [1.8.0](release-1.8.0.md)       | v8            | v2.7, v2.9, v3 | v16.7.0     |
| [1.7.1](release-1.7.1.md)       | v8            | v2.4           | v16.3.2     |
| [1.7.0](release-1.7.md)         | v8            | v2.4           | v16.3.2     |
| [1.6.0](release-1.6.md)         | v6, v8        | v2.4           | v15         |
| [1.5.1](release-1.5.1.md)       | v6, v8        | v2.4           | v15         |
| [1.5.0](release-1.5.md)         | v6, v8        | v2.4           | v15         |
| [1.4.1](release-1.4.1.md)       | v6, v8        | v2.4           | v15         |
| [1.4.0](release-1.4.md)         | v6            | v2.4           | v15         |
| [1.3.0](release-1.3.md)         | v6            | v2.4           | v15         |
| [1.1.0](release-1.1.md)         | v6            | v2.4           | v15         |
| [1.0.0](release-1.0.0.md)       | v6            | v2.4           | v15         |

> [!IMPORTANT]
> The SPFx introduced a significant change to the build toolchain starting with the SPFx v1.22 release. The legacy gulp-based toolchain (legacy) was used from SPFx v1.0 - v1.21.1. Learn more in the following articles:
>
> - [SPFx v1.22 release notes](release-1.22.md)
> - [Gulp-based Toolchain (legacy)](toolchain/sharepoint-framework-toolchain.md)
> - [Heft-based toolchain (SPFx v1.22.0+)](toolchain/sharepoint-framework-toolchain-rushstack-heft.md)

## See also

- [SPFx Overview](sharepoint-framework-overview.md)
- [Heft-based toolchain (SPFx v1.22.0+)](toolchain/sharepoint-framework-toolchain-rushstack-heft.md)
- [Gulp-based toolchain (legacy)](toolchain/sharepoint-framework-toolchain.md)
- [SPFx development tools and libraries](tools-and-libraries.md)
