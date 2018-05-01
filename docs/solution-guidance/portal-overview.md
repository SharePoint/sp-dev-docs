---
title: Building SharePoint Online portals
description: Guidelines for developing well-performing SharePoint Online portals. 
ms.date: 4/30/2018
---

# Building SharePoint Online portals

SharePoint on-premises has been, and is, a popular platform for building enterprise portals (also known as intranets). You can build similar portals on SharePoint Online as well. However, because SharePoint Online is different from an infrastructure architecture point of view, it's important to factor in the SharePoint Online-specific performance considerations when developing your new portal. This set of articles gives you guidance on the key portal design areas.

> [!NOTE] 
> Although this guidance primarily targets SharePoint Online, most of it also applies to portals hosted in an on-premises SharePoint environment.

## Why we created these guidelines

The growth of SharePoint Online is phenomenal, and as a result, more and more customers are building portals by using SharePoint Online as their platform. While working with SharePoint support teams and customers, we've noticed that many customers build their portals like they would for SharePoint on-premises, and this approach is negatively impacting portal performance. Often these performance problems are resolved after the portal goes live, which of course is not ideal. We hope that by following these guidelines, you will be better prepared for launching well-performing portals on SharePoint Online.

## What's included

The guidance provides patterns and practices that will help you build well-performing portals on SharePoint Online and focuses on the following topics: performance, information architecture, navigation, data aggregation, branding, and portal roll-out. Each article has the same layout:

- What not to do: Essentially, we tell you what you should **not** do anymore.
- Best practices and patterns: How to implement your portal.
- Links to interesting resources where you can learn more.
- Samples: For example, [Client-Side Data Access Layer (DAL) Sample](https://github.com/SharePoint/PnP/tree/master/Samples/Portal.DataAccessLayer).

## How to provide feedback

This guidance is completely open source, and we encourage the community to provide feedback. On the top right of each page, you can choose **Edit**, which takes you to the GitHub repository hosting this guidance. In GitHub you can: 

- Create an issue in the list on the **Issues tab** if you want to start a discussion about the content.
- Fork the repository, make changes to the articles, and create a pull request. 

We appreciate your contributions, and our publishing system will credit you as a page contributor after your pull request has been accepted.

> [!NOTE] 
> We'll be further evolving this guidance by adding samples, additional insights, and integration of new SharePoint Online capabilities, and would absolutely love community feedback and contributions.

## Target audience

Most sections target portal developers, but if you don't have a developer background, you can still use these guidelines because they discuss general areas such as information architecture, branding, and deployment.

## Portal guidance overview

The following table contains an overview of the individual articles that are part of the SharePoint Online portal guidelines.

<br/>

|Article|Description|
|:-----|:-----|
|[Performance](portal-performance.md)|<p>Describes the evolution of the SharePoint Online customization model, general performance guidelines for client-side web applications, and the Client-Side Data Access Layer (DAL) Framework.</p>|
|[Information architecture](portal-information-architecture.md)|<p>Describes site organization patterns, and guidelines for incorporating permissions, search, taxonomy, and large media in your SharePoint Online portal.</p>|
|[Navigation](portal-navigation.md)|<p>Explains the pros and cons of using an out-of-the-box navigation solution versus a custom navigation solution.</p>|
|[Content aggregation](portal-data-aggregation.md)|<p>Describes best practices and techniques for content aggregation, and the cons of using real-time content aggregation.</p>|
|[Branding](portal-branding.md)|<p>Describes branding requirements and general principles when branding portals in a SharePoint Online environment.</p></p>|
|[Deployment](portal-rollout.md)|<p>Compares past deployment strategies with the now recommended strategy of using a phased roll-out plan and telemetry.</p><p>|

## See also

- [Office 365 development and SharePoint PnP solution guidance](office-365-development-patterns-and-practices-solution-guidance.md)