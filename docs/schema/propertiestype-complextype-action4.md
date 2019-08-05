---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b70e4eac-5848-8936-cd1d-8b532402635f
---

# propertiesType complexType (Action4)

**Applies to**: SharePoint Server 2013

Base type for defining a [Property element (propertiesType complexType) (Action4)](property-element-propertiestype-complextypeaction4.md).

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
    <xs:complexType name="propertiesType">
        <xs:sequence>
            <xs:element name="Property" minOccurs="0" maxOccurs="unbounded">
                <xs:attribute name="Name" type="s:string" use="required" />
                <xs:attribute name="DesignerType" type="s:string" />
                <xs:attribute name="DisplayName" type="s:string" />
                <xs:attribute name="Description" type="s:string" />
                <xs:attribute name="TypeFrom" type="s:string" />
            </xs:element>  
        </xs:sequence>
        <xs:attribute name="Name" type="s:string" use="required" />
        <xs:attribute name="DisplayName" type="s:string" use="required" />
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
<td align="left"><p><a href="property-element-propertiestype-complextypeaction4.md">Property</a></p></td>
<td align="left"><p>propertiesType</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

<table>
<colgroup>
<col width="15%" />
<col width="15%" />
<col width="15%" />
<col width="30%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Required</p></th>
<th align="left"><p>Description</p></th>
<th align="left"><p>Possible values</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Name of the property as displayed in the user interface.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Internal name of the property for referencing in code.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








