---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 52eb5087-e0ca-45f8-8137-e6350cfb0481
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]( "Copy code hover")
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
<td align="left"># Requirement Element (DeploymentRequirements)</td>
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

Represents specific deployment export requirement (<span
class="keyword">SPRequirement</span>) objects provided to the content
migration package.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element 
    name=&quot;Requirement&quot; 
    type=&quot;SPRequirement&quot; 
    minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; 
/&gt;

USAGE
&lt;Requirements&gt;
    &lt;Requirement
        Type=&quot;SPRequirementObjectType&quot;
        Id=&quot;xs:string&quot;
        Name=&quot;xs:string&quot;
        Data=&quot;xs:string&quot;
    /&gt;
&lt;/Requirements&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**SPRequirement**


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Type</p></td>
<td align="left"><p><span sdata="link"><a href="sprequirementobjecttype-simple-type-deploymentrequirements.md">SPRequirementObjectType Simple Type (DeploymentRequirements)</a></span></p></td>
<td align="left"><p>Specifies the requirement object type as defined in the **SPRequirementObjectType</span> simple type: <span class="keyword">FeatureDefinition</span>, <span class="keyword">WebTemplate</span>, <span class="keyword">WebPart</span>, or <span class="keyword">Language**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Id</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>ID of the requirement instance.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Name</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Name of the requirement instance.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Data</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Information about the requirement.</p></td>
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
<td align="left"><p>None</p></td>
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
<td align="left"><p><span sdata="link"><a href="requirements-element-deploymentrequirements.md">Requirements Element (DeploymentRequirements)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[DeploymentRequirements
Schema](deploymentrequirements-schema.md)</span>








