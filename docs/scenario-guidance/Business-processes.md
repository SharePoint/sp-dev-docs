---
title: Scenario Guidance - Business Processes
description: Scenario guidance on business process options in SharePoint Online and in on-premises.
ms.date: 03/26/2018
---

# Business Processes

## Summary

Managing business processes related to items or documents stored in Microsoft SharePoint is a very common use case, which can be solved using various techniques. In this article you can find the available options for designing and running business processes in SharePoint Online and/or SharePoint 2013/2016 on-premises.

## High-level guideline/general rules

Before going through the most common available options for managing business processes, let's see some useful high-level guidelines and general rules:

* Whenever you need to run long-running business processes, rely on asynchronous processes that can be executed in background and independently from SharePoint
* Try to keep the processes as much simple as you can, using small building blocks eventually connected in a chain, rather than using huge processes that can be complex to maintain and difficult to debug
* Try to use stateless processes as much as you can, to avoid allocating too many resources while running them and to define a more scalable solution, which can be hosted on multiple servers

## Available options

### Logic Apps

_**Applies to:** Office 365 | SharePoint Online | SharePoint 2013 | SharePoint 2016_

Azure Logic Apps simplifies how you build automated scalable workflows that integrate apps and data across cloud services and on-premises systems.
With Logic Apps you can build, schedule, and automate processes as workflows so you can integrate apps, data, systems, and services across enterprises or organizations. Logic Apps simplifies how you design and create scalable solutions for app integration, data integration, system integration, enterprise application integration (EAI), and business-to-business (B2B) communication, whether in the cloud, on premises, or both.

### Articles

* [Logic Apps](https://azure.microsoft.com/en-us/services/logic-apps/)
* [Quickstart: Build your first logic app workflow - Azure portal](https://docs.microsoft.com/en-us/azure/logic-apps/quickstart-create-first-logic-app-workflow)
* [Get started with the SharePoint Online connector](https://docs.microsoft.com/en-us/azure/connectors/connectors-create-api-sharepointonline)
* [Get started with the SharePoint connector](https://docs.microsoft.com/en-us/azure/connectors/connectors-create-api-sharepointserver)
* [Choose between Flow, Logic Apps, Functions, and WebJobs](https://docs.microsoft.com/en-us/azure/azure-functions/functions-compare-logic-apps-ms-flow-webjobs)

### Videos

* [Slice, dice, and route your SharePoint documents with Microsoft Flow, Azure Logic Apps, and Microsoft PowerApps](https://azure.microsoft.com/en-us/resources/videos/build-2017-slice-dice-and-route-your-sharepoint-documents-with-microsoft-flow-azure-logic-apps-and-microsoft-powerapps/)
* [Microsoft Azure and Office 365 together: The modern business development platform](https://azure.microsoft.com/en-us/resources/videos/microsoft-ignite-2017-microsoft-azure-and-office-365-together-the-modern-business-development-platform/)

## Microsoft Flow

_**Applies to:** Office 365 | SharePoint Online | SharePoint 2013 | SharePoint 2016_

Microsoft Flow is a service that helps you create automated workflows between your favorite apps and services to synchronize files, get notifications, collect data, and more. From within a Flow, you can connect to SharePoint Online or to an on-premises SharePoint 2013 or 2016 farm using the On-Premises Data Gateway to manage documents and list items. Moreover, Microsoft Flow is fully integrated with the modern lists and libraries of SharePoint Online.

As a developer, you can extend Microsoft Flow, enabling even more powerful solutions for organizations and customers.

### Articles

* [Get started with Microsoft Flow](https://docs.microsoft.com/en-us/flow/getting-started)
* [Create a flow for a list or library in SharePoint Online or OneDrive for Business](https://support.office.com/en-us/article/create-a-flow-for-a-list-or-library-in-sharepoint-online-or-onedrive-for-business-a9c3e03b-0654-46af-a254-20252e580d01)
* [Introducing Microsoft Flow integration for SharePoint Document Libraries](https://flow.microsoft.com/en-us/blog/flow-in-spo-document-libraries/)
* [Choose between Flow, Logic Apps, Functions, and WebJobs](https://docs.microsoft.com/en-us/azure/azure-functions/functions-compare-logic-apps-ms-flow-webjobs)

### Videos

* [Slice, dice, and route your SharePoint documents with Microsoft Flow, Azure Logic Apps, and Microsoft PowerApps](https://azure.microsoft.com/en-us/resources/videos/build-2017-slice-dice-and-route-your-sharepoint-documents-with-microsoft-flow-azure-logic-apps-and-microsoft-powerapps/)

## Workflow Manager of SharePoint 2013/2016

_**Applies to:** SharePoint Online | SharePoint 2013 | SharePoint 2016_

Both in SharePoint Online and in SharePoint 2013/2016 on-premises you can define workflow processes using the Workflow Manager engine. In SharePoint Online you can only use declarative workflows, designed in SharePoint Designer 2013, or Workflow Add-Ins built using Microsoft Visual Studio and the SharePoint Add-In Model.

 In SharePoint 2013/2016 you can also create custom code-based workflows or custom actions. However, you should be careful using code-based workflows on-premises, as that could be a road blocker while potentially migrating to SharePoint Online and Office 365.

### Articles

* [Get started with workflows in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/get-started-with-workflows-in-sharepoint)
* [SharePoint workflow development best practices](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/sharepoint-workflow-development-best-practices)
* [Workflow actions and activities reference for SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/workflow-actions-and-activities-reference-for-sharepoint)

### Samples

* [Create custom activities for workflow](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.Activities)
* [Workflow.AssociateToHostWeb](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.AssociateToHostWeb)
* [Call custom web services from a workflow](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallCustomService)
* [Call custom web service update SharePoint via web proxy](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallServiceUpdateSPViaProxy)
* [Handle custom events in a workflow](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CustomEvents)
* [Workflow with custom forms (initiation and task)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CustomTasks)

## Windows Workflow Foundation 3.x of SharePoint 2010

_**Applies to:** Office 365 | SharePoint Online | SharePoint 2013 | SharePoint 2016_

Both in SharePoint Online and in SharePoint 2013/2016 on-premises you can define workflow processes using the legacy Windows Workflow Foundation 3.x engine. This option is available just for backward compatibility, and should not be used for creating new solutions. Nevertheless, using Microsoft SharePoint Designer 2013, you can still create such kind of workflows.
