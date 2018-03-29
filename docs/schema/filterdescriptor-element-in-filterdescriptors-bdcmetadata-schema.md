---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.FilterDescriptor
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8ce0a852-38f9-75d2-8258-27c57418f53c
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
<td align="left"># FilterDescriptor Element in FilterDescriptors (BDCMetadata Schema)</td>
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

Specifies a filter descriptor of a method.

**Namespace:**
http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema:** BDCMetadata

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
<td align="left"><pre><code>&lt;FilterDescriptor Type = &quot;String&quot; FilterField = &quot;String&quot; Name = &quot;String&quot; DefaultDisplayName = &quot;String&quot; IsCached = &quot;Boolean&quot;&gt; &lt;/FilterDescriptor&gt;</code></pre></td>
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
<td align="left"><p>Type</p></td>
<td align="left"><p>Required.</p>
<p>The type of the filter descriptor.</p>
<p>The following table lists the possible values for this attribute.</p>
<div class="tableSection">
<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Limit</p></td>
<td align="left"><p>Used while querying an external system and the value of which can be interpreted as a limit on the number of external items (**EntityInstances**) that are returned when the method that it belongs to is called.</p></td>
</tr>
<tr class="even">
<td align="left"><p>PageNumber</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Wildcard</p></td>
<td align="left"><p>Used while querying an external system. Its value represents a pattern of regular and wildcard characters that is matched against the value of a particular field of the set of EntityInstances. The external system returns only those EntityInstances whose field values match the specified pattern.</p></td>
</tr>
<tr class="even">
<td align="left"><p>UserContext</p></td>
<td align="left"><p>Used while querying an external system. Its value can be set automatically by any client application to the identity of the user who is calling the external system. This value can then be used by the external system to authorize and then filter the results returned.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>UserCulture</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Username</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Password</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>LastId</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>SsoTicket</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>UserProfile</p></td>
<td align="left"><p>Used while querying an external system. Its value can be obtained by examining the current user's profile. The external system can use its value to filter the results returned.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Comparison</p></td>
<td align="left"><p>Used while querying an external system. An external system can compare a **ComparisonFilter</span> value with the value of a particular field of a set of <span class="keyword">EntityInstances</span> and only those <span class="keyword">EntityInstances** where the field values pass the comparison test can be returned.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Timestamp</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Input</p></td>
<td align="left"><p>Used while calling an operation in an external system. An external system can use the value of an **InputFilter** as additional arguments for the operation.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Output</p></td>
<td align="left"><p>Used while calling an operation in an external system. Additional results of an operation that cannot be captured by **ReturnTypeDescriptor</span> can be retrieved as a value of the <span class="keyword">InputOutputFilter**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>InputOutput</p></td>
<td align="left"><p>Used while calling an operation in an external system. An external system can use the value of an **InputOutputFilter</span> as additional arguments for the operation, and additional results of an operation that cannot be captured by <span class="keyword">ReturnTypeDescriptor</span> can be retrieved as a value of the <span class="keyword">InputOutputFilter**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Batching</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>BatchingTermination</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>ActivityId</p></td>
<td align="left"><p>**ActivityId</span> is used when calling an operation on the external system. Its value is set to a GUID that represents the current operation context. If no such value is available, this filter generates a random GUID. On SharePoint Foundation 2010, this filter uses the <span class="keyword">CorrelationID**.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>FilterField</p></td>
<td align="left"><p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Name</p></td>
<td align="left"><p>Required.</p>
<p>The name of the filter descriptor.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>DefaultDisplayName</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name of the filter descriptor.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>IsCached</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this filter descriptor is used frequently. If set to **true**, Business Data Connectivity (BDC) service caches this filter descriptor in memory.</p>
<p>Default value: **true**</p>
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
<td align="left"><p><span sdata="link"><a href="localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md">LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The localized display names of this filter descriptor.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.md">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The properties of this filter descriptor.</p></td>
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
<td align="left"><p><span sdata="link"><a href="filterdescriptors-element-in-method-bdcmetadata-schema.md">FilterDescriptors Element in Method (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>A list of filter descriptors of a method.</p></td>
</tr>
</tbody>
</table>








