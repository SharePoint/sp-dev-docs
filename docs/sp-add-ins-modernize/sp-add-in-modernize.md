---
title: Modernizing your SharePoint Add-In model implementations in Microsoft 365
description: Migrate retired SharePoint Online Add-in and Azure ACS implementations to supported authentication, SPFx, and automation options.
ms.date: 10/25/2026
ms.service: sharepoint
ms.localizationpriority: high
---

# Modernization guidance for existing SharePoint Add-In model implementations in Microsoft 365

The SharePoint Add-In model was introduced as part of the SharePoint 2013 timeframe and it was also provided as an extensibility option for SharePoint Online (Microsoft 365). 

[!INCLUDE [sp-Add-In-deprecation](../../includes/snippets/sp-add-in-deprecation.md)]

SharePoint Add-ins are legacy technology and no longer work in SharePoint Online. Use this collection to inventory and replace existing implementations, not to create new Add-ins. The replacement technologies remain supported according to their own platform requirements.

> [!NOTE] 
> The April 2, 2026 retirement applies to SharePoint Online. It doesn't retire SharePoint Server Add-ins deployed through an on-premises app catalog or supported SharePoint APIs such as REST, CSOM, and JSOM.

Azure ACS authentication for SharePoint Online also retired on April 2, 2026. Replace ACS-based authentication used by provider-hosted Add-ins or unattended services with supported Microsoft Entra ID authentication; choose permissions and credentials for the actual workload.

[!INCLUDE [azure-acs-retirement](../../includes/snippets/azure-acs-deprecation.md)]

## Transformation technologies

Here's a high level table of the feature mapping as the Add-In model implementation is transformed to use other long term supported features:

| Classic technology 	       | New technology
|--------------------	       |----------------
| SharePoint Add-In          | SharePoint Framework
| Provider hosted Add-In     | Microsoft Entra ID registered applications
| App registration using ACS | Microsoft Entra ID registered applications
| JSOM-based legacy implementation | Evaluate Microsoft Graph, supported SharePoint APIs, and PnPjs; JSOM itself isn't retired by Add-in retirement
| SharePoint Online classic workflows | Power Automate flows or another supported automation service

## Transformation guidance for the Add-In techniques

Here's a list of all articles for the transformation guidance when moving away on using SharePoint Add-In model, grouped based on the covered topic:

* Modern Authentication and Authorization
  * [Understanding Azure Active Directory and OAuth 2.0 in the context of SharePoint Online modern development](./Understanding-AAD-and-OAuth-for-SPO-modern.md)
  * [From Access Control Service applications to Azure Active Directory applications](./From-ACS-to-AAD-apps.md)
  * [Building Multi-tenant applications for SharePoint Online](./Multi-tenant-applications.md)
  * [Understanding Resource Specific Consent (RSC)](./Understanding-RSC-for-MSGraph-and-SharePoint-Online.md)
* Customizing the modern UI
  * [From App Parts and classic Web Parts to modern client-side SPFx Web Parts](./From-App-Parts-to-Modern-Web-Parts.md)
  * [From UI Extensions to SPFx List View Command Set](./From-UI-Extensions-to-ListView-Command-Sets.md)
  * [From status bars and notifications to SPFx Application Customizers](./From-Notifications-to-Application-Customizers.md)
  * [From classic dialogs to modern dialogs with SharePoint Framework](./From-classic-Dialogs-to-modern-Dialogs.md)
* Building modern SharePoint Online or Microsoft 365 solutions
  * [From SharePoint JavaScript Object Model to Client-side code and PnPjs](./From-JSOM-to-Client-Side.md)
  * [From Client Side Object Model (CSOM) to PnP Framework and PnP Core SDK](./From-CSOM-to-PnP-Libraries.md)
  * [From XSLT rendering to List Formatting](./From-XSLT-to-List-Formatting.md)
  * [From Remote Event Receivers to SharePoint Online Webhooks and Microsoft Graph Webhooks](./From-Remote-Event-Receivers-to-Webhooks.md)
  * [From SharePoint-hosted apps to client-side applications](./From-SharePoint-Hosted-to-Client-Side.md)
  * [From provider-hosted apps to AAD applications](./From-Provider-Hosted-to-AAD-applications.md)
  * [From SharePoint Add-In model Workflow Apps to Microsoft Power Automate](./From-Workflow-Apps-to-Power-Automate.md)
  * [Publishing modern SharePoint applications on Microsoft AppSource](./Publishing-modern-SharePoint-apps-on-AppSource.md)
* Modern Provisioning
  * [Modern provisioning of artifacts and Information Architecture](./Modern-Provisioning.md)

If some essential guidance isn't included, open an issue at the [SharePoint developer documentation](https://aka.ms/spdev-issues) and we'll help you as fast as possible with your specific question.
