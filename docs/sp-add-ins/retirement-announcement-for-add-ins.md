---
title: SharePoint Add-In retirement in Microsoft 365
description: Describes the details around the retirement of SharePoint Add-In in Microsoft 365.
ms.date: 11/13/2023
ms.localizationpriority: high
ms.service: sharepoint
---

# SharePoint Add-In retirement in Microsoft 365

Microsoft strives to deliver utmost value to our customers through modern, optimized, secure solutions in this newly evolved world focused on digital transformation. As part of this evolution of Microsoft 365 solutions we will be retiring the SharePoint Add-In extensibility model and believe Microsoft 365 customers will be better served by modern SharePoint extensibility models.

> [!IMPORTANT]
> The SharePoint add-in model deprecation in SharePoint Online does not impact [SharePoint Framework (SPFx)](https://aka.ms/spfx), which is the primary replacement technology for SharePoint add-ins. SPFx is the most widely used extensibility model in Microsoft 365 and continues to be supported also in future.

SharePoint Add-Ins will stop working for new tenants as of November 1st, 2024 and they will stop working for existing tenants and will be fully retired as of April 2nd, 2026. This applies to all environments including Government Clouds and Department of Defense.

In parallel with the SharePoint Add-In retirement, adding, updating and acquiring SharePoint Add-Ins via the public marketplace (a.k.a. store) will also be retiring. As of March 1st, 2024 Microsoft will not accept new SharePoint Add-Ins for listing in the public marketplace, from July 1st, 2024 SharePoint Add-Ins cannot be acquired anymore from the public marketplace. Using a tenant app catalog will stay supported and enables 3rd parties to offer their SharePoint Add-Ins until April 2nd, 2026.

If you are using custom developed SharePoint Add-Ins, we recommend migrating them to SharePoint Framework based solutions. If you’ve acquired SharePoint Add-Ins from the public marketplace or from a 3rd party then you should inquire for an updated version that does not depend on the SharePoint Add-In extensibility model. There will not be an option to extend SharePoint Add-Ins beyond April 2nd, 2026.

To learn more about how to migrate SharePoint Add-Ins to alternative solutions check out these [articles](https://aka.ms/retirement/addins/guidance) and accompanying [videos](https://aka.ms/sp/add-in/modernize/videos).

## Overview

### SharePoint Add-Ins

SharePoint Add-Ins come in two flavors: SharePoint hosted Add-Ins and provider hosted Add-Ins, both of which are effected by this retirement.

[SharePoint hosted Add-Ins primarily bring UX elements](sharepoint-add-ins.md#sharepoint-hosted-sharepoint-add-ins) to the site the Add-In was installed into and the app web that was created for the Add-In. A common use case is showing SharePoint Add-In web parts on pages of the host web, using [SharePoint Framework](https://aka.ms/spfx) based web parts is the recommended alternative here. These applications use JavaScript for writing business logic using the logged in user context to authenticate.

[Provider hosted SharePoint Add-Ins](sharepoint-add-ins.md#provider-hosted-sharepoint-add-ins) run outside of SharePoint and typically have their own UX. They use Azure ACS (Access Control Services) as auth layer to enable calling back into the host web where the SharePoint Add-In was installed. SharePoint provider hosted Add-Ins can be rewritten in various ways as software as a service application hosted externally (e.g. Microsoft Azure) and optionally also offered as Teams application. The auth model for these will be based on Microsoft Entra ID. If there are requirements to integrate in the SharePoint UX then [SharePoint Framework](https://aka.ms/spfx) can be used as calling into external application APIs can be done from SharePoint Framework solutions.

### SharePoint Server support for SharePoint Add-Ins

Users of SharePoint Server running on-premises can, if configured by the farm admins, install SharePoint Add-Ins from the public marketplace or from the app catalog. The option to acquire and use SharePoint Add-Ins via the app catalog will not be impacted by this retirement, acquiring SharePoint Add-Ins from the public marketplace will stop working from April 2nd, 2026.

### Project Online support for SharePoint Add-Ins

Project Online is an extension on top of SharePoint Online and SharePoint Add-Ins could also have been used to extend Project Online. The retirement of SharePoint Add-Ins applies to Project Online as well, any SharePoint Add-In used in Project Online will follow the same retirement path as SharePoint Add-Ins used in SharePoint Online.

## Call to Action Guidance

### Microsoft 365 Assessment tool

To understand if your organization is using SharePoint Add-Ins or begin planning migration to SharePoint Framework based solutions or alternatives, we recommend that customers run the [Microsoft 365 Assessment tool](https://aka.ms/assessment/addinsacs) to scan their tenants for SharePoint Add-In usage. Using the Power BI [SharePoint Add-In Report](https://aka.ms/assessment/addinsacsreport) generated by the scanner tool, you can:

- Identify all SharePoint Add-Ins in the tenant and per site
- Evaluate the SharePoint Add-In source (marketplace, app catalog) and who installed the Add-In
- For provider hosted Add-Ins get details for the used Azure ACS principal, including it’s validity and requested permission scopes

Using the [SharePoint Add-In Report](https://aka.ms/assessment/addinsacsreport) along with site information, tenant administrators together with developers can plan the migration of SharePoint Add-Ins with minimal impact to the users.

### Migrate business relevant SharePoint Add-Ins by using newer SharePoint development models

SharePoint hosted Add-Ins can be replaced by [SharePoint Framework](https://aka.ms/spfx) web parts, for the provider hosted Add-Ins any software as a service application platform (e.g. Microsoft Azure) in combination with [Microsoft Entra ID](https://learn.microsoft.com/azure/active-directory/develop/) for auth can be used as alternative development model.

To learn more about how to migrate SharePoint Add-Ins to alternative solutions check out these [articles](https://aka.ms/retirement/addins/guidance) and accompanying [videos](https://aka.ms/sp/add-in/modernize/videos).

### Disable Add-In usage for your tenant

Admins can disable SharePoint Add-Ins with the [Set-SPOTenant SharePoint Management Shell PowerShell command](https://learn.microsoft.com/powershell/module/sharepoint-online/set-spotenant?view=sharepoint-ps).

```PowerShell
Connect-SPOService -Url https://<tenant>-admin.sharepoint.com
Set-SPOTenant -IsSharePointAddInsDisabled $true
```

After SharePoint Add-Ins are disabled, users will not be able to add SharePoint Add-Ins to their sites, and admins cannot add new SharePoint Add-Ins to the tenant and site collection app catalogs. SharePoint Add-Ins already added to sites will stay available and can still be used by the site's users.

## How do I get help?

You can use the following services and partner programs to help with your migration from SharePoint Add-Ins:

- [Microsoft Solution Provider](https://www.microsoft.com/en-us/solution-providers/home)
- Help on SharePoint Assessment tool: Open a support ticket

## More information

- Friendly link to the blog post: https://aka.ms/retirement/addins/update
- Friendly link to this article: https://aka.ms/retirement/addins/support
- Friendly link to the Frequently Asked Questions: https://aka.ms/retirement/addins/faq
- Friendly link to the Azure ACS retirement article: https://aka.ms/retirement/acs/support
- Friendly link to Migration Guidance: https://aka.ms/retirement/addins/guidance

A Message Center post in the Microsoft 365 admin center is being sent to all tenants, and the post will be updated periodically with timelines.
