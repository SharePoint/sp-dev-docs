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
ms.assetid: cee7eacc-0142-4b33-a363-3ef0873799dc
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
<td align="left"># Module Element (Site)</td>
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

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

Specifies files and "all user" Web Parts with which to provision a Web
site.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Module&gt;
  HyperlinkBaseUrl = &quot;Text&quot;
  IncludeFolders = &quot;Text&quot;
  List = &quot;Integer&quot;
  Name = &quot;Text&quot;
  Path = &quot;Text&quot;
  RootWebOnly = &quot;TRUE&quot; | &quot;FALSE&quot;
  SetupPath = &quot;Text&quot;
  Url = &quot;Text&quot;
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
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IncludeFolders**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
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
<td align="left"><p>Optional **Text</span>. Specifies the physical path to the file set relative to %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\SiteTemplates\<span class="placeholder">Site_Definition**. Can only contain the following characters:</p>
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
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** if the files specified in the module are installed only in the top-level Web site of the site collection.</p></td>
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
<td align="left"><p>Optional **Text</span>. Specifies the virtual path of the folder in which to place the files when a site is instantiated. If <span class="keyword">Path</span> is not specified, the value of <span class="keyword">Url</span> is used for the physical path. Use the <span class="keyword">Url** attribute to provision a folder through the site definition.</p>
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
<li><p></p></li>
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
<td align="left"><p><a href="file-element.htm">File</a></p></td>
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
<td align="left"><p><a href="modules-element-site.htm">Modules</a></p></td>
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

A detailed **Module** element appears in a
**Modules** element directly under the <span
class="keyword">Project</span> element of an <span
class="code">Onet.xml</span> file. Each such module is referenced by at
least one other **Module** element that is in a
**Configuration** element of the same file.

The **Module** element specifies a file or
collection of files and a location where the files are installed during
site creation. If the file is a Web Part Page, the module definition can
specify which Web Parts should be included on the page.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example from
[Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx)
defines the views and files to include within a module.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Module Name="Default" Url="" Path="">
      <File Url="default.aspx" NavBarHome="True">
        <View List="$Resources:core,lists_Folder;/$Resources:core,announce_Folder;" BaseViewID="0" WebPartZoneID="Left" />
        <View List="$Resources:core,lists_Folder;/$Resources:core,calendar_Folder;" BaseViewID="0" RecurrenceRowset="TRUE" WebPartZoneID="Left" WebPartOrder="2" />
        <AllUsersWebPart WebPartZoneID="Right" WebPartOrder="1"><![CDATA[
          <WebPart xmlns="http://schemas.microsoft.com/WebPart/v2" xmlns:iwp="http://schemas.microsoft.com/WebPart/v2/Image">
            <Assembly>Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c</Assembly>
            <TypeName>Microsoft.SharePoint.WebPartPages.ImageWebPart
            </TypeName>
            <FrameType>None</FrameType>
            <Title>$Resources:wp_SiteImage;</Title>
                            <iwp:ImageLink>/_layouts/images/homepage.gif</iwp:ImageLink>
          </WebPart>
        ]]></AllUsersWebPart>
        <View List="$Resources:core,lists_Folder;/$Resources:core,links_Folder;" BaseViewID="0" WebPartZoneID="Right" WebPartOrder="2" />
        <NavBarPage Name="$Resources:core,nav_Home;" ID="1002" Position="Start" />
        <NavBarPage Name="$Resources:core,nav_Home;" ID="0" Position="Start" />
      </File>
    </Module>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[How to: Provision a
File](http://msdn.microsoft.com/library/438d5a75-7f39-4fa9-a365-d86e8ba967b6(Office.15).aspx)








