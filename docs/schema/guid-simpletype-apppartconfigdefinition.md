---
title: GUID simpleType (AppPartConfigDefinition)
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
localization_priority: Normal
ms.assetid: c535cb42-5748-92ea-b258-cca570ca6e51
---

# GUID simpleType (AppPartConfigDefinition)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

|   |   |
|---|---|
| **Base type**  | xs:string |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/2012/app/partconfiguration` |
| **Schema file**  | apppartconfig.xsd |

## Definition

```XML
    <xs:simpleType name="GUID">
        <xs:restriction base="xs:string">
            <xs:pattern value="(\{[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}\})|([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})" />
        </xs:restriction>
    </xs:simpleType>
```