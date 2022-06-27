---
title: AutoDeployedWebApplicationDebugInfoAppUrlDefinition simpleType
description: AutoDeployedWebApplicationDebugInfoAppUrlDefinition simpleType is the type for add-in URLs of an auto-deployed web application.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 98162f2e-f926-69a0-df95-6597c8ad0b6a
---

# AutoDeployedWebApplicationDebugInfoAppUrlDefinition simpleType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

The type for add-in URLs of an auto-deployed web application. If the add-in has multiple URLs, its value is a list of URLs separated by a semicolon or comma.

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
    <xs:simpleType  name="AutoDeployedWebApplicationDebugInfoAppUrlDefinition">
      <xs:restriction base="xs:string">
        <xs:minLength value="1"/>
        <xs:maxLength value="2048"/>
      </xs:restriction>
    </xs:simpleType>
```

<br/>








