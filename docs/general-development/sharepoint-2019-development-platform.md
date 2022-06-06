---
title: SharePoint Server 2019 development platform
description: Describes the SharePoint Server 2019 development platform and details the platform's supported and unsupported capabilities.
ms.date: 01/29/2020
ms.prod: sharepoint
ms.assetid: e0602381-ae11-41be-6a7e-9e47e9f246d6
ms.localizationpriority: high
---

# SharePoint Server 2019 development platform

Article contains details around supported development capabilities in the SharePoint 2019.

## Supported capabilities

- Modern and classic pages
- Modern sites - modern team and communication site
  - Classic sites are also supported
- Column formatting - Only supports "Basic Styled Syntax", "Excel Styled Syntax" is not supported.
- SharePoint Framework client-side web parts with SharePoint Framework v1.4.x
- SharePoint Framework extensions in modern experiences with SharePoint Framework v1.4.x
- Webhooks for list items
- Asset packaging and automatic JavaScript file hosting from app catalog
- "Tenant" scoped deployment of SharePoint Framework solutions
- ALM APIs for add-in and SharePoint Framework solution management

## Not supported capabilities

- Site Designs and Site Scripts
- Hub sites
- Site collection app catalog
- "Tenant" properties
- Custom modern themes for communication site or modern team site

You should always have the latest SharePoint Framework version installed and choose the target environment for the newly created solution to be **SharePoint 2019**. This option will create you an optimal solution structure with the matching SharePoint Framework version for SharePoint 2019.

Visual Studio 2017 v15.9 or includes SharePoint 2019 tooling extensions for SharePoint add-ins, farm solutions, and sandbox solutions.

> [!IMPORTANT]
> There are no plans to change or upgrade the supported SharePoint Framework version for SharePoint 2019.

> [!NOTE]
> By a rule of a thumb, SharePoint Framework works with any JavaScript framework version. It's however important to evaluate and validate behavior of the chosen JavaScript framework in the used SharePoint User Interface. There are differences between the support of the different web technologies on classic and modern experiences. Some newer JavaScript framework can take advantage of capabilities which are not supported on the SharePoint 2019 platform.

## See also

- [Getting started with creating SharePoint Framework solutions for SharePoint 2019](https://www.youtube.com/watch?v=uewOxEnw2_A) YouTube video
- [Community call where SharePoint 2019 developer platform is covered](https://www.youtube.com/watch?v=qPmr7c2B0uk) YouTube video
