---
title: SharePoint Framework development tools and libraries compatibility
description: Find which versions of the SharePoint Framework are compatible with each version of SharePoint, development tools and libraries.
ms.date: 10/21/2021
ms.prod: sharepoint
ms.localizationpriority: high
---
# SharePoint Framework development tools and libraries compatibility

As the SharePoint Framework (SPFx) evolves, so do the various development tools and libraries that it uses.

## SharePoint Framework version compatibility

Because SharePoint Online and the on-premises versions of SharePoint Server have different release cycles for new capabilities, they also have support different SharePoint Framework capabilities.

SharePoint Online always uses the latest version of the SharePoint Framework, but SharePoint 2016 and SharePoint 2019 only support the versions that match the server-side dependencies of the deployed packages.

|       SharePoint version       | Supported SPFx version |                                   Supported features                                    |
| ------------------------------ | ---------------------- | --------------------------------------------------------------------------------------- |
| SharePoint Online              | All versions           | All features                                                                            |
| SharePoint Server 2019         | v1.4.1 or lower        | SPFx client-side web parts in classic and modern pages, and extensions in modern pages. |
| SharePoint 2016 Feature Pack 2 | v1.1                   | SPFx client-side web parts hosted in classic SharePoint pages.                          |

For more information about SharePoint Framework development with SharePoint 2016 Feature Pack 2 and SharePoint 2019, see:

- [SharePoint Framework development with SharePoint 2016 Feature Pack 2](sharepoint-2016-support.md)
- [SharePoint Framework development with SharePoint Server 2019](sharepoint-2019-support.md)

## SPFx development environment compatibility

As each new version of the SharePoint Framework is released, support for newer versions libraries is constantly added to ensure that the toolset remains up to date.

The following table lists SharePoint Framework and compatible versions of common tools and libraries:

|              SPFx               |         Node.js          |                    NPM                    |   TypeScript   |    React    |
| ------------------------------- | ------------------------ | ----------------------------------------- | -------------- | ----------- |
| [1.14](release-1.14.md)       | LTS v12, LTS v14         | v5, v6                                    | v3.9           | v16.13.1    |
| [1.13.1](release-1.13.1.md)       | LTS v12, LTS v14         | v5, v6                                    | v3.9           | v16.13.1    |
| [1.13.0](release-1.13.md)       | LTS v12, LTS v14         | v5, v6                                    | v3.9           | v16.13.1    |
| [1.12.1](release-1.12.1.md)     | LTS v10,LTS v12, LTS v14 | v5, v6                                    | v3.7           | v16.9.0     |
| ~~[1.12.0](release-1.12.0.md)~~ | ~~LTS v12, LTS v10~~     | ~~v5, v6~~                                | ~~v3.7~~       | ~~v16.9.0~~ |
| [1.11.0](release-1.11.0.md)     | LTS v10                  | v5, v6                                    | v3.3           | v16.8.5     |
| [1.10.0](release-1.10.0.md)     | LTS v8, LTS v10          | v5, v6                                    | v3.3           | v16.8.5     |
| [1.9.1](release-1.9.1.md)       | LTS v8, LTS v10          | v5, v6                                    | v2.9           | v16.8.5     |
| [1.8.2](release-1.8.2.md)       | LTS v8, LTS v10          | v5, v6                                    | v2.9           | v16.7.0     |
| [1.8.1](release-1.8.1.md)       | LTS v8                   | v5, v6                                    | v2.7, v2.9, v3 | v16.7.0     |
| [1.8.0](release-1.8.0.md)       | LTS v8                   | v5, v6                                    | v2.7, v2.9, v3 | v16.7.0     |
| [1.7.1](release-1.7.1.md)       | LTS v8                   | v5, v6                                    | v2.4           | v16.3.2     |
| [1.7.0](release-1.7.md)         | LTS v8                   | v5, v6                                    | v2.4           | v16.3.2     |
| [1.6.0](release-1.6.md)         | LTS v6, LTS v8           | v3 (w/ Node.js 6),<br/> v5 (w/ Node.js 8) | v2.4           | v15         |
| [1.5.1](release-1.5.1.md)       | LTS v6, LTS v8           | v3 (w/ Node.js 6),<br/> v5 (w/ Node.js 8) | v2.4           | v15         |
| [1.5.0](release-1.5.md)         | LTS v6, LTS v8           | v3 (w/ Node.js 6),<br/> v5 (w/ Node.js 8) | v2.4           | v15         |
| [1.4.1](release-1.4.1.md)       | LTS v6, LTS v8           | v3, v4                                    | v2.4           | v15         |
| [1.4.0](release-1.4.md)         | LTS v6                   | v3, v4                                    | v2.4           | v15         |
| [1.3.0](release-1.3.md)         | LTS v6                   | v3, v4                                    | v2.4           | v15         |
| [1.1.0](release-1.1.md)         | LTS v6                   | v3, v4                                    | v2.4           | v15         |
| [1.0.0](release-1.0.0.md)       | LTS v6                   | v3                                        | v2.4           | v15         |

## See also

- [SharePoint Framework development tools and libraries](tools-and-libraries.md)
- [SharePoint Framework toolchain](toolchain/sharepoint-framework-toolchain.md)
- [SharePoint Framework Overview](sharepoint-framework-overview.md)
