---
title: MediaServiceMetadata field value is no longer available in SharePoint Online
description: MediaServiceMetadata field through CSOM API surface will be discontinued
ms.date: 07/01/2026
ms.localizationpriority: high
ms.service: sharepoint
---

# MediaServiceMetadata field value is no longer available in SharePoint Online

Starting in November 2026, SharePoint Online will no longer return values for the **MediaServiceMetadata** field through public API responses. The field is an internal SharePoint implementation detail and has never been supported for external client dependencies.

> [!IMPORTANT]
> MediaServiceMetadata is an internal SharePoint field. Even if your solution previously observed this value in API responses, the field wasn't an externally supported data contract.

## What is changing?

As part of ongoing modernization work in SharePoint Online, Microsoft is changing how certain internal media metadata is stored and exposed. The **MediaServiceMetadata** field may continue to exist in the SharePoint schema, but its value will no longer be returned in public API responses, including for current items and historical versions. Writing to this field is also no longer supported.

## Impacted API surface

This change impacts use of the **MediaServiceMetadata** data structure in the SharePoint Client-Side Object Model (CSOM). The field value shouldn't be treated as a reliable or supported contract in public CSOM API responses.

## When is this happening?

This change takes effect starting in November 2026. It affects third-party callers that currently receive or write the MediaServiceMetadata field value through public API responses.

## What do I need to do?

If your solution depends on the `MediaServiceMetadata` field value, update it so that it no longer reads from or writes to this field. Treat the field as unavailable and avoid building new dependencies on it.
If you have a scenario that requires media metadata that isn't available through supported APIs, open a Microsoft support case and reference this article. Include details about the scenario, the API surface you use, and the specific metadata required so that the SharePoint team can evaluate supported alternatives.