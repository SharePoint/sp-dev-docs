---
title: Deploying and installing SharePoint Add-ins: methods and options
ms.prod: SHAREPOINT
ms.assetid: d15a74a7-3c10-485a-9885-7ef11aaa0d90
---


# Deploying and installing SharePoint Add-ins: methods and options
Learn about the methods for publishing, installing, and uninstalling a SharePoint Add-in.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 


## Publishing to the Office Store or an organization's add-in catalog
<a name="MarketOrCatalog"> </a>

You can upload your SharePoint Add-in to either the public Office Store or to an organization's private add-in catalog. A private add-in catalog is a dedicated site collection in a SharePoint 2013 web application (or a SharePoint Online tenancy) that hosts document libraries for SharePoint Add-ins and Office Add-ins. Putting the catalog into its own site collection makes it easier for the web application administrator or tenant administrator to limit permissions to the catalog. 
 

 
If the add-in is uploaded to the Office Store, Microsoft runs some validation checks on it. For example, it checks whether the add-in manifest markup is valid and complete and verifies that any SharePoint solution packages (.wsp files) that are included do not include disallowed elements or Features with a scope broader than  **Web**. The content of the package is also inspected for objectionable content. If the add-in passes all tests, the add-in package is wrapped into a file and signed by Microsoft. 
 

 

 **Note**  When you are developing your add-in and deploying it with Microsoft Office Developer Tools for Visual Studio, the add-in is directly installed in the target test SharePoint site. Since it is not passing through the Office Store, the validation checking described above does not occur.
 

Uploading a SharePoint Add-in to an organization's add-in catalog is as easy as uploading any file to a SharePoint Foundation document library. You fill out a pop-up form in which you supply the local URL of the add-in package and other information, such as the name of the add-in. When the add-in is uploaded to an organization's add-in catalog, similar checks take place and add-ins that do not pass are marked as invalid or disabled in the catalog. 
 

 
Tenant administrators and SharePoint 2013 web application administrators can shop for SharePoint Add-ins on the Office Store. To open the Office Store, the administrator selects  **Add an Add-in** on the **Site Contents** page and then selects **SharePoint Store** in the **Your Add-ins** page. This opens a **SharePoint Store** page that the administrators can use to discover and learn about SharePoint Add-ins that vendors are offering. (They can also do this on office.com.) Add-ins that require a prerequisite that is not installed on the administrator's web application or tenancy appear dimmed and are unavailable in the add-in store. For example, if an add-in requires Search Services and this is not installed, the add-in appears dimmed. Administrators can sort, filter, and browse the list of add-ins, read about the add-ins, see add-in reviews, and purchase licenses for an add-in.
 

 
When an administrator decides to purchase a license, she must accept the terms and conditions of purchase and agree to the permissions that the add-in must have in order to execute, such as read access to lists or full control access to the site collection. 
 

 
When one or more licenses for an add-in are purchased, the licenses are downloaded to the web application or tenancy. The add-in is not automatically downloaded and installed when the license is purchased, although administrators have the option to combine installation with license purchase.
 

 
Users install add-ins from the  **Your Add-ins** page. This page has a merged listing of the following:
 

 

- SharePoint Add-ins from the web application's (or the tenant's) organization add-in catalog.
    
 
- SharePoint Add-ins from the Office Store for which the organization or tenant already owns a site license or a license which has been assigned to the user.
    
 
All the add-ins that the user can install immediately are listed, and with few exceptions only add-ins the user can install immediately are listed. Users can filter the add-ins included on the page to include only add-ins in the organization's add-in catalog. When an add-in is installed, it appears in the list of add-ins on the  **Site Contents** page of the website to which it is installed.
 

 

## Installing SharePoint Add-ins
<a name="Installing"> </a>

Website owners install SharePoint Add-ins from the  **Your Add-ins** page as described earlier in this topic. Installation creates an instance of the add-in. For more information about installing add-ins, see [Add SharePoint Add-ins to a SharePoint 2013 site](https://technet.microsoft.com/en-us/library/fp161231.aspx). 
 

 

 **Note**  Sometimes a temporary loss of a network connection can block installation. If installation fails for any reason, the installation infrastructure will retry three times. If it does not succeed, an indication of the failure appears in the UI. Users can retry the installation later. 
 


## Uninstalling SharePoint Add-ins
<a name="Uninstalling"> </a>

Website owners can uninstall an instance of a SharePoint Add-in through the SharePoint UI. Uninstallation of an instance of a SharePoint Add-ins is clean. This means that everything installed by the add-in is uninstalled. 
 

 
However, components that an add-in uses, but that are installed separately from the installation of the add-in, are not removed. For example, suppose an add-in has a remote web page with buttons that create lists on the host web. Uninstallation of the add-in removes the add-in's tile from the  **Site Contents** page which, in turn makes the remote page effectively inaccessible or unusable for end users, but it does not remove the lists that were created with the add-in. SharePoint does not keep a record of which lists on the host web were created with the add-in and which ones were created by users in the SharePoint UI, so it can't delete lists that were created with the add-in. This is generally desirable behavior because the lists may have data that remains useful to users even after the removal of the add-in that created the lists.
 

 
If the SharePoint Add-in includes an add-in web, the add-in web is deleted. This provides a cleaner uninstall than systematically deactivating features and reversing the deployment of the add-in's internal .wsp file.
 

 

 **Note**  When a user removes an add-in, it is moved to the first stage Recycle Bin. Deleting it from there moves it to the second stage Recycle Bin. If it is deleted from the second stage Recycle Bin, then it is completely uninstalled and cannot be restored. 
 

The add-in's permissions are also revoked when it is removed (recycled), according to these rules:
 

 

- Web-scoped permissions are always revoked.
    
 
- If there is no other instance of the add-in in the site collection, site collection-scoped permissions are also revoked.
    
 
- If there is no other instance of the add-in in the site subscription (tenancy), tenant-scoped permissions are also revoked.
    
 
The  [UninstallingEventEndpoint](http://msdn.microsoft.com/library/4194e44b-f2af-1db4-aad5-9b7b511b4348%28Office.15%29.aspx) web service, if one is registered in the add-in manifest of the add-in, executes at the beginning of the uninstallation process (which occurs when the add-in is removed from the second stage Recycle Bin). It is a best practice to have an [UninstallingEventEndpoint](http://msdn.microsoft.com/library/4194e44b-f2af-1db4-aad5-9b7b511b4348%28Office.15%29.aspx) web service if you have an [InstalledEventEndpoint](http://msdn.microsoft.com/library/af9f83d8-8325-3ede-d7b0-bb82c0445eb9%28Office.15%29.aspx) web service and to design the [UninstallingEventEndpoint](http://msdn.microsoft.com/library/4194e44b-f2af-1db4-aad5-9b7b511b4348%28Office.15%29.aspx) service to reverse anything done in your [InstalledEventEndpoint](http://msdn.microsoft.com/library/af9f83d8-8325-3ede-d7b0-bb82c0445eb9%28Office.15%29.aspx) service. For more information, see [Handle events in SharePoint Add-ins](handle-events-in-sharepoint-add-ins.md).
 

 

## Additional resources
<a name="SP15deployinstallapps_addlresources"> </a>


-  [Publish SharePoint Add-ins](publish-sharepoint-add-ins.md)
    
 
-  [Important aspects of the SharePoint Add-in architecture and development landscape](important-aspects-of-the-sharepoint-add-in-architecture-and-development-landscape.md)
    
 
-  [SharePoint Add-ins update process](sharepoint-add-ins-update-process.md)
    
 

