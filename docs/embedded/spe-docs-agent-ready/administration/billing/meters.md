---
title: SharePoint Embedded billing meters
description: Reference for the four SharePoint Embedded pay-as-you-go meters — storage, archived storage, API transactions, and egress — plus their exemptions.
ms.topic: reference
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: reference
  difficulty: beginner
  roles: [owning-admin, consuming-admin, app-developer, enterprise-developer]
  prerequisites:
    - uri: /sharepoint/dev/embedded/administration/billing/billing
      kind: concept
  api_surface: []
  next_steps:
    - uri: /sharepoint/dev/embedded/administration/billing/billingmanagement
      when: always
  related:
    - uri: /sharepoint/dev/embedded/administration/billing/billing
    - uri: /sharepoint/dev/embedded/administration/billing/billingmanagement
  stability: ga
  last_validated: proposed
---

# SharePoint Embedded billing meters
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

SharePoint Embedded uses a pay-as-you-go (PAYG) billing model through an Azure subscription. Billing is determined by how much data (in GB) you store in active and archived states, the transactions used to access and modify containers and their contents, and the data egressed from the SharePoint Embedded platform. You can view usage and billing details in [Azure Cost Management](https://ms.portal.azure.com/). Both standard billing and passthrough billing container types use the same meters.

SharePoint Embedded has four billing meters. For pricing details, see the [product page](https://adoption.microsoft.com/en-us/sharepoint/embedded/).

## Meters

| Meter | Unit | What it measures |
|---|---|---|
| Storage | GB | Storage used by files and documents along with their metadata and versions, including all content in the recycle bin and the deleted container collection. |
| Archived storage | GB | Storage consumed by archived containers within a tenant. Archiving moves data to the cold storage tier, which has lower storage cost than active storage. |
| API transactions | transaction (count) | Each Microsoft Graph call made explicitly by the SharePoint Embedded application counts as one transaction. |
| Egress | GB | Total volume of data transferred out of the SharePoint Embedded platform (for example, a document downloaded to a client device, or data transferred to a customer-operated server). |

> [!NOTE]
> Rates are not published in this article. For the per-unit price of each meter, see the [SharePoint Embedded product page](https://adoption.microsoft.com/en-us/sharepoint/embedded/).

## API transaction exemptions

Each Microsoft Graph call made explicitly by the application is a billable transaction. See [examples of Microsoft Graph calls](https://learn.microsoft.com/graph/api/resources/filestoragecontainer) a SharePoint Embedded application can make. Calls made by internal services to containers, which the application has no control over, are **not** charged.

| Exempt transaction | Why exempt |
|---|---|
| Queries by the eDiscovery service searching container content for compliance or legal purposes | Internal service call; not initiated by the application |
| Admin actions by the SharePoint Embedded admin or Global admin on containers through SharePoint admin center or SPO PowerShell | Administrative action; not an application Graph call |

## Egress exemptions

Egress is charged on the total volume of data transferred out of SharePoint Embedded, measured in GB. Certain transfers within integrated Microsoft services are exempt.

| Exempt transfer | Why exempt |
|---|---|
| File downloads from the application server to the customer's Office desktop client | Transfer within integrated Microsoft services |
| File downloads from the application server to the Web Application Companion (WAC) | Transfer within integrated Microsoft services |

## Pay-as-you-go message meter (private preview)

> [!IMPORTANT]
> This meter is in **private preview**. The meter, rate, and message counts may change before general availability.

SharePoint Embedded agents use the Copilot Studio meter. A **message** is the unit that measures agent usage.

| Item | Value |
|---|---|
| Rate | $0.01 per message |
| Messages per agent interaction | 12 (2 for the generative answer feature + 10 for the tenant graph grounding feature) |
| Cost per agent interaction | $0.12 |

## Examples

- **Active storage growth.** A tenant stores 500 GB of active container content plus versions and recycle-bin items. All 500 GB is billed on the **Storage** meter.
- **Archival savings.** Moving 200 GB of inactive containers to the archive tier shifts that 200 GB from the **Storage** meter to the lower-cost **Archived storage** meter.
- **Application read.** The application calls `GET /storage/fileStorage/containers/{container-id}` to read a container. That one Graph call is billed as one **API transaction**.
- **Compliance query (exempt).** An eDiscovery search across container content is an internal service call and is **not** billed on the API transactions meter.
- **Client download (exempt).** A user opens a document in the Office desktop client; the download from the application server to that client is **not** billed on the **Egress** meter.

## See also

- [Pay-as-you-go billing for SharePoint Embedded](/sharepoint/dev/embedded/administration/billing/billing)
- [Billing management](/sharepoint/dev/embedded/administration/billing/billingmanagement)
- [SharePoint Embedded product page (pricing)](https://adoption.microsoft.com/en-us/sharepoint/embedded/)
- [fileStorageContainer Graph resource](https://learn.microsoft.com/graph/api/resources/filestoragecontainer)
