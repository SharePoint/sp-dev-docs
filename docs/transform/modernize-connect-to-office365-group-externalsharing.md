---
title: External sharing after Office 365 group connection
description: Connect an Office 365 group to an existing SharePoint site can result in different external sharing settings between the Office 365 Group and the SharePoint site
ms.date: 06/19/2018
ms.prod: sharepoint
---

# Impact of Office 365 Group connection on external sharing

In SharePoint Online you can configure a site's external sharing to be set to one of the below configurations:

- **Anyone**: Users can share files and folders with links that don't require sign-in
- **New and existing external users**: External users must sign in or provide a verification code
- **Existing external users**: Only users already in your organization's directory
- **Only people in current organization**: No external sharing allowed

Once a site get's connected to an Office 365 Group then the Office 365 Group's external sharing settings play a role: by default external sharing of Office 365 groups is enabled, which implies that you can for example use the Azure AD management UI and share the created group with an external. From a SharePoint perspective however the external sharing settings defined on the SharePoint site overrule the settings on the Office 365 group.

> [!IMPORTANT]
> If your site is configured to not allow external users then that setting will be respected, even if the Office 365 group does allow external sharing.
