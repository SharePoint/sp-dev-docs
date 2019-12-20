---
title: TypeDefinition simpleType
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: sharepoint
localization_priority: Normal
ms.assetid: f4d23160-091c-ca02-4997-0ea3dc33024f
---

# TypeDefinition simpleType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

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
      <xs:simpleType  name="TypeDefinition">          
        <xs:restriction base="xs:string">
          <xs:minLength value="1"/>
          <xs:maxLength value="255"/>
        </xs:restriction>
      </xs:simpleType>
```
