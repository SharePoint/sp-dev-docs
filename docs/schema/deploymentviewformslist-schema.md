---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 03e692c1-b27c-465b-8714-d169cf1fc10c
---

# DeploymentViewFormsList Schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentViewFormsList Schema provides validation for the ViewFormsList.xml file exported into the content migration package. The ViewFormsList.xml file maintains a list of Web Parts and tracks whether each is a view or form.

## DeploymentViewFormsList schema elements

The following table lists elements in the schema file DeploymentViewFormsList.xsd file.

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
<td align="left"><p><span sdata="link"><a href="viewform-element-deploymentviewformslist.md">ViewForm Element (DeploymentViewFormsList)</a></span></p></td>
<td align="left"><p>Represents the specific Web Part object instances (**SPViewForm**) that are exported to the content migration package and lists whether each is a view or a form.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewformslist-element-deploymentviewformslist.md">ViewFormsList Element (DeploymentViewFormsList)</a></span></p></td>
<td align="left"><p>Represents a collection object (**SPViewFormsList**) that lists view form (**SPViewForm**) instances exported to the content migration package.</p></td>
</tr>
</tbody>
</table>

<br/>

## See also

- [Content migration schemas](content-migration-schemas.md)








