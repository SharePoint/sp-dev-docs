---
title: Master pages in the SharePoint Add-in model
description: The approach you take to implement custom master pages in SharePoint sites is different in the new SharePoint Add-in model than it was with Full Trust Code / Farm Solutions. In a typical Full Trust Code (FTC) / Farm Solution branding scenario, custom master pages are created to implement a custom brand. The master pages are typically packaged in a feature that uses declarative code and a FTC / Farm Solution to deploy the master pages and register them with the SharePoint site.
ms.date: 11/06/2017
ms.localizationpriority: medium
---
# Master pages in the SharePoint Add-in model

> [!IMPORTANT]
> This guidance applies to classic SharePoint experiences and the SharePoint Add-in model. Custom master pages aren't supported in modern SharePoint Online experiences and are considered a legacy customization approach.

The approach you take to implement custom master pages in SharePoint sites is different in the new SharePoint Add-in model than it was with Full Trust Code / Farm Solutions. In a typical Full Trust Code (FTC) / Farm Solution branding scenario, custom master pages are created to implement a custom brand. The master pages are typically packaged in a feature that uses declarative code and a FTC / Farm Solution to deploy the master pages and register them with the SharePoint site.

In a SharePoint Add-in model branding scenario, custom master pages may be used. You can deploy and register your custom master pages on SharePoint sites via the remote-provisioning pattern.

## High-level guidelines for custom master pages

As a rule of a thumb, we would like to provide the following high-level guidelines for custom master pages.

- You can customize SharePoint sites using custom master pages, but keep in mind this will cause you additional long-term costs and challenges with future updates.
  - In most cases, you can achieve all common branding scenarios with themes, composed looks and alternate CSS.

    See the [Branding SharePoint Sites (SharePoint Add-in Recipe)](branding-sharepoint-sites-sharepoint-add-in.md) to learn all about the different branding options you have for SharePoint sites with the SharePoint Add-in model. The recipe will help you consider the short and long-term impact of customization from an operational and a maintenance perspective. You may discover that a custom master page isn't required to implement your specific branding requirements.

  - If you chose to use custom master pages, be prepared to apply changes to the custom master pages when major functional updates are applied to Microsoft 365.
- Use remote provisioning to deploy and register custom master pages with SharePoint sites.
- Don't use declarative code or sandbox code to deploy and register master pages with SharePoint sites.

## Team sites vs. publishing sites

### When is a custom master page needed?

When applying custom branding to SharePoint sites, you'll encounter the need to brand both team sites and publishing sites. Generally speaking, intranets built on SharePoint in both on-premises and Microsoft 365 scenarios use a combination of team sites and publishing sites.

Custom branding requirements often require specific layout changes that themes and JavaScript embedding techniques can't accomplish.

In such a scenario, team sites usually don't require the amount of custom branding that publishing sites do and the out-of-the-box SharePoint Contemporary View for mobile devices is sufficient to support mobile devices for team sites. Since this is the case, it's best to only use custom master pages for publishing sites and to use AlternativeCSS and custom SharePoint themes (**\*.spcolor** files), font schemes (**\*.spfont** files) and background images defined as composed looks to brand team sites.

### Deployment considerations

- When deploying custom master pages to *publishing sites*, you only need to deploy the custom master pages to the root site.
  - The [Provisioning.PublishingFeatures (PnP Sample)](https://github.com/pnp/PnP/tree/master/Samples/Provisioning.PublishingFeatures) demonstrates how to deploy custom master pages to publishing sites.
- When deploying custom master pages to *non-publishing sites*, you need to deploy the custom master pages to each site.

Custom master pages are typically applied when a site is provisioned. The remote provisioning process fits well with this approach. Usually the only time you'll use the web browser to manually apply SharePoint branding customization is when you're prototyping or modifying a single SharePoint site that isn't planned to grow to include other site collections or sub sites.

- See the [Modules (SharePoint Add-in Recipe)](modules-sharepoint-add-in.md) and [Site Provisioning (SharePoint Add-in Recipe)](site-provisioning-sharepoint-add-in.md) for more deployment details and additional samples.

## More details about custom master pages and page layouts for SharePoint sites

In scenarios where a custom master page is the only way to implement your custom branding requirements you can create a custom master page and page layouts. Keep in mind the points made at the beginning of this article regarding the long-term maintenance costs associated with this approach.

- Using custom master pages for SharePoint sites provides the ultimate level of customization (unlimited).
- Using custom master pages for SharePoint sites requires the largest amount of time to implement and maintain in the short and long term.
- Any changes to out-of-the-box master pages that come with service updates won't be reflected in custom master pages.
- You can apply custom master pages at a per-site level.
- When using a custom master page, it's recommended to start with one of the out-of-the-box master pages and modify it to meet your needs.
  - Try to minimize the amount of customization you make with custom master pages; this will make it easier to update them when Microsoft 365 service changes to out-of-the-box master pages must be replicated to custom master pages.
- There are many required content placeholders in SharePoint master pages that must not be removed or they'll cause the pages to error. You'll know when you have removed a required content placeholder because the minute you deploy it and assign the master page to your site, errors will appear.

### When are custom master pages and page layouts for a SharePoint site a good fit?

This option works well when your branding needs are specific or you're using publishing sites.

### Recommended deployment approaches

- Custom master pages may be uploaded manually via the web browser and manually assigned to composed looks.
- Custom master pages may be uploaded and assigned to a SharePoint site via the remote provisioning pattern as well.
  - See the [Modules (SharePoint Add-in Recipe)](modules-sharepoint-add-in.md) and [Site Provisioning (SharePoint Add-in Recipe)](site-provisioning-sharepoint-add-in.md) for more deployment details and additional samples.

## Related links

- [Modules (SharePoint Add-in Recipe)](modules-sharepoint-add-in.md)
- [Site Provisioning (SharePoint Add-in Recipe)](site-provisioning-sharepoint-add-in.md)
- [Branding SharePoint Sites (SharePoint Add-in Recipe)](branding-sharepoint-sites-sharepoint-add-in.md)
- Guidance articles at [Office 365 development and SharePoint PnP solution guidance](/sharepoint/dev/solution-guidance/office-365-development-patterns-and-practices-solution-guidance)

## PnP samples

- [Theme management using CSOM (Microsoft 365 PnP Sample)](https://github.com/pnp/PnP/tree/master/Samples/Branding.DeployCustomThemeWeb)
- [AlternateCSSUrl and SiteLogoUrl Properties in the web object (PnP Sample)](https://github.com/pnp/PnP/tree/master/Samples/Branding.AlternateCSSAndSiteLogo)
- [Set theme to site (PnP Sample)](https://github.com/pnp/PnP/tree/master/Samples/Branding.SetThemeToSite)
- [Setting a SharePoint Theme in an App for SharePoint (PnP Sample)](https://github.com/pnp/PnP/tree/master/Samples/Branding.Themes)
- [Making out-of-the-box Seattle master responsive (PnP Sample)](https://github.com/pnp/PnP/tree/master/Samples/Branding.InjectResponsiveCSS)
- Samples and content at [https://github.com/pnp/PnP](https://github.com/pnp/PnP)

## Applies to

- Microsoft 365 multitenant (MT)
- Microsoft 365 Dedicated (D) *partly*
- SharePoint 2013 on-premises – *partly*

*Patterns for dedicated and on-premises are identical with SharePoint Add-in model techniques, but there are differences on the possible technologies that can be used.*
