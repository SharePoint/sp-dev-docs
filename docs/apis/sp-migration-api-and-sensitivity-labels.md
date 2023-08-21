---
title: "Sensitivity labels and the SharePoint Migration API"
description: Learn how to have sensitivity labels applied to content before migration with the SharePoint Migration API.
ms.date: 06/28/2022
ms.author: jhendr
author: JoanneHendrickson
manager: serdars
search.appverid: MET150
ms.localizationpriority: high
ms.subservice: migration-tool
---
# Sensitivity Labels and the SharePoint Migration API

Sensitivity labels cannot be applied to files and folders using the SharePoint Migration API.  If you want to have sensitivity labels applied to your content being migrated to Microsoft 365, we recommend using the Microsoft Information Protection SDK.  There currently isn't a parameter in the API to apply sensitivity labels to files.

**Step 1:**

Before you migrate your content with the Migration API, become familiar with how sensitivity labels work in Microsoft 365 and learn about the Microsoft Information Protection SDK:

- [Enable sensitivity labels for Offices files in SharePoint and OneDrive](/microsoft-365/compliance/sensitivity-labels-sharepoint-onedrive-files)
- [Microsoft Information Protection SDK](/information-protection/develop/overview)

**Step 2:**

Download and configure the Microsoft Information Protection SDK. The article listed here shows you how to set up and configure your Microsoft 365 subscription and client workstation, in preparation for using the SDK.

- [Microsoft Information Projection (MIP) SDK setup and configuration](/information-protection/develop/setup-configure-mip)

**Step 3:**

Apply sensitivity labels using the MIP SDK.

If you're currently using Azure Information Protection, you must migrate your labels to the Microsoft Purview compliance portal. For more information on the process, see [How to migrate Azure Information Protection labels to unified sensitivity labels](/azure/information-protection/configure-policy-migrate-labels).

**Step 4:**

Migrate content using the [SharePoint Import Migration API (CreationMigrationJob)](migration-api-overview.md)
