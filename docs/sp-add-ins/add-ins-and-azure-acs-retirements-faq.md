---
title: SharePoint Add-Ins and Azure ACS retirement FAQ
description: Answers frequently asked questions related to the retirements of SharePoint Add-In and Azure ACS in Microsoft 365.
ms.date: 01/02/2024
ms.localizationpriority: high
ms.service: sharepoint
---

# FAQ - SharePoint Add-In and Azure ACS retirement in Microsoft 365

[!INCLUDE [sp-add-in-deprecation](../../includes/snippets/sp-add-in-deprecation.md)]

[!INCLUDE [azure-acs-retirement](../../includes/snippets/azure-acs-deprecation.md)]

## Is SharePoint Framework (SPFx) impacted by these retirements?

No, SharePoint Framework (SPFx) is the recommended development model for SharePoint extensibility and is not impacted by these retirements. These retirements only affect SharePoint Add-Ins (a legacy development model) and Azure ACS (a legacy auth model).

## Will App Catalogs stay?

Absolutely, both tenant and site collection app catalogs are an essential part of the SharePoint developer ecosystem. They're used for both Add-Ins (retired) and SharePoint Framework (SPFx) based solutions (not retired), using the app catalogs for SharePoint Framework solution deployment stays fully supported, no changes! What will change is the support for SharePoint Add-Ins in the app catalog, after the end of life of SharePoint Add-Ins in Microsoft 365 (April 2026), you'll no longer be able to install and deploy SharePoint Add-Ins via the app catalog.

## Will the SharePoint Store / public market place stay?

Absolutely, the SharePoint / public market place are also used to offer SharePoint Framework (SPFx) based solutions and there will be no changes for that. You can still acquire SPFx solutions from the store, now and after Add-Ins have retired. Acquiring SharePoint Add-Ins via the store will not be possible anymore from July 1st 2024.

## My Add-In uses an app web, what about the data in that web?

If your SharePoint Hosted Add-In is storing data in it's app web then that's something you need to take in account when you're rewriting your Add-In using SharePoint Framework (SPFx). A common use case is that Add-Ins store list items in a list in the app web, when using a SharePoint Framework (SPFx) solution you can still use a (hidden) list, but now the list will live in the site where you've installed the SharePoint Framework (SPFx) solution. If you want to automatically retain the data you'll need to use SharePoint APIs to read the needed data from the app web and recreate it in the new location using a format that works for your updated application.

> [!Important]
> It's important you do that before you uninstall the SharePoint Add-In as with uninstalling the Add-Ins app web is also deleted. In case you've accidentally deleted the Add-In you can always restore it from the recycle bin, doing so will also restore the Add-In's app web.

## My Add-In is used for both SharePoint Online as SharePoint on-premises, what do you advice?

SharePoint Online is continuously being updated and getting new and updated features, whereas SharePoint on-premises follows a much slower release cadence. The result of this is that when writing an application using the latest SharePoint Framework version, using the latest features, this application will not work in SharePoint on-premises. If you want to stick with a single code base you need to use an SPFx version that's also supported for your target SharePoint on-premises environment, which will then limit the options for you SharePoint Online solution. Alternative approaches are building an SPFx application for SharePOint Online and one for SharePoint on-premises and coding them in way so code reuse is optimized.

Also, do know that SharePoint Add-Ins in SharePoint on-premises are not retired and will stay working after April 2026 when deployed using a SharePoint on-premises app catalog. Acquiring them from the store will however not be possible anymore after April 2026.

## Can I still perform user profile updates?

Yes, you can still read and update user profiles when Azure ACS is not used. When you configure your Microsoft Entra application using the SharePoint `User.ReadWrite.All` permission your app can update user profiles for all users. Do note that in case you want to update a user profile property that's using an underlying term set you also need to grant the SharePoint `TermStore.ReadWrite.All` permission. See https://learn.microsoft.com/sharepoint/troubleshoot/sharing-and-permissions/app-permission-error-update-user-profile-property to learn more.

## Will remote event receivers also retire as part these retirements?

Yes, remote event receivers are part of this retirement. Remote event receivers have a dependency on Azure ACS and as such, when Azure ACS is turned off, remote event receivers will not function correctly anymore. Although remote event receivers can still be programmatically added once Azure ACS has fully retired in April 2026, they'll not fire anymore. The recommended path forward is to use [SharePoint Online Web hooks](../apis/webhooks/overview-sharepoint-webhooks.md). More information on how to transform can be found in the [Transform SharePoint Add-in model Remote Event Receivers to SharePoint Online Webhooks](../sp-add-ins-modernize/from-remote-event-receivers-to-webhooks.md) article. Mentioned links show how to use SharePoint REST to add the web hooks, if you prefer Microsoft Graph then you can achieve the same via [change notifications](https://learn.microsoft.com/graph/webhooks?context=graph%2Fapi%2F1.0&view=graph-rest-1.0) which can add a [subscription for a SharePoint List](https://learn.microsoft.com/graph/api/resources/subscription?view=graph-rest-1.0).

As web hooks by convention are asynchronous this means that synchronous events, that enable an app from blocking/cancelling a SharePoint action, are not possible anymore. If event blocking is used to prevent accidental data updates/deletes by unauthorized users then possible workaround are securing the protected files/folders so they cannot be updated/deleted anymore or by moving this type of data to a hidden library. In general moving away from sync events will require updating your application logic.

> [!Note]
> It's possible to get remote event receivers to partly work without Azure ACS via using sites.selected, this approach however is not recommended and will stop working with Azure ACS fully retires in April 2026.

## Can I still perform taxonomy updates?

Yes, you can still update taxonomy (termsets, terms, etc) when Azure ACS is not used. When you configure your Microsoft Entra application using the SharePoint `TermStore.ReadWrite.All` permission (delegated or application) when you want to use the CSOM taxonomy APIs. It's recommended to use the Microsoft Graph taxonomy API, for that one you need the Microsoft Graph `TermStore.ReadWrite.All` permission (delegated or application). See the [Microsoft Graph documentation](https://learn.microsoft.com/en-us/graph/api/resources/termstore-set?view=graph-rest-1.0) for more details.

## Can I still add OOB apps when I'm using the "classic" site contents page?

When you're using the classic "Site Contents" page (_layouts/15/viewlsts.aspx) and you click on "add an app" the list off apps you can add will be a mix of OOB apps (e.g. Document Library, Custom List, Form Library) and possibly installed SharePoint Add-Ins. When SharePoint Add-Ins retire this page will still list the OOB apps and these OOB apps can still be added to the site.

## Are SharePoint CSOM or SharePOint JSOM part of this retirement?

No, both CSOM and JSOM stay working after Add-Ins and Azure ACS have been fully retired. When applications are updated/rewritten we do recommend to use Microsoft Graph and SharePoint REST as APIs for client side code. For server side code the recommendation is to use Microsoft Graph, SharePoint REST or SharePoint CSOM. If there's a Microsoft Graph API then that should be used in favor of SharePoint REST/CSOM, use the latter for the cases where there's no Microsoft Graph API yet.
