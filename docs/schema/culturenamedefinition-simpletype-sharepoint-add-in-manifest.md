---
title: CultureNameDefinition simpleType
description: Outlines information, a definition, and elements and attributes for the CultureNameDefinition simpleType in Sharepoint.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: c377416b-e3c5-f74f-e5d4-dcb98466126d
---

# CultureNameDefinition simpleType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Identifies a locale in [Internet Engineering Task Force (IETF)](http://tools.ietf.org/html/rfc1766)-compliant format; for example, en-us.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information
**Base type**: xs:string

**Namespace**: `http://schemas.microsoft.com/sharepoint/2012/app/manifest`

**Schema file**: appmanifest.xsd

## Definition

```XML 
    <xs:simpleType name="CultureNameDefinition">
        <xs:restriction base="xs:string">
            <xs:minLength value="1" />
            <xs:maxLength value="256" />
        </xs:restriction>
    </xs:simpleType>
```
