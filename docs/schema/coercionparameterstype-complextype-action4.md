---
title: coercionParametersType complexType (Action4)
description: Describes the definition, type, attribute, and element information for coercionParametersType complexType (Action4).
manager: soliver
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 32ff0f7e-0527-50df-225c-07d990687441
---

# coercionParametersType complexType (Action4)

**Applies to**: SharePoint Server 2013

## Type information

| Element Type | Namespace | Schema File |
|:--------------:|:-----------:|-------------|
|---|---| Actions4.xsd |

## Definition

```XML
      <s:complexType name="coercionParametersType">
        <s:sequence>
          <s:element name="Parameter" minOccurs="0" maxOccurs="unbounded">
            <s:complexType>
              <s:all>
                <s:element name="ActivityBody" minOccurs="0" maxOccurs="1">
                  <s:complexType>
                    <s:sequence>
                      <s:any minOccurs="0" maxOccurs="unbounded" processContents="skip" />
                    </s:sequence>
                  </s:complexType>
                </s:element>
              </s:all>
              <s:attribute name="Name" type="s:string" use="required" />
              <s:attribute name="Type" type="s:string" use="required" />
              <s:attribute name="Value" type="s:string" />
            </s:complexType>
          </s:element>
        </s:sequence>
      </s:complexType>
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
<td align="left"><p><a href="parameter-element-coercionparameterstype-complextypeaction4.md">Parameter</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.








