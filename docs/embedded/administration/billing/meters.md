---
title: SharePoint Embedded Billing Meters
description: This article describes the meters in SharePoint Embedded.
ms.date: 04/30/2025
ms.localizationpriority: high
---

# SharePoint Embedded Billing Meters

SharePoint Embedded employs a pay-as-you-go (PAYG) billing model through an Azure subscription. Billing is determined by how much data in GB you store in SharePoint Embedded in active and archived states, transactions used to access and modify the container and container contents, and data that is egressed from the SharePoint Embedded platform. Each of these factors contributes to the overall cost, ensuring that you only pay for the resources and services you use. You can view this usage and billing details in the [Azure Cost Management](https://ms.portal.azure.com/). Both Standard Billing container type and Pass-through Billing container type will use the same meters.

SharePoint Embedded has four billing meters as shown. Refer to the [product page](https://adoption.microsoft.com/en-us/sharepoint/embedded/) for pricing details.


## Storage

Storage consumption meters in SharePoint Embedded apply to the storage used by files and documents along with their metadata and versions. Storage consumption also includes all content in the recycle bin and deleted container collection within SharePoint Embedded.

## Archived Storage

Archived Storage meters in SharePoint Embedded measure the storage consumed by archived containers within a tenant. By archiving containers, data is moved to the cold storage tier, which offers lower storage costs compared to active storage.

## API Transactions

Each Microsoft Graph call made explicitly by the SharePoint Embedded application is counted as one transaction and customers are billed based on the transaction count. See the [examples](/graph/api/resources/filestoragecontainer) of Microsoft Graph calls that can be made by a SharePoint Embedded application.

However, calls made by internal services to the containers, which the application has no control over, are **not** charged. Some examples of such nonchargeable transactions include:

1. Queries performed by the eDiscovery service to search through container content for compliance or legal purposes.
1. Admin actions taken by the SharePoint Embedded Admin or Global Admin on containers through SharePoint Admin Center or SPO PowerShell.

## Egress

Egress refers to the data downloaded from the SharePoint Embedded platform to the customer's client device such as a desktop or mobile device.

However, certain types of data transfers are exempt from egress charges. These exemptions ensure that customers aren't billed for data transfers occurring within integrated Microsoft services, promoting seamless usage without extra costs for these specific internal operations. Some examples of these exemptions include:

1. File downloads from the SharePoint Embedded application server to the customer's Office Desktop client aren't charged.
1. File downloads from the SharePoint Embedded application server to the Web Application Companion (WAC) aren't charged.

## Pay as you go message (private preview)

SharePoint Embedded agents use the Copilot Studio meter for $0.01/message (messages are the unit that measures agent usage). Each interaction with SharePoint Embedded agent will use twelve (12) messages - 2 messages for the generative answer feature and 10 messages for the tenant graph grounding feature - so customers are billed at $0.12 per interaction with SharePoint Embedded agents.
