---
title: SPHubSite object type
description: The SPHubSite object type contains data describing a SharePoint hub site.
ms.date: 06/28/2022
ms.localizationpriority: medium
---

# SPHubSite object type

Contains data describing a SharePoint hub site.


|Name    |Type   |Description |
|--------|-------|------------|
|ID      |GUID   |Identifies the hub site. |
|Title   |string |The display name of the hub site. |
|SiteId  |GUID   |ID of the hub parent site. |
|TenantInstanceId |GUID |The tenant instance ID in which the hub site is located. Use empty GUID for the default tenant instance. |
|SiteUrl |string |URL of the hub parent site.
|LogoUrl |string |The URL of a logo to use in the hub site navigation. |
|Description |string |A description of the hub site. |
|Targets |string |List of security groups with access to join the hub site. **Null** if everyone has permission. |

## See also

- [Hub site REST API](hub-site-rest-api.md)
