Master pages in the SharePoint add-in model
===========================================

Summary
-------

The approach you take to implement custom master pages in SharePoint sites is different in the new SharePoint Add-in model than it was with Full Trust Code / Farm Solutions. In a typical Full Trust Code (FTC) / Farm Solution branding scenario, custom master pages are created to implement a custom brand. The master pages are typically packaged in a feature that uses declarative code and a FTC / Farm Solution to deploy the master pages and register them with the SharePoint site.

In a SharePoint Add-in model branding scenario, custom master pages may be also be used. You can deploy and register your custom master pages on SharePoint sites via the remote-provisioning pattern.

High-level guidelines for custom master pages
---------------------------------------------

As a rule of a thumb, we would like to provide the following high-level guidelines for custom master pages.

- You can customize SharePoint sites using custom master pages, but keep in mind this will cause you additional long-term costs and challenges with future updates.
	+ In most cases, you can achieve all common branding scenarios with themes, composed looks and alternate CSS.
	
		See the [Branding SharePoint Sites (SharePoint Add-in Recipe)](branding-sharepoint-sites-sharepoint-add-in.md) to learn all about the different branding options you have for SharePoint sites with the SharePoint Add-in model.  The recipe will help you consider the short and long-term impact of customization from an operational and a maintenance perspective. You may discover that a custom master page is not required to implement your specific branding requirements. 

	+ If you chose to use custom master pages, be prepared to apply changes to the custom master pages when major functional updates are applied to Office 365.
- Use remote provisioning to deploy and register custom master pages with SharePoint sites.
- Do not use declarative code or sandbox code to deploy and register master pages with SharePoint sites.  

Team sites vs. publishing sites
-------------------------------

**When is a custom master page needed?**

When applying custom branding to SharePoint sites, you will encounter the need to brand both team sites and publishing sites. Generally speaking, intranets built on SharePoint in both on-premises and Office 365 scenarios use a combination of team sites and publishing sites.  

Custom branding requirements often times require specific layout changes that themes and JavaScript embedding techniques cannot accomplish.

In such a scenario, team sites usually do not require the amount of custom branding that publishing sites do and the out-of-the-box SharePoint Contemporary View for mobile devices is usually sufficient to support mobile devices for team sites. Since this is the case, it is best to only use custom master pages for publishing sites and to use AlternativeCSS and custom SharePoint themes (.spcolor files), font schemes (.spfont files) and background images defined as composed looks to brand team sites.

**Deployment considerations**

- When deploying custom master pages to *publishing sites* you only need to deploy the custom master pages to the root site.
	+ The [Provisioning.PublishingFeatures (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.PublishingFeatures) demonstrates how to deploy custom master pages to publishing sites. 
	+ The [Provisioning SharePoint Publishing Features (O365 PnP Video)](http://channel9.msdn.com/Blogs/Office-365-Dev/Provisioning-SharePoint-Publishing-Features-Office-365-Developer-Patterns-and-Practices) walks you through the sample. 	
- When deploying custom master pages to *non-publishing sites* you need to deploy the custom master pages to each site.

Custom master pages are typically applied when a site is provisioned. The remote provisioning process fits very well with this approach. Usually the only time you will use the web browser to manually apply SharePoint branding customization is when you are prototyping or modifying a single SharePoint site that is not planned to grow to include other site collections or sub sites. 

+ See the [Modules (SharePoint Add-in Recipe)](modules-sharepoint-add-in.md) and [Site Provisioning (SharePoint Add-in Recipe)](site-provisioning-sharepoint-add-in.md) for more deployment details and additional samples.

More details about custom master pages and page layouts for SharePoint sites
----------------------------------------------------------------------------

In scenarios where a custom master page is the only way to implement your custom branding requirements you can create a custom master page and page layouts. Keep in mind the points made at the beginning of this article with regard to the long-term maintenance costs associated with this approach.

- Using custom master pages for SharePoint sites provides the ultimate level of customization (unlimited).
- Using custom master pages for SharePoint sites requires the largest amount of time to implement and maintain in the short and long term.
- Any changes to out-of-the-box master pages that come with service updates will not be reflected in custom master pages.
- You can apply custom master pages at a per-site level.
- When using a custom master page it is recommended to start with one of the out-of-the-box master pages and modify it to meet your needs.
	+ Try to minimize the amount of customization you make with custom master pages; this will make it easier to update them when Office 365 service changes to out-of-the-box master pages must be replicated to custom master pages.  
- There are many required content placeholders in SharePoint master pages that must not be removed or they will cause the pages to error. You will know when you have removed a required content placeholder because the minute you deploy it and assign the master page to your site, errors will appear.

**When are custom master pages and page layouts for a SharePoint site a good fit?**

This option works well when your branding needs are very specific or you are using publishing sites.

**Recommended deployment approaches**

- Custom master pages may be uploaded manually via the web browser and manually assigned to composed looks.
- Custom master pages may be uploaded and assigned to a SharePoint site via the remote provisioning pattern as well.
	+ See the [Modules (SharePoint Add-in Recipe)](modules-sharepoint-add-in.md) and [Site Provisioning (SharePoint Add-in Recipe)](site-provisioning-sharepoint-add-in.md) for more deployment details and additional samples.

Related links
=============
- [Modules (SharePoint Add-in Recipe)](modules-sharepoint-add-in.md)
- [Site Provisioning (SharePoint Add-in Recipe)](site-provisioning-sharepoint-add-in.md)
- [Branding SharePoint Sites (SharePoint Add-in Recipe)](branding-sharepoint-sites-sharepoint-add-in.md)
- Ignite 2015 - [Deep Dive into Safe SharePoint Branding in Office 365 Using Repeatable Patterns and Practices](https://channel9.msdn.com/Events/Ignite/2015/BRK3164)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- [Theme management using CSOM (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.DeployCustomThemeWeb)
- [AlternateCSSUrl and SiteLogoUrl Properties in the web object (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.AlternateCSSAndSiteLogo)
- [Set theme to site (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.SetThemeToSite)
- [Setting a SharePoint Theme in an App for SharePoint (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.Themes)
- [Making out of the box Seattle master responsive (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.InjectResponsiveCSS)
- Samples and content at [https://github.com/SharePoint/PnP](https://github.com/SharePoint/PnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D) *partly*
- SharePoint 2013 on-premises – *partly*

*Patterns for dedicated and on-premises are identical with SharePoint Add-in model techniques, but there are differences on the possible technologies that can be used.*
