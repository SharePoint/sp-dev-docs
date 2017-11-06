---
title: User profile manipulation in the SharePoint add-in model
ms.date: 11/03/2017
---
User profile manipulation in the SharePoint add-in model
========================================================

Summary
-------

The approach you take to perform Create, Read, Update and Delete (CRUD) operations in the User Profile Service (UPS) is different in the new SharePoint Add-in model than it was with Full Trust Code. In a typical Full Trust Code (FTC) / Farm Solution scenario, UPS CRUD operations were performed with the SharePoint server-side object model code or the User Profile web service and deployed via Farm Solutions. 

In a SharePoint Add-in model scenario, UPS CRUD operations are performed with the client-side object model (CSOM) or the User Profile web service.  

High-Level Guidelines
---------------------

As a rule of a thumb, we recommend the following high-level guidelines for performing UPS CRUD operations.

- The following table describes what types of operations are supported in Office 365 and on-premises SharePoint environments for the CSOM and User Profile Web Service APIs.

	Operation  | API | On Premises | Office 365
	---------| -----| ---------| ------
	READ | CSOM | Supported | Supported
	CREATE | CSOM | Not Supported | Supported
	UPDATE | CSOM | Not Supported | Supported
	DELETE | CSOM | Not Supported | Supported
	READ | User Profile Web Service | Supported | Not Supported
	CREATE | User Profile Web Service | Supported | Not Supported
	UPDATE | User Profile Web Service | Supported | Not Supported
	DELETE | User Profile Web Service | Supported | Not Supported

- You typically will not deploy an Add-in to a SharePoint tenancy to handle UPS data copying or synchronization.  Usually, the Add-in takes the form of a console application running as a scheduled task, or a long-running cloud service such as an Azure Web Job.
	+ See the [Remote timer jobs (SharePoint Add-in Model Recipe)](remote-timer-jobs-sharepoint-add-in.md) for more information about these technologies and how to use them in the SharePoint Add-in model.
- Using AppOnly authentication is not supported for any User Profile service operations.
- Execute the CSOM code with an account that has the appropriate permissions to perform UPS CRUD operations.
- When synchronizing Active Directory to the User Profile Service some attributes are synchronized by default.
	+ The [Default user profile property mappings in SharePoint Server 2013 (TechNet article)](https://technet.microsoft.com/en-us/library/hh147510.aspx) contains a list of the attributes synchronized by default.
	+ If you need to synchronize additional attributes you will need to create a custom tool using one of the approaches described in this article.

Options to copy and synchronize UPS data
----------------------------------------

You have a couple of options to copy and synchronize UPS data.

- On-premises
	+ Copy database
	+ Use the User Profile Web Service to copy data
	+ Use the User Profile Web Service to sync data
- Office 365
	+ Use CSOM to copy data
	+ Use CSOM to sync data

On-premises - copy database
---------------------------
If you have an on-premises SharePoint environment you can copy the UPS database from one farm to another to quickly replicate attributes.

**When is it a good fit?**

When you have an on-premises SharePoint environment and you are performing a one-way copy of profile attributes, this is a good option because it may be implemented quickly and easily without writing any code.

On-premises - Use the User Profile Web Service to copy data
-----------------------------------------------------------
If you have an on-premises SharePoint environment you can use the User Profile Web Service to copy UPS data from one farm to another.

**When is it a good fit?**

When you have an on-premises SharePoint environment and you are copying UPS data between two or more SharePoint farms this is a good option because it gives you the flexibility to copy the UPS data from one farm to another.

**Getting started**

The following sample demonstrates how to perform UPS CRUD operations with  the User Profile Web Service.

- [Core.UserProfilePropertyUpdater (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.UserProfilePropertyUpdater)

On-premises - Use the User Profile Web Service to sync data
-----------------------------------------------------------
If you have an on-premises SharePoint environment you can use the User Profile Web Service to sync UPS data between farms.

**When is it a good fit?**

When you have an on-premises SharePoint environment and you are synchronizing UPS data between two or more SharePoint farms this is a good option because it gives you the flexibility to perform true synchronization and include as many sources as you like.

**Getting started**

The [Core.UserProfilePropertyUpdater (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.UserProfilePropertyUpdater) demonstrates how to perform UPS CRUD operations with the User Profile Web Service.

The [Core.MMSSync (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.MMSSync) demonstrates how to build a synchronization tool for Managed Metadata Service (MMS data).  Although this sample focuses on the MMS APIs, the overall pattern used for synchronization may be applied to UPS data as well.

Office 365 - Use CSOM to copy data
----------------------------------
If you have an Office 365 SharePoint environment you can use CSOM to copy UPS data from one tenancy to another.  

**When is it a good fit?**

When you have an Office 365 environment and you are copying UPS data between two or more SharePoint tenancies this is a good option because it gives you the flexibility to copy the UPS data from one tenancy to another.

**Getting started**

The [UserProfile.Manipulation.CSOM (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/UserProfile.Manipulation.CSOM) demonstrates how to perform UPS CRUD operations with CSOM.

The [User profile CSOM for reading and updates (O365 PnP Video)](https://channel9.msdn.com/blogs/OfficeDevPnP/User-profile-CSOM-for-reading-and-updates) walks you through the [UserProfile.Manipulation.CSOM (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/UserProfile.Manipulation.CSOM).

Office 365 - Use CSOM to sync data
----------------------------------
When you have an Office 365 SharePoint environment and you are synchronizing UPS data between two or more tenancies this is a good option because it gives you the flexibility to perform true synchronization and include as many sources as you like.

**When is it a good fit?**

When you have an Office 365 environment and you are synchronizing UPS data between two or more SharePoint tenancies this is a good option because it gives you the flexibility to perform true synchronization and include as many sources as you like.

**Getting started**

The [Core.UserProfiles.Sync (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.UserProfiles.Sync) demonstrates how to build a synchronization tool for User Profile Service data.

Hybrid Environments
-------------------

In a scenario where you have both on-premises and Office 365 SharePoint environments and User Profile Information needs to be maintained in both environments you can use a combination of the User Profile Web Service and the CSOM to provide you the ability to perform CUD operations on UPS data.

Related links
=============
- [User profile CSOM for reading and updates (O365 PnP Video)](https://channel9.msdn.com/blogs/OfficeDevPnP/User-profile-CSOM-for-reading-and-updates)
- [Remote timer jobs (SharePoint Add-in Model Recipe)](remote-timer-jobs-sharepoint-add-in.md)
- [Default user profile property mappings in SharePoint Server 2013 (TechNet article)](https://technet.microsoft.com/en-us/library/hh147510.aspx)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================
- [Core.UserProfilePropertyUpdater (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.UserProfilePropertyUpdater)
- [Core.MMSSync (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.MMSSync)
- [UserProfile.Manipulation.CSOM (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/UserProfile.Manipulation.CSOM)
- [Core.UserProfiles.Sync (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.UserProfiles.Sync) 
- Samples and content at [http://aka.ms/OfficeDevPnP](http://aka.ms/OfficeDevPnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D)
- SharePoint 2013 on-premises
