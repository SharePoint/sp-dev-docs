---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- content migration [sharepoint 2010],content migration schema,schemas [SharePoint 2010], DeploymentRootObjectMap
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b754baf8-6db5-4f40-a1b3-67fb925d0319
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
<td align="left"># DeploymentRootObjectMap Schema</td>
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

The DeploymentRootObjectMap Schema provides validation for the
RootObjectMap.xml file exported into the content migration package. The
RootObjectMap.xml file maintains a list of mappings of secondary, or
dependent objects, to the root objects that are exported to the
migration package. This allows the import phase of the migration
operation to correctly place the dependent objects in mappings relative
to the locations of the root objects.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following table lists elements in the DeploymentRootObjectMap.xsd
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
<td align="left"><p><span sdata="link"><a href="rootobject-element-deploymentrootobjectmap.htm">RootObject Element (DeploymentRootObjectMap)</a></span></p></td>
<td align="left"><p>Represents an instance of a root object in a root object map exported to the content migration package.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="rootobjects-element-deploymentrootobjectmap.htm">RootObjects Element (DeploymentRootObjectMap)</a></span></p></td>
<td align="left"><p>Represents a container of listed root object (**SPRootObject**) instances.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="spdeploymentobjecttype-simple-type-deploymentrootobjectmap.htm">SPDeploymentObjectType Simple Type (DeploymentRootObjectMap)</a></span></p></td>
<td align="left"><p>Enumeration simple type that provides values for the **Type</span> attribute on the <span sdata="link"><a href="rootobject-element-deploymentrootobjectmap.htm">RootObject Element (DeploymentRootObjectMap)</a>**. The value specifies the object type of the root object specified in the root object map.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentrootobjectmap.htm">Guid Simple Type (DeploymentRootObjectMap))</a></span></p></td>
<td align="left"><p>Supports the use of a unique identifier (GUID) as a **Guid</span> attribute field value in the <span sdata="link"><a href="rootobject-element-deploymentrootobjectmap.htm">RootObject Element (DeploymentRootObjectMap)</a>** of the DeploymentLRootObjectMap Schema.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

<span sdata="link">[Content migration
schemas](content-migration-schemas.htm)</span>








