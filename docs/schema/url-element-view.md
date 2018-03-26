---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: c9fb4f3b-c2ce-468d-90f4-5cf7eb325e29
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
<td align="left"># URL Element (View)</td>
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
SharePoint Online | SharePoint Server 2013*

Renders the URL of a particular form for a specified list.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;URL
  Cmd = &quot;Text&quot;
  NoID = &quot;TRUE&quot; | &quot;FALSE&quot;&gt;
&lt;/URL&gt;</code></pre></td>
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
<td align="left"><p>**Cmd**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the display mode appropriate for the form. Can be one of the following values for <span class="keyword">DisplayMode</span>: <span class="keyword">Display</span>, <span class="keyword">DisplayHead</span>, <span class="keyword">Edit</span>, <span class="keyword">New</span>, <span class="keyword">PreviewDisplay</span>, <span class="keyword">PreviewEdit</span>, <span class="keyword">PreviewNew</span>. This attribute can also be set to <span class="keyword">LookUp**, which is used during field rendering to return the display form in the foreign list for a lookup field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NoID**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to return the URL of the item form without including the item ID as part of the URL.</p></td>
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
<td align="left"><p>Numerous</p></td>
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

Because links returned by this element are absolute URLs and already
encoded, there is no need to use the <span
class="keyword">URLEncodeAsURL</span> attribute to encode the URL (see
<span sdata="link">[Global Attributes for HTML-Rendering
Elements](global-attributes-for-html-rendering-elements.htm)</span>).

The following examples show the URLs returned by using the <span
class="keyword">URL </span>element on an Announcements list:

-   <span class="code">\<URL Cmd="EDIT"/\></span> renders <span
    class="code">"http://</span><span
    class="placeholder">Server\_Nam</span><span class="parameter"
    sdata="paramReference">e/</span><span
    class="placeholder">Site\_Name</span><span class="parameter"
    sdata="paramReference">/</span><span
    class="code">Lists/Announcements/EditForm.aspx"</span>

-   <span class="code">\<URL Cmd="NEW"/\></span> renders <span
    class="code">"http://</span><span
    class="placeholder">Server\_Name</span><span
    class="code">/</span><span
    class="placeholder">Site\_Name</span><span
    class="code">/Lists/Announcements/NewForm.aspx" </span>

-   <span class="code">\<URL Cmd="DISPLAY"/\></span> renders <span
    class="code">"http://</span><span
    class="placeholder">Server\_Name</span><span
    class="code">/</span><span
    class="placeholder">Site\_Name</span><span
    class="code">/Lists/Announcements/DispForm.aspx"</span>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

<span sdata="link">[UrlBaseName Element
(View)](urlbasename-element-view.htm)</span>

<span sdata="link">[UrlDirName Element
(View)](urldirname-element-view.htm)</span>








