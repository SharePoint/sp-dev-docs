---
title: Overview of the Connect to new Office 365 group feature 
description: Augment your team site collaboration capabilities with the benefits of other group services such as Outlook, Planner, and Microsoft Teams.
ms.date: 4/23/2018
---

# Overview of the "Connect to new Office 365 group" feature

> [!IMPORTANT]
> The option to connect an Office 365 group to an existing site is **not** yet available and will be released during Q2 of calendar year 2018.

With the **Connect to new Office 365 group** feature, you can augment your team site collaboration capabilities with the benefits of other group services such as Outlook, Planner, and Microsoft Teams. This keeps your site, its content, permissions, and customizations intact and eliminates the need to migrate content to a new group-backed site.  

## What happens when you connect your site to an Office 365 group? 

When you connect your site to a new Office 365 group, a number of things happen:

- A new Office 365 group is created, and that group is connected to your site collection
- A new modern home page is created on your site and set as the site's home page
- The group's Owners are now the site collection administrators
- The group's Owners are added to your site's Owners group
- The group's Members are added to your site's Members group

After your site is connected to an Office 365 group, it behaves like a modern group-connected team site, so members added to the Office 365 group have access to the site and other group resources (such as Outlook mailbox, Planner, and optional Microsoft Teams).


## Additional details 

- An admin setting exists that specifies whether this feature is available to site administrators in the classic team site UI.  Tenant admins will always be able to connect team sites to new Office 365 groups by using PowerShell cmdlets or API. 
- Group-connection can be performed for top-level site collections only. You cannot connect subsites to Office 365 groups. 
- If executed via the UI, group-connection is only available for the Team site template (STS#0). 
- Because this process results in the creation of a new Office 365 group, membership must be managed independently of the site’s membership.  


## See also

- [Connect a classic SharePoint team site to a new Office 365 group](../../transform/modernize-connect-to-office365-group.md)
- [SharePoint Modernization scanner tool](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.Modernization)
- [PowerShell cmdlet to connect a SharePoint team site to a new Office 365 group](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Set-SPOSiteOffice365Group)
- [Modernize your classic SharePoint sites](../../transform/modernize-classic-sites.md)





