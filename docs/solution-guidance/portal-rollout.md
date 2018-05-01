---
title: Deployment guidance for SharePoint Online portals
description: The recommended model for deploying your portal for your end users.
ms.date: 4/30/2018
---

# Deployment guidance for SharePoint Online portals

After you've spent your time and energy building that new SharePoint-based portal, you want to get it live as soon as possible...but what would be a good model for doing so? This article explains the recommended model for deploying your portal to your end users.

> [!NOTE] 
> Although this guidance primarily targets SharePoint Online, most of it also applies to portals hosted in an on-premises SharePoint environment.

<a name="sectionSectionAntiPatterns"> </a>

## What not to do

The following list contains the key things **not** to do when it comes to deploying your portal.

Don't:
- Stress test your portal against your SharePoint Online tenant.
- Do a big bang release, essentially releasing your new portal to **all** your users at the same moment.
- Share your portal by having a large number of security groups as site group members. This can happen with a large number (30-40,000) security groups, each with a single site group membership, or it can be a smaller number of security groups that are members of many site groups.


## How you did this in the past

In the past, customers often ran massive stress tests on their SharePoint on-premises-based portals because they wanted to assess whether the infrastructure could handle the load while still giving decent page-load times. 

With SharePoint Online, however, doing a classical stress test is not allowed because:

- SharePoint Online sees the load test as a denial-of-service attack and simply blocks the user, or even worse, the complete tenant.

- If the load test is not getting blocked, it is throttled, resulting in test results that are difficult to interpret.

- SharePoint Online dynamically scales its underlying infrastructure, which works great, but not if you suddenly do a massive load increase. The scaling back-end model needs time to absorb the increased load.

- Such a performance test is just a one-time validation, whereas your portal will keep on evolving. It's better to rely on built-in portal telemetry so that you're able to continuously follow up on your portal performance. It's also difficult to build a load test that represents a real usage pattern.

The recommended approach for deploying your new portal is to use a phased roll-out plan combined with built-in portal telemetry to measure portal performance while more and more users are added. The next section provides more details about this approach.

## Use a phased roll-out plan and telemetry

A commonly used model for rolling out new functionality is a phased approach that typically consists of the following:

- **A pilot wave**: This is the first time the portal is opened up to a group of selected key users. It's important to get a set of representative, critical, key users that can provide the initial feedback.

- **One or more end-user waves**: The number of waves that you have depends on how many users you'll have, combined with the model you're following. Some companies align their roll-out waves to their organizational structure; other companies align by country/region. In the end, what matters most is the fact that you're gradually adding new users to the portal.

The following diagram shows a gradual roll-out plan. Note that this takes into account the fact that typically end-user waves have fewer active users than invited users.

![Phased portal roll-out model](https://support.content.office.net/en-us/media/0bc14a20-9420-4986-b9b9-fbcd2c6e0fb9.png)

This phased approach gives you time to absorb feedback and make adjustments to your portal if needed. However, how do you measure and follow up on performance during this phased roll-out? 

The recommended approach for doing this is to embed portal telemetry in your implementation, as explained in the [telemetry section in Performance guidance for SharePoint Online portals](portal-performance.md#telemetry). Having a continuous flow of portal performance data helps you understand if the portal performance changes as the number of users grows. It can also be valuable in the future when you make changes to the portal.

## See also

- [Capacity planning and load testing SharePoint Online](https://support.office.com/en-us/article/Capacity-planning-and-load-testing-SharePoint-Online-c932bd9b-fb9a-47ab-a330-6979d03688c0?ui=en-US&rs=en-US&ad=US)
- [Building SharePoint Online portals](portal-overview.md)