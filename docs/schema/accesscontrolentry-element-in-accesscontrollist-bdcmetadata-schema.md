---
title: AccessControlEntry element in AccessControlList (BDCMetadata Schema)
description: Details on the AccessControlEntry element in AccessControlList (BDCMetadata Schema)
manager: soliver
ms.date: 01/27/2021
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.AccessControlEntry
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 85e24489-0a6b-dfda-fb03-474fe7b0d947
---

# AccessControlEntry element in AccessControlList (BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains an access control entry (ACE) which specifies access rights for the parent element.

To learn more about the Business Connectivity Services and security, see [Business Connectivity Services Security Overview](https://technet.microsoft.com/library/ee661734(office.14).aspx).

**Namespace**: `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema**: BDCMetadata

```XML
    <AccessControlEntry Principal = "String"> </AccessControlEntry>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes
  
| Attribute | Description |
| --- | --- |
| **Principal** | Required. </br> The name of the security principal that has this ACE. </br> Attribute type: **String** |

### Child elements
  
| Element | Description |
| --- | --- |
| [Right element in AccessControlEntry (BDCMetadata Schema)](right-element-in-accesscontrolentry-bdcmetadata-schema.md) | A **Right** element that specifies the permissions available to the security principal. |

### Parent elements
  
| element | Description |
| --- | --- |
| [AccessControlList element (BDCMetadata Schema)](accesscontrollist-element-bdcmetadata-schema.md) | The access control list (ACL) that contains this ACE. |
