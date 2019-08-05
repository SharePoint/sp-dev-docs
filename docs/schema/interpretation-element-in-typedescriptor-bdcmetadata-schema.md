---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.Interpretation
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 730f9590-ab40-85b8-eb97-8fd9d8e33c8a
---

# Interpretation Element in TypeDescriptor 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the rules to apply to the data stored in the data structures represented by a **TypeDescriptor**. These rules are typically specified to change the data values returned by an external system to make it easier to represent them in the user interface. When the data value is obtained from the external system, the specified rules must be applied in the order they are specified in the **Interpretation** element. 

The first rule must be applied to the data value received from the external system; the consecutive rules apply to the data value that result from the application of the previous rule. When the data value is sent to external system, the specified rules must be applied in the reverse order they are specified in the **Interpretation** element. The first rule must be applied to the data value received from the user; the consecutive rules apply to the data value that result from the application of the previous rule.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

```XML
<Interpretation></Interpretation>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None.

### Child elements

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
<td align="left"><p><span sdata="link"><a href="converttype-element-in-interpretation-bdcmetadata-schema.md">ConvertType Element in Interpretation (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>A **ConvertType** element that specifies the conversion of a data type to another data type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="normalizedatetime-element-in-interpretation-bdcmetadata-schema.md">NormalizeDateTime Element in Interpretation (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>A **NormalizeDateTime** element that specifies the conversion of the date and time representation of a value obtained from an external system into another representation.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>NormalizeString</p></td>
<td align="left"><p>A **NormalizeString** element that specifies the conversion of the string representation of a value obtained from an external system into another representation.</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p><a href="http://msdn.microsoft.com/library/30e38d7f-af18-20ec-45ab-0bece071ce67.aspx">TypeDescriptor</a></p></td>
<td align="left"><p>The **TypeDescriptor** element.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="typedescriptor-element-bdcmetadata-schema.md">TypeDescriptor Element (BDCMetadata Schema)</a></span></p></td>
<td align="left"></td>
</tr>
</tbody>
</table>








