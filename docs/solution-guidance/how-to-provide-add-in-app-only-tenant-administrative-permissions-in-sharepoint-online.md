---
title: How to provide add-in app only tenant administrative permissions in SharePoint Online
description: When you are developing SharePoint add-ins and want to register them using the ACS model (appregnew.aspx and appinv.aspx), you will need to follow a special process, when an add-in is requesting tenant admin permissions and in app-only mode.
ms.date: 06/30/2020
ms.localizationpriority: high
---
# How to provide add-in app only tenant administrative permissions in SharePoint Online

When you are developing SharePoint add-ins and want to register them using the ACS model (**appregnew.aspx** and **appinv.aspx**), you will need to follow a special process, when an add-in is requesting tenant admin permissions and in app-only mode.

[!INCLUDE [azure-acs-retirement](../../includes/snippets/azure-acs-deprecation.md)]

Steps to provide tenant admin permission for app only add-in:

- Register app id for the add-in under normal site collection in the tenant where add-in will be deployed.
  - URL: `https://[tenant].sharepoint.com/_layouts/15/appregnew.aspx`
- Provide necessary details for the add-in registration and register ID and secret for your add-in
- Move to **appinv.aspx** page under your tenant admin site
  - URL: `https://[tenant]-admin.sharepoint.com/_layouts/15/appinv.aspx`
- Perform a lookup for the app id registered in previous steps in **appinv.aspx** page
- Provide needed permissions for your add-in registration
- Perform trust for the updated add-in registration

Notice that this operation has to be completed under the tenant administration site and account used for these operations will need to have tenant administrative permissions. If you are providing lower level permissions for your add-in, you can complete those under normal site collection URLs with lower permissions.

Once the steps above have been completed, the add-in can be deployed to the tenant level app catalog.

## See also

- [Register SharePoint Add-ins 2013](https://msdn.microsoft.com/library/office/jj687469.aspx)
- [Add-in permissions in SharePoint 2013](https://msdn.microsoft.com/library/office/fp142383.aspx)
