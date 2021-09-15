---
title: External sharing after Microsoft 365 group connection
description: Connect a Microsoft 365 group to an existing SharePoint site can result in different external sharing settings between the Microsoft 365 group and the SharePoint site
ms.date: 06/19/2018
ms.prod: sharepoint
ms.localizationpriority: medium
---

# Impact of Microsoft 365 group connection on external sharing

In SharePoint Online you can configure a site's external sharing to be set to one of the below configurations:

- **Anyone**: Users can share files and folders with links that don't require sign-in
- **New and existing external users**: External users must sign in or provide a verification code
- **Existing external users**: Only users already in your organization's directory
- **Only people in current organization**: No external sharing allowed

Once a site get's connected to a Microsoft 365 group then the Microsoft 365 group's external sharing settings play a role: by default external sharing of Microsoft 365 groups is enabled, which implies that you can for example use the Azure AD management UI and share the created group with an external. From a SharePoint perspective however the external sharing settings defined on the SharePoint site overrule the settings on the Microsoft 365 group.

> [!IMPORTANT]
> If your site is configured to not allow external users then that setting will be respected, even if the Microsoft 365 group does allow external sharing.
