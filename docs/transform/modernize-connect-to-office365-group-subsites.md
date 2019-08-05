---
title: What about subsites after Office 365 group connection
description: Connect an Office 365 group to an existing SharePoint site does connect the group at root site level, but what about the subsites?
ms.date: 10/16/2018
ms.prod: sharepoint
localization_priority: Normal
---

# How are subsites impacted after Office 365 Group connection

When a site is being Office 365 Group connected then this happens at site collection level: there will be exactly one Office 365 group, which is connected to the SharePoint site collection. You might ask yourself the question: can I connect a group for each sub site in my site collection...and the answer is no, this is not possible. This however should not prevent you from connecting an Office 365 Group to your site collection: once you connect your site collection to an Office 365 Group the Office 365 services connected to that group become available to your site, meaning you can have mailbox, planner, teams, Yammer,... Depending on the connected service you can integrate the connected Office 365 service in your sub sites as explained in the next chapter.

## Overview of Office 365 services that become available after Group connecting your site

This table gives an overview of the Office 365 services that are available for your site once it has been group connected. The sub site column explains how you can use this Office 365 service for your sub sites.

Office 365 Service | Site collection (root site) implementation | Options for sub sites
-------------------|--------------------------------------------|----------------------
Outlook | The site collection will automatically receive a mailbox. A "Conversations" link is added to the site's navigation. | A sub site cannot have its own mailbox, but you can add the "Conversations" link to your sub site navigation. Furthermore, you can use the Calendar web part to show events and appointments on pages in your sub site.
Planner | A plan will be automatically provisioned for the site collection. There are no default UI elements pointing to the created Planner plan, but you can use the waffle icon to navigate to planner and see your plan or alternatively use the Planner web part on page in your site. | Although there's only one plan created per default you do have the option to create additional plans, like a plan per sub site. These plans can then be used by configuring a Planner webpart on a page in your sub site.
Teams | Office 365 Group connecting will not automatically create a Team for you, you'll need to go to Teams and create a Team for an existing Office 365 Group. Once that's done the site's Document library is connected to the Team. | You can create different channels in a Team (e.g. one per sub site) and create links to the respective channels in your SharePoint site navigation. Do know that the files for these channels all are stored in the site collection's default document library (in a sub folder per channel)
Yammer | Office 365 Group connecting will not automatically create a Yammer group for you, currently it's not yet possible to create a Yammer group for an existing Office 365 Group. You can however use the Yammer web part on your site's pages. | You can create a new Yammer group per sub site and configure the Yammer web part to show that group on a page in the sub site. Depending on your Yammer setup this will trigger the creation of a new Office 365 Group per created Yammer group.
