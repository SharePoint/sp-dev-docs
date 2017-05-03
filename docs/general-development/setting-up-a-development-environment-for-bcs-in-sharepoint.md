---
title: Setting up a development environment for BCS in SharePoint
ms.prod: SHAREPOINT
ms.assetid: d83c8a43-49dd-47eb-94d4-23aa2cf71a9a
---


# Setting up a development environment for BCS in SharePoint
Learn about setting up a development environment for developing SharePoint solutions and SharePoint Add-ins using Business Connectivity Services (BCS).
You can create SharePoint solutions and SharePoint Add-ins by using BCS on a client computer or on a server computer, depending on the type of solution you are building.
  
    
    


## Building server-based solutions and SharePoint Add-ins
<a name="SP15SettingupdevenvBCS_server"> </a>

Typically, the majority of BCS solutions and apps will be hosted in a server environment. These server solutions and apps provide the greatest amount of flexibility with all of the features of BCS in SharePoint.
  
    
    
For server-based solutions, it is usually best to develop the solution on a local computer where SharePoint is installed and then, when the solution is built and tested, deploy it to the production server. You can install a development environment on either a host workstation or on one or more virtual computers that are running Windows Server 2008 Service Pack 2.
  
    
    

### Setting up an environment to build SharePoint Add-ins

The environment that you use for developing apps with BCS is the same as for developing any SharePoint Add-in. 
  
    
    
To learn how to install the components of a development environment, including the operating system, SharePoint, Visual Studio 2012, and Office Developer Tools for Visual Studio 2012, follow the instructions in  [Set up a general development environment for SharePoint](set-up-a-general-development-environment-for-sharepoint.md).
  
    
    

## Building client-based solutions
<a name="SP15SettingupdevenvBCS_client"> </a>

Client-based solutions enable Office 2013 client applications to access the same external data that a SharePoint solution or SharePoint Add-in can. You can do this by implementing code using the BCS Client Cache. The client components communicate with BCS through client-side code and the client cache. This provides Office client applications with the rich data that is available to SharePoint through external content types.
  
    
    
Because these solutions don't require code, you can use SharePoint Designer 2013 and Office 2013.
  
    
    

## Additional resources
<a name="SP15SettingupdevenvBCS_addresources"> </a>


-  [Set up an on-premises development environment for SharePoint Add-ins](http://msdn.microsoft.com/library/b0878c12-27c9-4eea-ae3b-7e79e5a8838d%28Office.15%29.aspx)
    
  
-  [Get started with Business Connectivity Services in SharePoint](get-started-with-business-connectivity-services-in-sharepoint.md)
    
  
-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint.md)
    
  
-  [SharePoint development overview](sharepoint-development-overview.md)
    
  

