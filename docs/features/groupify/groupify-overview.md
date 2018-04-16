---
title: Overview of the ‘Connect to new Office 365 Group’ feature 
description: Overview of the ‘Connect to new Office 365 Group’ feature from development perspective
ms.date: 4/16/2018
---

# Overview of the ‘Connect to new Office 365 Group’ feature 

> [!IMPORTANT]
> The option to connect an Office 365 group to an existing site is **not** yet available and will be released during Q2 of calendar year 2018.

With the ‘Connect to new Office 365 Group’ feature, you can augment your team site collaboration capabilities with the benefits of other group services such as Outlook, Planner, Microsoft Teams, etc.  This keeps your site, its content, permissions and customizations intact and eliminates the need to migrate content to a new group-backed site.  

## What happens when you connect your site to an Office 365 Group? 

When you “groupify” your site, a number of things will happen: 

- A **new** Office 365 group will be created and that group will be connected to your site collection 
- A **new** modern home page will be created in your site and set as the site's home page 
- The new group's Owners will now be the site collection administrators 
- The new group's Owners will be added to your site's Owners group 
- The new group's Members will be added to your site's Members group 

Once connected to an Office 365 group the site behaves like a modern group connected team site, so members added to the Office 365 Group will have access to the site and other group resources (e.g. Outlook mailbox, Planner, optional Microsoft Teams, etc.)  


## Additional details 

- An admin setting exists that specifies whether this feature is available to site administrators in the classic team site UI.  Tenant admins will always be able to connect team sites to new Office 365 Groups using PowerShell cmdlet or API 
- Group connection can be performed for top level site collections only.  You cannot connect subsites to Office 365 Groups 
- If executed via UI, group connection is only available for the Team Site template (STS#0) 
- Since this process results in the creation of a new Office 365 Group, whose membership must be managed independently of the site’s membership.  To ensure that users 


## Resources

- [Connect a classic experience SharePoint team site to a new Office 365 Group](https://docs.microsoft.com/en-us/sharepoint/dev/transform/modernize-connect-to-office365-group)
- [Modernization readiness scanner tool](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.Modernization)
- [PowerShell cmdlet to connect a SharePoint team site to a new Office 365 Group](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Set-SPOSiteOffice365Group)

