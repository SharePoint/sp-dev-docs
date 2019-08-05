---
title: SharePoint Framework roadmap
description: Key modern customization capabilities released after General Availability.
ms.date: 04/18/2019
ms.prod: sharepoint
localization_priority: Priority
---

# SharePoint Framework roadmap

The first release of the SharePoint Framework contained only support for client-side web parts. This was, however, just a start on the journey for providing additional modern customization capabilities to SharePoint. Following is a list of key capabilities released after General Availability:

- [Building Microsoft Team tabs using SharePoint Framework](./integrate-with-teams-introduction)
- [Single Part App Pages](./web-parts/single-part-app-pages.md)
- [Isolated web parts](./web-parts/isolated-web-parts.md)
- [Dynamic data and web part connections](./dynamic-data.md)
- [Tenant-scoped deployment support](./tenant-scoped-deployment.md)
- [On-premises support for SharePoint 2016 (Feature Pack 2)](./sharepoint-2016-support.md)
- [SharePoint Framework Extensions](./extensions/overview-extensions.md)
- [Tenant properties](./tenant-properties.md)
- [Application Lifecycle Management (ALM) APIs for SPFx solutions and add-ins](../apis/alm-api-for-spfx-add-ins.md)
- [Office UI Fabric Core support](https://dev.office.com/blogs/improved-support-for-office-ui-fabric-core)
- [Asset packaging and site collection app catalog](../general-development/site-collection-app-catalog.md)
- [Improved MS Graph integration with additional scopes](./use-msgraph.md)
- [Call securely Azure AD secured applications from SharePoint Framework](./use-aadhttpclient.md)
- [Connect SharePoint Framework components using dynamic data](./dynamic-data.md)
- Support for Yarn and PNPM package managers
- Relocating preview code to isolated packages
- SPFx Yeoman package extensibility
- React 16 and TypeScript 3.x support

> [!NOTE]
> This is a list of areas that SharePoint engineering has in the backlog and is looking into. This does **NOT** mean that all of them will be delivered, but we are looking into getting items and topics from this list gradually released with the future releases of SharePoint Framework.

## General improvements

- Updated 'store' story with SharePoint Framework support
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

- Building Office add-ins using SharePoint Framework

## Application Lifecycle Management

- Streamlined approval experience: no need to know who your tenant admin is anymore
    - Owner initiates the approval process.
    - Tenant admin gets automatically notified.
    - Settings to control the default experience around approval process.

## Developer experience

- SharePoint Framework Workbench 2.0: Development story for SharePoint Framework Extensions
- Toolchain components

## Already shipped capabilities

The following sections list older items that have already shipped.

### Improved Microsoft Graph and Azure AD secured API access

- Use any tenant administrator approved Microsoft Graph scope in your SharePoint Framework solutions
- Call securely APIs secured with Azure Active Directory - Like custom WebAPIs or Azure Functions

### Asset packaging

- Automatic CDN hosting for code. Package JavaScript bundle into app package, which is automatically deployed to a library that gets hosted on your tenant Office 365 CDN.

### ALM REST APIs

- ALM REST APIs. Deploy, activate, delete, and upgrade apps and add-ins.
- ALM REST APIs targeted to support *everything* in the app catalog, including add-ins.
- CSOM and PowerShell cmdlets released as an open source community initiative.

### JavaScript embedding support (JSLink, User Custom Actions) 

- The same toolchain and deployment model as client-side web parts.
- Derive from a strongly typed base class wherever possible, rather than manipulating the page DOM directly.
- Enable modern extension usage with modern experiences similar to Custom Actions and JSLink in classic experience.
- Work with NoScript via tenant app catalog.

### On-premises support - Sharepoint 2016 Feature Pack 2

- Shipping as part of Feature Pack 2 for SharePoint 2016.
- Similar feature capabilities as in SharePoint Online.
- Target is to provide common development platform across on-premises and the cloud.
- Leveraging modern toolchain and open source in on-premises environments.
- Targeting SharePoint 2016 version during calendar year 2017.


## See also

- [dev.office.com blog](https://dev.office.com/blogs)
- [OfficeDev Twitter account](https://twitter.com/officedev)
- [SharePoint Framework Overview](sharepoint-framework-overview.md)
