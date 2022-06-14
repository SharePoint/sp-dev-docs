---
title: VersionDefinition simpleType
manager: soliver
ms.date: 06/14/2022
description: Describes VersionDefinition simpleType and provides information on elements and attributes.
ms.audience: Developer
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 711c0dd3-1a2b-2dfb-e822-ca3edf1657d4
---

# VersionDefinition simpleType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Identifies a version for a feature, capability, add-in, product, or other software component.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

|   |   |
|---|---|
| **Base type**  | xs:string |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/2012/app/manifest` |
| **Schema file**  | appmanifest.xsd |

## Definition

```XML
    <xs:simpleType  name="VersionDefinition">
        <xs:restriction base="xs:string">
           <xs:pattern value="\d{1,4}\.\d{1,4}\.\d{1,4}\.\d{1,4}"/>
        </xs:restriction>
    </xs:simpleType>
```