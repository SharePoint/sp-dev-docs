---
title: Site columns and content types in the SharePoint Add-in model
description: The approach you take to create site columns and content types in SharePoint sites is different in the new SharePoint Add-in model than it was with Full Trust Code.
ms.date: 11/06/2017
ms.localizationpriority: medium
---
# Site columns and content types in the SharePoint Add-in model

The approach you take to create site columns and content types in SharePoint sites is different in the new SharePoint Add-in model than it was with Full Trust Code. In a typical Full Trust Code (FTC) / Farm Solution scenario, you use declarative code to create site columns and content types. In the declarative code approach, you define the site columns and content types in XML and then use SharePoint's feature framework elements to package and deploy them.

In a SharePoint Add-in model scenario, you use the SharePoint Client-Side Object Model (CSOM) or SharePoint REST APIs to create site columns and content types.

## High-level guidelines

As a rule of thumb, we recommend the following high-level guidelines for creating site columns and content types.

- You should use the SharePoint CSOM or REST APIs to create site columns and content types.
- You shouldn't use Feature framework elements to create site columns and content types.
  - The only exception to this guideline is when you're using declarative XML-based provisioning to a SharePoint Add-in web in a SharePoint-hosted SharePoint Add-in. This is because the CSOM isn't available in a SharePoint-hosted SharePoint Add-in.
- You can automate the creation of site columns and content types as part of the site provisioning process. See the [Site provisioning recipe](site-provisioning-sharepoint-add-in.md) for more details.

## Challenges creating site columns and content types in SharePoint sites

### Creating in a web browser vs. Creating with code

It's important to understand that creating site columns and content types via the web browser or via code are different. This list describes the different options.

- **Creating via a web browser**
  - In this option, users access a SharePoint site via a web browser and use the Administrative Pages to create site columns and content types.
  - Usually the only time you'll use the web browser to manually create site columns and content types is when you're prototyping or modifying a single SharePoint site that isn't planned to grow to include other site collections or sub sites.
- **Creating with code**
  - In this option, you execute SharePoint CSOM/REST code to create site columns and content types.
  - Later in this article you'll learn about a few options you can use to execute the SharePoint CSOM/REST code.

When **Creating via a web browser**, consider the following points.

- Creating site columns and content types via the web browser is typically a complicated and time consuming process.
  - These factors make it **prone to errors**.
- You don't control the GUIDs for site columns or content types that you create via a web browser.
  - This makes it **difficult** to deploy the site columns and content types to different environments and reference them in line-of-business applications consistently.

When **Creating with code** consider the following points.

- Creating site columns and content types with code typically involves using custom utility libraries to execute SharePoint CSOM/REST code.
  - You'll find these libraries available in many projects in the PnP GitHub Repository. They're referenced throughout the article and at the end.
  - These factors make creating site columns and content types with code **prone to success**.
- You can control the GUIDs for site columns or content types that get created via the SharePoint CSOM/REST.
  - This makes it **easy** to deploy the site columns and content types to different environments and reference them in line-of-business applications consistently.

### Must happen quickly!

You typically create site columns and content types when you provision a SharePoint site. End users won't accept having to wait several hours for you to provision their new SharePoint sites.

### Must be consistently perfect!

Site columns and content types are the foundation that defines your information architecture at the lowest level, *they must be perfect*!

Incorrect site column and content type provisioning can affect an entire line-of-business application in the SharePoint site where they're provisioned as well as other parts of SharePoint and other line-of-business applications that access SharePoint services.

For example: If your company uses SharePoint sites to manage projects, you'll most likely create a common list schema for all of them. This will require that you create site columns and content types. When you search for information in these sites via the SharePoint search page, you filter the results by content type or tag (site column). If your site columns and content types aren't perfectly consistent across all the project sites, you won't receive accurate search results.

You could apply this example to Content By Search web parts, SharePoint add-ins, mobile SharePoint Add-ins, and any other systems that access the information in the SharePoint sites.

## Options to create site columns and content types in SharePoint sites

There are several ways you can call the CSOM/REST code to create site columns and content types. These patterns all fall into the **Creating with code** approach described above. You'll see each one of these patterns described in detail in the [Site provisioning recipe](site-provisioning-sharepoint-add-in.md).

- Override the create site link
- Override the create sub site link
- Use a Provider-hosted SharePoint Add-in
- Use Windows/Java/iOS applications or PowerShell scripts

Regardless of the option you choose to implement, you'll ultimately use CSOM/REST to create site columns and content types.

There are many different articles and samples you can use to learn how to make site columns and content types with the CSOM. Here you'll find these examples (classified by the pattern that is used to invoke the CSOM code) to create site columns and content types.

## Use a Provider-hosted SharePoint Add-in

This option works well when you need to provide your end users with a self-service ability to create SharePoint site collections and sub sites based on custom templates.

- [Core.ContentTypesAndFields (Microsoft 365 PnP Sample)](https://github.com/pnp/PnP/tree/master/Samples/Core.ContentTypesAndFields)
  - Demonstrates how to create a new content type in the host web, create a taxonomy field in the host web and wire it up to the taxonomy, create a list and associate it with a content type, and create content types and fields in particular languages.

## Use Windows/Java/iOS applications or PowerShell scripts

This option works well in Dev-Ops scenarios. It allows you to create custom applications or scripts that are built to work with your Dev-Ops processes. This option provides the ultimate level of automation because you can build the SharePoint Add-ins and scripts to run without any user interaction.

- [Core.CreateContentTypes (Microsoft 365 PnP Sample)](https://github.com/pnp/PnP/tree/master/Samples/Core.CreateContentTypes)
  - This sample shows how you can create site columns, content types and add then add the site columns to the content type. It also explains the new localization features that have been introduced for Office 365 CSOM APIs.
- [Core.CreateDocumentContentType (Microsoft 365 PnP Sample)](https://github.com/pnp/PnP/tree/master/Samples/Core.CreateDocumentContentType)
  - This sample shows how you can create document content types and add then associate a document template to the content type.

## Related links

- [Site provisioning in the SharePoint Add-in model (Microsoft 365 PnP Recipe)](site-provisioning-sharepoint-add-in.md)
- References and guidance for SharePoint development and Office 365 patterns and practices are available at [Microsoft Learn: Office 365 Development Patterns and Practices Solution Guidance](https://learn.microsoft.com/sharepoint/dev/solution-guidance/office-365-development-patterns-and-practices-solution-guidance)
- Videos and community content are available on the Microsoft 365 & Power Platform Community YouTube channel: https://www.youtube.com/channel/UC_mKdhw-V6CeCM7gTo_Iy7w

## PnP samples

- [Core.CreateContentTypes (Microsoft 365 PnP Sample)](https://github.com/pnp/PnP/tree/master/Samples/Core.CreateContentTypes)
- [Core.ContentTypesAndFields (Microsoft 365 PnP Sample)](https://github.com/pnp/PnP/tree/master/Samples/Core.ContentTypesAndFields)
- [Core.CreateDocumentContentType (Microsoft 365 PnP Sample)](https://github.com/pnp/PnP/tree/master/Samples/Core.CreateDocumentContentType)
- [Branding.DisplayTemplates (Microsoft 365 PnP Sample)](https://github.com/pnp/PnP/tree/master/Samples/Branding.DisplayTemplates)
- [Core.DataStorageModels (Microsoft 365 PnP Sample)](https://github.com/pnp/PnP/tree/master/Samples/Core.DataStorageModels)
- Samples and content at [https://github.com/PnP](https://github.com/pnp/PnP)

## Applies to

- Office 365 multitenant (MT)
- Office 365 Dedicated (D) *partly*
- SharePoint 2013 on-premises – *partly*

*Patterns for dedicated and on-premises are identical with SharePoint Add-in model techniques, but there are differences on the possible technologies that can be used.*
