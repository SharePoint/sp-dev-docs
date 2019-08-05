---
title: Security
ms.date: 02/07/2018
localization_priority: Normal
---
# Security

## Summary

SharePoint supports security for user access at the website, list, list or library folder, and item levels. Security management is role-based at all levels, providing coherent security management across the SharePoint platform with a consistent role-based user interface and object model for assigning permissions on objects. As a result, list-level, folder-level, or item-level security implements the same user model as website-level security, making it easier to manage user rights and group rights throughout a website. SharePoint also supports unique permissions on the folders and items contained within lists and document libraries.

Authorization refers to the process by which SharePoint provides security for websites, lists, folders, or items by determining which users can perform specific actions on a given object. The authorization process assumes that the user has already been authenticated, which refers to the process by which SharePoint identifies the current user. SharePoint does not implement its own system for authentication or identity management, but instead relies on external systems, whether Windows authentication or non-Windows authentication.

## General information

_**Applies to:** Office 365 | SharePoint Server_

### Related resources

### Articles

- [Authentication, authorization, and security in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/authentication-authorization-and-security-in-sharepoint)
- [Authorization and authentication of SharePoint Add-ins](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/authorization-and-authentication-of-sharepoint-add-ins)
- [Three authorization systems for SharePoint Add-ins](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/three-authorization-systems-for-sharepoint-add-ins)
- [Add-in permissions in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/add-in-permissions-in-sharepoint)
- [Cross-domain images in SharePoint provider-hosted add-ins](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/cross-domain-images-in-sharepoint-provider-hosted-add-ins)
- [Set external sharing on site collections in Office 365](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/set-external-sharing-on-site-collections-in-office-365)
- [Alternative model for web app policies in SharePoint Online](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-webapppolicies)
- [Add a Security Trim snippet in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/how-to-add-a-security-trim-snippet-in-sharepoint)
- [SharePoint Framework (SPFx) enterprise guidance](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/enterprise-guidance)
- [Secure data access and client object models for SharePoint Add-ins](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/secure-data-access-and-client-object-models-for-sharepoint-add-ins)
- [Important aspects of the SharePoint Add-in architecture and development landscape](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/important-aspects-of-the-sharepoint-add-in-architecture-and-development-landscap)
- [Authorize provider-hosted add-in users at run time by using OAuth](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/authorize-provider-hosted-add-in-users-at-run-time-by-using-oauth)
- [Build mobile apps for other platforms using SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/build-mobile-apps-for-other-platforms-using-sharepoint)
- [Moving Full Trust Code to the Cloud](https://github.com/OfficeDev/TrainingContent/blob/master/SharePoint/AddIns/04%20Moving%20Full%20Trust%20Code%20to%20the%20cloud%20using%20repeatable%20patterns%20and%20best%20practices/Lab.md)
- [A Series of Visual Studio Solutions to Accompany the MSDN Tutorial Series about Provider-hosted Add-ins](https://github.com/OfficeDev/SharePoint_Provider-hosted_Add-ins_Tutorials)

### Videos

- [PnP Shorts - Implementing Web Application Policy alternatives in SharePoint Online](https://www.youtube.com/watch?v=zcmngkgQdTU&feature=youtu.be)
- [PnP Webcast - Calling external APIs securely from SharePoint Framework](https://www.youtube.com/watch?v=SDjKRfHA1nw)
- [PnP Webcast - Azure AD implicit flow with SPFx client-side web part with developer preview](https://www.youtube.com/watch?v=KRgHjF84xZc)

### Samples

- [Dynamically request permissions for an add-in](https://github.com/SharePoint/PnP/tree/dev/Samples/Core.DynamicPermissions)
- [PnP-IdentityModel](https://github.com/SharePoint/PnP-IdentityModel)
- [Azure Active Directory implicit flow authentication samples](https://dev.office.com/patterns-and-practices-detail/11243)
- [Dynamically request permissions for an add-in](https://dev.office.com/patterns-and-practices-detail/1867)
- [An ASP.NET Core implementation of the TokenHelper and SharePointContext classes for use in SharePoint Apps (AspNetCore.Authentication)](https://dev.office.com/patterns-and-practices-detail/10979)
- [Office 365 Python Flask App Authentication (Python.Office365.AppAuthentication)](https://dev.office.com/patterns-and-practices-detail/7269)
- [Access SharePoint data with the Cross Domain JavaScript Library](https://dev.office.com/code-samples-detail/5814)
- [Access SharePoint data with the Cross Domain JavaScript Library and the REST\OData endpoints](https://dev.office.com/code-samples-detail/5815)

## App-only access to SharePoint

_**Applies to:** Office 365 | SharePoint Server_

### Articles

- [Add-in authorization policy types in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/add-in-authorization-policy-types-in-sharepoint)
- [Accessing SharePoint using an application context, also known as app-only](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly)
- [How to provide add-in app only tenant administrative permissions in SharePoint Online](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/how-to-provide-add-in-app-only-tenant-administrative-permissions-in-sharepoint-online)
- [App-only and elevated privileges in the SharePoint Add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/app-only-elevated-privileges-sharepoint-add-in)
- [Developing using Tenant permissions with App-Only in SharePoint Online](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/development-experience-tenant-apponly-permissions-in-sharepoint-online)
- [Getting Started with azure WebJobs ("timer jobs") for your Office 365 Sites](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/getting-started-with-building-azure-webjobs-for-your-office365-sites)

### Samples

- [External Sharing APIs for SharePoint and OneDrive for Business (Core.ExternalSharing)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ExternalSharing)

## Elevating privileges

_**Applies to:** Office 365 | SharePoint Server_

If your solution allows users to perform actions for which they don't have adequate individual permissions, it needs to elevate user's privileges to complete that operation. Different methods are used to elevate privileges in SharePoint Add-ins and farm solutions. Farm solutions elevate privileges by using `RunWithElevatedPrivileges(SPSecurity.CodeToRunElevated)`, which belongs to the SharePoint server-side object model. SharePoint Add-ins use either the app-only policy or service accounts.

### Articles

- [Elevated privileges in SharePoint Add-ins](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/elevated-privileges-in-sharepoint-add-ins)
- [Add-in authorization policy types in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/add-in-authorization-policy-types-in-sharepoint#Scenario)
- [App-only and elevated privileges in the SharePoint Add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/app-only-elevated-privileges-sharepoint-add-in)

## Azure AD Authentication/Authorization

_**Applies to:** Office 365_

When using SharePoint Online you can define applications in Azure AD and these applications can be granted permissions to SharePoint, but also to all the other services in Office 365. This model is the preferred model in case you’re using SharePoint Online, if you’re using SharePoint on-premises you have to use the SharePoint Only model via based Azure ACS.

### Articles

- [Accessing SharePoint using an application context, also known as app-only](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly)

### Videos

- [Access Microsoft SharePoint with the Microsoft Graph](https://www.youtube.com/watch?v=bBILnF5Tf_k)

### Samples

- [PowerShell to enable low trust authentication model at on-premises](https://github.com/SharePoint/PnP-Tools/tree/master/Scripts/SharePoint.LowTrustACS.Configuration)
- [SharePoint Web Hooks Azure AD reference implementation](https://github.com/SharePoint/sp-dev-samples/tree/master/Samples/WebHooks.List.AzureAD)

### Authorization considerations for tenants hosted in Germany, China or US

_**Applies to:** Office 365_

When your Office 365 tenant is hosted in an specific environment like the Germany, China or US Government environments there are some additional considerations that you have to take into account.

### Articles

- [Authorization considerations for tenants hosted in the Germany, China or US Government environments](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/extending-sharepoint-online-for-germany-china-usgovernment-environments)
- [Learn about Office 365 Germany](https://support.office.com/en-US/article/Learn-about-Office-365-Germany-8a5a4bbc-667a-4cac-8769-d8ac9015db4c)
- [Learn about Office 365 operated by 21Vianet](https://support.office.com/en-us/article/Learn-about-Office-365-operated-by-21Vianet-A8AB5061-3346-4DA0-BB7C-5260822B53AE)
