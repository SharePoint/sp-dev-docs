---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d0a43250-3ad2-4f55-8ac5-7d82e32eb9cb
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
<td align="left"># ActivationDependency Element (Feature)</td>
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

Represents a Feature on which activation of the current Feature depends.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;ActivationDependency 
  FeatureDescription = string 
  FeatureId = Guid 
  FeatureTitle = string 
  MinimumVersion = string 
  SolutionId = Guid 
  SolutionName = string 
  SolutionTitle = string 
  SolutionUrl = string&gt;
&lt;/ActivationDependency&gt;</code></pre></td>
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
<td align="left"><p>**FeatureDescription**</p></td>
<td align="left"><p>Optional **string**. The description of the Feature dependency.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FeatureId**</p></td>
<td align="left"><p>Required **Guid**. The ID of the Feature dependency.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FeatureTitle**</p></td>
<td align="left"><p>Optional **string**. The title of the Feature dependency.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MinimumVersion**</p></td>
<td align="left"><p>Optional **string</span>. The minimum version of the Feature dependency. This attribute must use the pattern <span class="placeholder">n</span>.<span class="placeholder">n</span>.<span class="placeholder">n</span>.<span class="placeholder">n</span>, where each occurrence of <span class="placeholder">n** is a numeric value.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SolutionId**</p></td>
<td align="left"><p>Optional **Guid**. The ID of the solution dependency.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SolutionName**</p></td>
<td align="left"><p>Optional **string**. The name of the solution dependency.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SolutionTitle**</p></td>
<td align="left"><p>Optional **string**. The title of the solution dependency.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SolutionUrl**</p></td>
<td align="left"><p>Optional **string**. The URL of the solution dependency.</p></td>
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
<td align="left"><p><a href="activationdependencies-element-feature.md">ActivationDependencies</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 0</p>
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Microsoft SharePoint Foundation does not support a cross-scope
activation dependency if the current Feature depends upon another
Feature at a more restrictive scope, or if the current Feature depends
on a hidden Feature.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For an example of how this element is used, see <span
sdata="link">[Feature.xml
Files](feature-xml-files.md)</span>.








