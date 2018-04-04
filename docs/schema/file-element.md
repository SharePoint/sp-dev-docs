---

manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: db86d800-9f68-43cc-b7d5-3bd76537dfde
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
<td align="left"># file element</td>
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

**Applies to**: Lync 2013 | Lync Server 2013 | SharePoint 2016 |
SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a file to include within a module in a site definition
configuration or Web template configuration.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><File
  DocumentTemplateForList = "Text"  DoGUIDFixUp = "TRUE" | "FALSE"
  IgnoreIfAlreadyExists = "TRUE" | "FALSE"
  Level = "Text"
  Name = "Text"
  NavBarHome = "TRUE" | "FALSE"
  Path = "Text"
  Type = "Text"
  Url = "Text >
</File></code></pre></td>
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
<td align="left"><p>**DocumentTemplateForList**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DoGUIDFixUp**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IgnoreIfAlreadyExists**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Level**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional **Text**. Specifies the virtual path for the file. Cannot contain the following characters:</p>
<ul>
<li><p>\"</p></li>
<li><p>#</p></li>
<li><p>%</p></li>
<li><p>&amp;</p></li>
<li><p>*</p></li>
<li><p>:</p></li>
<li><p><</p></li>
<li><p>></p></li>
<li><p>?</p></li>
<li><p>\\</p></li>
<li><p>{</p></li>
<li><p>}</p></li>
<li><p>|</p></li>
<li><p>~</p></li>
<li><p>\x7f</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**NavBarHome**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE</span> if the file is the destination URL for the **Home** link in the top navigation bar used throughout the site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Path**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the physical path to the file relative to %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\SiteTemplates\<span class="placeholder">Site_Definition</span> for Onet.xml files. Specifies the physical path to the file relative to %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\FEATURES\<span class="placeholder">Feature_Name** for Feature.xml files. Can only contain the following characters:</p>
<ul>
<li><p>alphanumeric</p></li>
<li><p>hyphen (**-**)</p></li>
<li><p>underscore (**_**)</p></li>
<li><p>period (**.**)</p></li>
<li><p>space ( )</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies that the file be cached in memory on the front-end server. Possible values include **Ghostable</span> and **GhostableInLibrary</span>. Both values specify that the file will be cached, but **GhostableInLibrary</span> specifies that the file will be cached as part of a list whose base type is **Document</span>**Library**.</p>
<p>For example, when changes are made to a home page through the user interface (UI), only the differences between the original page definition and the new page are stored in the database. The default.aspx is cached in memory, in addition to the schema files. The HTML page that is displayed in the browser is constructed through the combined page definition that results from the original page definition that is cached in memory and from changes that are stored in the database.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Required **Text</span>. Specifies the virtual path for the file. If the **Name</span> attribute is specified, its value is used for the virtual path. If **Path</span> is not specified, the value of **Url** is used for the physical path. Cannot contain the following characters:</p>
<ul>
<li><p>\"</p></li>
<li><p>#</p></li>
<li><p>%</p></li>
<li><p>&amp;</p></li>
<li><p>*</p></li>
<li><p>:</p></li>
<li><p><</p></li>
<li><p>></p></li>
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
<td align="left"><p><a href="alluserswebpart-element-site.md">AllUsersWebPart</a>, <a href="binaryserializedwebpart-element-site.md">BinarySerializedWebPart</a>, <a href="navbarpage-element-sitemodule.md">NavBarPage</a>, <a href="property-element-sitemodule.md">Property</a>, <a href="view-element-site.md">View</a>, <a href="webpartconnection-element-site.md">WebPartConnection</a></p></td>
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
<td align="left"><p><a href="module-element-site.md">Module</a></p></td>
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

For more information, see [Module Element
(Site)](module-element-site.md)</span> for an example
that uses the **File** element.








