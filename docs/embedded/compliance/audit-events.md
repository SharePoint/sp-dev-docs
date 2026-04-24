---
title: SharePoint Embedded audit log events
description: Learn about audit log events for SharePoint Embedded container type operations in the Microsoft Purview unified audit log.
ms.date: 04/15/2026
ms.localizationpriority: medium
---

# SharePoint Embedded audit log events

SharePoint Embedded operations on container types are captured in the Microsoft 365 unified audit log through [Microsoft Purview](/purview/audit-solutions-overview). These events let compliance administrators and developers track changes to container type definitions.

For general information about searching the audit log, see [Search the audit log](/purview/audit-search). For a broader overview of all compliance capabilities available for content stored in SharePoint Embedded, see [Security and Compliance](security-and-compliance.md).

## Container type activities

The following events are logged when a container type is created, updated, or deleted. For more information, see [SharePoint Embedded container types](../getting-started/containertypes.md).

These events use **Workload** value **SharePoint** in the unified audit log.

| Friendly name | Operation | Description |
|:--|:--|:--|
| Created container type | ContainerTypeCreated | A new SharePoint Embedded container type definition was created. |
| Deleted container type | ContainerTypeDeleted | A SharePoint Embedded container type owned by the tenant was deleted. |
| Updated container type | ContainerTypeUpdated | Properties of a SharePoint Embedded container type, such as name or configuration, were changed. |
| Updated container type owners | ContainerTypeOwnersUpdated | Owners were added to or removed from a SharePoint Embedded container type. |

These events appear in the Microsoft Purview audit log under the **SharePoint Embedded Container Type activities** category. For the full reference of all audit activities, see [Audit log activities](/purview/audit-log-activities#sharepoint-embedded-container-type-activities).

## Searching for SharePoint Embedded audit events

To search for these events, use the [Microsoft Purview audit log search](/purview/audit-search). When searching, set the activity category filter to **SharePoint Embedded Container Type activities** to find the relevant events.

You can also search using PowerShell:

```powershell
Search-UnifiedAuditLog -Operations ContainerTypeCreated,ContainerTypeDeleted,ContainerTypeUpdated,ContainerTypeOwnersUpdated -StartDate (Get-Date).AddDays(-7) -EndDate (Get-Date)
```

Container type audit events include the `ContainerTypeId` property to identify the relevant container type. Unlike container-level file events, container type events don't include `ContainerInstanceId` because they apply at the type level, not to individual container instances.

## Schema reference

Container type audit events use the SharePoint base schema. For the full schema definition and enum values, see the [Office 365 Management Activity API schema](/office/office-365-management-api/office-365-management-activity-api-schema#sharepoint-base-schema).

## Related content

- [SharePoint Embedded container types](../getting-started/containertypes.md)
- [Security and Compliance](security-and-compliance.md)
- [Audit log activities](/purview/audit-log-activities#sharepoint-embedded-container-type-activities)
- [Office 365 Management Activity API schema](/office/office-365-management-api/office-365-management-activity-api-schema)
