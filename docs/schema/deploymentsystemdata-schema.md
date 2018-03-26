---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- schemas [sharepoint 2010], deploymentsystemdata,content migration [SharePoint 2010],content migration schema
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5b098a6e-37ea-4155-b234-1649edd2495a
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
<td align="left"># DeploymentSystemData Schema</td>
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

The DeploymentSystemData Schema provides validation for the
SystemData.xml file exported into the content migration package. The
SystemData file collects a variety of low-level system data. It records
the number and names of Manifest.xml files (in cases where the migration
uses multiple manifests), and it also supports schema versioning.
Additionally, it holds a list of system files that are required by
SharePoint Foundation.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following table lists elements in the schema file
DeploymentSystemData.xsd file.

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
<td align="left"><p><span sdata="link"><a href="manifestfile-element-deploymentsystemdata.htm">ManifestFile Element (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Represents system data files exported to the content migration package and listed on the deployment manifest.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="manifestfiles-element-deploymentsystemdata.htm">ManifestFiles Element (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Represents a collection of system data files exported to the content migration package.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="schemaversion-element-deploymentsystemdata.htm">SchemaVersion Element (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Represents an object (**SPSchemaVersion**) that lists versioning data for the content migration manifest schema.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="systemobject-element-deploymentsystemdata.htm">SystemObject Element (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Represents a SharePoint Foundation system object instance (**SPSystemObject**) exported to the content migration package.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="systemobjects-element-deploymentsystemdata.htm">SystemObjects Element (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Represents a collection of SharePoint Foundation system object (**SPSystemObject**) instances.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="systemdata-element-deploymentsystemdata.htm">SystemData Element (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Represents a system data wrapper object (**SPSystemData**) that contains the deployment system data object collections. This is the schema root element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="spdeploymentobjecttype-simple-type-deploymentsystemdata.htm">SPDeploymentObjectType Simple Type (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Enumeration simple type that provides values for the **Type</span> attribute on the <span sdata="link"><a href="systemobject-element-deploymentsystemdata.htm">SystemObject Element (DeploymentSystemData)</a>**. The value specifies the system object type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentsystemdata.htm">Guid Simple Type (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Supports the use of a unique identifier (GUID) as a **Guid</span> attribute field value in the <span sdata="link"><a href="systemobject-element-deploymentsystemdata.htm">SystemObject Element (DeploymentSystemData)</a>** of the DeploymentLRootObjectMap Schema.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

<span sdata="link">[Content migration
schemas](content-migration-schemas.htm)</span>








