---
title: Guidelines for developing well performing SharePoint Online portals
ms.date: 11/03/2017
---
# Guidelines for developing well performing SharePoint Online portals

SharePoint on-premises has been, and is, a popular platform for building enterprise portals (a.k.a. intranets). You can build similar portals on SharePoint Online as well, but since SharePoint Online is different from an infrastructure architecture point of view it's important to factor in the SharePoint Online specific performance considerations when developing your new portal. This set of articles will give you guidance on the key portal design areas.

> [!NOTE] 
> Although this guidance is targeting SharePoint Online most of it also applies to portals hosted on a SharePoint on-premises environment.

_**Applies to:** SharePoint Online_

## Why did we create these guidelines?
<a name="sectionSection0"> </a>
The growth of SharePoint Online is phenomenal and as a result more and more customers are building portals using SharePoint Online as their platform. While working with SharePoint support teams and several large customers we've noticed that many customers built their portals like they would be building them for SharePoint on-premises and this approach is negatively impacting portal performance. Often these performance problems are resolved after portal go live, which of course is not ideal. We hope that by following these guidelines customers will be better prepared for launching well performing portals on SharePoint Online.

## What's included?
The guidance currently mainly focuses on patterns and practices that will help you build well performing portals on SharePoint Online focusing on following topics: performance, information architecture, navigation, data aggregation, branding and portal roll-out. Each of the articles has the same layout:
- We'll start with anti-patterns: essentially telling you what you should **not** do anymore
- We'll then provide best practice and patterns on how you should be implementing your portal
- We'll give you a set of links to interesting resources where you can learn more
- We're complementing the best practices with samples like our [Client-Side Data Access Layer (DAL) Sample](https://github.com/SharePoint/PnP/tree/master/Samples/Portal.DataAccessLayer)

## How to provide feedback around provided guidance?
This guidance is completely open source and we encourage the community to provide feedback. On the top right of each page you can click on "Contribute" which will bring you to the GitHub repository hosting this guidance. Once in GitHub you can: 
- Create an issue in the issue list if you want to start a discussion on the content
- Fork the repository, make changes to the articles and create a pull request. We appreciate your contributions and our MSDN publishing system will credit you as page contributor once you're pull request has been accepted

> [!NOTE] 
> We'll be further evolving this guidance by adding samples, additional insights, integration of new SharePoint Online capabilities and we would absolutely love community feedback and contributions.

## What's the audience we're targeting with these guidelines?
<a name="sectionSection1"> </a>
Most sections are targeting portal developers, but if you're not having a developer background then the it's recommended to go over this guidelines as it also discusses more general areas like **Information Architecture**, **Branding** and **Go Live**.

## Portal guidance overview
<a name="sectionSection2"> </a>
Below table contains an overview of the individual articles that are part of the SharePoint Online portal guidelines.

|**Portal design area**|**Introduction to options**|
|:-----|:-----|
|Performance|<p>Performance is a critical aspect of any portal and this article contains numerous design patterns that will help you build well performing portals.</p><p>[Portal performance guidance](portal-performance.md)</p>|
|Information architecture|<p>Having a sound information architecture is an important prerequisite for realizing good portal performance.</p><p>[Portal information architecture guidance](portal-information-architecture.md)</p>|
|Navigation|<p>Each portal project needs to tackle the navigation question and for SharePoint Online you'll need to take in account specific guidelines which are described in this article.</p><p>[Portal navigation guidance](portal-navigation.md)</p>|
|Data aggregation|<p>Aggregating and rolling up data from different locations, taking in account user preferences in something that almost all portals need. Check out this article to learn more about a flexible proven approach for aggregating data.</p><p>[Portal data aggregation guidance](portal-data-aggregation.md)</p>|
|Branding|<p>Being able to apply a custom brand on a portal is a typical requirement and this article provides you with an overview of the branding options and branding best practices.</p><p>[Portal branding guidance](portal-branding.md)</p>|
|Go Live|<p>Once you're portal has been developed and tested it's time to go live...but what strategy to follow for going live? This article will give you the Microsoft recommended approach.</p><p>[Portal go live guidance](portal-rollout.md)</p>|

## See also

- [Office 365 development and SharePoint PnP solution guidance](office-365-development-patterns-and-practices-solution-guidance.md)