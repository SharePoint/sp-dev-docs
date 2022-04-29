---
title: Sample modernization scripts
description: Scripts that you can use to automate the modernization of your sites
ms.date: 11/20/2019
ms.service: sharepoint
ms.localizationpriority: high
---

# Scripting your modernization tasks

> [!IMPORTANT]
> Modernization tooling and all other PnP components are open-source tools backed by an active community providing support for them. There is no SLA for open-source tool support from official Microsoft support channels.

You can modernize your sites by using the foreseen user interface options, like for connecting your site to a Microsoft 365 group. Using the user interface works great for a limited set of sites, if you have to modernize multiple sites it's recommended to automate the modernization. To help you with that you can find all our modernization tools, script and solutions in the [sp-dev-modernization](https://aka.ms/sppnp-modernization-git) open source repository, including [sample scripts that will help you automate your modernization tasks](https://aka.ms/sppnp-modernization-scripts).

The scripts section in the [sp-dev-modernization](https://aka.ms/sppnp-modernization-git) open source repository contains several categories of scripts:

Category | Description
---------|------------
[Microsoft 365 group Connect](https://github.com/SharePoint/sp-dev-modernization/tree/dev/Scripts/O365GroupConnect) | Contains scripts that show how to perform a bulk Microsoft 365 group connect. This is useful when you want to group connect multiple site collections instead of leaving group connect as a task for your site owners.
[Page transformation](https://github.com/SharePoint/sp-dev-modernization/tree/dev/Scripts/PageTransformation) | Here you find scripts that help you with page transformation of wiki, webpart, blog and publishing pages. There are scripts for transforming from SharePoint Online to SharePoint Online, but also scripts that handle transformation from SharePoint On-premises to SharePoint Online.
[Modernize site collections](https://github.com/SharePoint/sp-dev-modernization/tree/dev/Scripts/ModernizeSiteCollection) | These scripts are modernizing a site collection by combining Microsoft 365 group Connect, page transformation, cleaning up branding, creating a Teams team,... The scripts can work for a single site collection, but you can also provide a list of site collections to be modernized.
[List and Libraries](https://github.com/SharePoint/sp-dev-modernization/tree/dev/Scripts/ListsAndLibraries) | If you even needed to force certain site collections to show all lists using their classic rendering, then these scripts will do that for you.
