---
title: Tools and environments for developing SharePoint Add-ins
ms.prod: SHAREPOINT
ms.assetid: 6906eb86-8270-4098-8106-1e8d0d3c212e
---


# Tools and environments for developing SharePoint Add-ins
Learn your options for creating a development environment for SharePoint Add-ins.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 

There are two basic patterns for development environments for SharePoint Add-ins:
 

-  **The test and debugging SharePoint website is in a SharePoint Online website in an Office 365 subscription.** Typically, Visual Studio is installed to a local computer, but a cloud-based Visual Studio is also an option.
    
 
-  **The test and debugging SharePoint website is on an on-premise, one-server SharePoint farm.** Visual Studio is installed on the same computer.
    
 
Consider the following:
 

- Almost any add-in you create can be deployed to either SharePoint Online or to on-premise SharePoint farms, regardless of which type of environment you use. As a general rule, add-ins that cannot be deployed to SharePoint Online also cannot be developed with it. Examples: add-ins that require  [Full Control permissions](add-in-permissions-in-sharepoint-2013.md) and add-ins that use the [high-trust authorization system](creating-sharepoint-add-ins-that-use-high-trust-authorization.md).
    
 
- You can develop both SharePoint-hosted and provider-hosted SharePoint Add-ins, regardless of which type of environment you use.
    
 
- You can have both on-premise and SharePoint Online test sites.
    
 
- All things considered, the two options are equally easy to set up.
    
 
 **To create the SharePoint Online environment** using an SharePoint Online subscription that you can use for development, see [Create a developer site on an existing Office 365 subscription](create-a-developer-site-on-an-existing-office-365-subscription.md).
 
 **To create the on-premise environment**, see [Set up an on-premises development environment for SharePoint Add-ins](set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md).
 

 **Note**  This topic is only concerned with environments for developing SharePoint Add-ins. If you plan to develop farm solutions, see  [Set up a general development environment for SharePoint 2013](http://msdn.microsoft.com/library/08e4e4e1-d960-43fa-85df-f3c279ed6927%28Office.15%29.aspx). If you plan to do both kinds of development, start with the latter article, and then see  [Set up an on-premises development environment for SharePoint Add-ins](set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md) for additional steps you need to develop SharePoint Add-ins.
 


## Other tooling information


-  [Create a basic SharePoint-hosted add-in by using Napa Office 365 Development Tools](create-a-basic-sharepoint-hosted-add-in-by-using-napa-office-365-development-tools.md)
    
 
-  [Create SharePoint Add-ins in Visual Studio](create-sharepoint-add-ins-in-visual-studio.md)
    
 

## Additional resources
<a name="bk_addresources"> </a>


-  [SharePoint Add-ins](sharepoint-add-ins.md)
    
 

