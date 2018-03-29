---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1e7fd643-5029-4158-910e-2ab5396efcb4
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
<td align="left"># Module Element (Module)</td>
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
SharePoint Online | SharePoint Server 2013

Specifies files with which to provision SharePoint Web sites within an
element manifest.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Module
  HyperlinkBaseUrl = string
  IncludeFolders = &quot;Text&quot;
  List = &quot;Integer&quot;
  Name = &quot;Text&quot;
  Path = &quot;Text&quot;
  RootWebOnly = &quot;TRUE&quot; | &quot;FALSE&quot;
  SetupPath = &quot;Text&quot;
  Url = &quot;Text&quot;&gt;
&lt;/Module&gt;</code></pre></td>
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
<td align="left"><p>Optional **string**. Specifies an absolute URL to use as the base URL for hyperlinks.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IncludeFolders**</p></td>
<td align="left"><p> Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**List**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the type of list, which is defined within <a href="http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx">Onet.xml</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text**. Contains the name of the file set. Can only contain the following characters:</p>
<ul>
<li><p>alphanumeric</p></li>
<li><p>hyphen (**-**)</p></li>
<li><p>underscore (**_**)</p></li>
<li><p>period (**.**)</p></li>
<li><p>space ( )</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**Path**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the physical path to the file set relative to %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\Features\<span class="placeholder">Feature**. Can only contain the following characters:</p>
<ul>
<li><p>alphanumeric</p></li>
<li><p>hyphen (**-**)</p></li>
<li><p>underscore (**_**)</p></li>
<li><p>period (**.**)</p></li>
<li><p>space ( )</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if the files specified in the module are installed only in the top-level Web site of the site collection.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SetupPath**</p></td>
<td align="left"><p>Optional **Text**. Specifies the physical path to a folder in the SharePoint Foundation setup directory %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE) that contains a file to include in the module. Can only contain the following characters:</p>
<ul>
<li><p>alphanumeric</p></li>
<li><p>hyphen (**-**)</p></li>
<li><p>underscore (**_**)</p></li>
<li><p>period (**.**)</p></li>
<li><p>space ( )</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the virtual path of the folder in which to place the files when a site is instantiated. If **Path</span> is not specified, the value of **Url</span> is used for the physical path. Use the **Url** attribute to provision a folder through the Feature.</p>
<p>The **Url** attribute cannot contain the following characters:</p>
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
<td align="left"><p><a href="file-element-module.md">File</a></p></td>
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
<td align="left"><p><a href="elements-element-module.md">Elements</a></p></td>
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

The **Module** element specifies a file or
collection of files and a location where the files are installed during
site creation. If the file is a Web Part Page, the module definition can
specify which Web Parts should be included on the page.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For an example of how this element is used, see <span
sdata="link">[Modules](modules.md)</span>.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

<span
sdata="link">[Modules](modules.md)</span>

#### Other resources

[Module](http://msdn.microsoft.com/library/e5eeed6e-d785-496d-82b5-08d153588045(Office.15).aspx)

[How to: Provision a
File](http://msdn.microsoft.com/library/438d5a75-7f39-4fa9-a365-d86e8ba967b6(Office.15).aspx)








