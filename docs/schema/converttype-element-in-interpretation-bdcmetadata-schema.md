---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.ConvertType
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c474cf2c-b631-f3c9-daf1-f05d3e0d385f
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
<td align="left"># ConvertType Element in Interpretation (BDCMetadata Schema)</td>
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

Specifies the rule to convert the data type of a data value into another
data type.

**Namespace: **
http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema: ** BDCMetadata

The Convert element specifies the rule to convert the data type of a
data value into another data type. When the rules are applied in order,
this rule specifies the data type of the data value to be converted to
the data type specified by the BDCType attribute. When the rules are
applied in reverse order, this rule specifies the data type of the data
value to be converted to the data type specified by the <span
class="keyword">LOBType</span> attribute. For example, this rule can
specify converting a date value obtained from an external system, into a
culture and locale sensitive string which will eventually be displayed
to the user, and converting the updated value for that string back into
the date that is compatible with the external system.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src=".." title="Caution note" alt="Caution note" /><strong>Caution</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**ConvertType</span> does not support non-Gregorian calendars for conversions between <span class="keyword">System.String</span> and <span class="keyword">System.DateTime**.</p></td>
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
<td align="left"><pre><code>&lt;ConvertType LOBType = &quot;String&quot; BDCType = &quot;String&quot;&gt; &lt;/ConvertType&gt;</code></pre></td>
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
<td align="left"><p>LOBType</p></td>
<td align="left"><p>Required.</p>
<p>The data type to convert the data value into when the rules are applied in reverse order.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>BDCType</p></td>
<td align="left"><p>Required.</p>
<p>The data type to convert the data value into when the rules are applied in order.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>LOBLocale</p></td>
<td align="left"><p>Optional.</p>
<p>The locale of the data that is received from the external system.</p></td>
</tr>
</tbody>
</table>

#### Child elements

None.

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
<td align="left"><p><span sdata="link"><a href="interpretation-element-in-typedescriptor-bdcmetadata-schema.md">Interpretation Element in TypeDescriptor (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The rules to apply to the data stored in the data structures that are represented by a **TypeDescriptor**.</p></td>
</tr>
</tbody>
</table>








