---
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f0351444-6719-ef7b-ae5b-ca2478624444
---

# ElementDefinitionCollection complexType 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.microsoft.com/sharepoint/</p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>apphostwebfeatures.xsd</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Extension base</span></p></td>
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:complexType name="ElementDefinitionCollection">
        <xs:sequence minOccurs="0" maxOccurs="unbounded">
            <xs:element name="CustomAction" type="CustomActionDefinition"></xs:element>
            <xs:element name="ClientWebPart" type="ClientWebPartDefinition"></xs:element>
        </xs:sequence>
        <xs:attribute name="Id" type="UniqueIdentifier" />
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
<td align="left"><p><a href="clientwebpart-element-elementdefinitioncollection-complextypeapphostwebfeatures.md">ClientWebPart</a></p></td>
<td align="left"><p><a href="clientwebpartdefinition-complextype-apphostwebfeatures.md">ClientWebPartDefinition</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="customaction-element-elementdefinitioncollection-complextypeapphostwebfeatures.md">CustomAction</a></p></td>
<td align="left"><p><a href="customactiondefinition-complextype-apphostwebfeatures.md">CustomActionDefinition</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="10%" />
<col width="30%" />
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
<td align="left"><p>Id</p></td>
<td align="left"><p>UniqueIdentifier</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the UniqueIdentifier type.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>







