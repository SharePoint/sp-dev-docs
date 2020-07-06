---
title: SharePoint Framework roadmap
description: Key modern customization capabilities released after General Availability.
ms.date: 07/03/2020
ms.prod: sharepoint
localization_priority: Priority
---

# SharePoint Framework roadmap

The first release of the SharePoint Framework in February 2017 only contained support for client-side web parts. This was just a start on the journey to provide additional modern customization capabilities to SharePoint.

The following is a list of key capabilities released after General Availability:

- [Create Outlook add-ins using SharePoint Framework (developer preview in SPFx v1.10)](office-addins-create.md)
- [Building Microsoft Team tabs using SharePoint Framework](./integrate-with-teams-introduction.md)
- [Single Part App Pages](./web-parts/single-part-app-pages.md)
- [Isolated web parts](./web-parts/isolated-web-parts.md)
- [Dynamic data and web part connections](./dynamic-data.md)
- [Tenant-scoped deployment support](./tenant-scoped-deployment.md)
- [On-premises support for SharePoint 2016 (Feature Pack 2)](./sharepoint-2016-support.md)
- [SharePoint Framework Extensions](./extensions/overview-extensions.md)
- [Tenant properties](./tenant-properties.md)
- [Application Lifecycle Management (ALM) APIs for SPFx solutions and add-ins](../apis/alm-api-for-spfx-add-ins.md)
- [Office UI Fabric Core support](https://developer.microsoft.com/office/blogs/improved-support-for-office-ui-fabric-core)
- [Asset packaging and site collection app catalog](../general-development/site-collection-app-catalog.md)
- [Improved MS Graph integration with additional scopes](./use-msgraph.md)
- [Call securely Azure AD secured applications from SharePoint Framework](./use-aadhttpclient.md)
- [Connect SharePoint Framework components using dynamic data](./dynamic-data.md)
- Support for Yarn and PNPM package managers
- Relocating preview code to isolated packages
- SPFx Yeoman package extensibility
- React 16 and TypeScript 3.x support
- Pre-allocate space for the extensions while rendering page in server side

## Release notes

Refer to the table of contents menu for details on each of the SharePoint Framework releases.

> [!NOTE]
> This is a list of areas that SharePoint engineering has in the backlog and is looking into. This does **NOT** mean that all of them will be delivered, but we are looking into getting items and topics from this list gradually released with the future releases of SharePoint Framework.

## General improvements

- Updated 'store' story with SharePoint Framework support in AppSource
- 'Store' story for SharePoint Framework solutions with easy distribution channel for ISVs
- Content Security Policy (CSP) support
- Additional placeholder, like content header, content footer, navigation extensions, search extensions
- Improved developer experience and tooling

## Client-side web parts++ and add-ins

- Support more complex scenarios and interactions with web parts
  - "Citizen developer" model for lightweight development

- Bring add-ins to the modern world: let’s make them play nicer with the new UX
  - Azure AD registration
  - Native responsive support
  - Build add-ins with SharePoint Framework

## Application Lifecycle Management

- Streamlined approval experience: no need to know who your tenant admin is anymore
  - Owner initiates the approval process.
  - Tenant admin gets automatically notified.
  - Settings to control the default experience around approval process.
- API for creating app catalog in the tenant

## Developer experience

- SharePoint Framework Workbench 2.0: Development story for SharePoint Framework Extensions
- Tool chain improvements
