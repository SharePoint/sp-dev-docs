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
ms.assetid: f3c0c837-6d70-40e9-8d8a-e2064c5dad83
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]( "Copy code hover")
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
<td align="left"># DocumentTemplates Element (Site)</td>
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

Contains the collection of document library templates that are available
for creating document libraries. This collection is listed in the <span
class="ui">Template Type</span> drop-down list box on the <span
class="ui">New Document Library</span> page.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;DocumentTemplates&gt;
&lt;/DocumentTemplates&gt;</code></pre></td>
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
<td align="left"><p><a href="documenttemplate-element-site.htm">DocumentTemplate</a></p></td>
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
<td align="left"><p><a href="project-element-site.htm">Project</a></p></td>
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

The following excerpt from the
[Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx)
file for the standard SharePoint Foundation site definition (<span
class="keyword">STS</span>) defines the document templates that are
available by default.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <DocumentTemplates>
        <DocumentTemplate Path="STS" Name="" DisplayName="$Resources:core,doctemp_None;" Type="100" Default="FALSE" Description="$Resources:core,doctemp_None_Desc;" />
        <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_Word97;" Type="101" Description="$Resources:core,doctemp_Word97_Desc;">
          <DocumentTemplateFiles>
            <DocumentTemplateFile Name="doctemp\word\wdtmpl.doc" TargetName="Forms/template.doc" Default="TRUE" />
          </DocumentTemplateFiles>
        </DocumentTemplate>
        <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_Excel97;" Type="103" Description="$Resources:core,doctemp_Excel97_Desc;">
          <DocumentTemplateFiles>
            <DocumentTemplateFile Name="doctemp\xl\xltmpl.xls" TargetName="Forms/template.xls" Default="TRUE" />
          </DocumentTemplateFiles>
        </DocumentTemplate>
        <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_Powerpoint97;" Type="104" Description="$Resources:core,doctemp_Powerpoint97_Desc;">
          <DocumentTemplateFiles>
            <DocumentTemplateFile Name="doctemp\ppt\pptmpl.pot" TargetName="Forms/template.pot" Default="TRUE" />
          </DocumentTemplateFiles>
        </DocumentTemplate>
        <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_Word;" Type="121" Default="TRUE" Description="$Resources:core,doctemp_Word_Desc;">
          <DocumentTemplateFiles>
            <DocumentTemplateFile Name="doctemp\word\wdtmpl.dotx" TargetName="Forms/template.dotx" Default="TRUE" />
          </DocumentTemplateFiles>
        </DocumentTemplate>
        <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_Excel;" Type="122" Description="$Resources:core,doctemp_Excel_Desc;">
          <DocumentTemplateFiles>
            <DocumentTemplateFile Name="doctemp\xl\xltmpl.xlsx" TargetName="Forms/template.xlsx" Default="TRUE" />
          </DocumentTemplateFiles>
        </DocumentTemplate>
        <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_Powerpoint;" Type="123" Description="$Resources:core,doctemp_Powerpoint_Desc;">
          <DocumentTemplateFiles>
            <DocumentTemplateFile Name="doctemp\ppt\pptmpl.pptx" TargetName="Forms/template.pptx" Default="TRUE" />
          </DocumentTemplateFiles>
        </DocumentTemplate>
        <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_OneNote;" Type="111" Description="$Resources:core,doctemp_OneNote_Desc;">
          <DocumentTemplateFiles>
            <DocumentTemplateFile Name="doctemp\onenote\template.onepkg" TargetName="Forms/template.onepkg" Default="TRUE" />
          </DocumentTemplateFiles>
        </DocumentTemplate>
        <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_FP;" Type="102" Description="$Resources:core,doctemp_FP_Desc;">
          <DocumentTemplateFiles>
            <DocumentTemplateFile Name="doctemp\fp\fptmpl.htm" TargetName="Forms/template.htm" Default="TRUE" />
          </DocumentTemplateFiles>
        </DocumentTemplate>
        <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_BasicPage;" Type="105" Description="$Resources:core,doctemp_BasicPage_Desc;">
          <DocumentTemplateFiles>
            <DocumentTemplateFile Name="doctemp\blankpgs\_basicpage.htm" TargetName="Forms/_basicpage.htm" Default="TRUE" />
          </DocumentTemplateFiles>
        </DocumentTemplate>
        <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_WebPartPage;" Type="106" Description="$Resources:core,doctemp_WebPartPage_Desc;">
          <DocumentTemplateFiles>
            <DocumentTemplateFile Name="doctemp\smartpgs\_webpartpage.htm" TargetName="Forms/_webpartpage.htm" Default="TRUE" />
          </DocumentTemplateFiles>
        </DocumentTemplate>
        <DocumentTemplate XMLForm="TRUE" Path="STS" DisplayName="$Resources:core,doctemp_BlankForm;" Type="1000" Default="TRUE" Description="$Resources:core,doctemp_BlankForm_Desc;">
          <DocumentTemplateFiles>
            <DocumentTemplateFile Name="doctemp\xmlforms\blank\template.xml" TargetName="Forms/template.xml" Default="TRUE" />
          </DocumentTemplateFiles>
        </DocumentTemplate>
      </DocumentTemplates>








