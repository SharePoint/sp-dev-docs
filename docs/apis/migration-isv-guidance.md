---
title: "Migration guide for ISVs"
ms.reviewer: 
ms.author: jhendr
author: JoanneHendrickson
manager: pamgreen
audience: Dev
ms.topic: article
ms.prod: sharepoint-server-itpro
localization_priority: Priority
ms.collection: 
- IT_Sharepoint_Server_Top
- SPMigration
- M365-collaboration
search.appverid: MET150
ROBOTS: NOINDEX, NOFOLLOW
ms.custom: 
ms.assetid: 
---
# Migration guidance for ISVs

This document provides guidance for ISVs to deliver a fast and reliable migration experience to customers. It has the latest Microsoft migration practices and addresses common concerns or questions raised by ISV. The page will be updated on regular basis and the priority of the guidance is listed in the order of publication.

## Use app-based authentication
There are different usage patterns between end user traffic and an application doing background activities such as migration. It is important to identify user traffic versus application traffic. 

To provide a stable platform and more reliable service, Microsoft is requesting that ISVs transition from using a user-based authentication to app-based authentication to provide greater reliability to our end users and partners. 

Migration is a background task application and should **not** be run in user mode. By transitioning to app-based authentication, you will benefit from the elastic capability of off-peak time to have more resources.  

> [!Note]
>Microsoft will soon begin enforcing the proper usage roles. Vendors who continue to run migration in user roles can expect to experience increasing throttling and poor performance.

To learn more on how to register an app ID and how to implement app-based authentication see:

- [How to register an app ID](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Fazure%2Factive-directory%2Fdevelop%2Factive-directory-v2-registration-portal&data=04%7C01%7CWan.Wu%40microsoft.com%7C7c98484b20de4fc80fb308d6da3e3509%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C636936358039977299%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C-1&sdata=L%2BObRVyCBKPwvvY7MUUsWX%2B8yEIbzqaTkBjcmNjc1vk%3D&reserved=0)
- [Microsoft Graph Auth guidance](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Fgraph%2Fauth%2F&data=04%7C01%7CWan.Wu%40microsoft.com%7C7c98484b20de4fc80fb308d6da3e3509%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C636936358039977299%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C-1&sdata=ZrFqXsLT3BtT8ynnlLQH9w7JZIOw07zu2X3EYbBmfD4%3D&reserved=0):   Includes an informative video, basics, how to register your app and getting access scenarios
- [Don’t get throttled! SharePoint and OneDrive guide to staying below the limits](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fmyignite.techcommunity.microsoft.com%2Fsessions%2F65661&data=04%7C01%7CWan.Wu%40microsoft.com%7C7c98484b20de4fc80fb308d6da3e3509%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C636936358039987303%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C-1&sdata=%2FVCt7P794Lwn0hvpaa4bQicVeqHIPuOM8Vg58nkL16A%3D&reserved=0)

### App-based authentication migration guidance

#### Permission settings
Azure Active Directory (AAD) provides two type of permission : delegated permission and application permissions. For official AAD guidance please see:

- [Permissions and consent in the Azure Active Directory v1.0 endpoint](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-permissions-and-consent). 

For Sharepoint and Onedrive migration scenarios, the guidance is to follow the AAD permission specification. 

For migration tool that relies on end user signed in and presence, delegated permission is recommended. 

For service-based migration tool that run without a signed-in user present such as app that runs as background service, application permission is recommended.

#### Number of App IDs

Questions have been raised by ISV on whether to have a single App ID covering all migration offering products or having multiple App ID per software offering. There is no specific guidance where the ISVs can identify all of their App IDs. Please contact Microsoft for any corner case scenarios. 

>[!Note]
> Please register all your migration app IDs with Microsoft to ensure that you receive adequate throughput for your migration jobs.


## Use the Migration API 
For migration jobs, the first guidance is to use existing published migration APIs.

### Import API (CreateMigrationJob)

The *CreateMigrationJob* helps the ISVs to import to SharePoint and OneDrive faster and more reliably. 

- [Create Migration Job (Import API)](https://docs.microsoft.com/en-us/sharepoint/dev/apis/migration-api-overview)

The lastest supported features are:

- Migrate web parts using the Migration API


### Export API (Asynchronous Metadata Read)

A new migration API, Asynchronous Metadata Read API (Export API) is currently being made available to ISVs for testing.  If you are interested, please contact Microsoft with your test tenant information.

- [Asynchronous Metadata Read (Export API)](https://docs.microsoft.com/en-us/sharepoint/dev/apis/export-amr-api)

The *AsynchronousMetadataRead* helps the ISVs export content from SharePoint and OneDrive.

## Switch to the Microsoft Graph API 
If a feature is not supported by the migration API, we recommend that you use the Graph API.  If the Graph API does not support the needed migration feature, then use CSOM. However, using CSOM increases the likelihood of being throttled. 

- [Graph Guidance: Best practices for discovering files and detecting changes at scale](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/concepts/scan-guidance?view=odsp-graph-online)

### CSOM Guidance (fallback only)

The following provides guidance on specific CSOM implementation scenarios to help improve migration performance with Sharepoint and OneDrive.

#### Enumeration Query Ordering guidance 
There are two kinds of enumeration queries, assuming the client intends to read every item with no server-side filtering.

To query for every item in the list, recursively – in other words, the order does not depend on which folder(s) the items are contained in – the query should sort by ID.

    <OrderBy Override="TRUE"><FieldRef name="ID"/></OrderBy>
 
To query for every item in a specific folder, the query should sort by the filename, **FileLeafRef**.

    <OrderBy Override="TRUE"><FieldRef name="FileLeafRef"/></OrderBy>


## For migrations over 100TB 

For customers migrating greater than 100TB of data, please follow the instructions on how to create a support ticket to help the product team to prepare the backend for the customers. 

• [Best practices for improving SharePoint and OneDrive migration performance](https://docs.microsoft.com/en-us/sharepointmigration/sharepoint-online-and-onedrive-migration-speed). 
 
## Escalation and throttling
 
The primary reason speed is impacted, and throttling occurs, is due to the load that gets generated by calling CSOM and REST APIs. As a result of this load, throttling rules fire that impact the speed, reliability and predictability of the migration. Throttling is used to protect the database and to ensure a good user experience for our customers.
 
To read the official throttling guidance, see:

- [Avoid getting throttled or blocked in SharePoint Online](https://myignite.techcommunity.microsoft.com/sessions/65661)

We continue to work to identify issues and improve the API. The asynchronous metadata read API is a direct result of ISV feedback. As an ISV/partner, we value your feedback. Please contact Microsoft if you have further questions. 

