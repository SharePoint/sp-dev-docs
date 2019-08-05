---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.FilterDescriptor
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8ce0a852-38f9-75d2-8258-27c57418f53c
---

# FilterDescriptor Element in FilterDescriptors 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a filter descriptor of a method.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

```XML
<FilterDescriptor Type = "String" FilterField = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </FilterDescriptor>
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
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Required.</p>
<p>The type of the filter descriptor.</p>
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
<td align="left"><p>Limit</p></td>
<td align="left"><p>Used while querying an external system and the value of which can be interpreted as a limit on the number of external items (**EntityInstances**) that are returned when the method that it belongs to is called.</p></td>
</tr>
<tr class="even">
<td align="left"><p>PageNumber</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Wildcard</p></td>
<td align="left"><p>Used while querying an external system. Its value represents a pattern of regular and wildcard characters that is matched against the value of a particular field of the set of EntityInstances. The external system returns only those EntityInstances whose field values match the specified pattern.</p></td>
</tr>
<tr class="even">
<td align="left"><p>UserContext</p></td>
<td align="left"><p>Used while querying an external system. Its value can be set automatically by any client application to the identity of the user who is calling the external system. This value can then be used by the external system to authorize and then filter the results returned.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>UserCulture</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Username</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Password</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>LastId</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>SsoTicket</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>UserProfile</p></td>
<td align="left"><p>Used while querying an external system. Its value can be obtained by examining the current user's profile. The external system can use its value to filter the results returned.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Comparison</p></td>
<td align="left"><p>Used while querying an external system. An external system can compare a **ComparisonFilter** value with the value of a particular field of a set of **EntityInstances** and only those **EntityInstances** where the field values pass the comparison test can be returned.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Timestamp</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Input</p></td>
<td align="left"><p>Used while calling an operation in an external system. An external system can use the value of an **InputFilter** as additional arguments for the operation.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Output</p></td>
<td align="left"><p>Used while calling an operation in an external system. Additional results of an operation that cannot be captured by **ReturnTypeDescriptor** can be retrieved as a value of the **InputOutputFilter**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>InputOutput</p></td>
<td align="left"><p>Used while calling an operation in an external system. An external system can use the value of an **InputOutputFilter** as additional arguments for the operation, and additional results of an operation that cannot be captured by **ReturnTypeDescriptor** can be retrieved as a value of the **InputOutputFilter**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Batching</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>BatchingTermination</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>ActivityId</p></td>
<td align="left"><p>**ActivityId** is used when calling an operation on the external system. Its value is set to a GUID that represents the current operation context. If no such value is available, this filter generates a random GUID. On SharePoint Foundation 2010, this filter uses the **CorrelationID**.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>**FilterField**</p></td>
<td align="left"><p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the filter descriptor.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name of the filter descriptor.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this filter descriptor is used frequently. If set to **true**, Business Data Connectivity (BDC) service caches this filter descriptor in memory.</p>
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
<td align="left"><p>The localized display names of this filter descriptor.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.md">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The properties of this filter descriptor.</p></td>
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
<td align="left"><p><span sdata="link"><a href="filterdescriptors-element-in-method-bdcmetadata-schema.md">FilterDescriptors Element in Method (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>A list of filter descriptors of a method.</p></td>
</tr>
</tbody>
</table>








