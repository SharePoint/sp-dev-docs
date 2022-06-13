---
title: FeatureActivationDependencyDefinitions complexType
manager: soliver
ms.date: 06/13/2022
description: Describes FeatureActivationDependencyDefinitions complexType and includes information on elements and attributes.
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 5be98ace-5f25-ab96-ed1e-2b9a6b7b302b
---

# FeatureActivationDependencyDefinitions complexType 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

| Namespace | Schema File | Extension Base |
|---|---|---|
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/` |
| **Schema file**  | apphostwebfeatures.xsd |
| **Extension base**  | None |

## Definition

```XML
    <xs:complexType name="FeatureActivationDependencyDefinitions">
        <xs:sequence>
            <xs:element name="ActivationDependency" type="FeatureActivationDependencyDefinition" minOccurs="0" maxOccurs="unbounded"></xs:element>
        </xs:sequence>
    </xs:complexType>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="activationdependency-element-featureactivationdependencydefinitions-complextypea.md">ActivationDependency</a></p></td>
<td align="left"><p><a href="featureactivationdependencydefinition-complextype-apphostwebfeatures.md">FeatureActivationDependencyDefinition</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.

<br/>

<br/>







