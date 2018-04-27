---
title: Site columns and content types in the SharePoint add-in model
ms.date: 11/03/2017
---
Site columns and content types in the SharePoint add-in model
=============================================================

Summary
-------

The approach you take to create site columns and content types in SharePoint sites is different in the new SharePoint Add-in model than it was with Full Trust Code. In a typical Full Trust Code (FTC) / Farm Solution scenario, you use declarative code to create site columns and content types. In the declarative code approach, you define the site columns and content types in XML and then use  SharePoint's feature framework elements to package and deploy them.

In an SharePoint Add-in model scenario, you use the SharePoint Client Side Object Model (CSOM) or SharePoint REST APIs to create site columns and content types.

High-Level Guidelines
---------------------

As a rule of a thumb, we recommend the following high-level guidelines for creating site columns and content types.

- You should use the SharePoint CSOM or REST APIs to create site columns and content types.
- You should not use Feature framework elements to create site columns and content types.
	+ The only exception to this guideline is when you are using declarative XML-based provisioning to an SharePoint Add-in web in a SharePoint-hosted SharePoint Add-in. This is due to the fact that the CSOM is not available in a SharePoint-hosted SharePoint Add-in.
- You can automate the creation of site columns and content types as part of the site provisioning process. See the [Site provisioning recipe](site-provisioning-sharepoint-add-in.md) for more details.

Challenges creating site columns and content types in SharePoint sites
----------------------------------------------------------------------

**Creating in a web browser vs. Creating with code** 

It is important to understand that creating site columns and content types via the web browser or via code are different. This list describes the different options.

- **Creating via a web browser**
	+ In this option, users access a SharePoint site via a web browser and use the Administrative Pages to create site columns and content types.
	+ Usually the only time you will use the web browser to manually create site columns and content types is when you are prototyping or modifying a single SharePoint site that is not planned to grow to include other site collections or sub sites.
- **Creating with code**
	+ In this option, you execute SharePoint CSOM/REST code to create site columns and content types.
	+ Later in this article you'll learn about a few options you can use to execute the SharePoint CSOM/REST code.

When **Creating via a web browser**, consider the following points.

- Creating site columns and content types via the web browser is typically a complicated and time consuming process.
	+ These factors make it **prone to errors**.
- You do not control the GUIDs for site columns or content types that you create via a web browser.
	+ This makes it **difficult** to deploy the site columns and content types to different environments and reference them in line-of-business applications consistently.

When **Creating with code** consider the following points.

- Creating site columns and content types with code typically involves using custom utility libraries to execute SharePoint CSOM/REST code.
	+ You'll find these libraries available in many projects in the OfficeDev PnP GitHub Repository.  They are referenced throughout the article and at the end.
	+ These factors make creating site columns and content types with code **prone to success**.
- You can control the GUIDs for site columns or content types that get created via the SharePoint CSOM/REST.
	+ This makes it **easy** to deploy the site columns and content types to different environments and reference them in line-of-business applications consistently.

**Must happen quickly!**

You typically create site columns and content types when you provision a SharePoint site. End users won't accept having to wait several hours for you to provision their new SharePoint sites.

**Must be consistently perfect!**

Site columns and content types are the foundation that define your information architecture at the lowest level, *they must be perfect*!

Incorrect site column and content type provisioning can affect an entire line-of-business application in the SharePoint site where they are provisioned as well as other parts of SharePoint and other line-of-business applications that access SharePoint services.

For example: If your company uses SharePoint sites to manage projects, you will most likely create a common list schema for all of them. This will require that you create site columns and content types.  When you search for information in these sites via the SharePoint search page, you filter the results by content type or tag (site column). If your site columns and content types are not perfectly consistent across all the project sites, you will not receive accurate search results.

You could apply this example to Content By Search web parts, SharePoint add-ins, mobile SharePoint Add-ins, and any other systems that access the information in the SharePoint sites.

Options to create site columns and content types in SharePoint sites
--------------------------------------------------------------------

There are several ways you can call the CSOM/REST code to create site columns and content types. These patterns all fall into the **Creating with code** approach described above. You'll see each one of these patterns described in detail in the [Site provisioning recipe](site-provisioning-sharepoint-add-in.md).

- Override the create site link
- Override the create sub site link
- Use a Provider-hosted SharePoint Add-in
- Use Windows/Java/iOS applications or PowerShell scripts

Regardless of the option you choose to implement, you will ultimately use CSOM/REST to create site columns and content types.

There are many different articles and samples you can use to learn how to make site columns and content types with the CSOM. Here you will find these examples (classified by the pattern that is used to invoke the CSOM code) to create site columns and content types.

Use a Provider-hosted SharePoint Add-in
---------------------------------------
This option works well when you need to provide your end users with a self-service ability to create SharePoint site collections and sub sites based on custom templates.

- [Core.ContentTypesAndFields (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ContentTypesAndFields)
	+ Demonstrates how to create a new content type in the host web, create a taxonomy field in the host web and wire it up to the taxonomy, create a list and associate it with a content type,  and create content types and fields in particular languages.

Use Windows/Java/iOS applications or PowerShell scripts
-------------------------------------------------------

This option works well in Dev-Ops scenarios. It allows you to create custom applications or scripts that are specifically built to work with your Dev-Ops processes. This option provides the ultimate level of automation because you can build the SharePoint Add-ins and scripts to run without any user interaction.  

- [Core.CreateContentTypes (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.CreateContentTypes)
	+ This sample shows how you can create site columns, content types and add then add the site columns to the content type. It also explains the new localization features that have been introduced for Office 365 CSOM APIs.
- [Core.CreateDocumentContentType (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.CreateDocumentContentType)
	+ This sample shows how you can create document content types and add then associate a document template to the content type.

Related links
=============
- [Site provisioning in the SharePoint add-in model (O365 PnP Recipe)](site-provisioning-sharepoint-add-in.md)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- [Core.CreateContentTypes (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.CreateContentTypes)
- [Core.ContentTypesAndFields (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ContentTypesAndFields)
- [Core.CreateDocumentContentType (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.CreateDocumentContentType)
- [Branding.DisplayTemplates (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.DisplayTemplates)
- [Core.DataStorageModels (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.DataStorageModels)
- Samples and content at [https://github.com/SharePoint/PnP](https://github.com/SharePoint/PnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D) *partly*
- SharePoint 2013 on-premises – *partly*

*Patterns for dedicated and on-premises are identical with SharePoint Add-in model techniques, but there are differences on the possible technologies that can be used.*
