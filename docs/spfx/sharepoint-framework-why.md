---
title: Why the SharePoint Framework?
description: Learn why Microsoft introduced and now recommends the SharePoint Framework for customer SharePoint extensibility and customizations.
ms.date: 09/08/2021
ms.service: sharepoint
ms.subservice: sharepoint-framework
ms.localizationpriority: high
---

# Why the SharePoint Framework?

SharePoint was initially launched as an on-premises product in 2001. Over time, a large developer community has extended and shaped it in many ways. The developer community followed the same patterns and practices that the SharePoint product development team used, including web parts, SharePoint feature XML, and more. Many features were written as server-side customizations using C#, compiled to DLLs, and deployed to on-premises server farms.

That architecture worked well in environments with only one enterprise, but it didn’t scale to the cloud, where multiple tenants run side by side on the same servers. As a result, we introduced two alternative models: client-side JavaScript injection, and SharePoint Add-ins. Both of these solutions have pros and cons.

## JavaScript injection

One of the most popular web parts in SharePoint Online is the **Script Editor**. You can add JavaScript to the Script Editor web part and have that JavaScript execute when the page renders. It’s simple & effective. It runs in the same browser context as the page, and is in the same DOM, so it can interact with other controls on the page. It's also relatively performant, and simple to use.

There are a few downsides to this approach:

- While you can package your solution so that end users can drop the control onto the page, you can't easily provide configuration options.
- The end user can edit the page and modify the script, which can break the web part.
- The Script Editor web part isn't marked as **Safe For Scripting**. Most self-service site collections (my-sites, team sites, group sites) have a feature known as **"NoScript"** enabled. Technically, it is the removal of the Add/Customize Pages (ACP) permission in SharePoint. This means that the Script Editor web part will be blocked from executing on these sites.

## SharePoint Add-in model

One option for solutions that run in NoScript sites is the add-in/app-part model introduced in SharePoint Server 2013. This implementation creates an **iFrame** where the actual experience resides and executes. The advantage is that because it's external to the system and has no access to the current DOM/connection, it's easier for information workers to trust and deploy. End users can install add-ins on NoScript sites.

There are some downsides to this approach as well

- They run in an **iFrame**. iFrames are slower than the Script Editor web part, because it requires a new request to another page. The page has to go through the complete authentication and authorization, make its own calls to get SharePoint data, load various JavaScript libraries, and more. A Script Editor web part might typically take, for example, 100 milliseconds to load and render, while an app part might take 2 seconds or more.
- The **iFrame** boundary makes it more difficult to create responsive designs and inherit CSS and theming information. iFrames do have stronger security, which can be useful for you (your page is inaccessible by other controls on the page) and for the end user (the control has no access to their connection to Microsoft 365).

## SharePoint Framework

Historically, developers created web parts as full trust C# assemblies that were installed on the cloud servers.

However, current development models usually involve JavaScript running in a browser making REST API calls to the SharePoint and Microsoft 365 back-end workloads. C# assemblies don’t work in this world. Developers needed a new development model.

The SharePoint Framework is the next evolution in SharePoint development.

## See Also

- [Why did Microsoft create the SharePoint Framework (SPFx)?](https://www.voitanos.io/blog/spfx-5w1h-why-did-microsoft-create-sharepoint-framework/)
