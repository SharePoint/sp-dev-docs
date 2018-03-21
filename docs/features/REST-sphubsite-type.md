---
title: SPHubSite REST type
description: SPHubSite REST type
ms.date: 2/26/2018
---

# SPHubSite REST type

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments.

Contains data describing a SharePoint Hub site.


|Name    |Type   |Description |
|--------|-------|------------|
|ID      |GUID   |Identifies the hub site. |
|Title   |string |The display name of the hub. |
|SiteId  |GUID   |ID of the hub's parent site. |
|TenantInstanceId |GUID |The tenant instance ID in which the site hub is located. Use empty GUID for the default tenant instance. |
|SiteUrl |string |URL of the hub parent site.
|LogoUrl |string |The URL of a logo to use in the hub site navigation. |
|Description |string |A description of the hub site. |
|Targets |string |List of security groups with access to join the hub site. Null if everyone has permission. |
