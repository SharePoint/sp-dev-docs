---
title: Tools and environments for developing SharePoint Add-ins
description: Create a development environment for SharePoint Add-ins on a SharePoint Online site or an on-premises farm.
ms.date: 11/03/2017
ms.prod: sharepoint
---

# Tools and environments for developing SharePoint Add-ins

There are two basic patterns for development environments for SharePoint Add-ins. The test and debugging SharePoint website can be on:

-  **A SharePoint Online website in an Office 365 subscription.** Typically, Visual Studio is installed to a local computer, but a cloud-based Visual Studio is also an option.

-  **An on-premises, one-server SharePoint farm.** Visual Studio is installed on the same computer.
 
Consider the following:

- Almost any add-in that you create can be deployed to either SharePoint Online or to on-premises SharePoint farms, regardless of which type of environment you use. As a general rule, add-ins that cannot be deployed to SharePoint Online also cannot be developed with it; for example: add-ins that require [Full Control permissions](add-in-permissions-in-sharepoint.md) and add-ins that use the [high-trust authorization system](creating-sharepoint-add-ins-that-use-high-trust-authorization.md).

- You can develop both SharePoint-hosted and provider-hosted SharePoint Add-ins, regardless of which type of environment you use.

- You can have both on-premises and SharePoint Online test sites.

- All things considered, the two options are equally easy to set up.
    
**To create the SharePoint Online environment** by using a SharePoint Online subscription that you can use for development, see [Create a developer site on an existing Office 365 subscription](create-a-developer-site-on-an-existing-office-365-subscription.md).
 
**To create the on-premises environment**, see [Set up an on-premises development environment for SharePoint Add-ins](set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md).
 
> [!NOTE]
> This topic is only concerned with environments for developing SharePoint Add-ins. If you plan to develop farm solutions, see [Set up a general development environment for SharePoint](http://msdn.microsoft.com/library/08e4e4e1-d960-43fa-85df-f3c279ed6927%28Office.15%29.aspx). 

> If you plan to do both kinds of development, start with the latter article, and then see [Set up an on-premises development environment for SharePoint Add-ins](set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md) for additional steps you need to develop SharePoint Add-ins.


## See also
<a name="bk_addresources"> </a>

- [SharePoint Add-ins](sharepoint-add-ins.md)
- [Create SharePoint Add-ins in Visual Studio](create-sharepoint-add-ins-in-visual-studio.md)
    
 

