---
title: Identities Element in Subscription
description: Identities Element in Subscription lists the explicit identities this cache subscription contains.
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 0c401210-8f56-70d1-a337-ac7ad529ef16
---

# Identities Element in Subscription

(Subscription Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Lists the explicit identities this cache subscription contains.

**Namespace**: `http://schemas.microsoft.com/office/2006/03/BusinessDataCatalog`

**Schema**: Subscription

```XML
<Identities></Identities>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None.

### Child elements

| Element | Description |
| --- | --- |
| [Identity Element in Identities (Subscription Schema)](identity-element-in-identities-subscription-schema.md) | The serialized value of an identity of an external item. You can get the serialized value of an identity by calling the **Serialize** method on the **Identity** object. |

### Parent elements

| Element | Description |
| --- | --- |
| [Subscription Element (Subscription Schema)](subscription-element-subscription-schema.md) | The cache subscription that contains this list of explicit identities. |
