---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Solution Schema
api_type:
- schema
ms.assetid: 96aade0e-7840-4f9c-a4f8-4d7169d5128a
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]
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
<td align="left"># Solution Element (Solution)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Top-level element for a solution manifest file.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Solution 
  Description = string 
  DeploymentServerType = &quot;ApplicationServer&quot; | &quot;WebFrontEnd&quot;
  ResetWebServer = &quot;TRUE&quot; | &quot;FALSE&quot; 
  ResetWebServerModeOnUpgrade = &quot;Recycle&quot; | &quot;StartStop&quot; 
  SharePointProductVersion = string
  SolutionId = string 
  Title = string&gt;
&lt;/Solution&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **string**. Specifies a description for the solution.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DeploymentServerType**</p></td>
<td align="left"><p>Optional **string**. Determines whether the solution is deployed to a front-end Web server or to an application server. Possible values include:</p>
<ul>
<li><p>**ApplicationServer **</p></li>
<li><p>**WebFrontEnd**</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**ResetWebServer**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to specify that the Web server will be reset.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ResetWebServerModeOnUpgrade**</p></td>
<td align="left"><p>Optional **string**. Specifies the type of reset the Web server will perform on solution upgrade. The values are as follows:</p>
<div class="tableSection">
<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Value</p></td>
<td align="left"><p>Action</p></td>
</tr>
<tr class="even">
<td align="left"><p>Recycle</p></td>
<td align="left"><p>Recycles the application pool.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>StartStop</p></td>
<td align="left"><p>Stops and starts the server.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="odd">
<td align="left"><p>**SharePointProductVersion**</p></td>
<td align="left"><p>Optional **string**. Specifies the version of Microsoft SharePoint Foundation.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SolutionId**</p></td>
<td align="left"><p>Optional **string**. Contains the GUID for the solution.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Optional **string**. Specifies the title of the solution.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="activationdependencies-element-solution.md">ActivationDependencies Element (Solution)</a></span>, <a href="applicationresourcefiles-element-solution.md">ApplicationResourceFiles</a>, <a href="assemblies-element-solutionassemblies.md">Assemblies</a>, <a href="codeaccesssecurity-element-solution.md">CodeAccessSecurity</a>, <a href="dwpfiles-element-solution.md">DwpFiles</a>, <a href="featuremanifests-element-solution.md">FeatureManifests</a>, <a href="resources-element-solution.md">Resources</a>, <a href="sitedefinitionmanifests-element-solution.md">SiteDefinitionManifests</a>, <a href="rootfiles-element-solution.md">RootFiles</a>, <a href="templatefiles-element-solution.md">TemplateFiles</a></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For an example of how this element is used, see <span
sdata="link">[Solution
schema](solution-schema.md)</span>.








