---
title: FeatureVersion simpleType
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: f48e399b-a510-ec1e-b538-094c76323236
---

# FeatureVersion simpleType 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

|   |   |
|---|---|
| **Base Type**  | xs:string |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/` |
| **Schema file**  | apphostwebfeatures.xsd |

## Definition

```XML
    <xs:simpleType name="FeatureVersion">
        <xs:restriction base="xs:string">
            <xs:pattern value="\d+\.\d+\.\d+\.\d+" />
        </xs:restriction>
    </xs:simpleType>
```

<br/>

<br/>






