---
title: PnP remote provisioning
description: Remote provisioning for your Office 365, SharePoint, and SharePoint Online site collections using features of the add-in model.
ms.date: 01/13/2025
ms.localizationpriority: high
---

# PnP Remote Provisioning

The current recommendation for provisioning artifacts like sites, lists, content types, and pages is to use "remote provisioning." In a nutshell, remote provisioning means utilizing one of the available APIs (SharePoint REST, the SharePoint Client Side Object Model, or the Microsoft Graph) to create those artifacts. Your code runs on your own machine or on a separate server.

[!INCLUDE [pnp-provisioning-engine](../../includes/snippets/open-source/pnp-provisioning-engine.md)]

To create a repeatable process with known parameters, the [SharePoint Developer Community](../community/community.md) created an engine called the PnP Provisioning Engine. This engine allows you to easily create templates and apply them to sites or your tenant. The PnP Provisioning Engine can be called from C# code or by using PnP PowerShell.

See the following resources for more information:

## PnP Remote Provisioning vs Site Designs and Site Scripts

The general recommendation is that if you can provision your artifacts with Site Scripts. The PnP Provisioning Engine extends beyond the scope of site collection artifacts and moves into the territory of provisioning tenant-scoped artifacts.

## PnP remote provisioning resources

|Article|Description|
|:-----|:-----|
|[Introducing the PnP provisioning engine](introducing-the-pnp-provisioning-engine.md)| Introduces the PnP provisioning engine, which was released in April 2015 within the OfficeDev PnP project, and which is updated on a monthly basis in alignment with the release schedule of the Office Dev PnP Core Library.|
|[Configuring the PnP provisioning engine](configuring-the-pnp-provisioning-engine.md)|Learn how to configure the engine by using a JSON configuration file.
|[The PnP Office Open XML File Format](the-pnp-office-open-xml-file-format.md)|Learn about the .PnP file format, which is an Office Open XML file, and how it is built up.
|[PnP provisioning framework](pnp-provisioning-framework.md)| Get a high-level overview of remote provisioning features available for your Office 365 and SharePoint Online site collections as well as an understanding of why creating sandboxed and full-trust solutions is no longer recommended.| 
|[PnP provisioning engine and the Core library](pnp-provisioning-engine-and-the-core-library.md)| Take a high-level look at the remote provisioning process, including a closer look at the OfficeDevPnP.Core library.|
|[PnP provisioning schema](pnp-provisioning-schema.md)| How to use the XML schema to serialize and save your provisioning templates.|
|[Provisioning console application sample](provisioning-console-application-sample.md)| Learn the fundamentals of using the PnP provisioning engine to create and persist, and then apply provisioning templates to new SharePoint site collections.|
|[OfficeDevPnP.Core ](https://github.com/SharePoint/PnP-Sites-Core/tree/master/Core)|The Office 365 Developer PnP Core Component is an extension that encapsulates commonly used remote CSOM/REST operations as reusable extension methods to support CSOM provisioning objects.|

## See also

- [Office 365 development and SharePoint PnP solution guidance](office-365-development-patterns-and-practices-solution-guidance.md)
