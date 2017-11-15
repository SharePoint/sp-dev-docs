---
title: List definition / list template in the SharePoint add-in model
ms.date: 11/03/2017
---
List definition / list template in the SharePoint add-in model
==============================================================

Summary
-------

The approach you take to create list definitions / list templates is different in the new SharePoint Add-in model than it was with Full Trust Code.  In a typical Full Trust Code (FTC) / Farm Solution scenario, custom list definitions / list templates were created with declarative code and deployed via SharePoint Solutions. 

In a SharePoint Add-in model scenario, one cannot actually create custom list definitions.  It is simply impossible to do this.  However, the remote provisioning pattern may used to deploy custom list templates (.stp files) to Office 365.

High Level Guidelines
---------------------

As a rule of a thumb, we would like to provide the following high level guidelines to implement list definitions / list templates.

- Use the remote provisioning pattern to deploy list templates (.stp files) to SharePoint sites.
- You can override the out of the box list creation behavior to apply standardized settings to all lists created in a SharePoint site.  See more details about this approach below.
- You can create a SharePoint Add-in to create lists with standardized settings. See more details about this approach below.

Options to ensure standardized settings (templates) are applied to SharePoint lists upon list creation
------------------------------------------------------------------------------------------------------

You have a couple of options to ensure standardized settings (templates) are applied to SharePoint lists upon list creation.

- Override the out of the box list creation behavior.	
- Create a SharePoint Add-in. 

Override the out of the box list creation behavior
--------------------------------------------------
In this pattern you modify the out of the box list creation behavior by adding an event receiver to the ListAdded event.  Then, in the event receiver configured for the ListAdded event you use the remote provisioning pattern to apply standardized configurations to each list that is created.

These standardized configurations may include adding content types, setting the default content type, adding list columns, setting the version settings, and any other list type configurations that may be set. 
	
- This approach allows you to apply standardized settings for all lists.
- This approach allows you to apply standardized settings to different types of lists.
	+ For example: If you create a document library and a tasks list you can determine in the ListAdded event receiver which type of list you created and you can apply different standardized settings based on the list type.  Perhaps all document libraries need one set of content types applied to them, while all tasks list need a different set of content types applied to them.
- This approach does not support applying multiple different template options to lists.
	+ For example: If you create a document library and a tasks list you can determine in the ListAdded event receiver which type of list you created and you can apply different standardized settings based on the list type.  However, you cannot apply different templates to one document library you create versus another document library you create.

**When is it a good fit?**

When you need to apply standardized global settings to all lists or lists of a specific type.

**When is it a not good fit?**

When you need to apply multiple different templates options to lists.

**Getting Started**

The following SharePoint Add-in model recipe describes how to implement event receivers.

- [Event Receivers (SharePoint Add-in model recipe)](event-receiver-and-list-event-receiver-sharepoint-add-in.md)

Create a SharePoint Add-in
--------------------------

In this pattern you create a SharePoint Add-in to create lists with standardized settings and instruct your users to use the SharePoint Add-in to create new lists.  Essentially, the SharePoint Add-in provides users with choices of different lists to create.  The different lists the SharePoint Add-in allows users to create are defined by the business and implemented by a developer. Users fill out a form in the SharePoint Add-in to specify the list meta-data and choose which list to create from the choices the Add-in offers. The Add-in uses the remote provisioning pattern to create the list accordingly.
	
- This approach allows you to apply standardized settings for all lists.
- This approach allows you to apply standardized settings to different types of lists.
- This approach allows you to apply multiple different template options to lists.

**When is it a good fit?**

When you need to apply multiple different templates options to lists.

**Getting Started**

The following O365 PnP Code Sample and video demonstrates how to create a SharePoint Add-in that provides a user interface that allows end users to create new document libraries.  It also demonstrates how to create a document library with specific configurations that collectively represent a template.

- [ECM.DocumentLibraries (O365 PnP Code Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/ECM.DocumentLibraries)

The following video walks through the code sample.

- [Document and list templates with app model (O365 PnP Video)](http://channel9.msdn.com/blogs/OfficeDevPnP/Document-and-list-templates-with-app-model)

Related links
=============

- [List Instance (SharePoint Add-in model recipe)](list-instance-sharepoint-add-in.md)
- [Event Receivers (SharePoint Add-in model recipe)](event-receiver-and-list-event-receiver-sharepoint-add-in.md)
- [Document and list templates with app model (O365 PnP Video)](http://channel9.msdn.com/blogs/OfficeDevPnP/Document-and-list-templates-with-app-model)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- [ECM.DocumentLibraries (O365 PnP Code Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/ECM.DocumentLibraries)
- Samples and content at https://github.com/SharePoint/PnP

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D) *partly*
- SharePoint 2013 on-premises – *partly*

*Patterns for dedicated and on-premises are identical with SharePoint Add-in model techniques, but there are differences on the possible technologies that can be used.*
