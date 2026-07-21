---
title: Modernize classic publishing portals
description: Modernize your classic publishing portals
ms.date: 07/21/2026
ms.localizationpriority: medium
ms.service: sharepoint
---

# Modernize classic publishing portals

> [!IMPORTANT]
> Modernization tooling and all other PnP components are open-source tools backed by an active community providing support for them. There is no SLA for open-source tool support from official Microsoft support channels.

A classic publishing portal uses publishing functionalities like page layouts, custom branding, page approvals, audience targeting and many more. For most classic publishing portal functionalities there's a modern equivalent enabling you to build a similar modern publishing portal. This modern publishing portal will then take advantage of all the modern capabilities like beautiful pages that work on any device, flexible page approval using Microsoft Flow etc as described in the [Guide to the Modern experience in SharePoint](/sharepoint/guide-to-sharepoint-modern-experience). Ensuring the portal you design is healthy and does achieve the performance you desire is important, a recommended read is the [Creating and launching a healthy SharePoint portal](/sharepoint/portal-health) documentation.

## Modernization approach

Modernizing publishing portals is not fully automated although the bulk of the content transformation can be automated using the [PnP Page Transformation technology](https://aka.ms/sppnp-pagetransformation). The main manual effort is rethinking and redesigning the needed information architecture. Below table describes the high level steps needed when modernizing a classic portal.

Activity | Approach
---------|---------
Information architecture | Designing and building the information architecture for your new portal is a manual effort. This includes building a new site structure and defining the future metadata model that will be used. The modern portal will start with new site collections and this new start is an opportunity to start "clean" as well.
Document and list item migration | If your classic portal has document libraries and lists with information that you still want to retain, then these need to be copied over to the new libraries and lists in the newly created site collections. For this you can either use the built-in SharePoint Online copy features or use third party migration tooling.
Branding and Customizations | Classic portals often used a heavily customized user interface and lot's of customizations. For modern portals there's less need for this, but if you need customizations you'll have to recreate the needed customizations using techniques that allow them to work on modern portal pages. See the [Modernize customizations](modernize-customizations.md) article to learn more.
Transformation of the page content | If you've a large volume of pages to migrate it makes sense to automate this using the [PnP Page Transformation technology](https://aka.ms/sppnp-pagetransformation). You will have fine grained control on what page content ends up on the new page, what content becomes metadata and much more via page layout templates.
Home pages | Home pages typically do not lent themselves very well for an automated transformation given the underlaying information architecture differences between the classic and modern portal, hence it's recommended to manually create the new home pages.

### Information architecture

Classic portals typically are using deeply nested site structures as shown below. In each site there's Pages library holding pages that are associated with a given content type (page metadata) and page layout (page wire frame).

![Classic Information architecture](media/modernize/classic&#32;information&#32;architecuture.png)

In modern intranets we recommend using individual communication sites instead of sub sites (you potentially can consolidate/deprecate certain of the sub sites) and then where need create a flexible hub-spoke model by designating some site collections to be a hub and joining other site collections to that hub. Note that in these individual site collections you can still create content types (based on the modern site page) for you page meta data (e.g. using site designs one can get these content types applied to each site joining the hub). Next to content types you can also have modern page templates as a lightweight alternative for the classic page layouts.

![Diagram of modern information architecture, showing the relationship between the Intranet, Finance, and I T.](media/modernize/modern&#32;information&#32;architecture.png)

The Microsoft 365 Assessment tool provides classic publishing page discovery and portal-level summaries, but it doesn't yet include every field from the legacy Publishing Portal scan. If you need the complete legacy inventory, including detailed publishing web configuration, use the [legacy SharePoint Modernization Scanner](modernize-scanner.md) with the `PublishingOnly` or `PublishingWithPagesOnly` mode. The generated Excel dashboard helps you analyze publishing feature usage across your portals.

![publishing portal dashboard](media/modernize/publishingscanner_1.png)

## See also

- [Guide to the Modern experience in SharePoint](/sharepoint/guide-to-sharepoint-modern-experience)
- [Choose a SharePoint modernization assessment tool](modernize-scanner.md)
