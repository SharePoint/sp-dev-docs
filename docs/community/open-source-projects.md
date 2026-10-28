---
title: SharePoint community open-source projects
description: Find current PnP libraries and tools for SharePoint development, and identify archived projects and their successors.
ms.date: 10/25/2026
ms.localizationpriority: high
---

# SharePoint community open-source projects

The [Microsoft 365 & Power Platform Community](https://pnp.github.io/) includes open-source libraries, tools, controls, and samples for SharePoint development. This article highlights current projects and distinguishes them from archived or historical resources. See the [repository catalog](repositories.md) for source repositories and sample collections.

## Active community libraries and tools

| Project | Purpose |
| --- | --- |
| [PnP Core SDK](https://pnp.github.io/pnpcore/) | A .NET SDK with a unified object model for SharePoint Online and Teams. |
| [PnP Framework](https://pnp.github.io/pnpframework/) | A .NET library for SharePoint Online that includes the PnP provisioning engine and CSOM extensions. The successor to PnP Sites Core. |
| [PnP PowerShell](https://pnp.github.io/powershell/) | Cross-platform PowerShell cmdlets for Microsoft 365 administration and automation. See the project documentation for supported workloads and authentication requirements. |
| [PnPjs](https://pnp.github.io/pnpjs/) | Fluent JavaScript libraries for working with SharePoint and Microsoft Graph APIs. |
| [CLI for Microsoft 365](https://pnp.github.io/cli-microsoft365/) | A community CLI for Microsoft 365 administration, automation, and SPFx project management. |
| [SPFx reusable React controls](https://pnp.github.io/sp-dev-fx-controls-react/) | React controls for use in SharePoint Framework solutions. |
| [SPFx reusable property pane controls](https://pnp.github.io/sp-dev-fx-property-controls/) | Property pane controls for SharePoint Framework web parts. |

Use each project's documentation to select a compatible version. An active repository doesn't mean that every sample or package version supports SPFx 1.24 or your target SharePoint environment.

## Scaffolding tools

- [SharePoint Framework CLI and templates](https://github.com/SharePoint/spfx) is Microsoft's open-source SPFx scaffolding project. Its release status and template versions are separate from the SPFx runtime release; see the repository and [SPFx CLI documentation](../spfx/toolchain/sharepoint-framework-cli.md) for current guidance.
- [PnP SPFx Yeoman generator](https://pnp.github.io/generator-spfx/) is a community extension to the Microsoft Yeoman generator. It isn't the official SPFx CLI. Check its documented SPFx and toolchain requirements before use.

The CLI for Microsoft 365 listed above is a separate community tool, not another name for the official SPFx CLI.

## Solution and provisioning references

These repositories contain broader solutions or historical tooling. Check their README files and dependencies before reusing them; an unarchived repository alone isn't a compatibility or maintenance guarantee.

| Repository | Scope and considerations |
| --- | --- |
| [SharePoint Starter Kit](https://github.com/pnp/sp-starter-kit) | A collection of SharePoint extensibility examples. Check the selected version's prerequisites; older branches have separate maintenance status. |
| [SharePoint provisioning templates](https://github.com/SharePoint/sp-dev-provisioning-templates) | Templates previously used by the SharePoint Look Book provisioning service. Their availability doesn't imply that the service is available. |
| [SharePoint modernization](https://github.com/pnp/modernization) | Legacy modernization tools and scripts. For new assessment work, see [Assess SharePoint modernization](../transform/assess-sharepoint-modernization.md). |

## Archived projects

These repositories are archived and aren't starting points for new projects.

| Archived repository | Current direction |
| --- | --- |
| [PnP Sites Core](https://github.com/pnp/PnP-Sites-Core) | Use [PnP Framework](https://pnp.github.io/pnpframework/) for its SharePoint Online provisioning and CSOM extensions. Review the differences in supported environments rather than assuming a drop-in replacement for on-premises solutions. |
| [Legacy PnP-PowerShell](https://github.com/pnp/PnP-PowerShell) | Move to the current [PnP PowerShell](https://pnp.github.io/powershell/) project and review its installation, authentication, and migration guidance. |
| [PnP-JS-Core](https://github.com/SharePoint/PnP-JS-Core) | Use [PnPjs](https://pnp.github.io/pnpjs/). Review API and version changes before migrating. |
| [Visual Studio extension for SPFx](https://github.com/pnp/sp-dev-fx-vs-extension) | Historical Visual Studio 2015/2017 integration. Follow the current [SPFx development environment setup](../spfx/set-up-your-development-environment.md) instead. |
| [PnP provisioning schema](https://github.com/pnp/PnP-Provisioning-Schema) | Archived schema repository. For provisioning engine usage, start with the current [PnP Framework documentation](https://pnp.github.io/pnpframework/). |

## Supportability of open-source projects

PnP projects are community-provided, not Microsoft product offerings. Follow each repository's support guidance and license. Report a library, control, or sample defect to its owning repository; don't assume a Microsoft support agreement covers community code.

A defect in an underlying supported Microsoft service has its own product support route. See [Support and feedback](../support-feedback.md) to distinguish product bugs, documentation issues, how-to questions, and community-project defects.
