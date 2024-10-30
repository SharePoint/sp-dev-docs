---
title: SharePoint Framework roadmap
description: Key modern customization capabilities released after General Availability.
ms.date: 10/10/2023
ms.localizationpriority: high
---

# SharePoint Framework roadmap

The first release of the SharePoint Framework in February 2017 only contained support for client-side web parts. This was just a start on the journey to provide additional modern customization capabilities to SharePoint.

[!INCLUDE [sp-add-in-deprecation](../../includes/snippets/sp-add-in-spfx.md)]

The following is a list of key capabilities released after General Availability:

- [Dynamic data and web part connections](./dynamic-data.md)
- [Tenant-scoped deployment support](./tenant-scoped-deployment.md)
- [On-premises support for SharePoint 2016 (Feature Pack 2)](./sharepoint-2016-support.md)
- [SharePoint Framework Extensions](./extensions/overview-extensions.md)
- [Relocating preview code to isolated packages](./try-preview-capabilities.md)
- [Tenant properties](./tenant-properties.md)
- Support for Yarn and PNPM package managers
- [Application Lifecycle Management (ALM) APIs for SPFx solutions and add-ins](../apis/alm-api-for-spfx-add-ins.md)
- [Office UI Fabric Core support](https://developer.microsoft.com/office/blogs/improved-support-for-office-ui-fabric-core)
- [Asset packaging and site collection app catalog](../general-development/site-collection-app-catalog.md)
- [Improved Microsoft Graph integration with additional scopes](./use-msgraph.md)
- [Call securely Azure AD secured applications from SharePoint Framework](./use-aadhttpclient.md)
- [Single Part App Pages](./web-parts/single-part-app-pages.md)
- [Building Microsoft Team tabs using SharePoint Framework](./integrate-with-teams-introduction.md)
- [Isolated web parts](./web-parts/isolated-web-parts.md)
- React 16 and TypeScript 3.x support
- [Pre-allocate space for the extensions while rendering page in server side](./extensions/basics/preallocated-space-placeholders.md)
- [Use the SPFx API to determine & react to changes in the web part's rendered size](./web-parts/basics/determine-web-part-width.md)
- [Use SPFx solutions in Microsoft Teams - support multiple deployment options](./deployment-spfx-teams-solutions.md)
- [Use SPFx solutions to extend Microsoft Viva Connections](./viva/overview-viva-connections.md)
- [Building meeting apps for Microsoft Teams with SPFx](./build-for-teams-meeting-app.md)

## Release notes

Refer to the table of contents menu for details on each of the SharePoint Framework releases.

> [!NOTE]
> This is a list of areas that SharePoint engineering has in the backlog and is looking into. This does **NOT** mean that all of them will be delivered, but we are looking into getting items and topics from this list gradually released with the future releases of SharePoint Framework.

## Future key focus areas

> [!NOTE]
> The following list is subject to change.

- General improvements
  - Support overriding new, edit, and view experiences with SPFx in Lists and Libraries
  - Improved solution metadata support in solution packages
  - Service principal registration for full API package model
  - Performance improvements across apps (dev and runtime)

- Microsoft Teams improvements
  - Store acquisition - target SPFx solutions directly to Microsoft Teams store
  - Teams store support for partner SPFx solutions

- Microsoft Viva Connections improvements
  - New card shapes
  - More flexibiliy with the Quick View

- Store improvements
  - Modernize Store app catalog and store UX
  - Modernize end-to-end acquisition process for store solutions

- Improved communications
  - More transparency also on server-side improvements
  - More visibility on the issue resolution
- Quality improvements

> [!NOTE]
> The current state of the SharePoint Framework is reviewed near the beginning of the bi-weekly [Viva Connections & SharePoint Framework community call](https://aka.ms/community/calls). Previous Viva Connections & SharePoint Framework call recordings can be found on the [Microsoft 365 & Power Platform Communtiy YouTube Channel's playlist](https://www.youtube.com/watch?v=z4_5_IQjYRQ&list=PLR9nK3mnD-OXdcwfcHGsGr78nHWLRsv1x)
