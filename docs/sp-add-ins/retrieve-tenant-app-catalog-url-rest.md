---
title: Retrieve the URL of the tenant app catalog
description: Use the SharePoint REST API to retrieve the URL of the tenant app catalog
ms.date: 8/24/2018
ms.prod: sharepoint
localization_priority: Priority
---

# Retrieve the URL of the tenant app catalog

To get the URL of the tenant app catalog, execute the following web request:

```text
GET https://contoso.sharepoint.com/_api/SP_TenantSettings_Current
accept: application/json;odata=nometadata
```

> [!NOTE]
> The web request to retrieve the URL of the tenant app catalog, can be executed on any SharePoint site.

If the request succeeds, you will get the following response from SharePoint:

```json
{
  "CorporateCatalogUrl": "https://contoso.sharepoint.com/sites/apps"
}
```

The **CorporateCatalogUrl** property will contain the URL of the tenant app catalog in your SharePoint tenant.

> [!IMPORTANT]
> If you have just created the tenant app catalog, the value of the **CorporateCatalogUrl** property might be `null`. It takes a moment for the tenant app catalog to be registered in the tenant, so you need to wait a few minutes after creating the tenant app catalog before using this API.
