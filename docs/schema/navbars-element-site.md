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
ms.assetid: e3e5a204-99e9-47aa-ba25-74f1a7bf5672
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
<td align="left"># NavBars Element (Site)</td>
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

Contains the collection of links that appear in the top and left
navigation areas of a home page.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><NavBars>
</NavBars></code></pre></td>
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
<td align="left"><p>None</p></td>
<td align="left"><p>N/A</p></td>
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
<td align="left"><p><a href="navbar-element-site.md">NavBar</a></p></td>
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
<td align="left"><p><a href="project-element-site.md">Project</a></p></td>
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

The following example from the file
[Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx)
defines the default navigation areas for the home page.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <NavBars>
       <NavBar Name="SharePoint Top Navbar" Separator="&nbsp;&nbsp;&nbsp;" 
          Body="<a ID='onettopnavbar#LABEL_ID#' href='#URL#' 
             accesskey='J'>#LABEL#</a>" ID="1002">
          <NavBarLink Name="Documents and Lists" 
             Url="_layouts/[%=System.Threading.Thread.CurrentThread.
                CurrentUICulture.LCID%]/viewlsts.aspx" />
          <NavBarLink Name="Create" 
             Url="_layouts/[%=System.Threading.Thread.CurrentThread.
                CurrentUICulture.LCID%]/create.aspx" />
          <NavBarLink Name="Site Settings" 
             Url="_layouts/[%=System.Threading.Thread.CurrentThread.
                CurrentUICulture.LCID%]/settings.aspx" />
          <NavBarLink Name="Help" Url="javascript:HelpWindowKey
             ("helphome")" />
       </NavBar>
       <NavBar Name="Documents" Prefix="<table border=0 cellpadding=4 
             cellspacing=0>" 
          Body="<tr><td><table border=0 cellpadding=0 
             cellspacing=0><tr><td>
          <img src='/_layouts/images/blank.gif' ID='100' alt='Icon' 
             border=0>&nbsp;</td><td valign=top>
          <a ID=onetleftnavbar#LABEL_ID# 
             href='#URL#'>#LABEL#</td></tr></table></td></tr>" 
          Suffix="</table>" ID="1004" />
       <NavBar Name="Pictures" Prefix="<table border=0 cellpadding=4 
             cellspacing=0>" 
          Body="<tr><td><table border=0 cellpadding=0 
             cellspacing=0><tr><td>
          <img src='/_layouts/images/blank.gif' ID='100' alt='Icon' 
             border=0>&nbsp;</td>
          <td valign=top><a ID=onetleftnavbar#LABEL_ID# 
             href='#URL#'>#LABEL#</td></tr></table>
          </td></tr>" Suffix="</table>" ID="1005" />
       <NavBar Name="Lists" Prefix="<table border=0 cellpadding=4 
             cellspacing=0>" 
          Body="<tr><td><table border=0 cellpadding=0 
             cellspacing=0><tr><td>
          <img src='/_layouts/images/blank.gif' ID='100' alt='Icon' 
             border=0>&nbsp;</td>
          <td valign=top><a ID=onetleftnavbar#LABEL_ID# 
             href='#URL#'>#LABEL#</td></tr></table>
          </td></tr>" Suffix="</table>" ID="1003" />
       <NavBar Name="Discussions" Prefix="<table border=0 cellpadding=4 
             cellspacing=0>" 
          Body="<tr><td><table border=0 cellpadding=0 
             cellspacing=0><tr><td>
          <img src='/_layouts/images/blank.gif' ID='100' alt='Icon' 
             border=0>&nbsp;</td>
          <td valign=top><a ID=onetleftnavbar#LABEL_ID# 
             href='#URL#'>#LABEL#</td></tr></table>
          </td></tr>" Suffix="</table>" ID="1006" />
       <NavBar Name="Surveys" Prefix="<table border=0 cellpadding=4 
             cellspacing=0>" 
          Body="<tr><td><table border=0 cellpadding=0 
             cellspacing=0><tr><td>
          <img src='/_layouts/images/blank.gif' ID='100' alt='Icon' 
             border=0>&nbsp;</td>
          <td valign=top><a ID=onetleftnavbar#LABEL_ID# 
             href='#URL#'>#LABEL#</td></tr></table>
          </td></tr>" Suffix="</table>" ID="1007" />
    </NavBars>








