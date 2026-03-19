---
title: Microsoft 365 Archive support for SharePoint Embedded containers
description: This article provides overview of Microsoft 365 Archive support for archival of SharePoint Embedded containers
ms.date: 03/20/2026
ms.localizationpriority: high
---

## Microsoft 365 Archive for SharePoint Embedded Containers (Preview)

Microsoft 365 Archive provides a cost-effective storage option for inactive or aging content stored in SharePoint Embedded containers.

Your organization and consuming tenants might need to retain data for extended periods to meet legal, compliance, or regulatory requirements. You might prefer to store the data in SharePoint to simplify searchability, security, compliance, and data lifecycle management.

Microsoft 365 Archive enables you to retain inactive SharePoint Embedded container data by moving it to a cold storage tier (archive) within SharePoint. Archived data continues to benefit from the same Microsoft 365 security, compliance, and search standards, while significantly reducing storage costs.

Once a container is archived, it becomes inaccessible. To access it again, the container must be reactivated. Reactivation is instantaneous if performed within the first 7 days after archival. If reactivated after 7 days, the process can take up to 24 hours to complete.

Archival and reactivation actions are supported for users with the Owner or Principal Owner roles on the container. Global Administrators and SharePoint Embedded Administrators can perform these actions on all containers. In addition, the application must have write permission on the container.

Microsoft 365 Archive is available for SharePoint sites. Detailed documentation is available here: [Microsoft 365 Archive Overview](https://learn.microsoft.com/en-us/microsoft-365/archive/archive-overview?view=o365-worldwide)

### SharePoint Embedded container archival guide

- Developer tenant guide: [Support archival of containers](../development/support-archival-of-containers.md)

- Consuming tenant guide: [Manage Archival of containers using SharePoint Admin Center](../administration/consuming-tenant-admin/ctaUX.md)