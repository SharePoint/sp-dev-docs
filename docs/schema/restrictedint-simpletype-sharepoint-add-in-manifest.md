---
title: RestrictedInt simpleType
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.service: sharepoint
ms.localizationpriority: medium
ms.assetid: 38cd6fd4-21f0-1ca0-9e87-fba903746f2c
---

# RestrictedInt simpleType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

|   |   |
|---|---|
| **Base type**  | xs:int |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/2012/app/manifest` |
| **Schema file**  | appmanifest.xsd |

## Definition

```XML
    <xs:simpleType  name="RestrictedInt">          
      <xs:restriction base="xs:int">
        <xs:minExclusive value="0"/>
        <xs:maxInclusive value="2000"/>
      </xs:restriction>
    </xs:simpleType>
```
