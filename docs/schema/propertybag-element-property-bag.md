---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Property Bag Schema
ms.assetid: f249df32-1c9a-4d60-96e7-a97f0dd8f5f4
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
<td align="left"># PropertyBag Element (Property Bag)</td>
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

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

Specifies the properties in the property bag for the list item, file,
folder, or website.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;PropertyBag
  HyperlinkBaseUrl = &quot;Text&quot;
  ItemIndex = &quot;Text&quot;
  ParentType = &quot;PropertyBagParentTypeDefinition&quot;
  RootWebOnly = &quot;Text&quot;
  Url = &quot;Text&quot;&gt;

  &lt;Property  ... /&gt;

&lt;/ PropertyBag &gt;</code></pre></td>
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
<td align="left"><p>**HyperlinkBaseUrl**</p></td>
<td align="left"><p>Optional **Text**. Specifies an absolute URL to use as the base URL for hyperlinks.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ItemIndex**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the ID of the list item. This attribute is used only when <span class="keyword">ParentType** is &quot;ListItem&quot;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ParentType**</p></td>
<td align="left"><p>Required **PropertyBagParentTypeDefinition</span> enumeration. Must be one of <span class="keyword">File</span>, <span class="keyword">Folder</span>, <span class="keyword">ListItem</span>, or <span class="keyword">Web**. Specifies the kind of object to which the property bag belongs.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **TRUE/FALSE</span>. Indicates whether the parent object must be the site collection's top-level site when the <span class="keyword">ParentType</span> attribute is &quot;Web&quot;. This attribute is not used with any other <span class="keyword">ParentType** value.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Optional **Text</span>. The site-relative URL of the parent object to which the property bag belongs, except when <span class="keyword">ParentType** is &quot;ListItem&quot;. In that case, this attribute specifies the site-relative URL of the list, not the list item.</p></td>
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
<td align="left"><p><a href="property-element-property-bag.htm">Property</a></p></td>
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
<td align="left"><p><a href="elements-element-property-bag.htm">Elements</a></p></td>
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


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For an example of how this element is used, see <span
sdata="link">[Property Bag
Schema](property-bag-schema.htm)</span>.








