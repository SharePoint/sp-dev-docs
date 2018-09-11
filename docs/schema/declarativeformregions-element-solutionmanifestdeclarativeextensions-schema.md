---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 03145de9-325c-b108-cd24-14aaa890a0c8
---

# DeclarativeFormRegions Element 

(SolutionManifestDeclarativeExtensions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Lists the form regions in which external data will be displayed in Microsoft Outlook 2010.

**Namespace**:
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions

**Schema**: SolutionManifestDeclarativeExtensions

```XML
<FormRegions xsl:type="DeclarativeFormRegions" xmlns:xsl="http://www.w3.org/2001/XMLSchema-instance"  AutoGenerate = "Boolean"> </FormRegions>
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
<td align="left"><p>**AutoGenerate**</p></td>
<td align="left"><p>Optional.</p>
<p>Determines whether you want Microsoft Business Connectivity Services (BCS) to autogenerate Outlook form regions or you want to create custom form regions and include them in the solution. If **true**, Business Connectivity Services will autogenerate the forms for you.</p>
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
<td align="left"><p><a href="http://msdn.microsoft.com/library/c5a3b837-76bb-98fc-d7b4-ffe9a44d95a0.aspx">FormRegion</a></p></td>
<td align="left"><p>The form regions in which external data will be displayed in .</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="declarativeformregion-element-in-declarativeformregions-solutionmanifestdeclarat.md">DeclarativeFormRegion Element in DeclarativeFormRegions (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

### Parent elements

None.

<br/>


<br/>








