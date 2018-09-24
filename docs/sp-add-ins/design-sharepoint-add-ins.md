---
title: Design SharePoint Add-ins
description: An overview of the design and architecture options available in SharePoint Add-ins, and how to make the right decisions to ease your add-in's development.
ms.date: 09/24/2018
ms.prod: sharepoint
---

# Design SharePoint Add-ins

Let's say you have a killer idea for an add-in. In this section, we'll guide you through the design decisions you need to make and offer best practices to build your add-in. For example, what makes a good user interface? What are the add-in "shapes" available? When should I use one instead of another? What options do I have for data access? 

<a name="SP15Design_Startdesigning"> </a>
## Start designing SharePoint Add-ins

Because the Cloud Add-in Model in SharePoint makes so many design options possible, SharePoint Add-ins can come in many shapes and sizes. This section contains helpful guidance for some of the most important decisions that you need to make as you are planning and designing the architecture and user experience of your add-in—including how you will host your add-in, how your add-in will efficiently and securely access data, and what the user experience will be.

- [Three ways to think about design options for SharePoint Add-ins](three-ways-to-think-about-design-options-for-sharepoint-add-ins.md): An overview of the design and architecture options that are available with SharePoint Add-ins.  
- [SharePoint Add-ins](sharepoint-add-ins.md): An overview of what SharePoint Add-ins are.

<a name="SP15Design_Hostingmodel"> </a>
## Choose the right hosting model for your add-in

SharePoint Add-ins support multiple hosting options. You can choose your own web stack, have Microsoft provision Microsoft Azure and SQL Azure, or have the add-in hosted on SharePoint. The following topic contains resources and guidance that can help you choose the right hosting model for your add-in.

- [Choose patterns for developing and hosting your SharePoint Add-in](choose-patterns-for-developing-and-hosting-your-sharepoint-add-in.md): Learn about the different ways that you can host the components of SharePoint Add-ins.

<a name="SP15Design_Dataaccess"> </a>
## Choose the right data access technologies for your add-in

You must ensure that your add-in accesses data efficiently and securely. Various data access technologies are available for accessing SharePoint and working with data in your add-in. This topic provides resources to help you learn about your options and choose the one that is right for your add-in. 

- [Secure data access and client object models for SharePoint Add-ins](secure-data-access-and-client-object-models-for-sharepoint-add-ins.md): Learn about data access options you have when you build SharePoint Add-ins, including data connectivity options for inbound and outbound data scenarios, and the APIs that are available when you want to access SharePoint data from your add-in.

<a name="SP15Design_UX"> </a>
## Design the UX for your add-in

As you design your add-in, your real goal should be to create an experience that enables users to complete the scenarios that you intend for them to accomplish. This topic will help you discover the resources and design guidance that you need to build great add-ins that follow best practices for user experience design and have the familiar appearance and behavior of SharePoint.

- [UX design for SharePoint Add-ins](ux-design-for-sharepoint-add-ins.md): Learn about the user experience options that you have when you build SharePoint Add-ins.

<a name="Upgrade"> </a>
## Design with update in mind

Someday you may want to produce an update of your add-in and upload it to the Office Store or an organization's add-in catalog. That task will be a lot easier if you think about how you would update the add-in while you are designing the first version. We recommend that you read the following articles early in the design phase. 

- [SharePoint Add-ins update process](sharepoint-add-ins-update-process.md)
- [Update SharePoint Add-ins](update-sharepoint-add-ins.md)

## Next steps: Develop and publish your add-in
<a name="SP15Design_Next"> </a>

Have a solid design for your add-in? Get ready to build your add-in and publish it. These resources can help you get started.

- [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md): Discusses advanced concepts and capabilities of the add-in model.
- [Publish SharePoint Add-ins](publish-sharepoint-add-ins.md): Describes the process and requirements for publishing SharePoint Add-ins.

## See also
<a name="SP15Design_AddRes"> </a>

-  [SharePoint Add-ins sample pack](http://code.msdn.microsoft.com/office/Apps-for-SharePoint-sample-64c80184)
-  [Reimagine SharePoint development](http://msdn.microsoft.com/en-US/office/apps/dn133840)
-  [SharePoint Add-ins](sharepoint-add-ins.md)
-  [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)
-  [Blog for add-ins](https://developer.microsoft.com/en-us/office/blogs/technology/add-ins/)
    
 

