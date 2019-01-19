---
title: SPHubSite object type
description: Contains data describing a SharePoint hub site.
ms.date: 4/20/2018
localization_priority: Normal
---

# SPHubSite object type

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments. 

Contains data describing a SharePoint hub site.


|Name    |Type   |Description |
|--------|-------|------------|
|ID      |GUID   |Identifies the hub site. |
|Title   |string |The display name of the hub site. |
|SiteId  |GUID   |ID of the hub parent site. |
|TenantInstanceId |GUID |The tenant instance ID in which the hub site is located. Use empty GUID for the default tenant instance. |
|SiteUrl |string |URL of the hub parent site.
|logoUrl |string |The URL of a logo to use in the hub site navigation. |
|Description |string |A description of the hub site. |
|Targets |string |List of security groups with access to join the hub site. **Null** if everyone has permission. |

## See also

- [Hub site REST API](hub-site-rest-api.md)
