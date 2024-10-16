---
title: SharePoint Embedded Overview
description: Microsoft SharePoint Embedded is a cloud-based file and document management system suitable for use in any application. SharePoint Embedded is a new API-only solution that enables app developers to harness the power of the Microsoft 365 file and document storage platform for any app, and is suitable for enterprises building line-of-business applications and ISVs building multitenant applications.
ms.date: 08/17/2024
ms.localizationpriority: high
---

# Overview of SharePoint Embedded

Microsoft SharePoint Embedded is a cloud-based file and document management system suitable for use in any application. SharePoint Embedded is a new API-only solution that enables app developers to harness the power of the Microsoft 365 file and document storage platform for any app, and is suitable for enterprises building line-of-business applications and ISVs building multitenant applications.

SharePoint Embedded allows you to integrate advanced Microsoft 365 features into your apps including full-featured collaborative functions from Office, Purview's security and compliance tools, and Copilot capabilities.

> [!IMPORTANT]
> Help us shape the future of SharePoint Embedded!
> Take our [quick survey](https://forms.microsoft.com/r/1YpGd2pAUS) and share your experience!

## App documents stay in their Microsoft 365 tenant

When a consumer uses a SharePoint Embedded application in their Microsoft 365 tenant, SharePoint Embedded creates another partition within their tenant. This storage partition doesn't have a user experience and the documents in the partition are only accessible via APIs. This means that all documents will be accessible to the developer’s application, but the documents will only reside in the consumer’s Microsoft 365 tenant. Within this new storage partition inside of a Microsoft 365 tenant, a SharePoint Embedded application can create many "File Storage Containers" for storing content.

## Introducing File Storage Containers

SharePoint Embedded applications use Microsoft Graph APIs to store files and documents in a new entity called a "File Storage Container” or Container for short.  If you’re an ISV, your app will create these containers in your customer’s Microsoft 365 tenant, and if you’re an enterprise, your app will create these containers in your own tenant. Each container provides a place to store files - you can think of them as similar to an API-only Document Library in SharePoint, but with some slight differences. Your app can create many of these containers inside each tenant that uses your app, and each container can be granted permissions separately storing many files with multiple terabytes of content.

SharePoint Embedded containers are dedicated to and accessible by just your app, so the files and documents your app depends on are isolated and secure within that tenant boundary.

## App-managed content experiences

By default, the content stored within a Microsoft 365 tenant by a SharePoint Embedded application is only accessible through that owning application. Applications using SharePoint Embedded also provide the user experience layer for accessing and managing content, using some of the rich content capabilities that Microsoft 365 offers such as:

- Core content management features like support for any file type and folder structure, searching, sharing, automatic versioning, recycle-bin, and more
- Collaboration features like view, edit, and co-authoring Office Word, Excel, and PowerPoint documents in Office Web and Desktop

SharePoint Embedded is used by several types of applications:

- Certain Microsoft products use SharePoint Embedded to manage customer content, such as Loop and Designer.
- ISVs can use SharePoint Embedded in their apps to manage content within their customer’s Microsoft 365 tenant
- Enterprises can use SharePoint Embedded to manage and store content within their own Microsoft 365 tenant, but outside of regular Microsoft 365 entitlements

## Consumer Microsoft 365 settings apply to app documents

All documents stored in the SharePoint partition created by the SharePoint Embedded app are in the consumer’s Microsoft 365 tenant and therefore are subject to the consumer’s Microsoft 365 tenant settings.

This includes settings from Microsoft Purview compliance, risk, and security settings, documents can be opened from Office clients, and customers can use the Office web clients to view and collaborate on the documents. Choosing applications that are built on SharePoint Embedded provides the app consumer Microsoft Purview security and compliance capabilities on that app content, such as:

- eDiscovery
- Auditing
- Data loss prevention (DLP)
- Retention policies, sensitivity labels, conditional access

## Understanding the costs and billing for SharePoint Embedded content

Microsoft 365 customers have different entitlements related to storage, usage, and features depending on the licenses the customer has purchased.

The partition created in the consumer’s Microsoft 365 tenant by a SharePoint Embedded app doesn’t count towards other Microsoft 365 entitlements including the total amount of Microsoft SharePoint storage that can be used by your organization. Instead, the partition in the consumer’s Microsoft 365 tenant by the SharePoint Embedded app are billed separately through an Azure subscription on a pay-as-you-go metered consumption model that’s based on total storage and the number of API calls.

> [!NOTE]
> Learn more about billing for SharePoint Embedded, see [Billing Meters](concepts/admin-exp/billing/meters.md).

## Get Started with SharePoint Embedded

Create a "File Storage Container" in 15 minutes or less:

- [Free trial: SharePoint Embedded for Visual Studio Code](./getting-started/spembedded-for-vscode.md)

Follow manual set-up on SharePoint Embedded from the following Microsoft Learning modules:

- [Microsoft Learning: SharePoint Embedded - overview & configuration](/training/modules/sharepoint-embedded-setup)
- [Microsoft Learning: SharePoint Embedded - building applications](/training/modules/sharepoint-embedded-create-app)
