---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: cd715e38-6ec3-43b2-8007-6d0ed8865d91
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
<td align="left"># VersionRange Element (Feature)</td>
</tr>
<tr class="odd">
<td align="left"><span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Specifies a range of previous versions of the Feature to which the
upgrade actions should apply.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><VersionRange 
  BeginVersion = string
  EndVersion = string>
  <AddContentTypeField />
  <ApplyElementManifests> ... </ApplyElementManifests>
  <CustomUpgradeActions> ... </CustomUpgradeActions>
  <MapFile />
</VersionRange></code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="" title="Tip" alt="Tip" /><strong>Tip</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>The **BeginVersion</span> and **EndVersion</span> attributes set the range of previous versions of the Feature to which the child upgrade elements are applied. The **BeginVersion</span> value is <em>inclusive</em>, but the **EndVersion** attribute is <em>exclusive</em>.</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p>**BeginVersion**</p></td>
<td align="left"><p>Optional **string</span>. Specifies the earliest version number to which the child upgrade elements will apply, in the format <span class="math">n.n.n.n</span>, where each <span class="math">n** can be up to four digits. If this attribute is not used, the beginning of the range is effectively 0.0.0.0; that is, every previous version of the Feature will be considered within the lower bound of the range.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EndVersion**</p></td>
<td align="left"><p>Optional **string</span>. Specifies the <em>earliest</em> version number to which the upgrade will <em>not</em> apply. The format is <span class="math">n.n.n.n</span>, where each <span class="math">n** can be up to four digits. If this attribute is not used, every previous version of the Feature will be considered within the upper bound of the range.</p></td>
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
<td align="left"><p><span sdata="link"><a href="addcontenttypefield-element-feature.md">AddContentTypeField Element (Feature)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="applyelementmanifests-element-feature.md">ApplyElementManifests Element (Feature)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="customupgradeaction-element-feature.md">CustomUpgradeAction Element (Feature)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="mapfile-element-feature.md">MapFile Element (Feature)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="upgradeactions-element-feature.md">UpgradeActions Element (Feature)</a></span></p></td>
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








