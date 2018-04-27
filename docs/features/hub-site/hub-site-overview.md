---
title: SharePoint hub sites overview
description: SharePoint hub sites connect and organize sites based on organizational attributes such as project, department, division, or region. 
ms.date: 4/20/2018
---

# SharePoint hub sites overview

> [!IMPORTANT]
> The SharePoint hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments.

SharePoint hub sites connect and organize sites based on organizational attributes such as project, department, division, or region. You can use PowerShell cmdlets or the SharePoint REST API to automate tasks such as creating, removing, or controlling permissions for hub sites.

For more information about SharePoint hub sites, see [What is a SharePoint hub site](https://go.microsoft.com/fwlink/?linkid=869149).

For more information about creating hub sites, see [Create SharePoint hub sites using PowerShell](create-hub-site-with-powershell.md).

## Additional details

- We recommend that you select a communication site or a team site that uses the modern template. If you use a classic team site, the hub site navigation will only appear on modern pages, including document libraries, lists, and site contents. Hub site settings will only appear on modern pages. 

- You can create up to 50 hub sites for an organization. 

- If you set up [SharePoint Multi-Geo](../solution-guidance/multigeo-introduction.md) for your organization, only sites within the same geographical location can be associated with a hub site. 

- When users associate their sites with a hub site, it doesn't impact the permissions of either the hub site or the associated sites. It's important to ensure that all users you allow to associate sites to the hub site have permission to the hub site. 

- The hub site navigation that is shown on all associated sites is based on the top navigation bar of the hub site. To make programmatic changes to the hub site navigation, you can use the REST API, CSOM API, or PnP PowerShell. 


## See also

- [PowerShell cmdlets for SharePoint hub sites](hub-site-powershell.md)
- [Get to know the SharePoint REST service](../../sp-add-ins/get-to-know-the-sharepoint-rest-service.md)
