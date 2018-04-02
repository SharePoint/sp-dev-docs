---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 2de9afb8-7c23-7f22-a48b-07a4f31154cc
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
<td align="left"># Query Element in Queries (Subscription Schema)</td>
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

Specifies a **Finder** or <span
class="keyword">IDEnumerator</span> method instance to execute to
populate the cache.

**Namespace**:
http://schemas.microsoft.com/office/2006/03/BusinessDataCatalog

**Schema**: Subscription

<span codelanguage="xmlLang"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">XML</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><pre><code><Query RefreshIntervalInMinutes = "Long" MethodInstanceName = "String" Enabled = "Boolean" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Query></code></pre></td>
</tr>
</tbody>
</table>


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following sections describe attributes, child elements, and parent
elements.

#### Attributes

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
<td align="left"><p>**RefreshIntervalInMinutes**</p></td>
<td align="left"><p>Required.</p>
<p>The time interval in minutes at which to refresh the cache. This value cannot be less than 10 minutes. If set to less than 10 minutes, Microsoft Business Connectivity Services (BCS) ignores this value and uses the default refresh interval of 60 minutes.</p>
<p>Attribute type: **Long**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MethodInstanceName**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the **Finder</span> or **IDEnumerator** method instance defined in the model.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Enabled**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this query is enabled. If not enabled, this query is not run.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of this query.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name of this query.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>This attribute is not used by Business Connectivity Services in this release.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

#### Child elements

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
<td align="left"><p><span sdata="link"><a href="localizeddisplaynames-element-in-metadataobject-subscription-schema.md">LocalizedDisplayNames Element in MetadataObject (Subscription Schema)</a></span></p></td>
<td align="left"><p>A list of localized display names for this query.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-subscription-schema.md">Properties Element in MetadataObject (Subscription Schema)</a></span></p></td>
<td align="left"><p>This is not used by Business Connectivity Services in this release.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="filtervalues-element-in-query-subscription-schema.md">FilterValues Element in Query (Subscription Schema)</a></span></p></td>
<td align="left"><p>A list of filter values for the **Finder</span> or the **IDEnumerator** method instance.</p></td>
</tr>
</tbody>
</table>

#### Parent elements

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
<td align="left"><p><span sdata="link"><a href="queries-element-in-subscription-subscription-schema.md">Queries Element in Subscription (Subscription Schema)</a></span></p></td>
<td align="left"><p>The list of queries that contains this query.</p></td>
</tr>
</tbody>
</table>








