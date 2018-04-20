---
title: SPHubSiteData object type
description: Contains data describing a SharePoint hub site.
ms.date: 4/20/2018
---

# SPHubSiteData object type

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments. 

Contains data describing a SharePoint hub site.

|Name     |Type   |Description |
|---------|-------|------------|
|themeKey |string | Identifies the theme currently applied to all associated sites. |
|name     |string |The name of the hub site. |
|url  |string   |Full URL of the hub site. |
|LogoUrl |string |The URL of a logo to use in the hub site navigation. |
|usesMetadataNavigation |Boolean | **True** if publishing features are enabled on the hub parent site; otherwise, **false**. |
|navigation |SP.NavigationNode[] | **navigation** is only list if **usesMetadataNavigation** is **false**. |


### Navigation node properties

|Name     |Type                     |Description                        |
|---------|-------------------------|-----------------------------------|
|Id       |number                   |ID of the navigation node          |
|Title    |string                   |Text of the navigation node        |
|Url      |string                   |URL the navigation node points to  |
|ParentId |number                   |ID of the parent navigation node   |
|Children |List of navigation nodes |List of child navigation nodes     |


## See also

- [Hub site REST API](hub-site-rest-api.md)