---
title: Audit events
description: Reference for SharePoint Embedded container type audit events in the Microsoft Purview unified audit log.
ms.date: 07/10/2026
ms.reviewer: pemtaira
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Audit events

**Applies to:** Compliance administrator

<!-- agent:
task_type: reference
audience: compliance
outcome: Look up SharePoint Embedded container type audit event names and properties in Microsoft Purview.
next: ../admin/review-audit-events.md
-->

The Microsoft 365 unified audit log captures SharePoint Embedded container type and container type registration operations through [Microsoft Purview](/purview/audit-solutions-overview). These events let compliance administrators and developers track changes to container type definitions and registrations in consuming tenants. File and folder activity inside containers is captured by standard SharePoint file audit events.

For step-by-step investigation guidance, see [Review audit events](../admin/review-audit-events.md).

## Container type activities

These events are logged when a container type is created, updated, or deleted. They use the **Workload** value **SharePoint** and appear under the **SharePoint Embedded Container Type activities** category in Microsoft Purview audit.

| Friendly name | Operation | Description |
| --- | --- | --- |
| Created container type | `ContainerTypeCreated` | Records creation of a new SharePoint Embedded container type definition. |
| Deleted container type | `ContainerTypeDeleted` | Records deletion of a SharePoint Embedded container type owned by the tenant. |
| Updated container type | `ContainerTypeUpdated` | Records changes to properties of a container type, such as name or configuration. |
| Updated container type owners | `ContainerTypeOwnersUpdated` | Records owner additions to or removals from a container type. |

For the full list of audit activities, see [Audit log activities](/purview/audit-log-activities#sharepoint-embedded-container-type-activities).

## Container type registration activities

These events are logged when a container type registration is created, updated, or deleted in a consuming tenant. A registration lets a SharePoint Embedded application operate in a given tenant. They use the **Workload** value **SharePoint** and appear under the **SharePoint Embedded Container Type Registration activities** category in Microsoft Purview audit.

| Friendly name | Operation | Description |
| --- | --- | --- |
| Created container type registration | `ContainerTypeRegistrationCreated` | Records creation of a SharePoint Embedded container type registration in a tenant. |
| Deleted container type registration | `ContainerTypeRegistrationDeleted` | Records deletion of a SharePoint Embedded container type registration from a tenant. |
| Updated container type registration | `ContainerTypeRegistrationUpdated` | Records updates to a SharePoint Embedded container type registration in a tenant. |

For the full list of audit activities, see [Audit log activities](/purview/audit-log-activities#sharepoint-embedded-container-type-registration-activities).

## Properties

Container type and container type registration audit events include the `ContainerTypeId` property to identify the relevant container type. Unlike container-level file events, they don't include `ContainerInstanceId` because they apply at the type level, not to an individual container instance.

Container type and container type registration audit events use the SharePoint base schema. For the full schema definition and enum values, see the [Office 365 Management Activity API schema](/office/office-365-management-api/office-365-management-activity-api-schema#sharepoint-base-schema).

## Search for events

Use the [Microsoft Purview audit log search](/purview/audit-search) and set the activity category filter to **SharePoint Embedded Container Type activities** or **SharePoint Embedded Container Type Registration activities**. You can also search with PowerShell:

```powershell
Search-UnifiedAuditLog -Operations ContainerTypeCreated,ContainerTypeDeleted,ContainerTypeUpdated,ContainerTypeOwnersUpdated,ContainerTypeRegistrationCreated,ContainerTypeRegistrationDeleted,ContainerTypeRegistrationUpdated -StartDate (Get-Date).AddDays(-7) -EndDate (Get-Date)
```

## Related content

- [Review audit events](../admin/review-audit-events.md)
- [Apply security and compliance controls](../admin/apply-security-compliance-controls.md)
- [Search the audit log](/purview/audit-search)
