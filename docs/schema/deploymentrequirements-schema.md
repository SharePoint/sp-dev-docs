---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- content migration [sharepoint 2010],schemas [SharePoint 2010], DeploymentRequirements,content migration schema
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f07210c3-2c1a-4c4d-b9b8-d9d30c57d8c8
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
<td align="left"># DeploymentRequirements Schema</td>
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

The DeploymentRequirements Schema provides validation for the
Requirements.xml file exported to the content migration package. The
Requirements.xml file maintains a list of deployment requirements in the
form of installation requirements on the migration target, such as
Feature definitions, template versions, Web Part assemblies, language
packs, and so forth.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following table lists elements in the DeploymentRequirements.xsd
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
<td align="left"><p><span sdata="link"><a href="requirement-element-deploymentrequirements.htm">Requirement Element (DeploymentRequirements)</a></span></p></td>
<td align="left"><p>Represents specific deployment export requirement objects (**SPRequirement**).</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="requirements-element-deploymentrequirements.htm">Requirements Element (DeploymentRequirements)</a></span></p></td>
<td align="left"><p>Represents a container of deployment export requirement objects.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="sprequirementobjecttype-simple-type-deploymentrequirements.htm">SPRequirementObjectType Simple Type (DeploymentRequirements)</a></span></p></td>
<td align="left"><p>Enumeration simple type that provides values for the **Type</span> attribute on the <span sdata="link"><a href="requirement-element-deploymentrequirements.htm">Requirement Element (DeploymentRequirements)</a>**. The value specifies the object type of the deployment requirement specified with the content migration package.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

<span sdata="link">[Content migration
schemas](content-migration-schemas.htm)</span>








