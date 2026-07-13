---
title: Review Audit Events
description: Find and interpret SharePoint Embedded audit activity in Microsoft Purview audit.
ms.date: 07/10/2026
ms.reviewer: dilucesr
ms.localizationpriority: high
---

# Review Audit Events

**Applies to:** Consuming tenant admin — Compliance admin / Security admin / Audit reader

<!-- agent:
task_type: how-to
audience: compliance
outcome: Review SharePoint Embedded audit events in Microsoft Purview and use container fields for investigations.
next: apply-security-compliance-controls.md
-->

Review SharePoint Embedded audit activity in Microsoft Purview audit when investigating user, admin, file, or container activity.
SharePoint Embedded audit capabilities mirror existing SharePoint audit capabilities, and user and admin operations performed in SharePoint Embedded applications are captured in the organization's unified audit log.

> [!IMPORTANT]
> Use Microsoft Purview audit as the authoritative investigation surface for audit records.
> Use SharePoint Embedded app and container identifiers to narrow results to embedded content.

## Before you begin

Confirm these prerequisites.

- Audit is available for your Microsoft 365 organization.
- You can access Microsoft Purview audit with the required compliance permissions.
- You know the date range for the investigation.
- You know the SharePoint Embedded application, container, user, or file involved.
- You can obtain container details from the SharePoint admin center or PowerShell when needed.

For supported SharePoint Embedded compliance capabilities, see [Security and Compliance](apply-security-compliance-controls.md).

## Understand SharePoint Embedded audit coverage

Audit capabilities in SharePoint Embedded mirror existing SharePoint audit capabilities.
User and admin operations performed in applications hosted in SharePoint Embedded are captured, recorded, and retained in the unified audit log.

Audit can help answer questions such as:

- Who accessed a file?
- Who modified content?
- Who deleted or restored content?
- Which admin changed container settings?
- Which container was involved in an event?
- Which container type was involved in an event?

Retention and availability depend on your Microsoft Purview audit licensing and configuration.
For audit platform details, see [Auditing solutions in Microsoft Purview](/purview/audit-solutions-overview).

## Identify SharePoint Embedded fields

In addition to existing SharePoint file properties, SharePoint Embedded audit events include extra data that helps isolate SharePoint Embedded content.
SharePoint Embedded audit events include these fields:

| Field | Use it for |
| --- | --- |
| `ContainerInstanceId` | Identify the specific SharePoint Embedded container instance involved in the event. |
| `ContainerTypeId` | Identify the SharePoint Embedded container type involved in the event. |

Use these fields with app and user context to scope an investigation.
If a result set includes regular SharePoint and SharePoint Embedded activity, filter or inspect these fields to isolate embedded content.

## SharePoint Embedded audit activities

To view all SharePoint Embedded audit log activities, see [Audit events](../reference/audit-events.md).

Container type events include the `ContainerTypeId` property. Unlike container-level file events, they don't include `ContainerInstanceId` because they apply at the type level, not to an individual container instance.

You can search these events with the [`Search-UnifiedAuditLog`](/powershell/module/exchangepowershell/search-unifiedauditlog) cmdlet. For example:

```powershell
Search-UnifiedAuditLog -Operations ContainerTypeCreated,ContainerTypeDeleted,ContainerTypeUpdated,ContainerTypeOwnersUpdated -StartDate (Get-Date).AddDays(-7) -EndDate (Get-Date)
```

## Get container context

Before searching audit, collect the context you have.

1. Identify the SharePoint Embedded application name.
1. Identify the owning application ID when available.
1. Identify the container name or container ID.
1. Identify the container site URL when available.
1. Identify the users, groups, or app identities involved.
1. Identify the time period.
1. Identify the suspected operation, such as read, update, delete, restore, sharing, or label change.

Use [Manage containers in SharePoint admin center](manage-containers-sharepoint-admin-center.md) to inspect container details.
Use [Manage containers with PowerShell](manage-containers-powershell.md) to retrieve container IDs and URLs for repeatable investigations.

## Search in Microsoft Purview audit

Use Microsoft Purview audit to search activity.

1. Open the Microsoft Purview portal.
1. Go to the audit solution.
1. Choose the date and time range.
1. Add users or app identities when known.
1. Add activities that match the investigation.
1. Search SharePoint-related activities when investigating file and container content.
1. Use **SharePoint Embedded Container Type activities** or **SharePoint Embedded Container Type Registration activities** when you know the investigation is about app setup or container type administration.
1. Run the search.
1. Open relevant results.
1. Inspect event details for SharePoint Embedded fields such as `ContainerInstanceId` and `ContainerTypeId`.

Use the most restrictive filters that still capture the incident.
Then widen the search if results are incomplete.

> [!TIP]
> Start with a narrow time range and known users.
> Expand to container identifiers or broader SharePoint activity if the first search doesn't return enough context.

## Interpret event details

When reviewing an event, capture the fields needed for the investigation record.

| Event detail | Why it matters |
| --- | --- |
| Operation or activity | Describes what happened. |
| User or actor | Identifies who performed the action. |
| Timestamp | Places the event on the investigation timeline. |
| Object or file path | Identifies the affected item. |
| Site or container URL | Helps map the item to a container. |
| `ContainerInstanceId` | Links the event to a specific SharePoint Embedded container. |
| `ContainerTypeId` | Links the event to a SharePoint Embedded container type. |
| Client or app context | Helps distinguish user action from app action when available. |

Export or preserve results according to your compliance investigation process.

## Common audit scenarios

Use audit records for common SharePoint Embedded investigations.

### Content access review

Search for file access or read activity by user, date range, and container context.
Use `ContainerInstanceId` to confirm the activity occurred in the expected SharePoint Embedded container.

### Content change review

Search for create, modify, rename, move, or delete activity.
Review the sequence of operations to identify whether content was changed by a user, app, or admin process.

### Container lifecycle review

Search for admin operations related to deletion, restore, or permanent deletion.
Correlate audit records with SharePoint admin center or PowerShell change records.

### Sensitivity label review

Search for label-related activity when investigating data classification changes.
Correlate audit records with the container's current sensitivity label and any policy changes in Microsoft Purview.

### External sharing review

Search for sharing-related SharePoint activities when investigating access outside the organization.
Also review application-level sharing settings when the app supports external sharing.

## Correlate with eDiscovery and DLP

Audit shows activity.
Other Microsoft Purview tools help with content investigation and policy enforcement.

- Use eDiscovery to search, hold, and export content in SharePoint Embedded containers.
- Use DLP to identify and protect sensitive information.
- Use retention policies to preserve or delete content according to policy.
- Use sensitivity labels to classify and protect containers.

For broader controls, see [Apply security and compliance controls](apply-security-compliance-controls.md).

## Troubleshoot missing audit results

Use these checks when expected results are missing.

- Confirm the date range includes the activity time.
- Confirm the correct user or app identity was searched.
- Confirm audit is available for the tenant and workload.
- Confirm the operation maps to SharePoint or file activity in Purview audit.
- Confirm the content is in a SharePoint Embedded container and not another storage location.
- Search with fewer filters, then inspect `ContainerInstanceId` and `ContainerTypeId`.
- Confirm your account has permissions to search audit records.
- Review Purview audit documentation for retention and search latency.

> [!NOTE]
> Audit records can take time to appear.
> If an event is recent, retry after the normal audit ingestion delay for your environment.

## Preserve investigation context

For each investigation, record:

1. Search date.
1. Search filters.
1. Exported result location.
1. Container identifiers.
1. App identifiers.
1. Users or app identities reviewed.
1. Actions taken after review.

Keep records according to your compliance and legal process.

## Related content

- [Apply security and compliance controls](apply-security-compliance-controls.md)
- [Manage containers in SharePoint admin center](manage-containers-sharepoint-admin-center.md)
- [Manage containers with PowerShell](manage-containers-powershell.md)
- [Security and Compliance](apply-security-compliance-controls.md)
- [Auditing solutions in Microsoft Purview](/purview/audit-solutions-overview)

## Next steps
Apply broader controls in [Apply security and compliance controls](apply-security-compliance-controls.md).
