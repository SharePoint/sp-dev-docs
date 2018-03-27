---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 14383af3-0e57-443a-97eb-3e0a714d9639
---

# DeploymentLookupListMap Schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentLookupListMap Schema provides validation for the LookupListMap.xml file that is exported to the content migration package. The LookupListMap.xml file maintains a simple lookup list that records SharePoint Foundation list item references (that is, list item to list item references). This list provides a performance enhancement by relieving the need for SharePoint Foundation to repeatedly loop recursively over list item structures.

The following table lists elements in the DeploymentLookupListMap.xsd schema file.

<br/>

<table>
<colgroup>
<col width="40%" />
<col width="60%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="lookupitem-element-deploymentlookuplistmap.md">LookupItem Element (DeploymentLookupListMap)</a></span></p></td>
<td align="left"><p>Represents specific list item-to-list item lookup reference objects (**SPLookupItem**) exported to the content migration package.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="lookupitems-element-deploymentlookuplistmap.md">LookupItems Element (DeploymentLookupListMap)</a></span></p></td>
<td align="left"><p>Represents a container object for lookup item (**SPLookupItem**) instances. It provides a list of specific list item-to-list item lookup references.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="lookuplist-element-deploymentlookuplistmap.md">LookupList Element (DeploymentLookupListMap)</a></span></p></td>
<td align="left"><p>Represents a lookup list object instance (**SPLookupList**) for export to a content migration package.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="lookuplists-element-deploymentlookuplistmap.md">LookupLists Element (DeploymentLookupListMap)</a></span></p></td>
<td align="left"><p>Represents a container object for deployment lookup list objects (**SPLookupLists**) exported to the content migration package.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentlookuplistmap.md">Guid Simple Type (DeploymentLookupListMap)</a></span></p></td>
<td align="left"><p>Unique identifier for the lookup list map.</p></td>
</tr>
</tbody>
</table>

<br/>

## See also

- [Content migration schemas](content-migration-schemas.md)








