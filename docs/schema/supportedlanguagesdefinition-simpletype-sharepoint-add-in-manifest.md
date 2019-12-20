---
title: SupportedLanguagesDefinition simpleType
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: sharepoint
localization_priority: Normal
ms.assetid: 2dc9b295-4355-d6e9-c734-4d636bef3a74
---

# SupportedLanguagesDefinition simpleType 

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
    <xs:simpleType  name="SupportedLanguagesDefinition">          
      <xs:restriction base="xs:string">
          <xs:minLength value="1"/>
          <xs:maxLength value="128"/>
      </xs:restriction>
    </xs:simpleType>
```







