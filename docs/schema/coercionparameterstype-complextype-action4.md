---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 32ff0f7e-0527-50df-225c-07d990687441
---

# coercionParametersType complexType (Action4)

**Applies to**: SharePoint Server 2013

## Type information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>Actions4.xsd</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Extension base</span></p></td>
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>

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








