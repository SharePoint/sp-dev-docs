---
title: SPHubSiteData REST type
description: SPHubSiteData REST type
ms.date: 2/26/2018
---

# SPHubSiteData REST type

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments.

Contains data describing a SharePoint Hub site.

|Name     |Type   |Description |
|---------|-------|------------|
|themeKey |string |  |
|name     |string |The name of the hub site. |
|url  |string   |Full URL of the hub site. |
|LogoUrl |string |The URL of a logo to use in the hub navigation. |
|usesMetadataNavigation |Boolean |  |
|navigation |SPWeb.SerializableNavigationNode[] | **navigation** is only list if **usesMetadataNavigation** is false. |