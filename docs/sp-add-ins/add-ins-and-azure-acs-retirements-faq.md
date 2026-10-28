---
title: SharePoint Add-Ins and Azure ACS retirement FAQ
description: Answers frequently asked questions related to the retirements of SharePoint Add-In and Azure ACS in Microsoft 365.
ms.date: 10/25/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# FAQ - SharePoint Add-In and Azure ACS retirement in Microsoft 365

[!INCLUDE [sp-add-in-deprecation](../../includes/snippets/sp-add-in-deprecation.md)]

[!INCLUDE [azure-acs-retirement](../../includes/snippets/azure-acs-deprecation.md)]

## Is SharePoint Framework (SPFx) impacted by these retirements?

No, SharePoint Framework (SPFx) is the recommended development model for SharePoint extensibility and is not impacted by the SharePoint Add-In and Azure ACS retirements. These retirements affect the legacy Add-in model and Azure ACS authentication in SharePoint Online, not SharePoint Server Add-ins deployed through an on-premises app catalog. The separate retirement of [SPFx domain isolated web parts](../spfx/web-parts/isolated-web-parts-retirement.md) does not retire regular SPFx web parts.

## Will App Catalogs stay?

Yes. Tenant and site collection app catalogs continue to support SharePoint Framework (SPFx) solution deployment. SharePoint Add-Ins reached end of life in SharePoint Online on April 2, 2026 and can no longer be installed or deployed there through app catalogs. SharePoint Server Add-ins deployed through an on-premises app catalog are not retired by this change.

## Will the SharePoint Store/public marketplace stay?

Yes. The SharePoint Store and public marketplace continue to offer SharePoint Framework (SPFx) solutions. SharePoint Online users could no longer acquire SharePoint Add-Ins through the store starting July 1, 2024.

> [!Note]
> Before retirement, an Add-In acquired before July 1, 2024 and installed by a SharePoint administrator in the tenant app catalog could still be installed on other sites in that tenant. This was a transitional exception, not an extension beyond April 2, 2026. Those Add-Ins no longer work in SharePoint Online.

## My Add-In uses an app web; what about the data in that web?

If your SharePoint Hosted Add-In is storing data in its app web, then that's something you need to take into account when you're rewriting your Add-In using the SharePoint Framework (SPFx). A common use case is that Add-Ins store list items in a list in the app web. When using a SharePoint Framework (SPFx) solution you can still use a (hidden) list, but now the list will live in the site where you've installed the SharePoint Framework (SPFx) solution. If you want to automatically retain the data, you'll need to use SharePoint APIs to copy the needed data from the app web, and recreate it in the new location using a format that works for your updated application.

> [!Important]
> It's important you retrieve the data **before** you uninstall the SharePoint Add-In, because the app web is deleted when you uninstall the Add-In. In case you've accidentally deleted the Add-In, you can restore it from the recycle bin, which will also restore the Add-In's app web.

## Can SharePoint Online users still acquire my Add-In from the public marketplace after July 1st?

No. Acquisition of SharePoint Add-Ins from the public marketplace for SharePoint Online ended on July 1, 2024. All SharePoint Online Add-Ins retired on April 2, 2026, regardless of how they were acquired. Contact the vendor for a replacement that does not depend on the Add-in model.

## Can I still use my Add-In on SharePoint on-premises?

SharePoint Server Add-ins deployed through an on-premises app catalog are not retired by the SharePoint Online retirement. Acquiring them from the SharePoint Store/public marketplace ended on April 2, 2026.

## Can I, as Add-In vendor, still update my Add-In?

An update cannot restore a retired SharePoint Online Add-In. Provide SharePoint Online customers with a replacement that does not depend on the Add-in model. For SharePoint Server customers, distribute applicable updates through an on-premises app catalog; the SharePoint Online retirement does not retire that deployment model.

## My Add-In is used for both SharePoint Online and SharePoint on-premises; what do you advise?

SharePoint Online is continuously being updated and getting new and updated features, whereas SharePoint on-premises follows a much slower release cadence. This means that on-premises SharePoint doesn't support the latest SharePoint Framework version, or the latest features. If you want to continue to maintain a single codebase, you'll need to use an SPFx version that's also supported for your target SharePoint on-premises environment, which will limit the options for your SharePoint Online solution. An alternative approach is to build and maintain two versions of your SPFx application, one for SharePoint Online and one for SharePoint on-premises, and use shared code where possible to maximize code reuse.

## Can I still perform user profile updates?

Yes, you can still read and update user profiles without Azure ACS. When you configure your Microsoft Entra (formerly Azure AD) application using the SharePoint `User.ReadWrite.All` permission, your app can update user profiles for all users. Note that if you want to update a user profile property that's using an underlying term set, you also need to grant the SharePoint `TermStore.ReadWrite.All` permission. See [Error when using app to update user profile properties in SharePoint Online](/sharepoint/troubleshoot/sharing-and-permissions/app-permission-error-update-user-profile-property) to learn more.

## Will remote event receivers also be retired?

Remote event receivers registered using Azure ACS stopped working in SharePoint Online on April 2, 2026. They can no longer use ACS to make delegated or app-only calls back into SharePoint. The recommended replacement is [SharePoint Online webhooks](../apis/webhooks/overview-sharepoint-webhooks.md). See [Transform SharePoint Add-in model Remote Event Receivers to SharePoint Online Webhooks](../sp-add-ins-modernize/from-remote-event-receivers-to-webhooks.md). That article uses the SharePoint REST API to add webhooks; Microsoft Graph [change notifications](/graph/change-notifications-overview) with a [subscription for a SharePoint list](/graph/api/resources/subscription) are another option.

As webhooks are asynchronous by definition, synchronous events that allow an app to block or cancel a SharePoint action are no longer possible. If event blocking is being used to prevent accidental data updates/deletes by unauthorized users, then possible workarounds are securing the protected files/folders so they cannot be updated/deleted anymore, or by moving this type of data to a hidden library. In general, moving from synchronous to asynchronous events will require updating your application logic.

> [!Important]
> Remote event receivers registered using a Microsoft Entra application have a separate retirement date of July 1, 2027. They are not a way to keep the SharePoint Add-in model or Azure ACS working. Migrate to webhooks rather than introducing new remote event receiver dependencies. See [Use remote event receivers without Azure ACS dependency](../sp-add-ins-modernize/use-remote-event-receivers-without-azure-acs-dependency.md) and the [retirement update](https://techcommunity.microsoft.com/t5/microsoft-sharepoint-blog/remote-event-receivers-retirement-update-in-sharepoint-online/ba-p/4068938).

## Can I still perform taxonomy updates?

Yes, you can still update taxonomy (termsets, terms, etc) without Azure ACS. Configure your Microsoft Entra application with the SharePoint `TermStore.ReadWrite.All` permission (delegated or application) if you want to use the CSOM taxonomy APIs. Moving forward, the recommended approach is to use the Microsoft Graph taxonomy API. This will require the Microsoft Graph `TermStore.ReadWrite.All` permission (delegated or application). See the [Microsoft Graph documentation](/graph/api/resources/termstore-set) for more details.

## Can I still add OOB apps when I'm using the "classic" site contents page?

The classic **Site Contents** page (`_layouts/15/viewlsts.aspx`) continues to let you add out-of-the-box apps such as Document Library, Custom List, and Form Library. These are not retired SharePoint Add-Ins.

## Are SharePoint CSOM or SharePoint JSOM part of this retirement?

No. CSOM (client-side object model), JSOM (JavaScript object model), and SharePoint REST APIs are not retired by the SharePoint Add-In or Azure ACS retirements. Applications using these APIs must still use supported authentication. For new applications and updates, use Microsoft Graph and SharePoint REST APIs for client-side code. For server-side code, use Microsoft Graph as a first choice; use SharePoint REST or CSOM for functionality that is not available in Microsoft Graph.

## When I use appregnew.aspx the created ACS principals show up in Entra

From December 2024, ACS principals created using `appregnew.aspx` appeared as regular Microsoft Entra application principals instead of service principals whose `legacyServicePrincipal` property was set to `Legacy`. This did not convert them to supported Microsoft Entra authentication. Microsoft 365 Assessment tool version 1.10.0 or later can identify these principals. Renewing their secrets does not restore Azure ACS authentication or SharePoint Add-Ins in SharePoint Online after April 2, 2026.

## Do I need to delete Azure ACS principals that are not needed anymore?

Azure ACS principals will automatically expire (default lifetime is 2 years) so no action is needed; you can just let the principals expire. If you want to delete the principals after remediation, then follow this guidance:

- For principals that have Site, Web or List permissions, navigate to the site collection holding the principal and append `_layouts/15/appprincipals.aspx` to the url to load the **Site Collection App Permissions** page. On this page, delete the unwanted principals by clicking on the **X** icon.
- For principals that have tenant permissions, copy the principal app id from the report and navigate to the [Microsoft Entra Enterprise Applications view](https://entra.microsoft.com/#view/Microsoft_AAD_IAM/EnterpriseApplicationListBladeV2), paste the app id in the search box and press **enter**. Click on the displayed enterprise app to load it, click on **Properties**, then click **Delete**.

For principals that have Site, Web or List permissions **and** Tenant permissions, you'll need to follow both procedures described above.

Azure ACS authentication no longer works in SharePoint Online, even if a principal's secret has not expired. Review obsolete principals as part of migration cleanup. See the [Azure ACS retirement announcement](retirement-announcement-for-azure-acs.md).

## Can I rely on unpublished offers in Partner Center for managing a multi-tenant Client ID for customers?

No, offers setup in Partner Center must be published on Microsoft stores before using the client IDs in production.
