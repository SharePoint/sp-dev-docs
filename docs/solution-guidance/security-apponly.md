---
title: Accessing SharePoint using an application context, also known as app-only
description: Accessing SharePoint using an application context, also known as app-only
ms.date: 11/25/2025
author: jansenbe
ms.author: bjansen
ms.topic: article
ms.localizationpriority: medium
---

# Accessing SharePoint using an application context, also known as app-only

There are two approaches for doing app-only for SharePoint: 

 - Using an **Entra ID application**: this is the **preferred** method when using SharePoint Online because you can also grant permissions to other Microsoft 365 services (if needed).
 - Using a **SharePoint Azure ACS App-Only principal**: this method is retired and **will stop working from April 2nd 2026**.

Both methods are detailed in following articles: 

 - [Granting access via Entra ID App-Only](security-apponly-azuread.md)
 - [Granting access using SharePoint Azure ACS App-Only (retired!)](security-apponly-azureacs.md)

[!INCLUDE [azure-acs-retirement](../../includes/snippets/azure-acs-deprecation.md)]
