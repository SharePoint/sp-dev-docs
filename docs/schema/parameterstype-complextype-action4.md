---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 35bb99bb-066d-0876-f257-4abeed4f4e04
---

# parametersType complexType (Action4)

(Base type … xxxxxxxxxx)

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
    <xs:complexType name="parametersType">
        <xs:sequence>
            <xs:element name="Parameter" minOccurs="0" maxOccurs="unbounded">
                <xs:attribute name="Name" type="s:string" use="required" />
                <xs:attribute name="Type" type="s:string" use="required" />
                <xs:attribute name="Direction" type="s:string" use="required" />
                <xs:attribute name="Description" type="s:string" />
                <xs:attribute name="DesignerType" type="s:string" />
                <xs:attribute name="ShowLookupForDropdown" type="s:boolean" />
                <xs:attribute name="DisplayName" type="s:string" />
                <xs:attribute name="InitialValue" type="s:string" />
                <xs:attribute name="InitialBinding" type="s:string" />
                <xs:attribute name="EventCategory" type="s:string" />
            </xs:element>  
        </xs:sequence>
    </xs:complexType>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="50%" />
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
<td align="left"><p><a href="parameter-element-parameterstype-complextypeaction4.md">Parameter</a></p></td>
<td align="left"><p>parameterType</p></td>
<td align="left"><p>Used to describe the input and output parameters for a method call to a custom **Action** or **Condition**. The Parameter element is of type <a href="parameterstype-complextype-action4.md">parametersType</a>.</p></td>
</tr>
</tbody>
</table>

### Attributes

None.








