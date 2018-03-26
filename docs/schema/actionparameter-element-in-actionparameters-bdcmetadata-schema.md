---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.ActionParameter
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1f5fa96a-1bff-f007-984d-a644cbbb2648
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
<td align="left"># ActionParameter Element in ActionParameters (BDCMetadata Schema)</td>
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

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

Specifies the parameters of a URL-based action. It defines how to
parameterize the URL of an action with <span
class="keyword">EntityInstance</span>-specific data.

**Namespace:**
http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema:** BDCMetadata

The URL attribute of a URL-based action can receive parameters by using
the ActionParameter element.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_caution.gif" title="Important note" alt="Important note" /><strong>Important</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**ActionParameters</span> can either represent identifier values, or values that correspond to <span class="keyword">TypeDescriptors</span> in a <span class="keyword">SpecificFinder</span> of the <span class="keyword">Entity</span>. The <span class="keyword">ActionParameter</span> represents an identifier value when the <span class="keyword">IdOrdinal</span> property is present. The value of the property specifies the index of the identifier whose value this <span class="keyword">ActionParameter</span> represents. If the <span class="keyword">IdOrdinal</span> property is not specified, the <span class="keyword">ActionParameter</span> represents a <span class="keyword">TypeDescriptor</span>, and the <span class="keyword">Name</span> attribute specifies which type descriptor is being represented. The <span class="keyword">Name</span> attribute is specified as a <span class="keyword">Dotted Path**.</p></td>
</tr>
</tbody>
</table>

The **ActionParameter** element accepts the
following property.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_caution.gif" title="Important note" alt="Important note" /><strong>Important</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Properties are case-sensitive.</p></td>
</tr>
</tbody>
</table>

Properties

<table>
<colgroup>
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Property</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
<th align="left"><p>Required.</p></th>
<th align="left"><p>Default Value</p></th>
<th align="left"><p>Limits/Accepted Values</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**IdOrdinal**</p></td>
<td align="left"><p>**System.Int32**</p></td>
<td align="left"><p>Specifies if the **ActionParameter** represents an identifier instead of a field.</p></td>
<td align="left"><p>Optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

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
<td align="left"><pre><code>&lt;ActionParameter Index = &quot;Integer&quot; Name = &quot;String&quot; DefaultDisplayName = &quot;String&quot; IsCached = &quot;Boolean&quot;&gt; &lt;/ActionParameter&gt;</code></pre></td>
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
<td align="left"><p>**Index**</p></td>
<td align="left"><p>Required.</p>
<p>An ordinal attribute that specifies the position of this **ActionParameter</span> among other <span class="keyword">ActionParameters** in the URL.</p>
<p>Attribute type: **Integer**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the **ActionParameter**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name for the **ActionParameter**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this **ActionParameter</span> is used frequently. This attribute is used by the BDC client runtime to cache this <span class="keyword">Action**.</p>
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
<td align="left"><p><span sdata="link"><a href="localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.htm">LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The localized display names for the **ActionParameter**.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.htm">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The properties of the **ActionParameter**.</p></td>
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
<th align="left"><p>**Element**</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="actionparameters-element-in-action-bdcmetadata-schema.htm">ActionParameters Element in Action (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The **ActionParameters</span> element that contains this <span class="keyword">ActionParameter**.</p></td>
</tr>
</tbody>
</table>








