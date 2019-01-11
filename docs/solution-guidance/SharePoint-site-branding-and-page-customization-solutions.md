---
title: SharePoint site branding and page customization solutions
description: Use the SharePoint page model and composed looks, the SharePoint theming engine, and CSS to brand your SharePoint site and pages.
ms.date: 4/24/2018
localization_priority: Priority
---

# SharePoint site branding and page customization solutions

You can customize the look and feel of a SharePoint site in two ways: 

- **By using the theming engine to create custom themes** (composed looks in SharePoint and SharePoint Online). At a minimum, themes define colors. A complete theme defines colors, fonts, a background image, and the associated master page, and a .preview file that defines how the master page is previewed. You can use the remote provisioning pattern to apply themes to sites.

- **By creating custom cascading style sheets (CSS) to apply to SharePoint Online sites**. You can use a SharePoint Add-in and the remote provisioning pattern to provision SharePoint sites to use custom CSS.

Branding changes range from low-cost and simple to high-cost and complex. Users can use the UI to apply composed looks, which include a background image, color palette, fonts, a master page, and an associated .preview file for the master page. You can use the SharePoint theming engine to design composed looks and provision sites, and you can create custom CSS to modify the look and feel of your site and its elements.

> [!IMPORTANT] 
> Although it's possible to create custom master pages and other structural elements as part of a custom branding project, the long-term cost of supporting custom master pages and other custom structural elements is high. Custom branding can make it more costly for your organization to apply upgrades and provide ongoing support.

This section builds on your knowledge about [SharePoint development and design tools and practices](sharepoint-development-and-design-tools-and-practices.md) to show you how to customize the look and feel of a SharePoint site.

## Terms and concepts

**Table 1. Key terms and concepts related to SharePoint branding**

|Term or concept|Definition|More information|
|:-----|:-----|:-----|
|Alternate CSS|A CSS file other than the default that you can apply to the look and feel of your site.|Use alternate CSS to apply custom CSS to a site and all of its subsites. |
|CSS|A language that tells a browser how to render an HTML or XML document's styles. CSS separates document content (HTML or XML) from how the content is presented.||
|Composed look|A combination of fonts, a color palette, a background image, and an associated master page that are applied to the site. Font scheme and color images are optional. The following is the default file location for composed looks: Theme Gallery\15 folder|<p>Composed looks are a convenient way to change the look and feel of sites without making any changes to the structure of a site.</p><p>SharePoint ships several composed looks by default. When a user applies a composed look, SharePoint applies all the associated design elements of the composed look to a site.</p>|
|Content Search web part |Renders content from search results based on a specified query.| [Content Search web part in SharePoint](../general-development/content-search-web-part-in-sharepoint.md) |
|corev15.css|The CSS file that contains most of the main functionality for SharePoint. The following is the default file location: \_layouts\15 folder||
|CSSRegistration|A reference in a master page, such as seattle.master, that loads most CSS that is applied to most of the default UI.|Use the **CSSRegistration** control in a master page to override default CSS.|
|Custom action|Actions you can use to customize and interact with lists and the ribbon on the host web.| [Create custom actions to deploy with SharePoint Add-ins](../sp-add-ins/create-custom-actions-to-deploy-with-sharepoint-add-ins.md)|
|Device channels|Render a single SharePoint publishing site in more than one way by using unique channels to target content rendering on specific devices.| [SharePoint Design Manager device channels](../general-development/sharepoint-design-manager-device-channels.md)|
|Display templates|Templates used by Search web parts to show the results of a query made to the search index.| [SharePoint Design Manager display templates](../general-development/sharepoint-design-manager-display-templates.md)|
|Image rendition|Display differently sized versions of an image on a publishing site based on the same source image.| [SharePoint Design Manager image renditions](../general-development/sharepoint-design-manager-image-renditions.md)|
|Managed metadata| Features in SharePoint that enable you to define terms, term sets, groups, and labels for terms. Sometimes referred to as taxonomy. In SharePoint, the managed metadata system is the foundation for managed navigation.| [Managed metadata and navigation in SharePoint](../general-development/managed-metadata-and-navigation-in-sharepoint.md)|
|Managed navigation|Navigation for publishing sites that is built based on managed metadata. Navigation is built from a specified term set in the term store. | [Managed navigation in SharePoint](../general-development/managed-navigation-in-sharepoint.md)|
|Master page|A page that standardizes the behavior and presentation of the left navigation and top navigation areas of a SharePoint page.| [Master pages, the Master Page Gallery, and page layouts in SharePoint](../general-development/master-pages-the-master-page-gallery-and-page-layouts-in-sharepoint.md)|
|Master Page Gallery|A special document library in SharePoint where all branding elements-master pages, page layouts, JavaScript files, CSS, and images-are stored by default. Every site has its own Master Page Gallery. When you create custom branding elements, we recommend that you store custom assets in the default Master Page Gallery file structure.| [Master pages, the Master Page Gallery, and page layouts in SharePoint](../general-development/master-pages-the-master-page-gallery-and-page-layouts-in-sharepoint.md)|
|Oslo.master|A master page in SharePoint.|Moves the current navigation into the same position as the top navigation region. |
|Page content control|A control on a publishing site where a web part can be added.||
|Page layout|A template for a SharePoint publishing site page that lets users lay out information on the page in a consistent way.||
|Quick Launch|Manages the navigation elements on the left side of the page of a collaboration site.|You can add heading links to group navigation items.|
|REST|A stateless architectural style that abstracts architectural elements and uses HTTP verbs to read and write data from webpages that contain XML files.| [Get to know the SharePoint REST service](../sp-add-ins/get-to-know-the-sharepoint-rest-service.md)|
|Root web|The first webpage in a site collection.|The root web is also sometimes referred to as the Web Application Root. |
|Seattle.master|The default master page for SharePoint team sites and publishing sites.||
|Site layout|See master page.|The site layout combines the master page of a theme with its corresponding .preview file.|
|Structured navigation|A navigation structure for publishing sites that is based on the site hierarchy of the publishing site. You can add headers and links to manually replace or customize the structured navigation that SharePoint automatically generates.| [How to: Customize Navigation in SharePoint Server 2010 (ECM)](https://msdn.microsoft.com/en-us/library/office/ms558975%28v=office.14%29.aspx)|
|Theme|A simple way to apply light branding to a SharePoint site. The default file location for themes is the _themes folder of the site.|<p>Themes are an easy way to apply custom branding to SharePoint sites.</p><br />- [Themes overview for SharePoint](../general-development/themes-overview-for-sharepoint.md)<br />- [Deploy a custom theme in SharePoint](../general-development/how-to-deploy-a-custom-theme-in-sharepoint.md) |
|Theming engine|A set of files and functionality that define the look, feel, behavior, and file associations of composed looks.||
|User Agent String|Information that a browser passes to a website that identifies the software that makes the request from the server.| [SharePoint Design Manager branding and design capabilities](../general-development/sharepoint-design-manager-branding-and-design-capabilities.md)|
|User Custom Action|A CSOM property that returns the collection of custom actions for a website, list, or site collection. The default file location is the following: 15\TEMPLATE\FEATURES<br /><br />For example:<br />&lt;HideCustomAction GroupId="Galleries"<br />&nbsp;&nbsp;&nbsp;HideActionId="Themes"<br />&nbsp;&nbsp;&nbsp;Location="Microsoft.SharePoint.SiteSettings"&gt;<br /> | - [UserCustomAction class](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.usercustomaction.aspx)<br />- [Create custom actions to deploy with SharePoint Add-ins](../sp-add-ins/create-custom-actions-to-deploy-with-sharepoint-add-ins.md)<br />- [How to: Work with User Custom Actions](https://msdn.microsoft.com/en-us/library/office/ee538686%28v=office.14%29.aspx)<br />- [Default Custom Action Locations and IDs](http://msdn.microsoft.com/library/6889686e-f6e6-4da0-bfd4-099878614980.aspx) |

## In this section

|Article|Shows you how to...|
|:-----|:-----|
| [Use composed looks to brand SharePoint sites](use-composed-looks-to-brand-sharepoint-sites.md)|Apply composed looks, including colors, fonts, and a background image, to your SharePoint and SharePoint Online sites.|
| [Use remote provisioning to brand SharePoint pages](use-remote-provisioning-to-brand-sharepoint-pages.md)|Use remote provisioning to interact with themes in SharePoint.|
| [Use CSS to brand SharePoint pages](use-css-to-brand-pages.md)|Use remote provisioning to interact with themes in SharePoint.|
| [Customize a SharePoint page by using remote provisioning and CSS](customize-a-sharepoint-page-by-using-remote-provisioning-and-css.md)|Use CSS to customize SharePoint rich text fields and web part zones.|
| [Update the branding of existing SharePoint sites and page regions](update-the-branding-of-existing-sharepoint-sites-and-page-regions.md) | Customize and then refresh the branding of existing SharePoint sites or regions of SharePoint pages, including the ribbon, the site navigation, the Settings menu, the tree view, and the page content.
|[Customize OneDrive for Business sites](customize-onedrive-for-business-sites.md)| Customize branding for OneDrive for Business sites in Office 365 or by using the add-in model, depending on your organization's requirements.|

## See also

- [SharePoint Developer Community (SharePoint PnP) resources](../community/community.md)  
- [Office 365 Developer Patterns and Practices on GitHub](https://github.com/SharePoint/PnP)
- [SharePoint pages and the page model](SharePoint-pages-and-the-page-model.md)
- [SharePoint development and design tools and practices](SharePoint-development-and-design-tools-and-practices.md)
- [SharePoint metadata, site navigation, and publishing site features](sharepoint-metadata-site-navigation-and-publishing-site-features.md)
- [Branding and site provisioning solutions for SharePoint](branding-and-site-provisioning-solutions-for-sharepoint.md)
