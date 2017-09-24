---
title: Virtual directories in SharePoint solutions
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: c26c4160-31be-4358-89cf-082b8a1e6a6c
---


# Virtual directories in SharePoint solutions
Learn about how changes in the virtual directory system affect how you create farm solutions in SharePoint.
## Make your solutions compatible with the new UI mode system

When you are using the Microsoft SharePoint 2010 Software Development Kit (SDK), but developing for SharePoint, there is a change in the virtual directory system that you need to consider as you work. The change is a side effect of the new SharePoint feature that enables a site collection to run in either SharePoint 2010 mode or SharePoint mode. The modes are sometimes called compatibility levels orUI versions. For files in the virtual folders  `_layouts` or `_controltemplates`, SharePoint needs to use the version of the files in %ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\ (sometimes called the 15 hive) or in the corresponding 14 hive, depending on the mode of the site collection. SharePoint adds "/15" into the virtual directory path just after the virtual directory name to signal that the SharePoint files should be used. The absence of that extra string indicates that SharePoint 2010 files should be used.
  
    
    
This new system has implications for you as you develop SharePoint solutions and apps, particularly when you are using the SharePoint 2010 SDK. In any SharePoint Add-in (which only run in SharePoint mode) and in any SharePoint solution that you know is only going to be used in site collections that run in SharePoint mode, you need to add the "/15" yourself to all the  `_layouts` and `_controltemplates` virtual paths you create in your solution/app. (unless the path is pointing to an *.aspx file), even though this string does not appear in any instructions you read in the SharePoint 2010 SDK. For example, if the SharePoint 2010 SDK instructs you to use `~/_layouts/images/myimage.png`, you should use  `~/_layouts/15/images/myimage.png` when you are developing for SharePoint.
  
    
    
If you need to make your solution compatible with site collections of either mode, you need branching logic to determine the mode of the current site collection and construct the virtual path accordingly. The  [CompatibilityLevel](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPSite.CompatibilityLevel.aspx) property, which is also available in all the SharePoint client object models and the REST interface, is one place where your code can check for the mode. The [SPUtility](https://msdn.microsoft.com/library/Microsoft.SharePoint.Utilities.SPUtility.aspx) class also has several new properties to aid in managing compatibility level in your solutions. These are not available in the client object models. Finally, there are several controls in SharePoint that expose a **UIVersion** property that your code can also use to find the current compatibility level.
  
    
    

> **Note:**
> If the file in the virtual path is *.aspx, SharePoint will automatically detect the mode of the current site collection and return the file from the appropriate hive. So you do not have to insert the "/15" into the virtual path. 
  
    
    


## Additional resources
<a name="bk_addresources"> </a>


-  [Build farm solutions in SharePoint](build-farm-solutions-in-sharepoint.md)
    
  
-  [Planning Deployment of Farm Solutions for SharePoint](http://blogs.technet.com/b/mspfe/archive/2013/02/04/planning-deployment-of-farm-solutions-for-sharepoint.aspx)
    
  
-  [SPUtility properties](http://msdn.microsoft.com/library/Properties.T:Microsoft.SharePoint.Utilities.SPUtility.aspx)
    
  

