---
title: Create a SharePoint hub site using PowerShell
description: Create a SharePoint hub site using PowerShell
ms.date: 2/26/2018
---

# Create a SharePoint hub site

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments.

If you're a global or SharePoint admin in Office 365, you can convert any existing site to a hub site using Microsoft PowerShell.

1. Download and install the latest [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588). If you already have a previous version installed, uninstall it first and then install the latest version.
2. Connect the SharePoint Online Management Shell to SharePoint Online for your organization. For info, see [Connect the SharePoint Online PowerShell](https://go.microsoft.com/fwlink/?linkid=869066).
3. Run the following command:
    ```PowerShell
    Register-SPOHubSites URL
    ```
    (Where *URL* is the URL of the site.) This will convert the site to a hub site and enable the hub site features.
4. If you want only selected users to be able to associate their sites to the hub, create a mail-enabled security group and add the users. By default, all site owners will be able to associate their sites to the hub. For info about creating groups in the Office 365 admin center, see Compare groups. Then run the following command to give the group permission to associate their sites to the hub.
    ```PowerShell
    Grant-SPOHubSiteRights -Identity
    -Principals GroupEmail  
    -Rights Join
    ```
    (Where *Identity* is the URL of the site and *GroupEmail* is the email address of the mail-enabled security group.)

## Additional Hub site details

- We recommend selecting a communication site, or a team site that uses the new template. If you use a classic team site, the hub navigation will need to use modern pages, and hub site settings will only appear on modern pages.
- You can create up to 50 hub sites for an organization.
- If you set up SharePoint Multi-Geo for your organization, only sites within the same geo location can be associated with a hub site.
- When users associated their sites with a hub, it doesn't impact the permissions of either the hub site or the associated sites. It's important to make sure all users you allow to associate sites to the hub have permission to the hub.

## Resources

- [PowerShell cmdlets for SharePoint hub sites](hub-site-powershell.md)
- TBD Link: Set up your SharePoint hub site