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
ms.assetid: 2ee96a89-03e9-4283-8a29-05c1e5b4788a
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
<td align="left"># Project Element (Site)</td>
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

Serves as the top-level element in an
[Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx)
file that contains a site definition configuration or Web template
configuration for a new Web site.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Project
  AlternateCSS = &quot;Text&quot;
  AlternateHeader = &quot;Text&quot;  AlternateUrl = &quot;Text&quot;
  CustomJSUrl = &quot;Text&quot;
  DisableWebDesignFeatures = &quot;Text&quot;
  ListDir = &quot;Text&quot;
  Revision = &quot;Integer&quot;
  SiteLogoUrl = &quot;Text&quot;  SiteLogoDescription = &quot;Text&quot;
  Title = &quot;Text&quot;  UIVersion = &quot;Integer&quot;&gt;
&lt;/Project&gt;</code></pre></td>
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
<td align="left"><p>**AlternateCSS**</p></td>
<td align="left"><p>Optional **Text</span>. Used to specify the name of an alternate cascading style sheets (CSS) file located in the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\LAYOUTS\<span class="placeholder">lcid</span>\STYLES directory (where <span class="placeholder">lcid** is the ID of a language/culture; for example, 1033 for English) that defines styles to use in the configuration.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AlternateHeader**</p></td>
<td align="left"><p>Optional **Text</span>. Used to specify the name of an ASPX page located in the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\LAYOUTS directory that defines an alternate header for the top area in site pages. This attribute provides a means to replace the header region of a page with the output of an ASPX page that defines a different header. For example, add <span class="code">AlternateHeader=&quot;myHeader.aspx&quot;</span> to the <span class="keyword">Project</span> element to specify <span class="code">myHeader.aspx** as the name of the file that provides an alternate header.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AlternateUrl**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CustomJSUrl**</p></td>
<td align="left"><p>Optional **Text**. Specifies a custom JavaScript file located in the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\LAYOUTS directory that contains script to execute within a site created from the site definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisableWebDesignFeatures**</p></td>
<td align="left"><p>Optional **Text**. Blocks specific editing features that are used in SharePoint Designer. Possible values include the following, which can be delimited using semicolons:</p>
<ul>
<li><p>**wdfbackup**   Disable Web site backup.</p></li>
<li><p>**wdfrestore**   Disable Web site restore.</p></li>
<li><p>**wdfpackageimport**   Disable Web site package import.</p></li>
<li><p>**wdfpackageexport**   Disable Web site package export.</p></li>
<li><p>**wdfthemeweb**   Disable theme support for the Web site.</p></li>
<li><p>**wdfthemepage**   Disable theme support for individual pages.</p></li>
<li><p>**wdfnavigationbars**   Disable support for navigation bars.</p></li>
<li><p>**wdfnavigationview**   Disable the Navigation view for the Web site.</p></li>
<li><p>**wdfpublishview**   Disable the Remote Web site view for the Web site.</p></li>
<li><p>**wdfpublishselectedfile**   Do not allow the selected file to be published.</p></li>
<li><p>**wdfopensite**   Disable access to the entire Web site.</p></li>
<li><p>**wdfnewsubsite**   Do not allow the creation of a new subsite.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**ListDir**</p></td>
<td align="left"><p>Required **Text**. Specifies the directory in which to implement new lists.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Revision**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the build number of the site definition.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SiteLogoUrl**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies a server-relative URL for a custom image to use for the site logo. For example, <span class="code">/_layouts//images/MyCustomLogo.gif**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SiteLogoDescription**</p></td>
<td align="left"><p>Optional **Text**. Provides a description of the site logo.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Required **Text**. Specifies a default name for Web sites that are created from the site definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UIVersion**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the version of the SharePoint Foundation UI that is being used by the sites based on the site definition.</p></td>
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
<td align="left"><p><a href="basetypes-element-site.htm">BaseTypes</a>, <a href="components-element-site.htm">Components</a>, <a href="configurations-element-site.htm">Configurations</a>, <a href="documenttemplates-element-site.htm">DocumentTemplates</a>, <a href="listtemplates-element-site.htm">ListTemplates</a>, <a href="modules-element-site.htm">Modules</a>, <a href="navbars-element-site.htm">NavBars</a>, <a href="serveremailfooter-element-site.htm">ServerEmailFooter</a></p></td>
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
<td align="left"><p>None</p></td>
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
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows the opening line of the
[Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx)
file for the standard SharePoint Foundation site definition (<span
class="keyword">STS</span>).

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Project Title="$Resources:onet_TeamWebSite;" Revision="2" ListDir="$Resources:core,lists_Folder;" xmlns:ows="Microsoft SharePoint">








