---
title: Overview of programming SharePoint hub sites
description: Overview of programming SharePoint hub sites
ms.date: 2/26/2018
---

# Overview of programming SharePoint hub sites

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments.

SharePoint hub sites connect and organize sites based on organizational attributes such as project, department, division, or region. Use PowerShell cmdlets, or the SharePoint REST API to automate tasks such as creating, removing, or controlling permissions for hub site.

For more information on SharePoint hub sites, see [What is a SharePoint hub site](https://go.microsoft.com/fwlink/?linkid=869149).

For more information on creating hub sites, see [Creating a SharePoint hub site using PowerShell](create-hub-site-with-powershell.md).

## Additional Hub site details

- We recommend selecting a communication site, or a team site that uses the new template. If you use a classic team site, the hub site navigation will only appear on modern pages, including document libraries, lists, and site contents. Hub site settings will only appear on modern pages.
- You can create up to 50 hub sites for an organization.
- If you set up SharePoint Multi-Geo for your organization, only sites within the same geo location can be associated with a hub site.
- When users associate their sites with a hub site, it doesn't impact the permissions of either the hub site or the associated sites. It's important to make sure all users you allow to associate sites to the hub site have permission to the hub site.

## Resources

- [What is a SharePoint hub site](https://go.microsoft.com/fwlink/?linkid=869149)
- [Creating a SharePoint hub site using PowerShell](create-hub-site-with-powershell.md)
- [PowerShell cmdlets for SharePoint hub sites](hub-site-powershell.md)
- [Get to know the SharePoint REST service](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service)