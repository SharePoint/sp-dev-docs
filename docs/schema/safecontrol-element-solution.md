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
ms.assetid: 26d20282-3df9-4f57-a9c9-d32dcfe91ce0
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
<td align="left"># SafeControl Element (Solution)</td>
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

Adds or removes a control assembly from the safe controls list for a
solution.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;SafeControl
  Assembly = &quot;Text&quot;
  Namespace = &quot;Text&quot;
  Safe = &quot;TRUE&quot; | &quot;FALSE&quot;
  SafeAgainstScript = &quot;TRUE&quot; | &quot;FALSE&quot;
  TypeName = &quot;Text&quot;&gt;
&lt;/SafeControl&gt;</code></pre></td>
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
<td align="left"><p>**Assembly**</p></td>
<td align="left"><p>Optional **Text**. The name of the control assembly.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Namespace**</p></td>
<td align="left"><p>Optional **Text**. The namespace associated with the assembly.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Safe**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to add the control to the safe controls list; <span class="keyword">FALSE** to remove it.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SafeAgainstScript**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to allow property editing by a Contributor; <span class="keyword">FALSE** to disable property editing for Contributors.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TypeName**</p></td>
<td align="left"><p>Optional **Text**. The control type.</p></td>
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
<td align="left"><p><a href="safecontrols-element-solution.md">SafeControls</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For an example of how this element is used, see <span
sdata="link">[Solution
schema](solution-schema.md)</span>.








