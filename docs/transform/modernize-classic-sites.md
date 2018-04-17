---
title: Modernize your classic SharePoint sites
description: Guidance on modernizing classic SharePoint sites
ms.date: 04/17/2018
ms.prod: sharepoint
---

# Modernize your classic SharePoint sites

SharePoint Online is continuously evolving and improving, which is a great thing for you as a consumer of the service. One of the key improvements is the availability of modern sites, which are modern Office 365 Group-connected team sites or communication sites, combined with more and more functionality that can be consumed from a beautiful modern user interface. 

All of this is great...but you might ask yourself the question: *I've got lots of classic (team) sites...how do I bring those into the modern SharePoint world?*. There's no magic switch that automatically transforms your classic sites into modern sites, but it is possible to transform a classic site into a modern site by following the guidance described in this article series.

## Steps to modernize your site

If you want to transform (or "modernize") a classic site into a modern Office 365 Group-connected site, you can do this by following these steps.

> [!IMPORTANT]
> It's not currently supported to start using the modern page experience in sites where classic publishing features have been activated.

### Enable your sites to fully leverage the modern user interface

The most visible aspect of a modern site is its modern user interface. If you haven't turned off the modern experience at the tenant level (the **SharePoint Lists and Libraries experience** setting in the tenant admin center), certain pages appear using a modern user interface:

- List and library pages for most lists and libraries
- Site Contents page
- Site Usage page
- Recycle Bin pages

However, if you navigate your site, you will notice that the following pages still use the classic user interface:

- Home page and all other site pages (wiki pages and/or web part pages)
- List and library pages for certain lists and libraries

To maximize the use of the modern user interface for your site pages and list and library pages, see [Modernize the user interface](modernize-userinterface.md). 

You will also need to modernize your customizations as explained in [Modernize customizations](modernize-customizations.md).

### Connect your sites to Office 365 Groups

Classic (team) sites are not connected to an Office 365 Group, whereas modern team sites are. The connection to an Office 365 Group enables the site to consume other Office 365 services such as Teams, Planner, and Outlook. Connecting your site to an Office 365 Group is an essential part of modernizing a site. 

There are two options to make this happen:

- You can have each site owner do this on their behalf by using a wizard that can be launched from the user interface.
- You can perform a bulk operation in which you connect an Office 365 Group to a series of sites at one time. This option is preferred for enterprise customers because it enables you to control the used configuration (public/private, site classification, alias name).

For more information, see [Connect to an Office 365 Group](modernize-connect-to-office365-group.md).

### Switch to a modern tenant scoped branding

Having SharePoint (team) sites use your company branding is a very common thing and for classic sites you've used one or more of the following components: site themes, alternate CSS and master pages. Master pages and alternate CSS are however not compatible with the modern user interface, so you will need to evaluate whether these branding customizations are still relevant or not. Classic site themes are respected in a modern user interface but since we now have tenant controlled site theming, switching over to that model will future proof your modernized site.

For more information, see [Modernize site branding](modernize-branding.md).

## Determining which process to follow

The previous section introduced the steps you can take to modernize your site; however, you can decide which steps to run and the order in which to run them. Although there's no one-size-fits-all process to modernize your site, the following is the recommended approach.

### Enable the out-of-the-box modern user interface for lists and libraries

You probably already have the out-of-the-box modern user interface for lists and libraries enabled at the tenant level, so it makes sense to further maximize its use. SharePoint tries to show your lists and libraries by using the modern user interface, but you might have customizations or configurations that prevent this. 

To learn more about how to unblock your lists and libraries when using the modern user interface, see [Maximize use of the modern list and library user interface](modernize-userinterface-lists-and-libraries.md). 

### Connect your site to an Office 365 Group and switch to modern branding when needed

Connecting your site to an Office 365 Group not only gives you the benefits of a group-connected site, but also provides you with a new modern site home page. Depending on your needs, this new home page might meet your needs, but you can also choose to create your own modern home page. If you need a custom home page or if you want to perform a bulk **groupify**, you need to use a PowerShell script. After that point, it makes sense to include other modernization tasks as well, such as switching to a modern site theme.

You can learn more about performing a **groupify** and switching to a modern site theme in these articles:

- [Connect to an Office 365 Group](modernize-connect-to-office365-group.md)
- [Modernize site branding](modernize-branding.md)

### Transform your classic site pages into modern pages

The final step in a site transformation is transforming your site pages. After you have completed the first two steps, your site pages still appear in the classic user interface. Page transformation is not a simple process because there's no one-on-one mapping between the functionality offered by classic web parts and what's offered by the first-party client-side web parts on modern pages. Therefore, we recommend that you transform only the pages that are frequently used. 

For more information about page transformation, see [Transforming classic pages to modern client side pages](modernize-userinterface-lists-and-libraries.md).

## See also

- [Solution guidance](../solution-guidance/office-365-development-patterns-and-practices-solution-guidance.md)