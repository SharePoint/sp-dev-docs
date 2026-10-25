---
title: SharePoint developer GitHub repositories
description: Find current SharePoint documentation, samples, and PnP projects, with separate references for archived and legacy repositories.
ms.date: 10/25/2026
ms.localizationpriority: high
---

# SharePoint developer GitHub repositories

This catalog highlights repositories in the [SharePoint](https://github.com/SharePoint) and [PnP](https://github.com/pnp) GitHub organizations. It isn't an exhaustive list. Start with the [Microsoft 365 & Power Platform Community](https://pnp.github.io/) for broader resources.

> [!TIP]
> Read a repository's README, license, contribution instructions, and support guidance before submitting an issue or pull request. Archived repositories are retained for reference; use a current project where one is available.

> [!NOTE]
> Browse the [SPFx web part sample gallery](https://pnp.github.io/sp-dev-fx-webparts/), [Copilot UX component samples](https://aka.ms/spfx/copilot/samples), or [Microsoft 365 & Power Platform sample gallery](https://aka.ms/community/samples). Check the individual sample's prerequisites and SPFx version before using it.

## Documentation and sample repositories

| Repository | Description |
| --- | --- |
| [sp-dev-docs](https://github.com/SharePoint/sp-dev-docs) | Source for [SharePoint developer documentation](/sharepoint/dev/) and the issue tracker for SPFx product bugs and documentation issues. |
| [sp-dev-fx-webparts](https://github.com/pnp/sp-dev-fx-webparts) | SPFx client-side web part samples and tutorial code. |
| [sp-dev-fx-extensions](https://github.com/pnp/sp-dev-fx-extensions) | SPFx extension samples and tutorial code. |
| [spfx-copilot-components](https://github.com/pnp/spfx-copilot-components) | Copilot UX component samples built with SPFx. |
| [List-Formatting](https://github.com/pnp/List-Formatting) | Community JSON examples for [list and column formatting](../declarative-customization/column-formatting.md). |
| [sp-dev-site-scripts](https://github.com/pnp/sp-dev-site-scripts) | JSON examples for [site templates and site scripts](../declarative-customization/site-design-overview.md). |
| [sp-dev-samples](https://github.com/pnp/sp-dev-samples) | SharePoint API and webhook examples, including older extensibility samples. Check the selected sample's requirements and the lifecycle of the APIs it uses. |

## Active PnP libraries and tools

| Repository | Description |
| --- | --- |
| [pnpcore](https://github.com/pnp/pnpcore) | PnP Core SDK for .NET development with SharePoint Online and Teams. |
| [pnpframework](https://github.com/pnp/pnpframework) | PnP Framework, including the provisioning engine and SharePoint Online CSOM extensions. |
| [powershell](https://github.com/pnp/powershell) | Current PnP PowerShell module for Microsoft 365 automation. |
| [pnpjs](https://github.com/pnp/pnpjs) | Fluent JavaScript libraries for SharePoint and Microsoft Graph APIs. |
| [cli-microsoft365](https://github.com/pnp/cli-microsoft365) | Community CLI for Microsoft 365 administration, automation, and SPFx project management. |
| [sp-dev-fx-controls-react](https://github.com/pnp/sp-dev-fx-controls-react) | Reusable React controls for SPFx solutions. |
| [sp-dev-fx-property-controls](https://github.com/pnp/sp-dev-fx-property-controls) | Reusable SPFx property pane controls. |

See [Open-source projects](open-source-projects.md) for project documentation and support considerations. Choose package versions that match your target environment; this catalog doesn't certify compatibility with a particular SPFx release.

## SPFx scaffolding repositories

| Repository | Description |
| --- | --- |
| [SharePoint/spfx](https://github.com/SharePoint/spfx) | Microsoft's open-source SPFx CLI and templates. Consult the repository for its release status and supported template versions; these are separate from SPFx runtime releases. |
| [pnp/generator-spfx](https://github.com/pnp/generator-spfx) | Community extension to the Microsoft Yeoman generator. Check its documented version requirements before use. |

Neither scaffolding project is the same tool as the CLI for Microsoft 365.

## Other solution and historical references

The following repositories aren't archived, but contain solutions or older material with their own prerequisites. Check the selected branch, dependencies, and maintenance guidance; repository availability doesn't establish current platform compatibility.

| Repository | Scope |
| --- | --- |
| [sp-starter-kit](https://github.com/pnp/sp-starter-kit) | SharePoint Starter Kit examples; older branches have separate maintenance status. |
| [sp-dev-solutions](https://github.com/pnp/sp-dev-solutions) | Reusable SharePoint solutions with solution-specific dependencies. |
| [sp-dev-provisioning-templates](https://github.com/SharePoint/sp-dev-provisioning-templates) | Templates previously used by the SharePoint Look Book provisioning service, not a current service endpoint. |
| [modernization](https://github.com/pnp/modernization) | Legacy modernization tooling. For new assessments, see [Assess SharePoint modernization](../transform/assess-sharepoint-modernization.md). |
| [sp-dev-build-extensions](https://github.com/pnp/sp-dev-build-extensions) | Build extensions, including gulp-era tasks. Check toolchain compatibility before use. |
| [PnP-Tools](https://github.com/pnp/PnP-Tools) | Tools and scripts, including material for older SharePoint Server versions. |
| [PnP-Transformation](https://github.com/pnp/PnP-Transformation) | Historical transformation guidance, including older customization models. |
| [sp-js-provisioning](https://github.com/pnp/sp-js-provisioning) | JavaScript provisioning project; review its README for scope and status rather than assuming a supported provisioning engine. |

## Archived repositories

These repositories are historical references, not recommendations for new projects.

| Archived repository | Current direction or historical scope |
| --- | --- |
| [PnP-Sites-Core](https://github.com/pnp/PnP-Sites-Core) | Superseded by [PnP Framework](https://github.com/pnp/pnpframework) for SharePoint Online. Review platform and API differences when migrating. |
| [PnP-PowerShell](https://github.com/pnp/PnP-PowerShell) | Superseded by the current [PnP PowerShell](https://github.com/pnp/powershell) module. |
| [PnP-JS-Core](https://github.com/SharePoint/PnP-JS-Core) | Superseded by [PnPjs](https://github.com/pnp/pnpjs). |
| [sp-dev-fx-vs-extension](https://github.com/pnp/sp-dev-fx-vs-extension) | Historical Visual Studio 2015/2017 extension. Use the current [SPFx environment setup guidance](../spfx/set-up-your-development-environment.md). |
| [PnP-Provisioning-Schema](https://github.com/pnp/PnP-Provisioning-Schema) | Archived provisioning schema. See [PnP Framework](https://pnp.github.io/pnpframework/) for current provisioning engine guidance. |
| [PnP](https://github.com/pnp/PnP) | Historical samples, including the SharePoint Add-In model. Start with the current sample galleries above. |
| [sp-dev-gdpr-activity-hub](https://github.com/SharePoint/sp-dev-gdpr-activity-hub) | Historical GDPR Activity Hub reference solution. |
| [PnP-Partner-Pack](https://github.com/SharePoint/PnP-Partner-Pack) | Historical packaged guidance for SharePoint and Azure. |
| [PnP-Provisioning-Templates](https://github.com/SharePoint/PnP-Provisioning-Templates) | Archived provisioning template collection. |
| [PnP-Guidance](https://github.com/SharePoint/PnP-Guidance) | Historical guidance, presentations, and articles. |
| [PnP-IdentityModel](https://github.com/pnp/PnP-IdentityModel) | Historical replacement for Microsoft.IdentityModel.Extensions.dll. |

## See also

- [How to contribute](contribute.md)
- [Support and feedback](../support-feedback.md)
