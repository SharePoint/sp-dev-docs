---
title: Enable SharePoint Embedded
description: Steps to Enable SharePoint Embedded for use
ms.date: 11/14/2023
ms.service: sharepoint-online
ms.localizationpriority: high
---

# Enable SharePoint Embedded

During Public Preview, by default, SharePoint Embedded applications will not be enabled for use on the Microsoft 365(M365) tenant. To create or register SharePoint Embedded applications in the tenant, tenant admins must review the terms of service and enable the settings in [SharePoint admin center](https://go.microsoft.com/fwlink/?linkid=2185219). This document explains the steps to enable SharePoint Embedded applications on a M365 tenant.

## Who can enable SharePoint Embedded?
Users assigned to the SharePoint Administrator role have access to the [SharePoint admin center](https://go.microsoft.com/fwlink/?linkid=2185219) and can enable SharePoint Embedded applications for their tenant. For information about assigning a user, the SharePoint administrator role, see [Assign admin roles in the Microsoft 365 admin center.](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/assign-admin-roles?view=o365-worldwide)

Global Administrators in M365 can assign users the SharePoint Administrator. The Global Administrator role already has all the permissions of the SharePoint Administrator role. 

## Steps to Enable SharePoint Embedded
**Step 1:** Login to [SharePoint admin center](https://go.microsoft.com/fwlink/?linkid=2185219) as a SharePoint Administrator or a Global Administrator. 

**Step 2:** In SharePoint admin center, select “Settings” from the left-hand navigation.

<img width="915" alt="image" src="../images/SharePointEmbeddedToS-1.jpg">

**Step 3:** Select “SharePoint Embedded” app in the settings page. The app will be “disabled” if the tenant admin has not enabled the settings before. 

<img width="915" alt="image" src="../images/SharePointEmbeddedToS-2.jpg">


**Step 4:** Selecting SharePoint Embedded will open a flyover. Read the [terms of service](../terms-of-service.md) before enabling the application.

<img width="917" alt="image" src="../images/SharePointEmbeddedToS-3.jpg">


**Step 5:** Select the check box and click on the enable button to begin using your SharePoint Embedded application on the tenant. 

<img width="915" alt="image" src="../images/SharePointEmbeddedToS-4.jpg">

Your SharePoint Embedded application is now available for use on your tenant.

<img width="914" alt="image" src="../images/SharePointEmbeddedToS-5.jpg">

# Next Steps
Once SharePoint Embedded is enabled for your organization, developers can start creating a SharePoint Embedded application by following the [SharePoint Embedded:Build an app](https://learn.microsoft.com/en-us/sharepoint/dev/embedded/mslearn/m02-01-intro) tutorial.
