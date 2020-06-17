---
title: SharePoint 2010 workflow retirement
ms.date: 06/17/2020
ms.prod: sharepoint
ms.assetid: 
localization_priority: Priority
---


# SharePoint 2010 workflow retirement

SharePoint 2010 workflows will be retired starting August 2020. To mitigate the impact for customers using SharePoint 2010 workflows, we recommend migrating to Power Platform or other supported solutions. 
 
SharePoint 2013 workflows will be retired in future as well. We currently do not have a timeline for this retirement.

## Background

In the context of SharePoint, a workflow is the automated movement of documents or items through a sequence of actions or tasks that are related to a business process. Workflows can be used to consistently manage common business processes within an organization by enabling the organization to attach business logic to documents or items in a SharePoint list or library.

Table 1. SharePoint workflow platforms

| Workflows 2010  | Workflows 2013  |
| :-------------- | :-------------- |
| SharePoint Server 2010 | SharePoint Server 2013​ |
| Carried forward to Office 365 and SharePoint Server 2013 | Carried forward to Microsoft 365 |
| Built on top of WF 3.5 | Built on top of WF 4 |
| Uses SharePoint as execution host | Uses Workflow Manager in Microsoft Azure as execution host​ |
| Workflow engine lives in SharePoint | Workflow engine lives outside of Microsoft 365​ |
|  | For on-premises, Workflow Manager can be installed on SharePoint Server |

## Impact on users

**SharePoint 2010**

Starting August 1st, 2020, **SharePoint 2010 workflows** will be turned off for any newly-created tenants. The built-in workflows impacted are based on the following common scenarios:

- **Approval**: This workflow routes a document or item to a group of people for approval. By default, the Approval workflow is associated with the Document content type, and is automatically available in document libraries.

- **Collect Feedback**: This workflow routes a document or item to a group of people for feedback. Reviewers can provide feedback, which is then compiled and sent to the person who initiated the workflow. By default, the Collect Feedback workflow is associated with the Document content type, and is automatically available in document libraries.

- **Collect Signatures**: This workflow routes a Microsoft Office document to a group of people to collect their digital signatures. By default, the Collect Signatures workflow is associated with the Document content type, and is automatically available in document libraries.

- **Publishing Approval**: This workflow is similar to the Approval workflow in that it automates the routing of content to subject matter experts and stakeholders for review and approval. What makes the publishing approval workflow unique is that it’s designed specifically for publishing sites wherein the publishing of new and updated web pages is tightly controlled.

- **Three-state**: This workflow can be used to manage business processes that require organizations to track a high volume of issues or items, such as customer support issues, sales leads, or project tasks.

## SharePoint 2013

**SharePoint 2013 workflows** remain supported. This deprecation and retirement does not apply to SharePoint 2013 workflows. SharePoint 2013 workflows will remain supported, although deprecated; however, we recommend that customers migrate to Power Platform or other supported solutions, such as those from Preferred members of our Microsoft 365 Business Apps Partner Program.

Starting in November 2020, SharePoint 2013 workflows will be turned off by default for new tenants. We will provide a PowerShell script to let customers activate the SharePoint 2013 based workflow engine for new environments, as needed.

## SharePoint Server support for SharePoint 2010 and SharePoint 2013 workflows

We will continue to support SharePoint 2010 and SharePoint 2013-based workflows with no modification in our previous support posture, and continue to support them for on-premises SharePoint 2016 and SharePoint 2019 Server platforms until 2026.

SharePoint Designer 2013 will work with SharePoint Server 2019 for the remainder of the client support lifecycle (2026). SharePoint Designer 2013 will not be supported beyond that timeframe.

Overall, the general guidance is to mitigate the impact by migrating to [Power Platform](https://docs.microsoft.com/powerapps/maker/canvas-apps/customize-list-form) or other supported solutions.

## Customer communications

For additional info, see the following communication sites:

- <link to blog post>

- [public knowledge base](https://aka.ms/sp-workflows-support)

- <Message Center post will be made to all tenants at a later date, and this post will be updated, accordingly>

## Timeline

- Starting August 1st 2020, SharePoint 2010 workflows will be turned off for any newly created tenants.

- Starting November 1st 2020, SharePoint 2010 workflow services will be removed from existing tenants and available for any download.

- Starting November 1st 2020, SharePoint 2013 workflows will be turned off for any newly-created tenants.

- Starting February 1st 2021, the SharePoint 2010 workflow service will be completely removed from all tenants.

## Escalate to Microsoft engineering

Support engineers should follow the standard escalation process while considering the following guidance:

- Create an ICM to **ODSP SharePoint OCW - Workflow** Workflow issues only

- Guidance to Support? How to manage exceptions (if any)

## FAQs

**Does this apply to all Government customers?**

Yes, this is applicable to all environments including GCCHigh and DoD  

**A customer requested an extension for a SharePoint 2010 workflow. How should I process that request?**

## Documentation

- [Public KB article](https://aka.ms/sp-workflows-support)

## Need help?

If you have questions or need assistance, post your question in the MSFT-Partner [ODSP Product Updates Channel in Teams](https://teams.microsoft.com/dl/launcher/launcher.html?url=%2f_%23%2fl%2fchannel%2f19%3a60e2ee66ad7848939c5fa5ffc7af1b23%40thread.tacv2%2fODSP%2520Product%2520Updates%2520(Internal)%3fgroupId%3da2e0da40-20ec-4397-914a-36be9dcc962f%26tenantId%3d72f988bf-86f1-41af-91ab-2d7cd011db47&type=channel&deeplinkId=72e74230-e766-41b7-b59b-4ba2eda60851&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true)