---
title: Billing Meters
description: Reference for SharePoint Embedded pay-as-you-go billing meters and pricing resources.
ms.date: 07/13/2026
ms.reviewer: pemtaira
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Billing meters

**Applies to:** Billing administrator

<!-- agent:
task_type: reference
audience: administrator
outcome: Identify SharePoint Embedded billing meters and where charges are reviewed.
next: ../admin/monitor-usage-billing-cost.md
-->

SharePoint Embedded uses pay-as-you-go (PAYG) billing through an Azure subscription. SharePoint Embedded has four billing meters. Both standard billing container types and pass-through billing container types use the same meters.

For setup guidance, see [choose a billing model](../plan/choose-billing-model.md). For monitoring, see [monitor usage, billing, and cost](../admin/monitor-usage-billing-cost.md).

| Meter | Unit | What is metered | Notes |
| --- | --- | --- | --- |
| Storage | $/GB | Files, documents, metadata, versions, recycle bin content, and deleted container collection content, in both active and archived states. | Storage is based on data stored in SharePoint Embedded. |
| Archived Storage | $/GB | Storage consumed by archived containers within a tenant. | Archiving moves data to the cold storage tier, which offers lower storage costs than active storage. |
| API Transactions | $/Transactions | Each Microsoft Graph call made explicitly by the SharePoint Embedded application. | Internal service calls, such as eDiscovery queries and admin actions in SharePoint admin center or SharePoint PowerShell, aren't charged as application transactions. |
| Egress | $/GB | Data that exits the SharePoint Embedded platform, such as documents downloaded to a customer's client device or data transferred to a server operated by the customer. Charges are based on total volume transferred out (GB). | Downloads from the SharePoint Embedded application server to Office Desktop clients or Web Application Companion aren't charged as egress. |
| Pay-as-you-go message (private preview) | Message | SharePoint Embedded agent interactions. | SharePoint Embedded agents use the Copilot Studio meter. Each agent interaction uses 12 messages. |

## Storage

Storage consumption includes files and documents plus their metadata and versions, in both active and archived states. Content in the recycle bin and deleted container collection also contributes to storage consumption.

## Archived storage

The Archived Storage meter measures storage consumed by archived containers within a tenant. Archiving a container moves its data to the cold storage tier, which offers lower storage costs compared to active storage. Archived content is still billed, but at the archived-storage rate.

## API transactions

Each explicit Microsoft Graph request from the SharePoint Embedded application counts as one transaction. For examples of container APIs, see the [fileStorageContainer resource](/graph/api/resources/filestoragecontainer).

## Egress

Egress is data that exits the SharePoint Embedded platform, such as a document downloaded to a customer's client device or data transferred to a server operated by the customer. Egress charges are based on the total volume of data transferred out, measured in GB. Some Microsoft-integrated transfers are exempt, including downloads to Office Desktop clients and Web Application Companion.

## Agent message meter

The private preview SharePoint Embedded agent meter uses the Copilot Studio message meter. One SharePoint Embedded agent interaction uses 12 messages: two for generative answer and 10 for tenant graph grounding.

## Pricing links

- [SharePoint Embedded product page](https://adoption.microsoft.com/sharepoint/embedded/)
- [Azure Cost Management](https://portal.azure.com/)
- [Monitor usage, billing, and cost](../admin/monitor-usage-billing-cost.md)

## Related resources

- [Choose a billing model](../plan/choose-billing-model.md)
- [Monitor usage, billing, and cost](../admin/monitor-usage-billing-cost.md)
