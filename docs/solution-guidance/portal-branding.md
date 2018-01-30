---
title: Proven Practices for SharePoint Online portal branding
ms.date: 11/03/2017
---
# Proven Practices for SharePoint Online portal branding

Being able to apply a custom brand on a portal is a critical capability and this article provides you with an overview of the branding options and branding best practices.

> [!NOTE] 
> Although this guidance is targeting SharePoint Online most of it also applies to portals hosted on a SharePoint on-premises environment.


_**Applies to:** SharePoint Online_

## Anti-patterns (in other words, don't do these things)
<a name="sectionSectionAntiPatterns"> </a>
Below list contains the key things **not** to do when it comes to branding your portal:
- Override branding of Office 365 Suite Bar
- Customize branding for personal sites
- By default implement your custom branding by using custom master pages

## Overview
<a name="sectionSection0"> </a>
Organizations typically want their portal to be unique and nice looking. Custom branding can help to promote the corporate brand and values and that's why custom branding solution is essential for (enterprise) portals. 
Here are the typical branding requirements we hear from the customers, when building custom portals on SharePoint:
- Customize the look:
  - Implement custom color scheme
  - Show custom logo
  - Customize the look of sign-in page
  - Change the look of navigation controls
- Adjust the layout:
  - Change overall layout of information on pages
  - Make portal "responsive"
  - Show custom footer
- Add more functionality:
  - Customize the behavior of portal navigation
  - Add custom controls (web parts) on pages

In the following sections, we will discuss how to address these requirements.

## General Principles
<a name="sectionSection1"> </a>
The following general principles should be considered when branding portals in an SharePoint Online environment:
1. The SharePoint Online service is constantly improving. Updates provisioned to the service may affect DOM structure of out of the box pages, and the content of out of the box files (for example, master pages). Developers must keep this in mind and should not rely on unsupported customization approaches (for example, position of specific element in DOM structure of the page).
2. Avoid customizing master pages. As mentioned above, updates to the service, may affect the structure of out of the box master pages. If you have implemented custom master page copying the contents of any out of the box master page, you will need to further monitor if this out of the box master page is not updated, and re-implement these changes in your custom master page. Otherwise, some SharePoint functionality may start behaving incorrectly, when your custom master page is in use. That's why customizing master pages leads to additional risks and maintenance costs, and it's recommended to avoid it, when possible.
3. Customized branding of personal sites (OneDrive for Business sites) is **not** supported. It is allowed to apply custom color schemes via Office 365 tenant level branding settings ([Customize the Office 365 theme for your organization](https://support.office.com/en-us/article/Customize-the-Office-365-theme-for-your-organization-8275da91-7a48-4591-94ab-3123a3f79530)). *Notice* that this applies to the default modern experience of OneDrive for Business.
4. SharePoint Online portals must be considered as a part of overall Office 365 ecosystem. That's why every portal now has Office 365 Suite Bar, and customizing it is **not** supported (see the section **Office 365 Suite Bar** below).
5. When planning branding and structure of your navigation component, it is important to follow recommendations outlined in [Portal Navigation article](portal-navigation.md).
6. When extending portal functionality via custom controls (web parts) it is important to follow recommendations from [Portal Performance article](portal-performance.md).
7. There are significant differences between branding approaches supported for "classic" vs "modern" sites and pages. For detailed information about "modern" sites and pages, see: [Customizing "modern" team sites](https://msdn.microsoft.com/en-us/pnp_articles/modern-experience-customizations-customize-sites) and [Customizing "modern" site pages](https://msdn.microsoft.com/en-us/pnp_articles/modern-experience-customizations-customize-pages).

## Customize The Look
<a name="sectionSection2"> </a>
There are several out of the box ways for customizing the look of SharePoint portals. First, administrators can customize the Office 365 theme for an entire tenant. Next, a custom theme can be applied to specific site. 
These techniques can be used to "get" the needed colors / allow for flexible coloring across different portal sites. If more flexibility is needed, it is recommended that customers start from out of the box master page (seattle.master) and apply a custom theme and/or use the site custom CSS settings (``Web.AlternateCSSUrl``) to hookup the needed CSS files. Custom logo image can be set using the ``Web.SiteLogoUrl`` property. These techniques are demonstrated in the following articles and PnP samples:
- [Customize the Office 365 theme for your organization](https://support.office.com/en-us/article/Customize-the-Office-365-theme-for-your-organization-8275da91-7a48-4591-94ab-3123a3f79530)
- [Theme management using CSOM](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.DeployCustomThemeWeb)
- [Apply branding](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.ApplyBranding)
- [AlternateCSSUrl & SiteLogoUrl properties in Web object](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.AlternateCSSAndSiteLogo)
- [Branding out of the box navigation controls](http://blog.sharepointexperience.com/2016/10/branding-structured-managed-navigation-sharepoint/)

There are several recommendations that should be followed when developing custom CSS files for SharePoint:
1. Limit overriding out of the box CSS classes
2. Use the ``Web.AlternateCssUrl`` property to include custom CSS files
3. Don't override the Office 365 Suite Bar branding as that will result in a disconnected experience when users navigate away from the portal


### Office 365 Sign-In Page
Customers can apply company branding to Office 365 sign-in page. The process is described in the following article: [Add your company branding to Office 365 Sign In page](https://support.office.com/en-us/article/Add-your-company-branding-to-Office-365-Sign-In-Page-a1229cdb-ce19-4da5-90c7-2b9b146aef0a).

### Office 365 Suite Bar
The guidance around the Suite Bar from the Microsoft perspective is the following:
- The Suite Bar is a tenant-level navigation component that allows users to easy move between ALL Office 365 Services in an easy and consistent manner
- Your Portal Application does not "own" the Suite Bar, nor should it presume to do so
- Treat the Suite Bar as you would the Browser Toolbar in that it is NOT a part of your application
- You may modify/configure the Suite Bar, but only at the tenancy level, and only via the O365 Admin pages
- You should NOT use code to alter (move, hide, etc.) the Suite Bar within your Application
- You should NOT re-use aspects of the Suite Bar (e.g., the App Launcher icon) in your Application
- If you decide to be "clever", you will most likely run into unexpected issues in future

## Adjust The Layout
<a name="sectionSection3"> </a>
When talking about adjusting the layout of SharePoint portals, usually the first option that is considered by developers is creating a custom master page. Although custom master pages are still supported, this approach is not recommended due to the reasons mentioned above - custom master pages lead to additional risks and maintenance costs in long-term. That's why developers should consider alternative approaches that allow to adjust the layout of SharePoint portals. These include:
- Implementing custom CSS
- Using custom page layouts
- Implementing common branding elements (like "footer") by injecting client-side scripts (this approach is discussed in the next section)

Combining these approaches allows you to achieve your desired SharePoint portal layout without developing custom masterpages. The following PnP samples and solutions demonstrate how this can be achieved:
- [SharePoint 2013/2016/Online Responsive UI](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.UI.Responsive)
- [Making out of the box Seattle master responsive](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.InjectResponsiveCSS)
- [Custom Header and Footer sample](https://github.com/SharePoint/PnP/tree/master/Samples/Core.EmbedJavaScript.HeaderFooter)

## Add Functionality
<a name="sectionSection4"> </a>
Embedding client-side scripts in the pages can allow to further customize the look and functionality of the portal. For example, this approach can be used to customize navigation controls, to add custom headers and footers to all pages of the portal, or to implement other custom UI blocks.

The following approaches can be used to embed JavaScript:
1. Add a custom action at site or site collection level. This can trigger the execution of a piece of JavaScript on all pages in the site or site collection.
2. Add Content Editor or Script Editor web part on a page with actual JavaScript code, or a link to JavaScript file. This can trigger the execution of JavaScript code on specific page.
3. Include JavaScript code or a link to JavaScript file in contents of page layouts file. This can trigger execution of JavaScript on all publishing pages that use this page layouts file.

It should be noted, that custom action approach works on "classic" sites only, including the current publishing portals.

The following PnP samples demonstrate how JavaScript embedding can be achieved:
- [Core.EmbedJavaScript](https://github.com/SharePoint/PnP/tree/master/Samples/Core.EmbedJavaScript)
- [Core.EmbedJavaScriptJSOM](https://github.com/SharePoint/PnP/tree/master/Samples/Core.EmbedJavaScriptJSOM)
- [Customization via JavaScript](https://github.com/SharePoint/PnP/tree/master/Samples/Core.JavaScriptCustomization)

It is important to highlight, that when extending portal functionality by using JavaScript, it is crucial to follow recommendations outlined in [Portal Performance article](portal-performance.md).

## Provisioning Branding Assets
<a name="sectionSection5"> </a>
The final step in implementing branding solution is provisioning branding assets. Typically, these include images, CSS and JavaScript files. There are several approaches how these files can be deployed:
1. Publish files to libraries in individual site collections. In this case each site collection can use its own version of branding assets. Access to files is controlled using standard SharePoint security mechanisms. However, updating files will require to re-upload these to every site collection.
2. Publish files to library in one site collection (central location). In this scenario, all site collections can use the single latest version of branding assets. Updated files must be uploaded to one location only. Administrators must ensure that users of all site collections have access to the files published in central location.
3. Publish files to CDN (web application, Azure CDN or Office 365 CDN). In this case, all site collections can use the single latest version of branding assets. Updated files must be uploaded to one location only. Using CDN's can improve performance, however the content is stored outside of SharePoint, and that's why assets cannot be protected using standard SharePoint security mechanisms, with the exception of the Office 365 private CDN capability which can secure files on a CDN.

[PnP Provisioning Engine](https://dev.office.com/blogs/introduction-to-office-365-dev-pnp-provisioning-engine) can be used to deploy branding assets to SharePoint libraries. When using the Office 365 CDN capability the files are automatically provisioning in the CDN, when you use alternative CDN solutions a custom provisioning approach is needed to publish files to CDN's.

For more information on CDN's, see:
- [Office 365 Public/Private CDN capability](https://dev.office.com/blogs/general-availability-of-office-365-cdn)
- [Using content delivery networks with SharePoint Online](https://support.office.com/en-gb/article/Using-content-delivery-networks-with-SharePoint-Online-9a64268c-0b74-4eaa-b971-fb6380b1b165)
- [CDN Manager](https://github.com/SharePoint/PnP/tree/master/Solutions/Core.CDNManager)

## See also
<a name="bk_addresources"> </a>

- [Branding SharePoint sites in the SharePoint add-in model](branding-sharepoint-sites-sharepoint-add-in.md)
- [Branding SharePoint Online](https://sharepointgurus.net/branding-sharepoint-online/)
- [92% of Branding SharePoint is CSS, So Why Are You Living in a Master Page?](http://blog.sharepointexperience.com/2016/12/sptechcon-sf-2016-branding-with-css-session-recap/)
- [Review of Valo: Ready-to-go intranet on Office 365 and SharePoint](https://absolute-sharepoint.com/2017/01/review-of-valo-ready-to-go-intranet-on-office-365-and-sharepoint.html)
