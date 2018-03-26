---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- schemas [sharepoint 2010], deploymentlookuplistmap,content migration [SharePoint 2010],content migration schema
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 14383af3-0e57-443a-97eb-3e0a714d9639
---

![Collapse
section](../icons/collapse_all.gif "Collapse section")![Expand
section](../icons/expand_all.gif "Expand section")![](../icons/collapse_all.gif)![](../icons/expand_all.gif)![](../icons/dropdown.gif)![](../icons/dropdownHover.gif)![Copy
code](../icons/copycode.gif "Copy code")![Copy code
hover](../icons/copycodeHighlight.gif "Copy code hover")
<table>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

Visual Basic  
C\#  
C++  
JavaScript  

<table>
<tbody>
<tr class="odd">
<td align="left"><span id="runningHeaderText"></span></td>
</tr>
<tr class="even">
<td align="left"># DeploymentLookupListMap Schema</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

**Last modified:** March 09, 2015

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

The DeploymentLookupListMap Schema provides validation for the
LookupListMap.xml file that is exported to the content migration
package. The LookupListMap.xml file maintains a simple lookup list that
records SharePoint Foundation list item references (that is, list item
to list item references). This list provides a performance enhancement
by relieving the need for SharePoint Foundation to repeatedly loop
recursively over list item structures.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following table lists elements in the DeploymentLookupListMap.xsd
schema file.

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
<td align="left"><p><span sdata="link"><a href="lookupitem-element-deploymentlookuplistmap.htm">LookupItem Element (DeploymentLookupListMap)</a></span></p></td>
<td align="left"><p>Represents specific list item-to-list item lookup reference objects (**SPLookupItem**) exported to the content migration package.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="lookupitems-element-deploymentlookuplistmap.htm">LookupItems Element (DeploymentLookupListMap)</a></span></p></td>
<td align="left"><p>Represents a container object for lookup item (**SPLookupItem**) instances. It provides a list of specific list item-to-list item lookup references.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="lookuplist-element-deploymentlookuplistmap.htm">LookupList Element (DeploymentLookupListMap)</a></span></p></td>
<td align="left"><p>Represents a lookup list object instance (**SPLookupList**) for export to a content migration package.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="lookuplists-element-deploymentlookuplistmap.htm">LookupLists Element (DeploymentLookupListMap)</a></span></p></td>
<td align="left"><p>Represents a container object for deployment lookup list objects (**SPLookupLists**) exported to the content migration package.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentlookuplistmap.htm">Guid Simple Type (DeploymentLookupListMap)</a></span></p></td>
<td align="left"><p>Unique identifier for the lookup list map.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

<span sdata="link">[Content migration
schemas](content-migration-schemas.htm)</span>








