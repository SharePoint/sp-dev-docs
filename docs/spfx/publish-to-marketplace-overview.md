---
title: Publish SharePoint Framework applications to the marketplace
description: Considerations for publishing SharePoint Framework applications to the marketplace.
ms.date: 10/28/2026
ms.localizationpriority: high
---

# Publish SharePoint Framework applications to the marketplace

Publish SharePoint Framework solutions through [Microsoft AppSource](https://appsource.microsoft.com/) and the SharePoint Store so other organizations can discover and install them in their Microsoft 365 tenants. This guidance covers web parts, extensions, and **Copilot UX components**, which are supported in the SharePoint Store starting with SPFx 1.24 GA.

> [!NOTE]
> See the [Microsoft 365 App Stores documentation](/office/dev/store/) for the general process for submitting your solution to the store. This guidance is the same for all different application types in Microsoft 365. Documentation also includes details on the submission process.

> [!IMPORTANT]
> You'll need to use SharePoint Framework v1.11 or later for solutions submitted to the Store. Use SPFx 1.24 for new solutions that include Copilot UX components, and review the [compatibility reference](compatibility.md) before upgrading an existing solution.

> [!IMPORTANT]
> All SharePoint Framework solutions will be targeted for SharePoint store. They can be also enabled for Microsoft Teams usage and the deployment will happen to Microsoft Teams gallery through the specific tenant's SharePoint app catalog. There's currently no option to only target Microsoft Teams store for SharePoint Framework-based extensibility.

* [SharePoint Framework specific validation checklist](publish-to-marketplace-checklist.md)
* [After publishing your app](publish-to-marketplace-after-publishing.md)
* [Frequently asked questions](publish-to-marketplace-faq.yml)

## Copilot UX components

**Copilot UX components are supported in the SharePoint Store starting with SPFx 1.24 GA on October 28, 2026.** Existing Store solutions can add this capability through an updated submission. Package the declarative agent and components together in the SPFx `.sppkg`.

State the required Microsoft 365 Copilot add-on USL (user-specific license) on top of E3, E5, or E7 in your listing and setup instructions. The same license is required for development and testing. The component capability isn't consumption-based; APIs/services called by your implementation can have separate charges. Describe those dependencies separately.

Test in the supported Copilot and Copilot-in-Teams browser/desktop clients. iOS and Android, including Teams mobile, aren't supported at GA. Document tenant deployment, initial agent sync, permissions, and any additional configuration needed by reviewers and customers.

> [!IMPORTANT]
> At GA, automatic Sync to Teams has a mismatch for solutions combining Copilot UX components and SPFx Teams functionality. A manually created Teams package is the deployment workaround. This doesn't override the Store's rules for embedded custom Teams packages; confirm the submission path with the review team for that combination.

See [Copilot availability](copilot/overview-copilot-apps.md#availability), [development and deployment](copilot/development-and-deployment.md), and the [submission checklist](publish-to-marketplace-checklist.md#copilot-ux-component-test-guidance).
