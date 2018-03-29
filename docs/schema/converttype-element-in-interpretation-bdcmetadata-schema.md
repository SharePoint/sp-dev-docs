---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.ConvertType
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c474cf2c-b631-f3c9-daf1-f05d3e0d385f
---

# ConvertType Element in Interpretation 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the rule to convert the data type of a data value into another data type.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

The Convert element specifies the rule to convert the data type of a data value into another data type. When the rules are applied in order, this rule specifies the data type of the data value to be converted to the data type specified by the BDCType attribute. When the rules are applied in reverse order, this rule specifies the data type of the data value to be converted to the data type specified by the **LOBType** attribute. For example, this rule can specify converting a date value obtained from an external system, into a culture and locale sensitive string which will eventually be displayed to the user, and converting the updated value for that string back into the date that is compatible with the external system.

> [!WARNING] 
> **ConvertType** does not support non-Gregorian calendars for conversions between **System.String** and **System.DateTime**.

```XML
<ConvertType LOBType = "String" BDCType = "String"> </ConvertType>
```

<br/>

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>LOBType</p></td>
<td align="left"><p>Required.</p>
<p>The data type to convert the data value into when the rules are applied in reverse order.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>BDCType</p></td>
<td align="left"><p>Required.</p>
<p>The data type to convert the data value into when the rules are applied in order.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>LOBLocale</p></td>
<td align="left"><p>Optional.</p>
<p>The locale of the data that is received from the external system.</p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

None.


<br/>

### Parent elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="interpretation-element-in-typedescriptor-bdcmetadata-schema.md">Interpretation Element in TypeDescriptor (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The rules to apply to the data stored in the data structures that are represented by a **TypeDescriptor**.</p></td>
</tr>
</tbody>
</table>








