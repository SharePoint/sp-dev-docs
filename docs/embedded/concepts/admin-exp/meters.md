---
title: SharePoint Embedded Meters
description: This article describes the the meters in SharePoint Embedded.
ms.date: 05/21/2024
ms.localizationpriority: high
---

# SharePoint Embedded Meters
SharePoint Embedded employs a pay-as-you-go (PAYG) billing model through an Azure subscription. Billing is determined by how much data in GB you store in SharePoint Embedded, transactions used to access and modify and data that is egressed from the SharePoint Embedded application. Each of these factors contributes to the overall cost, ensuring that you only pay for the resources and services you use. You can view this usage in the Azure Cost Management portal as meter events through the Azure subscription it chooses. 

SharePoint Embedded has three billing meters:

| SharePoint Embedded Service Meters  |  Meter Unit  |
| :--------------------------------:   | :----------:   |
|              Storage                 |   GB/Day     |
|   Graph API Transactions             | 1 API call    |
|           Egress                     |     GB        |
## Storage
Storage consumption meter charges apply to the storage used by files and documents stored in SharePoint Embedded containers. The storage pricing in SharePoint Embedded is calculated per gigabyte (GB) per day. Here are some examples of what is counted towards the storage consumption:

1.	Files and documents in a container, the total size of these documents in GB is measured daily. Files in the recycle bin will also be 
2.	Large video or audio files stored in SharePoint Embedded containers will contribute to storage consumption. 
3.	Each version of the file will contribute towards the storage consumption.
4.	Items moved to the Recycle Bin are still considered part of the storage consumption until they are permanently deleted.


## API Transactions 
Graph API calls made explicitly by the SharePoint Embedded application towards containers or container content are counted as transactions, and customers are billed based on the number of these transactions. Examples of chargeable transactions include 
1. Creating a container in the SharePoint Embedded application
2. Viewing the list of documents in the container
3. Updating user permissions of a container or the content of the container
4. Deleting a file from a container
5. Recovering a deleted file in the container.

However, calls made by internal services to the containers, which the application has no control over, are **not** chargeable. Examples of such non-chargeable transactions include:

1. eDiscovery Searches: Queries performed by the eDiscovery service to search through container content for compliance or legal purposes.
2. Automated Compliance Checks: Routine checks by internal systems to ensure that containers comply with organizational policies set in the Purview compliance portal.

## Egress
Egress refers to the data transferred out of the SharePoint Embedded platform to external destinations. Specifically, egress encompasses the transfer of data (measured in bytes) from the SharePoint Embedded application server to a user's desktop or mobile client. Egress charges are incurred based on the actual data transfer, which includes the content of files or media being moved from the server to a user's device.
Eligible for egress charges are the following scenarios:

1.	Downloading Files: When files are downloaded from the SharePoint Embedded application to a customer's client device (e.g., desktop or mobile).
2.	Downloading Videos: When videos are downloaded from the SharePoint Embedded application to a customer's client device.

However, certain types of data transfers are exempt from egress charges:

1.	Office Desktop Client: File downloads from the SharePoint Embedded application server to the customer's Office Desktop client are not charged.
2.	Web Application Companion (WAC): File downloads from the SharePoint Embedded application server to the Web Application Companion (WAC) are not charged.

These exemptions ensure that customers are not billed for data transfers that occur within integrated Microsoft services, promoting seamless usage without additional costs for these specific internal operations.

