---
title: SharePoint Server 2019 development platform
ms.date: 07/12/2018
ms.prod: sharepoint
ms.assetid: e0602381-ae11-41be-6a7e-9e47e9f246d6
---

# SharePoint Server 2019 development platform

This article contains preliminary details around supported development capabilities in the SharePoint Server 2019.

> [!IMPORTANT] 
> This list is still subject to change until actual official release of SharePoint Server 2019. This page will be updated accordingly when there are changes in the supportability statements.

**Supported capabilities**

* Modern and classic pages
* Modern sites - modern team and communication site
    * Classic sites are also supported
* Column formatting
* SharePoint Framework client-side web parts
* SharePoint Framework extensions in modern experiences
* Webhooks for list items
* Asset packaging and automatic JavaScript file hosting from app catalog
* "Tenant" scoped deployment of SharePoint Framework solutions
* ALM APIs for add-in and SharePoint Framework solution management

**Not supported capabilities**

* Site Designs and Site Scripts
* Hub sites
* Site collection app catalog
* "Tenant" properties
* Custom modern themes for communication site or modern team site

Supported SharePoint Framework version for the SharePoint Server 2019 will be SharePoint Framework v1.4.1 (except Microsoft Graph APIs). SharePoint Framework Yeoman generator will be updated to have this option included in the version selection. 

> [!NOTE] 
> If you need to write SharePoint Framework components for SharePoint 2019 before Yeoman generator is updated, you can install SharePoint Framework 1.4.1 and use that as the generator for your SharePoint 2019 components. You should use the 'Online' option in this case, when the environment question is asked in the Yeoman solution flow.

## See also

- [Introduction to SharePoint Server 2019 Preview development platform](https://developer.microsoft.com/en-us/sharepoint/blogs/introduction-to-sharepoint-server-2019-preview-development-platform/)
- [Introduction to SharePoint Server 2019 Preview development platform](https://www.youtube.com/watch?v=IAirEcf_DFc) YouTube video
