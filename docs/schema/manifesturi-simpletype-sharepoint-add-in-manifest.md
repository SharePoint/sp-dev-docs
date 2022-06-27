---
title: ManifestUri simpleType
description: Describes the definition and type information for ManifestUri simpleType.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: a6861f44-9d24-40f6-efc5-89033c101b4d
---

# ManifestUri simpleType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

| Information  |  Location |
|---|---|
| **Base type**  | xs:anyURI |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/2012/app/manifest` |
| **Schema file**  | appmanifest.xsd |

## Definition

```XML
    <xs:simpleType  name="ManifestUri">          
      <xs:restriction base="xs:anyURI">
        <xs:minLength value="1"/>
        <xs:maxLength value="2083"/>
      </xs:restriction>
    </xs:simpleType>
```







