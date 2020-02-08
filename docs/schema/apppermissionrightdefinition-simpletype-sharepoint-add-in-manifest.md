---
title: AppPermissionRightDefinition simpleType
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: sharepoint
localization_priority: Normal
ms.assetid: decfd074-0f4f-ef43-adf5-b339edb57699
---

# AppPermissionRightDefinition simpleType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

A permission to be requested by the add-in.

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
    <xs:simpleType  name="AppPermissionRightDefinition">  
      <xs:restriction base="xs:string">
          <xs:minLength value="1"/>
          <xs:maxLength value="256"/>
      </xs:restriction>
    </xs:simpleType>
```







