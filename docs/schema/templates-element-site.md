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
ms.assetid: 208c0e62-e9e2-49ec-ad7b-f7aa1770a604
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
<td align="left"># Templates Element (Site)</td>
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

Top-level element in a
[WebTempDOCS-ASTERISK.xml](http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8(Office.15).aspx)
file that specifies the collection of site definitions available for
instantiating sites within the deployment.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><Templates>
    <Template
      ID = "Text"
     Name = "Text">
    <Configuration/>
    ...
    </Template>
  ...
</Templates></code></pre></td>
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
<td align="left"><p><a href="template-element-site.md">Template</a></p></td>
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

The following example shows the templates defined in the default
[WebTemp.xml](http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8(Office.15).aspx)
file installed in the %ProgramFiles%\\Common Files\\Microsoft
Shared\\web server extensions\\15\\TEMPLATE\\1033 folder of SharePoint
Foundation.

## Definition
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <?xml version="1.0" encoding="utf-8"?>
    <!-- _lcid="1033" _version="14.0.4762" _dal="1" -->
    <!-- _LocalBinding -->
    <Templates xmlns:ows="Microsoft SharePoint">
     <Template Name="GLOBAL" SetupPath="global" ID="0">
        <Configuration ID="0" Title="Global template" Hidden="TRUE" ImageUrl="" Description="This template is used for initializing a new site." >   </Configuration>
     </Template>
     <Template Name="STS" ID="1">
        <Configuration ID="0" Title="Team Site" Hidden="FALSE" ImageUrl="/_layouts/images/stts.png" Description="A site for teams to quickly organize, author, and share information. It provides a document library, and lists for managing announcements, calendar items, tasks, and discussions." DisplayCategory="Collaboration" >    </Configuration>
        <Configuration ID="1" Title="Blank Site" Hidden="FALSE" ImageUrl="/_layouts/images/stbs.png" Description="A blank site for you to customize based on your requirements." DisplayCategory="Collaboration" AllowGlobalFeatureAssociations="False" >    </Configuration>
        <Configuration ID="2" Title="Document Workspace" Hidden="FALSE" ImageUrl="/_layouts/images/stdw.png" Description="A site for colleagues to work together on a document. It provides a document library for storing the primary document and supporting files, a tasks list for assigning to-do items, and a links list for resources related to the document." DisplayCategory="Collaboration" >    </Configuration>
     </Template>
     <Template Name="MPS" ID="2">
        <Configuration ID="0" Title="Basic Meeting Workspace" Hidden="FALSE" ImageUrl="/_layouts/images/stmw.png" Description="A site to plan, organize, and capture the results of a meeting. It provides lists for managing the agenda, meeting attendees, and documents." DisplayCategory="Meetings" SupportsMultilingualUI="FALSE" >    </Configuration>
        <Configuration ID="1" Title="Blank Meeting Workspace" Hidden="FALSE" ImageUrl="/_layouts/images/stbm.png" Description="A blank meeting site for you to customize based on your requirements." DisplayCategory="Meetings" SupportsMultilingualUI="FALSE" >    </Configuration>
        <Configuration ID="2" Title="Decision Meeting Workspace" Hidden="FALSE" ImageUrl="/_layouts/images/stdm.png" Description="A site for meetings that track status or make decisions. It provides lists for creating tasks, storing documents, and recording decisions." DisplayCategory="Meetings" SupportsMultilingualUI="FALSE" >    </Configuration>
        <Configuration ID="3" Title="Social Meeting Workspace" Hidden="FALSE" ImageUrl="/_layouts/images/stsm.png" Description="A site to plan social occasions. It provides lists for tracking attendees, providing directions, and storing pictures of the event." DisplayCategory="Meetings" SupportsMultilingualUI="FALSE" >    </Configuration>
        <Configuration ID="4" Title="Multipage Meeting Workspace" Hidden="FALSE" ImageUrl="/_layouts/images/stmm.png" Description="A site to plan, organize, and capture the results of a meeting. It provides lists for managing the agenda and meeting attendees in addition to two blank pages for you to customize based on your requirements." DisplayCategory="Meetings" SupportsMultilingualUI="FALSE" >    </Configuration>
     </Template>
     <Template Name="CENTRALADMIN" ID="3">
        <Configuration ID="0" Title="Central Admin Site" Hidden="TRUE" ImageUrl="" Description="A site for central administration. It provides Web pages and links for application and operations management." >   </Configuration>
     </Template>
     <Template Name="WIKI" ID="4">
        <Configuration ID="0" Title="Wiki Site" Hidden="TRUE" ImageUrl="/_layouts/images/wikiprev.png" Description="A site for a community to brainstorm and share ideas. It provides Web pages that can be quickly edited to record information and then linked together through keywords" DisplayCategory="Collaboration" >    </Configuration>
     </Template>
     <Template Name="BLOG" ID="9">
        <Configuration ID="0" Title="Blog" Hidden="FALSE" ImageUrl="/_layouts/images/stbg.png" Description="A site for a person or team to post ideas, observations, and expertise that site visitors can comment on." DisplayCategory="Collaboration" SupportsMultilingualUI="FALSE" >    </Configuration>
     </Template>
     <Template Name="SGS" SetupPath="SiteTemplates\sgs" ID="15">
        <Configuration ID="0" Title="Group Work Site" Hidden="FALSE" ImageUrl="/_layouts/images/stgb.png" Description="This template provides a groupware solution that enables teams to create, organize, and share information quickly and easily. It includes Group Calendar, Circulation, Phone-Call Memo, the Document Library and the other basic lists." DisplayCategory="Collaboration" >    </Configuration>
     </Template>
     <Template Name="TENANTADMIN" SetupPath="SiteTemplates\tenantadmin" ID="16">
        <Configuration ID="0" Title="Tenant Admin Site" Hidden="TRUE" ImageUrl="" Description="A site for tenant administration. It provides Web pages and links for self-serve administration." >   </Configuration>
     </Template>
    </Templates>








