---
title: Security requirements for using page transformation
description: Explains the required permission levels for page transformation
ms.date: 01/30/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Security requirements for using page transformation

> [!IMPORTANT]
> The SharePoint PnP Modernization framework is continuously evolving, checkout [the release notes](https://github.com/SharePoint/sp-dev-modernization/tree/master/Tools/SharePoint.Modernization/Modernization%20Framework%20release%20notes.md) to stay up to date on the latest changes. If you encounter problems please file an issue in the [sp-dev-modernization GitHub issue list](https://github.com/SharePoint/sp-dev-modernization/issues).

Before an existing wiki or web part page can be transformed to a modern client side page you do need to have the needed SharePoint permissions. This short article explains what permissions are required.

## General security requirements

These requirements apply always, regardless whether you're using page transformation from PowerShell, .Net or the [Page Transformation UI](https://aka.ms/sppnp-pagetransformationui) solution.

Page Transformation feature | SharePoint Permission | Included in default permission levels
----------------------------|-----------------------|--------------------------------------
Create a modern version of the wiki or web part page | Edit Items | Contribute, Edit, Full Control
Copy the page metadata | Edit Items | Contribute, Edit, Full Control
Copy the item level permissions (if any) | Manage Permissions | Full Control

Above chart shows that with the default `Edit` or `Contribute` permission level you can use page transformation but if there's item level permissions on the source page these are not copied over. Using the `Full Control` permission level does enable the copy of item level permissions as that one by default includes the `Manage Permissions` permission.

## Page Transformation UI security

The [Page Transformation UI](https://aka.ms/sppnp-pagetransformationui) solution does operate as the logged on user and therefore the logged on user does need to have the permissions as described in the previous chapter. When the user does not have the `Edit Items` permission then the UI entry points (Ribbon buttons) will not accessible.
