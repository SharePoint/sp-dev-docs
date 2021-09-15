---
title: NameDefinition simpleType
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 37aba6e8-8291-d66a-b0bf-dded191ec131
---

# NameDefinition simpleType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Internal name of an SharePoint Add-in. The internal name of an SharePoint Add-in. Must be ASCII characters
only, with no spaces, up to 64 characters long.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

|   |   |
|---|---|
| **Base type**  | xs:token |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/2012/app/manifest` |
| **Schema file**  | appmanifest.xsd |

## Definition

```XML 
    <xs:simpleType  name="NameDefinition">       
        <xs:restriction base="xs:token">
           <xs:minLength value="1"/>
           <xs:maxLength value="64"/>
           <xs:pattern value="[A-Za-z0-9][A-Za-z0-9\s-_]*"/>
        </xs:restriction>
    </xs:simpleType>
```