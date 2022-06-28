---
title: "Migration guide for ISVs"
description: "Learn about using the SharePoint Migration API."
ms.date: 06/28/2021
ms.author: jhendr
author: JoanneHendrickson
manager: pamgreen
audience: Dev
ms.topic: article
ms.subservice: migration-tool
ms.localizationpriority: high
ms.collection:
  - SPMigration
  - M365-collaboration
search.appverid: MET150
---
# Migration guidance for ISVs

This document guides ISVs in delivering a fast and reliable migration experience to customers. It contains the latest Microsoft migration practices and concerns or questions raised by ISVs.

## Use app-based authentication

There are different usage patterns between end user traffic and an application doing background activities such as migration. It is important to identify user traffic versus application traffic.

To provide a stable platform and more reliable service, Microsoft is requesting that ISVs transition from using a user-based authentication to app-based authentication to provide greater reliability to our end users and partners.

Migration is a background task application and should **not** be run in user mode. By transitioning to app-based authentication, you will benefit from the elastic capability of off-peak time to have more resources.

> [!NOTE]
> Microsoft will start enforcing the proper usage roles in Q1 2020. Vendors who continue to run migration in user roles can expect to experience increasing throttling and poor performance.

To learn more on how to register an app ID and how to implement app-based authentication see:

- [How to register an app ID](/azure/active-directory/develop/active-directory-v2-registration-portal)
- [Microsoft Graph Auth guidance](/graph/auth):   Includes an informative video, basics, how to register your app and getting access scenarios
- [Don’t get throttled! SharePoint and OneDrive guide to staying below the limits](https://www.youtube.com/watch?v=_pBHfGGdMfE)

### App-based authentication migration guidance

#### Permission settings

Azure Active Directory (AAD) provides two type of permission : delegated permission and application permissions. For official AAD guidance please see:

- [Permissions and consent in the Azure Active Directory v1.0 endpoint](/azure/active-directory/develop/v1-permissions-and-consent).

For SharePoint and OneDrive migration scenarios, the guidance is to follow the AAD permission specification.

For migration tool that relies on end user signed in and presence, delegated permission is recommended.

For service-based migration tool that run without a signed-in user present such as app that runs as background service, application permission is recommended.

#### Number of App IDs

Questions have been raised by ISV on whether to have a single App ID covering all migration offering products or having multiple App ID per software offering. There is no specific guidance where the ISVs can identify all of their App IDs. Please contact Microsoft for any corner case scenarios.

> [!Note]
> Please register all your migration app IDs with Microsoft to ensure that you receive adequate throughput for your migration jobs.

## Use the Migration API

For migration jobs, the first guidance is to use existing published migration APIs.

### Import API (CreateMigrationJob)

The *CreateMigrationJob* helps the ISVs to import to SharePoint and OneDrive faster and more reliably.

- [SharePoint Import Migration API (CreationMigrationJob)](migration-api-overview.md)

The latest supported features are:

- [Migrating web parts using the Migration API](migrate-webparts-with-migrationapi.md)

### Export API (Asynchronous Metadata Read)

A new migration API, Asynchronous Metadata Read API (Export API) is  available to ISVs. The *AsynchronousMetadataRead* helps ISVs export content from SharePoint and OneDrive with fast and reduced calls. For example, the new API can export all the files and lists related metadata from the  root level of document library in a single call. This reduces the number of calls needed, the chance of being throttled, and improves performance.

To learn more, see [SharePoint Migration Export (Asynchronous Metadata Read) API](export-amr-api.md)

## Switch to the Microsoft Graph API

If a feature is not supported by the migration API, we recommend that you use the Graph API.  If the Graph API does not support the needed migration feature, then use CSOM. However, using CSOM increases the likelihood of being throttled.

- [Graph Guidance: Best practices for discovering files and detecting changes at scale](/onedrive/developer/rest-api/concepts/scan-guidance)

### CSOM Guidance (fallback only)

The following provides guidance on specific CSOM implementation scenarios to help improve migration performance with SharePoint and OneDrive.

#### Enumeration Query Ordering guidance

There are two kinds of enumeration queries, assuming the client intends to read every item with no server-side filtering.

To query for every item in the list, recursively – in other words, the order does not depend on which folder(s) the items are contained in – the query should sort by ID.

`<OrderBy Override="TRUE"><FieldRef name="ID"/></OrderBy>`

To query for every item in a specific folder, the query should sort by the filename, **FileLeafRef**.

`<OrderBy Override="TRUE"><FieldRef name="FileLeafRef"/></OrderBy>`

## Permission guidance

You need to be aware of three key numbers as you plan your migration to OneDrive or SharePoint especially when you have a hierarchy of deeply nested folders. They are: (1) the number of SharePoint unique permission scopes, (2) the number of role assignments, and (3) the total number of items in a list or library. Read the full guidance:

- [Migration guidance for ISVs](migration-isv-guidance.md)

## For migrations over 100TB

For customers migrating greater than 100TB of data, please follow the instructions on how to create a support ticket to help the product team to prepare the backend for the customers.

- [Best practices for improving SharePoint and OneDrive migration performance](/sharepointmigration/sharepoint-online-and-onedrive-migration-speed).

## Escalation and throttling

The primary reason speed is impacted, and throttling occurs, is due to the load that gets generated by calling CSOM and REST APIs. As a result of this load, throttling rules fire that impact the speed, reliability and predictability of the migration. Throttling is used to protect the database and to ensure a good user experience for our customers.

To read the official throttling guidance, see:

- [Avoid getting throttled or blocked in SharePoint Online](https://aka.ms/spo429)

We continue to work to identify issues and improve the API. The asynchronous metadata read API is a direct result of ISV feedback. As an ISV/partner, we value your feedback. Please contact Microsoft if you have further questions.
