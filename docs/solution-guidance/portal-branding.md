---
title: Branding guidance for SharePoint Online portals
description: Describes branding requirements and general principles when branding portals in a SharePoint Online environment.
ms.date: 4/30/2018
---

# Branding guidance for SharePoint Online portals

Being able to apply a custom brand on a portal is a critical capability, and this article provides you with an overview of the branding options and branding best practices.

> [!NOTE] 
> Although this guidance primarily targets SharePoint Online, most of it also applies to portals hosted in an on-premises SharePoint environment.

<a name="sectionSectionAntiPatterns"> </a>

## What not to do

The following list contains the key things **not** to do when it comes to branding your portal.

Don't:

- Override branding of the Office 365 Suite Bar.
- Customize branding for personal sites.
- Implement by default your custom branding by using custom master pages.

## Branding requirements and general principles

Organizations typically want their portal to be unique. Custom branding can help to promote the corporate brand and values, and that's why a custom branding solution is essential for (enterprise) portals. 

### Typical branding requirements when building custom SharePoint Online portals

- Customize the look:
  - Implement a custom color scheme.
  - Show a custom logo.
  - Customize the look of the sign-in page.
  - Change the look of the navigation controls.

- Adjust the layout:
  - Change the overall layout of information on pages.
  - Make the portal "responsive."
  - Show a custom footer.

- Add more functionality:
  - Customize the behavior of the portal navigation.
  - Add custom controls (web parts) on pages.

In the following sections, we discuss how to address these requirements.

### General principles

Consider the following general principles when branding portals in a SharePoint Online environment:

- **The SharePoint Online service is constantly improving**. Updates provisioned to the service may affect the DOM structure of out-of-the-box pages and the content of out-of-the-box files (for example, master pages). Developers must keep this in mind and should not rely on unsupported customization approaches (for example, the position of specific elements in the DOM structure of the page).

- **Avoid customizing master pages**. Updates to the service may affect the structure of out-of-the-box master pages. If you have implemented a custom master page by copying the contents of any out-of-the-box master page, you must further monitor if this out-of-the-box master page is not updated, and re-implement these changes in your custom master page. Otherwise, some SharePoint functionality may behave incorrectly when your custom master page is in use. That's why customizing master pages leads to additional risks and maintenance costs, and we recommend that you avoid it when possible.

- **Customized branding of personal sites (OneDrive for Business sites) is not supported**. You can [apply custom color schemes via Office 365 tenant-level branding settings](https://support.office.com/en-us/article/Customize-the-Office-365-theme-for-your-organization-8275da91-7a48-4591-94ab-3123a3f79530)). Note that this applies to the default modern experience of OneDrive for Business.

- **SharePoint Online portals must be considered a part of the overall Office 365 ecosystem**. That's why every portal now has an Office 365 Suite Bar, and customizing it is **not** supported (see the section [Office 365 Suite Bar](#office-365-suite-bar)).

- When **planning branding and the structure of your navigation components**, it is important to follow the recommendations outlined in [Navigation solutions for SharePoint Online portals](portal-navigation.md).

- When **extending portal functionality via custom controls (web parts)**, it is important to follow the recommendations in [Performance guidance for SharePoint Online portals](portal-performance.md).

- **There are significant differences between branding approaches for "classic" vs "modern" sites and pages**. For information about "modern" sites and pages, see [Customizing "modern" team sites](modern-experience-customizations-customize-sites.md) and [Customizing "modern" site pages](modern-experience-customizations-customize-pages.md).

## Customize the look

There are several out-of-the-box ways for customizing the look of SharePoint portals:

- Administrators can customize the Office 365 theme for an entire tenant. 
- A custom theme can be applied to a specific site. 

These techniques can be used to "get" the needed colors and allow for flexible coloring across different portal sites. If more flexibility is needed, we recommend that customers start from an out-of-the-box master page (seattle.master) and apply a custom theme and/or use the site custom CSS settings (Web.AlternateCSSUrl) to hook up the needed CSS files. A custom logo image can be set by using the Web.SiteLogoUrl property. 

These techniques are demonstrated in the following articles and PnP samples:

- [Customize the Office 365 theme for your organization](https://support.office.com/en-us/article/Customize-the-Office-365-theme-for-your-organization-8275da91-7a48-4591-94ab-3123a3f79530)
- [Theme management using CSOM (GitHub)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.DeployCustomThemeWeb)
- [Apply branding (GitHub)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.ApplyBranding)
- [AlternateCSSUrl & SiteLogoUrl properties in Web object (GitHub)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.AlternateCSSAndSiteLogo)

Follow these recommendations when developing custom CSS files for SharePoint:

- Limit overriding out-of-the-box CSS classes.
- Use the Web.AlternateCssUrl property to include custom CSS files.
- Don't override the Office 365 Suite Bar branding because that results in a disconnected experience when users navigate away from the portal.


### Office 365 sign-in page

Customers can apply company branding to the Office 365 sign-in page. The process is described in [Add your company branding to Office 365 sign-in page](https://support.office.com/en-us/article/Add-your-company-branding-to-Office-365-Sign-In-Page-a1229cdb-ce19-4da5-90c7-2b9b146aef0a).

### Office 365 Suite Bar

The guidance for the Suite Bar from the Microsoft perspective is the following:

- The Suite Bar is a tenant-level navigation component that allows users to easily move between all Office 365 services.
- Your portal application does not "own" the Suite Bar, nor should it presume to do so.
- Treat the Suite Bar as you would the browser toolbar in that it is not a part of your application.
- You may modify/configure the Suite Bar, but only at the tenancy level, and only via the Office 365 Admin pages.
- You should not use code to alter (move, hide) the Suite Bar within your application.
- You should not re-use aspects of the Suite Bar (for example, the App Launcher icon) in your application.
- If you decide to be "clever", you will most likely run into unexpected issues in the future.

## Adjust the layout

When discussing adjusting the layout of SharePoint portals, usually the first option that is considered by developers is creating a custom master page. Although custom master pages are still supported, we don't recommend this approach due to the reasons mentioned earlier; custom master pages lead to additional risks and maintenance costs in the long-term. 

Developers should consider alternative approaches that allow them to adjust the layout of SharePoint portals. These include:

- Implementing custom CSS.
- Using custom page layouts.
- Implementing common branding elements (such as the "footer") by injecting client-side scripts (this approach is discussed in the next section).

Combining these approaches allows you to achieve your desired SharePoint portal layout without developing custom master pages. 

The following PnP samples and solutions on GitHub demonstrate how this can be achieved:

- [SharePoint 2013/2016/Online Responsive UI](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.UI.Responsive)
- [Making out-of-the-box Seattle master responsive](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.InjectResponsiveCSS)
- [Custom Header and Footer sample](https://github.com/SharePoint/PnP/tree/master/Samples/Core.EmbedJavaScript.HeaderFooter)

## Add functionality

Embedding client-side scripts in the pages can allow you to further customize the look and functionality of the portal. For example, this approach can be used to customize navigation controls, to add custom headers and footers to all pages of the portal, or to implement other custom UI blocks.

The following approaches can be used to embed JavaScript:

- Add a custom action at the site or site collection level. This can trigger the execution of a piece of JavaScript on all pages in the site or site collection.

- Add a Content Editor or Script Editor web part on a page by using actual JavaScript code or a link to a JavaScript file. This can trigger the execution of JavaScript code on a specific page.

- Include JavaScript code or a link to a JavaScript file in the contents of a page layouts file. This can trigger execution of JavaScript on all publishing pages that use this page layouts file.

> [!NOTE] 
> The custom action approach works on "classic" sites only, including the current publishing portals.

The following PnP samples demonstrate how JavaScript embedding can be achieved:
- [Core.EmbedJavaScript](https://github.com/SharePoint/PnP/tree/master/Samples/Core.EmbedJavaScript)
- [Core.EmbedJavaScriptJSOM](https://github.com/SharePoint/PnP/tree/master/Samples/Core.EmbedJavaScriptJSOM)
- [Customization via JavaScript](https://github.com/SharePoint/PnP/tree/master/Samples/Core.JavaScriptCustomization)

> [!NOTE] 
> When extending portal functionality by using JavaScript, it is crucial to follow recommendations outlined in [Performance guidance for SharePoint Online portals](portal-performance.md).

## Provision branding assets

The final step in implementing a branding solution is provisioning branding assets. Typically, these include images, CSS, and JavaScript files. 

There are several approaches on how these files can be deployed:

- **Publish files to libraries in individual site collections**. In this case, each site collection can use its own version of branding assets. Access to files is controlled by using standard SharePoint security mechanisms. However, updating files requires that you re-upload these to every site collection.

- **Publish files to a library in one site collection (central location)**. In this scenario, all site collections can use the single latest version of branding assets. Updated files must be uploaded to one location only. Administrators must ensure that users of all site collections have access to the files published in the central location.

- **Publish files to CDN (web application, Azure CDN, or Office 365 CDN)**. In this case, all site collections can use the single latest version of branding assets. Updated files must be uploaded to one location only. Using CDNs can improve performance; however, the content is stored outside of SharePoint, and that's why assets cannot be protected by using standard SharePoint security mechanisms (with the exception of the Office 365 private CDN capability, which can secure files on a CDN).

The [PnP provisioning engine](https://dev.office.com/blogs/introduction-to-office-365-dev-pnp-provisioning-engine) can be used to deploy branding assets to SharePoint libraries. When using the Office 365 CDN capability, the files are automatically provisioned in the CDN. When you use alternative CDN solutions, a custom provisioning approach is needed to publish files to CDNs.

For more information about CDNs, see:

- [Office 365 Public/Private CDN capability](https://dev.office.com/blogs/general-availability-of-office-365-cdn)
- [Using content delivery networks with SharePoint Online](https://support.office.com/en-gb/article/Using-content-delivery-networks-with-SharePoint-Online-9a64268c-0b74-4eaa-b971-fb6380b1b165)
- [CDN Manager](https://github.com/SharePoint/PnP/tree/master/Solutions/Core.CDNManager)

## See also

- [Branding SharePoint sites in the SharePoint Add-in model](branding-sharepoint-sites-sharepoint-add-in.md)
- [Branding SharePoint Online](https://sharepointgurus.net/branding-sharepoint-online/)
- [Review of Valo: Ready-to-go intranet on Office 365 and SharePoint](https://absolute-sharepoint.com/2017/01/review-of-valo-ready-to-go-intranet-on-office-365-and-sharepoint.html)
- [Building SharePoint Online portals](portal-overview.md)
