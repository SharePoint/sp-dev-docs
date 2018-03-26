---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c270e4ce-8110-4da7-b0e7-c223604bfce7
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
<td align="left"># File Element (Module)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Specifies a file to include within a module in a site definition.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;File
  DocumentTemplateForList = string
  DoGUIDFixUp = &quot;TRUE&quot; | &quot;FALSE&quot;
  IgnoreIfAlreadyExists = &quot;TRUE&quot; | &quot;FALSE&quot;
  Level = Draft
  Name = string
  NavBarHome = &quot;TRUE&quot; | &quot;FALSE&quot;
  Path = string  ReplaceContent = &quot;TRUE&quot; | &quot;FALSE&quot; 
  Type = &quot;Ghostable&quot; | &quot;GhostableInLibrary&quot;
  Url = string&gt;
  &lt;AllUsersWebPart /&gt;
  &lt;BinarySerializedWebPart /&gt;
  &lt;NavBarPage /&gt;
  &lt;Property /&gt;
  &lt;View /&gt;
  &lt;WebPartConnection /&gt;
&lt;/File&gt;</code></pre></td>
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
<td align="left"><p>**IgnoreIfAlreadyExists**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to provision the view even if the file already exists at the specified URL; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional **Text**. Specifies the virtual path for the file. Cannot contain the following characters:</p>
<ul>
<li><p>\&quot;</p></li>
<li><p>#</p></li>
<li><p>%</p></li>
<li><p>&amp;</p></li>
<li><p>DOCS-ASTERISK</p></li>
<li><p>:</p></li>
<li><p>DOCS-LESSTHAN</p></li>
<li><p>DOCS-GREATERTHAN</p></li>
<li><p>?</p></li>
<li><p>\\</p></li>
<li><p>{</p></li>
<li><p>}</p></li>
<li><p>|</p></li>
<li><p>~</p></li>
<li><p>\x7f</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**NavBarHome**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> if the file is the destination URL for the <span class="keyword">Home** link in the top navigation bar used throughout the site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Path**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the physical path to the file relative to %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\Features\<span class="placeholder">Feature**. Can only contain the following characters:</p>
<ul>
<li><p>alphanumeric</p></li>
<li><p>hyphen (**-**)</p></li>
<li><p>underscore (**_**)</p></li>
<li><p>period (**.**)</p></li>
<li><p>space ( )</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies that the file be cached in memory on the front-end Web server. Possible values include <span class="keyword">Ghostable</span> and <span class="keyword">GhostableInLibrary</span>. Both values specify that the file be cached, but <span class="keyword">GhostableInLibrary</span> specifies that the file be cached as part of a list whose base type is <span class="keyword">Document</span><span class="keyword">Library**.</p>
<p>When changes are made, for example, to the home page through the UI, only the differences from the original page definition are stored in the database, while default.aspx is cached in memory along with the schema files. The HTML page that is displayed in the browser is constructed through the combined definition resulting from the original definition cached in memory and from changes stored in the database.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ReplaceContent**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to overwrite the previously installed version of the file with a new version when the element manifest is being applied as part of an upgrade of the parent Feature; otherwise <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Required **Text</span>. Specifies the virtual path for the file. If the <span class="keyword">Name</span> attribute is specified, its value is used for the virtual path. If <span class="keyword">Path</span> is not specified, the value of <span class="keyword">Url** is used for the physical path. Cannot contain the following characters:</p>
<ul>
<li><p>\&quot;</p></li>
<li><p>#</p></li>
<li><p>%</p></li>
<li><p>&amp;</p></li>
<li><p>DOCS-ASTERISK</p></li>
<li><p>:</p></li>
<li><p>DOCS-LESSTHAN</p></li>
<li><p>DOCS-GREATERTHAN</p></li>
<li><p>?</p></li>
<li><p>\\</p></li>
<li><p>{</p></li>
<li><p>}</p></li>
<li><p>|</p></li>
<li><p>~</p></li>
<li><p>\x7f</p></li>
</ul></td>
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
<td align="left"><p><a href="alluserswebpart-element-module.htm">AllUsersWebPart</a>, <span sdata="link"><a href="binaryserializedwebpart-element-module.htm">BinarySerializedWebPart Element (Module)</a></span>, <a href="navbarpage-element-module.htm">NavBarPage</a>, <a href="property-element-module.htm">Property</a>, <a href="view-element-module.htm">View</a>, <span sdata="link"><a href="webpartconnection-element-module.htm">WebPartConnection Element (Module)</a></span></p></td>
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
<td align="left"><p><a href="module-element-module.htm">Module</a></p></td>
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
sdata="link">[Modules](modules.htm)</span>.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

<span
sdata="link">[Modules](modules.htm)</span>

#### Other resources

[Module](http://msdn.microsoft.com/library/e5eeed6e-d785-496d-82b5-08d153588045(Office.15).aspx)

[How to: Provision a
File](http://msdn.microsoft.com/library/438d5a75-7f39-4fa9-a365-d86e8ba967b6(Office.15).aspx)








