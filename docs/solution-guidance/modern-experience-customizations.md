---
title: Customizing the "modern" experiences in SharePoint Online
description: An overview to get you started using the "modern" experiences in SharePoint Online.
ms.date: 5/10/2017
---

# Customizing the "modern" experiences in SharePoint Online

SharePoint Online has started the gradual introduction of "modern" experiences across the SharePoint service, which has a direct impact not only on the end user experience but also on the customization options that can be used. This article provides an overview of the "modern" experiences to get you started, including links to articles containing all the customization options for each of the "modern" experiences.

Numerous benefits in the "modern" experiences are called out in the referenced materials, but if you have specific customization requirements, you should be aware of the currently supported options for customizations.

> [!IMPORTANT]
> We're not deprecating the "classic" experience; both "classic" and "modern" will coexist.

## What are the "modern" experiences in SharePoint Online?

The "modern" experiences in SharePoint Online are:
- **Modern team sites**
- **Modern list and library experiences**
- **Modern site pages** 

"Modern" experiences are being gradually released in SharePoint Online, and you can control how they are applied at the tenant or site level. If you have existing customizations, you can defer using the new experiences until the required customization options are available. 

If you have existing customizations that are business critical for your deployment, we recommend using the following process for adopting the "modern" experiences:

1. **Readiness**: Understand the "modern" experiences, know what features they offer, but equally important, understand which features are not (yet) available.

2. **Assess**: Assess to what extent your current customizations can work within the "modern" experience. Also assess which of your sites have customizations or features that will not work within the "modern" experiences. These sites and their customizations should be updated or need to stay in "classic". However, other sites should work just fine using the "modern" experiences. The best way to assess your compatibility with the "modern" experiences is by using the [SharePoint "Modern" user interface experience scanner](https://aka.ms/sppnp-modernuiscanner).

3. **Solution planning**: Plan the work required for both custom solutions and sites to prepare them to be used with the "modern" experiences.

4. **Develop and test**: Apply the needed changes to your customizations and test them.

5. **Deploy**: Roll out the updated changes to your SharePoint Online environment.

Following are the key scenarios currently supported by the "modern" experiences. We will be updating the list of supported scenarios whenever new capabilities are introduced in SharePoint Online. 

<br/>

|Customization/Article|Description|
|:-----|:-----|
|[Provisioning "modern" team sites programmatically](modern-experience-customizations-provisioning-sites.md)| "Modern" team sites can be provisioned by an end user, but you can also create these sites programmatically. | 
|[Customizing "modern" team sites](modern-experience-customizations-customize-sites.md) | "Modern" team sites are sites that bring a fresh, new responsive user experience to SharePoint Online,<br/>showing relevant information on the home page. Typically, these sites also have an associated Office 365 group. | 
|[Customizing "modern" lists and libraries](modern-experience-customizations-customize-lists-and-libraries.md) | "Modern" lists and document libraries bring a better user experience that is faster, more intuitive, and responsive.<br/>This article focuses on the extensibility options, such as user custom actions and branding, which are supported for the "modern" library and list experiences. | 
|[Customizing "modern" site pages](modern-experience-customizations-customize-pages.md) | "Modern" team site pages are fast, easy to author, and support rich multimedia content. Additionally, these pages<br/>look great on any device, in a browser, or from within the SharePoint mobile app.<br/>This article focuses on the extensibility options available within the "modern" page experience. | 
|[SharePoint "modern" sites classification](modern-experience-site-classification.md)|Configure out-of-the-box site classification for modern SharePoint sites. |

<a name="convertingexisting"> </a>

## Converting existing sites to "modern" team sites

Existing collaboration sites cannot, at least currently, be converted to "modern" team sites with an associated Office 365 group. However, you can start using "modern" experiences in the "classic" collaboration sites as well by enabling the new capabilities at the tenant level and then modifying the sites based on your functional requirements. 

"Modern" lists and library usage can be controlled at the tenant, site, web, and list/library level. You can find more details about the available options in our ["modern" list and libraries](modern-experience-customizations-customize-lists-and-libraries.md) article.

By default, "classic" SharePoint sites use "modern" pages for any newly added page, and you have the option to change the welcome page to a "modern" page. Setting a new "modern" page for a "classic" SharePoint site can be done programatically by using CSOM or REST APIs. 

<a name="onpremisessupport"> </a>

## SharePoint "modern" experiences support for on-premises

The SharePoint "modern" experiences are currently not available for SharePoint on-premises. As part of the SharePoint 2016 Feature Pack, "modern" experiences will be introduced within the OneDrive for Business experience, and you can take advantage of the SharePoint Framework client-side web parts in the classic page experience.


## See also

-  [Create connected SharePoint Online team sites in seconds](https://blogs.office.com/en-us/2016/11/08/create-connected-sharepoint-online-team-sites-in-seconds/)
-  [New capabilities in SharePoint Online team sites including integration with Office 365 Groups](https://blogs.office.com/en-us/2016/08/31/new-capabilities-in-sharepoint-online-team-sites-including-integration-with-office-365-groups/)
- [Create a team site in SharePoint Online](https://support.office.com/en-US/article/Create-a-team-site-in-SharePoint-Online-ef10c1e7-15f3-42a3-98aa-b5972711777d?ui=en-US)
-  [Turn scripting capabilities on or off](https://support.office.com/en-us/article/Allow-or-prevent-custom-script-1f2c515f-5d7e-448a-9fd7-835da935584f?ui=en-US&rs=en-US&ad=US)  
-  ["Modern" SharePoint lists are here - including integration with Microsoft Flow and PowerApps](https://blogs.office.com/en-us/2016/07/25/modern-sharepoint-lists-are-here-including-integration-with-microsoft-flow-and-powerapps/)
-  [Update on "Modern" Document Libraries and Extensibility](https://dev.office.com/blogs/update-on-modern-document-libraries-and-extensiblity)
-  [Switch the default experience for lists or document libraries from "modern" or "classic"](https://support.office.com/en-us/article/Switch-the-default-experience-for-lists-or-document-libraries-from-new-or-classic-66dac24b-4177-4775-bf50-3d267318caa9?ui=en-US&rs=en-US&ad=US)
- [Office 365 development and SharePoint PnP solution guidance](office-365-development-patterns-and-practices-solution-guidance.md)