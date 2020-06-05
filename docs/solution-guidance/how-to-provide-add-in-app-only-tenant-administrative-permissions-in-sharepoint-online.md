---
title: How to provide add-in app only tenant administrative permissions in SharePoint Online
ms.date: 06/05/2020
localization_priority: Priority
---
How to provide add-in app only tenant administrative permissions in SharePoint Online
================================================

When you are developing SharePoint add-ins and want to register them using the ACS model (**appregnew.aspx** and **appinv.aspx**), you will need to follow a special process, when an add-in is requesting tenant admin permissions and in app-only mode. 

> [!IMPORTANT]
> Azure Access Control (ACS), a service of Azure Active Directory (Azure AD), was retired on November 7, 2018. This retirement does not impact the SharePoint Add-in model, which uses the `https://accounts.accesscontrol.windows.net` hostname (which is not impacted by this retirement). For more information, see [Impact of Azure Access Control retirement for SharePoint Add-ins](https://developer.microsoft.com/office/blogs/impact-of-azure-access-control-deprecation-for-sharepoint-add-ins).

Steps to provide tenant admin permission for app only add-in:

- Register app id for the add-in under normal site collection in the tenant. 
  - `https://[tenant].sharepoint.com/_layouts/15/appregnew.aspx`
- Provide necessary details for the add-in registration, register the ID and secret for your add-in.
- Upload the add-in package to tenant app catalog.

    > [!IMPORTANT]
    > This only applies to tenant-scoped app catalogs. It won't workfor site collection-scoped catalogs because this process will request app-only administrative tenant permissions.

- Navigate to the **appinv.aspx** page in your tenant admin site.
  - `https://[tenant]-admin.sharepoint.com/_layouts/15/appinv.aspx`
- Find for the app ID registered in previous steps in **appinv.aspx** page.
- Provide needed permissions for your add-in registration.
- Trust the updated add-in registration.

Notice that this operation has to be completed under the tenant administration site and account used for these operations will need to have tenant administrative permissions. If you are providing lower level permissions for your add-in, you can complete those under normal site collection URLs with lower permissions. 


## See also

- [Register SharePoint Add-ins 2013](https://msdn.microsoft.com/library/office/jj687469.aspx)
- [Add-in permissions in SharePoint 2013](https://msdn.microsoft.com/library/office/fp142383.aspx)

