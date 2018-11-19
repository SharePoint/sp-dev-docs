---
title: SharePoint Server 2019 development platform
ms.date: 07/12/2018
ms.prod: sharepoint
ms.assetid: e0602381-ae11-41be-6a7e-9e47e9f246d6
---

# SharePoint Server 2019 development platform

This article contains details around supported development capabilities in the SharePoint 2019.

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

Supported SharePoint Framework version for the SharePoint 2019 will be SharePoint Framework v1.4.1 (except Microsoft Graph APIs). If you use the SharePoint Framework v1.7, you can target scaffolded solution to SharePoint 2019, which will ensure that packages are correct for your target environment.

Visual Studio 2017 v15.9 or includes SharePoint 2019 tooling extensions for SharePoint add-ins, farm solutions and sandbox solutions. 

## See also

- [Community call where SharePoint 2019 developer platform is covered]https://www.youtube.com/watch?v=qPmr7c2B0uk) YouTube video
