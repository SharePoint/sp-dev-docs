---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.Identifier
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c4abf09b-10b6-0007-9214-35d5fe675be7
---

# Identifier Element in Identifiers 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies an identifier of an external content type.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

> [!NOTE] 
> The Business Data Connectivity (BDC) service enables the mapping of identifiers to fields with nullable data types. However, for primary identifiers, BDC causes an error when the value of these identifiers are **null**.

```XML
<Identifier TypeName = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Identifier>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**TypeName**</p></td>
<td align="left"><p>Required.</p>
<p>The data type of the value that corresponds to the identifier.</p>
<p>The following table lists the possible values for this attribute.</p>
<div class="tableSection">
<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>System.Boolean</p></td>
<td align="left"><p>A bit.</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Byte</p></td>
<td align="left"><p>A number ranging from 0 to 255 inclusive.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.Char</p></td>
<td align="left"><p>A Unicode character.</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.DateTime</p></td>
<td align="left"><p>A date and time ranging from 12:00:00 midnight, January 1, 1 Anno Domini (Common Era) to 11:59:59 P.M. December 31, 9999 Anno Domini (Common Era) inclusive, in resolution of 100 nanoseconds.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.Decimal</p></td>
<td align="left"><p>A number ranging from negative 79,228,162,514,264,337,593,543,950,335 to positive 79,228,162,514,264,337,593,543,950,335 inclusive.</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Double</p></td>
<td align="left"><p>A double precision number ranging from negative 1.79769313486232e308 to positive 1.79769313486232e308 inclusive, and positive zero, negative zero, positive infinity, negative infinity, and not-a-number (NaN).</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.Guid</p></td>
<td align="left"><p>A GUID.</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Int16</p></td>
<td align="left"><p>A number ranging from negative 32768 to positive 32767 inclusive.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.Int32</p></td>
<td align="left"><p>A number ranging from 0 to 4,294,967,295 inclusive.</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Int64</p></td>
<td align="left"><p>A number ranging from 0 to 18,446,744,073,709,551,615 inclusive.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.SByte</p></td>
<td align="left"><p>A number ranging from negative 128 to positive 127 inclusive.</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Single</p></td>
<td align="left"><p>A single precision number ranging from negative 3.402823e38 to positive 3.402823e38 inclusive.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.String</p></td>
<td align="left"><p>A string of Unicode text.</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.TimeSpan</p></td>
<td align="left"><p>A duration ranging from negative 10675199 days 2 hours 48 minutes 5 seconds 477 milliseconds 580 microseconds 800 nanoseconds to positive 10675199 days 2 hours 48 minutes 5 seconds 477 milliseconds 580 microseconds 800 nanoseconds inclusive, in resolution of 100 nanoseconds.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.UInt16</p></td>
<td align="left"><p>A number ranging from 0 to 65535 inclusive.</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.UInt32</p></td>
<td align="left"><p>A number ranging from 0 to 4,294,967,295 inclusive.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.UInt64</p></td>
<td align="left"><p>A number ranging from 0 to 18,446,744,709,551,615 inclusive.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the identifier.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name of the identifier.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this identifier is used frequently. If set to **true**, Business Data Connectivity (BDC) service caches the identifier in memory.</p>
<p>Default value: **true**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p><span sdata="link"><a href="localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md">LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The localized display names of the identifier.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.md">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The properties of the identifier.</p></td>
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
<td align="left"><p><span sdata="link"><a href="identifiers-element-in-entity-bdcmetadata-schema.md">Identifiers Element in Entity (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>A list of identifiers of an external content type.</p></td>
</tr>
</tbody>
</table>








