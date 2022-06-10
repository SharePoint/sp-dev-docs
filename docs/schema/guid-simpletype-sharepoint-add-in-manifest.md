---
title: GUID simpleType (SharePoint Add-in Manifest)
description: Learn more about GUID simpleType (SharePoint Add-in Manifest).
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 8bdba352-fd8f-6aac-7aaa-25e7031f514e
---

# GUID simpleType (SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

A Guid in the form of XXXXXXXX-XXXX-XXXX-XXXXXXXXXXXX. It may be surrounded by `{}`s.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

| Information  | Location  |
|---|---|
| **Base type**  | xs:string |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/2012/app/manifest` |
| **Schema file**  | appmanifest.xsd |

## Definition

```XML
    <xs:simpleType  name="GUID">  
      <xs:restriction base="xs:string">
        <xs:pattern value="(\{[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}\})|([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})"/>
      </xs:restriction>
    </xs:simpleType>
```

<br/>

<br/>






