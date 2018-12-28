---
title: Scenario Guidance - Branding
description: Scenario guidance on branding options with SharePoint.
ms.date: 03/26/2018
---

# Branding

## Summary

There are many different reasons why you would apply custom branding to a SharePoint site. These reasons can include corporate identity, usability, marketing, etc. SharePoint Online sites support customized branding, but options are slightly different than with SharePoint on-premises deployments. 

Resources in this article will help you consider the short and long-term impact of customization from an operational and a maintenance perspective. Guidance around the long term impact analyzes is not really specific for SharePoint; but is rather a rule of thumb for any IT solution built with any platform.

## High-level guideline/general rules

- Office 365 is being updated frequently. To be able to benefit of the latest capabilities, use only the recommended approaches to brand SharePoint Online
- When customizing SharePoint user experience through DOM manipulation, custom CSS or custom master pages and page layouts, after applying each SharePoint update, verify that your customizations are still working as expected and don't collide with any of the changes introduced withing the installed updates.

## Modern experiences

_**Applies to:** Office 365_

In 2016, the SharePoint Online team released "modern" collaboration sites. These "modern" team sites are integrated with Office 365 groups and bring a greatly improved end user experience. "Modern" team sites are responsive by design and are much faster to create and use from an end user perspective. Following are some of the key benefits of the "modern" team sites:

- Designed to scale for any device natively without customizations for a fully responsive experience.
- Contain native news, quick links, and activity capabilities.
- Integrated with Office 365 groups.
- Significantly faster site creation compared to "classic" team sites.
- Include "modern" lists and libraries with support for Microsoft Flow and PowerApps.
- Contain "modern" page editing capabilities.
- Include an updated site contents page with additional insights on site usage.

"Modern" sites have a different level of customization options compared to "classic" team sites. Over time we'll introduce additional customization options, mainly focusing on extensibility and branding. The following list gives a quick overview of the supported capabilities for "modern" team sites. You can:

- Apply a custom theme or change the logo.
- Apply an out-of-the-box theme.
- Create custom site columns (fields) and content types.
- Create lists and libraries.
- Configure site settings, such as regional settings, languages, and auditing settings.
- Use SharePoint Framework extensions to provide user interface components and controls.
- Use Hub Sites capability to provide cross site collection navigation capability.

### Articles

- [Customizing the "modern" experiences in SharePoint Online](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-customizations)
- [SharePoint Site Theming (modern)](https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-theming/sharepoint-site-theming-overview)
- [Overview of programming SharePoint hub sites](https://docs.microsoft.com/en-us/sharepoint/dev/features/hub-site/hub-site-overview)
- [New site theming options for SharePoint sites in Office 365](https://techcommunity.microsoft.com/t5/SharePoint-Blog/New-site-theming-options-for-SharePoint-sites-in-Office-365/ba-p/94001)
- [Change the look of your SharePoint site](https://support.office.com/en-us/article/Change-the-look-of-your-SharePoint-site-06bbadc3-6b04-4a60-9d14-894f6a170818)
- [Overview of SharePoint Framework Extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/overview-extensions)

### Solutions

- [SharePoint Framework Extension samples](https://github.com/SharePoint/sp-dev-fx-extensions)
- [SharePoint Modernization scanner](https://github.com/SharePoint/sp-dev-modernization/tree/master/Tools/SharePoint.Modernization)

### Videos

- [PnP Webcast - Customizations options with SharePoint Online “modern” experiences](https://www.youtube.com/watch?v=724Spxu3hF4)
- [PnP Webcast - Managing modern experiences in SharePoint Online](https://www.youtube.com/watch?v=T-enocLYxcY)
- [PnP Webcast - SharePoint "Modern" user interface experience scanner](https://www.youtube.com/watch?v=ivoQdIgp9ps)
- [The Mobile and Intelligent Intranet: SharePoint sites and PowerApps](https://www.youtube.com/watch?v=x8tgKBXmmPg)
- [What’s new and what's coming for branding and organizing your SharePoint sites - BRK2393 - Ignite '17](https://www.youtube.com/watch?v=YBGYl35oU0k)
- [New web experiences in Office 365 that empower your users - BRK1050 - Ignite '17](https://www.youtube.com/watch?v=IMV97BwS5Xk)

## Classic experiences

_**Applies to:** Office 365 | SharePoint Server 2016 | SharePoint Server 2013_

The classic SharePoint user experience is based on ASP.NET master pages and page layouts. While it gives you more control and flexibility with regards to branding, it requires more effort to keep operational. Master pages and page layouts in SharePoint contain references to SharePoint resources. Every time you patch your SharePoint Farm or SharePoint Online is updated, you will have to ensure that your custom master pages contain all the necessary references for you to be able to fully use the latest SharePoint features.


### Articles

- [Branding and site provisioning solutions for SharePoint Server 2013, SharePoint Server 2016 and SharePoint Online](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/branding-and-site-provisioning-solutions-for-sharepoint)
- [Master pages, the Master Page Gallery, and page layouts in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/master-pages-the-master-page-gallery-and-page-layouts-in-sharepoint)
- [Customize OneDrive for Business site branding](https://msdn.microsoft.com/en-us/library/office/mt168839.aspx)

### Solutions

- [SharePoint 2013/2016/Online Responsive UI](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.UI.Responsive)
- [SharePoint Modernization scanner](https://github.com/SharePoint/sp-dev-modernization/tree/master/Tools/SharePoint.Modernization)
- [PnP Starter Intranet for SharePoint 2013/2016 and SharePoint Online](https://dev.office.com/patterns-and-practices-detail/11128)

### Videos

- [Learn best practices for customizing and branding SharePoint Team Sites](https://www.youtube.com/watch?v=2AxN-G56-d4)

## Modern themes

_**Applies to:** Modern sites_

SharePoint site owners have new options for applying custom styles and colors to sites that make it easier to define and manage themes across site collections. These new features include:

- The ability to define custom themes and make them available to site owners. Themes are defined in a [JSON schema](../declarative-customization/site-theming/sharepoint-site-theming-overview.md) that stores color settings and related metadata for each theme.
- An online [Theme Generator tool](https://developer.microsoft.com/en-us/fabric#/styles/themegenerator) that you can use to define new custom themes.
- A simplified set of default themes, with six light themes and two dark themes presently available.
- An updated color palette, with 12 light colors and 6 dark colors, as well as 16 supplementary themes.
- Control over which themes are available for use on pages within your sites. For example, you can define custom themes based on your organization's branding or identity, and make those the only available themes within your sites.

These capabilities are available to administrators via [PowerShell cmdlets](../declarative-customization/site-theming/sharepoint-site-theming-powershell.md), and to developers via the SharePoint [Client Side Object Model (CSOM)](../declarative-customization/site-theming/sharepoint-site-theming-csom.md) or the SharePoint [REST API](../declarative-customization/site-theming/sharepoint-site-theming-rest-api.md).

### Articles

- [SharePoint site theming](../declarative-customization/site-theming/sharepoint-site-theming-overview.md)
- [SharePoint themes and colors](https://docs.microsoft.com/en-us/sharepoint/dev/design/themes-colors)

## Composed looks (classic SharePoint themes)

_**Applies to:** Classic sites_

Composed looks are out-of-the-box themes that are included in SharePoint 2013 and SharePoint Online. To apply a composed look to a SharePoint site, select **Site Settings** > **Look and Feel** > **Change the look**. You can then use the Change the look wizard to customize the colors, fonts, master page, and background image of a composed look. The Change the look wizard copies, transforms, and stores CSS in SharePoint's content database. It also recolors images and stores them in the content database.

### Articles

- [Themes overview for SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/themes-overview-for-sharepoint)
- [Use composed looks to brand SharePoint sites](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/use-composed-looks-to-brand-sharepoint-sites)
- [Branding SharePoint sites in the SharePoint Add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/branding-sharepoint-sites-sharepoint-add-in)
- [SharePoint site branding and page customization solutions](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/sharepoint-site-branding-and-page-customization-solutions)
- [Proven Practices for SharePoint Online portal branding](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/portal-branding)

## Design Manager and Design packages

_**Applies to:** Classic sites_

Design Manager is a feature in SharePoint that makes it easier to create a fully customized, pixel-perfect design while using the web-design tools that you're already familiar with. Design Manager is a publishing feature that is available in classic publishing sites in both SharePoint and Office 365.

With Design Manager, you can create a visual design for your website by using whatever web design tool or HTML editor you prefer, using only HTML and CSS, and then upload that design into SharePoint. Design Manager is the central hub and interface where you manage all aspects of a custom design.

### Articles

- [Overview of Design Manager in SharePoint](../general-development/overview-of-design-manager-in-sharepoint.md)
- [SharePoint Design Manager display templates](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/sharepoint-design-manager-display-templates)
- [SharePoint Design Manager branding and design capabilities](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/sharepoint-design-manager-branding-and-design-capabilities)
- [SharePoint development and design tools and practices](https://msdn.microsoft.com/en-us/library/office/dn985873.aspx)

## Custom master pages and page layouts

_**Applies to:** Classic sites_

Master pages provide the look and feel and standard behavior that you want for all of the pages in your site. Together with content pages, they produce output that combines the layout of the master page with content from the content page.

Because Microsoft SharePoint is built on top of Microsoft ASP.NET, it supports master pages for defining elements that are common to all pages. You can specify all of the shared elements of your site in the master page or pages, and add page-specific elements to content pages.

### Articles

- [Overview of the SharePoint page model](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/overview-of-the-sharepoint-page-model)
- [Master pages, the Master Page Gallery, and page layouts in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/master-pages-the-master-page-gallery-and-page-layouts-in-sharepoint)
- [Master pages in the SharePoint Add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/master-pages-sharepoint-add-in)
- [SharePoint Page Layouts and Master Pages (ECM)](https://msdn.microsoft.com/en-us/library/office/ms543497(v=office.14).aspx)
- [Master Pages](https://msdn.microsoft.com/en-us/library/office/ms443795(v=office.14).aspx)
- [Transformation guidance from farm solutions to add-in model - Replacement of files deployed via Modules (lab)](https://github.com/OfficeDev/TrainingContent/tree/master/Archive/O3658/10%20Transformation%20guidance%20from%20farm%20solutions%20to%20add-in%20model)
- [Branding SharePoint sites in the SharePoint Add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/branding-sharepoint-sites-sharepoint-add-in)

### Videos

- [PnP Webcast - Customizations options with SharePoint Online “modern” experiences](https://www.youtube.com/watch?v=724Spxu3hF4)
- [Learn best practices for customizing and branding SharePoint Team Sites](https://www.youtube.com/watch?v=2AxN-G56-d4)
- [Office Dev PnP Web Cast – Branding SharePoint using add-in model techniques](https://dev.office.com/blogs/branding-sharepoint-using-add-in-model-techniques)

### Solutions

- [SharePoint Modernization scanner](https://github.com/SharePoint/sp-dev-modernization/tree/master/Tools/SharePoint.Modernization)
- [PnP PowerShell branding cmdlets](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-pnp/sharepoint-pnp-cmdlets?view=sharepoint-ps#branding)
- [Transformation tool](https://github.com/SharePoint/PnP-Transformation/tree/master/Transformation%20Tool%20-%20CSOM#introduction)

## Custom CSS

_**Applies to:** Classic sites_

Cascading style sheet (CSS) plays a large role in SharePoint branding. To successfully customize the site design in SharePoint 2013 and SharePoint Online, it's useful to be familiar with how SharePoint uses CSS.

### Articles

- [Use CSS to brand SharePoint pages](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/use-css-to-brand-pages)
- [Make custom CSS files themable in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/how-to-make-custom-css-files-themable-in-sharepoint)
- [Customize a SharePoint page by using remote provisioning and CSS](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/customize-a-sharepoint-page-by-using-remote-provisioning-and-css)
- [Upgrade custom themes and CSS to SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/upgrade-custom-themes-and-css-to-sharepoint)
- [Apply styles to page fields in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/how-to-apply-styles-to-page-fields-in-sharepoint)
- [Use a SharePoint website's style sheet in SharePoint Add-ins](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/use-a-sharepoint-website-s-style-sheet-in-sharepoint-add-ins)
- [Give your provider-hosted add-in the SharePoint look-and-feel](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/give-your-provider-hosted-add-in-the-sharepoint-look-and-feel)
- [Optimize page performance in SharePoint - JavaScript and CSS files](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/optimize-page-performance-in-sharepoint#compress-crunch-javascript-and-css-files)
- [Branding SharePoint sites in the SharePoint Add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/branding-sharepoint-sites-sharepoint-add-in)
- [Proven Practices for SharePoint Online Portals - Performance](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/portal-performance)
- [Controlling branding in SharePoint using add-in model](https://github.com/OfficeDev/TrainingContent/tree/master/SharePoint/AddIns/06%20Branding%20with%20add-in%20model%20techniques)

### Videos

- [PnP Add-In Transformation Training module 3: Branding with add-in model](https://channel9.msdn.com/blogs/OfficeDevPnP/PnP-Add-In-Transformation-Training-module-3-Branding-with-add-in-model)
- [Learn best practices for customizing and branding SharePoint Team Sites](https://www.youtube.com/watch?v=2AxN-G56-d4)

### Solutions

- [SharePoint 2013/2016/Online Responsive UI](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.UI.Responsive)
- [Activate the PnP Responsive UI Add-on using PnP PowerShell](https://msdn.microsoft.com/en-us/pnp_powershell/enablepnpresponsiveui)
- [CSS Injection Pattern sample](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.CustomCSS)
- [SharePoint Modernization scanner](https://github.com/SharePoint/sp-dev-modernization/tree/master/Tools/SharePoint.Modernization)
- [Transformation tool](https://github.com/SharePoint/PnP-Transformation/tree/master/Transformation%20Tool%20-%20CSOM#introduction)

### Samples

- [CSS injection pattern](https://dev.office.com/patterns-and-practices-detail/1852)
- [AlternateCssUrl & SiteLogoUrl properties in web object](https://dev.office.com/patterns-and-practices-detail/1849)
- [Making out-of-the-box Seattle master responsive](https://dev.office.com/patterns-and-practices-detail/5823)

## Script Embedding and DOM manipulation

_**Applies to:** Classic sites_

Script Embedding means a pattern where custom JavaScript is added on the page which then modifies the end user experiences by modifying the html DOM structure. Typical approaches for this model is to use either *User Custom Actions*, *JSLink*, *Content Editor web part* or *Script Editor web part*. Challenge of the DOM manipulation related model is dependency on the actual page structure. These kind of customizations are fragile and can easily break as new capabilities are released in SharePoint Online.

### Articles

- [Branding SharePoint sites in the SharePoint Add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/branding-sharepoint-sites-sharepoint-add-in)
- [Proven Practices for SharePoint Online Portals - Performance](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/portal-performance)
- [Embedding JavaScript into SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/embedding-javascript-into-sharepoint)
- [Migrating User CustomAction / ECB menu items to SharePoint Framework Extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/guidance/migrate-user-customactions-to-spfx-extensions)
- [Migrating from UserCustomAction to SharePoint Framework Extensions (tutorial)](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/guidance/migrate-from-usercustomactions-to-spfx-extensions)
- [JavaScript Patterns and Performance](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/javascript-patterns-and-performance)

### Videos

- [JavaScript injection in SharePoint Online - Office 365 Developer Patterns and Practices](http://channel9.msdn.com/Blogs/Office-365-Dev/JavaScript-injection-in-SharePoint-Online-Office-365-Developer-Patterns-and-Practices)
- [How to update your SharePoint pages via the embedding of JavaScript](https://channel9.msdn.com/blogs/OfficeDevPnP/JavaScript-embedding-demo)
- [Office Dev PnP Web Cast – JavaScript development patterns with SharePoint](https://dev.office.com/blogs/javascript-development-patterns-with-sharepoint)

### Samples

- [Branding.ClientSideRendering - Shows usage of the client side rendering with JSLink property and how to automate this configuration from add-in](https://github.com/OfficeDev/PnP/tree/master/Samples/Branding.ClientSideRendering)
- [Branding.JSLink - Shows how to setup JSLink property with no-code sandbox solution deployment](https://github.com/OfficeDev/PnP/tree/master/Samples/Branding.JSLink)
- [Core.EmbedJavaScript - Shows basic JavaScript embedding scenarions](https://github.com/OfficeDev/PnP/tree/master/Samples/Core.EmbedJavaScript)
- [Core.EmbedJavaScriptJSOM - Shows how to do JavaScript embedding from SP hosted add-in](https://github.com/OfficeDev/PnP/tree/master/Samples/Core.EmbedJavaScriptJSOM)
- [Core.EmbedJavaScript.HeaderFooter - Shows how to add custom header and footer with JavaScript embed pattern](https://github.com/OfficeDev/PnP/tree/master/Samples/Core.EmbedJavaScript.HeaderFooter)
- [CDN Manager](https://dev.office.com/patterns-and-practices-detail/5822)
