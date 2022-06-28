---
title: DescriptionDefinition simpleType
description: Describes the DescriptionDefinition simpleType and provides the type information and a definition.
manager: soliver
ms.date: 06/14/2022
ms.audience: Developer
ms.topic: article
ms.localizationpriority: medium
ms.assetid: 8c0bc6d9-6bb1-a493-4cb2-a2923f91636f
---

# DescriptionDefinition simpleType

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

> [!NOTE]
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

| Information | Location |
|---|---|
| **Base type**  | xs:string |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/2012/app/manifest` |
| **Schema file**  | appmanifest.xsd |

## Definition

```XML
    <xs:simpleType  name="DescriptionDefinition">
      <xs:restriction base="xs:string">
        <xs:minLength value="1"/>
        <xs:maxLength value="1024"/>
      </xs:restriction>
    </xs:simpleType>
```
