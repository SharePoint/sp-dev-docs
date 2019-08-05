---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.DefaultValue
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ddb67f64-6361-7b59-6724-4680484d585d
---

# DefaultValue Element in DefaultValues 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a default value.

Some methods have complex signatures. For example, the Web service to get CRM customers might take six parameters, three of which might be structures with subparameters. To make it easier for users to call these methods, BDC allows you to specify default values for the parameters in the metadata. This way, users can invoke predefined business logic without having to undertake parameter construction.

The user can override any input parameter for which you have defined a DefaultValue. The user must specify any input parameter that has no DefaultValue, if the parameter is not optional.

For each abstract primitive in a TypeDescriptor object, you can define multiple default values, each of which corresponds to a particular MethodInstance object. At run-time, depending on which MethodInstance object the client executes, a parameter will be instantiated based on the corresponding default values.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

```
<DefaultValue MethodInstanceName = "String" Type = "String"> </DefaultValue>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**MethodInstanceName**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the MethodInstance to which this DefaultValue applies.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Required.</p>
<p>The data type of the default value.</p>
<p>The following are the acceptable values for this attribute.</p>
<ul>
<li><p>System.Int16</p></li>
<li><p>System.Int32</p></li>
<li><p>System.Int64</p></li>
<li><p>System.Single</p></li>
<li><p>System.Double</p></li>
<li><p>System.Decimal</p></li>
<li><p>System.Boolean</p></li>
<li><p>System.Byte</p></li>
<li><p>System.UInt16</p></li>
<li><p>System.UInt32</p></li>
<li><p>System.UInt64</p></li>
<li><p>System.Guid</p></li>
<li><p>System.String</p></li>
<li><p>System.DateTime</p></li>
<li><p>Any other serializable type (such as where Type.IsSerializable == true)</p></li>
</ul>
<p>Attribute type: **String**</p></td>
</tr>
</tbody>
</table>

### Child elements

None.

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
<td align="left"><p><span sdata="link"><a href="defaultvalues-element-in-typedescriptor-bdcmetadata-schema.md">DefaultValues Element in TypeDescriptor (BDCMetadata Schema)</a></span></p></td>
<td align="left"></td>
</tr>
</tbody>
</table>








