---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: cfefe8e5-2656-4d71-bb4e-5f991a800598
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
<td align="left"># ListInstance Element (List Instance)</td>
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

Specifies default data with which to provision the given list type.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;ListInstance 
  CustomSchema = string
  Description = &quot;Text&quot;
  DocumentTemplate = integer
  FeatureId = &quot;Text&quot;
  Hidden = &quot;TRUE&quot; | &quot;FALSE&quot;
  HyperlinkBaseUrl = string
  Id = Text
  OnQuickLaunch = &quot;TRUE&quot; | &quot;FALSE&quot;
  QuickLaunchUrl = &quot;Text&quot;
  RootWebOnly = &quot;TRUE&quot; | &quot;FALSE&quot;
  TemplateType = Integer
  Title = &quot;Text&quot;
  Url = &quot;Text&quot;
  VersioningEnabled = &quot;TRUE&quot; | &quot;FALSE&quot;
&lt;/ListInstance&gt;</code></pre></td>
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
<td align="left"><p>**CustomSchema**</p></td>
<td align="left"><p>Optional **string**. Specifies the custom schema to use for the list instance.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Contains a description of the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DocumentTemplate**</p></td>
<td align="left"><p>Optional **string**. Specifies the document template to use for the list instance.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FeatureId**</p></td>
<td align="left"><p>Required **Text</span>. Specifies the GUID of the Feature. If you do not specify a Feature GUID, Microsoft SharePoint Foundation uses the ID of the default Feature, in other words, the one containing the <span class="keyword">ListInstance</span> element. If the list template for the list instance is contained within a different Feature, you must specify the ID of that Feature through the <span class="keyword">FeatureId** attribute.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies if the list is hidden.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HyperlinkBaseUrl**</p></td>
<td align="left"><p>Optional **string**. Specifies the absolute URL used for hyperlinks in the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Optional **Text**. Specifies a unique identifier for the list instance. The integer must be unique across the Feature definition.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OnQuickLaunch**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to display lists created from the list definition on the Quick Launch bar.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**QuickLaunchUrl**</p></td>
<td align="left"><p>Optional **Text**. Specifies the URL of the view page to open for the list through Quick Launch navigation.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the list created from the definition exists only in the root Web site of a site collection.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TemplateType**</p></td>
<td align="left"><p>Required **Integer**. Returns the integer identifier of the list template to use.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Required **Text**. Title of the list in the schema. This must also be unique.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Required **Text**. Returns the site-relative URL at which to place the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**VersioningEnabled**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies if versioning is enabled on the list.</p></td>
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
<td align="left"><p><a href="data-element-list-instance.md">Data</a>, <span sdata="link"><a href="datasource-element-list-instance.md">DataSource Element (List Instance)</a></span></p></td>
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
<td align="left"><p><a href="elements-element-list-instance.md">Elements</a></p></td>
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

The **ListInstance** Feature element maps to
the [List](list-element-list.md) element as used in
SharePoint Foundation within the
[Configuration](configuration-element-site.md) element in
Onet.xml.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For an example of how this element is used, see [List
Instances](list-instances.md)</span>.








