---
title: Proxy element in LobSystem
description: Proxy element in LobSystem specifies a user-provided proxy that is identical to the one that would be generated if this element were not present.
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.Proxy
ms.localizationpriority: medium
ms.assetid: 8ec2e7b0-156f-ff4a-a87b-fe5764e4875b
---

# Proxy element in LobSystem

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a user-provided proxy that is identical to the one that would be generated if this element were not present. This is used to improve performance by removing the proxy generation overhead. To specify custom business logic that connects to an external system, .NET Connectivity Assembly type external systems must be used.

**Namespace**: `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema**: BDCMetadata

## Definition

```XML
<Proxy></Proxy>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None.

### Child elements

None.

### Parent elements

|Element|Description|
|-------|-----------|
[LobSystem Element in LobSystems (BDCMetadata Schema)](lobsystem-element-in-lobsystems-bdcmetadata-schema.md)|The **LobSystem** element that this proxy applies to.|

## Text value

**String**
