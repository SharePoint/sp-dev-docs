---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- schemas [sharepoint 2010], deploymentexportsettings,content migration [SharePoint 2010],content migration schema
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f5deff87-c593-41b9-840e-43da5649a7dc
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
<td align="left"># DeploymentExportSettings Schema</td>
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

The DeploymentExportSettings Schema provides validation for the
ExportSettings.xml file. This file contains the export settings you can
specify by using the <span sdata="cer"
target="T:Microsoft.SharePoint.Deployment.SPExportSettings"><span
class="nolink">SPExportSettings</span></span> class and other classes
that are part of the content migration object model represented in the
<span sdata="cer" target="N:Microsoft.SharePoint.Deployment"><span
class="nolink">Microsoft.SharePoint.Deployment</span></span> namespace.

In addition to cataloging export settings, the ExportSettings.xml file
also ensures that the subsequent import process (at the migration target
site) enforces the directives specified in the export settings.

The ExportSettings.xml file also maintains a catalog of all objects
exported to the migration package.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following table lists elements in the DeploymentExportSettings.xsd
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
<td align="left"><p><span sdata="link"><a href="exportsettings-element-deploymentexportsettings.htm">ExportSettings Element (DeploymentExportSettings)</a></span></p></td>
<td align="left"><p>Root element, which provides an XML wrapper for the deployment export settings container object and a means for specifying security, versioning, and how to export.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="deploymentobject-element-deploymentexportsettings.htm">DeploymentObject Element (DeploymentExportSettings)</a></span></p></td>
<td align="left"><p>Represents instances of deployment objects (<span sdata="cer" target="T:Microsoft.SharePoint.Deployment.SPExportObject"><span class="nolink">SPExportObject</span></span>) marked for export to the content migration package.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="exportobjects-element-deploymentexportsettings.htm">ExportObjects Element (DeploymentExportSettings)</a></span></p></td>
<td align="left"><p>Represents a collection of deployment export object instances for inclusion in the content migration package.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following table lists simple types that are defined in the schema
but are not exposed in documented elements. Rather, they appear as
element attribute types, most commonly as enumeration types, which
specify allowable attribute values.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="spincludesecurity-simple-type-deploymentexportsettings.htm">SPIncludeSecurity Simple Type (DeploymentExportSettings)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="spincludesecurity-simple-type-deploymentexportsettings.htm">SPIncludeSecurity Simple Type (DeploymentExportSettings)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="spexportmethodtype-simple-type-deploymentexportsettings.htm">SPExportMethodType Simple Type (DeploymentExportSettings)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentexportsettings.htm">Guid Simple Type (DeploymentExportSettings)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="spdeploymentobjecttype-simple-type-deploymentexportsettings.htm">SPDeploymentObjectType Simple Type (DeploymentExportSettings)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="spincludedescendents-simple-type-deploymentexportsettings.htm">SPIncludeDescendents Simple Type (DeploymentExportSettings)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer"
target="T:Microsoft.SharePoint.Deployment.SPExportSettings"><span
class="nolink">SPExportSettings</span></span>

<span sdata="cer"
target="T:Microsoft.SharePoint.Deployment.SPExportObject"><span
class="nolink">SPExportObject</span></span>

<span sdata="cer"
target="T:Microsoft.SharePoint.Deployment.SPExportObjectCollection"><span
class="nolink">SPExportObjectCollection</span></span>

#### Concepts

<span sdata="link">[Content migration
schemas](content-migration-schemas.htm)</span>








